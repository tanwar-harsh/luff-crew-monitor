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
// SVG one. It stands three lines tall (the height of a row's text) and seven
// columns wide: six of body, one for what it holds. Each cell is a quadrant
// block, 2×2 pixels in two colors, so the grid is 14×6 pixels, twice the
// detail half blocks give. Pixels are drawn so no cell needs a third color:
// round corners, eyes with a glint, a mouth, feet, a hat with its own shape.
//
//   pixel rows: 0 hat · 1 head top · 2-3 eyes · 4 chin and mouth · 5 feet
//   cell columns: 0 and 5 the round sides · 1 and 4 the eyes · 2-3 the mouth
//
// While a member runs (`frame` > 0) it blinks, glances, lifts its feet in
// turn, its hat's loose parts flutter, and what it holds moves.

export type Cell = { ch: string; fg?: string | undefined; bg?: string | undefined }

export const TERM_MASCOT_W = 7
export const TERM_MASCOT_H = 3

type Dot = (x: number, y: number, c: string | undefined) => void
type Span = (x0: number, x1: number, y: number, c: string | undefined) => void

const GREY = '#8A847C'
const MOP = '#CFCFCB'
const LIP = '#7A2230'
const BLUSH = '#FF8FA3'

// Dark hats vanish against a dark terminal: lift them toward white.
const lift = (hex: string): string => {
  const [r, g, b] = rgb(hex)
  if (0.2126 * r + 0.7152 * g + 0.0722 * b > 90) return hex
  return '#' + [r, g, b].map(v => Math.round(v + (255 - v) * 0.45).toString(16).padStart(2, '0')).join('')
}
const rgb = (hex: string): [number, number, number] => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)) as [number, number, number]

// Hats sit on pixel rows 0-1. Over the head (cells 1-4) a cell's top pixels
// share one color with the head below; beside it (cells 0 and 5) anything goes.
const TERM_HATS: Record<Look['hat'], (p: Dot, s: Span, c: string, d: string, f: number) => void> = {
  // Tied over the head top, its tail fluttering.
  bandana: (p, s, c, _d, f) => { s(2, 9, 1, c); p(10, 1, c); p(f % 2 ? 11 : 10, 0, c) },
  // White cap on a colored band, a ribbon behind.
  sailor: (p, s, c, _d, f) => { s(2, 9, 0, WHITE); s(2, 9, 1, c); p(10, 1, c); p(f % 2 ? 11 : 10, f % 2 ? 1 : 0, c) },
  // A wide brim with upturned corners.
  tricorne: (p, s, c) => { s(0, 11, 0, c); p(0, 1, c); p(11, 1, c); s(4, 7, 0, GOLD) },
  // A knit cap and a darker rim.
  beanie: (_p, s, c, d) => { s(2, 9, 0, c); s(2, 9, 1, d) },
  // A cap on a gold band wider than the head.
  captain: (_p, s, c) => { s(2, 9, 0, c); s(0, 11, 1, GOLD) },
  // A band over the top, cups over the round sides.
  headphones: (p, s, c) => { s(2, 9, 0, GREY); p(1, 1, GREY); p(10, 1, GREY); p(1, 2, c); s(0, 1, 3, c); p(10, 2, c); s(10, 11, 3, c) },
  // Two stalks at the sides that wiggle.
  antennae: (p, _s, c, _d, f) => { p(f % 2 ? 0 : 1, 0, c); p(1, 1, c); p(f % 2 ? 11 : 10, 0, c); p(10, 1, c) },
  // Hair standing up in four spikes.
  spikes: (p, s, c) => { s(2, 9, 1, c); for (const x of [2, 4, 6, 8]) p(x, 0, c); p(1, 1, c); p(10, 1, c) },
  // A bow on one side, its knot darker.
  bow: (p, s, c, d) => { s(6, 7, 0, c); s(8, 9, 0, d); p(10, 0, c); p(10, 1, c); p(11, 0, c) },
}

