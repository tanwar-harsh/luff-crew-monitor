import assert from 'node:assert/strict'
import { request } from 'node:http'
import { createServer } from 'node:net'
import { after, describe, it } from 'node:test'

import { startDashboard } from '../src/dashboard/server.ts'
import type { Dashboard } from '../src/dashboard/server.ts'
import type { Snapshot } from '../src/types.ts'

const snapshot = (): Snapshot => ({
  version: 'test',
  now: Date.now(),
  lang: 'en',
  session: null,
  flow: null,
  agents: [],
  planned: [],
  totals: { costUsd: 0, tokens: 0, timeMs: 0, running: 0, done: 0, failed: 0 },
})

function call(
  port: number,
  path: string,
  opts: { method?: string; host?: string; headers?: Record<string, string> } = {},
): Promise<{ status: number; headers: Record<string, string | string[] | undefined>; body: string }> {
  return new Promise((resolve, reject) => {
    const req = request(
      { host: '127.0.0.1', port, path, method: opts.method ?? 'GET', headers: { host: opts.host ?? `127.0.0.1:${port}`, ...opts.headers } },
      res => {
        let body = ''
        res.setEncoding('utf8')
        res.on('data', c => (body += c))
        res.on('end', () => resolve({ status: res.statusCode ?? 0, headers: res.headers, body }))
      },
    )
    req.on('error', reject)
    req.end()
  })
}

describe('dashboard server', () => {
  let dismissed = 0
  let d: Dashboard
  const opened: Dashboard[] = []
  after(async () => {
    for (const x of opened) await x.close()
  })

  it('serves the page with a strict CSP on loopback', async () => {
    d = await startDashboard({ port: 0, snapshot, lang: () => 'en', onDismiss: () => dismissed++ })
    opened.push(d)
    assert.match(d.url, /^http:\/\/localhost:\d+$/)
    const r = await call(d.port, '/')
    assert.equal(r.status, 200)
    assert.match(String(r.headers['content-security-policy']), /script-src 'nonce-[^']+'/)
    assert.match(r.body, /<title>Luff Crew<\/title>/)
    const nonce = /nonce-([^']+)'/.exec(String(r.headers['content-security-policy']))?.[1]
    assert.ok(r.body.includes(`<script nonce="${nonce}">`))
  })

  it('returns state as JSON', async () => {
    const r = await call(d.port, '/api/state')
    assert.equal(r.status, 200)
    assert.equal(JSON.parse(r.body).version, 'test')
  })

  it('rejects foreign Host headers (DNS rebinding)', async () => {
    const r = await call(d.port, '/api/state', { host: 'evil.example:80' })
    assert.equal(r.status, 403)
  })

  it('requires the page header to dismiss the bar', async () => {
    assert.equal((await call(d.port, '/api/dismiss', { method: 'POST' })).status, 403)
    assert.equal(dismissed, 0)
    assert.equal((await call(d.port, '/api/dismiss', { method: 'POST', headers: { 'x-luff-crew': '1' } })).status, 204)
    assert.equal(dismissed, 1)
  })

  it('moves to the next port when the preferred one is taken', async () => {
    const blocker = createServer()
    await new Promise<void>(r => blocker.listen(0, '127.0.0.1', () => r()))
    const taken = (blocker.address() as { port: number }).port
    try {
      const d2 = await startDashboard({ port: taken, snapshot, lang: () => 'en' })
      opened.push(d2)
      assert.notEqual(d2.port, taken)
    } finally {
      blocker.close()
    }
  })

  it('streams snapshots over server-sent events', async () => {
    const body = await new Promise<string>((resolve, reject) => {
      const req = request({ host: '127.0.0.1', port: d.port, path: '/events', headers: { host: `localhost:${d.port}` } }, res => {
        res.setEncoding('utf8')
        res.once('data', chunk => {
          resolve(String(chunk))
          req.destroy()
        })
      })
      req.on('error', reject)
      req.end()
    })
    assert.match(body, /^retry: 2000\nevent: snapshot\ndata: \{/)
  })
})
