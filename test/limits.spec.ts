import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'

import { FIVE_HOURS_MS, limitsPath, limitsView, parseRateLimits, readPlanLimits, savePlanLimits, SEVEN_DAYS_MS, UsageScanner } from '../src/limits.ts'
import { renderLimits } from '../src/render-text.ts'
import { isOurStatusline } from '../src/setup.ts'
import type { Snapshot } from '../src/types.ts'
import { FakeSession, iso, T0, usage } from './helpers.ts'

const HOUR = 3_600_000
const sec = (ms: number): number => Math.floor(ms / 1000)

describe('plan limits from the status line', () => {
  it('reads used_percentage and resets_at (epoch seconds)', () => {
    const p = parseRateLimits(
      { five_hour: { used_percentage: 42.5, resets_at: sec(T0 + HOUR) }, seven_day: { used_percentage: 12, resets_at: sec(T0 + 3 * 24 * HOUR) } },
      T0,
    )
    assert.deepEqual(p, {
      reportedAt: T0,
      fiveHour: { usedPct: 42.5, resetsAt: T0 + HOUR },
      sevenDay: { usedPct: 12, resetsAt: T0 + 72 * HOUR },
    })
  })

  it('ignores missing or malformed windows', () => {
    assert.equal(parseRateLimits(null), null)
    assert.equal(parseRateLimits({}), null)
    assert.equal(parseRateLimits({ five_hour: { used_percentage: 'x', resets_at: 5 } }), null)
    const only = parseRateLimits({ seven_day: { used_percentage: 3, resets_at: sec(T0) } }, T0)
    assert.ok(only && !only.fiveHour && only.sevenDay)
  })

  it('saves them for the dashboard and skips rewrites that change nothing', () => {
    process.env.LUFF_CREW_HOME = mkdtempSync(join(tmpdir(), 'luff-crew-home-'))
    try {
      const raw = { five_hour: { used_percentage: 10, resets_at: sec(Date.now() + HOUR) } }
      assert.equal(savePlanLimits(raw), true)
      assert.equal(readPlanLimits()?.fiveHour?.usedPct, 10)
      const before = statSync(limitsPath()).mtimeMs
      assert.equal(savePlanLimits(raw), false)
      assert.equal(statSync(limitsPath()).mtimeMs, before)
      assert.equal(savePlanLimits({ five_hour: { used_percentage: 11, resets_at: sec(Date.now() + HOUR) } }), true)
      assert.equal(JSON.parse(readFileSync(limitsPath(), 'utf8')).fiveHour.usedPct, 11)
    } finally {
      delete process.env.LUFF_CREW_HOME
    }
  })
})

