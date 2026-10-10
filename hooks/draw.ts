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

const INK = '#22201d'
const WOOD = '#A87B4F'
const GOLD = '#E8B931'
const WHITE = '#F4F4F1'
const BROWN = '#6B4A2B'
const LENS = '#CFEFFF'

// ---------------------------------------------------------------------------
// Each crew member's own look. A slot is a member's place in the job; every
// trait steps through its list at a stride coprime to the list's length, so
// neighbouring slots differ in every trait and the first twelve never share a
// body color.

const BODY = ['#E07A5F', '#3D9DD9', '#6CBF4A', '#9B7BE0', '#F2C94C', '#2BB3A0', '#E86AA6', '#4C6EF5', '#F08C2E', '#3CCFCF', '#E5484D', '#B5895A']
const HATS = ['#E5484D', '#2B3A67', '#F2C94C', '#2E2A27', '#7CD35B', '#9B7BE0', '#F08C2E', '#3D9DD9', '#E86AA6', '#1F2A4A']

export const HAT_STYLES = ['bandana', 'sailor', 'tricorne', 'beanie', 'captain', 'headphones', 'antennae', 'spikes', 'bow'] as const
export const EYE_STYLES = ['round', 'big', 'sleepy', 'patch', 'glasses', 'fierce'] as const
export const MOUTH_STYLES = ['smile', 'flat', 'open', 'mustache', 'beard', 'grin'] as const
export const EXTRA_STYLES = ['none', 'blush', 'scarf', 'belt'] as const

export type Look = {
  body: string
  hat: (typeof HAT_STYLES)[number]
  hatColor: string
  eyes: (typeof EYE_STYLES)[number]
  mouth: (typeof MOUTH_STYLES)[number]
  extra: (typeof EXTRA_STYLES)[number]
  extraColor: string
}

const pick = <T>(list: readonly T[], n: number): T => list[((n % list.length) + list.length) % list.length] as T

export function lookOf(slot: number): Look {
  const body = pick(BODY, slot)
  const notBody = (c: string, n: number): string => (c === body ? pick(HATS, n + 1) : c)
  return {
    body,
    hat: pick(HAT_STYLES, slot * 2 + 1),
    hatColor: notBody(pick(HATS, slot * 7 + 3), slot * 7 + 3),
    eyes: pick(EYE_STYLES, slot * 5 + 1),
    mouth: pick(MOUTH_STYLES, slot + 3),
    extra: pick(EXTRA_STYLES, slot * 3 + 1),
    extraColor: notBody(pick(HATS, slot * 3), slot * 3),
  }
}

export function hashOf(s: string): number {
  let h = 0
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return h
}

/**
 * Slots for one job's crew: the planned task titles first, in plan order, then
 * any other run, so a member keeps its look from planned to running to done.
 * The job's title turns the wheel, so two jobs field different crews.
 */
export function crewSlots(job: string, keys: string[]): (key: string) => number {
  const base = hashOf(job) % BODY.length
  const index = new Map<string, number>()
  for (const k of keys) if (!index.has(k)) index.set(k, index.size)
  return key => base + (index.get(key) ?? hashOf(key))
}

/** `#rrggbb` scaled toward black (f < 1) or white (f > 1). */
export function shade(hex: string, f: number): string {
  return '#' + [1, 3, 5].map(i => Math.round(Math.min(255, parseInt(hex.slice(i, i + 2), 16) * f)).toString(16).padStart(2, '0')).join('')
}

type Put = (x: number, y: number, w: number, h: number, fill: string, group?: string) => void

