// Luff Crew as a Claude Code mod: a live crew panel and a job bar drawn inside
// Claude itself (desktop app, VS Code, terminal), fed straight from engine events.

import { atom, read, update } from 'claude-code'
import type { EngineInterface, Register } from 'claude-code'

import { applyProgress, cleanTasks, startsNewFlow } from '../src/flow.ts'
import { clip, fmtCost, fmtDuration, fmtTime, fmtTokens, normalize } from '../src/format.ts'
import { STRINGS } from '../src/i18n.ts'
import { contextWindowOf, costOf, modelLabel, tokensOf } from '../src/pricing.ts'
import type { ProgressInput } from '../src/types.ts'
import type { CrewFlow, CrewLimitWindow, CrewPanel, CrewRun, CrewTask, CrewTurn, CrewUsageBuckets } from '../types'
import {
  ACCENT,
  BAD,
  barSvg,
  ctxPercent,
  MASCOT_H,
  MASCOT_W,
  mascotSvg,
  meterColor,
  OK,
  progressOf,
  runMeta,
  runStats,
  SEG_H,
  segmentsSvg,
  statusColor,
  statusGlyph,
  stepText,
  STRIP_H,
  stripSvg,
  textBar,
  limitsShort,
  typeColor,
} from './draw.ts'

const PLUGIN = 'luff-crew-monitor'
const PANE = 'luff-crew'
const TOOL_PROGRESS = `mcp__${PLUGIN}__progress`
const TOOL_STEP = `mcp__${PLUGIN}__step`
const HOUR = 3_600_000
const FIVE_HOURS = 5 * HOUR
const SEVEN_DAYS = 7 * 24 * HOUR

const flowAtom = atom({ plugin: 'luff-crew-monitor', key: 'flow' } as const, null)
const runsAtom = atom({ plugin: 'luff-crew-monitor', key: 'runs' } as const, [])
const turnAtom = atom({ plugin: 'luff-crew-monitor', key: 'turn' } as const, null)
const webAtom = atom({ plugin: 'luff-crew-monitor', key: 'web' } as const, null)
const panelAtom = atom({ plugin: 'luff-crew-monitor', key: 'panel' } as const, {
  isCompact: false,
  isFinishedOpen: true,
  isLimitsOpen: true,
  hiddenAt: 0,
  autoOpenedFor: [],
})
const nowAtom = atom({ plugin: 'luff-crew-monitor', key: 'now' } as const, 0)
const limitsAtom = atom({ plugin: 'luff-crew-monitor', key: 'limits' } as const, { windows: [], measuredAt: 0 })
const usageAtom = atom({ plugin: 'luff-crew-monitor', key: 'usage' } as const, {})
const othersAtom = atom({ plugin: 'luff-crew-monitor', key: 'others' } as const, {})

type Lang = 'en' | 'ru'
let lang: Lang = 'en'
const s = () => STRINGS[lang]

// This session's own key in `$.store`, so concurrent sessions never overwrite each other.
let storeKey = ''

const PROTOCOL = `## Luff Crew (subagent progress)
The user watches subagents on the Luff Crew panel. When you split a job across subagents (the Agent tool):
1. After presenting the plan, call \`${TOOL_PROGRESS}\` with a short title, the tasks (each title EXACTLY equal to the Agent \`description\` you will use) and phase "delegate".
2. Each time you accept a finished task, call it with the new \`done\` count; switch \`phase\` to "review" while checking results.
3. When everything is finished, call it once with \`finished: true\`.
In each subagent's prompt, ask it to call \`${TOOL_STEP}\` right after reading its brief (done: 0, total: its plan in 3-8 steps) and again as each step finishes, loading it first with ToolSearch (\`select:${TOOL_STEP}\`) if it is deferred.
Skip all of this for work you do yourself without subagents.`

// ---------------------------------------------------------------------------
// Helpers

const isRussian = (v: unknown): boolean => typeof v === 'string' && /^(ru|russian|рус)/i.test(v.trim())

async function detectLang($: EngineInterface, option: unknown): Promise<Lang> {
  if (option === 'en' || option === 'ru') return option
  try {
    const settings = (await $.settings.read()) as { language?: unknown }
    if (typeof settings.language === 'string' && settings.language.trim()) return isRussian(settings.language) ? 'ru' : 'en'
  } catch {
    // No settings: fall through to the locale.
  }
  const locale = (await $.env.get('LC_ALL')) || (await $.env.get('LANG'))
  return isRussian(locale) ? 'ru' : 'en'
}

const failedWords = () => ({ error: s().error, killed: s().killed, stalled: s().stalled })

/** Runs on screen: a new job hides runs that ended before it began. */
const visible = (flow: CrewFlow | null, runs: CrewRun[]): CrewRun[] =>
  flow ? runs.filter(r => r.status === 'running' || (r.endedAt ?? r.startedAt) >= flow.startedAt) : runs

/** Planned tasks no run has picked up yet. */
function pending(flow: CrewFlow | null, runs: CrewRun[]): Array<CrewTask & { n: number }> {
  if (!flow || flow.finished) return []
  const started = new Set(runs.map(r => normalize(r.description)))
  return flow.tasks.map((t, i) => ({ ...t, n: i + 1 })).filter(t => !started.has(normalize(t.title)))
}

function totals(runs: CrewRun[], now: number) {
  let cost = 0
  let tokens = 0
  let start = Infinity
  let end = 0
  for (const r of runs) {
    cost += r.costUsd
    tokens += r.tokens
    start = Math.min(start, r.startedAt)
    end = Math.max(end, r.endedAt ?? Math.max(now, r.startedAt))
  }
  return { cost, tokens, time: runs.length ? end - start : 0 }
}

function flowLabel(f: CrewFlow, running: number): string {
  const phase = f.phase === 'plan' && running > 0 ? 'delegate' : f.phase
  if (f.finished) return s().phase.close
  if (phase === 'plan' || phase === 'design') return s().phase[phase]
  const count = f.total ? `${f.done}/${f.total}` : `${running} ${s().busy}`
  return `${phase === 'review' ? s().phase.review : s().phase.delegate} ${count}`
}