describe('local usage totals', () => {
  const build = (): { fake: FakeSession; scanner: UsageScanner; now: number } => {
    const fake = new FakeSession()
    const now = T0 + 10 * 24 * HOUR
    const at = (ago: number): number => now - T0 - ago
    // Two streamed blocks of one reply: only the last counts.
    fake.main({ type: 'assistant', timestamp: iso(at(HOUR)), message: { id: 'm1', model: 'claude-opus-5-5', usage: usage(100, 1) } })
    fake.main({ type: 'assistant', timestamp: iso(at(HOUR)), message: { id: 'm1', model: 'claude-opus-5-5', usage: usage(100, 50) } })
    // Older than five hours, inside the week.
    fake.main({ type: 'assistant', timestamp: iso(at(2 * 24 * HOUR)), message: { id: 'm2', model: 'claude-opus-5-5', usage: usage(1000, 0) } })
    // Older than a week: dropped.
    fake.main({ type: 'assistant', timestamp: iso(at(8 * 24 * HOUR)), message: { id: 'm3', model: 'claude-opus-5-5', usage: usage(9999, 0) } })
    // Synthetic replies are not model requests.
    fake.main({ type: 'assistant', timestamp: iso(at(HOUR)), message: { id: 'm4', model: '<synthetic>', usage: usage(5, 5) } })
    // A subagent's request counts too.
    fake.agentReply('a1', at(2 * HOUR), { id: 's1', usage: usage(10, 10) })
    const scanner = new UsageScanner({ now: () => now, root: () => join(fake.root, 'projects') })
    return { fake, scanner, now }
  }

  it('counts every transcript of the last seven days, once per reply', async () => {
    const { scanner, now } = build()
    await scanner.poll(true)
    const five = scanner.totals(now - FIVE_HOURS_MS)
    assert.equal(five.tokens, 150 + 20)
    assert.equal(five.requests, 2)
    assert.equal(scanner.totals(now - SEVEN_DAYS_MS).tokens, 150 + 20 + 1000)
    assert.equal(scanner.totals(now - SEVEN_DAYS_MS).requests, 3)
    assert.ok(scanner.totals(now - SEVEN_DAYS_MS).costUsd > 0)
  })

  it('picks up new lines on the next poll', async () => {
    const { fake, scanner, now } = build()
    await scanner.poll(true)
    fake.main({ type: 'assistant', timestamp: new Date(now - 60_000).toISOString(), message: { id: 'm5', model: 'claude-haiku-5-5', usage: usage(30, 0) } })
    assert.equal(await scanner.poll(true), true)
    assert.equal(scanner.totals(now - FIVE_HOURS_MS).tokens, 200)
  })

  it('counts a window from its start when Claude Code reported one', async () => {
    const { scanner, now } = build()
    await scanner.poll(true)
    // Window started 90 minutes ago: the reply from an hour ago counts, the subagent's from two hours ago does not.
    const plan = { reportedAt: now, fiveHour: { usedPct: 37, resetsAt: now + FIVE_HOURS_MS - 90 * 60_000 } }
    const view = limitsView(plan, scanner, now)
    assert.equal(view.fiveHour.usedPct, 37)
    assert.equal(view.fiveHour.since, now - 90 * 60_000)
    assert.equal(view.fiveHour.tokens, 150)
    assert.equal(view.sevenDay.usedPct, null)
    assert.equal(view.sevenDay.since, now - SEVEN_DAYS_MS)
  })

  it('shows a window whose reset has passed as started over', async () => {
    const { scanner, now } = build()
    const view = limitsView({ reportedAt: now - 6 * HOUR, fiveHour: { usedPct: 80, resetsAt: now - HOUR } }, scanner, now)
    assert.equal(view.fiveHour.usedPct, 0)
    assert.equal(view.fiveHour.resetsAt, null)
  })
})

describe('limits as text', () => {
  it('prints both windows', () => {
    const now = T0
    const snap = {
      now,
      lang: 'en',
      limits: {
        reportedAt: now,
        fiveHour: { usedPct: 42, resetsAt: now + 80 * 60_000, since: now, tokens: 2_100_000, costUsd: 3.1, requests: 9 },
        sevenDay: { usedPct: null, resetsAt: null, since: now, tokens: 0, costUsd: 0, requests: 0 },
      },
    } as unknown as Snapshot
    const [title, five, week] = renderLimits(snap)
    assert.equal(title, 'Plan limits')
    assert.match(five ?? '', /42% · resets in 1h 20m · ≈\$3\.10 · 2\.1M tokens/)
    assert.match(week ?? '', /no plan data/)
  })
})

describe('status line detection', () => {
  it('recognises our status line however it was installed', () => {
    assert.ok(isOurStatusline('luff-crew-monitor statusline'))
    assert.ok(isOurStatusline('/usr/local/bin/node /x/lib/node_modules/luff-crew-monitor/dist/luff-crew.mjs statusline --wrap foo'))
    assert.ok(isOurStatusline('npx -y github:tanwar-harsh/luff-crew-monitor statusline'))
    assert.ok(!isOurStatusline('node ~/.claude/hooks/gsd-statusline.js'))
    assert.ok(!isOurStatusline(undefined))
  })
})
