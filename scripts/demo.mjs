// Simulates a Claude Code session with a few subagents and opens the dashboard
// on it, so you can see Luff Crew without spending tokens: `npm run demo`.
import { spawn } from 'node:child_process'
import { appendFileSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = mkdtempSync(join(tmpdir(), 'luff-crew-demo-'))
const cwd = '/demo/my-app'
const session = '9b1c2d3e-4f50-4617-8a29-3b4c5d6e7f80'
const project = join(root, 'projects', cwd.replace(/[^a-zA-Z0-9]/g, '-'))
const subagents = join(project, session, 'subagents')
mkdirSync(subagents, { recursive: true })
const main = join(project, `${session}.jsonl`)
writeFileSync(main, '')

const now = () => new Date().toISOString()
const write = (file, line) => appendFileSync(file, JSON.stringify({ sessionId: session, cwd, timestamp: now(), ...line }) + '\n')
const tool = (id, name, input) => ({ type: 'assistant', message: { role: 'assistant', model: 'claude-opus-5-5', content: [{ type: 'tool_use', id, name, input }] } })

const TASKS = [
  { title: 'Map the auth module', agent: 'Explore', model: 'claude-sonnet-5', effort: 'medium', steps: 4 },
  { title: 'Add JSDoc to src functions', agent: 'general-purpose', model: 'claude-opus-5-5', effort: 'low', steps: 5 },
  { title: 'Write greet() node:test file', agent: 'general-purpose', model: 'claude-opus-5-5', effort: 'high', steps: 3 },
  { title: 'Refactor session store', agent: 'general-purpose', model: 'claude-opus-5-5', effort: 'xhigh', steps: 6, after: [1] },
  { title: 'Final review pass', agent: 'Plan', model: 'claude-fable-5-1', effort: 'max', steps: 3, after: [2, 3, 4] },
]

write(main, tool('p0', 'mcp__luff-crew__progress', { title: 'Auth cleanup + tests', phase: 'delegate', tasks: TASKS.map(({ steps, ...t }) => t) }))

let done = 0
let msg = 0
async function runTask(i, delay) {
  await new Promise(r => setTimeout(r, delay))
  const t = TASKS[i]
  const id = `demo${i}`
  const tu = `toolu_demo_${i}`
  write(main, tool(tu, 'Agent', { description: t.title, subagent_type: t.agent, prompt: '…', run_in_background: i === 0 }))
  writeFileSync(join(subagents, `agent-${id}.meta.json`), JSON.stringify({ agentType: t.agent, description: t.title, toolUseId: tu, spawnDepth: 1 }))
  const file = join(subagents, `agent-${id}.jsonl`)
  write(file, { type: 'user', agentId: id, message: { role: 'user', content: t.title } })
  let ctx = 18_000
  for (let s = 0; s <= t.steps; s++) {
    ctx += 6_000 + Math.round(Math.random() * 9_000)
    const usage = { input_tokens: 40, output_tokens: 300 + Math.round(Math.random() * 900), cache_read_input_tokens: ctx - 4_000, cache_creation_input_tokens: 4_000 }
    const step = { type: 'tool_use', id: `st${i}${s}`, name: 'mcp__luff-crew__step', input: { done: s, total: t.steps, note: ['reading', 'editing', 'running tests', 'tidying up'][s % 4] } }
    write(file, { type: 'assistant', agentId: id, effort: t.effort, message: { id: `m${msg++}`, model: t.model, role: 'assistant', stop_reason: s === t.steps ? 'end_turn' : 'tool_use', usage, content: [step] } })
    await new Promise(r => setTimeout(r, 1800 + Math.random() * 2200))
  }
  write(main, { type: 'user', message: { role: 'user', content: [{ type: 'tool_result', tool_use_id: tu, content: 'done' }] }, toolUseResult: { status: 'completed', agentId: id } })
  done++
  write(main, tool(`p${i + 1}`, 'mcp__luff-crew__progress', { done }))
}

const bin = fileURLToPath(new URL('../dist/luff-crew.mjs', import.meta.url))
const child = spawn(process.execPath, [bin, 'dashboard', '--project', cwd, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, CLAUDE_CONFIG_DIR: root, LUFF_CREW_HOME: root },
})
process.on('SIGINT', () => child.kill('SIGINT'))

await Promise.all([runTask(0, 800), runTask(1, 1500), runTask(2, 2500), runTask(3, 14_000), runTask(4, 30_000)])
write(main, tool('pend', 'mcp__luff-crew__progress', { finished: true }))
console.log('Demo finished. Ctrl+C to quit.')
