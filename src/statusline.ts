import { spawn } from 'node:child_process'

import { loadConfig, resolveLang } from './config.ts'
import { savePlanLimits } from './limits.ts'
import { renderStatusline } from './render-text.ts'
import { CrewTracker } from './tracker.ts'

interface StatusInput {
  session_id?: string
  transcript_path?: string
  cwd?: string
  /** Claude.ai plan usage: 5-hour and weekly windows. */
  rate_limits?: unknown
}

async function readStdin(timeoutMs: number): Promise<string> {
  if (process.stdin.isTTY) return ''
  return new Promise(resolve => {
    let data = ''
    const done = (): void => resolve(data)
    // On timeout the input may be cut off mid-JSON: treat it as no input.
    const timer = setTimeout(() => resolve(''), timeoutMs)
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', chunk => (data += chunk))
    process.stdin.on('end', () => {
      clearTimeout(timer)
      done()
    })
  })
}

/** Runs another status line command with the same input and returns its output. */
function runWrapped(command: string, input: string): Promise<string> {
  return new Promise(resolve => {
    // Own process group (POSIX), so a timeout can take down the shell's children too.
    const group = process.platform !== 'win32'
    const child = spawn(command, { shell: true, detached: group, stdio: ['pipe', 'pipe', 'ignore'] })
    let out = ''
    const timer = setTimeout(() => {
      try {
        if (group && child.pid) process.kill(-child.pid, 'SIGKILL')
        else child.kill()
      } catch {
        child.kill()
      }
      resolve(out)
    }, 4000)
    child.stdout.setEncoding('utf8')
    child.stdout.on('data', c => (out += c))
    child.on('close', () => {
      clearTimeout(timer)
      resolve(out)
    })
    child.on('error', () => {
      clearTimeout(timer)
      resolve(out)
    })
    child.stdin.on('error', () => {})
    child.stdin.end(input)
  })
}

/**
 * Claude Code's status line hook: prints the job bar and crew totals for the
 * session it is given, and records the plan's 5-hour and weekly usage. With `--wrap`, an existing status line keeps working
 * and this segment is appended to it.
 */
export async function runStatusline(opts: { wrap?: string; color: boolean }): Promise<void> {
  const raw = await readStdin(1500)
  const wrapped = opts.wrap ? runWrapped(opts.wrap, raw) : Promise.resolve('')

  let ours = ''
  try {
    const input = (raw ? JSON.parse(raw) : {}) as StatusInput
    // Only the status line sees plan limits: keep them for the dashboard's limits panel.
    if (input.rate_limits) savePlanLimits(input.rate_limits)
    if (input.transcript_path) {
      const cfg = loadConfig()
      const tracker = new CrewTracker({ follow: { kind: 'transcript', path: input.transcript_path }, stallMs: cfg.stallMinutes * 60_000 })
      await tracker.poll()
      ours = renderStatusline(tracker.snapshot(resolveLang(cfg)), { color: opts.color })
    }
  } catch {
    // A status line must never fail loudly.
  }

  const theirs = (await wrapped).replace(/\s+$/, '')
  process.stdout.write([theirs, ours].filter(Boolean).join('  ') + '\n')
}
