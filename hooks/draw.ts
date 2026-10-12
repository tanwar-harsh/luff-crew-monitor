// Pure drawing for the Luff Crew mod: SVG sources for the surfaces that draw
// pictures (desktop, VS Code, mobile) and the bits of text the terminal uses.
// No engine calls here, so everything is testable as plain functions.

import { BROWN, GOLD, INK, LENS, lookOf, mascot, shade, WHITE, WOOD } from '../src/crew.ts'
import type { Look } from '../src/crew.ts'
import { clip, fmtCost, fmtTime, fmtTokens } from '../src/format.ts'
import { modelLabel } from '../src/pricing.ts'
import type { CrewLimitWindow, CrewRun } from '../types'

export const ACCENT = '#5b6cf0'
export const OK = '#2f9e66'
export const BAD = '#d0453f'
export const WARN = '#c98a12'

// ---------------------------------------------------------------------------
// Colors and the mascots: a round crew member per agent, each with its own
// look, holding gear for its effort.

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

// The crew's looks live in src/crew.ts, shared with the browser view.
export { crewSlots, EXTRA_STYLES, EYE_STYLES, HAT_STYLES, hashOf, lookOf, mascot, MOUTH_STYLES, shade } from '../src/crew.ts'
export type { Look } from '../src/crew.ts'

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

// The 26×22 sprite at a whole 2×, so every pixel stays crisp.
export const MASCOT_W = 52
export const MASCOT_H = 46

/** One mascot on its own, for a row's left edge. */
export const mascotSvg = (slot: number, effort: string | undefined, opts: { running?: boolean; dim?: boolean } = {}): string =>
  svg(MASCOT_W, MASCOT_H, mascot(0, 2, 2, slot, effort, opts))

export const BAR_H = 6

/** A thin progress bar: `ratio` filled in `color`, or null to draw the track alone. */
export function barSvg(W: number, ratio: number | null, color: string, h = BAR_H): string {
  const fillW = ratio === null ? 0 : Math.round(W * Math.max(0, Math.min(1, ratio)))
  return svg(W, h, `<rect x="0" y="0" width="${W}" height="${h}" rx="${h / 2}" ${TRACK}/>${fillW ? `<rect x="0" y="0" width="${fillW}" height="${h}" rx="${h / 2}" fill="${color}"/>` : ''}`)
}

/** Fill color of a usage meter: calm, then amber past 70%, red past 90%. */
export const meterColor = (pct: number): string => (pct >= 90 ? BAD : pct >= 70 ? WARN : ACCENT)

export const STRIP_H = 40
export const STRIP_STEP = 50

/** A row of small mascots for the compact view. */
export function stripSvg(W: number, icons: Array<{ slot: number; effort?: string | undefined; running: boolean; dim: boolean }>): string {
  const step = STRIP_STEP
  const fit = Math.max(1, Math.floor(W / step))
  return svg(
    Math.min(W, Math.max(step, icons.slice(0, fit).length * step)),
    STRIP_H,
    icons
      .slice(0, fit)
      .map((ic, i) => mascot(i * step, 0, 1.8, ic.slot, ic.effort, { running: ic.running, dim: ic.dim }))
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

// ---------------------------------------------------------------------------
// The terminal mascot: the crew member redrawn for text, not shrunk from the
// SVG one. A 7×6 pixel grid (six columns of body, one for what it holds),
// drawn with half blocks, two pixels per cell, so it stands three lines tall,
// the height of a row's text. Few pixels, so every one is a feature: a round
// head, tall eyes, one small mouth, and legs that walk.
//
//   row 0 hat · 1 head top · 2-3 eyes · 4 chin and mouth · 5 legs

export type Cell = { ch: string; fg?: string | undefined; bg?: string | undefined }

export const TERM_MASCOT_W = 7
export const TERM_MASCOT_H = 3

type Dot = (x: number, y: number, c: string) => void
type Span = (x0: number, x1: number, y: number, c: string) => void

const GREY = '#8A847C'
const MOP = '#CFCFCB'
const LIP = '#7A2230'

// Dark hats vanish against a dark terminal: lift them toward white.
const lift = (hex: string): string => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number]
  if (0.2126 * r + 0.7152 * g + 0.0722 * b > 90) return hex
  return '#' + [r, g, b].map(v => Math.round(v + (255 - v) * 0.45).toString(16).padStart(2, '0')).join('')
}

