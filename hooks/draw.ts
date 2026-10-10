// Pure drawing for the Luff Crew mod: SVG sources for the surfaces that draw
// pictures (desktop, VS Code, mobile) and the bits of text the terminal uses.
// No engine calls here, so everything is testable as plain functions.

import { clip, fmtCost, fmtTime, fmtTokens } from '../src/format.ts'
import { modelLabel } from '../src/pricing.ts'
import type { CrewLimitWindow, CrewRun } from '../types'

export const ACCENT = '#5b6cf0'
export const OK = '#2f9e66'
export const BAD = '#d0453f'
export const WARN = '#c98a12'

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

// Graphics only: the engine gives a render hook no theme, so every word is an
// engine Text element (themed by the app) and these SVGs use colors that read
// on light and dark alike: a translucent grey track, saturated fills.
const TRACK = 'fill="#8a8a8a" fill-opacity=".22"'

const STYLE = `<style>
.m g{transform-box:fill-box}
.m.run .la{animation:hop .5s steps(1) infinite}.m.run .lb{animation:hop .5s steps(1) infinite -.25s}
.m.run .bd{animation:bob .5s steps(1) infinite -.125s}
.m.e-low.run .la,.m.e-low.run .lb{animation-duration:.25s}
.m.e-low.run .prop{transform-origin:50% 0;animation:swish .5s ease-in-out infinite}
.m.e-medium.run .prop{transform-origin:50% 30%;animation:row 1s ease-in-out infinite}
.m.e-high.run .prop{animation:scan 1s steps(1) infinite}
.m.e-xhigh.run .flame{animation:flicker .25s steps(1) infinite}
.m.e-max.run .prop{transform-origin:center;animation:spin 1s linear infinite}
.stripe{animation:march 1s linear infinite}
@keyframes hop{50%{transform:translateY(-1px)}}@keyframes bob{50%{transform:translateY(1px)}}
@keyframes swish{50%{transform:rotate(14deg)}}@keyframes row{50%{transform:rotate(-22deg)}}
@keyframes scan{33%{transform:translate(1px,-1px)}66%{transform:translate(0,-2px)}}
@keyframes flicker{50%{opacity:.35}}@keyframes spin{to{transform:rotate(360deg)}}
@keyframes march{to{transform:translateX(8px)}}
@media (prefers-reduced-motion: reduce){.m.run *,.stripe{animation:none!important}}
</style>`

export const svg = (w: number, h: number, body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${STYLE}${body}</svg>`

// ---------------------------------------------------------------------------
// Row parts

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
  `ctx ${ctxPercent(r)}% · ${fmtTokens(r.contextTokens)} · ≈${fmtCost(r.costUsd)} · ${fmtTime(elapsed(r, now))}`

export const stepText = (r: CrewRun): string =>
  r.step?.total ? `${r.step.done}/${r.step.total}${r.step.note ? ' · ' + r.step.note : ''}` : ''

export const statusGlyph = (status: string): string => (status === 'running' ? '●' : status === 'done' ? '✓' : status === 'failed' ? '✗' : '◷')
export const statusColor = (status: string, color: string): string => (status === 'done' ? OK : status === 'failed' ? BAD : status === 'running' ? color : '#8a8a8a')

export const MASCOT_W = 44
export const MASCOT_H = 38

/** One mascot on its own, for a row's left edge. */
export const mascotSvg = (type: string, effort: string | undefined, opts: { running?: boolean; dim?: boolean } = {}): string =>
  svg(MASCOT_W, MASCOT_H, mascot(0, 2, 1.65, type, effort, opts))

export const BAR_H = 6

/** A thin progress bar: `ratio` filled in `color`, or null to draw the track alone. */
export function barSvg(W: number, ratio: number | null, color: string, h = BAR_H): string {
  const fillW = ratio === null ? 0 : Math.round(W * Math.max(0, Math.min(1, ratio)))
  return svg(W, h, `<rect x="0" y="0" width="${W}" height="${h}" rx="${h / 2}" ${TRACK}/>${fillW ? `<rect x="0" y="0" width="${fillW}" height="${h}" rx="${h / 2}" fill="${color}"/>` : ''}`)
}

/** Fill color of a usage meter: calm, then amber past 70%, red past 90%. */
export const meterColor = (pct: number): string => (pct >= 90 ? BAD : pct >= 70 ? WARN : ACCENT)

export const STRIP_H = 32

/** A row of small mascots for the compact view. */
export function stripSvg(W: number, icons: Array<{ type: string; effort?: string | undefined; running: boolean; dim: boolean }>): string {
  const step = 38
  const fit = Math.max(1, Math.floor(W / step))
  return svg(
    Math.min(W, Math.max(step, icons.slice(0, fit).length * step)),
    STRIP_H,
    icons
      .slice(0, fit)
      .map((ic, i) => mascot(i * step, 0, 1.4, ic.type, ic.effort, { running: ic.running, dim: ic.dim }))
      .join(''),
  )
}

export const SEG_H = 12

/** The job's segmented bar: one segment per planned task, the running ones striped. */
export function segmentsSvg(W: number, segments: Array<'done' | 'running' | 'todo'>, color: string, isWorking: boolean): string {
  const segs = segments.length ? segments : [isWorking ? 'running' : 'todo']
  const gap = segs.length > 1 ? 3 : 0
  const sw = (W - gap * (segs.length - 1)) / segs.length
  const body = segs
    .map((s, i) => {
      const x = (i * (sw + gap)).toFixed(1)
      const w = sw.toFixed(1)
      if (s === 'done') return `<rect x="${x}" y="0" width="${w}" height="${SEG_H}" rx="3" fill="${color}"/>`
      if (s === 'running') {
        const stripes = Array.from({ length: Math.ceil(sw / 8) + 2 }, (_, k) => `<path d="M${Number(x) - 8 + k * 8} ${SEG_H}l7-${SEG_H}h3l-7 ${SEG_H}z" fill="${color}"/>`).join('')
        return `<clipPath id="c${i}"><rect x="${x}" y="0" width="${w}" height="${SEG_H}" rx="3"/></clipPath><g clip-path="url(#c${i})"><rect x="${x}" y="0" width="${w}" height="${SEG_H}" fill="${color}" fill-opacity=".3"/><g class="stripe">${stripes}</g></g>`
      }
      return `<rect x="${x}" y="0" width="${w}" height="${SEG_H}" rx="3" ${TRACK}/>`
    })
    .join('')
  return svg(Math.max(1, Math.round(W)), SEG_H, body)
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

export const RING = 16

/** A small circular meter for a usage window, colored by meterColor. */
export function ringSvg(pct: number, size = RING): string {
  const c = size / 2
  const r = c - 2
  const len = 2 * Math.PI * r
  const fill = (Math.max(0, Math.min(100, pct)) / 100) * len
  return svg(
    size,
    size,
    `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="#8a8a8a" stroke-opacity=".3" stroke-width="2.5"/>` +
      `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${meterColor(pct)}" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="${fill.toFixed(2)} ${len.toFixed(2)}" transform="rotate(-90 ${c} ${c})"/>`,
  )
}

/** The 5-hour and weekly windows, in that order, as [label, percent]. */
export function limitPairs(windows: CrewLimitWindow[]): Array<[string, number]> {
  const out: Array<[string, number]> = []
  const five = windows.find(w => w.kind === 'five_hour')
  const week = windows.find(w => w.kind === 'seven_day')
  if (five) out.push(['5h', Math.round(five.percentUsed)])
  if (week) out.push(['wk', Math.round(week.percentUsed)])
  return out
}
