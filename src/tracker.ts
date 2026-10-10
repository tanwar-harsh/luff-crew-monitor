import { existsSync } from 'node:fs'
import { open, readdir, readFile, stat } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'

import { applyProgress, cleanTasks, pendingTasks, viewFlow, visibleRuns } from './flow.ts'
import { clip, normalize } from './format.ts'
import { findProjectDir, listSessions, newestSessionAnywhere, subagentsDir } from './paths.ts'
import type { SessionFile } from './paths.ts'
import { contextWindowOf, costOf, tokensOf } from './pricing.ts'
import type { Usage } from './pricing.ts'
import { JsonlTail, blocksOf, parseLines, taskNotifications, textOf, timeOf } from './transcript.ts'
import type { TranscriptLine } from './transcript.ts'
import type { AgentRun, Flow, ProgressInput, RunStatus, SessionInfo, Snapshot, StepReport, Totals } from './types.ts'
import { VERSION } from './version.ts'

/** Tools this server exposes, under whatever prefix the client gives them. */
export function isOwnTool(name: unknown, kind: 'progress' | 'step'): boolean {
  return typeof name === 'string' && /^mcp__.*luff[-_]?crew/i.test(name) && name.endsWith(`__${kind}`)
}

const AGENT_TOOLS = new Set(['Agent', 'Task'])

/**
 * The main transcript is mostly conversation; only these lines matter here.
 * Skipping the rest before JSON.parse keeps polls of long sessions cheap.
 */
export const mainLineFilter = (raw: string): boolean =>
  raw.includes('"tool_use"') || raw.includes('"tool_result"') || raw.includes('task-notification') || /"isSidechain":\s*true/.test(raw)

/** After the last message ends its turn, how long a run may stay quiet before it counts as done. */
const IDLE_DONE_MS = 20_000

/** Stable JSON for comparing tool inputs regardless of key order. */
export function stableJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>
    return `{${Object.keys(obj)
      .filter(k => obj[k] !== undefined)
      .sort()
      .map(k => `${JSON.stringify(k)}:${stableJson(obj[k])}`)
      .join(',')}}`
  }
  return JSON.stringify(value) ?? 'null'
}

/**
 * Identity of a progress call: the server sees validated arguments, the
 * transcript sees what the model wrote, so both go through the same cleanup.
 */
export function progressKey(input: ProgressInput | undefined): string {
  const i = input ?? {}
  return stableJson({
    title: i.title?.trim() || undefined,
    total: typeof i.total === 'number' ? Math.round(i.total) : undefined,
    done: typeof i.done === 'number' ? Math.round(i.done) : undefined,
    phase: i.phase,
    finished: i.finished === true ? true : undefined,
    tasks: cleanTasks(i.tasks),
  })
}

interface Spawn {
  toolUseId: string
  description: string
  type: string
  model?: string
  at: number
  background: boolean
  agentId?: string
  /** Summary the Agent tool returns for a finished foreground run. */
  result?: { model?: string; usage?: Usage; durationMs?: number }
}

interface Completion {
  status: Exclude<RunStatus, 'running'>
  failure?: string
  at: number
}

interface AgentMeta {
  agentType?: string
  description?: string
  toolUseId?: string
  spawnDepth?: number
  requestShape?: string
}

interface AgentState {
  id: string
  tail?: JsonlTail
  meta?: AgentMeta | undefined
  metaChecked: number
  metaCheckedAt: number
  /** Usage per model request, keyed by message id: streamed blocks repeat one message. */
  requests: Map<string, { model: string; usage: Usage }>
  model: string
  effort?: string
  lastStop?: string | null
  firstAt?: number
  lastAt: number
  contextTokens: number
  firstPrompt?: string
  step?: StepReport | undefined
}

export type FollowMode =
  /** One fixed transcript (the statusline knows its own). */
  | { kind: 'transcript'; path: string }
  /** The live session of one project folder (the MCP server). */
  | { kind: 'project'; cwd: string; preferSessionId?: string }
  /** Whatever session was written last, anywhere (the standalone dashboard). */
  | { kind: 'anywhere' }

