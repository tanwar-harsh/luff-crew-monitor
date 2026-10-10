import assert from 'node:assert/strict'
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { after, before, describe, it } from 'node:test'

import { setup, uninstall } from '../src/setup.ts'

// Runs against a throwaway config folder with no `claude` on PATH, so the
// real Claude Code configuration is never touched.
describe('setup / uninstall', () => {
  const root = mkdtempSync(join(tmpdir(), 'luff-setup-'))
  const settings = join(root, 'settings.json')
  const saved = { dir: process.env.CLAUDE_CONFIG_DIR, path: process.env.PATH }
  const quiet = process.stdout.write.bind(process.stdout)

  before(() => {
    process.env.CLAUDE_CONFIG_DIR = root
    process.env.PATH = join(root, 'empty-bin')
    mkdirSync(join(root, 'empty-bin'))
    process.stdout.write = (() => true) as typeof process.stdout.write
  })
  after(() => {
    process.stdout.write = quiet
    if (saved.dir === undefined) delete process.env.CLAUDE_CONFIG_DIR
    else process.env.CLAUDE_CONFIG_DIR = saved.dir
    process.env.PATH = saved.path
  })

  const opts = { scope: 'user' as const, name: 'luff-crew', command: ['luff-crew-monitor'], slashCommand: true, dryRun: false, force: false }

  it('wraps an existing status line and restores it on uninstall', () => {
    const previous = `"/usr/bin/node" "/home/me/my status.js"`
    writeFileSync(settings, JSON.stringify({ theme: 'dark', statusLine: { type: 'command', command: previous, padding: 1 } }))

    assert.equal(setup({ ...opts, statusline: true }), 0)
    const installed = JSON.parse(readFileSync(settings, 'utf8'))
    assert.equal(installed.theme, 'dark', 'other settings are preserved')
    assert.equal(installed.statusLine.padding, 1)
    assert.match(installed.statusLine.command, /^luff-crew-monitor statusline --wrap '/)
    assert.ok(existsSync(`${settings}.luff-crew.bak`))
    assert.ok(readFileSync(join(root, 'commands', 'agents-info.md'), 'utf8').includes('open_dashboard'))

    // Running setup twice does not wrap twice.
    setup({ ...opts, statusline: true })
    assert.equal(JSON.parse(readFileSync(settings, 'utf8')).statusLine.command, installed.statusLine.command)

    uninstall({ scope: 'user', name: 'luff-crew' })
    const restored = JSON.parse(readFileSync(settings, 'utf8'))
    assert.equal(restored.statusLine.command, previous)
    assert.ok(!existsSync(join(root, 'commands', 'agents-info.md')))
  })

  it('leaves a foreign /agents-info command alone', () => {
    mkdirSync(join(root, 'commands'), { recursive: true })
    writeFileSync(join(root, 'commands', 'agents-info.md'), 'mine')
    setup({ ...opts, statusline: false })
    assert.equal(readFileSync(join(root, 'commands', 'agents-info.md'), 'utf8'), 'mine')
  })
})
