// Renders the panel the way the mod lays it out (hooks/register.tsx): words as
// themed text, pictures from hooks/draw.ts. Used for the README screenshots.
// Run: node scripts/mod-preview.ts light|dark|terminal > docs/mod-preview.html
import {
  ACCENT,
  barSvg,
  crewSlots,
  ctxPercent,
  mascotCells,
  MASCOT_W,
  mascotSvg,
  meterColor,
  progressOf,
  ringSvg,
  runMeta,
  runStats,
  segmentsSvg,
  statusColor,
  statusGlyph,
  stepText,
  textBar,
  typeColor,
} from '../hooks/draw.ts'
import type { CrewRun } from '../types/index.d.ts'

const mode = process.argv[2]
const theme = mode === 'dark' || mode === 'terminal' ? 'dark' : 'light'
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

// One look per crew member, by its place in the plan, as the mod picks them.
const JOB = 'Auth cleanup + tests'
const PLANNED = 'Final review pass'
const slotOf = crewSlots(JOB, [finished[0]!, running[0]!, running[1]!].map(r => r.description.toLowerCase()).concat(PLANNED.toLowerCase()))
const slot = (title: string): number => slotOf(title.toLowerCase())

const barW = W - MASCOT_W - 34
const row = (r: CrewRun): string => {
  const color = typeColor(r.type)
  const p = progressOf(r)
  const steps = stepText(r)
  return `<div class="row">${mascotSvg(slot(r.description), r.effort, { running: r.status === 'running' })}<div class="body">
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
svg{display:block;flex-shrink:0}
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
<div class="row">${mascotSvg(slot(PLANNED), 'max', { dim: true })}<div class="body"><b class="dim">◷ 4. Final review pass</b><div class="dim">Plan · Fable · max · after 1, 2, 3</div></div></div>
</div></div>
<div class="band"><b><span style="color:${ACCENT}">●</span> Auth cleanup + tests</b>${segmentsSvg(110, ['done', 'running', 'running', 'todo'], ACCENT, true)}<b style="color:${ACCENT}">Tasks 1/4</b><span class="dim">25%</span><span style="flex:1"></span>${ringSvg(38)}<span class="dim">5h 38%</span>${ringSvg(74)}<span class="dim">wk 74%</span><span class="dim">×4</span><span class="dim">✕</span></div>
<div class="prompt">Type / for commands</div>`

// The terminal pane: the same rows in text, each with its half-block mascot, as a
// terminal draws them (a cell is two square pixels, one above the other).
const cellPx = { w: 9, h: 18 }
const cells = (s: number, effort: string | undefined, frame: number, dim: boolean): string =>
  `<div class="m${dim ? ' faded' : ''}">${mascotCells(s, effort, frame)
    .map(
      line =>
        `<div>${line
          .flatMap(c =>
            [...c.ch].map(ch => {
              const top = ch === '▀' || ch === '█' ? c.fg : c.bg
              const bot = ch === '▄' || ch === '█' ? c.fg : c.bg
              return `<i style="background:linear-gradient(${top ?? 'transparent'} 50%,${bot ?? 'transparent'} 50%)"></i>`
            }),
          )
          .join('')}</div>`,
    )
    .join('')}</div>`
const T = { green: '#5fd068', red: '#ff6b6b', magenta: '#d16bd1' }
const termRow = (r: CrewRun, frame: number): string => {
  const color = typeColor(r.type)
  const p = progressOf(r)
  const steps = stepText(r)
  const glyph = r.status === 'running' ? '●' : r.status === 'done' ? '✓' : '✗'
  return `<div class="trow">${cells(slot(r.description), r.effort, frame, false)}<div>
<div><span style="color:${r.status === 'done' ? T.green : color}">${glyph}</span> <b>${r.description}</b></div>
<div class="dim">${r.type} · ${runMeta(r, words)}</div>
<div>${p === null ? `<span class="dim">${textBar(ctxPercent(r) / 100, 24)}</span>` : `<span style="color:${color}">${textBar(p, 24)}</span>`}<span class="dim"> ${steps ? steps + ' · ' : ''}${runStats(r, now)}</span></div>
</div></div>`
}
const terminal = `<!doctype html><meta charset="utf-8"><title>Luff Crew terminal panel</title>
<style>
body{margin:0;background:#141413;font:14px/${cellPx.h}px Menlo,'SF Mono',monospace;color:#e6e4dd}
.term{width:${W + 40}px;margin:16px auto;background:#161615;border:1px solid #2e2e2c;border-radius:12px;padding:14px 18px;box-sizing:border-box}
.term div:not(.m):not(.m div):not(.trow):not(.plan){white-space:pre;overflow:hidden;text-overflow:ellipsis}
.trow>div:last-child,.plan>div:last-child{min-width:0;flex:1}
.dim{color:#8f8d86}.gap{height:${cellPx.h}px}
.trow{display:flex;gap:${cellPx.w}px;margin-bottom:${cellPx.h}px}
.m div{display:flex;height:${cellPx.h}px}.m i{display:block;width:${cellPx.w}px;height:${cellPx.h}px}.m.faded{opacity:.55}
.plan{display:flex;gap:${cellPx.w}px;color:#8f8d86}
b{font-weight:700}
</style>
<div class="term"><b>${JOB}</b>
<div class="dim">Cost ≈$0.53 · Tokens 540k · Time 0:21</div>
<div><span style="color:${T.magenta}">●</span> This prompt: Working<span class="dim"> · “split the auth cleanup across subagents” · 9 steps · 6 tools · 0:21</span></div>
<div class="gap"></div>
<div>▾ Plan limits  Collapse  Open in browser</div>
<div>5-hour session  ${textBar(0.38, 24)} 38%<span class="dim">  3.4M · ≈$4.12</span></div>
<div>Weekly          <span style="color:${meterColor(74)}">${textBar(0.74, 24)}</span> 74%<span class="dim">  41.0M · ≈$52.3</span></div>
<div class="gap"></div>
<div class="dim">Running · 2</div>
${running.map((r, i) => termRow(r, i)).join('')}<div>▾ Finished · 1</div>
${finished.map(r => termRow(r, 0)).join('')}<div class="dim">Planned · 1</div>
<div class="plan">${cells(slot(PLANNED), 'max', 0, true)}<div><b>◷ 4. ${PLANNED}</b>
<div>Plan · Fable · max · after 1, 2, 3</div></div></div>
</div>`

// Lines a terminal draws one under another: no stray blank lines from the template.
process.stdout.write(mode === 'terminal' ? terminal.replace(/>\n</g, '><') : html)
