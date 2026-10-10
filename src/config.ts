import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { appDir, claudeDir } from './paths.ts'
import { setContextWindowOverrides, setPriceOverrides } from './pricing.ts'

export type Lang = 'en' | 'ru'

export interface Config {
  /** Preferred dashboard port; the next free one is used when it is taken. */
  port: number
  /** `auto` follows Claude Code's `language` setting, then the system locale. */
  language: 'auto' | Lang
  /** Open the dashboard in the browser by itself when a job with a plan starts (off: only on request). */
  autoOpen: boolean
  /** A run with no transcript activity for this long, and no end, is marked stalled. */
  stallMinutes: number
  /** USD per MTok as [input, 5m write, 1h write, cache read, output], keyed by a model id substring. */
  prices?: Record<string, number[]>
  /** Context window sizes keyed by a model id substring. */
  contextWindows?: Record<string, number>
}

export const DEFAULTS: Config = { port: 7420, language: 'auto', autoOpen: false, stallMinutes: 30 }

export const configPath = (): string => join(appDir(), 'config.json')

function readJson(path: string): Record<string, unknown> {
  try {
    const value: unknown = JSON.parse(readFileSync(path, 'utf8'))
    return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : {}
  } catch {
    return {}
  }
}

const bool = (v: string | undefined): boolean | undefined =>
  v === undefined || v === '' ? undefined : !/^(0|false|no|off)$/i.test(v.trim())

const num = (v: unknown): number | undefined => {
  const n = typeof v === 'string' ? Number(v) : v
  return typeof n === 'number' && Number.isFinite(n) && n > 0 ? n : undefined
}

const port = (v: unknown): number | undefined => {
  const n = num(v)
  return n !== undefined && Number.isInteger(n) && n <= 65535 ? n : undefined
}

const isRecord = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)

/** Keeps only entries whose value passes `ok`; undefined when nothing valid is left. */
function cleanTable<T>(v: unknown, ok: (x: unknown) => x is T): Record<string, T> | undefined {
  if (!isRecord(v)) return undefined
  const out: Record<string, T> = {}
  for (const [k, x] of Object.entries(v)) if (k.trim() !== '' && ok(x)) out[k] = x
  return Object.keys(out).length ? out : undefined
}

const isPrice = (x: unknown): x is number[] =>
  Array.isArray(x) && x.length === 5 && x.every(n => typeof n === 'number' && Number.isFinite(n) && n >= 0)
const isWindow = (x: unknown): x is number => typeof x === 'number' && Number.isFinite(x) && x > 0

const lang = (v: unknown): Config['language'] | undefined => (v === 'en' || v === 'ru' || v === 'auto' ? v : undefined)

/** Defaults, then `~/.luff-crew/config.json`, then `LUFF_CREW_*` environment variables. */
export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const file = readJson(configPath())
  const cfg: Config = {
    port: port(env.LUFF_CREW_PORT) ?? port(file.port) ?? DEFAULTS.port,
    language: lang(env.LUFF_CREW_LANG) ?? lang(file.language) ?? DEFAULTS.language,
    autoOpen: bool(env.LUFF_CREW_AUTO_OPEN) ?? (typeof file.autoOpen === 'boolean' ? file.autoOpen : DEFAULTS.autoOpen),
    stallMinutes: num(env.LUFF_CREW_STALL_MINUTES) ?? num(file.stallMinutes) ?? DEFAULTS.stallMinutes,
  }
  const prices = cleanTable(file.prices, isPrice)
  if (prices) cfg.prices = prices
  const windows = cleanTable(file.contextWindows, isWindow)
  if (windows) cfg.contextWindows = windows
  setPriceOverrides(cfg.prices)
  setContextWindowOverrides(cfg.contextWindows)
  return cfg
}

const isRussian = (v: unknown): boolean => typeof v === 'string' && /^(ru|russian|рус)/i.test(v.trim())

/** Resolves `auto` from Claude Code's settings, then the locale; English otherwise. */
export function resolveLang(cfg: Config, env: NodeJS.ProcessEnv = process.env): Lang {
  if (cfg.language !== 'auto') return cfg.language
  const settings = readJson(join(claudeDir(), 'settings.json'))
  if (typeof settings.language === 'string' && settings.language.trim()) return isRussian(settings.language) ? 'ru' : 'en'
  const locale = env.LC_ALL || env.LC_MESSAGES || env.LANG || Intl.DateTimeFormat().resolvedOptions().locale
  return isRussian(locale) ? 'ru' : 'en'
}
