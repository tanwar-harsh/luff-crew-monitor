export const fmtTokens = (n: number): string =>
  n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}k` : `${Math.max(0, Math.round(n))}`

export const fmtCost = (usd: number): string =>
  usd >= 100 ? `$${Math.round(usd)}` : usd >= 10 ? `$${usd.toFixed(1)}` : `$${usd.toFixed(2)}`

/** `m:ss`, or `h:mm:ss` past an hour. */
export function fmtTime(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const ss = String(s % 60).padStart(2, '0')
  return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`
}

/** Lowercase, punctuation-free form used to match task titles against run descriptions. */
export const normalize = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()

export const clip = (s: string, max: number): string => (s.length > max ? s.slice(0, Math.max(1, max - 1)) + '…' : s)

/** A text bar such as `▰▰▰▱▱`. */
export const textBar = (ratio: number, width: number, on = '▰', off = '▱'): string => {
  const filled = Math.round(Math.max(0, Math.min(1, ratio)) * width)
  return on.repeat(filled) + off.repeat(Math.max(0, width - filled))
}
