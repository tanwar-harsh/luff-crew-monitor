import assert from 'node:assert/strict'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it } from 'node:test'

import { renderStatus, renderStatusline } from '../src/render-text.ts'
import { CrewTracker, isOwnTool, progressKey } from '../src/tracker.ts'
import { FakeSession, T0, usage } from './helpers.ts'

const clock = (offsetMs: { at: number }) => () => T0 + offsetMs.at

function tracked(s: FakeSession, at: { at: number }, stallMs = 30 * 60_000): CrewTracker {
  return new CrewTracker({ follow: { kind: 'transcript', path: s.transcript }, now: clock(at), stallMs })
}

describe('CrewTracker', () => {
  it('follows a foreground run from launch to result', async () => {
    const s = new FakeSession()
    const at = { at: 1_000 }
    const t = tracked(s, at)

    s.spawnAgent('toolu_A', 0, { description: 'Add JSDoc to src', subagent_type: 'general-purpose', prompt: 'Do it' })
    await t.poll()
    let [run] = t.snapshot('en').agents
    assert.equal(run?.status, 'running', 'a launch shows up before its transcript exists')
    assert.equal(run?.description, 'Add JSDoc to src')

    s.meta('a1', { agentType: 'general-purpose', description: 'Add JSDoc to src', toolUseId: 'toolu_A', spawnDepth: 1 })
    s.agentPrompt('a1', 100, 'Do it')
    // Two streamed blocks of one message: counted once, with the final usage.
    s.agentReply('a1', 2_000, { id: 'msg_1', effort: 'low', usage: usage(10, 5, 30_000, 10_000) })
    s.agentReply('a1', 2_100, {
      id: 'msg_1',
      effort: 'low',
      usage: usage(10, 50, 30_000, 10_000),
      content: [{ type: 'tool_use', id: 'tu_s1', name: 'mcp__luff-crew__step', input: { done: 1, total: 4, note: 'reading files' } }],
    })
    s.agentReply('a1', 5_000, { id: 'msg_2', effort: 'low', stop: 'end_turn', usage: usage(5, 200, 40_050, 0) })
    at.at = 6_000
    await t.poll()

    ;[run] = t.snapshot('en').agents
    assert.equal(t.snapshot('en').agents.length, 1, 'launch and transcript merge into one run')
    assert.equal(run?.status, 'running', 'end_turn alone is not proof of completion yet')
    assert.equal(run?.effort, 'low')
    assert.equal(run?.model, 'claude-opus-5-5')
    assert.equal(run?.requests, 2)
    assert.equal(run?.tokens, 40_060 + 40_255)
    assert.equal(run?.contextTokens, 40_255)
    assert.deepEqual(run?.step, { done: 1, total: 4, note: 'reading files' })
    const expected = (10 * 4 + 50 * 20 + 30_000 * 0.2 + 10_000 * 5 + 5 * 4 + 200 * 20 + 40_050 * 0.2) / 1e6
    assert.ok(Math.abs((run?.costUsd ?? 0) - expected) < 1e-12)

    s.toolResult('toolu_A', 5_500, { status: 'completed', agentId: 'a1', totalDurationMs: 5_400 })
    await t.poll()
    ;[run] = t.snapshot('en').agents
    assert.equal(run?.status, 'done')
    assert.equal(run?.endedAt, T0 + 5_500)
  })

  it('completes background runs from task notifications and marks failures', async () => {
    const s = new FakeSession()
    const at = { at: 0 }
    const t = tracked(s, at)
    s.spawnAgent('toolu_B', 0, { description: 'Survey schema', subagent_type: 'Explore', run_in_background: true })
    s.toolResult('toolu_B', 50, { isAsync: true, status: 'async_launched', agentId: 'b1' })
    s.meta('b1', { agentType: 'Explore', description: 'Survey schema', toolUseId: 'toolu_B', requestShape: 'background' })
    s.agentReply('b1', 1_000, { id: 'm', model: 'claude-sonnet-5', usage: usage(1, 1) })

    s.spawnAgent('toolu_C', 10, { description: 'Broken task', subagent_type: 'general-purpose' })
    s.toolResult('toolu_C', 900, {}, true)

    at.at = 2_000
    await t.poll()
    let snap = t.snapshot('en')
    const b = snap.agents.find(r => r.id === 'b1')
    assert.equal(b?.status, 'running')
    assert.equal(b?.background, true)
    assert.equal(b?.type, 'Explore')
    const c = snap.agents.find(r => r.description === 'Broken task')
    assert.equal(c?.status, 'failed')
    assert.equal(c?.failure, 'error')

    s.notify('b1', 3_000, 'completed')
    at.at = 3_500
    await t.poll()
    snap = t.snapshot('en')
    assert.equal(snap.agents.find(r => r.id === 'b1')?.status, 'done')
    assert.equal(snap.totals.done, 1)
    assert.equal(snap.totals.failed, 1)
  })

  it('falls back to idle end_turn and to stall detection', async () => {
    const s = new FakeSession()
    const at = { at: 0 }
    const t = tracked(s, at, 60_000)
    s.agentReply('quiet', 0, { id: 'q', stop: 'end_turn', usage: usage(1, 1) })
    s.agentReply('stuck', 0, { id: 's', stop: 'tool_use', usage: usage(1, 1) })
    at.at = 5_000
    await t.poll()
    assert.deepEqual(
      t.snapshot('en').agents.map(r => r.status),
      ['running', 'running'],
    )
    // The tracker also looks at file mtimes: pretend both files went quiet long ago.
    at.at = Date.now() - T0 + 120_000
    await t.poll()
    const runs = t.snapshot('en').agents
    assert.equal(runs.find(r => r.id === 'quiet')?.status, 'done')
    assert.equal(runs.find(r => r.id === 'stuck')?.failure, 'stalled')
  })

  it('rebuilds the job from progress calls and lists planned tasks', async () => {
    const s = new FakeSession()
    const at = { at: 0 }
    const t = tracked(s, at)
    s.progress('p1', 0, {
      title: 'JSDoc + greet test',
      phase: 'delegate',
      tasks: [
        { title: 'Add JSDoc to src functions', effort: 'low' },
        { title: 'Write greet() node:test file', effort: 'low' },
        { title: 'Update README', after: [1, 2] },
      ],
    })
    s.spawnAgent('toolu_1', 100, { description: 'Add JSDoc to src functions', subagent_type: 'general-purpose' })
    s.progress('p2', 200, { done: 1 }, 'mcp__plugin_luff-crew-monitor_luff-crew__progress')
    at.at = 1_000
    await t.poll()
    const snap = t.snapshot('en')
    assert.equal(snap.flow?.title, 'JSDoc + greet test')
    assert.equal(snap.flow?.done, 1)
    assert.equal(snap.flow?.total, 3)
    assert.deepEqual(
      snap.planned.map(p => p.n),
      [2, 3],
    )
    assert.deepEqual(snap.planned[1]?.after, [1, 2])
    assert.match(renderStatus(snap), /JSDoc \+ greet test .* Tasks 1\/3 {2}33%/)
    assert.match(renderStatusline(snap, { color: false }), /⛵ JSDoc \+ greet test .* Tasks 1\/3 33% {2}×3 1● ≈\$0\.00/)
  })

  it('applies a direct progress call at once and drops it when its transcript line lands', async () => {
    const s = new FakeSession()
    const at = { at: 0 }
    const t = tracked(s, at)
    const input = { title: 'Job', tasks: [{ title: 'one' }], phase: 'delegate' as const }
    t.noteProgress(input)
    await t.poll()
    assert.equal(t.snapshot('en').flow?.total, 1)

    // The model wrote fields in another order and with padding: same call.
    s.progress('p1', 0, { phase: 'delegate', tasks: [{ title: ' one ' }], title: 'Job ' })
    at.at = 10
    t.noteProgress({ finished: true })
    s.progress('p2', 10, { finished: true })
    await t.poll()
    const f = t.snapshot('en').flow
    assert.equal(f?.finished, true)
    assert.equal(f?.startedAt, T0, 'deduplicated: the finished call did not open a second job')
  })

  it('numbers retries of the same task as rounds', async () => {
    const s = new FakeSession()
    const t = tracked(s, { at: 10_000 })
    s.spawnAgent('t1', 0, { description: 'Fix login bug' })
    s.toolResult('t1', 100, {}, true)
    s.spawnAgent('t2', 200, { description: 'Fix login bug' })
    await t.poll()
    assert.deepEqual(
      t.snapshot('en').agents.map(r => [r.round, r.status]),
      [
        [1, 'failed'],
        [2, 'running'],
      ],
    )
  })

  it('uses the Agent result summary when no subagent transcript exists', async () => {
    const s = new FakeSession()
    const t = tracked(s, { at: 10_000 })
    s.spawnAgent('t1', 0, { description: 'Old style run' })
    s.toolResult('t1', 3_000, { status: 'completed', resolvedModel: 'claude-sonnet-5', totalDurationMs: 2_900, usage: usage(100, 1_000, 20_000, 0) })
    await t.poll()
    const [run] = t.snapshot('en').agents
    assert.equal(run?.status, 'done')
    assert.equal(run?.model, 'claude-sonnet-5')
    assert.equal(run?.tokens, 21_100)
    assert.equal(run?.endedAt, T0 + 2_900)
  })

  it('finds the project and session of a working directory', async () => {
    const s = new FakeSession()
    process.env.CLAUDE_CONFIG_DIR = s.root
    try {
      s.spawnAgent('t1', 0, { description: 'From project mode' })
      const t = new CrewTracker({ follow: { kind: 'project', cwd: s.cwd }, now: clock({ at: 1_000 }) })
      await t.poll()
      const snap = t.snapshot('en')
      assert.equal(snap.session?.id, s.sessionId)
      assert.equal(snap.agents[0]?.description, 'From project mode')
    } finally {
      delete process.env.CLAUDE_CONFIG_DIR
    }
  })

  it('reads subagent turns written inline by older Claude Code versions', async () => {
    const s = new FakeSession()
    const t = tracked(s, { at: 1_000 })
    s.main({
      type: 'assistant',
      isSidechain: true,
      agentId: 'legacy',
      timestamp: new Date(T0).toISOString(),
      message: { id: 'x', model: 'claude-haiku-5-5', stop_reason: null, usage: usage(1, 1), content: [{ type: 'tool_use', id: 'u', name: 'Read', input: {} }] },
    })
    await t.poll()
    assert.equal(t.snapshot('en').agents[0]?.model, 'claude-haiku-5-5')
  })

  it('survives a corrupt meta file', async () => {
    const s = new FakeSession()
    writeFileSync(join(s.subagents, 'agent-z.meta.json'), '{not json')
    s.agentReply('z', 0, { id: 'm', usage: usage(1, 1) })
    const t = tracked(s, { at: 1_000 })
    await t.poll()
    assert.equal(t.snapshot('en').agents[0]?.type, 'agent')
  })
})

describe('helpers', () => {
  it('recognizes own tools under any client prefix', () => {
    assert.ok(isOwnTool('mcp__luff-crew__progress', 'progress'))
    assert.ok(isOwnTool('mcp__plugin_luff-crew-monitor_luff-crew__step', 'step'))
    assert.ok(!isOwnTool('mcp__other__progress', 'progress'))
    assert.ok(!isOwnTool('mcp__luff-crew__progress', 'step'))
  })

  it('keys progress calls independent of order and padding', () => {
    assert.equal(progressKey({ title: 'a ', done: 1 }), progressKey({ done: 1, title: 'a' }))
    assert.notEqual(progressKey({ done: 1 }), progressKey({ done: 2 }))
  })
})