// What a member holds tells its effort; the animation classes move these.
const GEAR: Record<string, (r: Put) => void> = {
  // A mop that swishes.
  low: r => {
    r(21, 4, 1, 13, WOOD, 'prop'); r(19, 17, 5, 2, '#CFCFCB', 'prop')
    r(19, 19, 1, 1, '#CFCFCB', 'prop'); r(21, 19, 1, 1, '#CFCFCB', 'prop'); r(23, 19, 1, 1, '#CFCFCB', 'prop')
  },
  // An oar that rows.
  medium: r => {
    r(21, 3, 1, 13, WOOD, 'prop'); r(20, 15, 3, 4, '#8A6038', 'prop')
  },
  // A spyglass that scans.
  high: r => {
    r(19, 11, 5, 2, '#C9A227', 'prop'); r(19, 11, 1, 2, '#8C6F12', 'prop'); r(23, 11, 1, 2, '#9BD3F5', 'prop')
  },
  // A lantern whose flame flickers.
  xhigh: r => {
    r(21, 7, 1, 2, INK); r(20, 9, 3, 1, INK); r(20, 10, 3, 4, GOLD); r(20, 14, 3, 1, INK)
    r(21, 11, 1, 2, '#FF8A3D', 'flame')
  },
  // A ship's wheel that turns.
  max: r => {
    r(20, 11, 3, 1, WOOD, 'prop'); r(20, 17, 3, 1, WOOD, 'prop'); r(18, 13, 1, 3, WOOD, 'prop'); r(24, 13, 1, 3, WOOD, 'prop')
    r(19, 12, 1, 1, WOOD, 'prop'); r(23, 12, 1, 1, WOOD, 'prop'); r(19, 16, 1, 1, WOOD, 'prop'); r(23, 16, 1, 1, WOOD, 'prop')
    r(21, 10, 1, 9, '#8A6038', 'prop'); r(17, 14, 9, 1, '#8A6038', 'prop'); r(21, 14, 1, 1, GOLD, 'prop')
  },
}

const EYES: Record<Look['eyes'], (r: Put, L: Look) => void> = {
  round: r => {
    for (const x of [8, 14]) { r(x, 12, 2, 2, INK); r(x, 12, 1, 1, '#fff') }
  },
  big: r => {
    for (const x of [8, 14]) { r(x, 11, 2, 3, '#fff'); r(x + 1, 12, 1, 2, INK) }
  },
  sleepy: (r, L) => {
    for (const x of [8, 14]) { r(x, 12, 2, 1, shade(L.body, 0.7)); r(x, 13, 2, 1, INK) }
  },
  patch: r => {
    r(5, 10, 14, 1, INK); r(7, 11, 4, 3, INK); r(14, 12, 2, 2, INK); r(14, 12, 1, 1, '#fff')
  },
  glasses: r => {
    for (const x of [7, 13]) { r(x, 11, 4, 4, INK); r(x + 1, 12, 2, 2, LENS); r(x + 2, 13, 1, 1, INK) }
    r(11, 12, 2, 1, INK)
  },
  fierce: r => {
    for (const x of [8, 14]) { r(x, 12, 2, 2, INK); r(x, 12, 1, 1, '#fff') }
    r(7, 10, 1, 1, INK); r(8, 11, 2, 1, INK); r(16, 10, 1, 1, INK); r(14, 11, 2, 1, INK)
  },
}

const MOUTHS: Record<Look['mouth'], (r: Put) => void> = {
  smile: r => { r(10, 15, 1, 1, INK); r(11, 16, 2, 1, INK); r(13, 15, 1, 1, INK) },
  flat: r => r(11, 15, 2, 1, INK),
  open: r => { r(11, 15, 2, 2, '#7A2230'); r(11, 16, 2, 1, '#E5737F') },
  mustache: r => { r(9, 15, 6, 1, BROWN); r(8, 16, 1, 1, BROWN); r(15, 16, 1, 1, BROWN) },
  beard: r => { r(7, 15, 10, 1, BROWN); r(6, 16, 12, 1, BROWN); r(7, 17, 10, 1, BROWN); r(11, 15, 2, 1, '#7A2230') },
  grin: r => { r(10, 15, 4, 2, INK); r(11, 15, 1, 1, '#fff'); r(12, 15, 1, 1, '#fff') },
}

const EXTRAS: Record<Look['extra'], (r: Put, L: Look) => void> = {
  none: () => {},
  blush: (r, L) => {
    r(6, 15, 2, 1, 'rgba(255,120,140,.6)'); r(16, 15, 2, 1, 'rgba(255,120,140,.6)')
    r(7, 14, 1, 1, shade(L.body, 0.7)); r(16, 14, 1, 1, shade(L.body, 0.7))
  },
  scarf: (r, L) => { r(6, 17, 12, 1, L.extraColor); r(15, 18, 2, 2, L.extraColor) },
  belt: r => { r(6, 17, 12, 1, '#3A2A1E'); r(11, 17, 2, 1, GOLD) },
}

