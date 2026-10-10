import { resolve } from 'node:path'
import { parseArgs } from 'node:util'

import { loadConfig } from './config.ts'
import { runMcpServer, SERVER_NAME } from './mcp.ts'
import { Monitor } from './monitor.ts'
import { renderStatus } from './render-text.ts'
import { doctor, setup, uninstall } from './setup.ts'
import { runStatusline } from './statusline.ts'
import type { FollowMode } from './tracker.ts'
import { VERSION } from './version.ts'

const HELP = `luff-crew-monitor ${VERSION}
Live dashboard of Claude Code subagents: model, effort, steps, context, estimated cost and time.

Usage
  luff-crew-monitor                 Run as an MCP server over stdio (how Claude Code starts it)
  luff-crew-monitor setup           Register with Claude Code and add the /agents-info command
      --scope user|project|local      Where to register (default: user)
      --statusline                    Also add the job bar to Claude Code's status line and record plan limits
      --force                         Replace an existing registration
      --dry-run                       Show what would change
  luff-crew-monitor dashboard       Open the dashboard without Claude (follows the latest session)
      --project <dir>                 Follow the sessions of this folder instead
      --session <id>                  Follow one session of that folder
      --port <n>  --no-open
  luff-crew-monitor status          Print the crew once as text (same options as dashboard)
  luff-crew-monitor statusline      Status line command; reads Claude Code's JSON on stdin
      --wrap "<command>"              Run your existing status line first and append to it
      --no-color
  luff-crew-monitor doctor          Check the installation
  luff-crew-monitor uninstall       Undo setup

Config: ~/.luff-crew/config.json or LUFF_CREW_PORT, LUFF_CREW_LANG, LUFF_CREW_AUTO_OPEN.
`

function followFrom(values: { project?: string; session?: string }): FollowMode {
  if (values.project || values.session) {
    const cwd = resolve(values.project ?? process.cwd())
    return values.session ? { kind: 'project', cwd, preferSessionId: values.session } : { kind: 'project', cwd }
  }
  return { kind: 'anywhere' }
}

async function main(argv: string[]): Promise<number> {
  const [cmd, ...rest] = argv

  if (cmd === '--version' || cmd === '-v') {
    process.stdout.write(VERSION + '\n')
    return 0
  }
  if (cmd === '--help' || cmd === '-h' || cmd === 'help') {
    process.stdout.write(HELP)
    return 0
  }
  if (cmd === undefined || cmd === 'serve' || cmd === 'mcp') {
    // Started by hand in a terminal: explain instead of waiting for JSON-RPC.
    if (cmd === undefined && process.stdin.isTTY) {
      process.stdout.write(HELP)
      return 0
    }
    await runMcpServer()
    return -1 // keep running
  }

  if (cmd === 'setup' || cmd === 'uninstall') {
    const { values } = parseArgs({
      args: rest,
      options: {
        scope: { type: 'string', default: 'user' },
        name: { type: 'string', default: SERVER_NAME },
        statusline: { type: 'boolean', default: false },
        'no-command': { type: 'boolean', default: false },
        force: { type: 'boolean', default: false },
        'dry-run': { type: 'boolean', default: false },
      },
    })
    const scope = values.scope === 'project' || values.scope === 'local' ? values.scope : 'user'
    if (cmd === 'uninstall') return uninstall({ scope, name: values.name })
    return setup({
      scope,
      name: values.name,
      statusline: values.statusline,
      slashCommand: !values['no-command'],
      dryRun: values['dry-run'],
      force: values.force,
    })
  }

  if (cmd === 'doctor') return doctor()

  if (cmd === 'statusline') {
    const { values } = parseArgs({
      args: rest,
      options: { wrap: { type: 'string' }, 'no-color': { type: 'boolean', default: false } },
    })
    await runStatusline({ ...(values.wrap ? { wrap: values.wrap } : {}), color: !values['no-color'] && !process.env.NO_COLOR })
    return 0
  }

  if (cmd === 'dashboard' || cmd === 'status') {
    const { values } = parseArgs({
      args: rest,
      options: {
        project: { type: 'string' },
        session: { type: 'string' },
        port: { type: 'string' },
        'no-open': { type: 'boolean', default: false },
      },
    })
    const cfg = loadConfig()
    if (values.port) cfg.port = Number(values.port) || cfg.port
    const monitor = new Monitor(followFrom(values), cfg, { alwaysPoll: cmd === 'dashboard' })
    if (cmd === 'status') {
      process.stdout.write(renderStatus(await monitor.refresh()) + '\n')
      return 0
    }
    await monitor.poll()
    const d = await monitor.ensureDashboard()
    process.stdout.write(`Luff Crew dashboard: ${d.url}\nPress Ctrl+C to stop.\n`)
    if (!values['no-open']) await monitor.openDashboard(true)
    const stop = (): void => {
      void monitor.stop().finally(() => process.exit(0))
    }
    process.on('SIGINT', stop)
    process.on('SIGTERM', stop)
    return -1
  }

  process.stderr.write(`Unknown command: ${cmd}\n\n${HELP}`)
  return 2
}

main(process.argv.slice(2)).then(
  code => {
    if (code >= 0) process.exitCode = code
  },
  (err: unknown) => {
    process.stderr.write(`luff-crew-monitor: ${err instanceof Error ? (err.stack ?? err.message) : String(err)}\n`)
    process.exitCode = 1
  },
)
