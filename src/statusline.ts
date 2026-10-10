import { spawn } from 'node:child_process'

import { loadConfig, resolveLang } from './config.ts'
import { renderStatusline } from './render-text.ts'
import { CrewTracker } from './tracker.ts'

interface StatusInput {
  session_id?: string
  transcript_path?: string
  cwd?: string
}

async function readStdin(timeoutMs: number): Promise<string> {
  if (process.stdin.isTTY) return ''
  return new Promise(resolve => {
    let data = ''
    const done = (): void => resolve(data)
    const timer = setTimeout(done, timeoutMs)
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
    const child = spawn(command, { shell: true, stdio: ['pipe', 'pipe', 'ignore'] })
    let out = ''
    const timer = setTimeout(() => {
      child.kill()
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
 * session it is given. With `--wrap`, an existing status line keeps working
 * and this segment is appended to it.
 */
export async function runStatusline(opts: { wrap?: string; color: boolean }): Promise<void> {
  const raw = await readStdin(1500)
  const wrapped = opts.wrap ? runWrapped(opts.wrap, raw) : Promise.resolve('')

  let ours = ''
  try {
    const input = (raw ? JSON.parse(raw) : {}) as StatusInput
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