export interface TrackerOptions {
  follow: FollowMode
  stallMs?: number
  now?: () => number
}

/**
 * Rebuilds a session's crew from Claude Code transcripts: the main thread's
 * Agent calls and `progress` reports, plus each subagent's own transcript for
 * model, effort, tokens, cost and `step` reports. Call `poll()` on a timer.
 */
export class CrewTracker {
  private readonly follow: FollowMode
  private readonly stallMs: number
  private readonly now: () => number
  private readonly bornAt: number

  private session: SessionFile | null = null
  private cwd: string | undefined
  private projectDir: string | null = null
  private main: JsonlTail | null = null
  private polls = 0

  private spawns = new Map<string, Spawn>()
  private completions = new Map<string, Completion>()
  private agents = new Map<string, AgentState>()
  private flowCalls: Array<{ id: string; at: number; input: ProgressInput }> = []
  private pending: Array<{ at: number; input: ProgressInput; key: string }> = []
  private dismissedAt = 0

  constructor(opts: TrackerOptions) {
    this.follow = opts.follow
    this.stallMs = opts.stallMs ?? 30 * 60_000
    this.now = opts.now ?? Date.now
    this.bornAt = this.now()
    if (opts.follow.kind === 'project') this.cwd = opts.follow.cwd
  }

  get sessionInfo(): SessionInfo | null {
    if (!this.session) return null
    const info: SessionInfo = { id: this.session.id, projectDir: this.session.projectDir, transcript: this.session.path }
    if (this.cwd) info.cwd = this.cwd
    return info
  }

  /** Reads whatever the transcripts gained since the last call. True when anything changed. */
  async poll(): Promise<boolean> {
    this.polls++
    let changed = await this.pickSession()
    if (!this.session || !this.main) return changed

    const { lines, reset } = await this.main.read()
    if (reset) {
      this.clearSessionState()
      changed = true
    }
    for (const line of lines) this.onMainLine(line)
    if (lines.length) changed = true

    if (await this.pollAgents()) changed = true
    return changed
  }

  /** Records a `progress` call the server received directly, before its transcript line lands. */
  noteProgress(input: ProgressInput): void {
    this.pending.push({ at: this.now(), input, key: progressKey(input) })
  }

  /** Points the tracker at the session whose transcript holds this `progress` call, if it is not the current one. */
  async pinByProgressCall(input: ProgressInput): Promise<boolean> {
    if (this.follow.kind !== 'project') return false
    const dir = this.projectDir ?? (await findProjectDir(this.follow.cwd))
    if (!dir) return false
    const want = progressKey(input)
    // The current session already holds the call: it is the right one, keep it.
    if (this.session && (await containsProgressCall(this.session.path, want))) return false
    const candidates = (await listSessions(dir)).slice(0, 6)
    const matches: SessionFile[] = []
    for (const s of candidates) {
      if (s.id === this.session?.id) continue
      if (this.now() - s.mtimeMs > 10 * 60_000) continue
      if (await containsProgressCall(s.path, want)) matches.push(s)
    }
    // Pin only on an unambiguous match: several sessions with the same call prove nothing.
    const [only] = matches
    if (matches.length !== 1 || !only) return false
    this.switchTo(only)
    return true
  }

  /** Hides the current job's bar in views until another progress call arrives. */
  dismissFlow(): void {
    this.dismissedAt = this.now()
  }

  snapshot(lang: 'en' | 'ru'): Snapshot {
    const now = this.now()
    const flow = this.currentFlow()
    const runs = visibleRuns(flow, this.runs(now))
    const shownFlow = flow && flow.updatedAt > this.dismissedAt ? flow : null
    return {
      version: VERSION,
      now,
      lang,
      session: this.sessionInfo,
      flow: viewFlow(shownFlow, runs),
      agents: runs,
      planned: pendingTasks(shownFlow, runs),
      totals: totalsOf(runs, now),
    }
  }

