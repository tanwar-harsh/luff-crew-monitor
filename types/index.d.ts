// State contract of the Luff Crew mod: every value it keeps in `$.state`.

export type CrewPhase = 'plan' | 'design' | 'delegate' | 'review' | 'close'

export type CrewTask = {
  title: string
  agent?: string
  model?: string
  effort?: string
  after: number[]
}

export type CrewFlow = {
  title: string
  total: number
  done: number
  phase: CrewPhase
  finished: boolean
  tasks: CrewTask[]
  startedAt: number
  updatedAt: number
}

export type CrewStep = { done: number; total: number; note?: string }

export type CrewRun = {
  /** The subagent's id, or the Agent call's id until the engine names one. */
  id: string
  agentId?: string
  type: string
  description: string
  model: string
  effort?: string
  status: 'running' | 'done' | 'failed'
  failure?: string
  startedAt: number
  endedAt?: number
  contextTokens: number
  contextMax: number
  tokens: number
  costUsd: number
  requests: number
  round: number
  step?: CrewStep
}

export type CrewPanel = {
  isCompact: boolean
  isFinishedOpen: boolean
  isLimitsOpen: boolean
  /** The job bar was hidden at this time; a later progress call or prompt shows it again. */
  hiddenAt: number
  /** Job titles the pane already opened itself for. */
  autoOpenedFor: string[]
}

export type CrewLimitWindow = {
  /** `five_hour`, `seven_day`, or a gateway's `spend_limit`. */
  kind: string
  percentUsed: number
  /** Epoch ms; 0 when unknown. */
  resetsAt: number
}

export type CrewLimits = {
  windows: CrewLimitWindow[]
  /** Epoch ms of the last reading; 0 before the first. */
  measuredAt: number
}

/** The main loop's current (or last) turn: one per prompt, subagents or not. */
export type CrewTurn = {
  turnId: string
  /** The prompt that started it, clipped; "" for a continuation. */
  prompt: string
  status: 'running' | 'done' | 'failed'
  /** `stopped` or `error` when it did not end with an answer. */
  failure?: string
  startedAt: number
  endedAt?: number
  /** Model requests so far. */
  steps: number
  /** Tool calls the model asked for so far. */
  tools: number
  lastTool?: string
  tokens: number
  costUsd: number
}

/** The optional browser dashboard, while one runs for this session. */
export type CrewWeb = {
  status: 'starting' | 'running'
  url: string
  startedAt: number
}

/** Tokens and estimated cost the mod saw, per hour bucket (epoch hour → totals). */
export type CrewUsageBuckets = Record<string, { tokens: number; costUsd: number; requests: number }>

declare module 'claude-code' {
  interface PluginState {
    'luff-crew-monitor': {
      flow: CrewFlow | null
      runs: CrewRun[]
      turn: CrewTurn | null
      web: CrewWeb | null
      panel: CrewPanel
      now: number
      limits: CrewLimits
      /** What this session counted, per hour. */
      usage: CrewUsageBuckets
      /** What other sessions counted, per hour, read from `$.store`. */
      others: CrewUsageBuckets
    }
  }
}
