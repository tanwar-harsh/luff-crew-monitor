import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import * as z from 'zod'

import { loadConfig } from './config.ts'
import type { StepReports } from './config.ts'
import { Monitor } from './monitor.ts'
import { flowLabel, renderStatus } from './render-text.ts'
import { EFFORTS, PHASES } from './types.ts'
import type { ProgressInput } from './types.ts'
import { VERSION } from './version.ts'

export const SERVER_NAME = 'luff-crew'

const STEP_BRIEF: Record<StepReports, string> = {
  off: 'Do not ask subagents to report steps; the dashboard follows them on its own.',
  light: 'Tell each subagent, in its prompt, to call `step` at most twice: right after reading its brief (done: 0, total: its plan in 3-8 steps) and once about halfway.',
  full: 'Tell each subagent, in its prompt, to call `step` right after reading its brief (done: 0, total: its plan in 3-8 steps) and again as each step finishes.',
}

export const instructions = (steps: StepReports): string => `Luff Crew tracks subagents (helper Claudes started with the Agent tool) and shows them on a live dashboard: model, effort, steps, context, estimated cost and time.

When you split a job across subagents:
1. After presenting the plan, call \`progress\` with a short title, the tasks (each title EXACTLY equal to the Agent \`description\` you will use) and phase "delegate".
2. The bar counts finished subagents by itself; call \`progress\` again only to switch \`phase\` to "review" or to re-plan.
3. When everything is finished, call \`progress\` once with \`finished: true\`.

${STEP_BRIEF[steps]}

Use \`crew_status\` to read the crew as text and \`open_dashboard\` when the user asks to see the agents panel.`

const taskSchema = z.object({
  title: z.string().min(1).describe('A few words; reuse it verbatim as the Agent tool description.'),
  agent: z.string().optional().describe('Subagent type it will run as, e.g. "general-purpose" or "Explore".'),
  model: z.string().optional().describe('Model it is expected to run on, e.g. "opus", "sonnet", "haiku".'),
  effort: z.enum(EFFORTS).optional().describe('Reasoning effort it will run with.'),
  after: z.array(z.number().int().positive()).optional().describe('Numbers (1-based) of the tasks this one waits for.'),
})

export async function runMcpServer(): Promise<void> {
  const cfg = loadConfig()
  const cwd = process.env.CLAUDE_PROJECT_DIR || process.cwd()
  const follow = process.env.CLAUDE_CODE_SESSION_ID
    ? { kind: 'project' as const, cwd, preferSessionId: process.env.CLAUDE_CODE_SESSION_ID }
    : { kind: 'project' as const, cwd }
  const monitor = new Monitor(follow, cfg)

  const server = new McpServer({ name: SERVER_NAME, title: 'Luff Crew Monitor', version: VERSION }, { instructions: instructions(cfg.stepReports) })

  server.registerTool(
    'progress',
    {
      title: 'Report job progress',
      description:
        'Report the progress of a multi-agent job to the Luff Crew dashboard and status line. ' +
        'Call it after presenting the plan (title, tasks, phase "delegate"), each time a task is accepted (done), ' +
        'when switching phase or re-planning (tasks), and once at the end with finished: true. ' +
        'Omitted fields keep their previous value; a new title starts a new job.',
      inputSchema: {
        title: z.string().optional().describe('Short name of the overall job, a few words.'),
        total: z.number().int().min(0).optional().describe('Number of planned worker tasks. Defaults to the number of tasks.'),
        done: z.number().int().min(0).optional().describe('Number of tasks accepted so far.'),
        phase: z.enum(PHASES).optional().describe('Where the job is: plan, design, delegate, review or close.'),
        finished: z.boolean().optional().describe('True once the whole job is closed.'),
        tasks: z.array(taskSchema).optional().describe('The planned worker tasks, in order, numbered from 1.'),
      },
      annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    },
    async args => {
      const input = args as ProgressInput
      monitor.tracker.noteProgress(input)
      await monitor.tracker.pinByProgressCall(input).catch(() => false)
      const snap = await monitor.refresh()
      let url = monitor.dashboardUrl
      if (snap.flow && input.tasks?.length) url = await monitor.autoOpenFor(snap.flow.title).catch(() => url)
      const label = snap.flow ? flowLabel(snap.flow, snap.lang) : 'ok'
      return { content: [{ type: 'text', text: `ok: ${label}${url ? ` · dashboard ${url}` : ''}` }] }
    },
  )

  // With step reports off, subagents never call it: keep its schema out of their requests.
  if (cfg.stepReports !== 'off') {
    server.registerTool(
      'step',
      {
        title: 'Report own step',
        description:
          'For subagents: report progress on your own task to the Luff Crew dashboard. ' +
          'Right after reading your brief, call it with `total` (your plan in 3-8 steps) and `done: 0`; ' +
          'call it again only as often as your brief asks. Silent: it only moves your progress bar.',
        inputSchema: {
          done: z.number().int().min(0).describe('Steps finished so far.'),
          total: z.number().int().min(1).optional().describe('Steps planned; may change if the plan changes.'),
          note: z.string().max(120).optional().describe('The step in progress, a few words.'),
        },
        annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
      },
      // The call itself is recorded in the worker's transcript, which is where the
      // dashboard reads it from: that is how it knows which worker reported.
      async () => ({ content: [{ type: 'text', text: 'ok' }] }),
    )
  }

  server.registerTool(
    'crew_status',
    {
      title: 'Crew status',
      description:
        'Read the current crew as text: running, finished and planned subagents with model, effort, steps, context, estimated cost and time, plus job progress.',
      inputSchema: {},
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async () => {
      const snap = await monitor.refresh()
      return { content: [{ type: 'text', text: renderStatus(snap, monitor.dashboardUrl ?? undefined) }] }
    },
  )

  server.registerTool(
    'open_dashboard',
    {
      title: 'Open agents dashboard',
      description: 'Open the live Luff Crew dashboard in the browser and return its URL. Use it when the user asks to see the agents panel.',
      inputSchema: {
        open: z.boolean().optional().describe('Set false to only start the dashboard and return its URL.'),
      },
      annotations: { readOnlyHint: true, openWorldHint: false },
    },
    async ({ open }) => {
      await monitor.poll()
      if (open === false) {
        const d = await monitor.ensureDashboard()
        return { content: [{ type: 'text', text: `Dashboard: ${d.url}` }] }
      }
      const { url, opened } = await monitor.openDashboard(true)
      return {
        content: [{ type: 'text', text: opened ? `Opened the dashboard: ${url}` : `Dashboard is at ${url} (could not open a browser here).` }],
      }
    },
  )

  server.registerPrompt(
    'agents-info',
    { title: 'Agents panel', description: 'Open the live agents dashboard and summarise the crew.' },
    () => ({
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: 'Call the luff-crew `open_dashboard` tool, then `crew_status`, and reply with the dashboard URL and a two-line summary of the crew (running, finished, estimated cost). Do not do anything else.',
          },
        },
      ],
    }),
  )

  const transport = new StdioServerTransport()
  await server.connect(transport)

  const shutdown = (): void => {
    void monitor.stop().finally(() => process.exit(0))
  }
  process.stdin.on('close', shutdown)
  process.on('SIGINT', shutdown)
  process.on('SIGTERM', shutdown)
}
