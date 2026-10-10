// Pure drawing for the Luff Crew mod: SVG sources for the surfaces that draw
// pictures (desktop, VS Code, mobile) and the bits of text the terminal uses.
// No engine calls here, so everything is testable as plain functions.

import { clip, fmtCost, fmtDuration, fmtTime, fmtTokens } from '../src/format.ts'
import { modelLabel } from '../src/pricing.ts'
import type { CrewFlow, CrewLimitWindow, CrewRun, CrewTask } from '../types'

export const FONT = "-apple-system,BlinkMacSystemFont,'SF Pro Text','Segoe UI',system-ui,sans-serif"
export const ACCENT = '#5b6cf0'
export const OK = '#2f9e66'
export const BAD = '#d0453f'
export const WARN = '#c98a12'

export const xml = (s: string): string =>
  s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c)

// Rough advance of UI text in em, enough to fit a title into its slot.
const charEm = (ch: string): number => (/[\s.,:;'|!il1()[\]]/.test(ch) ? 0.3 : /[A-ZА-ЯЁmwшщжюМШЩЖЮ@%]/.test(ch) ? 0.72 : 0.56)
export const textWidth = (s: string, size: number): number => [...s].reduce((w, ch) => w + charEm(ch) * size, 0)

export function fitText(s: string, size: number, maxW: number): string {
  if (textWidth(s, size) <= maxW) return s
  let out = ''
  for (const ch of s) {
    if (textWidth(out + ch + '…', size) > maxW) break
    out += ch
  }
  return out + '…'
}

// ---------------------------------------------------------------------------
// Colors and the mascots: a round deckhand per agent type, gear per effort.

const PALETTE = ['#E07A5F', '#3D9DD9', '#2BB3A0', '#9B7BE0', '#E0A83D', '#D96BA0', '#5FAF4F']
const KNOWN: Record<string, number> = { 'general-purpose': 0, Explore: 2, Plan: 3 }

export function typeColor(type: string): string {
  const bare = type.replace(/^[^:]*:/, '')
  const known = KNOWN[bare]
  if (known !== undefined) return PALETTE[known] ?? ACCENT
  let h = 0
  for (const ch of bare) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return PALETTE[h % PALETTE.length] ?? ACCENT
}

const INK = '#22201d'
const WOOD = '#A87B4F'
const GOLD = '#E8B931'

type Put = (x: number, y: number, w: number, h: number, fill: string, group?: string) => void

const GEAR: Record<string, (r: Put) => void> = {
  // Deckhand with a mop: runs at double pace, the mop swishes.
  low: r => {
    r(6, 9, 12, 2, '#E5484D'); r(18, 9, 2, 1, '#E5484D'); r(19, 10, 2, 1, '#B83236')
    r(21, 4, 1, 13, WOOD, 'prop'); r(19, 17, 5, 2, '#CFCFCB', 'prop')
    r(19, 19, 1, 1, '#CFCFCB', 'prop'); r(21, 19, 1, 1, '#CFCFCB', 'prop'); r(23, 19, 1, 1, '#CFCFCB', 'prop')
  },
  // Sailor cap and an oar that rows.
  medium: r => {
    r(7, 6, 10, 3, '#F4F4F1'); r(7, 8, 10, 1, '#2B3A67'); r(11, 5, 2, 1, '#E5484D')
    r(21, 3, 1, 13, WOOD, 'prop'); r(20, 15, 3, 4, '#8A6038', 'prop')
  },
  // Navigator's hat and a spyglass that scans.
  high: r => {
    r(7, 6, 10, 2, '#2E2A27'); r(5, 8, 14, 1, INK); r(11, 6, 2, 1, GOLD)
    r(19, 11, 5, 2, '#C9A227', 'prop'); r(19, 11, 1, 2, '#8C6F12', 'prop'); r(23, 11, 1, 2, '#9BD3F5', 'prop')
  },
  // Lookout's beanie and a lantern whose flame flickers.
  xhigh: r => {
    r(7, 7, 10, 3, '#C0392B'); r(7, 9, 10, 1, '#962D22'); r(11, 6, 2, 1, '#F4F4F1')
    r(21, 7, 1, 2, INK); r(20, 9, 3, 1, INK); r(20, 10, 3, 4, GOLD); r(20, 14, 3, 1, INK)
    r(21, 11, 1, 2, '#FF8A3D', 'flame')
  },
  // Captain's hat and a ship's wheel that turns.
  max: r => {
    r(6, 5, 12, 3, '#1F2A4A'); r(5, 8, 14, 1, INK); r(11, 6, 2, 1, GOLD)
    r(20, 11, 3, 1, WOOD, 'prop'); r(20, 17, 3, 1, WOOD, 'prop'); r(18, 13, 1, 3, WOOD, 'prop'); r(24, 13, 1, 3, WOOD, 'prop')
    r(19, 12, 1, 1, WOOD, 'prop'); r(23, 12, 1, 1, WOOD, 'prop'); r(19, 16, 1, 1, WOOD, 'prop'); r(23, 16, 1, 1, WOOD, 'prop')
    r(21, 10, 1, 9, '#8A6038', 'prop'); r(17, 14, 9, 1, '#8A6038', 'prop'); r(21, 14, 1, 1, GOLD, 'prop')
  },
}

/**
 * One mascot as an SVG group on a 26×22 grid, placed at (x, y) and scaled.
 * Periods of every motion divide one second, so the once-a-second redraw of a
 * running row restarts them in step and nothing visibly jumps.
 */
export function mascot(x: number, y: number, scale: number, type: string, effort: string | undefined, opts: { running?: boolean; dim?: boolean } = {}): string {
  const groups: Record<string, string[]> = { bd: [], la: [], lb: [], prop: [], flame: [] }
  const r: Put = (px, py, w, h, fill, g = 'bd') => {
    ;(groups[g] ??= []).push(`<rect x="${px}" y="${py}" width="${w}" height="${h}" fill="${fill}"/>`)
  }
  const body = typeColor(type)
  r(7, 9, 10, 1, body); r(6, 10, 12, 1, body); r(5, 11, 14, 6, body); r(6, 17, 12, 1, body)
  r(3, 13, 2, 3, body); r(19, 13, 2, 3, body)
  r(8, 12, 2, 2, INK); r(14, 12, 2, 2, INK); r(8, 12, 1, 1, '#fff'); r(14, 12, 1, 1, '#fff')
  r(11, 15, 2, 1, INK); r(6, 15, 2, 1, 'rgba(255,120,140,.45)'); r(16, 15, 2, 1, 'rgba(255,120,140,.45)')
  r(6, 18, 2, 3, body, 'la'); r(12, 18, 2, 3, body, 'la'); r(9, 18, 2, 3, body, 'lb'); r(15, 18, 2, 3, body, 'lb')
  const gear = effort ? GEAR[effort] : undefined
  gear?.(r)
  const g = (name: string): string => ((groups[name] ?? []).length ? `<g class="${name}">${(groups[name] ?? []).join('')}</g>` : '')
  const cls = `m e-${gear ? effort : 'none'}${opts.running ? ' run' : ''}`
  return `<g transform="translate(${x},${y}) scale(${scale})" opacity="${opts.dim ? 0.4 : 1}" shape-rendering="crispEdges"><g class="${cls}"><g class="bd">${(groups.bd ?? []).join('')}${g('prop')}${g('flame')}</g>${g('la')}${g('lb')}</g></g>`
}

const STYLE = `<style>
.t{fill:#1d1c1a}.s{fill:#6c6a64}.f{fill:#9c9a93}.k{fill:#ebe8e1}.tile{fill:#f3f1ec}.ln{stroke:#e7e4dd}
@media (prefers-color-scheme: dark){.t{fill:#ecebe7}.s{fill:#a7a59f}.f{fill:#75736e}.k{fill:#2c2c2a}.tile{fill:#252524}.ln{stroke:#2e2e2c}}
.m g{transform-box:fill-box}
.m.run .la{animation:hop .5s steps(1) infinite}.m.run .lb{animation:hop .5s steps(1) infinite -.25s}
.m.run .bd{animation:bob .5s steps(1) infinite -.125s}
.m.e-low.run .la,.m.e-low.run .lb{animation-duration:.25s}
.m.e-low.run .prop{transform-origin:50% 0;animation:swish .5s ease-in-out infinite}
.m.e-medium.run .prop{transform-origin:50% 30%;animation:row 1s ease-in-out infinite}
.m.e-high.run .prop{animation:scan 1s steps(1) infinite}
.m.e-xhigh.run .flame{animation:flicker .25s steps(1) infinite}
.m.e-max.run .prop{transform-origin:center;animation:spin 1s linear infinite}
.live{animation:pulse 1s ease-in-out infinite}
.stripe{animation:march 1s linear infinite}
@keyframes hop{50%{transform:translateY(-1px)}}@keyframes bob{50%{transform:translateY(1px)}}
@keyframes swish{50%{transform:rotate(14deg)}}@keyframes row{50%{transform:rotate(-22deg)}}
@keyframes scan{33%{transform:translate(1px,-1px)}66%{transform:translate(0,-2px)}}
@keyframes flicker{50%{opacity:.35}}@keyframes spin{to{transform:rotate(360deg)}}
@keyframes pulse{50%{opacity:.3}}@keyframes march{to{transform:translateX(8px)}}
@media (prefers-reduced-motion: reduce){.m.run *,.live,.stripe{animation:none!important}}
</style>`

export const svg = (w: number, h: number, body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${STYLE}${body}</svg>`

const text = (x: number, y: number, size: number, cls: string, s: string, extra = ''): string =>
  `<text class="${cls}" x="${x}" y="${y}" font-family="${FONT}" font-size="${size}"${extra}>${xml(s)}</text>`

// ---------------------------------------------------------------------------
// Rows

export const ctxPercent = (r: CrewRun): number => (r.contextMax ? Math.min(100, Math.round((r.contextTokens / r.contextMax) * 100)) : 0)
export const elapsed = (r: CrewRun, now: number): number => (r.endedAt ?? Math.max(now, r.startedAt)) - r.startedAt

/** The worker's own steps when it reports them; a finished run is full; else null (show context). */
export function progressOf(r: CrewRun): number | null {
  if (r.status === 'done') return 1
  if (r.step?.total) return Math.min(1, r.step.done / r.step.total)
  return null
}

export function runMeta(r: CrewRun, words: { round: string; failed: Record<string, string> }): string {
  const parts = [r.effort ? `${modelLabel(r.model)} · ${r.effort}` : modelLabel(r.model)]
  if (r.round > 1) parts.push(`${words.round} ${r.round}`)
  if (r.status === 'failed') parts.push(words.failed[r.failure ?? 'error'] ?? words.failed.error ?? 'error')
  return parts.join(' · ')
}

export const runStats = (r: CrewRun, now: number): string =>
  `ctx ${ctxPercent(r)}% · ${fmtTokens(r.contextTokens)}  ≈${fmtCost(r.costUsd)}  ${fmtTime(elapsed(r, now))}`

export const stepText = (r: CrewRun): string =>
  r.step?.total ? `${r.step.done}/${r.step.total}${r.step.note ? ' · ' + r.step.note : ''}` : ''

function statusMark(x: number, y: number, status: string, color: string): string {
  if (status === 'running') return `<circle class="live" cx="${x}" cy="${y}" r="3.5" fill="${color}"/>`
  if (status === 'done') return `<path d="M${x - 5} ${y}l3.5 3.5 6.5-7" fill="none" stroke="${OK}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`
  if (status === 'failed') return `<path d="M${x - 4} ${y - 4}l8 8M${x + 4} ${y - 4}l-8 8" stroke="${BAD}" stroke-width="1.8" stroke-linecap="round"/>`
  return `<circle cx="${x}" cy="${y}" r="5" fill="none" stroke="#9c9a93" stroke-width="1.4"/><path d="M${x} ${y - 2.5}v2.8l1.8 1.2" fill="none" stroke="#9c9a93" stroke-width="1.4" stroke-linecap="round"/>`
}

export const ROW_H = 66

export function runRowSvg(W: number, r: CrewRun, now: number, words: Parameters<typeof runMeta>[1]): string {
  const color = typeColor(r.type)
  const x = 50
  const textW = W - x - 22
  const stats = runStats(r, now)
  const steps = stepText(r)
  const stepsW = Math.max(0, textW - textWidth(stats, 11) - 12)
  const progress = progressOf(r)
  const fillW = Math.round(textW * (progress ?? ctxPercent(r) / 100))
  const fill = progress === null ? 'class="f"' : `fill="${r.status === 'failed' ? BAD : color}"`
  const meta = runMeta(r, words)
  return svg(
    W,
    ROW_H,
    `${mascot(0, 13, 1.65, r.type, r.effort, { running: r.status === 'running', dim: r.status === 'failed' })}
${text(x, 18, 13, 't', fitText(r.description || r.type, 13, textW), ' font-weight="600"')}
<text x="${x}" y="34" font-family="${FONT}" font-size="11"><tspan fill="${color}" font-weight="600">${xml(r.type)}</tspan><tspan class="s"> · ${xml(fitText(meta, 11, Math.max(20, textW - textWidth(r.type, 11) - 10)))}</tspan></text>
${steps && stepsW > 30 ? text(x, 49, 11, 't', fitText(steps, 11, stepsW)) : ''}
${text(x + textW, 49, 11, 's', stats, ' text-anchor="end" font-variant-numeric="tabular-nums"')}
<rect class="k" x="${x}" y="55" width="${textW}" height="4" rx="2"/><rect ${fill} x="${x}" y="55" width="${fillW}" height="4" rx="2"/>
${statusMark(W - 8, 16, r.status, color)}
<line class="ln" x1="0" y1="${ROW_H - 0.5}" x2="${W}" y2="${ROW_H - 0.5}"/>`,
  )
}

export const PLANNED_H = 48

export function plannedRowSvg(W: number, n: number, t: CrewTask, afterWord: string): string {
  const x = 50
  const textW = W - x - 22
  const meta = [t.agent, t.model ? modelLabel(t.model) : '', t.effort, t.after.length ? `${afterWord} ${t.after.join(', ')}` : '']
    .filter(Boolean)
    .join(' · ')
  return svg(
    W,
    PLANNED_H,
    `${mascot(0, 6, 1.65, t.agent ?? 'planned', t.effort, { dim: true })}
${text(x, 18, 13, 's', fitText(`${n}. ${t.title}`, 13, textW), ' font-weight="600"')}
${meta ? text(x, 34, 11, 'f', fitText(meta, 11, textW)) : ''}
${statusMark(W - 8, 16, 'planned', '#9c9a93')}
<line class="ln" x1="0" y1="${PLANNED_H - 0.5}" x2="${W}" y2="${PLANNED_H - 0.5}"/>`,
  )
}

// ---------------------------------------------------------------------------
// Header tiles, plan limits, compact strip

export const TILES_H = 44

export function tilesSvg(W: number, tiles: Array<[string, string]>): string {
  const gap = 6
  const tw = (W - gap * (tiles.length - 1)) / tiles.length
  const body = tiles
    .map(
      ([k, v], i) =>
        `<rect class="tile" x="${i * (tw + gap)}" y="0" width="${tw}" height="${TILES_H}" rx="9"/>${text(i * (tw + gap) + 10, 16, 11, 's', k)}${text(i * (tw + gap) + 10, 35, 16, 't', v, ' font-weight="650" font-variant-numeric="tabular-nums"')}`,
    )
    .join('')
  return svg(W, TILES_H, body)
}

/** Fill color of a usage meter: calm, then amber past 70%, red past 90%. */
export const meterColor = (pct: number): string => (pct >= 90 ? BAD : pct >= 70 ? WARN : ACCENT)

export interface LimitRow {
  label: string
  window?: CrewLimitWindow
  /** Local totals the mod counted for the same span. */
  local: { tokens: number; costUsd: number; requests: number }
  span: string
}

export const LIMIT_H = 50

export function limitRowSvg(W: number, row: LimitRow, now: number, words: { resetsIn: string; noPlan: string; requests: string }): string {
  const pct = row.window?.percentUsed
  const right =
    pct === undefined
      ? words.noPlan
      : `${Math.round(pct)}%${row.window?.resetsAt ? ` · ${words.resetsIn} ${fmtDuration(row.window.resetsAt - now)}` : ''}`
  const local = `${row.span}: ${fmtTokens(row.local.tokens)} tokens · ≈${fmtCost(row.local.costUsd)} · ${row.local.requests} ${words.requests}`
  const barW = W
  const fillW = pct === undefined ? 0 : Math.round(barW * Math.min(1, pct / 100))
  return svg(
    W,
    LIMIT_H,
    `${text(0, 14, 12.5, 't', row.label, ' font-weight="600"')}
${text(W, 14, 12, pct === undefined ? 'f' : 's', right, ' text-anchor="end" font-variant-numeric="tabular-nums"')}
<rect class="k" x="0" y="21" width="${barW}" height="7" rx="3.5"/>
${fillW ? `<rect x="0" y="21" width="${fillW}" height="7" rx="3.5" fill="${meterColor(pct ?? 0)}"/>` : ''}
${text(0, 43, 11, 'f', fitText(local, 11, W))}`,
  )
}

export const COMPACT_H = 36

export function compactSvg(W: number, icons: Array<{ type: string; effort?: string | undefined; running: boolean; dim: boolean }>, summary: string): string {
  const step = 40
  const fit = Math.max(1, Math.floor((W - textWidth(summary, 12) - 24) / step))
  const shown = icons.slice(0, fit)
  const more = icons.length - shown.length
  const body = shown.map((ic, i) => mascot(i * step, 0, 1.45, ic.type, ic.effort, { running: ic.running, dim: ic.dim })).join('')
  return svg(
    W,
    COMPACT_H,
    `${body}${more ? text(shown.length * step + 2, 22, 12, 's', `+${more}`) : ''}${text(W, 22, 12, 's', summary, ' text-anchor="end" font-variant-numeric="tabular-nums"')}`,
  )
}

// ---------------------------------------------------------------------------
// The band above the prompt

export const BAND_H = 22

export interface BandModel {
  title: string
  label: string
  ratio: number
  finished: boolean
  /** One per planned task: done, running or todo. Empty when the plan has no count. */
  segments: Array<'done' | 'running' | 'todo'>
  isWorking: boolean
  limits: string
}

export function bandSvg(W: number, m: BandModel): string {
  const color = m.finished ? OK : ACCENT
  const limitsW = m.limits ? textWidth(m.limits, 11.5) + 14 : 0
  const title = fitText(m.title, 13, Math.max(60, W * 0.32))
  const barX = Math.round(16 + textWidth(title, 13) + 12)
  const pillW = Math.round(18 + textWidth(m.label, 11))
  const pctW = 36
  const barW = Math.max(60, W - barX - pillW - pctW - limitsW - 12)
  const segs = m.segments.length ? m.segments : [m.isWorking ? 'running' : 'todo']
  const gap = segs.length > 1 ? 3 : 0
  const sw = (barW - gap * (segs.length - 1)) / segs.length
  const y0 = (BAND_H - 10) / 2
  const segBody = segs
    .map((s, i) => {
      const x = (i * (sw + gap)).toFixed(1)
      if (s === 'done') return `<rect x="${x}" y="0" width="${sw.toFixed(1)}" height="10" rx="3" fill="${color}"/>`
      if (s === 'running')
        return `<g><clipPath id="c${i}"><rect x="${x}" y="0" width="${sw.toFixed(1)}" height="10" rx="3"/></clipPath><g clip-path="url(#c${i})"><rect x="${x}" y="0" width="${sw.toFixed(1)}" height="10" fill="${color}" opacity=".35"/><g class="stripe">${Array.from({ length: Math.ceil(sw / 8) + 2 }, (_, k) => `<path d="M${Number(x) - 8 + k * 8} 10l6-10h3l-6 10z" fill="${color}"/>`).join('')}</g></g></g>`
      return `<rect class="k" x="${x}" y="0" width="${sw.toFixed(1)}" height="10" rx="3"/>`
    })
    .join('')
  const pillX = barX + barW + 8
  return svg(
    W,
    BAND_H,
    `<circle cx="5" cy="${BAND_H / 2}" r="4" fill="${color}"/>
${text(16, BAND_H / 2 + 4.5, 13, 't', title, ' font-weight="600"')}
<g transform="translate(${barX},${y0})">${segBody}</g>
<rect x="${pillX}" y="${(BAND_H - 16) / 2}" width="${pillW}" height="16" rx="8" fill="${color}"/>
<text x="${pillX + pillW / 2}" y="${BAND_H / 2 + 4}" text-anchor="middle" font-family="${FONT}" font-size="11" font-weight="600" fill="#fff">${xml(m.label)}</text>
${text(pillX + pillW + 6, BAND_H / 2 + 4.5, 12, 's', `${Math.round(m.ratio * 100)}%`, ' font-variant-numeric="tabular-nums"')}
${m.limits ? text(W, BAND_H / 2 + 4.5, 11.5, 'f', m.limits, ' text-anchor="end" font-variant-numeric="tabular-nums"') : ''}`,
  )
}

/** `▰▰▰▱▱` for the terminal. */
export const textBar = (ratio: number, width: number): string => {
  const filled = Math.round(Math.max(0, Math.min(1, ratio)) * width)
  return '▰'.repeat(filled) + '▱'.repeat(Math.max(0, width - filled))
}

/** `5h 23% · wk 41%`, or '' with no reading yet. */
export function limitsShort(windows: CrewLimitWindow[]): string {
  const five = windows.find(w => w.kind === 'five_hour')
  const week = windows.find(w => w.kind === 'seven_day')
  return [five ? `5h ${Math.round(five.percentUsed)}%` : '', week ? `wk ${Math.round(week.percentUsed)}%` : ''].filter(Boolean).join(' · ')
}

export { clip }