const flowRatio = (f: CrewFlow): number => (f.finished ? 1 : f.total ? f.done / f.total : 0)

function segments(f: CrewFlow, runs: CrewRun[]): Array<'done' | 'running' | 'todo'> {
  const total = f.finished ? Math.max(f.total, 1) : f.total
  const byTitle = new Map(runs.map(r => [normalize(r.description), r.status]))
  const inFlight = f.tasks.length ? f.tasks.filter(t => byTitle.get(normalize(t.title)) === 'running').length : runs.filter(r => r.status === 'running').length
  return Array.from({ length: total }, (_, i) => (f.finished || i < f.done ? 'done' : i < f.done + inFlight ? 'running' : 'todo'))
}

function sumBuckets(sources: CrewUsageBuckets[], since: number) {
  const out = { tokens: 0, costUsd: 0, requests: 0 }
  const first = Math.floor(since / HOUR)
  for (const b of sources)
    for (const [hour, v] of Object.entries(b)) {
      if (Number(hour) < first) continue
      out.tokens += v.tokens
      out.costUsd += v.costUsd
      out.requests += v.requests
    }
  return out
}

/** Other sessions' buckets from `$.store`, dropping entries older than a week. */
async function loadOthers($: EngineInterface): Promise<void> {
  const cutoff = Math.floor(((await $.clock.now()) - SEVEN_DAYS - HOUR) / HOUR)
  const merged: CrewUsageBuckets = {}
  for (const key of await $.store.keys()) {
    if (!key.startsWith('usage:') || key === storeKey) continue
    const value = (await $.store.get(key)) as CrewUsageBuckets | undefined
    let fresh = 0
    for (const [hour, v] of Object.entries(value ?? {})) {
      if (Number(hour) < cutoff) continue
      fresh++
      const m = (merged[hour] ??= { tokens: 0, costUsd: 0, requests: 0 })
      m.tokens += v.tokens
      m.costUsd += v.costUsd
      m.requests += v.requests
    }
    if (!fresh) await $.store.delete(key)
  }
  await update($, othersAtom, () => merged)
}

function toWindows(rateLimits: ReadonlyArray<{ kind: string; percentUsed: number; resetsAt?: string }>): CrewLimitWindow[] {
  return rateLimits.map(w => {
    const resetsAt = w.resetsAt ? Date.parse(w.resetsAt) : NaN
    return { kind: w.kind, percentUsed: w.percentUsed, resetsAt: Number.isFinite(resetsAt) ? resetsAt : 0 }
  })
}

async function togglePane($: EngineInterface): Promise<boolean> {
  if ((await $.ui.panes()).some(p => p.id === PANE)) {
    await $.ui.close({ id: PANE })
    return false
  }
  await update($, nowAtom, () => Date.now())
  await $.ui.open({ id: PANE, title: s().appName })
  return true
}

/** Opens the panel by itself once per job (and once for the session's first subagent). */
async function autoOpen($: EngineInterface, key: string): Promise<void> {
  const panel = await read($, panelAtom)
  if (panel.autoOpenedFor.includes(key)) return
  await update($, panelAtom, p => ({ ...p, autoOpenedFor: [...p.autoOpenedFor, key].slice(-20) }))
  if (!(await $.ui.panes()).some(p => p.id === PANE)) void $.ui.open({ id: PANE, title: s().appName })
}

// ---------------------------------------------------------------------------
// The main loop's turn: every prompt moves the bar, subagents or not.

/** `mcp__server__ctx_execute` → `ctx_execute`; built-in names stay. */
const shortTool = (name: string): string => name.split('__').pop() || name

const newTurn = (turnId: string, prompt: string, at: number): CrewTurn => ({
  turnId,
  prompt: clip(prompt.replace(/\s+/g, ' ').trim(), 120),
  status: 'running',
  startedAt: at,
  steps: 0,
  tools: 0,
  tokens: 0,
  costUsd: 0,
})

function turnWord(t: CrewTurn): string {
  return t.status === 'running' ? s().working : t.status === 'done' ? s().answered : s().stopped
}

function turnStats(t: CrewTurn, now: number): string {
  const time = fmtTime((t.endedAt ?? Math.max(now, t.startedAt)) - t.startedAt)
  const tool = t.status === 'running' && t.lastTool ? ` (${t.lastTool})` : ''
  return `${t.steps} ${s().steps} · ${t.tools} ${s().tools}${tool} · ${time} · ≈${fmtCost(t.costUsd)}`
}

/** One segment per model request (the last 24), the one in flight striped. */
function turnSegments(t: CrewTurn): Array<'done' | 'running'> {
  if (t.status !== 'running') return Array.from({ length: Math.max(1, Math.min(24, t.steps)) }, () => 'done' as const)
  return [...Array.from({ length: Math.min(23, t.steps) }, () => 'done' as const), 'running' as const]
}

/** A block sliding along the track while a turn runs; full once it ends. */
function pulseBar(t: CrewTurn, now: number, width: number): string {
  if (t.status !== 'running') return textBar(1, width)
  const block = Math.min(3, width)
  const pos = Math.floor((now - t.startedAt) / 1000) % (width - block + 1)
  return '▱'.repeat(pos) + '▰'.repeat(block) + '▱'.repeat(width - block - pos)
}

// ---------------------------------------------------------------------------
// The browser view: optional, started only by /agents-web or the panel's button.
// It is the package's own CLI dashboard (dist/luff-crew.mjs), following this
// session's transcript on localhost; it ends with the session or on request.

let stopWeb: (() => void) | null = null