const HATS_DRAW: Record<Look['hat'], (r: Put, c: string, d: string) => void> = {
  bandana: (r, c, d) => { r(6, 9, 12, 2, c); r(18, 9, 2, 1, c); r(19, 10, 2, 1, d); r(8, 9, 1, 1, '#fff'); r(12, 10, 1, 1, '#fff'); r(15, 9, 1, 1, '#fff') },
  sailor: (r, c) => { r(7, 6, 10, 3, WHITE); r(7, 8, 10, 1, c); r(11, 5, 2, 1, c) },
  tricorne: (r, c) => { r(7, 6, 10, 2, c); r(5, 8, 14, 1, INK); r(11, 6, 2, 1, GOLD) },
  beanie: (r, c, d) => { r(7, 7, 10, 3, c); r(7, 9, 10, 1, d); r(11, 6, 2, 1, WHITE) },
  captain: (r, c) => { r(6, 5, 12, 3, c); r(5, 8, 14, 1, INK); r(11, 6, 2, 1, GOLD) },
  headphones: (r, c) => { r(7, 7, 10, 1, INK); r(6, 8, 1, 2, INK); r(17, 8, 1, 2, INK); r(4, 10, 3, 4, c); r(17, 10, 3, 4, c) },
  antennae: (r, c) => { r(8, 6, 1, 3, INK); r(15, 6, 1, 3, INK); r(7, 4, 3, 2, c); r(14, 4, 3, 2, c) },
  spikes: (r, c) => { r(7, 8, 10, 1, c); r(7, 7, 2, 1, c); r(10, 5, 2, 3, c); r(13, 6, 2, 2, c); r(16, 7, 1, 1, c) },
  bow: (r, c, d) => { r(12, 6, 3, 3, c); r(16, 6, 3, 3, c); r(15, 7, 1, 1, d) },
}

/**
 * One crew member as an SVG group on a 26×22 grid, placed at (x, y) and
 * scaled. Periods of every motion divide one second, so the once-a-second
 * redraw of a running row restarts them in step and nothing visibly jumps.
 */
