import { appendFileSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { encodeProject } from '../src/paths.ts'

export const T0 = Date.parse('2026-10-01T10:00:00.000Z')
export const iso = (offsetMs: number): string => new Date(T0 + offsetMs).toISOString()

/** A fake `~/.claude` with one project and one session, written line by line. */
export class FakeSession {
  readonly root: string
  readonly cwd = '/work/demo-app'
  readonly sessionId = '11111111-2222-4333-8444-555555555555'
  readonly projectDir: string
  readonly transcript: string
  readonly subagents: string

  constructor() {
    this.root = mkdtempSync(join(tmpdir(), 'luff-crew-test-'))
    this.projectDir = join(this.root, 'projects', encodeProject(this.cwd))
    this.subagents = join(this.projectDir, this.sessionId, 'subagents')
    mkdirSync(this.subagents, { recursive: true })
    this.transcript = join(this.projectDir, `${this.sessionId}.jsonl`)
    writeFileSync(this.transcript, '')
  }

  main(line: Record<string, unknown>): void {
    appendFileSync(this.transcript, JSON.stringify({ sessionId: this.sessionId, cwd: this.cwd, ...line }) + '\n')
  }

  spawnAgent(toolUseId: string, at: number, input: Record<string, unknown>): void {
    this.main({
      type: 'assistant',
      timestamp: iso(at),
      message: { role: 'assistant', model: 'claude-opus-5-5', content: [{ type: 'tool_use', id: toolUseId, name: 'Agent', input }] },
    })
  }

  toolResult(toolUseId: string, at: number, result: Record<string, unknown>, isError = false): void {
    this.main({
      type: 'user',
      timestamp: iso(at),
      message: { role: 'user', content: [{ type: 'tool_result', tool_use_id: toolUseId, is_error: isError, content: 'result' }] },
      toolUseResult: result,
    })
  }

  progress(id: string, at: number, input: Record<string, unknown>, tool = 'mcp__luff-crew__progress'): void {
    this.main({
      type: 'assistant',
      timestamp: iso(at),
      message: { role: 'assistant', model: 'claude-opus-5-5', content: [{ type: 'tool_use', id, name: tool, input }] },
    })
  }

  notify(agentId: string, at: number, status: string): void {
    this.main({
      type: 'queue-operation',
      operation: 'enqueue',
      timestamp: iso(at),
      content: `<task-notification>\n<task-id>${agentId}</task-id>\n<status>${status}</status>\n<summary>Agent finished</summary>\n</task-notification>`,
    })
  }

  meta(agentId: string, meta: Record<string, unknown>): void {
    writeFileSync(join(this.subagents, `agent-${agentId}.meta.json`), JSON.stringify(meta))
  }

  agent(agentId: string, line: Record<string, unknown>): void {
    appendFileSync(join(this.subagents, `agent-${agentId}.jsonl`), JSON.stringify({ agentId, isSidechain: true, sessionId: this.sessionId, ...line }) + '\n')
  }

  agentPrompt(agentId: string, at: number, text: string): void {
    this.agent(agentId, { type: 'user', timestamp: iso(at), message: { role: 'user', content: text } })
  }

  /** One streamed assistant block; several share a message id. */
  agentReply(
    agentId: string,
    at: number,
    opts: { id: string; model?: string; effort?: string; stop?: string | null; usage: Record<string, unknown>; content?: unknown[] },
  ): void {
    this.agent(agentId, {
      type: 'assistant',
      timestamp: iso(at),
      effort: opts.effort ?? 'high',
      message: {
        id: opts.id,
        role: 'assistant',
        model: opts.model ?? 'claude-opus-5-5',
        stop_reason: opts.stop ?? null,
        usage: opts.usage,
        content: opts.content ?? [{ type: 'text', text: '…' }],
      },
    })
  }
}

export const usage = (input: number, output: number, read = 0, write = 0): Record<string, number> => ({
  input_tokens: input,
  output_tokens: output,
  cache_read_input_tokens: read,
  cache_creation_input_tokens: write,
})
