import { open, stat } from 'node:fs/promises'

/** A line of a Claude Code transcript. Only the fields this tool reads are typed. */
export interface TranscriptLine {
  type?: string
  uuid?: string
  timestamp?: string
  sessionId?: string
  agentId?: string
  isSidechain?: boolean
  cwd?: string
  effort?: string
  operation?: string
  content?: unknown
  message?: {
    id?: string
    model?: string
    role?: string
    stop_reason?: string | null
    usage?: Record<string, unknown>
    content?: unknown
  }
  toolUseResult?: unknown
}

export interface ContentBlock {
  type?: string
  id?: string
  name?: string
  input?: unknown
  tool_use_id?: string
  is_error?: boolean
  content?: unknown
  text?: string
}

export const blocksOf = (line: TranscriptLine): ContentBlock[] => {
  const c = line.message?.content
  return Array.isArray(c) ? (c.filter(b => b && typeof b === 'object') as ContentBlock[]) : []
}

export const timeOf = (line: TranscriptLine, fallback: number): number => {
  const t = line.timestamp ? Date.parse(line.timestamp) : NaN
  return Number.isFinite(t) ? t : fallback
}

const CHUNK = 1 << 20

/**
 * Reads a JSONL file incrementally: each `read()` returns only the complete lines
 * appended since the previous call. Survives truncation and rewrites by starting over.
 */
export class JsonlTail {
  readonly path: string
  private offset = 0
  private rest: Buffer = Buffer.alloc(0)
  private ino = 0
  /** mtime of the file at the last read, in epoch ms. */
  mtimeMs = 0
  size = 0

  private readonly keep: ((raw: string) => boolean) | undefined

  /** `keep` skips JSON parsing of lines the caller has no use for. */
  constructor(path: string, keep?: (raw: string) => boolean) {
    this.path = path
    this.keep = keep
  }

  /** New complete lines since the last call; `reset` is true when the file was replaced. */
  async read(): Promise<{ lines: TranscriptLine[]; reset: boolean }> {
    let info
    try {
      info = await stat(this.path)
    } catch {
      return { lines: [], reset: false }
    }
    let reset = false
    if (info.size < this.offset || (this.ino && info.ino !== this.ino)) {
      this.offset = 0
      this.rest = Buffer.alloc(0)
      reset = true
    }
    this.ino = info.ino
    this.mtimeMs = info.mtimeMs
    this.size = info.size
    if (info.size === this.offset) return { lines: [], reset }

    const fh = await open(this.path, 'r')
    const parts: Buffer[] = [this.rest]
    try {
      while (this.offset < info.size) {
        const len = Math.min(CHUNK, info.size - this.offset)
        const buf = Buffer.alloc(len)
        const { bytesRead } = await fh.read(buf, 0, len, this.offset)
        if (bytesRead <= 0) break
        this.offset += bytesRead
        parts.push(buf.subarray(0, bytesRead))
      }
    } finally {
      await fh.close()
    }

    // Split on the newline byte before decoding, so a multi-byte character cut
    // by a chunk boundary or a half-written line stays intact for the next read.
    const bytes = Buffer.concat(parts)
    const cut = bytes.lastIndexOf(0x0a)
    if (cut < 0) {
      this.rest = bytes
      return { lines: [], reset }
    }
    this.rest = Buffer.from(bytes.subarray(cut + 1))
    return { lines: parseLines(bytes.subarray(0, cut).toString('utf8'), this.keep), reset }
  }
}

export function parseLines(text: string, keep?: (raw: string) => boolean): TranscriptLine[] {
  const out: TranscriptLine[] = []
  for (const raw of text.split('\n')) {
    const line = raw.trim()
    if (!line || line[0] !== '{') continue
    if (keep && !keep(line)) continue
    try {
      out.push(JSON.parse(line) as TranscriptLine)
    } catch {
      // A torn or foreign line: skip it rather than stop following the file.
    }
  }
  return out
}

/** Pulls `<task-id>` / `<status>` pairs out of background-task notifications. */
export function taskNotifications(text: string): Array<{ taskId: string; status: string; toolUseId?: string }> {
  const out: Array<{ taskId: string; status: string; toolUseId?: string }> = []
  const re = /<task-notification>([\s\S]*?)<\/task-notification>/g
  for (let m = re.exec(text); m; m = re.exec(text)) {
    const body = m[1] ?? ''
    const taskId = /<task-id>\s*([^<\s]+)\s*<\/task-id>/.exec(body)?.[1]
    const status = /<status>\s*([^<\s]+)\s*<\/status>/.exec(body)?.[1]
    const toolUseId = /<tool-use-id>\s*([^<\s]+)\s*<\/tool-use-id>/.exec(body)?.[1]
    if (taskId && status) out.push(toolUseId ? { taskId, status, toolUseId } : { taskId, status })
  }
  return out
}

/** Every string inside a value, for scanning content of unknown shape. */
export function textOf(value: unknown, depth = 0): string {
  if (typeof value === 'string') return value
  if (depth > 6 || !value || typeof value !== 'object') return ''
  if (Array.isArray(value)) return value.map(v => textOf(v, depth + 1)).join('\n')
  return Object.values(value as Record<string, unknown>).map(v => textOf(v, depth + 1)).join('\n')
}
