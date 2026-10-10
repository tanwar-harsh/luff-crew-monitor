import assert from 'node:assert/strict'
import { appendFileSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'

import { JsonlTail, taskNotifications, textOf } from '../src/transcript.ts'

const tmpFile = (): string => join(mkdtempSync(join(tmpdir(), 'luff-tail-')), 'x.jsonl')

describe('JsonlTail', () => {
  it('returns only complete new lines and holds back a half-written one', async () => {
    const path = tmpFile()
    writeFileSync(path, '{"a":1}\n{"b":')
    const tail = new JsonlTail(path)
    assert.deepEqual((await tail.read()).lines, [{ a: 1 }])
    assert.deepEqual((await tail.read()).lines, [])
    appendFileSync(path, '2}\n{"c":3}\n')
    assert.deepEqual((await tail.read()).lines, [{ b: 2 }, { c: 3 }])
  })

  it('keeps a multi-byte character split across writes intact', async () => {
    const path = tmpFile()
    const bytes = Buffer.from('{"t":"Привет 👋"}\n', 'utf8')
    writeFileSync(path, bytes.subarray(0, 9))
    const tail = new JsonlTail(path)
    await tail.read()
    appendFileSync(path, bytes.subarray(9))
    assert.deepEqual((await tail.read()).lines, [{ t: 'Привет 👋' }])
  })

  it('starts over when the file shrinks', async () => {
    const path = tmpFile()
    writeFileSync(path, '{"a":1}\n{"a":2}\n')
    const tail = new JsonlTail(path)
    await tail.read()
    writeFileSync(path, '{"z":9}\n')
    const r = await tail.read()
    assert.equal(r.reset, true)
    assert.deepEqual(r.lines, [{ z: 9 }])
  })

  it('skips torn lines, foreign text and filtered lines', async () => {
    const path = tmpFile()
    writeFileSync(path, 'garbage\n{"bad":\n{"keep":true}\n{"drop":true}\n')
    const tail = new JsonlTail(path, raw => raw.includes('keep'))
    assert.deepEqual((await tail.read()).lines, [{ keep: true }])
  })

  it('treats a missing file as empty', async () => {
    const tail = new JsonlTail(join(tmpdir(), 'does-not-exist-luff.jsonl'))
    assert.deepEqual(await tail.read(), { lines: [], reset: false })
  })
})

describe('taskNotifications', () => {
  it('extracts every notification', () => {
    const text =
      '<task-notification><task-id>a1</task-id><tool-use-id>toolu_1</tool-use-id><status>completed</status></task-notification>' +
      'noise <task-notification>\n<task-id> a2 </task-id>\n<status>killed</status>\n</task-notification>'
    assert.deepEqual(taskNotifications(text), [
      { taskId: 'a1', status: 'completed', toolUseId: 'toolu_1' },
      { taskId: 'a2', status: 'killed' },
    ])
  })
})

describe('textOf', () => {
  it('collects strings from nested content', () => {
    assert.equal(textOf([{ type: 'text', text: 'a' }, { content: ['b', { x: 'c' }] }]), 'text\na\nb\nc')
  })
})
