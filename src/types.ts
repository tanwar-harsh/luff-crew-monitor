/** Phases an orchestrator moves through while it runs a multi-agent job. */
export const PHASES = ['plan', 'design', 'delegate', 'review', 'close'] as const
export type Phase = (typeof PHASES)[number]

export const EFFORTS = ['low', 'medium', 'high', 'xhigh', 'max'] as const
export type Effort = (typeof EFFORTS)[number]

/** One worker task the orchestrator plans to hand to a subagent. */
export interface PlannedTask {
  /** Must equal the Agent tool `description` so runs can be matched to tasks. */
  title: string
  /** Subagent type it will run as, e.g. `Explore` or `general-purpose`. */
  agent?: string
  /** Model family or id it is expected to run on, e.g. `opus` or `claude-sonnet-5`. */
  model?: string
  effort?: string
  /** 1-based numbers of the tasks this one waits for. */
  after: number[]
}

/** What the `progress` tool accepts. Every field is optional: omitted fields keep their value. */
export interface ProgressInput {
  title?: string
  total?: number
  done?: number
  phase?: Phase
  finished?: boolean
  tasks?: Array<{ title?: string; agent?: string; model?: string; effort?: string; after?: number[] }>
}

/** The orchestrator's job as reported through `progress`. */
export interface Flow {
  title: string
  total: number
  done: number
  phase: Phase
  finished: boolean
  tasks: PlannedTask[]
  /** Epoch ms of the call that started this flow. */
  startedAt: number
  /** Epoch ms of the latest progress call. */
  updatedAt: number
}

export type RunStatus = 'running' | 'done' | 'failed'

/** Self-reported progress from a worker through the `step` tool. */
export interface StepReport {
  done: number
  total: number
  note?: string
}

/** One subagent run, rebuilt from its transcript. */
export interface AgentRun {
  /** Claude Code's agent id (the `agent-<id>.jsonl` file name). */
  id: string
  /** The parent's Agent tool_use id, when known. */
  toolUseId?: string
  /** Subagent type: `general-purpose`, `Explore`, a custom agent name, ... */
  type: string
  description: string
  model: string
  effort?: string
  status: RunStatus
  /** Why a run is marked failed: `error`, `killed`, `stalled`. */
  failure?: string
  background: boolean
  startedAt: number
  endedAt?: number
  lastActivityAt: number
  /** Tokens in the latest request: what the context window holds right now. */
  contextTokens: number
  contextMax: number
  /** All tokens billed across the run's requests. */
  tokens: number
  costUsd: number
  /** Model requests made so far. */
  requests: number
  /** 1 for the first run of a description, 2 for a retry, ... */
  round: number
  step?: StepReport
  /** Nesting level: 1 for a subagent of the main thread, 2 for its own subagents. */
  depth: number
  /** The run's crew mascot as an SVG group on a 26×22 grid; set for the browser view. */
  mascot?: string
}

export interface Totals {
  costUsd: number
  tokens: number
  /** Wall-clock span from the first run's start to the last run's end (or now). */
  timeMs: number
  running: number
  done: number
  failed: number
}

export interface PlannedView extends PlannedTask {
  /** 1-based position in the plan. */
  n: number
  /** The task's crew mascot as an SVG group on a 26×22 grid; set for the browser view. */
  mascot?: string
}

export interface FlowView extends Flow {
  /** Accepted share of the plan, 0..1. */
  ratio: number
  /** Workers running right now. */
  running: number
  /** Phase shown to the user: `plan` turns into `delegate` once workers start. */
  shownPhase: Phase
  /** Per-task state, for the segmented bar. */
  segments: Array<'done' | 'running' | 'todo'>
}

export interface SessionInfo {
  id: string
  projectDir: string
  cwd?: string
  transcript: string
}

/** One plan usage window (5-hour session or weekly) on the limits panel. */
export interface LimitWindowView {
  /** Share of the plan limit used, 0..100, as Claude Code reports it; null when it has not. */
  usedPct: number | null
  /** Epoch ms when the window resets; null when unknown. */
  resetsAt: number | null
  /** Epoch ms the local totals below are counted from. */
  since: number
  /** Tokens, estimated cost and model requests in local transcripts since `since`. */
  tokens: number
  costUsd: number
  requests: number
}

export interface LimitsView {
  fiveHour: LimitWindowView
  sevenDay: LimitWindowView
  /** Epoch ms Claude Code last reported plan limits through the status line; null when never. */
  reportedAt: number | null
}

/** Everything a view (dashboard, statusline, tool reply) needs, at one instant. */
export interface Snapshot {
  version: string
  now: number
  lang: 'en' | 'ru'
  session: SessionInfo | null
  flow: FlowView | null
  agents: AgentRun[]
  planned: PlannedView[]
  totals: Totals
  /** Plan usage limits; only views that poll local usage fill it in. */
  limits?: LimitsView
}