async function findNode($: EngineInterface): Promise<string | null> {
  const works = async (bin: string): Promise<boolean> => {
    try {
      return (await $.process.run([bin, '--version'], { timeoutMs: 5000 })).exitCode === 0
    } catch {
      return false
    }
  }
  if (await works('node')) return 'node'
  const nvm = await $.env.get('NVM_BIN')
  if (nvm && (await works(`${nvm}/node`))) return `${nvm}/node`
  // Apps started from the Dock lack the shell's PATH: ask the login shell.
  try {
    const shell = (await $.env.get('SHELL')) || '/bin/sh'
    const { stdout } = await $.process.run([shell, '-ilc', 'command -v node'], { timeoutMs: 8000 })
    const found = stdout
      .split('\n')
      .map(l => l.trim())
      .reverse()
      .find(l => l.startsWith('/') && l.endsWith('/node'))
    if (found && (await works(found))) return found
  } catch {
    // No login shell: try the usual places.
  }
  for (const bin of ['/opt/homebrew/bin/node', '/usr/local/bin/node', '/usr/bin/node']) if (await works(bin)) return bin
  return null
}

async function openUrl($: EngineInterface, url: string): Promise<void> {
  for (const argv of [['open', url], ['xdg-open', url], ['cmd', '/c', 'start', '""', url]]) {
    try {
      if ((await $.process.run(argv, { timeoutMs: 5000 })).exitCode === 0) return
    } catch {
      // Not this platform's opener.
    }
  }
}

async function startWebView($: EngineInterface): Promise<string> {
  const cur = await read($, webAtom)
  if (cur?.status === 'running' && stopWeb) {
    await openUrl($, cur.url)
    return `${s().webAt}: ${cur.url}`
  }
  if (cur?.status === 'starting') return s().webStarting
  await update($, webAtom, () => ({ status: 'starting' as const, url: '', startedAt: Date.now() }))

  const node = await findNode($)
  if (!node) {
    await update($, webAtom, () => null)
    return 'The browser view needs Node.js 18.17 or newer, and none was found on PATH. Install Node.js, then run /agents-web again.'
  }
  const [cwd, sessionId] = await Promise.all([$.session.cwd(), $.session.id()])
  const argv = [node, `${$.plugin.root}/dist/luff-crew.mjs`, 'dashboard', '--project', cwd, ...(sessionId ? ['--session', sessionId] : [])]
  const child = $.process.spawn({ argv, env: { LUFF_CREW_LANG: lang } })

  let settle: (url: string | null) => void = () => {}
  const found = new Promise<string | null>(resolve => (settle = resolve))
  let isStopped = false
  stopWeb = () => {
    isStopped = true
    void child.return(undefined as never).catch(() => {})
  }
  void (async () => {
    let out = ''
    let errors = ''
    try {
      for await (const { stream, text } of child) {
        if (stream === 'stderr') errors = (errors + text).slice(-2000)
        out = (out + text).slice(-4000)
        const m = /dashboard:\s*(https?:\/\/\S+)/i.exec(out)
        if (m) {
          settle(m[1]!)
          await update($, webAtom, () => ({ status: 'running' as const, url: m[1]!, startedAt: Date.now() }))
          out = ''
        }
      }
    } catch (err) {
      errors ||= String(err)
    }
    settle(null)
    stopWeb = null
    await update($, webAtom, () => null).catch(() => {})
    if (!isStopped && errors.trim()) $.ui.log(`luff-crew: the browser view stopped: ${clip(errors.trim(), 300)}`, { to: 'debug' })
  })()

  const url = await Promise.race([found, $.clock.sleep(15_000).then(() => null)])
  if (url) return `${s().webAt}: ${url} (opened in your browser; /agents-web stop ends it)`
  stopWeb?.()
  return 'The browser view did not start. Run Claude Code with --debug for the reason, or start it by hand: luff-crew-monitor dashboard'
}

async function stopWebView($: EngineInterface): Promise<string> {
  const wasRunning = !!stopWeb
  stopWeb?.()
  stopWeb = null
  await update($, webAtom, () => null)
  return wasRunning ? 'Browser view stopped.' : 'No browser view is running.'
}

// ---------------------------------------------------------------------------

