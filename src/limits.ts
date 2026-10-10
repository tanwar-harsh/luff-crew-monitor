import { mkdirSync, readFileSync, renameSync, statSync, unlinkSync, writeFileSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

import { appDir, projectsDir } from './paths.ts'
import { costOf, tokensOf } from './pricing.ts'
import type { Usage } from './pricing.ts'
import { JsonlTail, timeOf } from './transcript.ts'
import type { LimitsView, LimitWindowView } from './types.ts'

export const FIVE_HOURS_MS = 5 * 3_600_000
export const SEVEN_DAYS_MS = 7 * 86_400_000

/** One window as Claude Code's status line reports it. */
interface RawWindow {
  used_percentage?: unknown
  /** Unix epoch seconds. */
  resets_at?: unknown
}

/** The `rate_limits` object Claude Code passes to status line commands (Claude.ai subscribers only). */
export interface RawRateLimits {
  five_hour?: RawWindow | null
  seven_day?: RawWindow | null
}

interface PlanWindow {
  usedPct: number
  /** Epoch ms. */
  resetsAt: number
}

/** What `~/.luff-crew/limits.json` holds: the latest plan limits seen by the status line. */
export interface PlanLimits {
  /** Epoch ms of the status line call that reported them. */
  reportedAt: number
  fiveHour?: PlanWindow
  sevenDay?: PlanWindow
}

export const limitsPath = (): string => join(appDir(), 'limits.json')

function planWindow(raw: RawWindow | null | undefined): PlanWindow | undefined {
  const pct = raw?.used_percentage == null ? NaN : Number(raw.used_percentage)
  const resets = Number(raw?.resets_at)
  if (!raw || !Number.isFinite(pct) || !Number.isFinite(resets) || resets <= 0) return undefined
  // Seconds per the status line docs; tolerate milliseconds too.
  return { usedPct: Math.max(0, pct), resetsAt: resets > 1e12 ? resets : resets * 1000 }
}

/** Turns the status line's `rate_limits` into what we store, or null when it carries no window. */
export function parseRateLimits(raw: unknown, now = Date.now()): PlanLimits | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as RawRateLimits
  const fiveHour = planWindow(r.five_hour)
  const sevenDay = planWindow(r.seven_day)
  if (!fiveHour && !sevenDay) return null
  return { reportedAt: now, ...(fiveHour ? { fiveHour } : {}), ...(sevenDay ? { sevenDay } : {}) }
}

const REWRITE_MS = 60_000

/**
 * Saves the plan limits from a status line call. The status line runs after
 * every reply, so the file is only rewritten when a figure changed or the
 * stored one is a minute old. Never throws.
 */
export function savePlanLimits(raw: unknown, now = Date.now()): boolean {
  const next = parseRateLimits(raw, now)
  if (!next) return false
  try {
    const prev = readPlanLimitsFile()
    const same = (a?: PlanWindow, b?: PlanWindow): boolean => a?.usedPct === b?.usedPct && a?.resetsAt === b?.resetsAt
    if (prev && same(prev.fiveHour, next.fiveHour) && same(prev.sevenDay, next.sevenDay) && now - prev.reportedAt < REWRITE_MS) return false
    mkdirSync(appDir(), { recursive: true })
    // Write then rename, so a reader never sees half a file.
    const tmp = `${limitsPath()}.${process.pid}.tmp`
    try {
      writeFileSync(tmp, JSON.stringify(next) + '\n')
      renameSync(tmp, limitsPath())
    } catch (e) {
      try {
        unlinkSync(tmp)
      } catch {
        // Nothing to clean up.
      }
      throw e
    }
    return true
  } catch {
    return false
  }
}

function readPlanLimitsFile(): PlanLimits | null {
  try {
    const v = JSON.parse(readFileSync(limitsPath(), 'utf8')) as PlanLimits
    return v && typeof v.reportedAt === 'number' ? v : null
  } catch {
    return null
  }
}

let cache: { mtimeMs: number; value: PlanLimits | null } | null = null

/** The stored plan limits, re-read only when the file changes. */
export function readPlanLimits(): PlanLimits | null {
  let mtimeMs: number
  try {
    mtimeMs = statSync(limitsPath()).mtimeMs
  } catch {
    cache = null
    return null
  }
  if (cache?.mtimeMs !== mtimeMs) cache = { mtimeMs, value: readPlanLimitsFile() }
  return cache.value
}

interface Request {
  at: number
  tokens: number
  costUsd: number
}

const SESSION_FILE = /\.jsonl$/i
const RESCAN_MS = 10_000

