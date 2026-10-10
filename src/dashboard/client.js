// Dashboard client: follows /events and keeps the page in sync with the crew.
// Rows are keyed by run id and patched in place, so mascot animations keep
// running smoothly across the once-a-second clock updates.
;(() => {
  'use strict'

  const boot = JSON.parse(document.getElementById('boot').textContent)
  const STR = boot.strings
  const $ = sel => document.querySelector(sel)

  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem('luff-crew:' + k)
        return v === null ? d : JSON.parse(v)
      } catch {
        return d
      }
    },
    set(k, v) {
      try {
        localStorage.setItem('luff-crew:' + k, JSON.stringify(v))
      } catch {
        // Private mode: settings last for this page only.
      }
    },
  }

  const ui = {
    compact: store.get('compact', false),
    finishedOpen: store.get('finishedOpen', true),
    theme: store.get('theme', 'auto'),
    limitsOpen: store.get('limitsOpen', true),
  }
  let snap = null
  let clockOffset = 0 // server now - local now

  // ------------------------------------------------------------------ format

  const esc = s =>
    String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])
  const fmtTokens = n => (n >= 1e6 ? (n / 1e6).toFixed(1) + 'M' : n >= 1e3 ? Math.round(n / 1e3) + 'k' : String(Math.max(0, Math.round(n))))
  const fmtCost = n => (n >= 100 ? '$' + Math.round(n) : n >= 10 ? '$' + n.toFixed(1) : '$' + n.toFixed(2))
  const fmtTime = ms => {
    const s = Math.max(0, Math.round(ms / 1000))
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const ss = String(s % 60).padStart(2, '0')
    return h ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`
  }
  const fmtDur = ms => {
    const m = Math.max(0, Math.ceil(ms / 60000))
    const d = Math.floor(m / 1440)
    const h = Math.floor((m % 1440) / 60)
    return d ? `${d}d ${h}h` : h ? `${h}h ${m % 60}m` : `${m}m`
  }
  const clockAt = (t, withDay) => {
    try {
      return new Date(t).toLocaleString(boot.lang, withDay ? { weekday: 'short', hour: 'numeric', minute: '2-digit' } : { hour: 'numeric', minute: '2-digit' })
    } catch {
      return ''
    }
  }
  const modelLabel = id => {
    if (!id) return '—'
    const m = /(fable|mythos|opus|sonnet|haiku)-(\d+)(?:-(\d{1,2})(?!\d))?/i.exec(id)
    if (!m) {
      const bare = id.replace(/^claude-/, '').replace(/\[.*\]$/, '')
      return /^(fable|mythos|opus|sonnet|haiku)$/i.test(bare) ? bare[0].toUpperCase() + bare.slice(1).toLowerCase() : bare || '—'
    }
    return m[1][0].toUpperCase() + m[1].slice(1).toLowerCase() + ' ' + m[2] + (m[3] ? '.' + m[3] : '')
  }
  const now = () => Date.now() + clockOffset
  const elapsed = a => (a.endedAt ?? Math.max(now(), a.startedAt)) - a.startedAt
  const ctxPct = a => (a.contextMax ? Math.min(100, Math.round((a.contextTokens / a.contextMax) * 100)) : 0)
  const totalTime = () => {
    if (!snap.agents.length) return 0
    const start = Math.min(...snap.agents.map(a => a.startedAt))
    const end = Math.max(...snap.agents.map(a => a.endedAt ?? Math.max(now(), a.startedAt)))
    return end - start
  }

  // ----------------------------------------------------------------- mascots
  // The agent type's color, for its name and bars.

  const PALETTE = ['#E07A5F', '#3D9DD9', '#2BB3A0', '#9B7BE0', '#E0A83D', '#D96BA0', '#5FAF4F']
  const KNOWN = { 'general-purpose': 0, Explore: 2, Plan: 3, 'statusline-setup': 4 }
  const colorOf = type => {
    const bare = String(type || '').replace(/^[^:]*:/, '')
    if (bare in KNOWN) return PALETTE[KNOWN[bare]]
    let h = 0
    for (const ch of bare) h = (h * 31 + ch.charCodeAt(0)) >>> 0
    return PALETTE[h % PALETTE.length]
  }

  // Each run and planned task arrives with its crew mascot already drawn
  // (src/crew.ts, the same looks as the panel in Claude); this frames it.
  const mascotSvg = (body, w, h) =>
    `<svg viewBox="0 0 26 22" width="${w}" height="${h}" shape-rendering="crispEdges" aria-hidden="true">${body || ''}</svg>`

  // ------------------------------------------------------------------- views

  const statusHtml = (status, color) => {
    if (status === 'running') return `<i style="background:${color}"></i>`
    if (status === 'done')
      return '<svg viewBox="0 0 16 16" width="16" height="16"><path d="M3.5 8.5l3 3 6-6.5" fill="none" stroke="var(--ok)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    if (status === 'failed')
      return '<svg viewBox="0 0 16 16" width="16" height="16"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="var(--bad)" stroke-width="1.8" stroke-linecap="round"/></svg>'
    return '<svg viewBox="0 0 16 16" width="16" height="16"><circle cx="8" cy="8" r="5.5" fill="none" stroke="var(--faint)" stroke-width="1.4"/><path d="M8 5.2v3l2 1.3" fill="none" stroke="var(--faint)" stroke-width="1.4" stroke-linecap="round"/></svg>'
  }

  const failureText = a => STR[a.failure] || STR.error

  function runRowHtml(a) {
    const color = colorOf(a.type)
    const meta = [a.effort ? `${esc(modelLabel(a.model))} · ${esc(a.effort)}` : esc(modelLabel(a.model))]
    if (a.round > 1) meta.push(`${esc(STR.round)} ${a.round}`)
    if (a.background) meta.push(esc(STR.background))
    if (a.depth > 1) meta.push('↳'.repeat(a.depth - 1))
    const err = a.status === 'failed' ? ` · <span class="err">${esc(failureText(a))}</span>` : ''
    return `
      <div class="mascot" data-k="mascot"></div>
      <div style="min-width:0">
        <div class="name" data-k="name"></div>
        <div class="meta"><span class="type" style="color:${color}">${esc(a.type)}</span> · ${meta.join(' · ')}${err}</div>
        <div class="line3"><span class="steps" data-k="steps"></span><span class="stats num" data-k="stats"></span></div>
        <div class="bar"><i data-k="fill"></i></div>
      </div>
      <div class="status ${a.status}" data-k="status"></div>`
  }

  function patchRun(el, a) {
    const color = colorOf(a.type)
    const sig = [a.type, a.effort, a.status, a.model, a.round, a.background, a.failure].join('|')
    if (el.dataset.sig !== sig) {
      el.dataset.sig = sig
      el.className = `row ${a.status}`
      el.innerHTML = runRowHtml(a)
      el.querySelector('[data-k=mascot]').innerHTML = mascotSvg(a.mascot, 88, 74)
      el.querySelector('[data-k=status]').innerHTML = statusHtml(a.status, color)
    }
    el.querySelector('[data-k=name]').textContent = a.description || a.type
    el.querySelector('[data-k=name]').title = a.description || a.type
    const st = a.step && a.step.total ? `${a.step.done}/${a.step.total}${a.step.note ? ' · ' + a.step.note : ''}` : ''
    el.querySelector('[data-k=steps]').textContent = st
    el.querySelector('[data-k=stats]').textContent =
      `ctx ${ctxPct(a)}% · ${fmtTokens(a.contextTokens)}  ≈${fmtCost(a.costUsd)}  ${fmtTime(elapsed(a))}`
    // The worker's own steps when it reports them; otherwise its context fill, in grey.
    const progress = a.status === 'done' ? 1 : a.step && a.step.total ? Math.min(1, a.step.done / a.step.total) : null
    const fill = el.querySelector('[data-k=fill]')
    fill.style.width = `${Math.round((progress ?? ctxPct(a) / 100) * 100)}%`
    fill.style.background = progress === null ? 'var(--faint)' : a.status === 'failed' ? 'var(--bad)' : color
  }

  function plannedRowHtml(p) {
    const meta = [p.agent, p.model ? modelLabel(p.model) : '', p.effort, p.after.length ? `${STR.after} ${p.after.join(', ')}` : '']
      .filter(Boolean)
      .map(esc)
      .join(' · ')
    return `
      <div class="mascot" style="opacity:.4">${mascotSvg(p.mascot, 88, 74)}</div>
      <div style="min-width:0">
        <div class="name">${p.n}. ${esc(p.title)}</div>
        <div class="meta">${meta || '&nbsp;'}</div>
      </div>
      <div class="status">${statusHtml('planned')}</div>`
  }

  /** Keeps `container`'s children in the order of `items`, reusing nodes by key. */
  function reconcile(container, items, keyOf, create, patch) {
    const existing = new Map([...container.children].map(el => [el.dataset.key, el]))
    let prev = null
    for (const item of items) {
      const key = keyOf(item)
      let el = existing.get(key)
      if (el) existing.delete(key)
      else {
        el = create(item)
        el.dataset.key = key
      }
      patch(el, item)
      const want = prev ? prev.nextSibling : container.firstChild
      if (el !== want) container.insertBefore(el, want)
      prev = el
    }
    for (const el of existing.values()) el.remove()
  }

  const newRow = () => document.createElement('div')

  function renderJob() {
    const job = $('#job')
    const f = snap.flow
    job.hidden = !f
    if (!f) return
    job.classList.toggle('done', f.finished)
    $('#job-title').textContent = f.title
    $('#job-title').title = f.title
    const label = f.finished
      ? STR.phase.close
      : f.shownPhase === 'plan' || f.shownPhase === 'design'
        ? STR.phase[f.shownPhase]
        : `${f.shownPhase === 'review' ? STR.phase.review : STR.phase.delegate} ${f.total ? `${f.done}/${f.total}` : `${f.running} ${STR.busy}`}`
    $('#job-pill').textContent = label
    $('#job-pct').textContent = Math.round(f.ratio * 100) + '%'
    $('#crew').textContent = '×' + (snap.agents.length + snap.planned.length)
    const segs = $('#segs')
    const list = f.segments.length ? f.segments : ['todo']
    segs.classList.toggle('indeterminate', !f.segments.length && f.running > 0)
    if (segs.children.length !== list.length) segs.innerHTML = list.map(() => '<span class="seg"></span>').join('')
    list.forEach((s, i) => (segs.children[i].className = 'seg ' + s))
  }

  function renderAgents() {
    const running = snap.agents.filter(a => a.status === 'running').reverse()
    const finished = snap.agents.filter(a => a.status !== 'running').reverse()
    const planned = snap.planned
    const title = snap.flow && !snap.flow.finished ? snap.flow.title : ''
    $('#agents-title').textContent = title
    $('#agents-title').hidden = !title

    $('#t-cost').textContent = '≈' + fmtCost(snap.totals.costUsd)
    $('#t-tokens').textContent = fmtTokens(snap.totals.tokens)
    $('#t-time').textContent = fmtTime(totalTime())
    $('#compact-toggle').textContent = ui.compact ? STR.expand : STR.collapse

    const isEmpty = !snap.agents.length && !planned.length
    $('#empty').hidden = !isEmpty
    $('#empty').textContent = snap.session ? STR.empty : STR.waiting
    $('#full').hidden = ui.compact
    $('#compact').hidden = !ui.compact || isEmpty

    if (ui.compact) {
      const icons = [
        ...running.map(a => ({ k: a.id, mascot: a.mascot, dim: false })),
        ...finished.map(a => ({ k: a.id, mascot: a.mascot, dim: false })),
        ...planned.map(p => ({ k: 'p' + p.n, mascot: p.mascot, dim: true })),
      ]
      const max = Math.max(1, Math.floor(($('#compact').clientWidth || 600) / 66) - 1)
      const shown = icons.slice(0, max)
      // Rebuild only when the strip changes, so walking mascots keep their stride.
      const sig = JSON.stringify([shown, icons.length])
      if ($('#compact').dataset.sig === sig) return
      $('#compact').dataset.sig = sig
      $('#compact').innerHTML =
        shown.map(i => `<span class="mini${i.dim ? ' dim' : ''}" title="">${mascotSvg(i.mascot, 60, 51)}</span>`).join('') +
        (icons.length > shown.length ? `<span class="more">+${icons.length - shown.length}</span>` : '')
      return
    }

    $('#h-running').hidden = !running.length
    $('#h-running').textContent = `${STR.running} · ${running.length}`
    reconcile($('#running'), running, a => a.id, newRow, patchRun)

    $('#h-finished').hidden = !finished.length
    $('#finished-toggle').textContent = `${ui.finishedOpen ? '▾' : '▸'} ${STR.finished} · ${finished.length}`
    $('#finished-toggle').setAttribute('aria-expanded', String(ui.finishedOpen))
    $('#finished').hidden = !ui.finishedOpen
    reconcile($('#finished'), ui.finishedOpen ? finished : [], a => a.id, newRow, patchRun)

    $('#h-planned').hidden = !planned.length
    $('#h-planned').textContent = `${STR.planned} · ${planned.length}`
    reconcile(
      $('#planned'),
      planned,
      p => 'p' + p.n + ':' + p.title,
      newRow,
      (el, p) => {
        const sig = JSON.stringify(p)
        if (el.dataset.sig === sig) return
        el.dataset.sig = sig
        el.className = 'row planned'
        el.innerHTML = plannedRowHtml(p)
      },
    )
  }

  // ------------------------------------------------------------------ limits
  // Plan percentages come from Claude Code's status line; the totals under
  // each meter are counted from local transcripts for the same window.

  function renderLimitWindow(el, w, opts) {
    const pct = w.usedPct
    const level = pct === null ? 'none' : pct >= 90 ? 'bad' : pct >= 70 ? 'warn' : 'ok'
    el.dataset.level = level
    el.querySelector('[data-k=pct]').textContent = pct === null ? '—' : Math.round(pct) + '%'
    el.querySelector('[data-k=fill]').style.width = (pct === null ? 0 : Math.min(100, pct)) + '%'
    const meter = el.querySelector('[data-k=meter]')
    if (pct === null) meter.removeAttribute('aria-valuenow')
    else meter.setAttribute('aria-valuenow', String(Math.round(pct)))
    el.querySelector('[data-k=reset]').textContent =
      pct === null
        ? opts.rolling
        : w.resetsAt
          ? `${STR.resetsIn} ${fmtDur(w.resetsAt - now())} · ${clockAt(w.resetsAt, opts.withDay)}`
          : STR.startsNext
    el.querySelector('[data-k=local]').textContent =
      `≈${fmtCost(w.costUsd)} · ${fmtTokens(w.tokens)} ${STR.tokensWord} · ${w.requests} ${STR.requests}`
  }

  function renderLimits() {
    const l = snap && snap.limits
    $('#limits').hidden = !l
    if (!l) return
    $('#limits-body').hidden = !ui.limitsOpen
    $('#limits-toggle').textContent = ui.limitsOpen ? STR.collapse : STR.expand
    $('#limits-toggle').setAttribute('aria-expanded', String(ui.limitsOpen))
    const age = l.reportedAt === null ? null : now() - l.reportedAt
    $('#l-updated').textContent = age === null ? '' : age < 60000 ? `${STR.updated} ${STR.justNow}` : `${STR.updated} ${fmtDur(age)} ${STR.ago}`
    $('#l-hint').hidden = l.reportedAt !== null
    renderLimitWindow($('#l-5h'), l.fiveHour, { withDay: false, rolling: STR.lastHours })
    renderLimitWindow($('#l-7d'), l.sevenDay, { withDay: true, rolling: STR.lastDays })
  }

  function render() {
    if (!snap) return
    renderLimits()
    renderJob()
    renderAgents()
    const s = snap.session
    $('#session').textContent = s ? `session ${s.id.slice(0, 8)}` : ''
    $('#session').title = s ? s.transcript : ''
    const live = snap.totals.running
    document.title = (live ? `(${live}) ` : '') + (snap.flow ? snap.flow.title + ' · ' : '') + 'Luff Crew'
  }

  // ---------------------------------------------------------------- controls

  function applyTheme() {
    if (ui.theme === 'auto') document.documentElement.removeAttribute('data-theme')
    else document.documentElement.setAttribute('data-theme', ui.theme)
    $('#theme').title = `${STR.theme}: ${ui.theme}`
  }

  $('#theme').addEventListener('click', () => {
    ui.theme = { auto: 'light', light: 'dark', dark: 'auto' }[ui.theme] || 'auto'
    store.set('theme', ui.theme)
    applyTheme()
  })
  $('#compact-toggle').addEventListener('click', () => {
    ui.compact = !ui.compact
    store.set('compact', ui.compact)
    render()
  })
  $('#finished-toggle').addEventListener('click', () => {
    ui.finishedOpen = !ui.finishedOpen
    store.set('finishedOpen', ui.finishedOpen)
    render()
  })
  $('#limits-toggle').addEventListener('click', () => {
    ui.limitsOpen = !ui.limitsOpen
    store.set('limitsOpen', ui.limitsOpen)
    renderLimits()
  })
  $('#crew').addEventListener('click', () => {
    if (ui.compact) {
      ui.compact = false
      store.set('compact', false)
      render()
    }
    $('#agents').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
  $('#dismiss').addEventListener('click', () => {
    fetch('/api/dismiss', { method: 'POST', headers: { 'x-luff-crew': '1' } }).catch(() => {})
    $('#job').hidden = true
  })

  // -------------------------------------------------------------- live feed

  function onSnapshot(data) {
    snap = data
    clockOffset = snap.now - Date.now()
    render()
  }

  function connect() {
    const es = new EventSource('/events')
    es.addEventListener('snapshot', e => {
      $('#conn').classList.remove('off')
      $('#conn-text').textContent = STR.live
      onSnapshot(JSON.parse(e.data))
    })
    es.onerror = () => {
      $('#conn').classList.add('off')
      $('#conn-text').textContent = STR.reconnecting
    }
  }

  // Clocks of running agents tick locally between server updates.
  setInterval(() => {
    if (snap && snap.totals.running) render()
  }, 1000)
  // Reset countdowns move even when the crew is idle.
  setInterval(renderLimits, 15000)

  applyTheme()
  document.documentElement.lang = boot.lang
  connect()
})()
