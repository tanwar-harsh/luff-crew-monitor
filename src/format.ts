export const fmtTokens = (n: number): string =>
  n >= 999_500 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}k` : `${Math.max(0, Math.round(n))}`

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

/** A coarse countdown: `3d 4h`, `1h 20m`, `12m`. */
export function fmtDuration(ms: number): string {
  const m = Math.max(0, Math.ceil(ms / 60_000))
  const d = Math.floor(m / 1440)
  const h = Math.floor((m % 1440) / 60)
  if (d) return `${d}d ${h}h`
  if (h) return `${h}h ${m % 60}m`
  return `${m}m`
}

/** Lowercase, punctuation-free form used to match task titles against run descriptions. */
export const normalize = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()

export const clip = (s: string, max: number): string => {
  if (s.length <= max) return s
  const chars = Array.from(s)
  return chars.length > max ? chars.slice(0, Math.max(1, max - 1)).join('') + '…' : s
}

/** A text bar such as `▰▰▰▱▱`. */
export const textBar = (ratio: number, width: number, on = '▰', off = '▱'): string => {
  const w = Math.max(0, Math.floor(Number.isFinite(width) ? width : 0))
  const filled = Math.round(Math.max(0, Math.min(1, Number.isFinite(ratio) ? ratio : 0)) * w)
  return on.repeat(filled) + off.repeat(Math.max(0, w - filled))
}
