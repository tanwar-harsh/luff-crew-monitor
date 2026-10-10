/**
 * Cost estimation. Transcripts record tokens, not money, so every dollar figure
 * this tool shows is an estimate from the public list prices below.
 * Source: https://docs.claude.com/en/docs/about-claude/pricing (USD per million tokens).
 */

export interface Usage {
  input_tokens?: number
  output_tokens?: number
  cache_read_input_tokens?: number
  cache_creation_input_tokens?: number
  cache_creation?: {
    ephemeral_5m_input_tokens?: number
    ephemeral_1h_input_tokens?: number
  }
}

/** [input, 5m cache write, 1h cache write, cache read, output] in USD per MTok. */
export type PriceRow = readonly [number, number, number, number, number]

interface PriceRule {
  match: RegExp
  price: PriceRow
  /** Price used when the request's prompt exceeds `threshold` tokens. */
  long?: { threshold: number; price: PriceRow }
}

// Most specific first: the first match wins.
const RULES: PriceRule[] = [
  { match: /(fable|mythos)-5-1/, price: [10, 12.5, 20, 0.25, 50] },
  { match: /fable|mythos/, price: [10, 12.5, 20, 1, 50] },
  { match: /opus-5-5/, price: [4, 5, 8, 0.2, 20] },
  { match: /opus-4-1|opus-4(?!-\d)|opus-4-2025/, price: [15, 18.75, 30, 1.5, 75] },
  { match: /opus/, price: [5, 6.25, 10, 0.5, 25] },
  { match: /sonnet-5-5/, price: [2, 2.5, 4, 0.1, 10] },
  { match: /sonnet-5/, price: [2, 2.5, 4, 0.2, 10] },
  { match: /sonnet/, price: [3, 3.75, 6, 0.3, 15] },
  {
    match: /haiku-5-5/,
    price: [0.1, 0.125, 0.2, 0.01, 0.5],
    long: { threshold: 100_000, price: [0.5, 0.625, 1, 0.05, 2.5] },
  },
  { match: /haiku-3-5|3-5-haiku/, price: [0.8, 1, 1.6, 0.08, 4] },
  { match: /haiku/, price: [1, 1.25, 2, 0.1, 5] },
]

/** Used for unknown model ids: mid-range, so an estimate is never wildly off. */
export const FALLBACK_PRICE: PriceRow = [3, 3.75, 6, 0.3, 15]

let overrides: Array<{ match: RegExp; price: PriceRow }> = []

/** Lets `~/.luff-crew/config.json` add or replace prices, keyed by a substring of the model id. */
export function setPriceOverrides(table: Record<string, number[]> | undefined): void {
  overrides = Object.entries(table ?? {})
    .filter(([, row]) => Array.isArray(row) && row.length === 5 && row.every(n => typeof n === 'number' && n >= 0))
    .map(([key, row]) => ({ match: new RegExp(escapeRegExp(key.toLowerCase())), price: row as unknown as PriceRow }))
}

const escapeRegExp = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const promptTokens = (u: Usage): number =>
  (u.input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0)

export function priceOf(model: string, usage?: Usage): PriceRow {
  const id = model.toLowerCase()
  const custom = overrides.find(o => o.match.test(id))
  if (custom) return custom.price
  const rule = RULES.find(r => r.match.test(id))
  if (!rule) return FALLBACK_PRICE
  if (rule.long && usage && promptTokens(usage) > rule.long.threshold) return rule.long.price
  return rule.price
}

/** Estimated USD for one model request. */
export function costOf(model: string, u: Usage): number {
  const [input, write5m, write1h, read, output] = priceOf(model, u)
  const written = u.cache_creation_input_tokens ?? 0
  // The split by TTL is recorded on newer transcripts; older ones bill all writes at the 5m rate.
  const w1h = Math.min(written, u.cache_creation?.ephemeral_1h_input_tokens ?? 0)
  const w5m = written - w1h
  return (
    ((u.input_tokens ?? 0) * input +
      w5m * write5m +
      w1h * write1h +
      (u.cache_read_input_tokens ?? 0) * read +
      (u.output_tokens ?? 0) * output) /
    1e6
  )
}

/** Every token a request was billed for. */
export const tokensOf = (u: Usage): number => promptTokens(u) + (u.output_tokens ?? 0)

let windowOverrides: Record<string, number> = {}

export function setContextWindowOverrides(table: Record<string, number> | undefined): void {
  windowOverrides = Object.fromEntries(
    Object.entries(table ?? {}).filter(([, n]) => typeof n === 'number' && n > 0).map(([k, n]) => [k.toLowerCase(), n]),
  )
}

/** Context window size used for the `ctx %` figure. */
export function contextWindowOf(model: string): number {
  const id = model.toLowerCase()
  for (const [key, size] of Object.entries(windowOverrides)) if (id.includes(key)) return size
  if (/\[1m\]/.test(id)) return 1_000_000
  if (/haiku|claude-3/.test(id)) return 200_000
  // Generation 5 and later ship with a 1M window; earlier ones default to 200k.
  const gen = /(?:opus|sonnet|fable|mythos)-(\d+)/.exec(id)
  if (gen && Number(gen[1]) < 5) return 200_000
  return 1_000_000
}

/** `claude-opus-5-5` → `Opus 5.5`, `claude-sonnet-5` → `Sonnet 5`. */
export function modelLabel(id: string): string {
  if (!id) return '—'
  const m = /(fable|mythos|opus|sonnet|haiku)-(\d+)(?:-(\d{1,2})(?!\d))?/i.exec(id)
  if (!m) {
    const bare = id.replace(/^claude-/, '').replace(/\[.*\]$/, '')
    if (/^(fable|mythos|opus|sonnet|haiku)$/i.test(bare)) return bare.charAt(0).toUpperCase() + bare.slice(1).toLowerCase()
    return bare || '—'
  }
  const [, family = '', major = '', minor] = m
  return `${family.charAt(0).toUpperCase()}${family.slice(1).toLowerCase()} ${major}${minor ? '.' + minor : ''}`
}