export function mascot(x: number, y: number, scale: number, slot: number, effort: string | undefined, opts: { running?: boolean; dim?: boolean } = {}): string {
  const groups: Record<string, string[]> = { bd: [], la: [], lb: [], prop: [], flame: [] }
  const r: Put = (px, py, w, h, fill, g = 'bd') => {
    ;(groups[g] ??= []).push(`<rect x="${px}" y="${py}" width="${w}" height="${h}" fill="${fill}"/>`)
  }
  const L = lookOf(slot)
  const B = L.body
  const D = shade(B, 0.72)
  r(7, 9, 10, 1, B); r(6, 10, 12, 1, B); r(5, 11, 14, 6, B); r(6, 17, 12, 1, B)
  r(3, 13, 2, 3, B); r(19, 13, 2, 3, B)
  r(6, 18, 2, 3, D, 'la'); r(12, 18, 2, 3, D, 'la'); r(9, 18, 2, 3, D, 'lb'); r(15, 18, 2, 3, D, 'lb')
  EXTRAS[L.extra](r, L)
  EYES[L.eyes](r, L)
  MOUTHS[L.mouth](r)
  HATS_DRAW[L.hat](r, L.hatColor, shade(L.hatColor, 0.72))
  const gear = effort ? GEAR[effort] : undefined
  gear?.(r)
  const g = (name: string): string => ((groups[name] ?? []).length ? `<g class="${name}">${(groups[name] ?? []).join('')}</g>` : '')
  const cls = `m e-${gear ? effort : 'none'}${opts.running ? ' run' : ''}`
  return `<g transform="translate(${x},${y}) scale(${scale})" opacity="${opts.dim ? 0.6 : 1}" shape-rendering="crispEdges"><g class="${cls}"><g class="bd">${(groups.bd ?? []).join('')}${g('prop')}${g('flame')}</g>${g('la')}${g('lb')}</g></g>`
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
export const mascotSvg = (slot: number, effort: string | undefined, opts: { running?: boolean; dim?: boolean } = {}): string =>
  svg(MASCOT_W, MASCOT_H, mascot(0, 2, 1.65, slot, effort, opts))

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
export function stripSvg(W: number, icons: Array<{ slot: number; effort?: string | undefined; running: boolean; dim: boolean }>): string {
  const step = 38
  const fit = Math.max(1, Math.floor(W / step))
  return svg(
    Math.min(W, Math.max(step, icons.slice(0, fit).length * step)),
    STRIP_H,
    icons
      .slice(0, fit)
      .map((ic, i) => mascot(i * step, 0, 1.4, ic.slot, ic.effort, { running: ic.running, dim: ic.dim }))
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
// The terminal mascot: the same crew member on a 13×8 pixel grid (eleven for
// the body and arms, two for what it holds), drawn with half blocks, two
// pixels per cell, so it stands four lines tall.
//
//   rows 0-1 hat · 2 head top · 3-4 eyes · 5 mouth and arms · 6 chin · 7 legs

export type Cell = { ch: string; fg?: string | undefined; bg?: string | undefined }

export const TERM_MASCOT_W = 13
export const TERM_MASCOT_H = 4

type Dot = (x: number, y: number, c: string) => void
type Span = (x0: number, x1: number, y: number, c: string) => void

const TERM_HATS: Record<Look['hat'], (p: Dot, s: Span, c: string, d: string) => void> = {
  bandana: (p, s, c, d) => { s(2, 8, 2, c); p(4, 2, '#fff'); p(7, 2, '#fff'); p(9, 2, c); p(10, 3, d) },
  sailor: (_p, s, c) => { s(3, 7, 0, WHITE); s(2, 8, 1, WHITE); s(2, 8, 2, c) },
  tricorne: (p, s, c) => { s(3, 7, 0, c); p(5, 0, GOLD); s(1, 9, 1, INK) },
  beanie: (p, s, c, d) => { p(5, 0, WHITE); s(3, 7, 1, c); s(2, 8, 2, d) },
  captain: (p, s, c) => { s(2, 8, 0, c); p(5, 0, GOLD); s(1, 9, 1, INK) },
  headphones: (p, s, c) => { s(3, 7, 1, INK); p(2, 2, INK); p(8, 2, INK); s(0, 1, 3, c); s(0, 1, 4, c); s(9, 10, 3, c); s(9, 10, 4, c) },
  antennae: (p, _s, c) => { p(2, 0, c); p(8, 0, c); p(3, 1, INK); p(7, 1, INK) },
  spikes: (p, s, c) => { p(3, 0, c); p(5, 0, c); p(7, 0, c); s(2, 8, 1, c); s(2, 8, 2, c) },
  bow: (p, s, c, d) => { p(6, 0, c); p(8, 0, c); s(6, 8, 1, c); p(7, 1, d) },
}

const TERM_EYES: Record<Look['eyes'], (p: Dot, s: Span, L: Look) => void> = {
  round: p => { for (const x of [3, 7]) { p(x, 3, INK); p(x, 4, INK) } },
  big: p => { for (const x of [3, 7]) { p(x, 3, '#fff'); p(x, 4, INK) } },
  sleepy: (_p, s, L) => { s(2, 3, 3, shade(L.body, 0.72)); s(7, 8, 3, shade(L.body, 0.72)); s(2, 3, 4, INK); s(7, 8, 4, INK) },
  patch: (p, s) => { s(1, 9, 2, INK); s(2, 4, 3, INK); s(2, 4, 4, INK); p(7, 3, INK); p(7, 4, INK) },
  glasses: (p, s) => { s(2, 8, 3, INK); for (const x of [2, 4, 6, 8]) p(x, 4, INK); p(3, 4, LENS); p(7, 4, LENS) },
  fierce: (p, s) => { s(2, 3, 3, INK); s(7, 8, 3, INK); p(3, 4, INK); p(7, 4, INK) },
}

const TERM_MOUTHS: Record<Look['mouth'], (p: Dot, s: Span) => void> = {
  smile: p => { p(4, 5, INK); p(6, 5, INK); p(5, 6, INK) },
  flat: (_p, s) => s(4, 6, 5, INK),
  open: (_p, s) => { s(4, 6, 5, '#7A2230'); s(4, 6, 6, '#E5737F') },
  mustache: (p, s) => { s(3, 7, 5, BROWN); p(3, 6, BROWN); p(7, 6, BROWN) },
  beard: (p, s) => { s(2, 8, 5, BROWN); s(2, 8, 6, BROWN); p(5, 5, '#7A2230') },
  grin: (_p, s) => { s(3, 7, 5, INK); s(4, 6, 5, '#fff'); s(3, 7, 6, INK) },
}

const TERM_EXTRAS: Record<Look['extra'], (p: Dot, s: Span, L: Look) => void> = {
  none: () => {},
  blush: p => { p(2, 5, '#FF8FA3'); p(8, 5, '#FF8FA3') },
  scarf: (p, s, L) => { s(1, 9, 6, L.extraColor); p(8, 7, shade(L.extraColor, 0.8)) },
  belt: (p, s) => { s(1, 9, 6, '#3A2A1E'); p(5, 6, GOLD) },
}

const TERM_GEAR: Record<string, (p: Dot, s: Span, frame: number) => void> = {
  // A mop that swishes.
  low: (p, s, f) => { for (let y = 1; y <= 5; y++) p(11, y, WOOD); s(10, 12, 6, '#CFCFCB'); for (const x of f % 2 ? [10, 12] : [11]) p(x, 7, '#CFCFCB') },
  // An oar that rows.
  medium: (p, s, f) => { p(f % 2 ? 12 : 11, 0, WOOD); p(f % 2 ? 12 : 11, 1, WOOD); for (let y = 2; y <= 4; y++) p(11, y, WOOD); for (let y = 5; y <= 7; y++) s(11, 12, y, '#8A6038') },
  // A spyglass that scans.
  high: (p, _s, f) => { const y = f % 2 ? 3 : 4; p(10, y, '#8C6F12'); p(11, y, '#C9A227'); p(12, y, '#9BD3F5') },
  // A lantern whose flame flickers.
  xhigh: (p, s, f) => { p(11, 2, INK); s(11, 12, 3, GOLD); p(11, 4, f % 2 ? '#FFD27A' : '#FF8A3D'); p(12, 4, GOLD); s(11, 12, 5, GOLD); s(11, 12, 6, INK) },
  // A ship's wheel that turns.
  max: (p, _s, f) => {
    const a = f % 2 ? WOOD : '#8A6038'
    const b = f % 2 ? '#8A6038' : WOOD
    for (const [x, y] of [[10, 3], [12, 3], [10, 5], [12, 5]] as const) p(x, y, a)
    for (const [x, y] of [[11, 3], [10, 4], [12, 4], [11, 5]] as const) p(x, y, b)
    p(11, 4, GOLD); p(11, 2, WOOD); p(11, 6, WOOD)
  },
}

/**
 * A crew member as four lines of cells, runs of one style merged. `frame`
 * alternates the legs and moves what it holds, so a running row walks as the
 * pane redraws.
 */
export function mascotCells(slot: number, effort: string | undefined, frame = 0): Cell[][] {
  const L = lookOf(slot)
  const B = L.body
  const D = shade(B, 0.72)
  const px: Array<Array<string | undefined>> = Array.from({ length: TERM_MASCOT_H * 2 }, () => Array<string | undefined>(TERM_MASCOT_W).fill(undefined))
  const p: Dot = (x, y, c) => {
    const row = px[y]
    if (row && x >= 0 && x < TERM_MASCOT_W) row[x] = c
  }
  const s: Span = (x0, x1, y, c) => {
    for (let x = x0; x <= x1; x++) p(x, y, c)
  }
  // A round body: head top, two full rows, arms out, a chin, walking feet.
  s(2, 8, 2, B); s(1, 9, 3, B); s(1, 9, 4, B); s(0, 10, 5, B); s(1, 9, 6, B)
  for (const x of frame % 2 ? [3, 4, 6, 7] : [2, 3, 7, 8]) p(x, 7, D)
  TERM_EXTRAS[L.extra](p, s, L)
  TERM_EYES[L.eyes](p, s, L)
  TERM_MOUTHS[L.mouth](p, s)
  TERM_HATS[L.hat](p, s, L.hatColor, shade(L.hatColor, 0.72))
  if (effort) TERM_GEAR[effort]?.(p, s, frame)
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