// Eyes fill cells 1 and 4: pixels (2-3, 2-3) and (8-9, 2-3).
type Eye = [string, string, string, string] // top-left, top-right, bottom-left, bottom-right
const TERM_EYES: Record<Look['eyes'], (L: Look, f: number, side: 0 | 1) => Eye> = {
  round: () => [WHITE, INK, INK, INK],
  // Big whites whose pupils glance from side to side.
  big: (_L, f) => (f % 4 < 2 ? [WHITE, INK, WHITE, INK] : [INK, WHITE, INK, WHITE]),
  sleepy: L => [L.body, L.body, INK, INK],
  patch: (_L, _f, side) => (side ? [WHITE, INK, INK, INK] : [INK, INK, INK, INK]),
  glasses: () => [LENS, LENS, INK, INK],
  // Brows slanting in.
  fierce: (L, _f, side) => (side ? [INK, L.body, INK, INK] : [L.body, INK, INK, INK]),
}

// The mouth fills the top of cells 2-3 (pixels 4-7, row 4).
const TERM_MOUTHS: Record<Look['mouth'], (p: Dot, s: Span, L: Look, f: number) => void> = {
  smile: (_p, s, L) => s(4, 7, 4, shade(L.body, 0.5)),
  flat: (_p, s) => s(4, 7, 4, INK),
  // Talks while it works.
  open: (_p, s, L, f) => s(4, 7, 4, f % 2 ? shade(L.body, 0.5) : LIP),
  // A handlebar: its ends curl up beside the mouth.
  mustache: (p, s) => { s(4, 7, 4, BROWN); p(4, 3, BROWN); p(7, 3, BROWN) },
  beard: (_p, s) => s(2, 9, 4, BROWN),
  grin: (_p, s) => s(4, 7, 4, WHITE),
}

const TERM_EXTRAS: Record<Look['extra'], (p: Dot, s: Span, L: Look, f: number) => void> = {
  none: () => {},
  // Cheeks under the eyes.
  blush: (_p, s) => { s(2, 3, 4, BLUSH); s(8, 9, 4, BLUSH) },
  // Round the chin, a tail that flutters.
  scarf: (p, s, L, f) => { s(1, 10, 4, L.extraColor); p(f % 2 ? 11 : 10, 5, L.extraColor) },
  belt: () => {},
}

// What it holds, in cell 6 (pixels 12-13).
const TERM_GEAR: Record<string, (p: Dot, s: Span, f: number) => void> = {
  // A mop that swishes.
  low: (p, s, f) => { for (let y = 0; y <= 3; y++) p(12, y, WOOD); s(12, 13, 4, MOP); p(f % 2 ? 13 : 12, 5, MOP) },
  // An oar that rows: the blade dips deep, then rises.
  medium: (p, s, f) => { const blade = f % 2 ? 2 : 4; for (let y = 0; y < blade; y++) p(12, y, WOOD); for (let y = blade; y <= 5; y++) s(12, 13, y, '#8A6038') },
  // A spyglass whose lens glints.
  high: (p, s, f) => { s(12, 13, 2, GOLD); p(12, 3, GOLD); p(13, 3, f % 2 ? WHITE : '#9BD3F5') },
  // A lantern whose flame flickers.
  xhigh: (p, s, f) => { p(13, 0, GREY); s(12, 13, 1, GREY); p(12, 2, f % 2 ? '#FF8A3D' : '#FFD27A'); p(13, 2, f % 2 ? '#FFD27A' : '#FF8A3D'); p(12, 3, f % 2 ? '#FFD27A' : '#FF8A3D'); p(13, 3, f % 2 ? '#FF8A3D' : '#FFD27A'); s(12, 13, 4, GREY) },
  // A ship's wheel that turns.
  max: (p, _s, f) => { for (let y = 0; y <= 5; y++) for (const x of [12, 13]) p(x, y, (x + y + f) % 2 ? GOLD : WOOD) },
}

