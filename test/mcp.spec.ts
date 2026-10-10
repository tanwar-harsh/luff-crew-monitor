import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'

import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

import { FakeSession, T0 } from './helpers.ts'

const bundle = fileURLToPath(new URL('../dist/luff-crew.mjs', import.meta.url))

// End to end over stdio against the built bundle, the way Claude Code runs it.
describe('MCP server (dist bundle)', { skip: !existsSync(bundle) && 'run `npm run build` first' }, () => {
  it('lists its tools and prompt, and answers them', async () => {
    const s = new FakeSession()
    s.spawnAgent('toolu_1', Date.now() - T0, { description: 'Write greet() node:test file', subagent_type: 'general-purpose' })

    const transport = new StdioClientTransport({
      command: process.execPath,
      args: [bundle],
      cwd: process.cwd(),
      env: {
        ...(process.env as Record<string, string>),
        CLAUDE_CONFIG_DIR: s.root,
        CLAUDE_PROJECT_DIR: s.cwd,
        CLAUDE_CODE_SESSION_ID: s.sessionId,
        LUFF_CREW_AUTO_OPEN: '0',
        LUFF_CREW_PORT: '0',
        LUFF_CREW_HOME: s.root,
      },
      stderr: 'pipe',
    })
    const client = new Client({ name: 'test', version: '0' })
    await client.connect(transport)
    try {
      const info = client.getServerVersion()
      assert.equal(info?.name, 'luff-crew')
      assert.match(client.getInstructions() ?? '', /progress/)

      const tools = (await client.listTools()).tools.map(t => t.name).sort()
      assert.deepEqual(tools, ['crew_status', 'open_dashboard', 'progress', 'step'])
      const prompts = (await client.listPrompts()).prompts.map(p => p.name)
      assert.deepEqual(prompts, ['agents-info'])

      const progress = await client.callTool({
        name: 'progress',
        arguments: { title: 'Greet job', phase: 'delegate', tasks: [{ title: 'Write greet() node:test file' }, { title: 'Docs' }] },
      })
      assert.match(JSON.stringify(progress.content), /ok: Tasks 0\/2/)

      const bad = await client.callTool({ name: 'progress', arguments: { phase: 'sideways' } })
      assert.equal(bad.isError, true, 'invalid input is rejected by the schema')

      const status = await client.callTool({ name: 'crew_status', arguments: {} })
      const text = JSON.stringify(status.content)
      assert.match(text, /Greet job/)
      assert.match(text, /Write greet\(\) node:test file/)
      assert.match(text, /Planned · 1/)

      const dash = await client.callTool({ name: 'open_dashboard', arguments: { open: false } })
      const url = /http:\/\/localhost:\d+/.exec(JSON.stringify(dash.content))?.[0]
      assert.ok(url, 'dashboard URL returned')
      const state = (await (await fetch(`${url}/api/state`)).json()) as { flow: { title: string }; agents: unknown[] }
      assert.equal(state.flow.title, 'Greet job')
      assert.equal(state.agents.length, 1)

      const step = await client.callTool({ name: 'step', arguments: { done: 1, total: 3 } })
      assert.match(JSON.stringify(step.content), /ok/)
    } finally {
      await client.close()
    }
  })
})
