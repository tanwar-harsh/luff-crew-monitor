import { clip, fmtCost, fmtDuration, fmtTime, fmtTokens, textBar } from './format.ts'
import { stringsFor } from './i18n.ts'
import { modelLabel } from './pricing.ts'
import type { AgentRun, FlowView, LimitWindowView, Snapshot } from './types.ts'

/** `Tasks 3/5`, `Plan`, `Done`: what the bar's pill says. */
export function flowLabel(f: FlowView, lang: Snapshot['lang']): string {
  const s = stringsFor(lang)
  if (f.finished) return s.phase.close
  if (f.shownPhase === 'plan' || f.shownPhase === 'design') return s.phase[f.shownPhase]
  const count = f.total ? `${f.done}/${f.total}` : `${f.running} ${s.busy}`
  return `${f.shownPhase === 'review' ? s.phase.review : s.phase.delegate} ${count}`
}

const ctxPercent = (a: AgentRun): number => (a.contextMax ? Math.min(100, Math.round((a.contextTokens / a.contextMax) * 100)) : 0)

const elapsed = (a: AgentRun, now: number): number => (a.endedAt ?? Math.max(now, a.startedAt)) - a.startedAt

const GLYPH: Record<string, string> = { running: '●', done: '✓', failed: '✗', planned: '◷' }

function runLine(a: AgentRun, snap: Snapshot): string {
  const s = stringsFor(snap.lang)
  const model = [modelLabel(a.model), a.effort].filter(Boolean).join(' · ')
  const extra = [
    a.round > 1 ? `${s.round} ${a.round}` : '',
    a.background ? s.background : '',
    a.status === 'failed' ? s[(a.failure as 'error' | 'killed' | 'stalled') ?? 'error'] ?? s.error : '',
  ].filter(Boolean)
  const steps = a.step?.total ? ` · ${a.step.done}/${a.step.total}${a.step.note ? ' ' + clip(a.step.note, 40) : ''}` : ''
  const stats = `ctx ${ctxPercent(a)}% · ${fmtTokens(a.contextTokens)} · ≈${fmtCost(a.costUsd)} · ${fmtTime(elapsed(a, snap.now))}`
  return `  ${GLYPH[a.status]} ${clip(a.description, 60)}  [${a.type} · ${model}${extra.length ? ' · ' + extra.join(' · ') : ''}]${steps}\n      ${stats}`
}

function limitLine(label: string, w: LimitWindowView, snap: Snapshot): string {
  const s = stringsFor(snap.lang)
  const plan =
    w.usedPct === null
      ? s.noPlan
      : `${textBar(w.usedPct / 100, 10)} ${Math.round(w.usedPct)}%${w.resetsAt ? ` · ${s.resetsIn} ${fmtDuration(w.resetsAt - snap.now)}` : ` · ${s.startsNext}`}`
  return `  ${label.padEnd(16)} ${plan} · ≈${fmtCost(w.costUsd)} · ${fmtTokens(w.tokens)} ${s.tokensWord}`
}

/** The 5-hour and weekly plan windows, as text. */
export function renderLimits(snap: Snapshot): string[] {
  const l = snap.limits
  if (!l) return []
  const s = stringsFor(snap.lang)
  return [`${s.limits}`, limitLine(s.fiveHour, l.fiveHour, snap), limitLine(s.weekly, l.sevenDay, snap)]
}

/** A plain-text panel: what `crew_status` returns and `dashboard --print` shows. */
export function renderStatus(snap: Snapshot, dashboardUrl?: string): string {
  const s = stringsFor(snap.lang)
  const out: string[] = []
  const limits = renderLimits(snap)
  if (limits.length) out.push(...limits, '')
  const f = snap.flow
  if (f) {
    out.push(`${f.title}  ${textBar(f.ratio, 16)}  ${flowLabel(f, snap.lang)}  ${Math.round(f.ratio * 100)}%`)
  }
  const t = snap.totals
  out.push(`${s.cost} ≈${fmtCost(t.costUsd)} · ${s.tokens} ${fmtTokens(t.tokens)} · ${s.time} ${fmtTime(t.timeMs)}`)

  const running = snap.agents.filter(a => a.status === 'running').reverse()
  const finished = snap.agents.filter(a => a.status !== 'running').reverse()
  if (!snap.agents.length && !snap.planned.length) out.push('', snap.session ? s.empty : s.waiting)
  if (running.length) out.push('', `${s.running} · ${running.length}`, ...running.map(a => runLine(a, snap)))
  if (finished.length) out.push('', `${s.finished} · ${finished.length}`, ...finished.map(a => runLine(a, snap)))
  if (snap.planned.length) {
    out.push('', `${s.planned} · ${snap.planned.length}`)
    for (const p of snap.planned) {
      const meta = [p.agent, p.model ? modelLabel(p.model) : '', p.effort, p.after.length ? `${s.after} ${p.after.join(', ')}` : '']
        .filter(Boolean)
        .join(' · ')
      out.push(`  ${GLYPH.planned} ${p.n}. ${clip(p.title, 60)}${meta ? `  [${meta}]` : ''}`)
    }
  }
  if (dashboardUrl) out.push('', `Dashboard: ${dashboardUrl}`)
  out.push(`(${s.estimate})`)
  return out.join('\n')
}

/** One line for Claude Code's status line. Empty when there is nothing to show. */
export function renderStatusline(snap: Snapshot, opts: { color: boolean }): string {
  const f = snap.flow
  const t = snap.totals
  if (!f && !snap.agents.length) return ''
  const c = (code: string, text: string): string => (opts.color ? `\x1b[${code}m${text}\x1b[0m` : text)
  const parts: string[] = []
  if (f) {
    const color = f.finished ? '32' : '35'
    parts.push(`${c(color, '⛵')} ${clip(f.title, 28)} ${c(color, textBar(f.ratio, 10))} ${c('1', flowLabel(f, snap.lang))} ${c('2', Math.round(f.ratio * 100) + '%')}`)
  }
  const crew = snap.agents.length + snap.planned.length
  const live = t.running ? ` ${c('33', `${t.running}●`)}` : ''
  parts.push(`${c('2', `×${crew}`)}${live} ${c('2', `≈${fmtCost(t.costUsd)} · ${fmtTokens(t.tokens)} · ${fmtTime(t.timeMs)}`)}`)
  return parts.join('  ')
}