const TERM_HATS: Record<Look['hat'], (p: Dot, s: Span, c: string, d: string) => void> = {
  bandana: (p, s, c, d) => { s(1, 4, 1, c); p(2, 1, WHITE); p(5, 1, d) },
  sailor: (_p, s, c) => { s(1, 4, 0, WHITE); s(1, 4, 1, c) },
  tricorne: (p, s, c, d) => { s(0, 5, 0, c); p(0, 0, d); p(5, 0, d); s(2, 3, 0, GOLD) },
  beanie: (p, s, c, d) => { s(1, 4, 0, c); s(1, 4, 1, d); p(2, 0, WHITE) },
  captain: (p, s, c, d) => { s(1, 4, 0, c); p(2, 0, GOLD); s(0, 5, 1, d) },
  headphones: (p, s, c) => { s(1, 4, 0, GREY); for (const y of [2, 3]) { p(0, y, c); p(5, y, c) } },
  antennae: (p, _s, c) => { p(1, 0, c); p(4, 0, c) },
  spikes: (p, s, c) => { p(0, 0, c); p(2, 0, c); p(3, 0, c); p(5, 0, c); s(1, 4, 1, c) },
  bow: (p, _s, c, d) => { p(3, 0, c); p(4, 0, d); p(5, 0, c) },
}

// Eyes two pixels tall at columns 1 and 4.
const TERM_EYES: Record<Look['eyes'], (p: Dot, L: Look) => void> = {
  round: p => { for (const x of [1, 4]) { p(x, 2, INK); p(x, 3, INK) } },
  big: p => { for (const x of [1, 4]) { p(x, 2, WHITE); p(x, 3, INK) } },
  sleepy: (p, L) => { for (const x of [1, 4]) { p(x, 2, shade(L.body, 0.72)); p(x, 3, INK) } },
  patch: p => { p(0, 2, INK); p(1, 2, INK); p(1, 3, INK); p(4, 2, INK); p(4, 3, INK) },
  glasses: p => { for (const x of [1, 4]) { p(x, 2, LENS); p(x, 3, INK) }; p(2, 2, GREY); p(3, 2, GREY) },
  fierce: (p, L) => { for (const x of [1, 4]) { p(x, 2, shade(L.body, 0.5)); p(x, 3, INK) }; p(2, 2, shade(L.body, 0.5)); p(3, 2, shade(L.body, 0.5)) },
}

const TERM_MOUTHS: Record<Look['mouth'], (p: Dot, s: Span, L: Look) => void> = {
  smile: (_p, s, L) => s(2, 3, 4, shade(L.body, 0.5)),
  flat: (_p, s) => s(2, 3, 4, INK),
  open: (_p, s) => s(2, 3, 4, LIP),
  mustache: (_p, s) => s(1, 4, 4, BROWN),
  beard: (p, s) => { s(1, 4, 4, BROWN); p(0, 3, BROWN); p(5, 3, BROWN) },
  grin: (_p, s) => s(2, 3, 4, WHITE),
}

const TERM_EXTRAS: Record<Look['extra'], (p: Dot, L: Look) => void> = {
  none: () => {},
  blush: p => { p(0, 3, '#FF8FA3'); p(5, 3, '#FF8FA3') },
  scarf: (p, L) => { p(0, 4, L.extraColor); p(5, 4, L.extraColor) },
  belt: () => {},
}

