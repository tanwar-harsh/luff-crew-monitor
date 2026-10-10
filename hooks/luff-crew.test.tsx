import { expect, mock, test } from 'claude-code/testing'

const SURFACES = ['terminal', 'desktop'] as const
const P = 'luff-crew-monitor'

test('tracks a job, its subagents and their steps, and draws them in the pane and the band', async ($, on) => {
  mock.clock(on, { now: 1_000_000 })
  on('agent.spawn', () => ({ model: 'claude-opus-5-5', agentId: 'a1' }))
  on('turn.complete', ($, e) => ({ text: e.answer }))
  on('ui.open', () => ({ value: { isPlaced: true } }))
  on('ui.panes', () => ({ value: [] }))

  const progress = await $.tool.call({
    tool: `mcp__${P}__progress`,
    title: 'JSDoc + greet test',
    phase: 'delegate',
    tasks: [{ title: 'Add JSDoc to src functions', effort: 'low' }, { title: 'Write greet() node:test file' }],
  } as never)
  expect(JSON.stringify(progress)).toContain('Tasks 0/2')

  await $.agent.spawn({ prompt: 'go', description: 'Add JSDoc to src functions', subagentType: 'general-purpose' } as never)
  // A worker's own call carries its loop's agentId.
  await $.tool.call({ tool: `mcp__${P}__step`, agentId: 'a1', done: 1, total: 3, note: 'reading files' } as never)

  const panes: Record<string, { findAll: (q: { type?: string; key?: string; text?: string | RegExp }) => Promise<readonly unknown[]> }> = {}
  for (const surface of SURFACES) {
    const pane = (panes[surface] = await $.ui.mount({ plugin: P, surface, component: 'Pane', requestId: 'luff-crew', props: { bodyColumns: 80 } as never }))
    expect((await pane.findAll({ type: 'Text', text: /JSDoc \+ greet test/ })).length).toBeGreaterThan(0)
    expect((await pane.findAll({ type: 'Text', text: /Running · 1/ })).length).toBeGreaterThan(0)
    expect((await pane.findAll({ type: 'Text', text: /Planned · 1/ })).length).toBeGreaterThan(0)
    if (surface === 'terminal') expect((await pane.findAll({ type: 'Text', text: /1\/3 · reading files/ })).length).toBeGreaterThan(0)

    const band = await $.ui.mount({ plugin: P, surface, component: 'AbovePrompt', props: { bodyColumns: 100, hasSurvey: false } as never })
    expect((await band.findAll({ type: 'Button', key: 'crew' })).length).toBeGreaterThan(0)
  }

  // The worker finishes: the next progress call accepts it.
  await $.turn.complete({ turnId: 't', agentId: 'a1', answer: 'done', durationMs: 5, isAborted: false, reason: 'answer' } as never)
  const done = await $.tool.call({ tool: `mcp__${P}__progress`, done: 1 } as never)
  expect(JSON.stringify(done)).toContain('Tasks 1/2')

  // Mounted panes redraw from state: the terminal one now lists the finished run.
  expect((await panes.terminal!.findAll({ type: 'Button', key: 'finished' })).length).toBeGreaterThan(0)
})

test('stays out of the way with no job and no subagent', async ($, on) => {
  // Stands in for the engine's own band beneath the mod.
  on('ui.render', { component: 'AbovePrompt' }, ($, e) => {
    const { Text } = $.ui.resolve(e)
    return <Text>engine band</Text>
  })
  const band = await $.ui.mount({ plugin: P, surface: 'terminal', component: 'AbovePrompt', props: { bodyColumns: 100, hasSurvey: false } as never })
  expect((await band.findAll({ type: 'Text', text: /engine band/ })).length).toBeGreaterThan(0)
  expect((await band.findAll({ type: 'Button' })).length).toBe(0)
})

test('every prompt moves the bar, with no job and no subagent', async ($, on) => {
  mock.clock(on, { now: 2_000_000 })
  on('ui.render', { component: 'AbovePrompt' }, ($, e) => {
    const { Text } = $.ui.resolve(e)
    return <Text>engine band</Text>
  })
  on('turn.start', ($, e) => ({ turnId: e.turnId }))
  on('turn.step', async function* ($, e) {
    return {
      turnId: e.turnId,
      index: e.index,
      answer: '',
      toolUses: [
        { name: 'Read', input: {} },
        { name: 'mcp__x__ctx_execute', input: {} },
      ],
      stopReason: 'tool_use' as const,
      usage: { model: 'claude-opus-5-5', input_tokens: 1000, output_tokens: 200, cache_creation_input_tokens: 0, cache_read_input_tokens: 0 },
    }
  })
  on('turn.complete', () => ({ text: '' }))

  await $.turn.start({ text: 'fix the login bug', turnId: 't1' })
  for await (const _ of $.turn.step({ turnId: 't1', index: 0, model: 'claude-opus-5-5', messageCount: 1 })) void _

  const bands: Record<string, { findAll: (q: { type?: string; key?: string; text?: string | RegExp }) => Promise<readonly unknown[]> }> = {}
  for (const surface of SURFACES) {
    const band = (bands[surface] = await $.ui.mount({ plugin: P, surface, component: 'AbovePrompt', props: { bodyColumns: 120, hasSurvey: false } as never }))
    expect((await band.findAll({ type: 'Text', text: /fix the login bug/ })).length).toBeGreaterThan(0)
    expect((await band.findAll({ type: 'Text', text: /Working/ })).length).toBeGreaterThan(0)
    expect((await band.findAll({ type: 'Text', text: /1 steps · 2 tools \(ctx_execute\)/ })).length).toBeGreaterThan(0)
    expect((await band.findAll({ type: 'Button', key: 'crew' })).length).toBeGreaterThan(0)
  }

  // The answer lands: mounted bands redraw as done.
  await $.turn.complete({ turnId: 't1', answer: 'ok', durationMs: 5, isAborted: false, reason: 'answer' } as never)
  for (const surface of SURFACES) expect((await bands[surface]!.findAll({ type: 'Text', text: /Done/ })).length).toBeGreaterThan(0)

  // The panel shows the prompt too, and offers the browser view without opening it.
  const pane = await $.ui.mount({ plugin: P, surface: 'desktop', component: 'Pane', requestId: 'luff-crew', props: { bodyColumns: 80 } as never })
  expect((await pane.findAll({ type: 'Text', text: /Last prompt: Done/ })).length).toBeGreaterThan(0)
  expect((await pane.findAll({ type: 'Button', key: 'web' })).length).toBeGreaterThan(0)
})