// Quadrant blocks by which of a cell's pixels take the foreground:
// top-left 1, top-right 2, bottom-left 4, bottom-right 8.
const QUAD = ' ▘▝▀▖▌▞▛▗▚▐▜▄▙▟█'

const dist = (a: string, b: string): number => {
  const [x, y] = [rgb(a), rgb(b)]
  return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2
}

/** One cell from its four pixels; a third color, if a design ever makes one, goes to the nearer of the two kept. */
function quadCell(px: Array<string | undefined>): Cell {
  const counts = new Map<string | undefined, number>()
  for (const c of px) counts.set(c, (counts.get(c) ?? 0) + 1)
  let kept = [...counts.keys()]
  if (kept.length > 2) {
    kept = kept.sort((a, b) => (counts.get(b) ?? 0) - (counts.get(a) ?? 0)).slice(0, 2)
    px = px.map(c => (kept.includes(c) ? c : c && kept.filter(Boolean).sort((a, b) => dist(c, a!) - dist(c, b!))[0]))
  }
  if (kept.length === 1) return kept[0] ? { ch: '█', fg: kept[0] } : { ch: ' ' }
  // The foreground is a color, never the terminal's own background.
  const fg = kept[0] ?? kept[1]
  const bg = fg === kept[0] ? kept[1] : kept[0]
  const mask = px.reduce((m, c, i) => (c === fg ? m | (1 << i) : m), 0)
  return { ch: QUAD[mask] ?? ' ', fg, bg }
}

/**
 * A crew member as three lines of cells, runs of one style merged. `frame`
 * counts seconds while it runs and stays 0 while it doesn't, so a resting
 * member stands still.
 */
export function mascotCells(slot: number, effort: string | undefined, frame = 0): Cell[][] {
  const L = lookOf(slot)
  const B = L.body
  const D = shade(B, 0.72)
  const W = TERM_MASCOT_W * 2
  const px: Array<Array<string | undefined>> = Array.from({ length: TERM_MASCOT_H * 2 }, () => Array<string | undefined>(W).fill(undefined))
  const p: Dot = (x, y, c) => {
    const row = px[y]
    if (row && x >= 0 && x < W) row[x] = c
  }
  const s: Span = (x0, x1, y, c) => {
    for (let x = x0; x <= x1; x++) p(x, y, c)
  }
  // A round body: narrow head top, widening to the cheeks, a chin.
  s(2, 9, 1, B); s(1, 10, 2, B); s(0, 11, 3, B); s(1, 10, 4, B)
  // Feet under the eye columns; while walking, one lifts at a time.
  const lifted = frame ? frame % 3 : -1
  if (lifted !== 1) s(2, 3, 5, D)
  if (lifted !== 2) s(8, 9, 5, D)
  TERM_EXTRAS[L.extra](p, s, L, frame)
  TERM_MOUTHS[L.mouth](p, s, L, frame)
  const blink = frame > 0 && (frame + slot) % 5 === 4
  for (const [side, x] of [[0, 2], [1, 8]] as const) {
    const [tl, tr, bl, br] = blink ? [B, B, INK, INK] : TERM_EYES[L.eyes](L, frame, side)
    p(x, 2, tl); p(x + 1, 2, tr); p(x, 3, bl); p(x + 1, 3, br)
  }
  const hat = lift(L.hatColor)
  TERM_HATS[L.hat](p, s, hat, shade(hat, 0.72), frame)
  if (effort) TERM_GEAR[effort]?.(p, s, frame)
  const lines: Cell[][] = []
  for (let j = 0; j < px.length; j += 2) {
    const cells: Cell[] = []
    for (let x = 0; x < W; x += 2) {
      const c = quadCell([px[j]?.[x], px[j]?.[x + 1], px[j + 1]?.[x], px[j + 1]?.[x + 1]])
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
