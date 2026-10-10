import { randomBytes } from 'node:crypto'
import { createServer } from 'node:http'
import type { IncomingMessage, Server, ServerResponse } from 'node:http'
import type { AddressInfo } from 'node:net'

import type { Lang } from '../config.ts'
import type { Snapshot } from '../types.ts'
import { FAVICON, renderPage } from './page.ts'

export interface DashboardOptions {
  /** First port to try; the next free ones follow, then any free port. */
  port: number
  snapshot: () => Snapshot
  lang: () => Lang
  onDismiss?: () => void
  host?: string
}

export interface Dashboard {
  url: string
  port: number
  /** Sends the current snapshot to every open page if it changed. */
  push(): void
  clients(): number
  close(): Promise<void>
}

const PORT_ATTEMPTS = 20
const HEARTBEAT_MS = 15_000

/**
 * Serves the dashboard on loopback only. Requests must name this server in
 * their Host header (DNS-rebinding guard) and state-changing calls must come
 * from the page itself (CSRF guard).
 */
export async function startDashboard(opts: DashboardOptions): Promise<Dashboard> {
  const host = opts.host ?? '127.0.0.1'
  const streams = new Set<ServerResponse>()
  let lastSent = ''
  let port = 0

  const allowedHost = (req: IncomingMessage): boolean => {
    const h = (req.headers.host ?? '').toLowerCase()
    return h === `127.0.0.1:${port}` || h === `localhost:${port}` || h === `[::1]:${port}`
  }

  const frame = (): string => {
    const snap = opts.snapshot()
    return JSON.stringify(snap)
  }

  // Compare snapshots without their clock so idle sessions stay quiet.
  const withoutClock = (json: string): string => json.replace(/"now":\d+,/, '')

  const handler = (req: IncomingMessage, res: ServerResponse): void => {
    if (!allowedHost(req)) {
      res.writeHead(403, { 'content-type': 'text/plain' }).end('Forbidden host')
      return
    }
    const url = new URL(req.url ?? '/', `http://${req.headers.host}`)
    const common = { 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer' }

    if (req.method === 'GET' && url.pathname === '/') {
      const nonce = randomBytes(16).toString('base64')
      res.writeHead(200, {
        ...common,
        'content-type': 'text/html; charset=utf-8',
        'content-security-policy': `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'`,
        'x-frame-options': 'DENY',
      })
      res.end(renderPage(nonce, opts.lang()))
      return
    }
    if (req.method === 'GET' && url.pathname === '/favicon.svg') {
      res.writeHead(200, { ...common, 'content-type': 'image/svg+xml' }).end(FAVICON)
      return
    }
    if (req.method === 'GET' && url.pathname === '/api/state') {
      res.writeHead(200, { ...common, 'content-type': 'application/json' }).end(frame())
      return
    }
    if (req.method === 'GET' && url.pathname === '/api/health') {
      res.writeHead(200, { ...common, 'content-type': 'application/json' }).end(JSON.stringify({ ok: true, app: 'luff-crew-monitor' }))
      return
    }
    if (req.method === 'GET' && url.pathname === '/events') {
      res.writeHead(200, { ...common, 'content-type': 'text/event-stream', connection: 'keep-alive' })
      res.write(`retry: 2000\nevent: snapshot\ndata: ${frame()}\n\n`)
      streams.add(res)
      req.on('close', () => streams.delete(res))
      return
    }
    if (req.method === 'POST' && url.pathname === '/api/dismiss') {
      // A custom header cannot be sent cross-origin without a preflight we never grant.
      if (req.headers['x-luff-crew'] !== '1') {
        res.writeHead(403, common).end()
        return
      }
      opts.onDismiss?.()
      res.writeHead(204, common).end()
      push(true)
      return
    }
    res.writeHead(404, { ...common, 'content-type': 'text/plain' }).end('Not found')
  }

  const server = createServer(handler)
  server.keepAliveTimeout = 5_000

  port = await listen(server, host, opts.port)

  const push = (force = false): void => {
    if (!streams.size) return
    const json = frame()
    const key = withoutClock(json)
    if (!force && key === lastSent) return
    lastSent = key
    for (const res of streams) res.write(`event: snapshot\ndata: ${json}\n\n`)
  }

  const heartbeat = setInterval(() => {
    for (const res of streams) res.write(': ping\n\n')
  }, HEARTBEAT_MS)
  heartbeat.unref()

  return {
    url: `http://${host === '127.0.0.1' ? 'localhost' : host}:${port}`,
    port,
    push: () => push(false),
    clients: () => streams.size,
    close: () =>
      new Promise(resolve => {
        clearInterval(heartbeat)
        for (const res of streams) res.end()
        streams.clear()
        server.close(() => resolve())
        server.closeAllConnections?.()
      }),
  }
}

async function listen(server: Server, host: string, first: number): Promise<number> {
  const ports = [...Array.from({ length: PORT_ATTEMPTS }, (_, i) => first + i), 0]
  for (const p of ports) {
    try {
      await new Promise<void>((resolve, reject) => {
        const onError = (err: Error): void => {
          server.off('listening', onListening)
          reject(err)
        }
        const onListening = (): void => {
          server.off('error', onError)
          resolve()
        }
        server.once('error', onError)
        server.once('listening', onListening)
        server.listen(p, host)
      })
      return (server.address() as AddressInfo).port
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== 'EADDRINUSE' && (err as NodeJS.ErrnoException).code !== 'EACCES') throw err
    }
  }
  throw new Error('No free port for the dashboard')
}
