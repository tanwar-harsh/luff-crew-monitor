import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { applyProgress, cleanTasks, doneCount, pendingTasks, startsNewFlow, viewFlow, visibleRuns } from '../src/flow.ts'
import type { AgentRun } from '../src/types.ts'

const run = (description: string, status: AgentRun['status'], extra: Partial<AgentRun> = {}): AgentRun => ({
  id: description,
  type: 'general-purpose',
  description,
  model: 'claude-opus-5-5',
  status,
  background: false,
  startedAt: 100,
  lastActivityAt: 100,
  contextTokens: 0,
  contextMax: 1_000_000,
  tokens: 0,
  costUsd: 0,
  requests: 0,
  round: 1,
  depth: 1,
  ...extra,
})

describe('applyProgress', () => {
  it('starts a job from a plan, counting tasks as the total', () => {
    const f = applyProgress(null, { title: ' Auth refactor ', phase: 'delegate', tasks: [{ title: 'A' }, { title: 'B' }, { title: ' ' }] }, 10)
    assert.equal(f.title, 'Auth refactor')
    assert.equal(f.total, 2)
    assert.equal(f.done, 0)
    assert.equal(f.phase, 'delegate')
    assert.deepEqual(
      f.tasks.map(t => t.title),
      ['A', 'B'],
    )
    assert.equal(f.startedAt, 10)
  })

  it('keeps omitted fields and clamps done to the total', () => {
    const a = applyProgress(null, { title: 'Job', total: 3 }, 1)
    const b = applyProgress(a, { done: 9 }, 2)
    assert.equal(b.title, 'Job')
    assert.equal(b.total, 3)
    assert.equal(b.done, 3)
    assert.equal(b.startedAt, 1)
    assert.equal(b.updatedAt, 2)
  })

  it('opens a new job on a new title or after the last one finished', () => {
    const a = applyProgress(null, { title: 'One', total: 2, done: 1 }, 1)
    assert.equal(startsNewFlow(a, { title: 'One' }), false)
    assert.equal(startsNewFlow(a, { title: 'Two' }), true)
    const b = applyProgress(a, { title: 'Two' }, 5)
    assert.equal(b.done, 0, 'counters never carry over to a new job')
    assert.equal(b.startedAt, 5)
    const closed = applyProgress(b, { finished: true }, 6)
    assert.equal(closed.phase, 'close')
    assert.equal(startsNewFlow(closed, {}), true)
  })

  it('marks every task done when the job finishes', () => {
    const f = applyProgress(applyProgress(null, { title: 'J', total: 4, done: 1 }, 1), { finished: true }, 2)
    assert.equal(f.done, 4)
    assert.equal(viewFlow(f, [])?.ratio, 1)
  })

  it('ignores unknown phases and bad numbers', () => {
    const f = applyProgress(null, { title: 'J', phase: 'nope' as never, total: -4, done: Number.NaN }, 1)
    assert.equal(f.phase, 'plan')
    assert.equal(f.total, 0)
    assert.equal(f.done, 0)
  })
})

describe('cleanTasks', () => {
  it('normalizes fields and drops self or invalid dependencies', () => {
    const [t1, t2] = cleanTasks([
      { title: 'a', effort: ' HIGH ', after: [1, 0, -2, 1.5] },
      { title: 'b', after: [1, 1, 2] },
    ])!
    assert.equal(t1?.effort, 'high')
    assert.deepEqual(t1?.after, [])
    assert.deepEqual(t2?.after, [1])
  })
})

describe('viewFlow', () => {
  it('shows plan as delegate once workers run, and builds segments', () => {
    const f = applyProgress(null, { title: 'J', tasks: [{ title: 'Write tests' }, { title: 'Docs' }, { title: 'Lint' }], done: 1 }, 1)
    const v = viewFlow(f, [run('Write tests', 'done'), run('Docs', 'running')])!
    assert.equal(v.shownPhase, 'delegate')
    assert.deepEqual(v.segments, ['done', 'running', 'todo'])
    assert.equal(v.running, 1)
  })
})

describe('pendingTasks / visibleRuns', () => {
  it('lists planned tasks no run has started, matching titles loosely', () => {
    const f = applyProgress(null, { title: 'J', tasks: [{ title: 'Write greet() test' }, { title: 'Add JSDoc' }] }, 1)
    const left = pendingTasks(f, [run('write greet test', 'running')])
    assert.deepEqual(
      left.map(t => [t.n, t.title]),
      [[2, 'Add JSDoc']],
    )
  })

  it('hides runs that finished before the current job began', () => {
    const f = applyProgress(null, { title: 'J' }, 1_000)
    const old = run('old', 'done', { endedAt: 500, lastActivityAt: 500 })
    const live = run('live', 'running')
    const fresh = run('fresh', 'done', { endedAt: 2_000 })
    assert.deepEqual(
      visibleRuns(f, [old, live, fresh]).map(r => r.id),
      ['live', 'fresh'],
    )
  })
})

describe('doneCount', () => {
  const plan = applyProgress(null, { title: 'J', phase: 'delegate', tasks: [{ title: 'A' }, { title: 'B' }, { title: 'C' }] }, 10)

  it('counts planned tasks as their runs finish, without a progress call', () => {
    assert.equal(doneCount(plan, []), 0)
    assert.equal(doneCount(plan, [run('A', 'done'), run('B', 'running')]), 1)
    assert.equal(doneCount(plan, [run('A', 'done'), run('B', 'done')]), 2)
    assert.equal(viewFlow(plan, [run('A', 'done'), run('B', 'done')])?.ratio, 2 / 3)
  })

  it('keeps a reported count the runs have not caught up with, and caps at the total', () => {
    const reported = applyProgress(plan, { done: 2 }, 11)
    assert.equal(doneCount(reported, [run('A', 'done')]), 2)
    assert.equal(doneCount(plan, [run('A', 'done'), run('B', 'done'), run('C', 'done'), run('D', 'done')]), 3)
  })

  it('does not count a task while a later round of it still runs', () => {
    assert.equal(doneCount(plan, [run('A', 'done'), run('A', 'running', { id: 'A2', round: 2 })]), 0)
  })

  it('counts ended runs of an unplanned job', () => {
    const bare = applyProgress(null, { title: 'J', total: 3 }, 10)
    assert.equal(doneCount(bare, [run('x', 'done', { endedAt: 50 }), run('y', 'running'), run('z', 'done', { endedAt: 5 })]), 1)
  })
})
