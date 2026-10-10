// The crew's looks: each subagent's own body color, hat, eyes, mouth and extra,
// and its pixel mascot as an SVG group. Shared by the mod (hooks/draw.ts) and
// the browser view (dashboard), so a crew member looks the same everywhere.
// Pure functions, no engine or Node calls.

export const INK = '#22201d'
export const WOOD = '#A87B4F'
export const GOLD = '#E8B931'
export const WHITE = '#F4F4F1'
export const BROWN = '#6B4A2B'
export const LENS = '#CFEFFF'

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
