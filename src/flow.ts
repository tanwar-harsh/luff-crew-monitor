import { normalize } from './format.ts'
import { PHASES } from './types.ts'
import type { AgentRun, Flow, FlowView, Phase, PlannedTask, PlannedView, ProgressInput } from './types.ts'

const DEFAULT_TITLE = 'Crew job'
const MAX_COUNT = 100

const isPhase = (p: unknown): p is Phase => typeof p === 'string' && (PHASES as readonly string[]).includes(p)

const toCount = (n: unknown): number | undefined =>
  typeof n === 'number' && Number.isFinite(n) ? Math.min(MAX_COUNT, Math.max(0, Math.round(n))) : undefined

/** Drops untitled tasks and nonsense dependency numbers. */
export function cleanTasks(tasks: ProgressInput['tasks']): PlannedTask[] | undefined {
  if (!Array.isArray(tasks)) return undefined
  // `after` numbers refer to the caller's 1-based positions; remap them past any dropped untitled tasks.
  const newIndex = new Map<number, number>()
  const kept = tasks.filter((t, i) => {
    const ok = typeof t?.title === 'string' && t.title.trim() !== ''
    if (ok) newIndex.set(i + 1, newIndex.size + 1)
    return ok
  })
  return kept.map((t, i) => {
    const out: PlannedTask = {
      title: (t.title ?? '').trim(),
      after: [...new Set((t.after ?? []).filter(n => Number.isInteger(n) && newIndex.has(n) && newIndex.get(n) !== i + 1).map(n => newIndex.get(n)!))].sort((a, b) => a - b),
    }
    if (t.agent?.trim()) out.agent = t.agent.trim()
    if (t.model?.trim()) out.model = t.model.trim()
    if (t.effort?.trim()) out.effort = t.effort.trim().toLowerCase()
    return out
  })
}

/**
 * True when a progress call opens a new job instead of updating the current one:
 * nothing is running yet, the last job closed, or the title changed.
 */
export function startsNewFlow(prev: Flow | null, input: ProgressInput): boolean {
  if (!prev) return true
  if (prev.finished) return input.finished !== true
  const title = input.title?.trim()
  return title !== undefined && title !== '' && title !== prev.title
}

/** Applies one `progress` call. Omitted fields keep their previous values. */
export function applyProgress(prev: Flow | null, input: ProgressInput, at: number): Flow {
  const fresh = startsNewFlow(prev, input)
  const base: Flow =
    fresh || !prev
      ? { title: DEFAULT_TITLE, total: 0, done: 0, phase: 'plan', finished: false, tasks: [], startedAt: at, updatedAt: at }
      : prev
  const tasks = cleanTasks(input.tasks) ?? base.tasks
  const total = toCount(input.total) ?? (input.tasks ? tasks.length : base.total)
  const doneRaw = toCount(input.done) ?? base.done
  const done = input.finished ? Math.max(doneRaw, total) : total ? Math.min(total, doneRaw) : doneRaw
  const phase: Phase = input.finished ? 'close' : isPhase(input.phase) ? input.phase : base.phase
  return {
    title: input.title?.trim() || base.title,
    total,
    done,
    phase,
    finished: input.finished === true,
    tasks,
    startedAt: base.startedAt,
    updatedAt: at,
  }
}

/** Runs that belong on screen: a new job hides runs that finished before it began. */
export function visibleRuns(flow: Flow | null, runs: AgentRun[]): AgentRun[] {
  if (!flow) return runs
  return runs.filter(r => r.status === 'running' || (r.endedAt ?? r.lastActivityAt) >= flow.startedAt)
}

/** Planned tasks no run has picked up yet, matched by title. */
export function pendingTasks(flow: Flow | null, runs: AgentRun[]): PlannedView[] {
  if (!flow || flow.finished) return []
  const started = new Set(runs.map(r => normalize(r.description)))
  return flow.tasks.map((t, i) => ({ ...t, n: i + 1 })).filter(t => !started.has(normalize(t.title)))
}

type RunLike = Pick<AgentRun, 'description' | 'status'> & { endedAt?: number }

/**
 * Tasks finished so far: the larger of the orchestrator's reported `done` and what the runs show,
 * so the bar moves as each subagent ends without waiting for a `progress` call.
 * A planned task counts once it has runs and none is still going; without a plan, every run that ended in this job counts.
 */
export function doneCount(flow: Flow, runs: RunLike[]): number {
  const seen = flow.tasks.length
    ? flow.tasks.filter(t => {
        const mine = runs.filter(r => normalize(r.description) === normalize(t.title))
        return mine.some(r => r.status === 'done') && !mine.some(r => r.status === 'running')
      }).length
    : runs.filter(r => r.status === 'done' && (r.endedAt === undefined || r.endedAt >= flow.startedAt)).length
  const done = Math.max(flow.done, seen)
  return flow.total ? Math.min(flow.total, done) : done
}

export function viewFlow(source: Flow | null, runs: AgentRun[]): FlowView | null {
  if (!source) return null
  const flow = { ...source, done: doneCount(source, runs) }
  const running = runs.filter(r => r.status === 'running').length
  const ratio = flow.finished ? 1 : flow.total ? flow.done / flow.total : 0
  const shownPhase: Phase = flow.phase === 'plan' && running > 0 ? 'delegate' : flow.phase

  // One segment per planned task: accepted ones first, then those in flight.
  const segments: FlowView['segments'] = []
  const total = flow.finished ? Math.max(flow.total, 1) : flow.total
  const byTitle = new Map(runs.map(r => [normalize(r.description), r]))
  const inFlight = flow.tasks.length
    ? flow.tasks.filter(t => byTitle.get(normalize(t.title))?.status === 'running').length
    : running
  for (let i = 0; i < total; i++) {
    if (flow.finished || i < flow.done) segments.push('done')
    else if (i < flow.done + inFlight) segments.push('running')
    else segments.push('todo')
  }
  return { ...flow, ratio, running, shownPhase, segments }
}
