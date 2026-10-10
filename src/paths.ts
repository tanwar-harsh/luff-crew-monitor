import { existsSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { homedir } from 'node:os'
import { basename, join } from 'node:path'

/** Claude Code's config folder: `$CLAUDE_CONFIG_DIR` or `~/.claude`. */
export const claudeDir = (): string => process.env.CLAUDE_CONFIG_DIR || join(homedir(), '.claude')

export const projectsDir = (): string => join(claudeDir(), 'projects')

/** Claude Code names a project's folder after its path with every non-alphanumeric turned into `-`. */
export const encodeProject = (cwd: string): string => cwd.replace(/[^a-zA-Z0-9]/g, '-')

/** The transcripts folder for a working directory, or null when Claude Code has none yet. */
export async function findProjectDir(cwd: string): Promise<string | null> {
  const root = projectsDir()
  const exact = join(root, encodeProject(cwd))
  if (existsSync(exact)) return exact
  // Case-insensitive file systems and older encodings: compare loosely.
  const want = encodeProject(cwd).toLowerCase()
  try {
    for (const name of await readdir(root)) if (name.toLowerCase() === want) return join(root, name)
  } catch {
    // No projects folder yet.
  }
  return null
}

export interface SessionFile {
  id: string
  path: string
  projectDir: string
  mtimeMs: number
  birthtimeMs: number
}

const SESSION_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.jsonl$/i

/** Session transcripts in a project folder, newest first. */
export async function listSessions(projectDir: string): Promise<SessionFile[]> {
  let names: string[]
  try {
    names = await readdir(projectDir)
  } catch {
    return []
  }
  const out: SessionFile[] = []
  await Promise.all(
    names
      .filter(n => SESSION_RE.test(n))
      .map(async n => {
        const path = join(projectDir, n)
        try {
          const s = await stat(path)
          out.push({ id: basename(n, '.jsonl'), path, projectDir, mtimeMs: s.mtimeMs, birthtimeMs: s.birthtimeMs || s.ctimeMs })
        } catch {
          // Removed while listing.
        }
      }),
  )
  return out.sort((a, b) => b.mtimeMs - a.mtimeMs)
}

/** The most recently written session across every project. */
export async function newestSessionAnywhere(): Promise<SessionFile | null> {
  let dirs: string[]
  try {
    dirs = await readdir(projectsDir())
  } catch {
    return null
  }
  let best: SessionFile | null = null
  for (const d of dirs) {
    const [top] = await listSessions(join(projectsDir(), d))
    if (top && (!best || top.mtimeMs > best.mtimeMs)) best = top
  }
  return best
}

/** Where a session keeps its subagent transcripts. */
export const subagentsDir = (projectDir: string, sessionId: string): string => join(projectDir, sessionId, 'subagents')

/** This tool's own folder for config and caches. */
export const appDir = (): string => process.env.LUFF_CREW_HOME || join(homedir(), '.luff-crew')