export const register: Register = (on, options) => {
  on('session.start', async ($, e, next) => {
    const started = await next(e)
    lang = await detectLang($, options.language)
    const at = await $.clock.now()
    storeKey = `usage:${at.toString(36)}${Math.random().toString(36).slice(2, 6)}`

    await $.tool.register({
      name: 'progress',
      isDeferred: false,
      description:
        'Report the progress of a multi-agent job to the Luff Crew panel and job bar. ' +
        'Call it after presenting the plan (title, tasks, phase "delegate"), each time a task is accepted (done), ' +
        'when switching phase or re-planning (tasks), and once at the end with finished: true. ' +
        'Omitted fields keep their previous value; a new title starts a new job.',
      inputSchema: {
        type: 'object',
        properties: {
          title: { type: 'string', description: 'Short name of the overall job, a few words.' },
          total: { type: 'integer', minimum: 0, description: 'Number of planned worker tasks; defaults to the number of tasks.' },
          done: { type: 'integer', minimum: 0, description: 'Number of tasks accepted so far.' },
          phase: { type: 'string', enum: ['plan', 'design', 'delegate', 'review', 'close'] },
          finished: { type: 'boolean', description: 'True once the whole job is closed.' },
          tasks: {
            type: 'array',
            description: 'The planned worker tasks in order, numbered from 1. Each title must equal the Agent tool `description` it will be delegated with.',
            items: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                agent: { type: 'string', description: 'Subagent type, e.g. general-purpose or Explore.' },
                model: { type: 'string', description: 'Expected model, e.g. opus, sonnet, haiku.' },
                effort: { type: 'string', enum: ['low', 'medium', 'high', 'xhigh', 'max'] },
                after: { type: 'array', items: { type: 'integer' }, description: 'Numbers of the tasks this one waits for.' },
              },
              required: ['title'],
            },
          },
        },
      },
    })
    await $.tool.register({
      name: 'step',
      isDeferred: false,
      description:
        'For subagents: report progress on your own task to the Luff Crew panel. Right after reading your brief, call it with ' +
        '`total` (your plan in 3-8 steps) and `done: 0`; call it again as each step finishes. Cheap and silent: it only moves your bar.',
      inputSchema: {
        type: 'object',
        properties: {
          done: { type: 'integer', minimum: 0, description: 'Steps finished so far.' },
          total: { type: 'integer', minimum: 1, description: 'Steps planned; may change.' },
          note: { type: 'string', description: 'The step in progress, a few words.' },
        },
        required: ['done'],
      },
    })
    await $.command.register({
      name: 'agents-info',
      description: 'Show or hide the Luff Crew panel: subagents, plan limits, cost and time',
      immediate: true,
    })
    await $.command.register({
      name: 'agents-web',
      description: 'Open the Luff Crew view in your browser (localhost); /agents-web stop ends it',
      argumentHint: '[stop]',
      immediate: true,
    })

    try {
      const usage = await $.session.usage()
      if (usage.rateLimits.length) await update($, limitsAtom, () => ({ windows: toWindows(usage.rateLimits), measuredAt: at }))
    } catch {
      // No reading yet: the first response brings one.
    }
    await loadOthers($).catch(() => {})

    // Running clocks tick once a second; other sessions' usage refreshes each minute.
    let ticks = 0
    $.clock.every(1000, () => {
      void (async () => {
        ticks++
        if (ticks % 60 === 0) await loadOthers($).catch(() => {})
        const runs = await read($, runsAtom)
        const turn = await read($, turnAtom)
        if (runs.some(r => r.status === 'running') || turn?.status === 'running' || ticks % 30 === 0) await update($, nowAtom, () => Date.now())
      })()
    })
    return started
  })

  // Teach the model the protocol, for the whole session.
  on('prompt.compose', async ($, e, next) => {
    const composed = await next(e)
    return { sections: [...composed.sections, { id: 'luff-crew-protocol', text: PROTOCOL, scope: 'session' as const }] }
  })

  on('command.run', { command: 'agents-info' }, async $ => {
    const isOpen = await togglePane($)
    return { text: isOpen ? 'Luff Crew panel opened.' : 'Luff Crew panel closed.' }
  })

  on('command.run', { command: 'agents-web' }, async ($, e) => {
    const arg = e.args.trim().toLowerCase()
    return { text: arg === 'stop' || arg === 'off' || arg === 'close' ? await stopWebView($) : await startWebView($) }
  })

  // Each prompt starts a turn of the main loop: the bar follows it from here.
  on('turn.start', async ($, e, next) => {
    try {
      if (!(e as { agentId?: string }).agentId) {
        const at = await $.clock.now()
        await update($, turnAtom, () => newTurn(e.turnId, e.text, at))
        await update($, nowAtom, () => at)
      }
    } catch {
      // Bookkeeping never holds up a turn.
    }
    return next(e)
  })

  on('tool.call', { tool: TOOL_PROGRESS }, async ($, e) => {
    const input = e as unknown as ProgressInput
    const at = await $.clock.now()
    const prev = await read($, flowAtom)
    if (startsNewFlow(prev, input) && input.title?.trim()) {
      // A new job starts with a clean list; agents still running stay.
      await update($, runsAtom, list => list.filter(r => r.status === 'running'))
    }
    const tasks = cleanTasks(input.tasks)
    const next = await update($, flowAtom, p => applyProgress(p, { ...input, ...(tasks ? { tasks } : {}) }, at) as CrewFlow)
    await update($, panelAtom, p => ({ ...p, hiddenAt: 0 }))
    const running = (await read($, runsAtom)).filter(r => r.status === 'running').length
    if (next && input.tasks?.length) await autoOpen($, `job:${next.title}`)
    return { result: `ok: ${next ? flowLabel(next, running) : 'ok'}` }
  }).catch(() => ({ result: 'ok' }))

  // A worker's own steps: the call runs in the worker's loop, so `agentId` names it.
  on('tool.call', { tool: TOOL_STEP }, async ($, e) => {
    const input = e as unknown as { done?: number; total?: number; note?: string }
    const agentId = e.agentId
    if (!agentId) return { result: 'ignored: only subagents report steps' }
    const int = (v: unknown): number | undefined => (typeof v === 'number' && Number.isFinite(v) ? Math.max(0, Math.round(v)) : undefined)
    await update($, runsAtom, list =>
      list.map(r => {
        if (r.agentId !== agentId) return r
        const total = int(input.total) ?? r.step?.total ?? 0
        const done = int(input.done) ?? r.step?.done ?? 0
        const note = typeof input.note === 'string' ? clip(input.note.trim(), 80) : ''
        return { ...r, step: { total, done: total ? Math.min(total, done) : done, ...(note ? { note } : {}) } }
      }),
    )
    return { result: 'ok' }
  }).catch(() => ({ result: 'ok' }))

  on('agent.spawn', async ($, e, next) => {
    const started = await next(e)
    if (started.deny !== undefined) return started
    const at = await $.clock.now()
    await update($, runsAtom, list => {
      const round = 1 + list.filter(r => e.description && normalize(r.description) === normalize(e.description)).length
      const run: CrewRun = {
        id: started.agentId ?? e.tool_use_id,
        type: e.subagentType,
        description: e.description,
        model: started.model,
        status: 'running',
        startedAt: at,
        contextTokens: 0,
        contextMax: contextWindowOf(started.model),
        tokens: 0,
        costUsd: 0,
        requests: 0,
        round,
      }
      if (started.agentId) run.agentId = started.agentId
      return [...list.filter(r => r.id !== run.id), run].slice(-200)
    })
    await update($, nowAtom, () => at)
    await autoOpen($, 'first-subagent')
    return started
  }).catch(($, e, next) => next(e)) // never block a launch over bookkeeping

  // Every model request, main loop and subagents: usage for the limits panel,
  // and a subagent's live model, effort, context, tokens and cost.
  on('turn.step', async function* ($, e, next) {
    const result = yield* next(e)
    const at = await $.clock.now()
    const usage = result.usage
    const model = usage?.model || e.model
    const tokens = usage ? tokensOf(usage) : 0
    const cost = usage ? costOf(model, usage) : 0

    // The main loop's turn: one more request, the tools it asked for.
    if (!e.agentId) {
      const last = result.toolUses.at(-1)?.name
      await update($, turnAtom, t => {
        const base = t && t.turnId === e.turnId ? t : newTurn(e.turnId, '', at)
        return {
          ...base,
          status: 'running' as const,
          steps: base.steps + 1,
          tools: base.tools + result.toolUses.length,
          ...(last ? { lastTool: shortTool(last) } : {}),
          tokens: base.tokens + tokens,
          costUsd: base.costUsd + cost,
        }
      })
    }
    if (!usage) return result

    const hour = String(Math.floor(at / HOUR))
    const own = await update($, usageAtom, b => {
      const cur = b[hour] ?? { tokens: 0, costUsd: 0, requests: 0 }
      const kept = Object.fromEntries(Object.entries(b).filter(([h]) => Number(h) >= Math.floor((at - SEVEN_DAYS) / HOUR)))
      return { ...kept, [hour]: { tokens: cur.tokens + tokens, costUsd: cur.costUsd + cost, requests: cur.requests + 1 } }
    })
    if (storeKey) void $.store.set(storeKey, own).catch(() => {})

    const agentId = e.agentId
    if (agentId) {
      await update($, runsAtom, list =>
        list.map(r =>
          r.agentId !== agentId
            ? r
            : {
                ...r,
                model,
                ...(typeof e.effort === 'string' ? { effort: e.effort } : {}),
                status: 'running' as const,
                contextTokens: tokens,
                contextMax: contextWindowOf(model),
                tokens: r.tokens + tokens,
                costUsd: r.costUsd + cost,
                requests: r.requests + 1,
              },
        ),
      )
    }
    return result
  })

  on('turn.complete', async ($, e, next) => {
    const agentId = e.agentId
    if (agentId) {
      const at = await $.clock.now()
      const reason = e.reason
      await update($, runsAtom, list =>
        list.map(r => {
          if (r.agentId !== agentId) return r
          const out: CrewRun = { ...r, status: reason === 'answer' ? 'done' : 'failed', endedAt: at }
          if (reason === 'aborted') out.failure = 'killed'
          else if (reason !== 'answer') out.failure = 'error'
          else delete out.failure
          // A run whose steps went unseen still gets the turn's own sum.
          if (r.requests === 0 && e.usage) {
            const model = e.usage.model || r.model
            out.model = model
            out.tokens = tokensOf(e.usage)
            out.costUsd = costOf(model, e.usage)
          }
          return out
        }),
      )
      await update($, nowAtom, () => at)
    } else {
      const at = await $.clock.now()
      const reason = e.reason
      await update($, turnAtom, t => {
        if (!t || (t.turnId !== e.turnId && t.status !== 'running')) return t
        const out: CrewTurn = { ...t, status: reason === 'answer' ? 'done' : 'failed', endedAt: at }
        if (reason === 'aborted') out.failure = 'stopped'
        else if (reason !== 'answer') out.failure = 'error'
        else delete out.failure
        delete out.lastTool
        return out
      })
      await update($, nowAtom, () => at)
    }
    return next(e)
  })

  // Plan usage: the 5-hour and weekly windows, as the status line has them.
  on('session.measure', async ($, e, next) => {
    if (e.changed.includes('rateLimits')) {
      const at = await $.clock.now()
      await update($, limitsAtom, () => ({ windows: toWindows(e.rateLimits), measuredAt: at }))
    }
    return next(e)
  })

  // ---------------------------------------------------------------------------
  // The panel

  on('ui.render', { component: 'Pane', requestId: PANE }, async ($, e) => {
    const ui = $.ui.resolve(e)
    const { Box, Text, Button } = ui
    const flow = await read($, flowAtom)
    const all = await read($, runsAtom)
    const panel: CrewPanel = await read($, panelAtom)
    const limits = await read($, limitsAtom)
    const own = await read($, usageAtom)
    const others = await read($, othersAtom)
    const turn = await read($, turnAtom)
    const web = await read($, webAtom)
    const now = Math.max(await read($, nowAtom), ...all.map(r => r.startedAt), turn?.startedAt ?? 0, 0)

    const runs = visible(flow, all)
    const running = runs.filter(r => r.status === 'running').reverse()
    const finished = runs.filter(r => r.status !== 'running').reverse()
    const planned = pending(flow, runs)
    const t = totals(runs, now)
    const title = flow && !flow.finished ? flow.title : ''
    const isEmpty = !runs.length && !planned.length
    const words = { round: s().round, failed: failedWords() }

    const five = limits.windows.find(w => w.kind === 'five_hour')
    const week = limits.windows.find(w => w.kind === 'seven_day')
    const limitRows = [
      { label: s().fiveHour, window: five, span: s().lastHours, since: five?.resetsAt ? five.resetsAt - FIVE_HOURS : now - FIVE_HOURS },
      { label: s().weekly, window: week, span: s().lastDays, since: week?.resetsAt ? week.resetsAt - SEVEN_DAYS : now - SEVEN_DAYS },
    ].map(r => ({ ...r, local: sumBuckets([own, others], r.since) }))

    const toggleCompact = (
      <Button key="compact" plain label={panel.isCompact ? s().expand : s().collapse} onPress={() => update($, panelAtom, p => ({ ...p, isCompact: !p.isCompact }))} />
    )
    const toggleLimits = (
      <Button
        key="limits"
        plain
        label={`${panel.isLimitsOpen ? '▾' : '▸'} ${s().limits}`}
        onPress={() => update($, panelAtom, p => ({ ...p, isLimitsOpen: !p.isLimitsOpen }))}
      />
    )
    const turnHead = turn ? `${turn.status === 'running' ? s().thisPrompt : s().lastPrompt}: ${turnWord(turn)}` : ''
    const turnLine = turn ? `${turn.prompt ? `“${clip(turn.prompt, 60)}” · ` : ''}${turnStats(turn, now)}` : ''
    const webButton = (
      <Button
        key="web"
        plain
        label={web ? (web.status === 'running' ? s().stopWeb : s().webStarting) : s().openWeb}
        onPress={async () => {
          const cur = await read($, webAtom)
          if (cur?.status === 'running') await stopWebView($)
          else if (!cur) $.ui.toast(await startWebView($))
        }}
      />
    )
    const webLine = web?.status === 'running' ? `${s().webAt}: ${web.url}` : ''
    const toggleFinished = (
      <Button
        key="finished"
        plain
        label={`${panel.isFinishedOpen ? '▾' : '▸'} ${s().finished} · ${finished.length}`}
        onPress={() => update($, panelAtom, p => ({ ...p, isFinishedOpen: !p.isFinishedOpen }))}
      />
    )

    if (e.surface !== 'terminal' && 'Svg' in ui) {
      const { Svg } = ui
      const W = Math.max(260, Math.min(900, (e.props.bodyColumns || 48) * 8 - 8))
      const barW = Math.max(120, W - MASCOT_W - 34)
      const icons = [
        ...running.map(r => ({ type: r.type, effort: r.effort, running: true, dim: false })),
        ...finished.map(r => ({ type: r.type, effort: r.effort, running: false, dim: false })),
        ...planned.map(p => ({ type: p.agent ?? 'planned', effort: p.effort, running: false, dim: true })),
      ]
      // Words are engine Text (themed by the app); pictures are theme-neutral SVG.
      const runRow = (r: CrewRun, prefix: string) => {
        const color = typeColor(r.type)
        const progress = progressOf(r)
        const steps = stepText(r)
        return (
          <Box key={`${prefix}-${r.id}`} flexDirection="row" gap={1} alignItems="center">
            <Svg key="m" source={mascotSvg(r.type, r.effort, { running: r.status === 'running', dim: r.status === 'failed' })} alt={r.type} width={MASCOT_W} height={MASCOT_H} />
            <Box key="body" flexDirection="column" flexGrow={1}>
              <Text key="d" bold wrap="truncate-end">
                <Text color={statusColor(r.status, color)}>{statusGlyph(r.status)}</Text> {r.description || r.type}
              </Text>
              <Text key="meta" wrap="truncate-end">
                <Text color={color} bold>
                  {r.type}
                </Text>
                <Text dimColor> · {runMeta(r, words)}</Text>
              </Text>
              <Text key="stats" dimColor wrap="truncate-end">
                {steps ? `${steps}   ` : ''}
                {runStats(r, now)}
              </Text>
              <Svg
                key="bar"
                source={barSvg(barW, progress ?? ctxPercent(r) / 100, progress === null ? '#8a8a8a' : r.status === 'failed' ? BAD : color, 4)}
                alt={progress === null ? `context ${ctxPercent(r)}%` : `${Math.round(progress * 100)}%`}
                width={barW}
                height={4}
              />
            </Box>
          </Box>
        )
      }
      const limitRow = (row: (typeof limitRows)[number]) => {
        const pct = row.window?.percentUsed
        const reset = row.window?.resetsAt ? ` · ${s().resetsIn} ${fmtDuration(row.window.resetsAt - now)}` : ''
        return (
          <Box key={`limit-${row.label}`} flexDirection="column">
            <Box key="head" flexDirection="row" justifyContent="space-between">
              <Text key="l" bold>
                {row.label}
              </Text>
              <Text key="r" dimColor>
                {pct === undefined ? s().noPlan : `${Math.round(pct)}%${reset}`}
              </Text>
            </Box>
            <Svg key="bar" source={barSvg(W, pct === undefined ? null : pct / 100, meterColor(pct ?? 0), 7)} alt={`${row.label} ${pct ?? 0}%`} width={W} height={7} />
            <Text key="local" dimColor wrap="truncate-end">
              {`${row.span}: ${fmtTokens(row.local.tokens)} ${s().tokensWord} · ≈${fmtCost(row.local.costUsd)} · ${row.local.requests} ${s().requests}`}
            </Text>
          </Box>
        )
      }
      return (
        <Box flexDirection="column" gap={1}>
          {title ? (
            <Text key="title" bold>
              {title}
            </Text>
          ) : null}
          <Text key="totals">
            <Text dimColor>{s().cost} </Text>
            <Text bold>≈{fmtCost(t.cost)}</Text>
            <Text dimColor>{`   ${s().tokens} `}</Text>
            <Text bold>{fmtTokens(t.tokens)}</Text>
            <Text dimColor>{`   ${s().time} `}</Text>
            <Text bold>{fmtTime(t.time)}</Text>
          </Text>
          {turn ? (
            <Box key="turn" flexDirection="column">
              <Text key="h" bold>
                <Text color={statusColor(turn.status, ACCENT)}>{statusGlyph(turn.status)}</Text> {turnHead}
              </Text>
              <Text key="d" dimColor wrap="truncate-end">
                {turnLine}
              </Text>
            </Box>
          ) : null}
          {toggleLimits}
          {panel.isLimitsOpen ? limitRows.map(limitRow) : null}
          {panel.isLimitsOpen && !limits.windows.length ? (
            <Text key="limits-hint" dimColor>
              {s().limitsHint}
            </Text>
          ) : null}
          {toggleCompact}
          {isEmpty ? (
            <Text key="empty" dimColor>
              {s().empty}
            </Text>
          ) : null}
          {panel.isCompact && !isEmpty ? <Svg key="strip" source={stripSvg(W, icons)} alt={`${icons.length} ${s().agents}`} width={Math.min(W, icons.length * 38)} height={STRIP_H} /> : null}
          {!panel.isCompact && running.length > 0 ? (
            <Text key="h-running" dimColor>
              {`${s().running} · ${running.length}`}
            </Text>
          ) : null}
          {!panel.isCompact ? running.map(r => runRow(r, 'run')) : null}
          {!panel.isCompact && finished.length > 0 ? toggleFinished : null}
          {!panel.isCompact && panel.isFinishedOpen ? finished.map(r => runRow(r, 'fin')) : null}
          {!panel.isCompact && planned.length > 0 ? (
            <Text key="h-planned" dimColor>
              {`${s().planned} · ${planned.length}`}
            </Text>
          ) : null}
          {!panel.isCompact
            ? planned.map(p => (
                <Box key={`plan-${p.n}`} flexDirection="row" gap={1} alignItems="center">
                  <Svg key="m" source={mascotSvg(p.agent ?? 'planned', p.effort, { dim: true })} alt="planned" width={MASCOT_W} height={MASCOT_H} />
                  <Box key="body" flexDirection="column" flexGrow={1}>
                    <Text key="t" dimColor bold wrap="truncate-end">
                      ◷ {p.n}. {p.title}
                    </Text>
                    <Text key="m" dimColor wrap="truncate-end">
                      {[p.agent, p.model ? modelLabel(p.model) : '', p.effort, p.after.length ? `${s().after} ${p.after.join(', ')}` : ''].filter(Boolean).join(' · ') || ' '}
                    </Text>
                  </Box>
                </Box>
              ))
            : null}
          <Text key="estimate" dimColor>
            {s().estimate}
          </Text>
          {webButton}
          {webLine ? (
            <Text key="web-url" dimColor wrap="truncate-end">
              {webLine}
            </Text>
          ) : null}
        </Box>
      )
    }

    // Terminal: the same panel in text.
    const cols = Math.max(30, e.props.bodyColumns || 60)
    const barW = Math.max(8, Math.min(24, cols - 40))
    const row = (r: CrewRun) => {
      const progress = progressOf(r)
      const color = typeColor(r.type)
      const steps = stepText(r)
      return (
        <Box key={`row-${r.id}`} flexDirection="column" marginBottom={1}>
          <Text wrap="truncate-end">
            <Text color={r.status === 'failed' ? 'red' : r.status === 'done' ? 'green' : color}>{r.status === 'running' ? '●' : r.status === 'done' ? '✓' : '✗'}</Text>{' '}
            <Text bold>{r.description || r.type}</Text>
          </Text>
          <Text dimColor wrap="truncate-end">
            {'  '}
            {r.type} · {runMeta(r, words)}
          </Text>
          <Text wrap="truncate-end">
            {'  '}
            {progress === null ? <Text dimColor>{textBar(ctxPercent(r) / 100, barW)}</Text> : <Text color={color}>{textBar(progress, barW)}</Text>}
            <Text dimColor>
              {' '}
              {steps ? steps + ' · ' : ''}
              {runStats(r, now)}
            </Text>
          </Text>
        </Box>
      )
    }
    const limitLine = (r: (typeof limitRows)[number]) => (
      <Text key={`lim-${r.label}`} wrap="truncate-end">
        {r.label.padEnd(15)}{' '}
        {r.window ? (
          <Text>
            {textBar(r.window.percentUsed / 100, barW)} {Math.round(r.window.percentUsed)}%
          </Text>
        ) : (
          <Text dimColor>{s().noPlan}</Text>
        )}
        <Text dimColor>
          {'  '}
          {fmtTokens(r.local.tokens)} · ≈{fmtCost(r.local.costUsd)}
        </Text>
      </Text>
    )
    return (
      <Box flexDirection="column">
        {title ? <Text bold>{title}</Text> : null}
        <Text dimColor>
          {s().cost} ≈{fmtCost(t.cost)} · {s().tokens} {fmtTokens(t.tokens)} · {s().time} {fmtTime(t.time)}
        </Text>
        {turn ? (
          <Text wrap="truncate-end">
            <Text color={turn.status === 'failed' ? 'red' : turn.status === 'done' ? 'green' : 'magenta'}>{statusGlyph(turn.status)}</Text> {turnHead}
            <Text dimColor> · {turnLine}</Text>
          </Text>
        ) : null}
        <Box flexDirection="row" gap={2} marginTop={1}>
          {toggleLimits}
          {toggleCompact}
          {webButton}
        </Box>
        {webLine ? <Text dimColor wrap="truncate-end">{webLine}</Text> : null}
        {panel.isLimitsOpen ? limitRows.map(limitLine) : null}
        {isEmpty ? <Text dimColor>{s().empty}</Text> : null}
        {panel.isCompact ? (
          <Text wrap="truncate-end">
            {[...running, ...finished].map(r => (r.status === 'running' ? '● ' : r.status === 'done' ? '✓ ' : '✗ ')).join('')}
            <Text dimColor>{planned.map(() => '◷ ').join('')}</Text>
          </Text>
        ) : (
          <Box flexDirection="column" marginTop={1}>
            {running.length > 0 ? <Text dimColor>{`${s().running} · ${running.length}`}</Text> : null}
            {running.map(row)}
            {finished.length > 0 ? toggleFinished : null}
            {panel.isFinishedOpen ? finished.map(row) : null}
            {planned.length > 0 ? <Text dimColor>{`${s().planned} · ${planned.length}`}</Text> : null}
            {planned.map(p => (
              <Text key={`plan-${p.n}`} dimColor wrap="truncate-end">
                ◷ {p.n}. {p.title}
                {p.after.length ? ` · ${s().after} ${p.after.join(', ')}` : ''}
              </Text>
            ))}
          </Box>
        )}
      </Box>
    )
  })

  // ---------------------------------------------------------------------------
  // The job bar above the prompt

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    if (e.props.hasSurvey) return next(e)
    const flow = await read($, flowAtom)
    const all = await read($, runsAtom)
    const panel = await read($, panelAtom)
    const limits = await read($, limitsAtom)
    const runs = visible(flow, all)
    const running = runs.filter(r => r.status === 'running').length
    const turn = await read($, turnAtom)
    const shownTurn = turn && turn.startedAt > panel.hiddenAt ? turn : null
    // A finished job gives way to the next prompt.
    const isFlowOver = !!flow?.finished && !!shownTurn && shownTurn.startedAt > flow.updatedAt
    const shownFlow = flow && flow.updatedAt > panel.hiddenAt && !isFlowOver ? flow : null

    const ui = $.ui.resolve(e)
    const { Box, Text, Button } = ui
    const dismissBar = (
      <Button key="hide" plain role="dismiss" label="✕" onPress={() => update($, panelAtom, p => ({ ...p, hiddenAt: Date.now() }))} />
    )

    // No job and no subagent: the bar follows the prompt itself.
    if (!shownFlow && running === 0) {
      if (!shownTurn) return next(e)
      const now = Math.max(await read($, nowAtom), shownTurn.startedAt)
      const prompt = shownTurn.prompt || s().thisPrompt
      const word = turnWord(shownTurn)
      const stats = turnStats(shownTurn, now)
      const short = limitsShort(limits.windows)
      const panelButton = <Button key="crew" plain label={runs.length ? `×${runs.length}` : s().appName} onPress={() => void togglePane($)} />

      if (e.surface !== 'terminal' && 'Svg' in ui) {
        const { Svg } = ui
        const color = shownTurn.status === 'failed' ? BAD : shownTurn.status === 'done' ? OK : ACCENT
        const cols = e.props.bodyColumns || 100
        const reserved = Math.min(28, prompt.length) + word.length + stats.length + short.length + 22
        const barW = Math.max(60, Math.min(600, (cols - reserved) * 8))
        return (
          <Box flexDirection="row" alignItems="center" gap={1}>
            <Text key="title" bold wrap="truncate-end">
              <Text color={color}>{statusGlyph(shownTurn.status)}</Text> {clip(prompt, 28)}
            </Text>
            <Svg
              key="segs"
              source={segmentsSvg(barW, turnSegments(shownTurn), color, shownTurn.status === 'running')}
              alt={`${word}, ${stats}`}
              width={barW}
              height={SEG_H}
            />
            <Text key="label" bold color={color}>
              {word}
            </Text>
            <Text key="stats" dimColor wrap="truncate-end">
              {stats}
            </Text>
            {short ? (
              <Text key="limits" dimColor>
                {short}
              </Text>
            ) : null}
            {panelButton}
            {dismissBar}
          </Box>
        )
      }

      const cols = e.props.bodyColumns || 80
      const promptW = Math.max(8, Math.min(28, Math.floor(cols / 4)))
      const width = Math.max(6, Math.min(16, cols - promptW - stats.length - 24))
      const color = shownTurn.status === 'failed' ? 'red' : shownTurn.status === 'done' ? 'green' : 'magenta'
      return (
        <Box flexDirection="row" gap={1}>
          <Text color={color}>{statusGlyph(shownTurn.status)}</Text>
          <Text bold wrap="truncate-end">
            {clip(prompt, promptW)}
          </Text>
          <Text color={color}>{pulseBar(shownTurn, now, width)}</Text>
          <Text bold>{word}</Text>
          <Text dimColor wrap="truncate-end">
            {stats}
          </Text>
          {short ? <Text dimColor>{short}</Text> : null}
          {panelButton}
          {dismissBar}
        </Box>
      )
    }
    const crew = runs.length + pending(shownFlow, runs).length
    const title = shownFlow?.title ?? s().appName
    const label = shownFlow ? flowLabel(shownFlow, running) : `${running} ${s().busy}`
    const ratio = shownFlow ? flowRatio(shownFlow) : 0
    const short = limitsShort(limits.windows)
    const crewButton = <Button key="crew" plain label={`×${crew}`} onPress={() => void togglePane($)} />

    if (e.surface !== 'terminal' && 'Svg' in ui) {
      const { Svg } = ui
      const color = shownFlow?.finished ? OK : ACCENT
      const cols = e.props.bodyColumns || 100
      const reserved = Math.min(28, title.length) + label.length + short.length + 22
      const barW = Math.max(60, Math.min(900, (cols - reserved) * 8))
      return (
        <Box flexDirection="row" alignItems="center" gap={1}>
          <Text key="title" bold wrap="truncate-end">
            <Text color={color}>●</Text> {clip(title, 28)}
          </Text>
          <Svg
            key="segs"
            source={segmentsSvg(barW, shownFlow ? segments(shownFlow, runs) : [], color, running > 0)}
            alt={`${label}, ${Math.round(ratio * 100)}%`}
            width={barW}
            height={SEG_H}
          />
          <Text key="label" bold color={color}>
            {label}
          </Text>
          <Text key="pct" dimColor>{`${Math.round(ratio * 100)}%`}</Text>
          {short ? (
            <Text key="limits" dimColor>
              {short}
            </Text>
          ) : null}
          {crewButton}
          {shownFlow ? dismissBar : null}
        </Box>
      )
    }

    const cols = e.props.bodyColumns || 80
    const titleW = Math.max(8, Math.min(28, Math.floor(cols / 4)))
    const width = Math.max(6, Math.min(30, cols - titleW - 40))
    return (
      <Box flexDirection="row" gap={1}>
        <Text color={shownFlow?.finished ? 'green' : 'magenta'}>⛵</Text>
        <Text bold wrap="truncate-end">
          {clip(title, titleW)}
        </Text>
        <Text color={shownFlow?.finished ? 'green' : 'magenta'}>{textBar(ratio, width)}</Text>
        <Text bold>{label}</Text>
        <Text dimColor>{`${Math.round(ratio * 100)}%`}</Text>
        {short ? <Text dimColor>{short}</Text> : null}
        {crewButton}
        {shownFlow ? dismissBar : null}
      </Box>
    )
  })

}
