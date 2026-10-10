import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { crewSlots, mascot } from '../src/crew.ts'
import { withMascots } from '../src/monitor.ts'
import type { AgentRun, Snapshot } from '../src/types.ts'

const run = (id: string, description: string, status: AgentRun['status'] = 'running'): AgentRun =>
  ({ id, type: 'general-purpose', description, model: 'claude-opus-5-5', effort: 'medium', status, background: false, startedAt: 0, lastActivityAt: 0 }) as AgentRun

const snapshot = (agents: AgentRun[], titles: string[], pendingFrom: number): Snapshot =>
  ({
    version: 'test',
    now: 0,
    lang: 'en',
    session: null,
    flow: { title: 'Job', tasks: titles.map(title => ({ title, after: [] })) },
    agents,
    planned: titles.slice(pendingFrom).map((title, i) => ({ title, after: [], n: pendingFrom + i + 1 })),
    totals: {},
  }) as unknown as Snapshot

describe('browser crew mascots', () => {
  it('draws every run and planned task as its own crew member', () => {
    const titles = ['Task one', 'Task two', 'Task three', 'Task four']
    const snap = withMascots(snapshot([run('a', 'Task one', 'done'), run('b', 'Task two')], titles, 2))
    const all = [...snap.agents, ...snap.planned].map(x => x.mascot)
    assert.equal(all.length, 4)
    assert.ok(all.every(m => typeof m === 'string' && m.includes('<rect')))
    assert.equal(new Set(all).size, 4)
  })

  it('matches the mod: slots follow the plan, running runs walk', () => {
    const titles = ['Task one', 'Task two']
    const snap = withMascots(snapshot([run('a', 'Task two')], titles, 0))
    const slot = crewSlots('Job', ['task one', 'task two'])
    assert.equal(snap.agents[0]?.mascot, mascot(0, 0, 1, slot('task two'), 'medium', { running: true }))
    assert.ok(snap.agents[0]?.mascot?.includes(' run'))
  })
})