  // ---------------------------------------------------------------------------
  // Session selection

  private async pickSession(): Promise<boolean> {
    const f = this.follow
    if (f.kind === 'transcript') {
      if (this.session) return false
      if (!existsSync(f.path)) return false
      const s = await stat(f.path)
      this.switchTo({ id: basename(f.path, '.jsonl'), path: f.path, projectDir: dirname(f.path), mtimeMs: s.mtimeMs, birthtimeMs: s.birthtimeMs })
      return true
    }
    // Listing folders every second is wasteful; every third poll is plenty.
    if (this.session && this.polls % 3 !== 1) return false

    let newest: SessionFile | null
    if (f.kind === 'project') {
      this.projectDir ??= await findProjectDir(f.cwd)
      if (!this.projectDir) return false
      const all = await listSessions(this.projectDir)
      if (!this.session && f.preferSessionId) {
        const preferred = all.find(s => s.id === f.preferSessionId)
        if (preferred) {
          this.switchTo(preferred)
          return true
        }
      }
      newest = all[0] ?? null
    } else {
      newest = await newestSessionAnywhere()
    }
    if (!newest) return false
    if (!this.session) {
      this.switchTo(newest)
      return true
    }
    if (newest.id === this.session.id) return false

    // Switch when the current session went quiet, or a session born after us
    // (a /clear, a new conversation) is now the active one.
    const current = this.main?.mtimeMs ?? this.session.mtimeMs
    const quiet = this.now() - current > 60_000
    const bornLater = newest.birthtimeMs > this.bornAt && newest.mtimeMs > current
    if (newest.mtimeMs > current && (quiet || bornLater)) {
      this.switchTo(newest)
      return true
    }
    return false
  }

  private switchTo(s: SessionFile): void {
    this.session = s
    this.main = new JsonlTail(s.path, mainLineFilter)
    this.clearSessionState()
  }

  private clearSessionState(): void {
    this.spawns.clear()
    this.completions.clear()
    this.agents.clear()
    this.flowCalls = []
    // Direct calls stay: they belong to whichever session turns out to be live.
    this.dismissedAt = 0
  }

  // ---------------------------------------------------------------------------
  // Main thread