/**
 * Totals every model request in the local transcripts of the last seven days,
 * across all projects and their subagents. This is the "what did I spend"
 * side of the limits panel; the plan percentages come from Claude Code itself.
 */
export class UsageScanner {
  private readonly now: () => number
  private readonly root: () => string
  private tails = new Map<string, JsonlTail>()
  /** Keyed by message id: streamed blocks of one reply repeat it, the last one has the final counts. */
  private requests = new Map<string, Request>()
  private lastScan = 0
  private scanning: Promise<boolean> | null = null
  private queued: Promise<boolean> | null = null

  constructor(opts: { now?: () => number; root?: () => string } = {}) {
    this.now = opts.now ?? Date.now
    this.root = opts.root ?? projectsDir
  }

  /** Reads what the transcripts gained. Throttled unless `force`. True when totals changed. */
  poll(force = false): Promise<boolean> {
    if (!force && this.now() - this.lastScan < RESCAN_MS) return Promise.resolve(false)
    if (this.scanning) {
      if (!force) return this.scanning
      // A forced poll must see files written after the running scan started: queue one fresh scan behind it.
      this.queued ??= this.scanning
        .catch(() => false)
        .then(() => {
          this.queued = null
          return this.start()
        })
      return this.queued
    }
    return this.start()
  }

  private start(): Promise<boolean> {
    const p: Promise<boolean> = this.scan().finally(() => {
      if (this.scanning === p) this.scanning = null
    })
    this.scanning = p
    return p
  }

  private async scan(): Promise<boolean> {
    const now = this.now()
    this.lastScan = now
    const cutoff = now - SEVEN_DAYS_MS
    let changed = false
    for (const path of await this.files(cutoff)) {
      let tail = this.tails.get(path)
      if (!tail) {
        tail = new JsonlTail(path, raw => raw.includes('"usage"'))
        this.tails.set(path, tail)
      }
      const { lines, reset } = await tail.read()
      if (reset) changed = true
      for (const line of lines) {
        const msg = line.message
        if (line.type !== 'assistant' || !msg?.usage || !msg.model || msg.model === '<synthetic>') continue
        const at = timeOf(line, now)
        if (at < cutoff) continue
        const usage = msg.usage as Usage
        const key = msg.id ?? line.uuid ?? `${path}:${at}`
        this.requests.set(key, { at, tokens: tokensOf(usage), costUsd: costOf(msg.model, usage) })
        changed = true
      }
    }
    for (const [key, r] of this.requests) if (r.at < cutoff) this.requests.delete(key)
    return changed
  }

  /** Transcripts (sessions and their subagents) written to since `cutoff`. */
  private async files(cutoff: number): Promise<string[]> {
    const out: string[] = []
    const consider = async (path: string): Promise<void> => {
      try {
        if ((await stat(path)).mtimeMs >= cutoff) out.push(path)
        else this.tails.delete(path)
      } catch {
        this.tails.delete(path)
      }
    }
    const list = async (dir: string): Promise<string[]> => {
      try {
        return await readdir(dir)
      } catch {
        return []
      }
    }
    for (const project of await list(this.root())) {
      const pdir = join(this.root(), project)
      for (const name of await list(pdir)) {
        const path = join(pdir, name)
        if (SESSION_FILE.test(name)) await consider(path)
        else {
          const sub = join(path, 'subagents')
          for (const agent of await list(sub)) if (SESSION_FILE.test(agent)) await consider(join(sub, agent))
        }
      }
    }
    return out
  }

  totals(since: number): { tokens: number; costUsd: number; requests: number } {
    let tokens = 0
    let costUsd = 0
    let requests = 0
    for (const r of this.requests.values()) {
      if (r.at < since) continue
      tokens += r.tokens
      costUsd += r.costUsd
      requests++
    }
    return { tokens, costUsd, requests }
  }
}

/**
 * The limits panel: plan percentages from Claude Code when it has reported
 * them, local totals for the same window either way. A window whose reset time
 * has passed starts over at 0% until Claude Code reports the next one.
 */
export function limitsView(plan: PlanLimits | null, usage: UsageScanner, now: number): LimitsView {
  const view = (w: PlanWindow | undefined, span: number): LimitWindowView => {
    const live = w && w.resetsAt > now ? w : undefined
    const since = live ? live.resetsAt - span : now - span
    return {
      usedPct: live ? live.usedPct : w ? 0 : null,
      resetsAt: live ? live.resetsAt : null,
      since,
      ...usage.totals(since),
    }
  }
  return {
    fiveHour: view(plan?.fiveHour, FIVE_HOURS_MS),
    sevenDay: view(plan?.sevenDay, SEVEN_DAYS_MS),
    reportedAt: plan?.reportedAt ?? null,
  }
}
