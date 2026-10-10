// Renders the panel the way the mod lays it out (hooks/register.tsx): words as
// themed text, pictures from hooks/draw.ts. Used for the README screenshots.
// Run: node scripts/mod-preview.ts light > docs/mod-preview.html
import {
  ACCENT,
  barSvg,
  ctxPercent,
  mascotSvg,
  meterColor,
  progressOf,
  runMeta,
  runStats,
  segmentsSvg,
  statusColor,
  statusGlyph,
  stepText,
  typeColor,
} from '../hooks/draw.ts'
import type { CrewRun } from '../types/index.d.ts'

const theme = process.argv[2] === 'dark' ? 'dark' : 'light'
const now = Date.parse('2026-10-10T10:00:00Z')
const W = 560
const words = { round: 'round', failed: { error: 'error', killed: 'stopped', stalled: 'stalled' } }
const run = (r: Partial<CrewRun>): CrewRun => ({
  id: String(Math.random()),
  type: 'general-purpose',
  description: '',
  model: 'claude-opus-5-5',
  status: 'running',
  startedAt: now - 20_000,
  contextTokens: 40_000,
  contextMax: 1_000_000,
  tokens: 180_000,
  costUsd: 0.12,
  requests: 6,
  round: 1,
  ...r,
})

const running = [
  run({ description: 'Write greet() node:test file', effort: 'high', step: { done: 2, total: 3, note: 'running tests' }, contextTokens: 67_000, costUsd: 0.18, startedAt: now - 13_000 }),
  run({ type: 'Explore', model: 'claude-sonnet-5', description: 'Map the auth module', effort: 'medium', step: { done: 3, total: 4, note: 'tidying up' }, contextTokens: 63_000, costUsd: 0.1, startedAt: now - 12_000 }),
]
const finished = [run({ description: 'Add JSDoc to src functions', effort: 'low', status: 'done', endedAt: now - 2_000, step: { done: 5, total: 5 }, contextTokens: 74_000, costUsd: 0.25, startedAt: now - 21_000 })]

const barW = W - 44 - 34
const row = (r: CrewRun): string => {
  const color = typeColor(r.type)
  const p = progressOf(r)
  const steps = stepText(r)
  return `<div class="row">${mascotSvg(r.type, r.effort, { running: r.status === 'running' })}<div class="body">
<b><span style="color:${statusColor(r.status, color)}">${statusGlyph(r.status)}</span> ${r.description}</b>
<div><b style="color:${color}">${r.type}</b><span class="dim"> · ${runMeta(r, words)}</span></div>
<div class="dim">${steps ? steps + '&nbsp;&nbsp;&nbsp;' : ''}${runStats(r, now)}</div>
${barSvg(barW, p ?? ctxPercent(r) / 100, p === null ? '#8a8a8a' : color, 4)}</div></div>`
}
const limit = (label: string, pct: number, reset: string, local: string): string =>
  `<div><div class="split"><b>${label}</b><span class="dim">${pct}% · resets in ${reset}</span></div>${barSvg(W, pct / 100, meterColor(pct), 7)}<div class="dim">${local}</div></div>`

const html = `<!doctype html><meta charset="utf-8"><title>Luff Crew panel</title>
<style>
:root{--bg:${theme === 'dark' ? '#141413' : '#f6f4ef'};--card:${theme === 'dark' ? '#1c1c1b' : '#fff'};--line:${theme === 'dark' ? '#2e2e2c' : '#e7e4dd'};--text:${theme === 'dark' ? '#ecebe7' : '#1d1c1a'};--dim:${theme === 'dark' ? '#a7a59f' : '#6c6a64'}}
body{margin:0;background:var(--bg);font:13px/1.45 -apple-system,system-ui,sans-serif;color:var(--text)}
.app{width:${W + 40}px;margin:16px auto;background:var(--card);border:1px solid var(--line);border-radius:12px;overflow:hidden}
.tab{padding:10px 20px;border-bottom:1px solid var(--line);font-weight:600}
.pane{padding:14px 20px;display:flex;flex-direction:column;gap:9px}
.dim{color:var(--dim)}.split{display:flex;justify-content:space-between}
.row{display:flex;gap:8px;align-items:center}.row .body{flex:1;display:flex;flex-direction:column;gap:1px}
svg{display:block}
.band{width:${W + 40}px;margin:0 auto 12px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 16px;box-sizing:border-box;display:flex;gap:8px;align-items:center;white-space:nowrap}
.prompt{width:${W + 40}px;margin:0 auto 16px;border:1px solid var(--line);border-radius:12px;padding:12px 16px;box-sizing:border-box;color:var(--dim);background:var(--card)}
</style>
<div class="app"><div class="tab">Crew</div><div class="pane">
<b>Auth cleanup + tests</b>
<div><span class="dim">Cost </span><b>≈$0.53</b><span class="dim">&nbsp;&nbsp; Tokens </span><b>540k</b><span class="dim">&nbsp;&nbsp; Time </span><b>0:21</b></div>
<div class="dim">▾ Plan limits</div>
${limit('5-hour session', 38, '2h 14m', 'last 5 hours: 3.4M tokens · ≈$4.12 · 212 requests')}
${limit('Weekly', 74, '3d 5h', 'last 7 days: 41.0M tokens · ≈$52.3 · 2904 requests')}
<div class="dim">Collapse</div>
<div class="dim">Running · 2</div>
${running.map(row).join('')}
<div class="dim">▾ Finished · 1</div>
${finished.map(row).join('')}
<div class="dim">Planned · 1</div>
<div class="row">${mascotSvg('Plan', 'max', { dim: true })}<div class="body"><b class="dim">◷ 4. Final review pass</b><div class="dim">Plan · Fable · max · after 1, 2, 3</div></div></div>
</div></div>
<div class="band"><b><span style="color:${ACCENT}">●</span> Auth cleanup + tests</b>${segmentsSvg(230, ['done', 'running', 'running', 'todo'], ACCENT, true)}<b style="color:${ACCENT}">Tasks 1/4</b><span class="dim">25%</span><span class="dim">5h 38% · wk 74%</span><span class="dim">×4</span><span class="dim">✕</span></div>
<div class="prompt">Type / for commands</div>`

process.stdout.write(html)