  private onMainLine(line: TranscriptLine): void {
    const at = timeOf(line, this.now())
    if (!this.cwd && line.cwd) this.cwd = line.cwd

    // Older Claude Code versions wrote subagent turns inline, marked as sidechain.
    if (line.isSidechain && line.agentId) {
      this.onAgentLine(this.agentState(line.agentId), line)
      return
    }

    if (line.type === 'assistant') {
      for (const b of blocksOf(line)) {
        if (b.type !== 'tool_use' || !b.id) continue
        const input = (b.input ?? {}) as Record<string, unknown>
        if (AGENT_TOOLS.has(b.name ?? '')) {
          const spawn: Spawn = {
            toolUseId: b.id,
            description: String(input.description ?? '').trim(),
            type: String(input.subagent_type ?? 'general-purpose'),
            at,
            background: input.run_in_background === true,
          }
          if (typeof input.model === 'string') spawn.model = input.model
          this.spawns.set(b.id, spawn)
        } else if (isOwnTool(b.name, 'progress')) {
          this.flowCalls.push({ id: b.id, at, input: input as ProgressInput })
        }
      }
    }

    if (line.type === 'user') {
      for (const b of blocksOf(line)) {
        if (b.type !== 'tool_result' || !b.tool_use_id) continue
        const spawn = this.spawns.get(b.tool_use_id)
        if (!spawn) continue
        const r = (line.toolUseResult && typeof line.toolUseResult === 'object' ? line.toolUseResult : {}) as Record<string, unknown>
        if (typeof r.agentId === 'string') spawn.agentId = r.agentId
        if (r.status === 'async_launched') {
          spawn.background = true
          continue
        }
        if (b.is_error) {
          const failure = /interrupt|cancel|abort/i.test(textOf(b.content)) ? 'killed' : 'error'
          this.completions.set(b.tool_use_id, { status: 'failed', failure, at })
          continue
        }
        this.completions.set(b.tool_use_id, { status: 'done', at })
        const result: NonNullable<Spawn['result']> = {}
        if (typeof r.resolvedModel === 'string') result.model = r.resolvedModel
        if (r.usage && typeof r.usage === 'object') result.usage = r.usage as Usage
        if (typeof r.totalDurationMs === 'number') result.durationMs = r.totalDurationMs
        spawn.result = result
      }
    }

    // Background runs report their end through task notifications, wherever they land.
    const text = line.type === 'queue-operation' || line.type === 'user' || line.type === 'system' ? textOf(line.content ?? line.message?.content) : ''
    if (text.includes('<task-notification>')) {
      for (const n of taskNotifications(text)) {
        const status = n.status.toLowerCase()
        const completion: Completion =
          status === 'completed' || status === 'done' || status === 'success'
            ? { status: 'done', at }
            : { status: 'failed', failure: /kill|stop|cancel/.test(status) ? 'killed' : 'error', at }
        if (status === 'running' || status === 'pending') continue
        this.completions.set(n.taskId, completion)
        if (n.toolUseId) this.completions.set(n.toolUseId, completion)
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Subagents

  private agentState(id: string): AgentState {
    let a = this.agents.get(id)
    if (!a) {
      a = { id, metaChecked: 0, metaCheckedAt: 0, requests: new Map(), model: '', lastAt: 0, contextTokens: 0 }
      this.agents.set(id, a)
    }
    return a
  }

  private async pollAgents(): Promise<boolean> {
    if (!this.session) return false
    const dir = subagentsDir(this.session.projectDir, this.session.id)
    let names: string[] = []
    try {
      names = await readdir(dir)
    } catch {
      return false
    }
    let changed = false
    for (const name of names) {
      const m = /^agent-(.+)\.jsonl$/.exec(name)
      if (!m?.[1]) continue
      const a = this.agentState(m[1])
      a.tail ??= new JsonlTail(join(dir, name))
      if (!a.meta && a.metaChecked < 300 && this.now() - a.metaCheckedAt >= 1000) {
        a.metaChecked++
        a.metaCheckedAt = this.now()
        a.meta = await readMeta(join(dir, `agent-${m[1]}.meta.json`))
        if (a.meta) changed = true
      }
      const { lines, reset } = await a.tail.read()
      if (reset) {
        a.requests.clear()
        a.step = undefined
      }
      for (const line of lines) this.onAgentLine(a, line)
      if (lines.length) changed = true
    }
    return changed
  }

  private onAgentLine(a: AgentState, line: TranscriptLine): void {
    const at = timeOf(line, this.now())
    a.firstAt ??= at
    a.lastAt = Math.max(a.lastAt, at)

    if (line.type === 'user' && a.firstPrompt === undefined) {
      const text = textOf(line.message?.content).trim()
      if (text) a.firstPrompt = text
    }
    if (line.type !== 'assistant' || !line.message) return

    const msg = line.message
    if (msg.model && msg.model !== '<synthetic>') a.model = msg.model
    if (typeof line.effort === 'string' && line.effort) a.effort = line.effort
    if (msg.stop_reason !== undefined) a.lastStop = msg.stop_reason

    if (msg.usage && a.model) {
      const usage = msg.usage as Usage
      // Later blocks of one message carry the final output count: keep the last.
      a.requests.set(msg.id ?? line.uuid ?? `${at}`, { model: a.model, usage })
      a.contextTokens = tokensOf(usage)
    }

    for (const b of blocksOf(line)) {
      if (b.type === 'tool_use' && isOwnTool(b.name, 'step')) a.step = mergeStep(a.step, b.input)
    }
  }

  // ---------------------------------------------------------------------------
  // Views

  /** Every run of the session, oldest first. */
  runs(now = this.now()): AgentRun[] {
    const out: AgentRun[] = []
    const linked = new Set<string>()

    for (const a of this.agents.values()) {
      const toolUseId = a.meta?.toolUseId ?? [...this.spawns.values()].find(s => s.agentId === a.id)?.toolUseId
      const spawn = toolUseId ? this.spawns.get(toolUseId) : undefined
      if (toolUseId) linked.add(toolUseId)

      let tokens = 0
      let costUsd = 0
      for (const r of a.requests.values()) {
        tokens += tokensOf(r.usage)
        costUsd += costOf(r.model, r.usage)
      }
      const model = a.model || spawn?.result?.model || spawn?.model || ''
      const startedAt = Math.min(spawn?.at ?? Infinity, a.firstAt ?? Infinity, a.lastAt || Infinity)
      const completion = this.completions.get(a.id) ?? (toolUseId ? this.completions.get(toolUseId) : undefined)
      const { status, endedAt, failure } = this.statusOf(completion, a, now)

      const run: AgentRun = {
        id: a.id,
        type: a.meta?.agentType ?? spawn?.type ?? 'agent',
        description: a.meta?.description || spawn?.description || clip(firstLine(a.firstPrompt ?? ''), 60) || a.id,
        model,
        status,
        background: spawn?.background ?? a.meta?.requestShape === 'background',
        startedAt: Number.isFinite(startedAt) ? startedAt : now,
        lastActivityAt: a.lastAt || now,
        contextTokens: a.contextTokens,
        contextMax: contextWindowOf(model),
        tokens,
        costUsd,
        requests: a.requests.size,
        round: 1,
        depth: a.meta?.spawnDepth ?? 1,
      }
      if (toolUseId) run.toolUseId = toolUseId
      if (a.effort) run.effort = a.effort
      if (endedAt !== undefined) run.endedAt = endedAt
      if (failure) run.failure = failure
      if (a.step) run.step = a.step
      out.push(run)
    }

    // Launched runs whose transcript has not appeared (yet, or ever: older versions).
    for (const s of this.spawns.values()) {
      if (linked.has(s.toolUseId) || (s.agentId && this.agents.has(s.agentId))) continue
      const completion = this.completions.get(s.toolUseId) ?? (s.agentId ? this.completions.get(s.agentId) : undefined)
      const usage = s.result?.usage
      const model = s.result?.model ?? s.model ?? ''
      const stalled = !completion && now - s.at > this.stallMs
      const run: AgentRun = {
        id: s.agentId ?? s.toolUseId,
        toolUseId: s.toolUseId,
        type: s.type,
        description: s.description || s.type,
        model,
        status: completion?.status ?? (stalled ? 'failed' : 'running'),
        background: s.background,
        startedAt: s.at,
        lastActivityAt: completion?.at ?? s.at,
        contextTokens: usage ? tokensOf(usage) : 0,
        contextMax: contextWindowOf(model),
        tokens: usage ? tokensOf(usage) : 0,
        costUsd: usage && model ? costOf(model, usage) : 0,
        requests: 0,
        round: 1,
        depth: 1,
      }
      if (completion) run.endedAt = s.result?.durationMs ? s.at + s.result.durationMs : completion.at
      if (completion?.failure) run.failure = completion.failure
      else if (stalled) {
        run.failure = 'stalled'
        run.endedAt = s.at
      }
      out.push(run)
    }

    out.sort((x, y) => x.startedAt - y.startedAt)
    const seen = new Map<string, number>()
    for (const r of out) {
      const key = normalize(r.description)
      const n = (seen.get(key) ?? 0) + 1
      seen.set(key, n)
      r.round = n
    }
    return out
  }

  private statusOf(c: Completion | undefined, a: AgentState, now: number): { status: RunStatus; endedAt?: number; failure?: string } {
    // A finished run that was resumed (SendMessage) shows activity after its end.
    const resumed = c && a.lastAt > c.at + 5_000 && a.lastStop !== 'end_turn'
    if (c && !resumed) {
      const out: { status: RunStatus; endedAt?: number; failure?: string } = { status: c.status, endedAt: Math.max(c.at, a.lastAt) }
      if (c.failure) out.failure = c.failure
      return out
    }
    const quietFor = now - Math.max(a.lastAt, a.tail?.mtimeMs ?? 0)
    if (a.lastStop === 'end_turn' && quietFor > IDLE_DONE_MS) return { status: 'done', endedAt: a.lastAt }
    if (a.lastAt && quietFor > this.stallMs) return { status: 'failed', endedAt: a.lastAt, failure: 'stalled' }
    return { status: 'running' }
  }

  /** The job as reported through `progress`, from transcript lines plus calls not yet written there. */
  currentFlow(): Flow | null {
    const seen = new Set(this.flowCalls.map(c => progressKey(c.input)))
    // A direct call is redundant once its transcript line shows up.
    this.pending = this.pending.filter(p => !seen.has(p.key) && this.now() - p.at < 5 * 60_000)
    const calls = [...this.flowCalls, ...this.pending].sort((x, y) => x.at - y.at)
    let flow: Flow | null = null
    for (const c of calls) flow = applyProgress(flow, c.input, c.at)
    return flow
  }
}

function totalsOf(runs: AgentRun[], now: number): Totals {
  const t: Totals = { costUsd: 0, tokens: 0, timeMs: 0, running: 0, done: 0, failed: 0 }
  if (!runs.length) return t
  let start = Infinity
  let end = 0
  for (const r of runs) {
    t.costUsd += r.costUsd
    t.tokens += r.tokens
    t[r.status === 'running' ? 'running' : r.status === 'done' ? 'done' : 'failed']++
    start = Math.min(start, r.startedAt)
    end = Math.max(end, r.endedAt ?? Math.max(now, r.startedAt))
  }
  t.timeMs = Math.max(0, end - start)
  return t
}

function mergeStep(prev: StepReport | undefined, input: unknown): StepReport {
  const i = (input ?? {}) as { done?: unknown; total?: unknown; note?: unknown }
  const int = (v: unknown): number | undefined => (typeof v === 'number' && Number.isFinite(v) ? Math.max(0, Math.round(v)) : undefined)
  const total = int(i.total) ?? prev?.total ?? 0
  const done = int(i.done) ?? prev?.done ?? 0
  const out: StepReport = { total, done: total ? Math.min(total, done) : done }
  const note = typeof i.note === 'string' ? i.note.trim() : ''
  if (note) out.note = clip(note, 80)
  return out
}

async function readMeta(path: string): Promise<AgentMeta | undefined> {
  try {
    const v: unknown = JSON.parse(await readFile(path, 'utf8'))
    return v && typeof v === 'object' ? (v as AgentMeta) : undefined
  } catch {
    return undefined
  }
}

const firstLine = (s: string): string => s.split('\n').find(l => l.trim())?.trim() ?? ''

/** Looks for a `progress` call with this exact input in the last 512 KB of a transcript. */
async function containsProgressCall(path: string, want: string): Promise<boolean> {
  try {
    const fh = await open(path, 'r')
    try {
      const { size } = await fh.stat()
      const len = Math.min(size, 512 * 1024)
      const buf = Buffer.alloc(len)
      await fh.read(buf, 0, len, size - len)
      for (const line of parseLines(buf.toString('utf8'))) {
        for (const b of blocksOf(line)) {
          if (b.type === 'tool_use' && isOwnTool(b.name, 'progress') && progressKey(b.input as ProgressInput) === want) return true
        }
      }
    } finally {
      await fh.close()
    }
  } catch {
    // Unreadable: not a match.
  }
  return false
}