const TERM_GEAR: Record<string, (p: Dot, frame: number) => void> = {
  // A mop that swishes.
  low: (p, f) => { for (let y = 0; y <= 3; y++) p(6, y, WOOD); p(6, 4, MOP); if (f % 2) p(6, 5, MOP) },
  // An oar that rows.
  medium: (p, f) => { for (let y = f % 2 ? 1 : 0; y <= 2; y++) p(6, y, WOOD); for (let y = 3; y <= 5; y++) p(6, y, '#8A6038') },
  // A spyglass that scans.
  high: (p, f) => { p(6, f % 2 ? 1 : 2, '#9BD3F5'); p(6, f % 2 ? 2 : 3, '#C9A227') },
  // A lantern whose flame flickers.
  xhigh: (p, f) => { p(6, 1, GREY); p(6, 2, GOLD); p(6, 3, f % 2 ? '#FFD27A' : '#FF8A3D'); p(6, 4, GOLD); p(6, 5, GREY) },
  // A ship's wheel that turns.
  max: (p, f) => { for (let y = 1; y <= 4; y++) p(6, y, (y + f) % 2 ? GOLD : WOOD) },
}

/**
 * A crew member as three lines of cells, runs of one style merged. `frame`
 * alternates the legs and moves what it holds, so a running row walks as the
 * pane redraws.
 */
export function mascotCells(slot: number, effort: string | undefined, frame = 0): Cell[][] {
  const L = lookOf(slot)
  const B = L.body
  const px: Array<Array<string | undefined>> = Array.from({ length: TERM_MASCOT_H * 2 }, () => Array<string | undefined>(TERM_MASCOT_W).fill(undefined))
  const p: Dot = (x, y, c) => {
    const row = px[y]
    if (row && x >= 0 && x < TERM_MASCOT_W) row[x] = c
  }
  const s: Span = (x0, x1, y, c) => {
    for (let x = x0; x <= x1; x++) p(x, y, c)
  }
  // A round body: head top, two full rows, a chin, feet that step.
  s(1, 4, 1, B); s(0, 5, 2, B); s(0, 5, 3, B); s(1, 4, 4, B)
  for (const x of frame % 2 ? [2, 3] : [1, 4]) p(x, 5, shade(B, 0.72))
  TERM_EXTRAS[L.extra](p, L)
  TERM_MOUTHS[L.mouth](p, s, L)
  TERM_EYES[L.eyes](p, L)
  const hat = lift(L.hatColor)
  TERM_HATS[L.hat](p, s, hat, shade(hat, 0.72))
  if (effort) TERM_GEAR[effort]?.(p, frame)
  const lines: Cell[][] = []
  for (let j = 0; j < px.length; j += 2) {
    const cells: Cell[] = []
    for (let x = 0; x < TERM_MASCOT_W; x++) {
      const top = px[j]?.[x]
      const bot = px[j + 1]?.[x]
      const c: Cell =
        !top && !bot ? { ch: ' ' } : top === bot ? { ch: '█', fg: top } : !bot ? { ch: '▀', fg: top } : !top ? { ch: '▄', fg: bot } : { ch: '▀', fg: top, bg: bot }
      const last = cells[cells.length - 1]
      if (last && last.fg === c.fg && last.bg === c.bg) last.ch += c.ch
      else cells.push(c)
    }
    lines.push(cells)
  }
  return lines
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

export const RING = 18

/** A small circular meter for a usage window, colored by meterColor. */
export function ringSvg(pct: number, size = RING): string {
  const c = size / 2
  const r = c - 2
  const len = 2 * Math.PI * r
  const fill = (Math.max(0, Math.min(100, pct)) / 100) * len
  return svg(
    size,
    size,
    `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="#8a8a8a" stroke-opacity=".3" stroke-width="3"/>` +
      `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${meterColor(pct)}" stroke-width="3" stroke-linecap="round" stroke-dasharray="${fill.toFixed(2)} ${len.toFixed(2)}" transform="rotate(-90 ${c} ${c})"/>`,
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
