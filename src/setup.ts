import { spawnSync } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { configPath, DEFAULTS, loadConfig } from './config.ts'
import { SERVER_NAME } from './mcp.ts'
import { claudeDir, findProjectDir, listSessions } from './paths.ts'
import { VERSION } from './version.ts'

const MARKER = '<!-- luff-crew-monitor -->'

export const SLASH_COMMAND = `---
description: Open the live agents dashboard (running, finished and planned subagents with cost and time)
---
${MARKER}
Call the \`open_dashboard\` tool of the luff-crew MCP server, then \`crew_status\`.
Reply with the dashboard URL and a two-line summary of the crew: how many are running and finished, and the estimated cost so far. Do nothing else.
`

const STATUSLINE_TAG = 'luff-crew-monitor statusline'

export interface SetupOptions {
  scope: 'user' | 'project' | 'local'
  name: string
  command?: string[]
  statusline: boolean
  slashCommand: boolean
  dryRun: boolean
  force: boolean
}

const log = (msg: string): void => {
  process.stdout.write(msg + '\n')
}

const quote = (s: string): string => (/^[\w@%+=:,./-]+$/.test(s) ? s : `'${s.replace(/'/g, `'\\''`)}'`)

/** Where npx fetches the package from. Switch to `luff-crew-monitor@latest` once it is on npm. */
export const NPX_SPEC = 'github:tanwar-harsh/luff-crew-monitor'

/**
 * How Claude Code should start this server, based on how this copy was launched.
 * Absolute paths, because GUI apps often start without the shell's PATH (nvm, volta, ...).
 */
export function launchCommand(): string[] {
  const script = process.argv[1] ? realpathSync(resolve(process.argv[1])) : fileURLToPath(import.meta.url)
  if (/[\\/]_npx[\\/]/.test(script)) return ['npx', '-y', NPX_SPEC]
  return [process.execPath, script]
}

function claude(args: string[]): { ok: boolean; out: string } {
  const r = spawnSync('claude', args, { encoding: 'utf8', shell: process.platform === 'win32' })
  return { ok: r.status === 0, out: `${r.stdout ?? ''}${r.stderr ?? ''}`.trim() }
}

const hasClaudeCli = (): boolean => claude(['--version']).ok

function readSettings(path: string): Record<string, unknown> {
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as Record<string, unknown>
  } catch {
    return {}
  }
}

export function setup(opts: SetupOptions): number {
  const cmd = opts.command?.length ? opts.command : launchCommand()
  log(`Luff Crew Monitor ${VERSION} setup\n`)

  // 1. Register the MCP server with Claude Code.
  if (hasClaudeCli()) {
    const exists = claude(['mcp', 'get', opts.name]).ok
    if (exists && !opts.force) {
      log(`✓ MCP server "${opts.name}" is already registered (use --force to replace it).`)
    } else {
      if (exists && !opts.dryRun) claude(['mcp', 'remove', opts.name, '--scope', opts.scope])
      const args = ['mcp', 'add', '--scope', opts.scope, opts.name, '--', ...cmd]
      if (opts.dryRun) log(`would run: claude ${args.map(quote).join(' ')}`)
      else {
        const r = claude(args)
        if (!r.ok) {
          log(`✗ claude mcp add failed:\n${r.out}`)
          return 1
        }
        log(`✓ Registered MCP server "${opts.name}" (${opts.scope} scope): ${cmd.map(quote).join(' ')}`)
      }
    }
  } else {
    log('! The `claude` CLI was not found on PATH. Add this to your MCP config by hand:\n')
    log(JSON.stringify({ mcpServers: { [opts.name]: { command: cmd[0], args: cmd.slice(1) } } }, null, 2) + '\n')
  }

  // 2. The /agents-info slash command.
  if (opts.slashCommand) {
    const dir = join(claudeDir(), 'commands')
    const file = join(dir, 'agents-info.md')
    const existing = existsSync(file) ? readFileSync(file, 'utf8') : null
    if (existing !== null && !existing.includes(MARKER)) log(`! ${file} exists and is not ours: left as is.`)
    else if (opts.dryRun) log(`would write ${file}`)
    else {
      mkdirSync(dir, { recursive: true })
      writeFileSync(file, SLASH_COMMAND)
      log(`✓ Added the /agents-info command (${file}).`)
    }
  }

  // 3. Status line (opt-in: it edits ~/.claude/settings.json).
  if (opts.statusline) {
    const path = join(claudeDir(), 'settings.json')
    const settings = readSettings(path)
    const current = settings.statusLine as { type?: string; command?: string } | undefined
    const self = cmd.map(quote).join(' ')
    if (current?.command?.includes(STATUSLINE_TAG)) log('✓ The status line already includes Luff Crew.')
    else {
      const command = current?.command ? `${self} statusline --wrap ${quote(current.command)}` : `${self} statusline`
      if (opts.dryRun) log(`would set statusLine.command to: ${command}`)
      else {
        if (existsSync(path)) copyFileSync(path, `${path}.luff-crew.bak`)
        settings.statusLine = { ...(current ?? {}), type: 'command', command }
        writeFileSync(path, JSON.stringify(settings, null, 2) + '\n')
        log(`✓ Status line set${current?.command ? ' (your previous one still runs first)' : ''}. Backup: ${path}.luff-crew.bak`)
      }
    }
  }

  log(`
Next:
  1. Restart Claude Code (or run /mcp) so it picks up the server.
  2. Give Claude a job big enough for a few subagents, then type /agents-info.
Settings: ${configPath()} (port ${DEFAULTS.port}, language auto, autoOpen on).`)
  return 0
}

export function uninstall(opts: { scope: SetupOptions['scope']; name: string }): number {
  if (hasClaudeCli()) {
    const r = claude(['mcp', 'remove', opts.name, '--scope', opts.scope])
    log(r.ok ? `✓ Removed MCP server "${opts.name}".` : `- MCP server "${opts.name}" was not registered in ${opts.scope} scope.`)
  }
  const file = join(claudeDir(), 'commands', 'agents-info.md')
  if (existsSync(file) && readFileSync(file, 'utf8').includes(MARKER)) {
    rmSync(file)
    log('✓ Removed the /agents-info command.')
  }
  const path = join(claudeDir(), 'settings.json')
  const settings = readSettings(path)
  const line = settings.statusLine as { command?: string } | undefined
  if (line?.command?.includes(STATUSLINE_TAG)) {
    const wrapped = /--wrap\s+('(?:[^']|'\\'')*'|\S+)\s*$/.exec(line.command)?.[1]
    if (wrapped) settings.statusLine = { ...line, command: wrapped.startsWith("'") ? wrapped.slice(1, -1).replace(/'\\''/g, "'") : wrapped }
    else delete settings.statusLine
    writeFileSync(path, JSON.stringify(settings, null, 2) + '\n')
    log(wrapped ? '✓ Restored your previous status line.' : '✓ Removed the Luff Crew status line.')
  }
  return 0
}

export async function doctor(): Promise<number> {
  let problems = 0
  const ok = (m: string): void => log(`✓ ${m}`)
  const bad = (m: string): void => {
    problems++
    log(`✗ ${m}`)
  }
  const [major = 0, minor = 0] = process.versions.node.split('.').map(Number)
  if (major > 18 || (major === 18 && minor >= 17)) ok(`Node ${process.versions.node}`)
  else bad(`Node ${process.versions.node}: 18.17 or newer is required`)

  const cli = claude(['--version'])
  if (cli.ok) ok(`Claude Code ${cli.out.split('\n')[0]}`)
  else bad('`claude` CLI not found on PATH (the dashboard still works; setup must be done by hand)')

  if (cli.ok) {
    const reg = claude(['mcp', 'get', SERVER_NAME])
    if (reg.ok) ok(`MCP server "${SERVER_NAME}" is registered`)
    else log(`- MCP server "${SERVER_NAME}" is not registered via \`claude mcp\` (fine if you installed the plugin). Run: luff-crew-monitor setup`)
  }

  const dir = claudeDir()
  if (existsSync(join(dir, 'projects'))) ok(`Transcripts folder: ${join(dir, 'projects')}`)
  else bad(`No transcripts folder at ${join(dir, 'projects')}: has Claude Code run on this machine?`)

  const project = await findProjectDir(process.cwd())
  if (project) {
    const sessions = await listSessions(project)
    ok(`This folder has ${sessions.length} Claude Code session(s)${sessions[0] ? `, latest ${sessions[0].id.slice(0, 8)}` : ''}`)
  } else log(`- No Claude Code sessions for ${process.cwd()} yet (normal before the first run here).`)

  const cfg = loadConfig()
  ok(`Config: ${existsSync(configPath()) ? configPath() : 'defaults'} (port ${cfg.port}, language ${cfg.language}, autoOpen ${cfg.autoOpen})`)
  log(problems ? `\n${problems} problem(s) found.` : '\nAll good.')
  return problems ? 1 : 0
}
