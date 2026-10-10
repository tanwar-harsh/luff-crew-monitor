#!/usr/bin/env node
import { createRequire as __luffCreateRequire } from 'node:module';
const require = __luffCreateRequire(import.meta.url);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// <define:__LUFF_CREW_ASSETS__>
var define_LUFF_CREW_ASSETS_default, init_define_LUFF_CREW_ASSETS = __esm({
  "<define:__LUFF_CREW_ASSETS__>"() {
    define_LUFF_CREW_ASSETS_default = { css: `:root {
  --bg: #f6f4ef;
  --card: #ffffff;
  --tile: #f3f1ec;
  --line: #e7e4dd;
  --text: #1d1c1a;
  --muted: #6c6a64;
  --faint: #9c9a93;
  --track: #ebe8e1;
  --accent: #5b6cf0;
  --ok: #2f9e66;
  --bad: #d0453f;
  --warn: #c98a12;
  --shadow: 0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.05);
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) {
    --bg: #141413;
    --card: #1c1c1b;
    --tile: #252524;
    --line: #2e2e2c;
    --text: #ecebe7;
    --muted: #a7a59f;
    --faint: #75736e;
    --track: #2c2c2a;
    --accent: #8c97ff;
    --ok: #4cc38a;
    --bad: #f0645d;
    --warn: #e5a93b;
    --shadow: none;
    color-scheme: dark;
  }
}
:root[data-theme='dark'] {
  --bg: #141413;
  --card: #1c1c1b;
  --tile: #252524;
  --line: #2e2e2c;
  --text: #ecebe7;
  --muted: #a7a59f;
  --faint: #75736e;
  --track: #2c2c2a;
  --accent: #8c97ff;
  --ok: #4cc38a;
  --bad: #f0645d;
  --warn: #e5a93b;
  --shadow: none;
  color-scheme: dark;
}

* { box-sizing: border-box; }
[hidden] { display: none !important; }
html, body { margin: 0; }
body {
  background: var(--bg);
  color: var(--text);
  font: 14px/1.45 ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.num { font-variant-numeric: tabular-nums; }
button {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
}
button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; border-radius: 6px; }

.wrap { max-width: 780px; margin: 0 auto; padding: 20px 16px 48px; }

/* top line */
.top { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.brand { font-weight: 700; letter-spacing: -0.01em; display: flex; align-items: center; gap: 8px; }
.brand svg { display: block; }
.top .spacer { flex: 1; }
.conn { font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 6px; }
.conn i { width: 7px; height: 7px; border-radius: 50%; background: var(--ok); display: inline-block; }
.conn.off i { background: var(--warn); }
.icon-btn { width: 30px; height: 30px; border-radius: 8px; display: grid; place-items: center; color: var(--muted); }
.icon-btn:hover { background: var(--tile); color: var(--text); }

.card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; box-shadow: var(--shadow); }

/* job bar */
.job { padding: 12px 14px; display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
.job[hidden] { display: none; }
.job .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); flex: none; }
.job.done .dot { background: var(--ok); }
.job .title { font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 32%; }
.segs { flex: 1; display: flex; gap: 3px; height: 12px; min-width: 60px; }
.seg { flex: 1; border-radius: 3px; background: var(--track); position: relative; overflow: hidden; }
.seg.done { background: var(--accent); }
.job.done .seg.done { background: var(--ok); }
.seg.running {
  background: repeating-linear-gradient(-45deg, var(--accent) 0 4px, color-mix(in srgb, var(--accent) 45%, transparent) 4px 8px);
  background-size: 11.3px 11.3px;
  animation: march 0.8s linear infinite;
}
.segs.indeterminate .seg { background: linear-gradient(90deg, var(--track), color-mix(in srgb, var(--accent) 35%, var(--track)), var(--track)); background-size: 200% 100%; animation: shimmer 1.6s ease-in-out infinite; }
@keyframes march { to { background-position: 11.3px 0; } }
@keyframes shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }
.pill { font-size: 12px; font-weight: 600; color: #fff; background: var(--accent); border-radius: 999px; padding: 2px 9px; white-space: nowrap; }
.job.done .pill { background: var(--ok); }
.pct { color: var(--muted); font-size: 13px; min-width: 3ch; text-align: right; }
.crew-btn { font-size: 13px; color: var(--muted); padding: 3px 7px; border-radius: 7px; }
.crew-btn:hover { background: var(--tile); color: var(--text); }

/* agents card */
.agents { padding: 16px; }
.agents h1 { font-size: 15px; margin: 0 0 10px; font-weight: 650; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.tile { background: var(--tile); border-radius: 10px; padding: 8px 11px; }
.tile .k { font-size: 11.5px; color: var(--muted); }
.tile .v { font-size: 17px; font-weight: 650; margin-top: 1px; }
.bar-row { display: flex; align-items: center; justify-content: space-between; margin: 12px 0 2px; }
.link { color: var(--muted); font-size: 13px; padding: 4px 6px; margin-left: -6px; border-radius: 7px; }
.link:hover { color: var(--text); background: var(--tile); }
.section-h { color: var(--faint); font-size: 13px; margin: 14px 0 2px; display: flex; align-items: center; gap: 6px; }
.section-h button { color: inherit; }
.section-h button:hover { color: var(--text); }
.empty { color: var(--muted); padding: 22px 4px 8px; text-align: center; }

.row { display: grid; grid-template-columns: 44px 1fr 16px; gap: 10px; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--line); }
.row:last-child { border-bottom: 0; }
.row .mascot { width: 44px; height: 40px; }
.row .name { font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.row .meta { font-size: 12px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.row .meta .type { font-weight: 600; }
.row .meta .err { color: var(--bad); }
.row .line3 { display: flex; justify-content: space-between; gap: 12px; font-size: 11.5px; margin-top: 3px; }
.row .steps { color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }
.row .stats { color: var(--muted); white-space: nowrap; }
.row .bar { height: 4px; border-radius: 2px; background: var(--track); margin-top: 5px; overflow: hidden; }
.row .bar > i { display: block; height: 100%; border-radius: 2px; background: var(--faint); transition: width 0.5s ease; }
.row.planned .name { color: var(--muted); }
.row.failed .mascot { filter: grayscale(1); opacity: 0.6; }
.status { width: 16px; height: 16px; justify-self: end; align-self: start; margin-top: 3px; }
.status.running i { display: block; width: 8px; height: 8px; margin: 4px; border-radius: 50%; animation: pulse 1.6s ease-in-out infinite; }
@keyframes pulse { 50% { opacity: 0.3; } }

.compact { display: flex; align-items: center; gap: 4px; padding: 8px 0 2px; flex-wrap: wrap; }
.compact .mini { width: 34px; height: 31px; position: relative; }
.compact .mini.dim { opacity: 0.4; }
.compact .more { color: var(--muted); font-size: 13px; margin-left: 4px; }

footer { margin-top: 14px; color: var(--faint); font-size: 12px; display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
footer code { font-size: 11.5px; }

/* mascots: pure CSS motion, compositor only */
.m g { transform-box: fill-box; }
.m.run .la { animation: hop 0.5s steps(1) infinite; }
.m.run .lb { animation: hop 0.5s steps(1) infinite -0.25s; }
.m.run .bd { animation: bob 0.5s steps(1) infinite -0.125s; }
.m.e-low.run .la, .m.e-low.run .lb { animation-duration: 0.25s; }
.m.e-low.run .prop { transform-origin: 50% 0; animation: swish 0.5s ease-in-out infinite; }
.m.e-medium.run .prop { transform-origin: 50% 30%; animation: row 1s ease-in-out infinite; }
.m.e-high.run .prop { animation: scan 1s steps(1) infinite; }
.m.e-xhigh.run .flame { animation: flicker 0.3s steps(1) infinite; }
.m.e-max.run .prop { transform-origin: center; animation: spin 2s linear infinite; }
@keyframes hop { 50% { transform: translateY(-1px); } }
@keyframes bob { 50% { transform: translateY(1px); } }
@keyframes swish { 50% { transform: rotate(14deg); } }
@keyframes row { 50% { transform: rotate(-22deg); } }
@keyframes scan { 33% { transform: translate(1px, -1px); } 66% { transform: translate(0, -2px); } }
@keyframes flicker { 50% { opacity: 0.35; } }
@keyframes spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .m.run *, .seg.running, .segs.indeterminate .seg, .status.running i { animation: none !important; }
}
@media (max-width: 560px) {
  .job { flex-wrap: wrap; }
  .job .title { max-width: none; flex: 1 1 60%; }
  .segs { order: 5; flex-basis: 100%; }
  .tile .v { font-size: 15px; }
  .row .line3 { flex-direction: column; gap: 0; }
}
`, js: `// Dashboard client: follows /events and keeps the page in sync with the crew.
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
    return h ? \`\${h}:\${String(m).padStart(2, '0')}:\${ss}\` : \`\${m}:\${ss}\`
  }
  const modelLabel = id => {
    if (!id) return '\u2014'
    const m = /(fable|mythos|opus|sonnet|haiku)-(\\d+)(?:-(\\d{1,2})(?!\\d))?/i.exec(id)
    if (!m) {
      const bare = id.replace(/^claude-/, '').replace(/\\[.*\\]$/, '')
      return /^(fable|mythos|opus|sonnet|haiku)$/i.test(bare) ? bare[0].toUpperCase() + bare.slice(1).toLowerCase() : bare || '\u2014'
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
  // A small round deckhand of the crew. Body color follows the agent type,
  // the gear follows effort: mop (low), oar (medium), spyglass (high),
  // lantern (xhigh), ship's wheel (max).

  const PALETTE = ['#E07A5F', '#3D9DD9', '#2BB3A0', '#9B7BE0', '#E0A83D', '#D96BA0', '#5FAF4F']
  const KNOWN = { 'general-purpose': 0, Explore: 2, Plan: 3, 'statusline-setup': 4 }
  const colorOf = type => {
    const bare = String(type || '').replace(/^[^:]*:/, '')
    if (bare in KNOWN) return PALETTE[KNOWN[bare]]
    let h = 0
    for (const ch of bare) h = (h * 31 + ch.charCodeAt(0)) >>> 0
    return PALETTE[h % PALETTE.length]
  }
  const INK = '#22201d'
  const WOOD = '#A87B4F'
  const GOLD = '#E8B931'

  const GEAR = {
    low: r => {
      r(6, 9, 12, 2, '#E5484D')
      r(18, 9, 2, 1, '#E5484D')
      r(19, 10, 2, 1, '#B83236')
      r(21, 4, 1, 13, WOOD, 'prop')
      r(19, 17, 5, 2, '#CFCFCB', 'prop')
      r(19, 19, 1, 1, '#CFCFCB', 'prop')
      r(21, 19, 1, 1, '#CFCFCB', 'prop')
      r(23, 19, 1, 1, '#CFCFCB', 'prop')
    },
    medium: r => {
      r(7, 6, 10, 3, '#F4F4F1')
      r(7, 8, 10, 1, '#2B3A67')
      r(11, 5, 2, 1, '#E5484D')
      r(21, 3, 1, 13, WOOD, 'prop')
      r(20, 15, 3, 4, '#8A6038', 'prop')
    },
    high: r => {
      r(7, 6, 10, 2, '#2E2A27')
      r(5, 8, 14, 1, INK)
      r(11, 6, 2, 1, GOLD)
      r(19, 11, 5, 2, '#C9A227', 'prop')
      r(19, 11, 1, 2, '#8C6F12', 'prop')
      r(23, 11, 1, 2, '#9BD3F5', 'prop')
    },
    xhigh: r => {
      r(7, 7, 10, 3, '#C0392B')
      r(7, 9, 10, 1, '#962D22')
      r(11, 6, 2, 1, '#F4F4F1')
      r(21, 7, 1, 2, INK)
      r(20, 9, 3, 1, INK)
      r(20, 10, 3, 4, GOLD)
      r(20, 14, 3, 1, INK)
      r(21, 11, 1, 2, '#FF8A3D', 'flame')
    },
    max: r => {
      r(6, 5, 12, 3, '#1F2A4A')
      r(5, 8, 14, 1, INK)
      r(11, 6, 2, 1, GOLD)
      // ship's wheel, rotating around its hub
      r(20, 11, 3, 1, WOOD, 'prop')
      r(20, 17, 3, 1, WOOD, 'prop')
      r(18, 13, 1, 3, WOOD, 'prop')
      r(24, 13, 1, 3, WOOD, 'prop')
      r(19, 12, 1, 1, WOOD, 'prop')
      r(23, 12, 1, 1, WOOD, 'prop')
      r(19, 16, 1, 1, WOOD, 'prop')
      r(23, 16, 1, 1, WOOD, 'prop')
      r(21, 10, 1, 9, '#8A6038', 'prop')
      r(17, 14, 9, 1, '#8A6038', 'prop')
      r(21, 14, 1, 1, GOLD, 'prop')
    },
  }

  const mascotSvg = (type, effort, running, w, h) => {
    const groups = { bd: [], la: [], lb: [], prop: [], flame: [] }
    const r = (x, y, ww, hh, fill, g = 'bd') => groups[g].push(\`<rect x="\${x}" y="\${y}" width="\${ww}" height="\${hh}" fill="\${fill}"/>\`)
    const body = colorOf(type)
    r(7, 9, 10, 1, body)
    r(6, 10, 12, 1, body)
    r(5, 11, 14, 6, body)
    r(6, 17, 12, 1, body)
    r(3, 13, 2, 3, body)
    r(19, 13, 2, 3, body)
    r(8, 12, 2, 2, INK)
    r(14, 12, 2, 2, INK)
    r(8, 12, 1, 1, '#fff')
    r(14, 12, 1, 1, '#fff')
    r(11, 15, 2, 1, INK)
    r(6, 15, 2, 1, 'rgba(255,120,140,.45)')
    r(16, 15, 2, 1, 'rgba(255,120,140,.45)')
    r(6, 18, 2, 3, body, 'la')
    r(12, 18, 2, 3, body, 'la')
    r(9, 18, 2, 3, body, 'lb')
    r(15, 18, 2, 3, body, 'lb')
    const gear = GEAR[effort]
    if (gear) gear(r)
    const g = name => (groups[name].length ? \`<g class="\${name}">\${groups[name].join('')}</g>\` : '')
    const cls = \`m e-\${gear ? effort : 'none'}\${running ? ' run' : ''}\`
    return \`<svg class="\${cls}" viewBox="0 0 26 22" width="\${w}" height="\${h}" shape-rendering="crispEdges" aria-hidden="true"><g class="bd">\${groups.bd.join('')}\${g('prop')}\${g('flame')}</g>\${g('la')}\${g('lb')}</svg>\`
  }

  // ------------------------------------------------------------------- views

  const statusHtml = (status, color) => {
    if (status === 'running') return \`<i style="background:\${color}"></i>\`
    if (status === 'done')
      return '<svg viewBox="0 0 16 16" width="16" height="16"><path d="M3.5 8.5l3 3 6-6.5" fill="none" stroke="var(--ok)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    if (status === 'failed')
      return '<svg viewBox="0 0 16 16" width="16" height="16"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7" stroke="var(--bad)" stroke-width="1.8" stroke-linecap="round"/></svg>'
    return '<svg viewBox="0 0 16 16" width="16" height="16"><circle cx="8" cy="8" r="5.5" fill="none" stroke="var(--faint)" stroke-width="1.4"/><path d="M8 5.2v3l2 1.3" fill="none" stroke="var(--faint)" stroke-width="1.4" stroke-linecap="round"/></svg>'
  }

  const failureText = a => STR[a.failure] || STR.error

  function runRowHtml(a) {
    const color = colorOf(a.type)
    const meta = [a.effort ? \`\${esc(modelLabel(a.model))} \xB7 \${esc(a.effort)}\` : esc(modelLabel(a.model))]
    if (a.round > 1) meta.push(\`\${esc(STR.round)} \${a.round}\`)
    if (a.background) meta.push(esc(STR.background))
    if (a.depth > 1) meta.push('\u21B3'.repeat(a.depth - 1))
    const err = a.status === 'failed' ? \` \xB7 <span class="err">\${esc(failureText(a))}</span>\` : ''
    return \`
      <div class="mascot" data-k="mascot"></div>
      <div style="min-width:0">
        <div class="name" data-k="name"></div>
        <div class="meta"><span class="type" style="color:\${color}">\${esc(a.type)}</span> \xB7 \${meta.join(' \xB7 ')}\${err}</div>
        <div class="line3"><span class="steps" data-k="steps"></span><span class="stats num" data-k="stats"></span></div>
        <div class="bar"><i data-k="fill"></i></div>
      </div>
      <div class="status \${a.status}" data-k="status"></div>\`
  }

  function patchRun(el, a) {
    const color = colorOf(a.type)
    const sig = [a.type, a.effort, a.status, a.model, a.round, a.background, a.failure].join('|')
    if (el.dataset.sig !== sig) {
      el.dataset.sig = sig
      el.className = \`row \${a.status}\`
      el.innerHTML = runRowHtml(a)
      el.querySelector('[data-k=mascot]').innerHTML = mascotSvg(a.type, a.effort, a.status === 'running', 44, 37)
      el.querySelector('[data-k=status]').innerHTML = statusHtml(a.status, color)
    }
    el.querySelector('[data-k=name]').textContent = a.description || a.type
    el.querySelector('[data-k=name]').title = a.description || a.type
    const st = a.step && a.step.total ? \`\${a.step.done}/\${a.step.total}\${a.step.note ? ' \xB7 ' + a.step.note : ''}\` : ''
    el.querySelector('[data-k=steps]').textContent = st
    el.querySelector('[data-k=stats]').textContent =
      \`ctx \${ctxPct(a)}% \xB7 \${fmtTokens(a.contextTokens)}  \u2248\${fmtCost(a.costUsd)}  \${fmtTime(elapsed(a))}\`
    // The worker's own steps when it reports them; otherwise its context fill, in grey.
    const progress = a.status === 'done' ? 1 : a.step && a.step.total ? Math.min(1, a.step.done / a.step.total) : null
    const fill = el.querySelector('[data-k=fill]')
    fill.style.width = \`\${Math.round((progress ?? ctxPct(a) / 100) * 100)}%\`
    fill.style.background = progress === null ? 'var(--faint)' : a.status === 'failed' ? 'var(--bad)' : color
  }

  function plannedRowHtml(p) {
    const meta = [p.agent, p.model ? modelLabel(p.model) : '', p.effort, p.after.length ? \`\${STR.after} \${p.after.join(', ')}\` : '']
      .filter(Boolean)
      .map(esc)
      .join(' \xB7 ')
    return \`
      <div class="mascot" style="opacity:.4">\${mascotSvg(p.agent || 'planned', p.effort, false, 44, 37)}</div>
      <div style="min-width:0">
        <div class="name">\${p.n}. \${esc(p.title)}</div>
        <div class="meta">\${meta || '&nbsp;'}</div>
      </div>
      <div class="status">\${statusHtml('planned')}</div>\`
  }

  /** Keeps \`container\`'s children in the order of \`items\`, reusing nodes by key. */
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
        : \`\${f.shownPhase === 'review' ? STR.phase.review : STR.phase.delegate} \${f.total ? \`\${f.done}/\${f.total}\` : \`\${f.running} \${STR.busy}\`}\`
    $('#job-pill').textContent = label
    $('#job-pct').textContent = Math.round(f.ratio * 100) + '%'
    $('#crew').textContent = '\xD7' + (snap.agents.length + snap.planned.length)
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

    $('#t-cost').textContent = '\u2248' + fmtCost(snap.totals.costUsd)
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
        ...running.map(a => ({ k: a.id, type: a.type, effort: a.effort, run: true, dim: false })),
        ...finished.map(a => ({ k: a.id, type: a.type, effort: a.effort, run: false, dim: false })),
        ...planned.map(p => ({ k: 'p' + p.n, type: p.agent || 'planned', effort: p.effort, run: false, dim: true })),
      ]
      const max = Math.max(1, Math.floor(($('#compact').clientWidth || 600) / 38) - 1)
      const shown = icons.slice(0, max)
      // Rebuild only when the strip changes, so walking mascots keep their stride.
      const sig = JSON.stringify([shown, icons.length])
      if ($('#compact').dataset.sig === sig) return
      $('#compact').dataset.sig = sig
      $('#compact').innerHTML =
        shown.map(i => \`<span class="mini\${i.dim ? ' dim' : ''}" title="">\${mascotSvg(i.type, i.effort, i.run, 34, 29)}</span>\`).join('') +
        (icons.length > shown.length ? \`<span class="more">+\${icons.length - shown.length}</span>\` : '')
      return
    }

    $('#h-running').hidden = !running.length
    $('#h-running').textContent = \`\${STR.running} \xB7 \${running.length}\`
    reconcile($('#running'), running, a => a.id, newRow, patchRun)

    $('#h-finished').hidden = !finished.length
    $('#finished-toggle').textContent = \`\${ui.finishedOpen ? '\u25BE' : '\u25B8'} \${STR.finished} \xB7 \${finished.length}\`
    $('#finished-toggle').setAttribute('aria-expanded', String(ui.finishedOpen))
    $('#finished').hidden = !ui.finishedOpen
    reconcile($('#finished'), ui.finishedOpen ? finished : [], a => a.id, newRow, patchRun)

    $('#h-planned').hidden = !planned.length
    $('#h-planned').textContent = \`\${STR.planned} \xB7 \${planned.length}\`
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

  function render() {
    if (!snap) return
    renderJob()
    renderAgents()
    const s = snap.session
    $('#session').textContent = s ? \`session \${s.id.slice(0, 8)}\` : ''
    $('#session').title = s ? s.transcript : ''
    const live = snap.totals.running
    document.title = (live ? \`(\${live}) \` : '') + (snap.flow ? snap.flow.title + ' \xB7 ' : '') + 'Luff Crew'
  }

  // ---------------------------------------------------------------- controls

  function applyTheme() {
    if (ui.theme === 'auto') document.documentElement.removeAttribute('data-theme')
    else document.documentElement.setAttribute('data-theme', ui.theme)
    $('#theme').title = \`\${STR.theme}: \${ui.theme}\`
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

  applyTheme()
  document.documentElement.lang = boot.lang
  connect()
})()
` };
  }
});

// node_modules/ajv/dist/compile/codegen/code.js
var require_code = __commonJS({
  "node_modules/ajv/dist/compile/codegen/code.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
    var _CodeOrName = class {
    };
    exports._CodeOrName = _CodeOrName;
    exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var Name = class extends _CodeOrName {
      constructor(s) {
        if (super(), !exports.IDENTIFIER.test(s))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = s;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    exports.Name = Name;
    var _Code = class extends _CodeOrName {
      constructor(code) {
        super(), this._items = typeof code == "string" ? [code] : code;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        let item = this._items[0];
        return item === "" || item === '""';
      }
      get str() {
        var _a3;
        return (_a3 = this._str) !== null && _a3 !== void 0 ? _a3 : this._str = this._items.reduce((s, c) => `${s}${c}`, "");
      }
      get names() {
        var _a3;
        return (_a3 = this._names) !== null && _a3 !== void 0 ? _a3 : this._names = this._items.reduce((names, c) => (c instanceof Name && (names[c.str] = (names[c.str] || 0) + 1), names), {});
      }
    };
    exports._Code = _Code;
    exports.nil = new _Code("");
    function _(strs, ...args) {
      let code = [strs[0]], i = 0;
      for (; i < args.length; )
        addCodeArg(code, args[i]), code.push(strs[++i]);
      return new _Code(code);
    }
    exports._ = _;
    var plus = new _Code("+");
    function str(strs, ...args) {
      let expr = [safeStringify(strs[0])], i = 0;
      for (; i < args.length; )
        expr.push(plus), addCodeArg(expr, args[i]), expr.push(plus, safeStringify(strs[++i]));
      return optimize(expr), new _Code(expr);
    }
    exports.str = str;
    function addCodeArg(code, arg) {
      arg instanceof _Code ? code.push(...arg._items) : arg instanceof Name ? code.push(arg) : code.push(interpolate(arg));
    }
    exports.addCodeArg = addCodeArg;
    function optimize(expr) {
      let i = 1;
      for (; i < expr.length - 1; ) {
        if (expr[i] === plus) {
          let res = mergeExprItems(expr[i - 1], expr[i + 1]);
          if (res !== void 0) {
            expr.splice(i - 1, 3, res);
            continue;
          }
          expr[i++] = "+";
        }
        i++;
      }
    }
    function mergeExprItems(a, b) {
      if (b === '""')
        return a;
      if (a === '""')
        return b;
      if (typeof a == "string")
        return b instanceof Name || a[a.length - 1] !== '"' ? void 0 : typeof b != "string" ? `${a.slice(0, -1)}${b}"` : b[0] === '"' ? a.slice(0, -1) + b.slice(1) : void 0;
      if (typeof b == "string" && b[0] === '"' && !(a instanceof Name))
        return `"${a}${b.slice(1)}`;
    }
    function strConcat(c1, c2) {
      return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`;
    }
    exports.strConcat = strConcat;
    function interpolate(x) {
      return typeof x == "number" || typeof x == "boolean" || x === null ? x : safeStringify(Array.isArray(x) ? x.join(",") : x);
    }
    function stringify(x) {
      return new _Code(safeStringify(x));
    }
    exports.stringify = stringify;
    function safeStringify(x) {
      return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    exports.safeStringify = safeStringify;
    function getProperty(key) {
      return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _`[${key}]`;
    }
    exports.getProperty = getProperty;
    function getEsmExportName(key) {
      if (typeof key == "string" && exports.IDENTIFIER.test(key))
        return new _Code(`${key}`);
      throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
    }
    exports.getEsmExportName = getEsmExportName;
    function regexpCode(rx) {
      return new _Code(rx.toString());
    }
    exports.regexpCode = regexpCode;
  }
});

// node_modules/ajv/dist/compile/codegen/scope.js
var require_scope = __commonJS({
  "node_modules/ajv/dist/compile/codegen/scope.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
    var code_1 = require_code(), ValueError = class extends Error {
      constructor(name) {
        super(`CodeGen: "code" for ${name} not defined`), this.value = name.value;
      }
    }, UsedValueState;
    (function(UsedValueState2) {
      UsedValueState2[UsedValueState2.Started = 0] = "Started", UsedValueState2[UsedValueState2.Completed = 1] = "Completed";
    })(UsedValueState || (exports.UsedValueState = UsedValueState = {}));
    exports.varKinds = {
      const: new code_1.Name("const"),
      let: new code_1.Name("let"),
      var: new code_1.Name("var")
    };
    var Scope = class {
      constructor({ prefixes, parent } = {}) {
        this._names = {}, this._prefixes = prefixes, this._parent = parent;
      }
      toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
      }
      name(prefix) {
        return new code_1.Name(this._newName(prefix));
      }
      _newName(prefix) {
        let ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
      }
      _nameGroup(prefix) {
        var _a3, _b;
        if (!((_b = (_a3 = this._parent) === null || _a3 === void 0 ? void 0 : _a3._prefixes) === null || _b === void 0) && _b.has(prefix) || this._prefixes && !this._prefixes.has(prefix))
          throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        return this._names[prefix] = { prefix, index: 0 };
      }
    };
    exports.Scope = Scope;
    var ValueScopeName = class extends code_1.Name {
      constructor(prefix, nameStr) {
        super(nameStr), this.prefix = prefix;
      }
      setValue(value, { property, itemIndex }) {
        this.value = value, this.scopePath = (0, code_1._)`.${new code_1.Name(property)}[${itemIndex}]`;
      }
    };
    exports.ValueScopeName = ValueScopeName;
    var line = (0, code_1._)`\n`, ValueScope = class extends Scope {
      constructor(opts) {
        super(opts), this._values = {}, this._scope = opts.scope, this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
      }
      get() {
        return this._scope;
      }
      name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
      }
      value(nameOrPrefix, value) {
        var _a3;
        if (value.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        let name = this.toName(nameOrPrefix), { prefix } = name, valueKey = (_a3 = value.key) !== null && _a3 !== void 0 ? _a3 : value.ref, vs = this._values[prefix];
        if (vs) {
          let _name = vs.get(valueKey);
          if (_name)
            return _name;
        } else
          vs = this._values[prefix] = /* @__PURE__ */ new Map();
        vs.set(valueKey, name);
        let s = this._scope[prefix] || (this._scope[prefix] = []), itemIndex = s.length;
        return s[itemIndex] = value.ref, name.setValue(value, { property: prefix, itemIndex }), name;
      }
      getValue(prefix, keyOrRef) {
        let vs = this._values[prefix];
        if (vs)
          return vs.get(keyOrRef);
      }
      scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name) => {
          if (name.scopePath === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return (0, code_1._)`${scopeName}${name.scopePath}`;
        });
      }
      scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name) => {
          if (name.value === void 0)
            throw new Error(`CodeGen: name "${name}" has no value`);
          return name.value.code;
        }, usedValues, getCode);
      }
      _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for (let prefix in values) {
          let vs = values[prefix];
          if (!vs)
            continue;
          let nameSet = usedValues[prefix] = usedValues[prefix] || /* @__PURE__ */ new Map();
          vs.forEach((name) => {
            if (nameSet.has(name))
              return;
            nameSet.set(name, UsedValueState.Started);
            let c = valueCode(name);
            if (c) {
              let def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
              code = (0, code_1._)`${code}${def} ${name} = ${c};${this.opts._n}`;
            } else if (c = getCode?.(name))
              code = (0, code_1._)`${code}${c}${this.opts._n}`;
            else
              throw new ValueError(name);
            nameSet.set(name, UsedValueState.Completed);
          });
        }
        return code;
      }
    };
    exports.ValueScope = ValueScope;
  }
});

// node_modules/ajv/dist/compile/codegen/index.js
var require_codegen = __commonJS({
  "node_modules/ajv/dist/compile/codegen/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
    var code_1 = require_code(), scope_1 = require_scope(), code_2 = require_code();
    Object.defineProperty(exports, "_", { enumerable: !0, get: function() {
      return code_2._;
    } });
    Object.defineProperty(exports, "str", { enumerable: !0, get: function() {
      return code_2.str;
    } });
    Object.defineProperty(exports, "strConcat", { enumerable: !0, get: function() {
      return code_2.strConcat;
    } });
    Object.defineProperty(exports, "nil", { enumerable: !0, get: function() {
      return code_2.nil;
    } });
    Object.defineProperty(exports, "getProperty", { enumerable: !0, get: function() {
      return code_2.getProperty;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: !0, get: function() {
      return code_2.stringify;
    } });
    Object.defineProperty(exports, "regexpCode", { enumerable: !0, get: function() {
      return code_2.regexpCode;
    } });
    Object.defineProperty(exports, "Name", { enumerable: !0, get: function() {
      return code_2.Name;
    } });
    var scope_2 = require_scope();
    Object.defineProperty(exports, "Scope", { enumerable: !0, get: function() {
      return scope_2.Scope;
    } });
    Object.defineProperty(exports, "ValueScope", { enumerable: !0, get: function() {
      return scope_2.ValueScope;
    } });
    Object.defineProperty(exports, "ValueScopeName", { enumerable: !0, get: function() {
      return scope_2.ValueScopeName;
    } });
    Object.defineProperty(exports, "varKinds", { enumerable: !0, get: function() {
      return scope_2.varKinds;
    } });
    exports.operators = {
      GT: new code_1._Code(">"),
      GTE: new code_1._Code(">="),
      LT: new code_1._Code("<"),
      LTE: new code_1._Code("<="),
      EQ: new code_1._Code("==="),
      NEQ: new code_1._Code("!=="),
      NOT: new code_1._Code("!"),
      OR: new code_1._Code("||"),
      AND: new code_1._Code("&&"),
      ADD: new code_1._Code("+")
    };
    var Node = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(_names, _constants) {
        return this;
      }
    }, Def = class extends Node {
      constructor(varKind, name, rhs) {
        super(), this.varKind = varKind, this.name = name, this.rhs = rhs;
      }
      render({ es5, _n }) {
        let varKind = es5 ? scope_1.varKinds.var : this.varKind, rhs = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (names[this.name.str])
          return this.rhs && (this.rhs = optimizeExpr(this.rhs, names, constants)), this;
      }
      get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
      }
    }, Assign = class extends Node {
      constructor(lhs, rhs, sideEffects) {
        super(), this.lhs = lhs, this.rhs = rhs, this.sideEffects = sideEffects;
      }
      render({ _n }) {
        return `${this.lhs} = ${this.rhs};` + _n;
      }
      optimizeNames(names, constants) {
        if (!(this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects))
          return this.rhs = optimizeExpr(this.rhs, names, constants), this;
      }
      get names() {
        let names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
        return addExprNames(names, this.rhs);
      }
    }, AssignOp = class extends Assign {
      constructor(lhs, op, rhs, sideEffects) {
        super(lhs, rhs, sideEffects), this.op = op;
      }
      render({ _n }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
      }
    }, Label = class extends Node {
      constructor(label) {
        super(), this.label = label, this.names = {};
      }
      render({ _n }) {
        return `${this.label}:` + _n;
      }
    }, Break = class extends Node {
      constructor(label) {
        super(), this.label = label, this.names = {};
      }
      render({ _n }) {
        return `break${this.label ? ` ${this.label}` : ""};` + _n;
      }
    }, Throw = class extends Node {
      constructor(error2) {
        super(), this.error = error2;
      }
      render({ _n }) {
        return `throw ${this.error};` + _n;
      }
      get names() {
        return this.error.names;
      }
    }, AnyCode = class extends Node {
      constructor(code) {
        super(), this.code = code;
      }
      render({ _n }) {
        return `${this.code};` + _n;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(names, constants) {
        return this.code = optimizeExpr(this.code, names, constants), this;
      }
      get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
      }
    }, ParentNode = class extends Node {
      constructor(nodes = []) {
        super(), this.nodes = nodes;
      }
      render(opts) {
        return this.nodes.reduce((code, n) => code + n.render(opts), "");
      }
      optimizeNodes() {
        let { nodes } = this, i = nodes.length;
        for (; i--; ) {
          let n = nodes[i].optimizeNodes();
          Array.isArray(n) ? nodes.splice(i, 1, ...n) : n ? nodes[i] = n : nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : void 0;
      }
      optimizeNames(names, constants) {
        let { nodes } = this, i = nodes.length;
        for (; i--; ) {
          let n = nodes[i];
          n.optimizeNames(names, constants) || (subtractNames(names, n.names), nodes.splice(i, 1));
        }
        return nodes.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((names, n) => addNames(names, n.names), {});
      }
    }, BlockNode = class extends ParentNode {
      render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
      }
    }, Root = class extends ParentNode {
    }, Else = class extends BlockNode {
    };
    Else.kind = "else";
    var If = class _If extends BlockNode {
      constructor(condition, nodes) {
        super(nodes), this.condition = condition;
      }
      render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        return this.else && (code += "else " + this.else.render(opts)), code;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let cond = this.condition;
        if (cond === !0)
          return this.nodes;
        let e = this.else;
        if (e) {
          let ns = e.optimizeNodes();
          e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
        }
        if (e)
          return cond === !1 ? e instanceof _If ? e : e.nodes : this.nodes.length ? this : new _If(not(cond), e instanceof _If ? [e] : e.nodes);
        if (!(cond === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(names, constants) {
        var _a3;
        if (this.else = (_a3 = this.else) === null || _a3 === void 0 ? void 0 : _a3.optimizeNames(names, constants), !!(super.optimizeNames(names, constants) || this.else))
          return this.condition = optimizeExpr(this.condition, names, constants), this;
      }
      get names() {
        let names = super.names;
        return addExprNames(names, this.condition), this.else && addNames(names, this.else.names), names;
      }
    };
    If.kind = "if";
    var For = class extends BlockNode {
    };
    For.kind = "for";
    var ForLoop = class extends For {
      constructor(iteration) {
        super(), this.iteration = iteration;
      }
      render(opts) {
        return `for(${this.iteration})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (super.optimizeNames(names, constants))
          return this.iteration = optimizeExpr(this.iteration, names, constants), this;
      }
      get names() {
        return addNames(super.names, this.iteration.names);
      }
    }, ForRange = class extends For {
      constructor(varKind, name, from, to) {
        super(), this.varKind = varKind, this.name = name, this.from = from, this.to = to;
      }
      render(opts) {
        let varKind = opts.es5 ? scope_1.varKinds.var : this.varKind, { name, from, to } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
      }
      get names() {
        let names = addExprNames(super.names, this.from);
        return addExprNames(names, this.to);
      }
    }, ForIter = class extends For {
      constructor(loop, varKind, name, iterable) {
        super(), this.loop = loop, this.varKind = varKind, this.name = name, this.iterable = iterable;
      }
      render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
      }
      optimizeNames(names, constants) {
        if (super.optimizeNames(names, constants))
          return this.iterable = optimizeExpr(this.iterable, names, constants), this;
      }
      get names() {
        return addNames(super.names, this.iterable.names);
      }
    }, Func = class extends BlockNode {
      constructor(name, args, async) {
        super(), this.name = name, this.args = args, this.async = async;
      }
      render(opts) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(opts);
      }
    };
    Func.kind = "func";
    var Return = class extends ParentNode {
      render(opts) {
        return "return " + super.render(opts);
      }
    };
    Return.kind = "return";
    var Try = class extends BlockNode {
      render(opts) {
        let code = "try" + super.render(opts);
        return this.catch && (code += this.catch.render(opts)), this.finally && (code += this.finally.render(opts)), code;
      }
      optimizeNodes() {
        var _a3, _b;
        return super.optimizeNodes(), (_a3 = this.catch) === null || _a3 === void 0 || _a3.optimizeNodes(), (_b = this.finally) === null || _b === void 0 || _b.optimizeNodes(), this;
      }
      optimizeNames(names, constants) {
        var _a3, _b;
        return super.optimizeNames(names, constants), (_a3 = this.catch) === null || _a3 === void 0 || _a3.optimizeNames(names, constants), (_b = this.finally) === null || _b === void 0 || _b.optimizeNames(names, constants), this;
      }
      get names() {
        let names = super.names;
        return this.catch && addNames(names, this.catch.names), this.finally && addNames(names, this.finally.names), names;
      }
    }, Catch = class extends BlockNode {
      constructor(error2) {
        super(), this.error = error2;
      }
      render(opts) {
        return `catch(${this.error})` + super.render(opts);
      }
    };
    Catch.kind = "catch";
    var Finally = class extends BlockNode {
      render(opts) {
        return "finally" + super.render(opts);
      }
    };
    Finally.kind = "finally";
    var CodeGen = class {
      constructor(extScope, opts = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...opts, _n: opts.lines ? `
` : "" }, this._extScope = extScope, this._scope = new scope_1.Scope({ parent: extScope }), this._nodes = [new Root()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(prefix) {
        return this._scope.name(prefix);
      }
      // reserves unique name in the external scope
      scopeName(prefix) {
        return this._extScope.name(prefix);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(prefixOrName, value) {
        let name = this._extScope.value(prefixOrName, value);
        return (this._values[name.prefix] || (this._values[name.prefix] = /* @__PURE__ */ new Set())).add(name), name;
      }
      getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(varKind, nameOrPrefix, rhs, constant) {
        let name = this._scope.toName(nameOrPrefix);
        return rhs !== void 0 && constant && (this._constants[name.str] = rhs), this._leafNode(new Def(varKind, name, rhs)), name;
      }
      // `const` declaration (`var` in es5 mode)
      const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
      }
      // `var` declaration with optional assignment
      var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
      }
      // assignment code
      assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
      }
      // `+=` code
      add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
      }
      // appends passed SafeExpr to code or executes Block
      code(c) {
        return typeof c == "function" ? c() : c !== code_1.nil && this._leafNode(new AnyCode(c)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...keyValues) {
        let code = ["{"];
        for (let [key, value] of keyValues)
          code.length > 1 && code.push(","), code.push(key), (key !== value || this.opts.es5) && (code.push(":"), (0, code_1.addCodeArg)(code, value));
        return code.push("}"), new code_1._Code(code);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(condition, thenBody, elseBody) {
        if (this._blockNode(new If(condition)), thenBody && elseBody)
          this.code(thenBody).else().code(elseBody).endIf();
        else if (thenBody)
          this.code(thenBody).endIf();
        else if (elseBody)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(condition) {
        return this._elseNode(new If(condition));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new Else());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(If, Else);
      }
      _for(node2, forBody) {
        return this._blockNode(node2), forBody && this.code(forBody).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
      }
      // `for` statement for a range of values
      forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        let name = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        let name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
          let arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
          return this.forRange("_i", 0, (0, code_1._)`${arr}.length`, (i) => {
            this.var(name, (0, code_1._)`${arr}[${i}]`), forBody(name);
          });
        }
        return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(nameOrPrefix, (0, code_1._)`Object.keys(${obj})`, forBody);
        let name = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(For);
      }
      // `label` statement
      label(label) {
        return this._leafNode(new Label(label));
      }
      // `break` statement
      break(label) {
        return this._leafNode(new Break(label));
      }
      // `return` statement
      return(value) {
        let node2 = new Return();
        if (this._blockNode(node2), this.code(value), node2.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
      }
      // `try` statement
      try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        let node2 = new Try();
        if (this._blockNode(node2), this.code(tryBody), catchCode) {
          let error2 = this.name("e");
          this._currNode = node2.catch = new Catch(error2), catchCode(error2);
        }
        return finallyCode && (this._currNode = node2.finally = new Finally(), this.code(finallyCode)), this._endBlockNode(Catch, Finally);
      }
      // `throw` statement
      throw(error2) {
        return this._leafNode(new Throw(error2));
      }
      // start self-balancing block
      block(body, nodeCount) {
        return this._blockStarts.push(this._nodes.length), body && this.code(body).endBlock(nodeCount), this;
      }
      // end the current self-balancing block
      endBlock(nodeCount) {
        let len = this._blockStarts.pop();
        if (len === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        let toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== void 0 && toClose !== nodeCount)
          throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        return this._nodes.length = len, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(name, args = code_1.nil, async, funcBody) {
        return this._blockNode(new Func(name, args, async)), funcBody && this.code(funcBody).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(Func);
      }
      optimize(n = 1) {
        for (; n-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(node2) {
        return this._currNode.nodes.push(node2), this;
      }
      _blockNode(node2) {
        this._currNode.nodes.push(node2), this._nodes.push(node2);
      }
      _endBlockNode(N1, N2) {
        let n = this._currNode;
        if (n instanceof N1 || N2 && n instanceof N2)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
      }
      _elseNode(node2) {
        let n = this._currNode;
        if (!(n instanceof If))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = n.else = node2, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        let ns = this._nodes;
        return ns[ns.length - 1];
      }
      set _currNode(node2) {
        let ns = this._nodes;
        ns[ns.length - 1] = node2;
      }
    };
    exports.CodeGen = CodeGen;
    function addNames(names, from) {
      for (let n in from)
        names[n] = (names[n] || 0) + (from[n] || 0);
      return names;
    }
    function addExprNames(names, from) {
      return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
    }
    function optimizeExpr(expr, names, constants) {
      if (expr instanceof code_1.Name)
        return replaceName(expr);
      if (!canOptimize(expr))
        return expr;
      return new code_1._Code(expr._items.reduce((items, c) => (c instanceof code_1.Name && (c = replaceName(c)), c instanceof code_1._Code ? items.push(...c._items) : items.push(c), items), []));
      function replaceName(n) {
        let c = constants[n.str];
        return c === void 0 || names[n.str] !== 1 ? n : (delete names[n.str], c);
      }
      function canOptimize(e) {
        return e instanceof code_1._Code && e._items.some((c) => c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== void 0);
      }
    }
    function subtractNames(names, from) {
      for (let n in from)
        names[n] = (names[n] || 0) - (from[n] || 0);
    }
    function not(x) {
      return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._)`!${par(x)}`;
    }
    exports.not = not;
    var andCode = mappend(exports.operators.AND);
    function and(...args) {
      return args.reduce(andCode);
    }
    exports.and = and;
    var orCode = mappend(exports.operators.OR);
    function or(...args) {
      return args.reduce(orCode);
    }
    exports.or = or;
    function mappend(op) {
      return (x, y) => x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._)`${par(x)} ${op} ${par(y)}`;
    }
    function par(x) {
      return x instanceof code_1.Name ? x : (0, code_1._)`(${x})`;
    }
  }
});

// node_modules/ajv/dist/compile/util.js
var require_util = __commonJS({
  "node_modules/ajv/dist/compile/util.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
    var codegen_1 = require_codegen(), code_1 = require_code();
    function toHash(arr) {
      let hash = {};
      for (let item of arr)
        hash[item] = !0;
      return hash;
    }
    exports.toHash = toHash;
    function alwaysValidSchema(it, schema) {
      return typeof schema == "boolean" ? schema : Object.keys(schema).length === 0 ? !0 : (checkUnknownRules(it, schema), !schemaHasRules(schema, it.self.RULES.all));
    }
    exports.alwaysValidSchema = alwaysValidSchema;
    function checkUnknownRules(it, schema = it.schema) {
      let { opts, self } = it;
      if (!opts.strictSchema || typeof schema == "boolean")
        return;
      let rules = self.RULES.keywords;
      for (let key in schema)
        rules[key] || checkStrictMode(it, `unknown keyword: "${key}"`);
    }
    exports.checkUnknownRules = checkUnknownRules;
    function schemaHasRules(schema, rules) {
      if (typeof schema == "boolean")
        return !schema;
      for (let key in schema)
        if (rules[key])
          return !0;
      return !1;
    }
    exports.schemaHasRules = schemaHasRules;
    function schemaHasRulesButRef(schema, RULES2) {
      if (typeof schema == "boolean")
        return !schema;
      for (let key in schema)
        if (key !== "$ref" && RULES2.all[key])
          return !0;
      return !1;
    }
    exports.schemaHasRulesButRef = schemaHasRulesButRef;
    function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword, $data) {
      if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean")
          return schema;
        if (typeof schema == "string")
          return (0, codegen_1._)`${schema}`;
      }
      return (0, codegen_1._)`${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
    }
    exports.schemaRefOrVal = schemaRefOrVal;
    function unescapeFragment(str) {
      return unescapeJsonPointer(decodeURIComponent(str));
    }
    exports.unescapeFragment = unescapeFragment;
    function escapeFragment(str) {
      return encodeURIComponent(escapeJsonPointer(str));
    }
    exports.escapeFragment = escapeFragment;
    function escapeJsonPointer(str) {
      return typeof str == "number" ? `${str}` : str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    exports.escapeJsonPointer = escapeJsonPointer;
    function unescapeJsonPointer(str) {
      return str.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    exports.unescapeJsonPointer = unescapeJsonPointer;
    function eachItem(xs, f) {
      if (Array.isArray(xs))
        for (let x of xs)
          f(x);
      else
        f(xs);
    }
    exports.eachItem = eachItem;
    function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues: mergeValues3, resultToName }) {
      return (gen, from, to, toName) => {
        let res = to === void 0 ? from : to instanceof codegen_1.Name ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof codegen_1.Name ? (mergeToName(gen, to, from), from) : mergeValues3(from, to);
        return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
      };
    }
    exports.mergeEvaluated = {
      props: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => {
          gen.if((0, codegen_1._)`${from} === true`, () => gen.assign(to, !0), () => gen.assign(to, (0, codegen_1._)`${to} || {}`).code((0, codegen_1._)`Object.assign(${to}, ${from})`));
        }),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => {
          from === !0 ? gen.assign(to, !0) : (gen.assign(to, (0, codegen_1._)`${to} || {}`), setEvaluated(gen, to, from));
        }),
        mergeValues: (from, to) => from === !0 ? !0 : { ...from, ...to },
        resultToName: evaluatedPropsToName
      }),
      items: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._)`${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._)`${to} !== true`, () => gen.assign(to, from === !0 ? !0 : (0, codegen_1._)`${to} > ${from} ? ${to} : ${from}`)),
        mergeValues: (from, to) => from === !0 ? !0 : Math.max(from, to),
        resultToName: (gen, items) => gen.var("items", items)
      })
    };
    function evaluatedPropsToName(gen, ps) {
      if (ps === !0)
        return gen.var("props", !0);
      let props = gen.var("props", (0, codegen_1._)`{}`);
      return ps !== void 0 && setEvaluated(gen, props, ps), props;
    }
    exports.evaluatedPropsToName = evaluatedPropsToName;
    function setEvaluated(gen, props, ps) {
      Object.keys(ps).forEach((p) => gen.assign((0, codegen_1._)`${props}${(0, codegen_1.getProperty)(p)}`, !0));
    }
    exports.setEvaluated = setEvaluated;
    var snippets = {};
    function useFunc(gen, f) {
      return gen.scopeValue("func", {
        ref: f,
        code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code))
      });
    }
    exports.useFunc = useFunc;
    var Type;
    (function(Type2) {
      Type2[Type2.Num = 0] = "Num", Type2[Type2.Str = 1] = "Str";
    })(Type || (exports.Type = Type = {}));
    function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
      if (dataProp instanceof codegen_1.Name) {
        let isNumber = dataPropType === Type.Num;
        return jsPropertySyntax ? isNumber ? (0, codegen_1._)`"[" + ${dataProp} + "]"` : (0, codegen_1._)`"['" + ${dataProp} + "']"` : isNumber ? (0, codegen_1._)`"/" + ${dataProp}` : (0, codegen_1._)`"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
    }
    exports.getErrorPath = getErrorPath;
    function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
      if (mode) {
        if (msg = `strict mode: ${msg}`, mode === !0)
          throw new Error(msg);
        it.self.logger.warn(msg);
      }
    }
    exports.checkStrictMode = checkStrictMode;
  }
});

// node_modules/ajv/dist/compile/names.js
var require_names = __commonJS({
  "node_modules/ajv/dist/compile/names.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), names = {
      // validation function arguments
      data: new codegen_1.Name("data"),
      // data passed to validation function
      // args passed from referencing schema
      valCxt: new codegen_1.Name("valCxt"),
      // validation/data context - should not be used directly, it is destructured to the names below
      instancePath: new codegen_1.Name("instancePath"),
      parentData: new codegen_1.Name("parentData"),
      parentDataProperty: new codegen_1.Name("parentDataProperty"),
      rootData: new codegen_1.Name("rootData"),
      // root data - same as the data passed to the first/top validation function
      dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
      // used to support recursiveRef and dynamicRef
      // function scoped variables
      vErrors: new codegen_1.Name("vErrors"),
      // null or array of validation errors
      errors: new codegen_1.Name("errors"),
      // counter of validation errors
      this: new codegen_1.Name("this"),
      // "globals"
      self: new codegen_1.Name("self"),
      scope: new codegen_1.Name("scope"),
      // JTD serialize/parse name for JSON string and position
      json: new codegen_1.Name("json"),
      jsonPos: new codegen_1.Name("jsonPos"),
      jsonLen: new codegen_1.Name("jsonLen"),
      jsonPart: new codegen_1.Name("jsonPart")
    };
    exports.default = names;
  }
});

// node_modules/ajv/dist/compile/errors.js
var require_errors = __commonJS({
  "node_modules/ajv/dist/compile/errors.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util(), names_1 = require_names();
    exports.keywordError = {
      message: ({ keyword }) => (0, codegen_1.str)`must pass "${keyword}" keyword validation`
    };
    exports.keyword$DataError = {
      message: ({ keyword, schemaType }) => schemaType ? (0, codegen_1.str)`"${keyword}" keyword must be ${schemaType} ($data)` : (0, codegen_1.str)`"${keyword}" keyword is invalid ($data)`
    };
    function reportError(cxt, error2 = exports.keywordError, errorPaths, overrideAllErrors) {
      let { it } = cxt, { gen, compositeRule, allErrors } = it, errObj = errorObjectCode(cxt, error2, errorPaths);
      overrideAllErrors ?? (compositeRule || allErrors) ? addError(gen, errObj) : returnErrors(it, (0, codegen_1._)`[${errObj}]`);
    }
    exports.reportError = reportError;
    function reportExtraError(cxt, error2 = exports.keywordError, errorPaths) {
      let { it } = cxt, { gen, compositeRule, allErrors } = it, errObj = errorObjectCode(cxt, error2, errorPaths);
      addError(gen, errObj), compositeRule || allErrors || returnErrors(it, names_1.default.vErrors);
    }
    exports.reportExtraError = reportExtraError;
    function resetErrorsCount(gen, errsCount) {
      gen.assign(names_1.default.errors, errsCount), gen.if((0, codegen_1._)`${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._)`${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
    }
    exports.resetErrorsCount = resetErrorsCount;
    function extendErrors({ gen, keyword, schemaValue, data, errsCount, it }) {
      if (errsCount === void 0)
        throw new Error("ajv implementation error");
      let err = gen.name("err");
      gen.forRange("i", errsCount, names_1.default.errors, (i) => {
        gen.const(err, (0, codegen_1._)`${names_1.default.vErrors}[${i}]`), gen.if((0, codegen_1._)`${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._)`${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath))), gen.assign((0, codegen_1._)`${err}.schemaPath`, (0, codegen_1.str)`${it.errSchemaPath}/${keyword}`), it.opts.verbose && (gen.assign((0, codegen_1._)`${err}.schema`, schemaValue), gen.assign((0, codegen_1._)`${err}.data`, data));
      });
    }
    exports.extendErrors = extendErrors;
    function addError(gen, errObj) {
      let err = gen.const("err", errObj);
      gen.if((0, codegen_1._)`${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._)`[${err}]`), (0, codegen_1._)`${names_1.default.vErrors}.push(${err})`), gen.code((0, codegen_1._)`${names_1.default.errors}++`);
    }
    function returnErrors(it, errs) {
      let { gen, validateName, schemaEnv } = it;
      schemaEnv.$async ? gen.throw((0, codegen_1._)`new ${it.ValidationError}(${errs})`) : (gen.assign((0, codegen_1._)`${validateName}.errors`, errs), gen.return(!1));
    }
    var E = {
      keyword: new codegen_1.Name("keyword"),
      schemaPath: new codegen_1.Name("schemaPath"),
      // also used in JTD errors
      params: new codegen_1.Name("params"),
      propertyName: new codegen_1.Name("propertyName"),
      message: new codegen_1.Name("message"),
      schema: new codegen_1.Name("schema"),
      parentSchema: new codegen_1.Name("parentSchema")
    };
    function errorObjectCode(cxt, error2, errorPaths) {
      let { createErrors } = cxt.it;
      return createErrors === !1 ? (0, codegen_1._)`{}` : errorObject(cxt, error2, errorPaths);
    }
    function errorObject(cxt, error2, errorPaths = {}) {
      let { gen, it } = cxt, keyValues = [
        errorInstancePath(it, errorPaths),
        errorSchemaPath(cxt, errorPaths)
      ];
      return extraErrorProps(cxt, error2, keyValues), gen.object(...keyValues);
    }
    function errorInstancePath({ errorPath }, { instancePath }) {
      let instPath = instancePath ? (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}` : errorPath;
      return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
    }
    function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
      let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str)`${errSchemaPath}/${keyword}`;
      return schemaPath && (schPath = (0, codegen_1.str)`${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`), [E.schemaPath, schPath];
    }
    function extraErrorProps(cxt, { params, message }, keyValues) {
      let { keyword, data, schemaValue, it } = cxt, { opts, propertyName, topSchemaRef, schemaPath } = it;
      keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._)`{}`]), opts.messages && keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]), opts.verbose && keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._)`${topSchemaRef}${schemaPath}`], [names_1.default.data, data]), propertyName && keyValues.push([E.propertyName, propertyName]);
    }
  }
});

// node_modules/ajv/dist/compile/validate/boolSchema.js
var require_boolSchema = __commonJS({
  "node_modules/ajv/dist/compile/validate/boolSchema.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
    var errors_1 = require_errors(), codegen_1 = require_codegen(), names_1 = require_names(), boolError = {
      message: "boolean schema is false"
    };
    function topBoolOrEmptySchema(it) {
      let { gen, schema, validateName } = it;
      schema === !1 ? falseSchemaError(it, !1) : typeof schema == "object" && schema.$async === !0 ? gen.return(names_1.default.data) : (gen.assign((0, codegen_1._)`${validateName}.errors`, null), gen.return(!0));
    }
    exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
    function boolOrEmptySchema(it, valid) {
      let { gen, schema } = it;
      schema === !1 ? (gen.var(valid, !1), falseSchemaError(it)) : gen.var(valid, !0);
    }
    exports.boolOrEmptySchema = boolOrEmptySchema;
    function falseSchemaError(it, overrideAllErrors) {
      let { gen, data } = it, cxt = {
        gen,
        keyword: "false schema",
        data,
        schema: !1,
        schemaCode: !1,
        schemaValue: !1,
        params: {},
        it
      };
      (0, errors_1.reportError)(cxt, boolError, void 0, overrideAllErrors);
    }
  }
});

// node_modules/ajv/dist/compile/rules.js
var require_rules = __commonJS({
  "node_modules/ajv/dist/compile/rules.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getRules = exports.isJSONType = void 0;
    var _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"], jsonTypes = new Set(_jsonTypes);
    function isJSONType(x) {
      return typeof x == "string" && jsonTypes.has(x);
    }
    exports.isJSONType = isJSONType;
    function getRules() {
      let groups = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] }
      };
      return {
        types: { ...groups, integer: !0, boolean: !0, null: !0 },
        rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
        post: { rules: [] },
        all: {},
        keywords: {}
      };
    }
    exports.getRules = getRules;
  }
});

// node_modules/ajv/dist/compile/validate/applicability.js
var require_applicability = __commonJS({
  "node_modules/ajv/dist/compile/validate/applicability.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0;
    function schemaHasRulesForType({ schema, self }, type) {
      let group = self.RULES.types[type];
      return group && group !== !0 && shouldUseGroup(schema, group);
    }
    exports.schemaHasRulesForType = schemaHasRulesForType;
    function shouldUseGroup(schema, group) {
      return group.rules.some((rule) => shouldUseRule(schema, rule));
    }
    exports.shouldUseGroup = shouldUseGroup;
    function shouldUseRule(schema, rule) {
      var _a3;
      return schema[rule.keyword] !== void 0 || ((_a3 = rule.definition.implements) === null || _a3 === void 0 ? void 0 : _a3.some((kwd) => schema[kwd] !== void 0));
    }
    exports.shouldUseRule = shouldUseRule;
  }
});

// node_modules/ajv/dist/compile/validate/dataType.js
var require_dataType = __commonJS({
  "node_modules/ajv/dist/compile/validate/dataType.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
    var rules_1 = require_rules(), applicability_1 = require_applicability(), errors_1 = require_errors(), codegen_1 = require_codegen(), util_1 = require_util(), DataType;
    (function(DataType2) {
      DataType2[DataType2.Correct = 0] = "Correct", DataType2[DataType2.Wrong = 1] = "Wrong";
    })(DataType || (exports.DataType = DataType = {}));
    function getSchemaTypes(schema) {
      let types = getJSONTypes(schema.type);
      if (types.includes("null")) {
        if (schema.nullable === !1)
          throw new Error("type: null contradicts nullable: false");
      } else {
        if (!types.length && schema.nullable !== void 0)
          throw new Error('"nullable" cannot be used without "type"');
        schema.nullable === !0 && types.push("null");
      }
      return types;
    }
    exports.getSchemaTypes = getSchemaTypes;
    function getJSONTypes(ts) {
      let types = Array.isArray(ts) ? ts : ts ? [ts] : [];
      if (types.every(rules_1.isJSONType))
        return types;
      throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
    }
    exports.getJSONTypes = getJSONTypes;
    function coerceAndCheckDataType(it, types) {
      let { gen, data, opts } = it, coerceTo = coerceToTypes(types, opts.coerceTypes), checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
      if (checkTypes) {
        let wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen.if(wrongType, () => {
          coerceTo.length ? coerceData(it, types, coerceTo) : reportTypeError(it);
        });
      }
      return checkTypes;
    }
    exports.coerceAndCheckDataType = coerceAndCheckDataType;
    var COERCIBLE = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function coerceToTypes(types, coerceTypes) {
      return coerceTypes ? types.filter((t) => COERCIBLE.has(t) || coerceTypes === "array" && t === "array") : [];
    }
    function coerceData(it, types, coerceTo) {
      let { gen, data, opts } = it, dataType = gen.let("dataType", (0, codegen_1._)`typeof ${data}`), coerced = gen.let("coerced", (0, codegen_1._)`undefined`);
      opts.coerceTypes === "array" && gen.if((0, codegen_1._)`${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen.assign(data, (0, codegen_1._)`${data}[0]`).assign(dataType, (0, codegen_1._)`typeof ${data}`).if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data))), gen.if((0, codegen_1._)`${coerced} !== undefined`);
      for (let t of coerceTo)
        (COERCIBLE.has(t) || t === "array" && opts.coerceTypes === "array") && coerceSpecificType(t);
      gen.else(), reportTypeError(it), gen.endIf(), gen.if((0, codegen_1._)`${coerced} !== undefined`, () => {
        gen.assign(data, coerced), assignParentData(it, coerced);
      });
      function coerceSpecificType(t) {
        switch (t) {
          case "string":
            gen.elseIf((0, codegen_1._)`${dataType} == "number" || ${dataType} == "boolean"`).assign(coerced, (0, codegen_1._)`"" + ${data}`).elseIf((0, codegen_1._)`${data} === null`).assign(coerced, (0, codegen_1._)`""`);
            return;
          case "number":
            gen.elseIf((0, codegen_1._)`${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "integer":
            gen.elseIf((0, codegen_1._)`${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`).assign(coerced, (0, codegen_1._)`+${data}`);
            return;
          case "boolean":
            gen.elseIf((0, codegen_1._)`${data} === "false" || ${data} === 0 || ${data} === null`).assign(coerced, !1).elseIf((0, codegen_1._)`${data} === "true" || ${data} === 1`).assign(coerced, !0);
            return;
          case "null":
            gen.elseIf((0, codegen_1._)`${data} === "" || ${data} === 0 || ${data} === false`), gen.assign(coerced, null);
            return;
          case "array":
            gen.elseIf((0, codegen_1._)`${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`).assign(coerced, (0, codegen_1._)`[${data}]`);
        }
      }
    }
    function assignParentData({ gen, parentData, parentDataProperty }, expr) {
      gen.if((0, codegen_1._)`${parentData} !== undefined`, () => gen.assign((0, codegen_1._)`${parentData}[${parentDataProperty}]`, expr));
    }
    function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
      let EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ, cond;
      switch (dataType) {
        case "null":
          return (0, codegen_1._)`${data} ${EQ} null`;
        case "array":
          cond = (0, codegen_1._)`Array.isArray(${data})`;
          break;
        case "object":
          cond = (0, codegen_1._)`${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
          break;
        case "integer":
          cond = numCond((0, codegen_1._)`!(${data} % 1) && !isNaN(${data})`);
          break;
        case "number":
          cond = numCond();
          break;
        default:
          return (0, codegen_1._)`typeof ${data} ${EQ} ${dataType}`;
      }
      return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
      function numCond(_cond = codegen_1.nil) {
        return (0, codegen_1.and)((0, codegen_1._)`typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._)`isFinite(${data})` : codegen_1.nil);
      }
    }
    exports.checkDataType = checkDataType;
    function checkDataTypes(dataTypes, data, strictNums, correct) {
      if (dataTypes.length === 1)
        return checkDataType(dataTypes[0], data, strictNums, correct);
      let cond, types = (0, util_1.toHash)(dataTypes);
      if (types.array && types.object) {
        let notObj = (0, codegen_1._)`typeof ${data} != "object"`;
        cond = types.null ? notObj : (0, codegen_1._)`!${data} || ${notObj}`, delete types.null, delete types.array, delete types.object;
      } else
        cond = codegen_1.nil;
      types.number && delete types.integer;
      for (let t in types)
        cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
      return cond;
    }
    exports.checkDataTypes = checkDataTypes;
    var typeError = {
      message: ({ schema }) => `must be ${schema}`,
      params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_1._)`{type: ${schema}}` : (0, codegen_1._)`{type: ${schemaValue}}`
    };
    function reportTypeError(it) {
      let cxt = getTypeErrorContext(it);
      (0, errors_1.reportError)(cxt, typeError);
    }
    exports.reportTypeError = reportTypeError;
    function getTypeErrorContext(it) {
      let { gen, data, schema } = it, schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
      return {
        gen,
        keyword: "type",
        data,
        schema: schema.type,
        schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it
      };
    }
  }
});

// node_modules/ajv/dist/compile/validate/defaults.js
var require_defaults = __commonJS({
  "node_modules/ajv/dist/compile/validate/defaults.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.assignDefaults = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util();
    function assignDefaults(it, ty) {
      let { properties, items } = it.schema;
      if (ty === "object" && properties)
        for (let key in properties)
          assignDefault(it, key, properties[key].default);
      else ty === "array" && Array.isArray(items) && items.forEach((sch, i) => assignDefault(it, i, sch.default));
    }
    exports.assignDefaults = assignDefaults;
    function assignDefault(it, prop, defaultValue) {
      let { gen, compositeRule, data, opts } = it;
      if (defaultValue === void 0)
        return;
      let childData = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(prop)}`;
      if (compositeRule) {
        (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
        return;
      }
      let condition = (0, codegen_1._)`${childData} === undefined`;
      opts.useDefaults === "empty" && (condition = (0, codegen_1._)`${condition} || ${childData} === null || ${childData} === ""`), gen.if(condition, (0, codegen_1._)`${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
    }
  }
});

// node_modules/ajv/dist/vocabularies/code.js
var require_code2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/code.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util(), names_1 = require_names(), util_2 = require_util();
    function checkReportMissingProp(cxt, prop) {
      let { gen, data, it } = cxt;
      gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
        cxt.setParams({ missingProperty: (0, codegen_1._)`${prop}` }, !0), cxt.error();
      });
    }
    exports.checkReportMissingProp = checkReportMissingProp;
    function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
      return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._)`${missing} = ${prop}`)));
    }
    exports.checkMissingProp = checkMissingProp;
    function reportMissingProp(cxt, missing) {
      cxt.setParams({ missingProperty: missing }, !0), cxt.error();
    }
    exports.reportMissingProp = reportMissingProp;
    function hasPropFunc(gen) {
      return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._)`Object.prototype.hasOwnProperty`
      });
    }
    exports.hasPropFunc = hasPropFunc;
    function isOwnProperty(gen, data, property) {
      return (0, codegen_1._)`${hasPropFunc(gen)}.call(${data}, ${property})`;
    }
    exports.isOwnProperty = isOwnProperty;
    function propertyInData(gen, data, property, ownProperties) {
      let cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
      return ownProperties ? (0, codegen_1._)`${cond} && ${isOwnProperty(gen, data, property)}` : cond;
    }
    exports.propertyInData = propertyInData;
    function noPropertyInData(gen, data, property, ownProperties) {
      let cond = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(property)} === undefined`;
      return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
    }
    exports.noPropertyInData = noPropertyInData;
    function allSchemaProperties(schemaMap) {
      return schemaMap ? Object.keys(schemaMap).filter((p) => p !== "__proto__") : [];
    }
    exports.allSchemaProperties = allSchemaProperties;
    function schemaProperties(it, schemaMap) {
      return allSchemaProperties(schemaMap).filter((p) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p]));
    }
    exports.schemaProperties = schemaProperties;
    function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
      let dataAndSchema = passSchema ? (0, codegen_1._)`${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data, valCxt = [
        [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
        [names_1.default.parentData, it.parentData],
        [names_1.default.parentDataProperty, it.parentDataProperty],
        [names_1.default.rootData, names_1.default.rootData]
      ];
      it.opts.dynamicRef && valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
      let args = (0, codegen_1._)`${dataAndSchema}, ${gen.object(...valCxt)}`;
      return context !== codegen_1.nil ? (0, codegen_1._)`${func}.call(${context}, ${args})` : (0, codegen_1._)`${func}(${args})`;
    }
    exports.callValidateCode = callValidateCode;
    var newRegExp = (0, codegen_1._)`new RegExp`;
    function usePattern({ gen, it: { opts } }, pattern) {
      let u = opts.unicodeRegExp ? "u" : "", { regExp } = opts.code, rx = regExp(pattern, u);
      return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._)`${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u})`
      });
    }
    exports.usePattern = usePattern;
    function validateArray(cxt) {
      let { gen, data, keyword, it } = cxt, valid = gen.name("valid");
      if (it.allErrors) {
        let validArr = gen.let("valid", !0);
        return validateItems(() => gen.assign(validArr, !1)), validArr;
      }
      return gen.var(valid, !0), validateItems(() => gen.break()), valid;
      function validateItems(notValid) {
        let len = gen.const("len", (0, codegen_1._)`${data}.length`);
        gen.forRange("i", 0, len, (i) => {
          cxt.subschema({
            keyword,
            dataProp: i,
            dataPropType: util_1.Type.Num
          }, valid), gen.if((0, codegen_1.not)(valid), notValid);
        });
      }
    }
    exports.validateArray = validateArray;
    function validateUnion(cxt) {
      let { gen, schema, keyword, it } = cxt;
      if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
      if (schema.some((sch) => (0, util_1.alwaysValidSchema)(it, sch)) && !it.opts.unevaluated)
        return;
      let valid = gen.let("valid", !1), schValid = gen.name("_valid");
      gen.block(() => schema.forEach((_sch, i) => {
        let schCxt = cxt.subschema({
          keyword,
          schemaProp: i,
          compositeRule: !0
        }, schValid);
        gen.assign(valid, (0, codegen_1._)`${valid} || ${schValid}`), cxt.mergeValidEvaluated(schCxt, schValid) || gen.if((0, codegen_1.not)(valid));
      })), cxt.result(valid, () => cxt.reset(), () => cxt.error(!0));
    }
    exports.validateUnion = validateUnion;
  }
});

// node_modules/ajv/dist/compile/validate/keyword.js
var require_keyword = __commonJS({
  "node_modules/ajv/dist/compile/validate/keyword.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
    var codegen_1 = require_codegen(), names_1 = require_names(), code_1 = require_code2(), errors_1 = require_errors();
    function macroKeywordCode(cxt, def) {
      let { gen, keyword, schema, parentSchema, it } = cxt, macroSchema = def.macro.call(it.self, schema, parentSchema, it), schemaRef = useKeyword(gen, keyword, macroSchema);
      it.opts.validateSchema !== !1 && it.self.validateSchema(macroSchema, !0);
      let valid = gen.name("valid");
      cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: !0
      }, valid), cxt.pass(valid, () => cxt.error(!0));
    }
    exports.macroKeywordCode = macroKeywordCode;
    function funcKeywordCode(cxt, def) {
      var _a3;
      let { gen, keyword, schema, parentSchema, $data, it } = cxt;
      checkAsyncKeyword(it, def);
      let validate2 = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate, validateRef = useKeyword(gen, keyword, validate2), valid = gen.let("valid");
      cxt.block$data(valid, validateKeyword), cxt.ok((_a3 = def.valid) !== null && _a3 !== void 0 ? _a3 : valid);
      function validateKeyword() {
        if (def.errors === !1)
          assignValid(), def.modifying && modifyData(cxt), reportErrs(() => cxt.error());
        else {
          let ruleErrs = def.async ? validateAsync3() : validateSync();
          def.modifying && modifyData(cxt), reportErrs(() => addErrs(cxt, ruleErrs));
        }
      }
      function validateAsync3() {
        let ruleErrs = gen.let("ruleErrs", null);
        return gen.try(() => assignValid((0, codegen_1._)`await `), (e) => gen.assign(valid, !1).if((0, codegen_1._)`${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._)`${e}.errors`), () => gen.throw(e))), ruleErrs;
      }
      function validateSync() {
        let validateErrs = (0, codegen_1._)`${validateRef}.errors`;
        return gen.assign(validateErrs, null), assignValid(codegen_1.nil), validateErrs;
      }
      function assignValid(_await = def.async ? (0, codegen_1._)`await ` : codegen_1.nil) {
        let passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self, passSchema = !("compile" in def && !$data || def.schema === !1);
        gen.assign(valid, (0, codegen_1._)`${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
      }
      function reportErrs(errors) {
        var _a4;
        gen.if((0, codegen_1.not)((_a4 = def.valid) !== null && _a4 !== void 0 ? _a4 : valid), errors);
      }
    }
    exports.funcKeywordCode = funcKeywordCode;
    function modifyData(cxt) {
      let { gen, data, it } = cxt;
      gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._)`${it.parentData}[${it.parentDataProperty}]`));
    }
    function addErrs(cxt, errs) {
      let { gen } = cxt;
      gen.if((0, codegen_1._)`Array.isArray(${errs})`, () => {
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`).assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`), (0, errors_1.extendErrors)(cxt);
      }, () => cxt.error());
    }
    function checkAsyncKeyword({ schemaEnv }, def) {
      if (def.async && !schemaEnv.$async)
        throw new Error("async keyword in sync schema");
    }
    function useKeyword(gen, keyword, result) {
      if (result === void 0)
        throw new Error(`keyword "${keyword}" failed to compile`);
      return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
    }
    function validSchemaType(schema, schemaType, allowUndefined = !1) {
      return !schemaType.length || schemaType.some((st) => st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema > "u");
    }
    exports.validSchemaType = validSchemaType;
    function validateKeywordUsage({ schema, opts, self, errSchemaPath }, def, keyword) {
      if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword)
        throw new Error("ajv implementation error");
      let deps = def.dependencies;
      if (deps?.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd)))
        throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
      if (def.validateSchema && !def.validateSchema(schema[keyword])) {
        let msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(def.validateSchema.errors);
        if (opts.validateSchema === "log")
          self.logger.error(msg);
        else
          throw new Error(msg);
      }
    }
    exports.validateKeywordUsage = validateKeywordUsage;
  }
});

// node_modules/ajv/dist/compile/validate/subschema.js
var require_subschema = __commonJS({
  "node_modules/ajv/dist/compile/validate/subschema.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util();
    function getSubschema(it, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
      if (keyword !== void 0 && schema !== void 0)
        throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (keyword !== void 0) {
        let sch = it.schema[keyword];
        return schemaProp === void 0 ? {
          schema: sch,
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}`
        } : {
          schema: sch[schemaProp],
          schemaPath: (0, codegen_1._)`${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
          errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`
        };
      }
      if (schema !== void 0) {
        if (schemaPath === void 0 || errSchemaPath === void 0 || topSchemaRef === void 0)
          throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return {
          schema,
          schemaPath,
          topSchemaRef,
          errSchemaPath
        };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    exports.getSubschema = getSubschema;
    function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
      if (data !== void 0 && dataProp !== void 0)
        throw new Error('both "data" and "dataProp" passed, only one allowed');
      let { gen } = it;
      if (dataProp !== void 0) {
        let { errorPath, dataPathArr, opts } = it, nextData = gen.let("data", (0, codegen_1._)`${it.data}${(0, codegen_1.getProperty)(dataProp)}`, !0);
        dataContextProps(nextData), subschema.errorPath = (0, codegen_1.str)`${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`, subschema.parentDataProperty = (0, codegen_1._)`${dataProp}`, subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
      }
      if (data !== void 0) {
        let nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, !0);
        dataContextProps(nextData), propertyName !== void 0 && (subschema.propertyName = propertyName);
      }
      dataTypes && (subschema.dataTypes = dataTypes);
      function dataContextProps(_nextData) {
        subschema.data = _nextData, subschema.dataLevel = it.dataLevel + 1, subschema.dataTypes = [], it.definedProperties = /* @__PURE__ */ new Set(), subschema.parentData = it.data, subschema.dataNames = [...it.dataNames, _nextData];
      }
    }
    exports.extendSubschemaData = extendSubschemaData;
    function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
      compositeRule !== void 0 && (subschema.compositeRule = compositeRule), createErrors !== void 0 && (subschema.createErrors = createErrors), allErrors !== void 0 && (subschema.allErrors = allErrors), subschema.jtdDiscriminator = jtdDiscriminator, subschema.jtdMetadata = jtdMetadata;
    }
    exports.extendSubschemaMode = extendSubschemaMode;
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    module.exports = function equal(a, b) {
      if (a === b) return !0;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return !1;
        var length, i, keys;
        if (Array.isArray(a)) {
          if (length = a.length, length != b.length) return !1;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return !1;
          return !0;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        if (keys = Object.keys(a), length = keys.length, length !== Object.keys(b).length) return !1;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return !1;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return !1;
        }
        return !0;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/json-schema-traverse/index.js
var require_json_schema_traverse = __commonJS({
  "node_modules/json-schema-traverse/index.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    var traverse = module.exports = function(schema, opts, cb) {
      typeof opts == "function" && (cb = opts, opts = {}), cb = opts.cb || cb;
      var pre = typeof cb == "function" ? cb : cb.pre || function() {
      }, post = cb.post || function() {
      };
      _traverse(opts, pre, post, schema, "", schema);
    };
    traverse.keywords = {
      additionalItems: !0,
      items: !0,
      contains: !0,
      additionalProperties: !0,
      propertyNames: !0,
      not: !0,
      if: !0,
      then: !0,
      else: !0
    };
    traverse.arrayKeywords = {
      items: !0,
      allOf: !0,
      anyOf: !0,
      oneOf: !0
    };
    traverse.propsKeywords = {
      $defs: !0,
      definitions: !0,
      properties: !0,
      patternProperties: !0,
      dependencies: !0
    };
    traverse.skipKeywords = {
      default: !0,
      enum: !0,
      const: !0,
      required: !0,
      maximum: !0,
      minimum: !0,
      exclusiveMaximum: !0,
      exclusiveMinimum: !0,
      multipleOf: !0,
      maxLength: !0,
      minLength: !0,
      pattern: !0,
      format: !0,
      maxItems: !0,
      minItems: !0,
      uniqueItems: !0,
      maxProperties: !0,
      minProperties: !0
    };
    function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for (var key in schema) {
          var sch = schema[key];
          if (Array.isArray(sch)) {
            if (key in traverse.arrayKeywords)
              for (var i = 0; i < sch.length; i++)
                _traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
          } else if (key in traverse.propsKeywords) {
            if (sch && typeof sch == "object")
              for (var prop in sch)
                _traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          } else (key in traverse.keywords || opts.allKeys && !(key in traverse.skipKeywords)) && _traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      }
    }
    function escapeJsonPtr(str) {
      return str.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }
});

// node_modules/ajv/dist/compile/resolve.js
var require_resolve = __commonJS({
  "node_modules/ajv/dist/compile/resolve.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
    var util_1 = require_util(), equal = require_fast_deep_equal(), traverse = require_json_schema_traverse(), SIMPLE_INLINED = /* @__PURE__ */ new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const"
    ]);
    function inlineRef(schema, limit = !0) {
      return typeof schema == "boolean" ? !0 : limit === !0 ? !hasRef(schema) : limit ? countKeys(schema) <= limit : !1;
    }
    exports.inlineRef = inlineRef;
    var REF_KEYWORDS = /* @__PURE__ */ new Set([
      "$ref",
      "$recursiveRef",
      "$recursiveAnchor",
      "$dynamicRef",
      "$dynamicAnchor"
    ]);
    function hasRef(schema) {
      for (let key in schema) {
        if (REF_KEYWORDS.has(key))
          return !0;
        let sch = schema[key];
        if (Array.isArray(sch) && sch.some(hasRef) || typeof sch == "object" && hasRef(sch))
          return !0;
      }
      return !1;
    }
    function countKeys(schema) {
      let count = 0;
      for (let key in schema) {
        if (key === "$ref")
          return 1 / 0;
        if (count++, !SIMPLE_INLINED.has(key) && (typeof schema[key] == "object" && (0, util_1.eachItem)(schema[key], (sch) => count += countKeys(sch)), count === 1 / 0))
          return 1 / 0;
      }
      return count;
    }
    function getFullPath(resolver, id = "", normalize2) {
      normalize2 !== !1 && (id = normalizeId(id));
      let p = resolver.parse(id);
      return _getFullPath(resolver, p);
    }
    exports.getFullPath = getFullPath;
    function _getFullPath(resolver, p) {
      return resolver.serialize(p).split("#")[0] + "#";
    }
    exports._getFullPath = _getFullPath;
    var TRAILING_SLASH_HASH = /#\/?$/;
    function normalizeId(id) {
      return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
    }
    exports.normalizeId = normalizeId;
    function resolveUrl(resolver, baseId, id) {
      return id = normalizeId(id), resolver.resolve(baseId, id);
    }
    exports.resolveUrl = resolveUrl;
    var ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
    function getSchemaRefs(schema, baseId) {
      if (typeof schema == "boolean")
        return {};
      let { schemaId, uriResolver } = this.opts, schId = normalizeId(schema[schemaId] || baseId), baseIds = { "": schId }, pathPrefix = getFullPath(uriResolver, schId, !1), localRefs = {}, schemaRefs = /* @__PURE__ */ new Set();
      return traverse(schema, { allKeys: !0 }, (sch, jsonPtr, _, parentJsonPtr) => {
        if (parentJsonPtr === void 0)
          return;
        let fullPath = pathPrefix + jsonPtr, innerBaseId = baseIds[parentJsonPtr];
        typeof sch[schemaId] == "string" && (innerBaseId = addRef.call(this, sch[schemaId])), addAnchor.call(this, sch.$anchor), addAnchor.call(this, sch.$dynamicAnchor), baseIds[jsonPtr] = innerBaseId;
        function addRef(ref) {
          let _resolve = this.opts.uriResolver.resolve;
          if (ref = normalizeId(innerBaseId ? _resolve(innerBaseId, ref) : ref), schemaRefs.has(ref))
            throw ambiguos(ref);
          schemaRefs.add(ref);
          let schOrRef = this.refs[ref];
          return typeof schOrRef == "string" && (schOrRef = this.refs[schOrRef]), typeof schOrRef == "object" ? checkAmbiguosRef(sch, schOrRef.schema, ref) : ref !== normalizeId(fullPath) && (ref[0] === "#" ? (checkAmbiguosRef(sch, localRefs[ref], ref), localRefs[ref] = sch) : this.refs[ref] = fullPath), ref;
        }
        function addAnchor(anchor2) {
          if (typeof anchor2 == "string") {
            if (!ANCHOR.test(anchor2))
              throw new Error(`invalid anchor "${anchor2}"`);
            addRef.call(this, `#${anchor2}`);
          }
        }
      }), localRefs;
      function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== void 0 && !equal(sch1, sch2))
          throw ambiguos(ref);
      }
      function ambiguos(ref) {
        return new Error(`reference "${ref}" resolves to more than one schema`);
      }
    }
    exports.getSchemaRefs = getSchemaRefs;
  }
});

// node_modules/ajv/dist/compile/validate/index.js
var require_validate = __commonJS({
  "node_modules/ajv/dist/compile/validate/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
    var boolSchema_1 = require_boolSchema(), dataType_1 = require_dataType(), applicability_1 = require_applicability(), dataType_2 = require_dataType(), defaults_1 = require_defaults(), keyword_1 = require_keyword(), subschema_1 = require_subschema(), codegen_1 = require_codegen(), names_1 = require_names(), resolve_1 = require_resolve(), util_1 = require_util(), errors_1 = require_errors();
    function validateFunctionCode(it) {
      if (isSchemaObj(it) && (checkKeywords(it), schemaCxtHasRules(it))) {
        topSchemaObjCode(it);
        return;
      }
      validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
    }
    exports.validateFunctionCode = validateFunctionCode;
    function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
      opts.code.es5 ? gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
        gen.code((0, codegen_1._)`"use strict"; ${funcSourceUrl(schema, opts)}`), destructureValCxtES5(gen, opts), gen.code(body);
      }) : gen.func(validateName, (0, codegen_1._)`${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
    }
    function destructureValCxt(opts) {
      return (0, codegen_1._)`{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._)`, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
    }
    function destructureValCxtES5(gen, opts) {
      gen.if(names_1.default.valCxt, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.instancePath}`), gen.var(names_1.default.parentData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentData}`), gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.parentDataProperty}`), gen.var(names_1.default.rootData, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.rootData}`), opts.dynamicRef && gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
      }, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._)`""`), gen.var(names_1.default.parentData, (0, codegen_1._)`undefined`), gen.var(names_1.default.parentDataProperty, (0, codegen_1._)`undefined`), gen.var(names_1.default.rootData, names_1.default.data), opts.dynamicRef && gen.var(names_1.default.dynamicAnchors, (0, codegen_1._)`{}`);
      });
    }
    function topSchemaObjCode(it) {
      let { schema, opts, gen } = it;
      validateFunction(it, () => {
        opts.$comment && schema.$comment && commentKeyword(it), checkNoDefault(it), gen.let(names_1.default.vErrors, null), gen.let(names_1.default.errors, 0), opts.unevaluated && resetEvaluated(it), typeAndKeywords(it), returnResults(it);
      });
    }
    function resetEvaluated(it) {
      let { gen, validateName } = it;
      it.evaluated = gen.const("evaluated", (0, codegen_1._)`${validateName}.evaluated`), gen.if((0, codegen_1._)`${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._)`${it.evaluated}.props`, (0, codegen_1._)`undefined`)), gen.if((0, codegen_1._)`${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._)`${it.evaluated}.items`, (0, codegen_1._)`undefined`));
    }
    function funcSourceUrl(schema, opts) {
      let schId = typeof schema == "object" && schema[opts.schemaId];
      return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._)`/*# sourceURL=${schId} */` : codegen_1.nil;
    }
    function subschemaCode(it, valid) {
      if (isSchemaObj(it) && (checkKeywords(it), schemaCxtHasRules(it))) {
        subSchemaObjCode(it, valid);
        return;
      }
      (0, boolSchema_1.boolOrEmptySchema)(it, valid);
    }
    function schemaCxtHasRules({ schema, self }) {
      if (typeof schema == "boolean")
        return !schema;
      for (let key in schema)
        if (self.RULES.all[key])
          return !0;
      return !1;
    }
    function isSchemaObj(it) {
      return typeof it.schema != "boolean";
    }
    function subSchemaObjCode(it, valid) {
      let { schema, gen, opts } = it;
      opts.$comment && schema.$comment && commentKeyword(it), updateContext(it), checkAsyncSchema(it);
      let errsCount = gen.const("_errs", names_1.default.errors);
      typeAndKeywords(it, errsCount), gen.var(valid, (0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
    }
    function checkKeywords(it) {
      (0, util_1.checkUnknownRules)(it), checkRefsAndKeywords(it);
    }
    function typeAndKeywords(it, errsCount) {
      if (it.opts.jtd)
        return schemaKeywords(it, [], !1, errsCount);
      let types = (0, dataType_1.getSchemaTypes)(it.schema), checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
      schemaKeywords(it, types, !checkedTypes, errsCount);
    }
    function checkRefsAndKeywords(it) {
      let { schema, errSchemaPath, opts, self } = it;
      schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES) && self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
    }
    function checkNoDefault(it) {
      let { schema, opts } = it;
      schema.default !== void 0 && opts.useDefaults && opts.strictSchema && (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
    }
    function updateContext(it) {
      let schId = it.schema[it.opts.schemaId];
      schId && (it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId));
    }
    function checkAsyncSchema(it) {
      if (it.schema.$async && !it.schemaEnv.$async)
        throw new Error("async schema in sync schema");
    }
    function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
      let msg = schema.$comment;
      if (opts.$comment === !0)
        gen.code((0, codegen_1._)`${names_1.default.self}.logger.log(${msg})`);
      else if (typeof opts.$comment == "function") {
        let schemaPath = (0, codegen_1.str)`${errSchemaPath}/$comment`, rootName = gen.scopeValue("root", { ref: schemaEnv.root });
        gen.code((0, codegen_1._)`${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
      }
    }
    function returnResults(it) {
      let { gen, schemaEnv, validateName, ValidationError, opts } = it;
      schemaEnv.$async ? gen.if((0, codegen_1._)`${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._)`new ${ValidationError}(${names_1.default.vErrors})`)) : (gen.assign((0, codegen_1._)`${validateName}.errors`, names_1.default.vErrors), opts.unevaluated && assignEvaluated(it), gen.return((0, codegen_1._)`${names_1.default.errors} === 0`));
    }
    function assignEvaluated({ gen, evaluated, props, items }) {
      props instanceof codegen_1.Name && gen.assign((0, codegen_1._)`${evaluated}.props`, props), items instanceof codegen_1.Name && gen.assign((0, codegen_1._)`${evaluated}.items`, items);
    }
    function schemaKeywords(it, types, typeErrors, errsCount) {
      let { gen, schema, data, allErrors, opts, self } = it, { RULES: RULES2 } = self;
      if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES2))) {
        gen.block(() => keywordCode(it, "$ref", RULES2.all.$ref.definition));
        return;
      }
      opts.jtd || checkStrictTypes(it, types), gen.block(() => {
        for (let group of RULES2.rules)
          groupKeywords(group);
        groupKeywords(RULES2.post);
      });
      function groupKeywords(group) {
        (0, applicability_1.shouldUseGroup)(schema, group) && (group.type ? (gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers)), iterateKeywords(it, group), types.length === 1 && types[0] === group.type && typeErrors && (gen.else(), (0, dataType_2.reportTypeError)(it)), gen.endIf()) : iterateKeywords(it, group), allErrors || gen.if((0, codegen_1._)`${names_1.default.errors} === ${errsCount || 0}`));
      }
    }
    function iterateKeywords(it, group) {
      let { gen, schema, opts: { useDefaults } } = it;
      useDefaults && (0, defaults_1.assignDefaults)(it, group.type), gen.block(() => {
        for (let rule of group.rules)
          (0, applicability_1.shouldUseRule)(schema, rule) && keywordCode(it, rule.keyword, rule.definition, group.type);
      });
    }
    function checkStrictTypes(it, types) {
      it.schemaEnv.meta || !it.opts.strictTypes || (checkContextTypes(it, types), it.opts.allowUnionTypes || checkMultipleTypes(it, types), checkKeywordTypes(it, it.dataTypes));
    }
    function checkContextTypes(it, types) {
      if (types.length) {
        if (!it.dataTypes.length) {
          it.dataTypes = types;
          return;
        }
        types.forEach((t) => {
          includesType(it.dataTypes, t) || strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
        }), narrowSchemaTypes(it, types);
      }
    }
    function checkMultipleTypes(it, ts) {
      ts.length > 1 && !(ts.length === 2 && ts.includes("null")) && strictTypesError(it, "use allowUnionTypes to allow union type keyword");
    }
    function checkKeywordTypes(it, ts) {
      let rules = it.self.RULES.all;
      for (let keyword in rules) {
        let rule = rules[keyword];
        if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
          let { type } = rule.definition;
          type.length && !type.some((t) => hasApplicableType(ts, t)) && strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
        }
      }
    }
    function hasApplicableType(schTs, kwdT) {
      return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
    }
    function includesType(ts, t) {
      return ts.includes(t) || t === "integer" && ts.includes("number");
    }
    function narrowSchemaTypes(it, withTypes) {
      let ts = [];
      for (let t of it.dataTypes)
        includesType(withTypes, t) ? ts.push(t) : withTypes.includes("integer") && t === "number" && ts.push("integer");
      it.dataTypes = ts;
    }
    function strictTypesError(it, msg) {
      let schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
      msg += ` at "${schemaPath}" (strictTypes)`, (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
    }
    var KeywordCxt = class {
      constructor(it, def, keyword) {
        if ((0, keyword_1.validateKeywordUsage)(it, def, keyword), this.gen = it.gen, this.allErrors = it.allErrors, this.keyword = keyword, this.data = it.data, this.schema = it.schema[keyword], this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data), this.schemaType = def.schemaType, this.parentSchema = it.schema, this.params = {}, this.it = it, this.def = def, this.$data)
          this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
        else if (this.schemaCode = this.schemaValue, !(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined))
          throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
        ("code" in def ? def.trackErrors : def.errors !== !1) && (this.errsCount = it.gen.const("_errs", names_1.default.errors));
      }
      result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
      }
      failResult(condition, successAction, failAction) {
        this.gen.if(condition), failAction ? failAction() : this.error(), successAction ? (this.gen.else(), successAction(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), void 0, failAction);
      }
      fail(condition) {
        if (condition === void 0) {
          this.error(), this.allErrors || this.gen.if(!1);
          return;
        }
        this.gen.if(condition), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      fail$data(condition) {
        if (!this.$data)
          return this.fail(condition);
        let { schemaCode } = this;
        this.fail((0, codegen_1._)`${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
      }
      error(append, errorParams, errorPaths) {
        if (errorParams) {
          this.setParams(errorParams), this._error(append, errorPaths), this.setParams({});
          return;
        }
        this._error(append, errorPaths);
      }
      _error(append, errorPaths) {
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
      }
      $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0)
          throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(cond) {
        this.allErrors || this.gen.if(cond);
      }
      setParams(obj, assign) {
        assign ? Object.assign(this.params, obj) : this.params = obj;
      }
      block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
        this.gen.block(() => {
          this.check$data(valid, $dataValid), codeBlock();
        });
      }
      check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
        if (!this.$data)
          return;
        let { gen, schemaCode, schemaType, def } = this;
        gen.if((0, codegen_1.or)((0, codegen_1._)`${schemaCode} === undefined`, $dataValid)), valid !== codegen_1.nil && gen.assign(valid, !0), (schemaType.length || def.validateSchema) && (gen.elseIf(this.invalid$data()), this.$dataError(), valid !== codegen_1.nil && gen.assign(valid, !1)), gen.else();
      }
      invalid$data() {
        let { gen, schemaCode, schemaType, def, it } = this;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
          if (schemaType.length) {
            if (!(schemaCode instanceof codegen_1.Name))
              throw new Error("ajv implementation error");
            let st = Array.isArray(schemaType) ? schemaType : [schemaType];
            return (0, codegen_1._)`${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
          }
          return codegen_1.nil;
        }
        function invalid$DataSchema() {
          if (def.validateSchema) {
            let validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema });
            return (0, codegen_1._)`!${validateSchemaRef}(${schemaCode})`;
          }
          return codegen_1.nil;
        }
      }
      subschema(appl, valid) {
        let subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl), (0, subschema_1.extendSubschemaMode)(subschema, appl);
        let nextContext = { ...this.it, ...subschema, items: void 0, props: void 0 };
        return subschemaCode(nextContext, valid), nextContext;
      }
      mergeEvaluated(schemaCxt, toName) {
        let { it, gen } = this;
        it.opts.unevaluated && (it.props !== !0 && schemaCxt.props !== void 0 && (it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName)), it.items !== !0 && schemaCxt.items !== void 0 && (it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName)));
      }
      mergeValidEvaluated(schemaCxt, valid) {
        let { it, gen } = this;
        if (it.opts.unevaluated && (it.props !== !0 || it.items !== !0))
          return gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1.Name)), !0;
      }
    };
    exports.KeywordCxt = KeywordCxt;
    function keywordCode(it, keyword, def, ruleType) {
      let cxt = new KeywordCxt(it, def, keyword);
      "code" in def ? def.code(cxt, ruleType) : cxt.$data && def.validate ? (0, keyword_1.funcKeywordCode)(cxt, def) : "macro" in def ? (0, keyword_1.macroKeywordCode)(cxt, def) : (def.compile || def.validate) && (0, keyword_1.funcKeywordCode)(cxt, def);
    }
    var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/, RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function getData($data, { dataLevel, dataNames, dataPathArr }) {
      let jsonPointer, data;
      if ($data === "")
        return names_1.default.rootData;
      if ($data[0] === "/") {
        if (!JSON_POINTER.test($data))
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data, data = names_1.default.rootData;
      } else {
        let matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches)
          throw new Error(`Invalid JSON-pointer: ${$data}`);
        let up = +matches[1];
        if (jsonPointer = matches[2], jsonPointer === "#") {
          if (up >= dataLevel)
            throw new Error(errorMsg("property/index", up));
          return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel)
          throw new Error(errorMsg("data", up));
        if (data = dataNames[dataLevel - up], !jsonPointer)
          return data;
      }
      let expr = data, segments = jsonPointer.split("/");
      for (let segment of segments)
        segment && (data = (0, codegen_1._)`${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`, expr = (0, codegen_1._)`${expr} && ${data}`);
      return expr;
      function errorMsg(pointerType, up) {
        return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
      }
    }
    exports.getData = getData;
  }
});

// node_modules/ajv/dist/runtime/validation_error.js
var require_validation_error = __commonJS({
  "node_modules/ajv/dist/runtime/validation_error.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var ValidationError = class extends Error {
      constructor(errors) {
        super("validation failed"), this.errors = errors, this.ajv = this.validation = !0;
      }
    };
    exports.default = ValidationError;
  }
});

// node_modules/ajv/dist/compile/ref_error.js
var require_ref_error = __commonJS({
  "node_modules/ajv/dist/compile/ref_error.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var resolve_1 = require_resolve(), MissingRefError = class extends Error {
      constructor(resolver, baseId, ref, msg) {
        super(msg || `can't resolve reference ${ref} from id ${baseId}`), this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref), this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
      }
    };
    exports.default = MissingRefError;
  }
});

// node_modules/ajv/dist/compile/index.js
var require_compile = __commonJS({
  "node_modules/ajv/dist/compile/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
    var codegen_1 = require_codegen(), validation_error_1 = require_validation_error(), names_1 = require_names(), resolve_1 = require_resolve(), util_1 = require_util(), validate_1 = require_validate(), SchemaEnv = class {
      constructor(env) {
        var _a3;
        this.refs = {}, this.dynamicAnchors = {};
        let schema;
        typeof env.schema == "object" && (schema = env.schema), this.schema = env.schema, this.schemaId = env.schemaId, this.root = env.root || this, this.baseId = (_a3 = env.baseId) !== null && _a3 !== void 0 ? _a3 : (0, resolve_1.normalizeId)(schema?.[env.schemaId || "$id"]), this.schemaPath = env.schemaPath, this.localRefs = env.localRefs, this.meta = env.meta, this.$async = schema?.$async, this.refs = {};
      }
    };
    exports.SchemaEnv = SchemaEnv;
    function compileSchema(sch) {
      let _sch = getCompilingSchema.call(this, sch);
      if (_sch)
        return _sch;
      let rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId), { es5, lines } = this.opts.code, { ownProperties } = this.opts, gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties }), _ValidationError;
      sch.$async && (_ValidationError = gen.scopeValue("Error", {
        ref: validation_error_1.default,
        code: (0, codegen_1._)`require("ajv/dist/runtime/validation_error").default`
      }));
      let validateName = gen.scopeName("validate");
      sch.validateName = validateName;
      let schemaCxt = {
        gen,
        allErrors: this.opts.allErrors,
        data: names_1.default.data,
        parentData: names_1.default.parentData,
        parentDataProperty: names_1.default.parentDataProperty,
        dataNames: [names_1.default.data],
        dataPathArr: [codegen_1.nil],
        // TODO can its length be used as dataLevel if nil is removed?
        dataLevel: 0,
        dataTypes: [],
        definedProperties: /* @__PURE__ */ new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === !0 ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) } : { ref: sch.schema }),
        validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen_1.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen_1._)`""`,
        opts: this.opts,
        self: this
      }, sourceCode;
      try {
        this._compilations.add(sch), (0, validate_1.validateFunctionCode)(schemaCxt), gen.optimize(this.opts.code.optimize);
        let validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`, this.opts.code.process && (sourceCode = this.opts.code.process(sourceCode, sch));
        let validate2 = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode)(this, this.scope.get());
        if (this.scope.value(validateName, { ref: validate2 }), validate2.errors = null, validate2.schema = sch.schema, validate2.schemaEnv = sch, sch.$async && (validate2.$async = !0), this.opts.code.source === !0 && (validate2.source = { validateName, validateCode, scopeValues: gen._values }), this.opts.unevaluated) {
          let { props, items } = schemaCxt;
          validate2.evaluated = {
            props: props instanceof codegen_1.Name ? void 0 : props,
            items: items instanceof codegen_1.Name ? void 0 : items,
            dynamicProps: props instanceof codegen_1.Name,
            dynamicItems: items instanceof codegen_1.Name
          }, validate2.source && (validate2.source.evaluated = (0, codegen_1.stringify)(validate2.evaluated));
        }
        return sch.validate = validate2, sch;
      } catch (e) {
        throw delete sch.validate, delete sch.validateName, sourceCode && this.logger.error("Error compiling schema, function code:", sourceCode), e;
      } finally {
        this._compilations.delete(sch);
      }
    }
    exports.compileSchema = compileSchema;
    function resolveRef(root, baseId, ref) {
      var _a3;
      ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
      let schOrFunc = root.refs[ref];
      if (schOrFunc)
        return schOrFunc;
      let _sch = resolve3.call(this, root, ref);
      if (_sch === void 0) {
        let schema = (_a3 = root.localRefs) === null || _a3 === void 0 ? void 0 : _a3[ref], { schemaId } = this.opts;
        schema && (_sch = new SchemaEnv({ schema, schemaId, root, baseId }));
      }
      if (_sch !== void 0)
        return root.refs[ref] = inlineOrCompile.call(this, _sch);
    }
    exports.resolveRef = resolveRef;
    function inlineOrCompile(sch) {
      return (0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs) ? sch.schema : sch.validate ? sch : compileSchema.call(this, sch);
    }
    function getCompilingSchema(schEnv) {
      for (let sch of this._compilations)
        if (sameSchemaEnv(sch, schEnv))
          return sch;
    }
    exports.getCompilingSchema = getCompilingSchema;
    function sameSchemaEnv(s1, s2) {
      return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
    }
    function resolve3(root, ref) {
      let sch;
      for (; typeof (sch = this.refs[ref]) == "string"; )
        ref = sch;
      return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
    }
    function resolveSchema(root, ref) {
      let p = this.opts.uriResolver.parse(ref), refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p), baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, void 0);
      if (Object.keys(root.schema).length > 0 && refPath === baseId)
        return getJsonPointer.call(this, p, root);
      let id = (0, resolve_1.normalizeId)(refPath), schOrRef = this.refs[id] || this.schemas[id];
      if (typeof schOrRef == "string") {
        let sch = resolveSchema.call(this, root, schOrRef);
        return typeof sch?.schema != "object" ? void 0 : getJsonPointer.call(this, p, sch);
      }
      if (typeof schOrRef?.schema == "object") {
        if (schOrRef.validate || compileSchema.call(this, schOrRef), id === (0, resolve_1.normalizeId)(ref)) {
          let { schema } = schOrRef, { schemaId } = this.opts, schId = schema[schemaId];
          return schId && (baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId)), new SchemaEnv({ schema, schemaId, root, baseId });
        }
        return getJsonPointer.call(this, p, schOrRef);
      }
    }
    exports.resolveSchema = resolveSchema;
    var PREVENT_SCOPE_CHANGE = /* @__PURE__ */ new Set([
      "properties",
      "patternProperties",
      "enum",
      "dependencies",
      "definitions"
    ]);
    function getJsonPointer(parsedRef, { baseId, schema, root }) {
      var _a3;
      if (((_a3 = parsedRef.fragment) === null || _a3 === void 0 ? void 0 : _a3[0]) !== "/")
        return;
      for (let part of parsedRef.fragment.slice(1).split("/")) {
        if (typeof schema == "boolean")
          return;
        let partSchema = schema[(0, util_1.unescapeFragment)(part)];
        if (partSchema === void 0)
          return;
        schema = partSchema;
        let schId = typeof schema == "object" && schema[this.opts.schemaId];
        !PREVENT_SCOPE_CHANGE.has(part) && schId && (baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId));
      }
      let env;
      if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
        let $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = resolveSchema.call(this, root, $ref);
      }
      let { schemaId } = this.opts;
      if (env = env || new SchemaEnv({ schema, schemaId, root, baseId }), env.schema !== env.root.schema)
        return env;
    }
  }
});

// node_modules/ajv/dist/refs/data.json
var require_data = __commonJS({
  "node_modules/ajv/dist/refs/data.json"(exports, module) {
    module.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
        }
      },
      additionalProperties: !1
    };
  }
});

// node_modules/fast-uri/lib/utils.js
var require_utils = __commonJS({
  "node_modules/fast-uri/lib/utils.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    var isUUID = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), isIPv4 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), isPort = RegExp.prototype.test.bind(/^\d*$/u), isHexPair = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), isUnreserved = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), isPathCharacter = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), isQueryFragmentCharacter = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), isUserinfoCharacter = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), BYTE_HEX = new Array(256);
    {
      let HEX_DIGITS = "0123456789ABCDEF";
      for (let i = 0; i < 256; i++)
        BYTE_HEX[i] = "%" + HEX_DIGITS[i >> 4] + HEX_DIGITS[i & 15];
    }
    function percentEncodeNonAscii(cp) {
      return cp < 2048 ? BYTE_HEX[192 | cp >> 6] + BYTE_HEX[128 | cp & 63] : cp < 65536 ? BYTE_HEX[224 | cp >> 12] + BYTE_HEX[128 | cp >> 6 & 63] + BYTE_HEX[128 | cp & 63] : BYTE_HEX[240 | cp >> 18] + BYTE_HEX[128 | cp >> 12 & 63] + BYTE_HEX[128 | cp >> 6 & 63] + BYTE_HEX[128 | cp & 63];
    }
    function stringArrayToHexStripped(input) {
      let acc = "", code = 0, i = 0;
      for (i = 0; i < input.length; i++)
        if (code = input[i].charCodeAt(0), code !== 48) {
          if (!(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102))
            return "";
          acc += input[i];
          break;
        }
      for (i += 1; i < input.length; i++) {
        if (code = input[i].charCodeAt(0), !(code >= 48 && code <= 57 || code >= 65 && code <= 70 || code >= 97 && code <= 102))
          return "";
        acc += input[i];
      }
      return acc;
    }
    var isHextet = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), isIPvFuture = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), isZoneCharacter = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), nonSimpleDomain = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function isZoneIdentifier(zone) {
      if (zone.length === 0) return !1;
      for (let i = 0; i < zone.length; i++)
        if (!isZoneCharacter(zone[i])) {
          if (zone[i] === "%" && i + 2 < zone.length && isHexPair(zone.slice(i + 1, i + 3))) {
            i += 2;
            continue;
          }
          return !1;
        }
      return !0;
    }
    function compressIPv6ZeroRun(hextets) {
      let bestStart = -1, bestLength = 0, runStart = -1, runLength = 0;
      for (let i = 0; i < hextets.length; i++)
        hextets[i] === "0" ? (runStart === -1 && (runStart = i), runLength++, runLength > bestLength && (bestLength = runLength, bestStart = runStart)) : (runStart = -1, runLength = 0);
      if (bestLength < 2) return hextets.join(":");
      let head = hextets.slice(0, bestStart).join(":"), tail = hextets.slice(bestStart + bestLength).join(":");
      return head + "::" + tail;
    }
    function normalizeIPv6Address(input) {
      let compression = input.indexOf("::");
      if (compression !== -1 && input.indexOf("::", compression + 1) !== -1) return;
      let left = compression === -1 ? input.split(":") : input.slice(0, compression).split(":"), right = compression === -1 ? [] : input.slice(compression + 2).split(":");
      compression !== -1 && (left.length === 1 && left[0] === "" && (left.length = 0), right.length === 1 && right[0] === "" && (right.length = 0));
      let parts = left.concat(right), hextetCount = 0;
      for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part === "") return;
        if (part.indexOf(".") !== -1) {
          if (i !== parts.length - 1 || compression !== -1 && right.length === 0 || !isIPv4(part)) return;
          hextetCount += 2;
          continue;
        }
        if (!isHextet(part)) return;
        parts[i] = parseInt(part, 16).toString(16), hextetCount++;
      }
      if (compression === -1)
        return hextetCount !== 8 ? void 0 : compressIPv6ZeroRun(parts);
      if (hextetCount >= 8) return;
      let expanded = parts.slice(0, left.length);
      for (let i = hextetCount; i < 8; i++) expanded.push("0");
      for (let i = left.length; i < parts.length; i++) expanded.push(parts[i]);
      return compressIPv6ZeroRun(expanded);
    }
    function normalizeIPv6(host) {
      let bracketed = host[0] === "[" && host[host.length - 1] === "]";
      if ((host[0] === "[" || host[host.length - 1] === "]") && !bracketed) return { host, isIPV6: !1, error: !0 };
      let input = bracketed ? host.slice(1, -1) : host;
      if (bracketed && isIPvFuture(input))
        return input = input.toLowerCase(), { host: `[${input}]`, escapedHost: input, isIPV6: !1, isIPVFuture: !0 };
      if (findToken(input, ":") < 2)
        return { host, isIPV6: !1, error: bracketed };
      let zoneIdentifier = "", zoneSeparator = input.indexOf("%");
      if (zoneSeparator !== -1) {
        let separatorLength = input.slice(zoneSeparator, zoneSeparator + 3).toLowerCase() === "%25" ? 3 : 1;
        if (zoneIdentifier = input.slice(zoneSeparator + separatorLength), !isZoneIdentifier(zoneIdentifier)) return { host, isIPV6: !1, error: !0 };
        input = input.slice(0, zoneSeparator);
      }
      let address = normalizeIPv6Address(input);
      return address === void 0 ? { host, isIPV6: !1, error: !0 } : {
        host: address + (zoneIdentifier ? "%" + zoneIdentifier : ""),
        escapedHost: address + (zoneIdentifier ? "%25" + zoneIdentifier : ""),
        isIPV6: !0
      };
    }
    function findToken(str, token) {
      let ind = 0;
      for (let i = 0; i < str.length; i++)
        str[i] === token && ind++;
      return ind;
    }
    function removeDotSegments(path) {
      let input = path, output = [], nextSlash = -1, len = 0;
      for (; len = input.length; ) {
        if (len === 1) {
          if (input === ".")
            break;
          if (input === "/") {
            output.push("/");
            break;
          } else {
            output.push(input);
            break;
          }
        } else if (len === 2) {
          if (input[0] === ".") {
            if (input[1] === ".")
              break;
            if (input[1] === "/") {
              input = input.slice(2);
              continue;
            }
          } else if (input[0] === "/" && (input[1] === "." || input[1] === "/")) {
            output.push("/");
            break;
          }
        } else if (len === 3 && input === "/..") {
          output.length !== 0 && output.pop(), output.push("/");
          break;
        }
        if (input[0] === ".") {
          if (input[1] === ".") {
            if (input[2] === "/") {
              input = input.slice(3);
              continue;
            }
          } else if (input[1] === "/") {
            input = input.slice(2);
            continue;
          }
        } else if (input[0] === "/" && input[1] === ".") {
          if (input[2] === "/") {
            input = input.slice(2);
            continue;
          } else if (input[2] === "." && input[3] === "/") {
            input = input.slice(3), output.length !== 0 && output.pop();
            continue;
          }
        }
        if ((nextSlash = input.indexOf("/", 1)) === -1) {
          output.push(input);
          break;
        } else
          output.push(input.slice(0, nextSlash)), input = input.slice(nextSlash);
      }
      return output.join("");
    }
    var HOST_DELIMS = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, HOST_DELIM_RE = /[@/?#:]/g, HOST_DELIM_NO_COLON_RE = /[@/?#]/g;
    function reescapeHostDelimiters(host, isIP) {
      let re = isIP ? HOST_DELIM_NO_COLON_RE : HOST_DELIM_RE;
      return re.lastIndex = 0, host.replace(re, (ch) => HOST_DELIMS[ch]);
    }
    function normalizePercentEncoding(input, decodeUnreserved = !1) {
      if (input.indexOf("%") === -1)
        return input;
      let output = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "%" && i + 2 < input.length) {
          let hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            let normalizedHex = hex.toUpperCase(), decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            decodeUnreserved && isUnreserved(decoded) ? output += decoded : output += "%" + normalizedHex, i += 2;
            continue;
          }
        }
        output += input[i];
      }
      return output;
    }
    function normalizePathEncoding(input) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          let hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            let normalizedHex = hex.toUpperCase(), decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            decoded !== "." && isUnreserved(decoded) ? output += decoded : output += "%" + normalizedHex, i += 2;
            continue;
          }
        }
        if (isPathCharacter(ch))
          output += ch;
        else {
          let code = input.charCodeAt(i);
          if (code < 128)
            output += isEscapeSafe(code) ? ch : BYTE_HEX[code];
          else if (code < 55296 || code > 57343)
            output += percentEncodeNonAscii(code);
          else if (code <= 56319 && i + 1 < input.length) {
            let low = input.charCodeAt(i + 1);
            low >= 56320 && low <= 57343 ? (output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320)), i++) : output += percentEncodeNonAscii(65533);
          } else
            output += percentEncodeNonAscii(65533);
        }
      }
      return output;
    }
    function serializePathEncoding(input, pathNoScheme = !1) {
      let output = "", firstSegment = pathNoScheme && input[0] !== "/";
      for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          let hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase(), i += 2;
            continue;
          }
        }
        if (ch === "/" && (firstSegment = !1), isPathCharacter(ch) && (ch !== ":" || !firstSegment))
          output += ch;
        else {
          let code = input.charCodeAt(i);
          if (code < 128)
            output += BYTE_HEX[code];
          else if (code < 55296 || code > 57343)
            output += percentEncodeNonAscii(code);
          else if (code <= 56319 && i + 1 < input.length) {
            let low = input.charCodeAt(i + 1);
            low >= 56320 && low <= 57343 ? (output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320)), i++) : output += percentEncodeNonAscii(65533);
          } else
            output += percentEncodeNonAscii(65533);
        }
      }
      return output;
    }
    function encodeComponent(input, isAllowed) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          let hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase(), i += 2;
            continue;
          }
        }
        if (isAllowed(ch))
          output += ch;
        else {
          let code = input.charCodeAt(i);
          if (code < 128)
            output += BYTE_HEX[code];
          else if (code < 55296 || code > 57343)
            output += percentEncodeNonAscii(code);
          else if (code <= 56319 && i + 1 < input.length) {
            let low = input.charCodeAt(i + 1);
            low >= 56320 && low <= 57343 ? (output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320)), i++) : output += percentEncodeNonAscii(65533);
          } else
            output += percentEncodeNonAscii(65533);
        }
      }
      return output;
    }
    function encodeUserinfo(input) {
      return encodeComponent(input, isUserinfoCharacter);
    }
    function encodeQuery(input) {
      return encodeComponent(input, isQueryFragmentCharacter);
    }
    function encodeFragment(input) {
      return encodeComponent(input, isQueryFragmentCharacter);
    }
    function isEscapeSafe(cp) {
      return cp >= 48 && cp <= 57 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp === 42 || cp === 43 || cp === 45 || cp === 46 || cp === 47 || cp === 64 || cp === 95;
    }
    function normalizeQueryFragmentEncoding(input) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if (ch === "%" && i + 2 < input.length) {
          let hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            let normalizedHex = hex.toUpperCase(), decoded = String.fromCharCode(parseInt(normalizedHex, 16));
            isUnreserved(decoded) ? output += decoded : output += "%" + normalizedHex, i += 2;
            continue;
          }
        }
        if (isQueryFragmentCharacter(ch))
          output += ch;
        else {
          let code = input.charCodeAt(i);
          if (code < 128)
            output += isEscapeSafe(code) ? ch : BYTE_HEX[code];
          else if (code < 55296 || code > 57343)
            output += percentEncodeNonAscii(code);
          else if (code <= 56319 && i + 1 < input.length) {
            let low = input.charCodeAt(i + 1);
            low >= 56320 && low <= 57343 ? (output += percentEncodeNonAscii(65536 + (code - 55296 << 10) + (low - 56320)), i++) : output += percentEncodeNonAscii(65533);
          } else
            output += percentEncodeNonAscii(65533);
        }
      }
      return output;
    }
    function escapePreservingEscapes(input) {
      let output = "";
      for (let i = 0; i < input.length; i++) {
        if (input[i] === "%" && i + 2 < input.length) {
          let hex = input.slice(i + 1, i + 3);
          if (isHexPair(hex)) {
            output += "%" + hex.toUpperCase(), i += 2;
            continue;
          }
        }
        output += escape(input[i]);
      }
      return output;
    }
    function recomposeAuthority(component) {
      let uriTokens = [];
      if (component.userinfo !== void 0 && (uriTokens.push(encodeUserinfo(component.userinfo)), uriTokens.push("@")), component.host !== void 0) {
        let host = component.host;
        if (!isIPv4(host)) {
          let ipV6res = normalizeIPv6(host);
          ipV6res.isIPV6 !== !0 && ipV6res.isIPVFuture !== !0 && (host = normalizePercentEncoding(host, !0), ipV6res = normalizeIPv6(host)), ipV6res.isIPV6 === !0 || ipV6res.isIPVFuture === !0 ? host = `[${ipV6res.escapedHost}]` : host = reescapeHostDelimiters(host, !1);
        }
        uriTokens.push(host);
      }
      if (typeof component.port == "number" || typeof component.port == "string") {
        let port = String(component.port);
        if (!isPort(port))
          throw new TypeError("URI port is malformed.");
        uriTokens.push(":"), uriTokens.push(port);
      }
      return uriTokens.length ? uriTokens.join("") : void 0;
    }
    module.exports = {
      nonSimpleDomain,
      recomposeAuthority,
      reescapeHostDelimiters,
      normalizePercentEncoding,
      normalizePathEncoding,
      serializePathEncoding,
      normalizeQueryFragmentEncoding,
      encodeUserinfo,
      encodeQuery,
      encodeFragment,
      escapePreservingEscapes,
      removeDotSegments,
      isIPv4,
      isUUID,
      normalizeIPv6,
      stringArrayToHexStripped
    };
  }
});

// node_modules/fast-uri/lib/schemes.js
var require_schemes = __commonJS({
  "node_modules/fast-uri/lib/schemes.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    var { isUUID } = require_utils(), URN_REG = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, supportedSchemeNames = (
      /** @type {const} */
      [
        "http",
        "https",
        "ws",
        "wss",
        "urn",
        "urn:uuid"
      ]
    );
    function isValidSchemeName(name) {
      return supportedSchemeNames.indexOf(
        /** @type {*} */
        name
      ) !== -1;
    }
    function wsIsSecure(wsComponent) {
      return wsComponent.secure === !0 ? !0 : wsComponent.secure === !1 ? !1 : wsComponent.scheme ? wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === "w" || wsComponent.scheme[0] === "W") && (wsComponent.scheme[1] === "s" || wsComponent.scheme[1] === "S") && (wsComponent.scheme[2] === "s" || wsComponent.scheme[2] === "S") : !1;
    }
    function httpParse(component) {
      return component.host || (component.error = component.error || "HTTP URIs must have a host."), component;
    }
    function httpSerialize(component) {
      let secure = String(component.scheme).toLowerCase() === "https";
      return (component.port === (secure ? 443 : 80) || component.port === "") && (component.port = void 0), component.path || (component.path = "/"), component;
    }
    function wsParse(wsComponent) {
      return wsComponent.secure = wsIsSecure(wsComponent), wsComponent.resourceName = (wsComponent.path || "/") + (wsComponent.query ? "?" + wsComponent.query : ""), wsComponent.path = void 0, wsComponent.query = void 0, wsComponent;
    }
    function wsSerialize(wsComponent) {
      if ((wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === "") && (wsComponent.port = void 0), typeof wsComponent.secure == "boolean" && (wsComponent.scheme = wsComponent.secure ? "wss" : "ws", wsComponent.secure = void 0), wsComponent.resourceName) {
        let queryIndex = wsComponent.resourceName.indexOf("?"), path = queryIndex === -1 ? wsComponent.resourceName : wsComponent.resourceName.slice(0, queryIndex);
        wsComponent.path = path && path !== "/" ? path : void 0, wsComponent.query = queryIndex === -1 ? void 0 : wsComponent.resourceName.slice(queryIndex + 1), wsComponent.resourceName = void 0;
      }
      return wsComponent.fragment = void 0, wsComponent;
    }
    function urnParse(urnComponent, options) {
      if (!urnComponent.path)
        return urnComponent.error = "URN can not be parsed", urnComponent;
      let matches = urnComponent.path.match(URN_REG);
      if (matches && matches[0] === urnComponent.path) {
        let scheme = options.scheme || urnComponent.scheme || "urn";
        urnComponent.nid = matches[1].toLowerCase(), urnComponent.nss = matches[2];
        let urnScheme = `${scheme}:${options.nid || urnComponent.nid}`, schemeHandler = getSchemeHandler(urnScheme);
        urnComponent.path = void 0, schemeHandler && (urnComponent = schemeHandler.parse(urnComponent, options));
      } else
        urnComponent.error = urnComponent.error || "URN can not be parsed.";
      return urnComponent;
    }
    function urnSerialize(urnComponent, options) {
      if (urnComponent.nid === void 0)
        throw new Error("URN without nid cannot be serialized");
      let scheme = options.scheme || urnComponent.scheme || "urn", nid = urnComponent.nid.toLowerCase(), urnScheme = `${scheme}:${options.nid || nid}`, schemeHandler = getSchemeHandler(urnScheme);
      schemeHandler && (urnComponent = schemeHandler.serialize(urnComponent, options));
      let uriComponent = urnComponent, nss = urnComponent.nss;
      return uriComponent.path = `${nid || options.nid}:${nss}`, options.skipEscape = !0, uriComponent;
    }
    function urnuuidParse(urnComponent, options) {
      let uuidComponent = urnComponent;
      return uuidComponent.uuid = uuidComponent.nss, uuidComponent.nss = void 0, !options.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid)) && (uuidComponent.error = uuidComponent.error || "UUID is not valid."), uuidComponent;
    }
    function urnuuidSerialize(uuidComponent) {
      let urnComponent = uuidComponent;
      return urnComponent.nss = (uuidComponent.uuid || "").toLowerCase(), urnComponent;
    }
    var http = (
      /** @type {SchemeHandler} */
      {
        scheme: "http",
        domainHost: !0,
        parse: httpParse,
        serialize: httpSerialize
      }
    ), https = (
      /** @type {SchemeHandler} */
      {
        scheme: "https",
        domainHost: http.domainHost,
        parse: httpParse,
        serialize: httpSerialize
      }
    ), ws = (
      /** @type {SchemeHandler} */
      {
        scheme: "ws",
        domainHost: !0,
        parse: wsParse,
        serialize: wsSerialize
      }
    ), wss = (
      /** @type {SchemeHandler} */
      {
        scheme: "wss",
        domainHost: ws.domainHost,
        parse: ws.parse,
        serialize: ws.serialize
      }
    ), urn = (
      /** @type {SchemeHandler} */
      {
        scheme: "urn",
        parse: urnParse,
        serialize: urnSerialize,
        skipNormalize: !0
      }
    ), urnuuid = (
      /** @type {SchemeHandler} */
      {
        scheme: "urn:uuid",
        parse: urnuuidParse,
        serialize: urnuuidSerialize,
        skipNormalize: !0
      }
    ), SCHEMES = (
      /** @type {Record<SchemeName, SchemeHandler>} */
      {
        http,
        https,
        ws,
        wss,
        urn,
        "urn:uuid": urnuuid
      }
    );
    Object.setPrototypeOf(SCHEMES, null);
    function getSchemeHandler(scheme) {
      return scheme && (SCHEMES[
        /** @type {SchemeName} */
        scheme
      ] || SCHEMES[
        /** @type {SchemeName} */
        scheme.toLowerCase()
      ]) || void 0;
    }
    module.exports = {
      wsIsSecure,
      SCHEMES,
      isValidSchemeName,
      getSchemeHandler
    };
  }
});

// node_modules/fast-uri/index.js
var require_fast_uri = __commonJS({
  "node_modules/fast-uri/index.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    var { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizePercentEncoding, normalizePathEncoding, serializePathEncoding, normalizeQueryFragmentEncoding, encodeQuery, encodeFragment, reescapeHostDelimiters, isIPv4, nonSimpleDomain } = require_utils(), { SCHEMES, getSchemeHandler } = require_schemes(), VALID_SCHEME = /^[A-Za-z][A-Za-z0-9+.-]*$/u, MALFORMED_SCHEME_ERROR = "URI scheme is malformed.";
    function decodeValidScheme(scheme) {
      let decodedScheme = unescape(String(scheme));
      if (!VALID_SCHEME.test(decodedScheme))
        throw new TypeError(MALFORMED_SCHEME_ERROR);
      return decodedScheme;
    }
    function normalize2(uri, options) {
      return typeof uri == "string" ? uri = /** @type {T} */
      normalizeString(uri, options) : typeof uri == "object" && (uri = /** @type {T} */
      parse3(serialize(uri, options), options)), uri;
    }
    function resolve3(baseURI, relativeURI, options) {
      let schemelessOptions = options ? Object.assign({ scheme: "null" }, options) : { scheme: "null" }, {
        parsed: baseParsed,
        malformedAuthorityOrPort: baseMalformed,
        malformedPercentEncoding: baseMalformedPercentEncoding,
        malformedSchemeSpecific: baseMalformedSchemeSpecific,
        malformedHost: baseMalformedHost,
        malformedScheme: baseMalformedScheme
      } = parseWithStatus(baseURI, schemelessOptions), {
        parsed: relativeParsed,
        malformedAuthorityOrPort: relativeMalformed,
        malformedPercentEncoding: relativeMalformedPercentEncoding,
        malformedSchemeSpecific: relativeMalformedSchemeSpecific,
        malformedHost: relativeMalformedHost,
        malformedScheme: relativeMalformedScheme
      } = parseWithStatus(relativeURI, schemelessOptions);
      if (baseMalformed || relativeMalformed || baseMalformedPercentEncoding || relativeMalformedPercentEncoding || baseMalformedSchemeSpecific || relativeMalformedSchemeSpecific || baseMalformedHost || relativeMalformedHost || baseMalformedScheme || relativeMalformedScheme)
        throw new Error(baseParsed.error || relativeParsed.error || "URI is malformed.");
      let resolved = resolveComponent(baseParsed, relativeParsed, schemelessOptions, !0), resolvedSchemeHandler = getSchemeHandler(options && options.scheme || resolved.scheme), resolvedHost = resolved.host, resolvedHostIsIP = resolvedHost !== void 0 && resolvedHost !== "" && (isIPv4(resolvedHost) || normalizeIPv6(resolvedHost).isIPV6);
      canonicalizeHost(resolved, options || {}, resolvedSchemeHandler, resolvedHostIsIP);
      let encodedASCIIHost = resolvedHost && resolvedHost.indexOf("%") !== -1 && !new RegExp("\\P{ASCII}", "u").test(resolvedHost);
      if (resolved.error && !encodedASCIIHost)
        throw new Error(resolved.error);
      return schemelessOptions.skipEscape = !0, serialize(resolved, schemelessOptions);
    }
    function resolveComponent(base, relative, options, skipNormalization) {
      let target = {};
      return skipNormalization || (base = parse3(serialize(base, options), options), relative = parse3(serialize(relative, options), options)), options = options || {}, !options.tolerant && relative.scheme ? (target.scheme = relative.scheme, target.userinfo = relative.userinfo, target.host = relative.host, target.port = relative.port, target.path = removeDotSegments(relative.path || ""), target.query = relative.query) : (relative.userinfo !== void 0 || relative.host !== void 0 || relative.port !== void 0 ? (target.userinfo = relative.userinfo, target.host = relative.host, target.port = relative.port, target.path = removeDotSegments(relative.path || ""), target.query = relative.query) : (relative.path ? (relative.path[0] === "/" ? target.path = removeDotSegments(relative.path) : ((base.userinfo !== void 0 || base.host !== void 0 || base.port !== void 0) && !base.path ? target.path = "/" + relative.path : base.path ? target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path : target.path = relative.path, target.path = removeDotSegments(target.path)), target.query = relative.query) : (target.path = base.path, relative.query !== void 0 ? target.query = relative.query : target.query = base.query), target.userinfo = base.userinfo, target.host = base.host, target.port = base.port), target.scheme = base.scheme), target.fragment = relative.fragment, target;
    }
    function equal(uriA, uriB, options) {
      let normalizedA = normalizeComparableURI(uriA, options), normalizedB = normalizeComparableURI(uriB, options);
      return normalizedA !== void 0 && normalizedB !== void 0 && normalizedA === normalizedB;
    }
    function serialize(cmpts, opts) {
      let component = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ""
      }, options = Object.assign({}, opts), uriTokens = [];
      component.scheme && (component.scheme = decodeValidScheme(component.scheme));
      let schemeHandler = getSchemeHandler(options.scheme || component.scheme);
      schemeHandler && schemeHandler.serialize && schemeHandler.serialize(component, options);
      let hasAuthority = component.userinfo !== void 0 || component.host !== void 0 || component.port !== void 0, pathNoScheme = !options.skipEscape && component.scheme === void 0 && !hasAuthority;
      component.path !== void 0 && (options.skipEscape ? component.path = normalizePercentEncoding(component.path) : component.path = serializePathEncoding(component.path, pathNoScheme)), options.reference !== "suffix" && component.scheme && (component.scheme = decodeValidScheme(component.scheme), uriTokens.push(component.scheme, ":"));
      let authority = recomposeAuthority(component);
      if (authority !== void 0 && (options.reference !== "suffix" && uriTokens.push("//"), uriTokens.push(authority), component.path && component.path[0] !== "/" && uriTokens.push("/")), component.path !== void 0) {
        let s = component.path;
        !options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath) && (s = removeDotSegments(s)), pathNoScheme && (s = serializePathEncoding(s, !0)), authority === void 0 && s[0] === "/" && s[1] === "/" && (s = "/%2F" + s.slice(2)), uriTokens.push(s);
      }
      return component.query !== void 0 && uriTokens.push("?", encodeQuery(component.query)), component.fragment !== void 0 && uriTokens.push("#", encodeFragment(component.fragment)), uriTokens.join("");
    }
    var URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, AUTHORITY_PREFIX = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, AUTHORITY_INTRODUCER_REGION = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function getParseError(parsed, matches) {
      if (matches[2] !== void 0 && parsed.path && parsed.path[0] !== "/")
        return 'URI path must start with "/" when authority is present.';
      if (typeof parsed.port == "number" && (parsed.port < 0 || parsed.port > 65535))
        return "URI port is malformed.";
    }
    function hasMalformedPercentEncoding(component) {
      if (component === void 0) return !1;
      let percent = component.indexOf("%");
      for (; percent !== -1; ) {
        if (percent + 2 >= component.length || !/^[\da-f]{2}$/iu.test(component.slice(percent + 1, percent + 3)))
          return !0;
        percent = component.indexOf("%", percent + 3);
      }
      return !1;
    }
    function isIPLiteral(host) {
      return host[0] === "[" && host[host.length - 1] === "]";
    }
    function hasMalformedComponentPercentEncoding(matches) {
      let host = matches[4];
      return hasMalformedPercentEncoding(matches[3]) || host !== void 0 && !isIPLiteral(host) && hasMalformedPercentEncoding(host) || hasMalformedPercentEncoding(matches[6]) || hasMalformedPercentEncoding(matches[7]) || hasMalformedPercentEncoding(matches[8]);
    }
    function canonicalizeHost(parsed, options, schemeHandler, isIP) {
      if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport) && parsed.host && !isIPLiteral(parsed.host) && (options.domainHost || schemeHandler && schemeHandler.domainHost) && isIP === !1 && nonSimpleDomain(parsed.host))
        try {
          parsed.host = new URL("http://" + parsed.host).hostname;
        } catch (e) {
          return parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e, !0;
        }
      return !1;
    }
    function parseWithStatus(uri, opts) {
      let options = Object.assign({}, opts), parsed = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
      }, malformedAuthorityOrPort = !1, malformedPercentEncoding = !1, malformedSchemeSpecific = !1, malformedHost = !1, malformedIPLiteral = !1, malformedScheme = !1, isIP = !1;
      options.reference === "suffix" && (options.scheme ? uri = options.scheme + ":" + uri : uri = "//" + uri);
      let authorityMatch = uri.match(AUTHORITY_PREFIX);
      authorityMatch !== null && authorityMatch[1].indexOf("\\") !== -1 && (parsed.error = "URI authority must not contain a literal backslash.", malformedAuthorityOrPort = !0);
      let introducerMatch = uri.match(AUTHORITY_INTRODUCER_REGION);
      if (introducerMatch !== null) {
        let region = introducerMatch[1], normalizedRegion = region.replace(/[\t\n\r]/g, "");
        normalizedRegion.length >= 2 && (normalizedRegion.slice(0, 2) !== "//" ? (parsed.error = parsed.error || "URI authority must not contain a literal backslash.", malformedAuthorityOrPort = !0) : region.length !== normalizedRegion.length && (parsed.error = parsed.error || "URI authority introducer must not contain whitespace.", malformedAuthorityOrPort = !0));
      }
      let matches = uri.match(URI_PARSE);
      if (matches) {
        if (parsed.scheme = matches[1], parsed.userinfo = matches[3], parsed.host = matches[4], parsed.port = parseInt(matches[5], 10), parsed.path = matches[6] || "", parsed.query = matches[7], parsed.fragment = matches[8], parsed.scheme !== void 0) {
          let decodedScheme = unescape(parsed.scheme);
          VALID_SCHEME.test(decodedScheme) ? parsed.scheme = decodedScheme.toLowerCase() : (parsed.error = parsed.error || MALFORMED_SCHEME_ERROR, malformedScheme = !0);
        }
        malformedPercentEncoding = hasMalformedComponentPercentEncoding(matches), malformedPercentEncoding && (parsed.error = parsed.error || "URI contains malformed percent-encoding."), isNaN(parsed.port) && (parsed.port = matches[5]);
        let parseError = getParseError(parsed, matches);
        if (parseError !== void 0 && (parsed.error = parsed.error || parseError, malformedAuthorityOrPort = !0), parsed.host)
          if (isIPv4(parsed.host) === !1) {
            let bracketedIPLiteral = isIPLiteral(parsed.host), hasIPLiteralBracket = parsed.host.indexOf("[") !== -1 || parsed.host.indexOf("]") !== -1, ipv6result = normalizeIPv6(parsed.host);
            isIP = ipv6result.isIPV6 || ipv6result.isIPVFuture === !0, malformedIPLiteral = hasIPLiteralBracket && (!bracketedIPLiteral || ipv6result.error === !0), parsed.host = isIP ? ipv6result.host : ipv6result.host.toLowerCase(), malformedIPLiteral && (parsed.error = parsed.error || "URI host is malformed.", malformedAuthorityOrPort = !0);
          } else
            isIP = !0;
        parsed.scheme === void 0 && parsed.userinfo === void 0 && parsed.host === void 0 && parsed.port === void 0 && parsed.query === void 0 && !parsed.path ? parsed.reference = "same-document" : parsed.scheme === void 0 ? parsed.reference = "relative" : parsed.fragment === void 0 ? parsed.reference = "absolute" : parsed.reference = "uri", options.reference && options.reference !== "suffix" && options.reference !== parsed.reference && (parsed.error = parsed.error || "URI is not a " + options.reference + " reference.");
        let schemeHandler = getSchemeHandler(options.scheme || parsed.scheme);
        if (malformedIPLiteral || (malformedHost = canonicalizeHost(parsed, options, schemeHandler, isIP)), uri.indexOf("%") !== -1 && parsed.host !== void 0 && !malformedIPLiteral) {
          let host = isIP ? parsed.host : normalizePercentEncoding(parsed.host, !0);
          isIP || (host = normalizePercentEncoding(host.toLowerCase())), parsed.host = reescapeHostDelimiters(host, isIP);
        }
        (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) && (parsed.path && (parsed.path = normalizePathEncoding(parsed.path)), parsed.query && (parsed.query = normalizeQueryFragmentEncoding(parsed.query)), parsed.fragment && (parsed.fragment = normalizeQueryFragmentEncoding(parsed.fragment))), schemeHandler && schemeHandler.parse && (schemeHandler.parse(parsed, options), schemeHandler === SCHEMES.urn && parsed.nid === void 0 && (malformedSchemeSpecific = !0));
      } else
        parsed.error = parsed.error || "URI can not be parsed.";
      return { parsed, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme };
    }
    function parse3(uri, opts) {
      return parseWithStatus(uri, opts).parsed;
    }
    function normalizeString(uri, opts) {
      return normalizeStringWithStatus(uri, opts).normalized;
    }
    function normalizeStringWithStatus(uri, opts) {
      let { parsed, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme } = parseWithStatus(uri, opts);
      return {
        normalized: malformedAuthorityOrPort || malformedPercentEncoding || malformedSchemeSpecific || malformedHost || malformedScheme ? uri : serialize(parsed, opts),
        malformedAuthorityOrPort,
        malformedPercentEncoding,
        malformedSchemeSpecific,
        malformedHost,
        malformedScheme
      };
    }
    function normalizeComparableURI(uri, opts) {
      if (typeof uri != "string" && typeof uri != "object")
        return;
      let value;
      try {
        value = typeof uri == "string" ? uri : serialize(uri, opts);
      } catch {
        return;
      }
      let { normalized, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme } = normalizeStringWithStatus(value, opts);
      return malformedAuthorityOrPort || malformedPercentEncoding || malformedSchemeSpecific || malformedHost || malformedScheme ? void 0 : normalized;
    }
    var fastUri = {
      SCHEMES,
      normalize: normalize2,
      resolve: resolve3,
      resolveComponent,
      equal,
      serialize,
      parse: parse3
    };
    module.exports = fastUri;
    module.exports.default = fastUri;
    module.exports.fastUri = fastUri;
  }
});

// node_modules/ajv/dist/runtime/uri.js
var require_uri = __commonJS({
  "node_modules/ajv/dist/runtime/uri.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var uri = require_fast_uri();
    uri.code = 'require("ajv/dist/runtime/uri").default';
    exports.default = uri;
  }
});

// node_modules/ajv/dist/core.js
var require_core = __commonJS({
  "node_modules/ajv/dist/core.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: !0, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: !0, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: !0, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: !0, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: !0, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: !0, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: !0, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error(), ref_error_1 = require_ref_error(), rules_1 = require_rules(), compile_1 = require_compile(), codegen_2 = require_codegen(), resolve_1 = require_resolve(), dataType_1 = require_dataType(), util_1 = require_util(), $dataRefSchema = require_data(), uri_1 = require_uri(), defaultRegExp = (str, flags) => new RegExp(str, flags);
    defaultRegExp.code = "new RegExp";
    var META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"], EXT_SCOPE_NAMES = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), removedOptions = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, deprecatedOptions = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, MAX_EXPRESSION = 200;
    function requiredOptions(o) {
      var _a3, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
      let s = o.strict, _optz = (_a3 = o.code) === null || _a3 === void 0 ? void 0 : _a3.optimize, optimize = _optz === !0 || _optz === void 0 ? 1 : _optz || 0, regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp, uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
      return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : !0,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : !0,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : !1,
        code: o.code ? { ...o.code, optimize, regExp } : { optimize, regExp },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : !0,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : !0,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : !0,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : !0,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : !0,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : !0,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : !0,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : !0,
        uriResolver
      };
    }
    var Ajv2 = class {
      constructor(opts = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), opts = this.opts = { ...opts, ...requiredOptions(opts) };
        let { es5, lines } = this.opts.code;
        this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines }), this.logger = getLogger(opts.logger);
        let formatOpt = opts.validateFormats;
        opts.validateFormats = !1, this.RULES = (0, rules_1.getRules)(), checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED"), checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn"), this._metaOpts = getMetaSchemaOptions.call(this), opts.formats && addInitialFormats.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), opts.keywords && addInitialKeywords.call(this, opts.keywords), typeof opts.meta == "object" && this.addMetaSchema(opts.meta), addInitialSchemas.call(this), opts.validateFormats = formatOpt;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        let { $data, meta: meta2, schemaId } = this.opts, _dataRefSchema = $dataRefSchema;
        schemaId === "id" && (_dataRefSchema = { ...$dataRefSchema }, _dataRefSchema.id = _dataRefSchema.$id, delete _dataRefSchema.$id), meta2 && $data && this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], !1);
      }
      defaultMeta() {
        let { meta: meta2, schemaId } = this.opts;
        return this.opts.defaultMeta = typeof meta2 == "object" ? meta2[schemaId] || meta2 : void 0;
      }
      validate(schemaKeyRef, data) {
        let v;
        if (typeof schemaKeyRef == "string") {
          if (v = this.getSchema(schemaKeyRef), !v)
            throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        } else
          v = this.compile(schemaKeyRef);
        let valid = v(data);
        return "$async" in v || (this.errors = v.errors), valid;
      }
      compile(schema, _meta) {
        let sch = this._addSchema(schema, _meta);
        return sch.validate || this._compileSchemaEnv(sch);
      }
      compileAsync(schema, meta2) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        let { loadSchema } = this.opts;
        return runCompileAsync.call(this, schema, meta2);
        async function runCompileAsync(_schema, _meta) {
          await loadMetaSchema.call(this, _schema.$schema);
          let sch = this._addSchema(_schema, _meta);
          return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
          $ref && !this.getSchema($ref) && await runCompileAsync.call(this, { $ref }, !0);
        }
        async function _compileAsync(sch) {
          try {
            return this._compileSchemaEnv(sch);
          } catch (e) {
            if (!(e instanceof ref_error_1.default))
              throw e;
            return checkLoaded.call(this, e), await loadMissingSchema.call(this, e.missingSchema), _compileAsync.call(this, sch);
          }
        }
        function checkLoaded({ missingSchema: ref, missingRef }) {
          if (this.refs[ref])
            throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
        }
        async function loadMissingSchema(ref) {
          let _schema = await _loadSchema.call(this, ref);
          this.refs[ref] || await loadMetaSchema.call(this, _schema.$schema), this.refs[ref] || this.addSchema(_schema, ref, meta2);
        }
        async function _loadSchema(ref) {
          let p = this._loading[ref];
          if (p)
            return p;
          try {
            return await (this._loading[ref] = loadSchema(ref));
          } finally {
            delete this._loading[ref];
          }
        }
      }
      // Adds schema to the instance
      addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema) {
        if (Array.isArray(schema)) {
          for (let sch of schema)
            this.addSchema(sch, void 0, _meta, _validateSchema);
          return this;
        }
        let id;
        if (typeof schema == "object") {
          let { schemaId } = this.opts;
          if (id = schema[schemaId], id !== void 0 && typeof id != "string")
            throw new Error(`schema ${schemaId} must be string`);
        }
        return key = (0, resolve_1.normalizeId)(key || id), this._checkUnique(key), this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema) {
        return this.addSchema(schema, key, !0, _validateSchema), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(schema, throwOrLogError) {
        if (typeof schema == "boolean")
          return !0;
        let $schema;
        if ($schema = schema.$schema, $schema !== void 0 && typeof $schema != "string")
          throw new Error("$schema must be a string");
        if ($schema = $schema || this.opts.defaultMeta || this.defaultMeta(), !$schema)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        let valid = this.validate($schema, schema);
        if (!valid && throwOrLogError) {
          let message = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(message);
          else
            throw new Error(message);
        }
        return valid;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(keyRef) {
        let sch;
        for (; typeof (sch = getSchEnv.call(this, keyRef)) == "string"; )
          keyRef = sch;
        if (sch === void 0) {
          let { schemaId } = this.opts, root = new compile_1.SchemaEnv({ schema: {}, schemaId });
          if (sch = compile_1.resolveSchema.call(this, root, keyRef), !sch)
            return;
          this.refs[keyRef] = sch;
        }
        return sch.validate || this._compileSchemaEnv(sch);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp)
          return this._removeAllSchemas(this.schemas, schemaKeyRef), this._removeAllSchemas(this.refs, schemaKeyRef), this;
        switch (typeof schemaKeyRef) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            let sch = getSchEnv.call(this, schemaKeyRef);
            return typeof sch == "object" && this._cache.delete(sch.schema), delete this.schemas[schemaKeyRef], delete this.refs[schemaKeyRef], this;
          }
          case "object": {
            let cacheKey = schemaKeyRef;
            this._cache.delete(cacheKey);
            let id = schemaKeyRef[this.opts.schemaId];
            return id && (id = (0, resolve_1.normalizeId)(id), delete this.schemas[id], delete this.refs[id]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(definitions) {
        for (let def of definitions)
          this.addKeyword(def);
        return this;
      }
      addKeyword(kwdOrDef, def) {
        let keyword;
        if (typeof kwdOrDef == "string")
          keyword = kwdOrDef, typeof def == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), def.keyword = keyword);
        else if (typeof kwdOrDef == "object" && def === void 0) {
          if (def = kwdOrDef, keyword = def.keyword, Array.isArray(keyword) && !keyword.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (checkKeyword.call(this, keyword, def), !def)
          return (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd)), this;
        keywordMetaschema.call(this, def);
        let definition = {
          ...def,
          type: (0, dataType_1.getJSONTypes)(def.type),
          schemaType: (0, dataType_1.getJSONTypes)(def.schemaType)
        };
        return (0, util_1.eachItem)(keyword, definition.type.length === 0 ? (k) => addRule.call(this, k, definition) : (k) => definition.type.forEach((t) => addRule.call(this, k, definition, t))), this;
      }
      getKeyword(keyword) {
        let rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
      }
      // Remove keyword
      removeKeyword(keyword) {
        let { RULES: RULES2 } = this;
        delete RULES2.keywords[keyword], delete RULES2.all[keyword];
        for (let group of RULES2.rules) {
          let i = group.rules.findIndex((rule) => rule.keyword === keyword);
          i >= 0 && group.rules.splice(i, 1);
        }
        return this;
      }
      // Add format
      addFormat(name, format) {
        return typeof format == "string" && (format = new RegExp(format)), this.formats[name] = format, this;
      }
      errorsText(errors = this.errors, { separator = ", ", dataVar = "data" } = {}) {
        return !errors || errors.length === 0 ? "No errors" : errors.map((e) => `${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg) => text + separator + msg);
      }
      $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        let rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (let jsonPointer of keywordsJsonPointers) {
          let segments = jsonPointer.split("/").slice(1), keywords = metaSchema;
          for (let seg of segments)
            keywords = keywords[seg];
          for (let key in rules) {
            let rule = rules[key];
            if (typeof rule != "object")
              continue;
            let { $data } = rule.definition, schema = keywords[key];
            $data && schema && (keywords[key] = schemaOrData(schema));
          }
        }
        return metaSchema;
      }
      _removeAllSchemas(schemas, regex) {
        for (let keyRef in schemas) {
          let sch = schemas[keyRef];
          (!regex || regex.test(keyRef)) && (typeof sch == "string" ? delete schemas[keyRef] : sch && !sch.meta && (this._cache.delete(sch.schema), delete schemas[keyRef]));
        }
      }
      _addSchema(schema, meta2, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id, { schemaId } = this.opts;
        if (typeof schema == "object")
          id = schema[schemaId];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof schema != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema);
        if (sch !== void 0)
          return sch;
        baseId = (0, resolve_1.normalizeId)(id || baseId);
        let localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
        return sch = new compile_1.SchemaEnv({ schema, schemaId, meta: meta2, baseId, localRefs }), this._cache.set(sch.schema, sch), addSchema && !baseId.startsWith("#") && (baseId && this._checkUnique(baseId), this.refs[baseId] = sch), validateSchema && this.validateSchema(schema, !0), sch;
      }
      _checkUnique(id) {
        if (this.schemas[id] || this.refs[id])
          throw new Error(`schema with key or id "${id}" already exists`);
      }
      _compileSchemaEnv(sch) {
        if (sch.meta ? this._compileMetaSchema(sch) : compile_1.compileSchema.call(this, sch), !sch.validate)
          throw new Error("ajv implementation error");
        return sch.validate;
      }
      _compileMetaSchema(sch) {
        let currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
          compile_1.compileSchema.call(this, sch);
        } finally {
          this.opts = currentOpts;
        }
      }
    };
    Ajv2.ValidationError = validation_error_1.default;
    Ajv2.MissingRefError = ref_error_1.default;
    exports.default = Ajv2;
    function checkOptions(checkOpts, options, msg, log2 = "error") {
      for (let key in checkOpts) {
        let opt = key;
        opt in options && this.logger[log2](`${msg}: option ${key}. ${checkOpts[opt]}`);
      }
    }
    function getSchEnv(keyRef) {
      return keyRef = (0, resolve_1.normalizeId)(keyRef), this.schemas[keyRef] || this.refs[keyRef];
    }
    function addInitialSchemas() {
      let optsSchemas = this.opts.schemas;
      if (optsSchemas)
        if (Array.isArray(optsSchemas))
          this.addSchema(optsSchemas);
        else
          for (let key in optsSchemas)
            this.addSchema(optsSchemas[key], key);
    }
    function addInitialFormats() {
      for (let name in this.opts.formats) {
        let format = this.opts.formats[name];
        format && this.addFormat(name, format);
      }
    }
    function addInitialKeywords(defs) {
      if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let keyword in defs) {
        let def = defs[keyword];
        def.keyword || (def.keyword = keyword), this.addKeyword(def);
      }
    }
    function getMetaSchemaOptions() {
      let metaOpts = { ...this.opts };
      for (let opt of META_IGNORE_OPTIONS)
        delete metaOpts[opt];
      return metaOpts;
    }
    var noLogs = { log() {
    }, warn() {
    }, error() {
    } };
    function getLogger(logger) {
      if (logger === !1)
        return noLogs;
      if (logger === void 0)
        return console;
      if (logger.log && logger.warn && logger.error)
        return logger;
      throw new Error("logger must implement log, warn and error methods");
    }
    var KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
    function checkKeyword(keyword, def) {
      let { RULES: RULES2 } = this;
      if ((0, util_1.eachItem)(keyword, (kwd) => {
        if (RULES2.keywords[kwd])
          throw new Error(`Keyword ${kwd} is already defined`);
        if (!KEYWORD_NAME.test(kwd))
          throw new Error(`Keyword ${kwd} has invalid name`);
      }), !!def && def.$data && !("code" in def || "validate" in def))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function addRule(keyword, definition, dataType) {
      var _a3;
      let post = definition?.post;
      if (dataType && post)
        throw new Error('keyword with "post" flag cannot have "type"');
      let { RULES: RULES2 } = this, ruleGroup = post ? RULES2.post : RULES2.rules.find(({ type: t }) => t === dataType);
      if (ruleGroup || (ruleGroup = { type: dataType, rules: [] }, RULES2.rules.push(ruleGroup)), RULES2.keywords[keyword] = !0, !definition)
        return;
      let rule = {
        keyword,
        definition: {
          ...definition,
          type: (0, dataType_1.getJSONTypes)(definition.type),
          schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType)
        }
      };
      definition.before ? addBeforeRule.call(this, ruleGroup, rule, definition.before) : ruleGroup.rules.push(rule), RULES2.all[keyword] = rule, (_a3 = definition.implements) === null || _a3 === void 0 || _a3.forEach((kwd) => this.addKeyword(kwd));
    }
    function addBeforeRule(ruleGroup, rule, before) {
      let i = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
      i >= 0 ? ruleGroup.rules.splice(i, 0, rule) : (ruleGroup.rules.push(rule), this.logger.warn(`rule ${before} is not defined`));
    }
    function keywordMetaschema(def) {
      let { metaSchema } = def;
      metaSchema !== void 0 && (def.$data && this.opts.$data && (metaSchema = schemaOrData(metaSchema)), def.validateSchema = this.compile(metaSchema, !0));
    }
    var $dataRef = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function schemaOrData(schema) {
      return { anyOf: [schema, $dataRef] };
    }
  }
});

// node_modules/ajv/dist/vocabularies/core/id.js
var require_id = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/id.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var def = {
      keyword: "id",
      code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/core/ref.js
var require_ref = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/ref.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.callRef = exports.getValidate = void 0;
    var ref_error_1 = require_ref_error(), code_1 = require_code2(), codegen_1 = require_codegen(), names_1 = require_names(), compile_1 = require_compile(), util_1 = require_util(), def = {
      keyword: "$ref",
      schemaType: "string",
      code(cxt) {
        let { gen, schema: $ref, it } = cxt, { baseId, schemaEnv: env, validateName, opts, self } = it, { root } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
          return callRootRef();
        let schOrEnv = compile_1.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === void 0)
          throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile_1.SchemaEnv)
          return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
          if (env === root)
            return callRef(cxt, validateName, env, env.$async);
          let rootName = gen.scopeValue("root", { ref: root });
          return callRef(cxt, (0, codegen_1._)`${rootName}.validate`, root, root.$async);
        }
        function callValidate(sch) {
          let v = getValidate(cxt, sch);
          callRef(cxt, v, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
          let schName = gen.scopeValue("schema", opts.code.source === !0 ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch }), valid = gen.name("valid"), schCxt = cxt.subschema({
            schema: sch,
            dataTypes: [],
            schemaPath: codegen_1.nil,
            topSchemaRef: schName,
            errSchemaPath: $ref
          }, valid);
          cxt.mergeEvaluated(schCxt), cxt.ok(valid);
        }
      }
    };
    function getValidate(cxt, sch) {
      let { gen } = cxt;
      return sch.validate ? gen.scopeValue("validate", { ref: sch.validate }) : (0, codegen_1._)`${gen.scopeValue("wrapper", { ref: sch })}.validate`;
    }
    exports.getValidate = getValidate;
    function callRef(cxt, v, sch, $async) {
      let { gen, it } = cxt, { allErrors, schemaEnv: env, opts } = it, passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
      $async ? callAsyncRef() : callSyncRef();
      function callAsyncRef() {
        if (!env.$async)
          throw new Error("async schema referenced by sync schema");
        let valid = gen.let("valid");
        gen.try(() => {
          gen.code((0, codegen_1._)`await ${(0, code_1.callValidateCode)(cxt, v, passCxt)}`), addEvaluatedFrom(v), allErrors || gen.assign(valid, !0);
        }, (e) => {
          gen.if((0, codegen_1._)`!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e)), addErrorsFrom(e), allErrors || gen.assign(valid, !1);
        }), cxt.ok(valid);
      }
      function callSyncRef() {
        cxt.result((0, code_1.callValidateCode)(cxt, v, passCxt), () => addEvaluatedFrom(v), () => addErrorsFrom(v));
      }
      function addErrorsFrom(source) {
        let errs = (0, codegen_1._)`${source}.errors`;
        gen.assign(names_1.default.vErrors, (0, codegen_1._)`${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`), gen.assign(names_1.default.errors, (0, codegen_1._)`${names_1.default.vErrors}.length`);
      }
      function addEvaluatedFrom(source) {
        var _a3;
        if (!it.opts.unevaluated)
          return;
        let schEvaluated = (_a3 = sch?.validate) === null || _a3 === void 0 ? void 0 : _a3.evaluated;
        if (it.props !== !0)
          if (schEvaluated && !schEvaluated.dynamicProps)
            schEvaluated.props !== void 0 && (it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props));
          else {
            let props = gen.var("props", (0, codegen_1._)`${source}.evaluated.props`);
            it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
          }
        if (it.items !== !0)
          if (schEvaluated && !schEvaluated.dynamicItems)
            schEvaluated.items !== void 0 && (it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items));
          else {
            let items = gen.var("items", (0, codegen_1._)`${source}.evaluated.items`);
            it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
          }
      }
    }
    exports.callRef = callRef;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/core/index.js
var require_core2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/core/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var id_1 = require_id(), ref_1 = require_ref(), core = [
      "$schema",
      "$id",
      "$defs",
      "$vocabulary",
      { keyword: "$comment" },
      "definitions",
      id_1.default,
      ref_1.default
    ];
    exports.default = core;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitNumber.js
var require_limitNumber = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitNumber.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), ops = codegen_1.operators, KWDs = {
      maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    }, error2 = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`must be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    }, def = {
      keyword: Object.keys(KWDs),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: error2,
      code(cxt) {
        let { keyword, data, schemaCode } = cxt;
        cxt.fail$data((0, codegen_1._)`${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/multipleOf.js
var require_multipleOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/multipleOf.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), error2 = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must be multiple of ${schemaCode}`,
      params: ({ schemaCode }) => (0, codegen_1._)`{multipleOf: ${schemaCode}}`
    }, def = {
      keyword: "multipleOf",
      type: "number",
      schemaType: "number",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, data, schemaCode, it } = cxt, prec = it.opts.multipleOfPrecision, res = gen.let("res"), invalid = prec ? (0, codegen_1._)`Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}` : (0, codegen_1._)`${res} !== parseInt(${res})`;
        cxt.fail$data((0, codegen_1._)`(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    function ucs2length(str) {
      let len = str.length, length = 0, pos = 0, value;
      for (; pos < len; )
        length++, value = str.charCodeAt(pos++), value >= 55296 && value <= 56319 && pos < len && (value = str.charCodeAt(pos), (value & 64512) === 56320 && pos++);
      return length;
    }
    exports.default = ucs2length;
    ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitLength.js
var require_limitLength = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitLength.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), ucs2length_1 = require_ucs2length(), error2 = {
      message({ keyword, schemaCode }) {
        let comp = keyword === "maxLength" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} characters`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    }, def = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: error2,
      code(cxt) {
        let { keyword, data, schemaCode, it } = cxt, op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT, len = it.opts.unicode === !1 ? (0, codegen_1._)`${data}.length` : (0, codegen_1._)`${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
        cxt.fail$data((0, codegen_1._)`${len} ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/pattern.js
var require_pattern = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/pattern.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var code_1 = require_code2(), util_1 = require_util(), codegen_1 = require_codegen(), error2 = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match pattern "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{pattern: ${schemaCode}}`
    }, def = {
      keyword: "pattern",
      type: "string",
      schemaType: "string",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, data, $data, schema, schemaCode, it } = cxt, u = it.opts.unicodeRegExp ? "u" : "";
        if ($data) {
          let { regExp } = it.opts.code, regExpCode = regExp.code === "new RegExp" ? (0, codegen_1._)`new RegExp` : (0, util_1.useFunc)(gen, regExp), valid = gen.let("valid");
          gen.try(() => gen.assign(valid, (0, codegen_1._)`${regExpCode}(${schemaCode}, ${u}).test(${data})`), () => gen.assign(valid, !1)), cxt.fail$data((0, codegen_1._)`!${valid}`);
        } else {
          let regExp = (0, code_1.usePattern)(cxt, schema);
          cxt.fail$data((0, codegen_1._)`!${regExp}.test(${data})`);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitProperties.js
var require_limitProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitProperties.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), error2 = {
      message({ keyword, schemaCode }) {
        let comp = keyword === "maxProperties" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} properties`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    }, def = {
      keyword: ["maxProperties", "minProperties"],
      type: "object",
      schemaType: "number",
      $data: !0,
      error: error2,
      code(cxt) {
        let { keyword, data, schemaCode } = cxt, op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`Object.keys(${data}).length ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/required.js
var require_required = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/required.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var code_1 = require_code2(), codegen_1 = require_codegen(), util_1 = require_util(), error2 = {
      message: ({ params: { missingProperty } }) => (0, codegen_1.str)`must have required property '${missingProperty}'`,
      params: ({ params: { missingProperty } }) => (0, codegen_1._)`{missingProperty: ${missingProperty}}`
    }, def = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, schema, schemaCode, data, $data, it } = cxt, { opts } = it;
        if (!$data && schema.length === 0)
          return;
        let useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors ? allErrorsMode() : exitOnErrorMode(), opts.strictRequired) {
          let props = cxt.parentSchema.properties, { definedProperties } = cxt.it;
          for (let requiredKey of schema)
            if (props?.[requiredKey] === void 0 && !definedProperties.has(requiredKey)) {
              let schemaPath = it.schemaEnv.baseId + it.errSchemaPath, msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
              (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
        }
        function allErrorsMode() {
          if (useLoop || $data)
            cxt.block$data(codegen_1.nil, loopAllRequired);
          else
            for (let prop of schema)
              (0, code_1.checkReportMissingProp)(cxt, prop);
        }
        function exitOnErrorMode() {
          let missing = gen.let("missing");
          if (useLoop || $data) {
            let valid = gen.let("valid", !0);
            cxt.block$data(valid, () => loopUntilMissing(missing, valid)), cxt.ok(valid);
          } else
            gen.if((0, code_1.checkMissingProp)(cxt, schema, missing)), (0, code_1.reportMissingProp)(cxt, missing), gen.else();
        }
        function loopAllRequired() {
          gen.forOf("prop", schemaCode, (prop) => {
            cxt.setParams({ missingProperty: prop }), gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
          });
        }
        function loopUntilMissing(missing, valid) {
          cxt.setParams({ missingProperty: missing }), gen.forOf(missing, schemaCode, () => {
            gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties)), gen.if((0, codegen_1.not)(valid), () => {
              cxt.error(), gen.break();
            });
          }, codegen_1.nil);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/limitItems.js
var require_limitItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/limitItems.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), error2 = {
      message({ keyword, schemaCode }) {
        let comp = keyword === "maxItems" ? "more" : "fewer";
        return (0, codegen_1.str)`must NOT have ${comp} than ${schemaCode} items`;
      },
      params: ({ schemaCode }) => (0, codegen_1._)`{limit: ${schemaCode}}`
    }, def = {
      keyword: ["maxItems", "minItems"],
      type: "array",
      schemaType: "number",
      $data: !0,
      error: error2,
      code(cxt) {
        let { keyword, data, schemaCode } = cxt, op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._)`${data}.length ${op} ${schemaCode}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/ajv/dist/runtime/equal.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports.default = equal;
  }
});

// node_modules/ajv/dist/vocabularies/validation/uniqueItems.js
var require_uniqueItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/uniqueItems.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var dataType_1 = require_dataType(), codegen_1 = require_codegen(), util_1 = require_util(), equal_1 = require_equal(), error2 = {
      message: ({ params: { i, j } }) => (0, codegen_1.str)`must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
      params: ({ params: { i, j } }) => (0, codegen_1._)`{i: ${i}, j: ${j}}`
    }, def = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, data, $data, schema, parentSchema, schemaCode, it } = cxt;
        if (!$data && !schema)
          return;
        let valid = gen.let("valid"), itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, (0, codegen_1._)`${schemaCode} === false`), cxt.ok(valid);
        function validateUniqueItems() {
          let i = gen.let("i", (0, codegen_1._)`${data}.length`), j = gen.let("j");
          cxt.setParams({ i, j }), gen.assign(valid, !0), gen.if((0, codegen_1._)`${i} > 1`, () => (canOptimize() ? loopN : loopN2)(i, j));
        }
        function canOptimize() {
          return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
        }
        function loopN(i, j) {
          let item = gen.name("item"), wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong), indices = gen.const("indices", (0, codegen_1._)`{}`);
          gen.for((0, codegen_1._)`;${i}--;`, () => {
            gen.let(item, (0, codegen_1._)`${data}[${i}]`), gen.if(wrongType, (0, codegen_1._)`continue`), itemTypes.length > 1 && gen.if((0, codegen_1._)`typeof ${item} == "string"`, (0, codegen_1._)`${item} += "_"`), gen.if((0, codegen_1._)`typeof ${indices}[${item}] == "number"`, () => {
              gen.assign(j, (0, codegen_1._)`${indices}[${item}]`), cxt.error(), gen.assign(valid, !1).break();
            }).code((0, codegen_1._)`${indices}[${item}] = ${i}`);
          });
        }
        function loopN2(i, j) {
          let eql = (0, util_1.useFunc)(gen, equal_1.default), outer = gen.name("outer");
          gen.label(outer).for((0, codegen_1._)`;${i}--;`, () => gen.for((0, codegen_1._)`${j} = ${i}; ${j}--;`, () => gen.if((0, codegen_1._)`${eql}(${data}[${i}], ${data}[${j}])`, () => {
            cxt.error(), gen.assign(valid, !1).break(outer);
          })));
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/const.js
var require_const = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/const.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), equal_1 = require_equal(), error2 = {
      message: "must be equal to constant",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValue: ${schemaCode}}`
    }, def = {
      keyword: "const",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, data, $data, schemaCode, schema } = cxt;
        $data || schema && typeof schema == "object" ? cxt.fail$data((0, codegen_1._)`!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`) : cxt.fail((0, codegen_1._)`${schema} !== ${data}`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/enum.js
var require_enum = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/enum.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), equal_1 = require_equal(), error2 = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode }) => (0, codegen_1._)`{allowedValues: ${schemaCode}}`
    }, def = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, data, $data, schema, schemaCode, it } = cxt;
        if (!$data && schema.length === 0)
          throw new Error("enum must have non-empty array");
        let useLoop = schema.length >= it.opts.loopEnum, eql, getEql = () => eql ?? (eql = (0, util_1.useFunc)(gen, equal_1.default)), valid;
        if (useLoop || $data)
          valid = gen.let("valid"), cxt.block$data(valid, loopEnum);
        else {
          if (!Array.isArray(schema))
            throw new Error("ajv implementation error");
          let vSchema = gen.const("vSchema", schemaCode);
          valid = (0, codegen_1.or)(...schema.map((_x, i) => equalCode(vSchema, i)));
        }
        cxt.pass(valid);
        function loopEnum() {
          gen.assign(valid, !1), gen.forOf("v", schemaCode, (v) => gen.if((0, codegen_1._)`${getEql()}(${data}, ${v})`, () => gen.assign(valid, !0).break()));
        }
        function equalCode(vSchema, i) {
          let sch = schema[i];
          return typeof sch == "object" && sch !== null ? (0, codegen_1._)`${getEql()}(${data}, ${vSchema}[${i}])` : (0, codegen_1._)`${data} === ${sch}`;
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/validation/index.js
var require_validation = __commonJS({
  "node_modules/ajv/dist/vocabularies/validation/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var limitNumber_1 = require_limitNumber(), multipleOf_1 = require_multipleOf(), limitLength_1 = require_limitLength(), pattern_1 = require_pattern(), limitProperties_1 = require_limitProperties(), required_1 = require_required(), limitItems_1 = require_limitItems(), uniqueItems_1 = require_uniqueItems(), const_1 = require_const(), enum_1 = require_enum(), validation = [
      // number
      limitNumber_1.default,
      multipleOf_1.default,
      // string
      limitLength_1.default,
      pattern_1.default,
      // object
      limitProperties_1.default,
      required_1.default,
      // array
      limitItems_1.default,
      uniqueItems_1.default,
      // any
      { keyword: "type", schemaType: ["string", "array"] },
      { keyword: "nullable", schemaType: "boolean" },
      const_1.default,
      enum_1.default
    ];
    exports.default = validation;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/additionalItems.js
var require_additionalItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/additionalItems.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateAdditionalItems = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util(), error2 = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    }, def = {
      keyword: "additionalItems",
      type: "array",
      schemaType: ["boolean", "object"],
      before: "uniqueItems",
      error: error2,
      code(cxt) {
        let { parentSchema, it } = cxt, { items } = parentSchema;
        if (!Array.isArray(items)) {
          (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
          return;
        }
        validateAdditionalItems(cxt, items);
      }
    };
    function validateAdditionalItems(cxt, items) {
      let { gen, schema, data, keyword, it } = cxt;
      it.items = !0;
      let len = gen.const("len", (0, codegen_1._)`${data}.length`);
      if (schema === !1)
        cxt.setParams({ len: items.length }), cxt.pass((0, codegen_1._)`${len} <= ${items.length}`);
      else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
        let valid = gen.var("valid", (0, codegen_1._)`${len} <= ${items.length}`);
        gen.if((0, codegen_1.not)(valid), () => validateItems(valid)), cxt.ok(valid);
      }
      function validateItems(valid) {
        gen.forRange("i", items.length, len, (i) => {
          cxt.subschema({ keyword, dataProp: i, dataPropType: util_1.Type.Num }, valid), it.allErrors || gen.if((0, codegen_1.not)(valid), () => gen.break());
        });
      }
    }
    exports.validateAdditionalItems = validateAdditionalItems;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/items.js
var require_items = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/items.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateTuple = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util(), code_1 = require_code2(), def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "array", "boolean"],
      before: "uniqueItems",
      code(cxt) {
        let { schema, it } = cxt;
        if (Array.isArray(schema))
          return validateTuple(cxt, "additionalItems", schema);
        it.items = !0, !(0, util_1.alwaysValidSchema)(it, schema) && cxt.ok((0, code_1.validateArray)(cxt));
      }
    };
    function validateTuple(cxt, extraItems, schArr = cxt.schema) {
      let { gen, parentSchema, data, keyword, it } = cxt;
      checkStrictTuple(parentSchema), it.opts.unevaluated && schArr.length && it.items !== !0 && (it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items));
      let valid = gen.name("valid"), len = gen.const("len", (0, codegen_1._)`${data}.length`);
      schArr.forEach((sch, i) => {
        (0, util_1.alwaysValidSchema)(it, sch) || (gen.if((0, codegen_1._)`${len} > ${i}`, () => cxt.subschema({
          keyword,
          schemaProp: i,
          dataProp: i
        }, valid)), cxt.ok(valid));
      });
      function checkStrictTuple(sch) {
        let { opts, errSchemaPath } = it, l = schArr.length, fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === !1);
        if (opts.strictTuples && !fullTuple) {
          let msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
          (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
        }
      }
    }
    exports.validateTuple = validateTuple;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/prefixItems.js
var require_prefixItems = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/prefixItems.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var items_1 = require_items(), def = {
      keyword: "prefixItems",
      type: "array",
      schemaType: ["array"],
      before: "uniqueItems",
      code: (cxt) => (0, items_1.validateTuple)(cxt, "items")
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/items2020.js
var require_items2020 = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/items2020.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), code_1 = require_code2(), additionalItems_1 = require_additionalItems(), error2 = {
      message: ({ params: { len } }) => (0, codegen_1.str)`must NOT have more than ${len} items`,
      params: ({ params: { len } }) => (0, codegen_1._)`{limit: ${len}}`
    }, def = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: error2,
      code(cxt) {
        let { schema, parentSchema, it } = cxt, { prefixItems } = parentSchema;
        it.items = !0, !(0, util_1.alwaysValidSchema)(it, schema) && (prefixItems ? (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems) : cxt.ok((0, code_1.validateArray)(cxt)));
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/contains.js
var require_contains = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/contains.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), error2 = {
      message: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1.str)`must contain at least ${min} valid item(s)` : (0, codegen_1.str)`must contain at least ${min} and no more than ${max} valid item(s)`,
      params: ({ params: { min, max } }) => max === void 0 ? (0, codegen_1._)`{minContains: ${min}}` : (0, codegen_1._)`{minContains: ${min}, maxContains: ${max}}`
    }, def = {
      keyword: "contains",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      trackErrors: !0,
      error: error2,
      code(cxt) {
        let { gen, schema, parentSchema, data, it } = cxt, min, max, { minContains, maxContains } = parentSchema;
        it.opts.next ? (min = minContains === void 0 ? 1 : minContains, max = maxContains) : min = 1;
        let len = gen.const("len", (0, codegen_1._)`${data}.length`);
        if (cxt.setParams({ min, max }), max === void 0 && min === 0) {
          (0, util_1.checkStrictMode)(it, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
          return;
        }
        if (max !== void 0 && min > max) {
          (0, util_1.checkStrictMode)(it, '"minContains" > "maxContains" is always invalid'), cxt.fail();
          return;
        }
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          let cond = (0, codegen_1._)`${len} >= ${min}`;
          max !== void 0 && (cond = (0, codegen_1._)`${cond} && ${len} <= ${max}`), cxt.pass(cond);
          return;
        }
        it.items = !0;
        let valid = gen.name("valid");
        max === void 0 && min === 1 ? validateItems(valid, () => gen.if(valid, () => gen.break())) : min === 0 ? (gen.let(valid, !0), max !== void 0 && gen.if((0, codegen_1._)`${data}.length > 0`, validateItemsWithCount)) : (gen.let(valid, !1), validateItemsWithCount()), cxt.result(valid, () => cxt.reset());
        function validateItemsWithCount() {
          let schValid = gen.name("_valid"), count = gen.let("count", 0);
          validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
        }
        function validateItems(_valid, block) {
          gen.forRange("i", 0, len, (i) => {
            cxt.subschema({
              keyword: "contains",
              dataProp: i,
              dataPropType: util_1.Type.Num,
              compositeRule: !0
            }, _valid), block();
          });
        }
        function checkLimits(count) {
          gen.code((0, codegen_1._)`${count}++`), max === void 0 ? gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, !0).break()) : (gen.if((0, codegen_1._)`${count} > ${max}`, () => gen.assign(valid, !1).break()), min === 1 ? gen.assign(valid, !0) : gen.if((0, codegen_1._)`${count} >= ${min}`, () => gen.assign(valid, !0)));
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/dependencies.js
var require_dependencies = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/dependencies.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
    var codegen_1 = require_codegen(), util_1 = require_util(), code_1 = require_code2();
    exports.error = {
      message: ({ params: { property, depsCount, deps } }) => {
        let property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str)`must have ${property_ies} ${deps} when property ${property} is present`;
      },
      params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._)`{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`
      // TODO change to reference
    };
    var def = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: exports.error,
      code(cxt) {
        let [propDeps, schDeps] = splitDependencies(cxt);
        validatePropertyDeps(cxt, propDeps), validateSchemaDeps(cxt, schDeps);
      }
    };
    function splitDependencies({ schema }) {
      let propertyDeps = {}, schemaDeps = {};
      for (let key in schema) {
        if (key === "__proto__")
          continue;
        let deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
      }
      return [propertyDeps, schemaDeps];
    }
    function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
      let { gen, data, it } = cxt;
      if (Object.keys(propertyDeps).length === 0)
        return;
      let missing = gen.let("missing");
      for (let prop in propertyDeps) {
        let deps = propertyDeps[prop];
        if (deps.length === 0)
          continue;
        let hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
          property: prop,
          depsCount: deps.length,
          deps: deps.join(", ")
        }), it.allErrors ? gen.if(hasProperty, () => {
          for (let depProp of deps)
            (0, code_1.checkReportMissingProp)(cxt, depProp);
        }) : (gen.if((0, codegen_1._)`${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`), (0, code_1.reportMissingProp)(cxt, missing), gen.else());
      }
    }
    exports.validatePropertyDeps = validatePropertyDeps;
    function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
      let { gen, data, keyword, it } = cxt, valid = gen.name("valid");
      for (let prop in schemaDeps)
        (0, util_1.alwaysValidSchema)(it, schemaDeps[prop]) || (gen.if(
          (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties),
          () => {
            let schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
          },
          () => gen.var(valid, !0)
          // TODO var
        ), cxt.ok(valid));
    }
    exports.validateSchemaDeps = validateSchemaDeps;
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/propertyNames.js
var require_propertyNames = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/propertyNames.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), error2 = {
      message: "property name must be valid",
      params: ({ params }) => (0, codegen_1._)`{propertyName: ${params.propertyName}}`
    }, def = {
      keyword: "propertyNames",
      type: "object",
      schemaType: ["object", "boolean"],
      error: error2,
      code(cxt) {
        let { gen, schema, data, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
          return;
        let valid = gen.name("valid");
        gen.forIn("key", data, (key) => {
          cxt.setParams({ propertyName: key }), cxt.subschema({
            keyword: "propertyNames",
            data: key,
            dataTypes: ["string"],
            propertyName: key,
            compositeRule: !0
          }, valid), gen.if((0, codegen_1.not)(valid), () => {
            cxt.error(!0), it.allErrors || gen.break();
          });
        }), cxt.ok(valid);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js
var require_additionalProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var code_1 = require_code2(), codegen_1 = require_codegen(), names_1 = require_names(), util_1 = require_util(), error2 = {
      message: "must NOT have additional properties",
      params: ({ params }) => (0, codegen_1._)`{additionalProperty: ${params.additionalProperty}}`
    }, def = {
      keyword: "additionalProperties",
      type: ["object"],
      schemaType: ["boolean", "object"],
      allowUndefined: !0,
      trackErrors: !0,
      error: error2,
      code(cxt) {
        let { gen, schema, parentSchema, data, errsCount, it } = cxt;
        if (!errsCount)
          throw new Error("ajv implementation error");
        let { allErrors, opts } = it;
        if (it.props = !0, opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema))
          return;
        let props = (0, code_1.allSchemaProperties)(parentSchema.properties), patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties(), cxt.ok((0, codegen_1._)`${errsCount} === ${names_1.default.errors}`);
        function checkAdditionalProperties() {
          gen.forIn("key", data, (key) => {
            !props.length && !patProps.length ? additionalPropertyCode(key) : gen.if(isAdditional(key), () => additionalPropertyCode(key));
          });
        }
        function isAdditional(key) {
          let definedProp;
          if (props.length > 8) {
            let propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
            definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
          } else props.length ? definedProp = (0, codegen_1.or)(...props.map((p) => (0, codegen_1._)`${key} === ${p}`)) : definedProp = codegen_1.nil;
          return patProps.length && (definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p) => (0, codegen_1._)`${(0, code_1.usePattern)(cxt, p)}.test(${key})`))), (0, codegen_1.not)(definedProp);
        }
        function deleteAdditional(key) {
          gen.code((0, codegen_1._)`delete ${data}[${key}]`);
        }
        function additionalPropertyCode(key) {
          if (opts.removeAdditional === "all" || opts.removeAdditional && schema === !1) {
            deleteAdditional(key);
            return;
          }
          if (schema === !1) {
            cxt.setParams({ additionalProperty: key }), cxt.error(), allErrors || gen.break();
            return;
          }
          if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
            let valid = gen.name("valid");
            opts.removeAdditional === "failing" ? (applyAdditionalSchema(key, valid, !1), gen.if((0, codegen_1.not)(valid), () => {
              cxt.reset(), deleteAdditional(key);
            })) : (applyAdditionalSchema(key, valid), allErrors || gen.if((0, codegen_1.not)(valid), () => gen.break()));
          }
        }
        function applyAdditionalSchema(key, valid, errors) {
          let subschema = {
            keyword: "additionalProperties",
            dataProp: key,
            dataPropType: util_1.Type.Str
          };
          errors === !1 && Object.assign(subschema, {
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          }), cxt.subschema(subschema, valid);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/properties.js
var require_properties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/properties.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var validate_1 = require_validate(), code_1 = require_code2(), util_1 = require_util(), additionalProperties_1 = require_additionalProperties(), def = {
      keyword: "properties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        let { gen, schema, parentSchema, data, it } = cxt;
        it.opts.removeAdditional === "all" && parentSchema.additionalProperties === void 0 && additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
        let allProps = (0, code_1.allSchemaProperties)(schema);
        for (let prop of allProps)
          it.definedProperties.add(prop);
        it.opts.unevaluated && allProps.length && it.props !== !0 && (it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props));
        let properties = allProps.filter((p) => !(0, util_1.alwaysValidSchema)(it, schema[p]));
        if (properties.length === 0)
          return;
        let valid = gen.name("valid");
        for (let prop of properties)
          hasDefault(prop) ? applyPropertySchema(prop) : (gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties)), applyPropertySchema(prop), it.allErrors || gen.else().var(valid, !0), gen.endIf()), cxt.it.definedProperties.add(prop), cxt.ok(valid);
        function hasDefault(prop) {
          return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== void 0;
        }
        function applyPropertySchema(prop) {
          cxt.subschema({
            keyword: "properties",
            schemaProp: prop,
            dataProp: prop
          }, valid);
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/patternProperties.js
var require_patternProperties = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/patternProperties.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var code_1 = require_code2(), codegen_1 = require_codegen(), util_1 = require_util(), util_2 = require_util(), def = {
      keyword: "patternProperties",
      type: "object",
      schemaType: "object",
      code(cxt) {
        let { gen, schema, data, parentSchema, it } = cxt, { opts } = it, patterns = (0, code_1.allSchemaProperties)(schema), alwaysValidPatterns = patterns.filter((p) => (0, util_1.alwaysValidSchema)(it, schema[p]));
        if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === !0))
          return;
        let checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties, valid = gen.name("valid");
        it.props !== !0 && !(it.props instanceof codegen_1.Name) && (it.props = (0, util_2.evaluatedPropsToName)(gen, it.props));
        let { props } = it;
        validatePatternProperties();
        function validatePatternProperties() {
          for (let pat of patterns)
            checkProperties && checkMatchingProperties(pat), it.allErrors ? validateProperties(pat) : (gen.var(valid, !0), validateProperties(pat), gen.if(valid));
        }
        function checkMatchingProperties(pat) {
          for (let prop in checkProperties)
            new RegExp(pat).test(prop) && (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
        }
        function validateProperties(pat) {
          gen.forIn("key", data, (key) => {
            gen.if((0, codegen_1._)`${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, () => {
              let alwaysValid = alwaysValidPatterns.includes(pat);
              alwaysValid || cxt.subschema({
                keyword: "patternProperties",
                schemaProp: pat,
                dataProp: key,
                dataPropType: util_2.Type.Str
              }, valid), it.opts.unevaluated && props !== !0 ? gen.assign((0, codegen_1._)`${props}[${key}]`, !0) : !alwaysValid && !it.allErrors && gen.if((0, codegen_1.not)(valid), () => gen.break());
            });
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/not.js
var require_not = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/not.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var util_1 = require_util(), def = {
      keyword: "not",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      code(cxt) {
        let { gen, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
          cxt.fail();
          return;
        }
        let valid = gen.name("valid");
        cxt.subschema({
          keyword: "not",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, valid), cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
      },
      error: { message: "must NOT be valid" }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/anyOf.js
var require_anyOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/anyOf.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var code_1 = require_code2(), def = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: code_1.validateUnion,
      error: { message: "must match a schema in anyOf" }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/oneOf.js
var require_oneOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/oneOf.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), error2 = {
      message: "must match exactly one schema in oneOf",
      params: ({ params }) => (0, codegen_1._)`{passingSchemas: ${params.passing}}`
    }, def = {
      keyword: "oneOf",
      schemaType: "array",
      trackErrors: !0,
      error: error2,
      code(cxt) {
        let { gen, schema, parentSchema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator)
          return;
        let schArr = schema, valid = gen.let("valid", !1), passing = gen.let("passing", null), schValid = gen.name("_valid");
        cxt.setParams({ passing }), gen.block(validateOneOf), cxt.result(valid, () => cxt.reset(), () => cxt.error(!0));
        function validateOneOf() {
          schArr.forEach((sch, i) => {
            let schCxt;
            (0, util_1.alwaysValidSchema)(it, sch) ? gen.var(schValid, !0) : schCxt = cxt.subschema({
              keyword: "oneOf",
              schemaProp: i,
              compositeRule: !0
            }, schValid), i > 0 && gen.if((0, codegen_1._)`${schValid} && ${valid}`).assign(valid, !1).assign(passing, (0, codegen_1._)`[${passing}, ${i}]`).else(), gen.if(schValid, () => {
              gen.assign(valid, !0), gen.assign(passing, i), schCxt && cxt.mergeEvaluated(schCxt, codegen_1.Name);
            });
          });
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/allOf.js
var require_allOf = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/allOf.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var util_1 = require_util(), def = {
      keyword: "allOf",
      schemaType: "array",
      code(cxt) {
        let { gen, schema, it } = cxt;
        if (!Array.isArray(schema))
          throw new Error("ajv implementation error");
        let valid = gen.name("valid");
        schema.forEach((sch, i) => {
          if ((0, util_1.alwaysValidSchema)(it, sch))
            return;
          let schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i }, valid);
          cxt.ok(valid), cxt.mergeEvaluated(schCxt);
        });
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/if.js
var require_if = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/if.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), util_1 = require_util(), error2 = {
      message: ({ params }) => (0, codegen_1.str)`must match "${params.ifClause}" schema`,
      params: ({ params }) => (0, codegen_1._)`{failingKeyword: ${params.ifClause}}`
    }, def = {
      keyword: "if",
      schemaType: ["object", "boolean"],
      trackErrors: !0,
      error: error2,
      code(cxt) {
        let { gen, parentSchema, it } = cxt;
        parentSchema.then === void 0 && parentSchema.else === void 0 && (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        let hasThen = hasSchema(it, "then"), hasElse = hasSchema(it, "else");
        if (!hasThen && !hasElse)
          return;
        let valid = gen.let("valid", !0), schValid = gen.name("_valid");
        if (validateIf(), cxt.reset(), hasThen && hasElse) {
          let ifClause = gen.let("ifClause");
          cxt.setParams({ ifClause }), gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        } else hasThen ? gen.if(schValid, validateClause("then")) : gen.if((0, codegen_1.not)(schValid), validateClause("else"));
        cxt.pass(valid, () => cxt.error(!0));
        function validateIf() {
          let schCxt = cxt.subschema({
            keyword: "if",
            compositeRule: !0,
            createErrors: !1,
            allErrors: !1
          }, schValid);
          cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
          return () => {
            let schCxt = cxt.subschema({ keyword }, schValid);
            gen.assign(valid, schValid), cxt.mergeValidEvaluated(schCxt, valid), ifClause ? gen.assign(ifClause, (0, codegen_1._)`${keyword}`) : cxt.setParams({ ifClause: keyword });
          };
        }
      }
    };
    function hasSchema(it, keyword) {
      let schema = it.schema[keyword];
      return schema !== void 0 && !(0, util_1.alwaysValidSchema)(it, schema);
    }
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/thenElse.js
var require_thenElse = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/thenElse.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var util_1 = require_util(), def = {
      keyword: ["then", "else"],
      schemaType: ["object", "boolean"],
      code({ keyword, parentSchema, it }) {
        parentSchema.if === void 0 && (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/applicator/index.js
var require_applicator = __commonJS({
  "node_modules/ajv/dist/vocabularies/applicator/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var additionalItems_1 = require_additionalItems(), prefixItems_1 = require_prefixItems(), items_1 = require_items(), items2020_1 = require_items2020(), contains_1 = require_contains(), dependencies_1 = require_dependencies(), propertyNames_1 = require_propertyNames(), additionalProperties_1 = require_additionalProperties(), properties_1 = require_properties(), patternProperties_1 = require_patternProperties(), not_1 = require_not(), anyOf_1 = require_anyOf(), oneOf_1 = require_oneOf(), allOf_1 = require_allOf(), if_1 = require_if(), thenElse_1 = require_thenElse();
    function getApplicator(draft2020 = !1) {
      let applicator = [
        // any
        not_1.default,
        anyOf_1.default,
        oneOf_1.default,
        allOf_1.default,
        if_1.default,
        thenElse_1.default,
        // object
        propertyNames_1.default,
        additionalProperties_1.default,
        dependencies_1.default,
        properties_1.default,
        patternProperties_1.default
      ];
      return draft2020 ? applicator.push(prefixItems_1.default, items2020_1.default) : applicator.push(additionalItems_1.default, items_1.default), applicator.push(contains_1.default), applicator;
    }
    exports.default = getApplicator;
  }
});

// node_modules/ajv/dist/vocabularies/format/format.js
var require_format = __commonJS({
  "node_modules/ajv/dist/vocabularies/format/format.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), error2 = {
      message: ({ schemaCode }) => (0, codegen_1.str)`must match format "${schemaCode}"`,
      params: ({ schemaCode }) => (0, codegen_1._)`{format: ${schemaCode}}`
    }, def = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: error2,
      code(cxt, ruleType) {
        let { gen, data, $data, schema, schemaCode, it } = cxt, { opts, errSchemaPath, schemaEnv, self } = it;
        if (!opts.validateFormats)
          return;
        $data ? validate$DataFormat() : validateFormat();
        function validate$DataFormat() {
          let fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          }), fDef = gen.const("fDef", (0, codegen_1._)`${fmts}[${schemaCode}]`), fType = gen.let("fType"), format = gen.let("format");
          gen.if((0, codegen_1._)`typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._)`${fDef}.type || "string"`).assign(format, (0, codegen_1._)`${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._)`"string"`).assign(format, fDef)), cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
          function unknownFmt() {
            return opts.strictSchema === !1 ? codegen_1.nil : (0, codegen_1._)`${schemaCode} && !${format}`;
          }
          function invalidFmt() {
            let callFormat = schemaEnv.$async ? (0, codegen_1._)`(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))` : (0, codegen_1._)`${format}(${data})`, validData = (0, codegen_1._)`(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
            return (0, codegen_1._)`${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
          }
        }
        function validateFormat() {
          let formatDef = self.formats[schema];
          if (!formatDef) {
            unknownFormat();
            return;
          }
          if (formatDef === !0)
            return;
          let [fmtType, format, fmtRef] = getFormat(formatDef);
          fmtType === ruleType && cxt.pass(validCondition());
          function unknownFormat() {
            if (opts.strictSchema === !1) {
              self.logger.warn(unknownMsg());
              return;
            }
            throw new Error(unknownMsg());
            function unknownMsg() {
              return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
            }
          }
          function getFormat(fmtDef) {
            let code = fmtDef instanceof RegExp ? (0, codegen_1.regexpCode)(fmtDef) : opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(schema)}` : void 0, fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code });
            return typeof fmtDef == "object" && !(fmtDef instanceof RegExp) ? [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._)`${fmt}.validate`] : ["string", fmtDef, fmt];
          }
          function validCondition() {
            if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
              if (!schemaEnv.$async)
                throw new Error("async format in sync schema");
              return (0, codegen_1._)`await ${fmtRef}(${data})`;
            }
            return typeof format == "function" ? (0, codegen_1._)`${fmtRef}(${data})` : (0, codegen_1._)`${fmtRef}.test(${data})`;
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/vocabularies/format/index.js
var require_format2 = __commonJS({
  "node_modules/ajv/dist/vocabularies/format/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var format_1 = require_format(), format = [format_1.default];
    exports.default = format;
  }
});

// node_modules/ajv/dist/vocabularies/metadata.js
var require_metadata = __commonJS({
  "node_modules/ajv/dist/vocabularies/metadata.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.contentVocabulary = exports.metadataVocabulary = void 0;
    exports.metadataVocabulary = [
      "title",
      "description",
      "default",
      "deprecated",
      "readOnly",
      "writeOnly",
      "examples"
    ];
    exports.contentVocabulary = [
      "contentMediaType",
      "contentEncoding",
      "contentSchema"
    ];
  }
});

// node_modules/ajv/dist/vocabularies/draft7.js
var require_draft7 = __commonJS({
  "node_modules/ajv/dist/vocabularies/draft7.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var core_1 = require_core2(), validation_1 = require_validation(), applicator_1 = require_applicator(), format_1 = require_format2(), metadata_1 = require_metadata(), draft7Vocabularies = [
      core_1.default,
      validation_1.default,
      (0, applicator_1.default)(),
      format_1.default,
      metadata_1.metadataVocabulary,
      metadata_1.contentVocabulary
    ];
    exports.default = draft7Vocabularies;
  }
});

// node_modules/ajv/dist/vocabularies/discriminator/types.js
var require_types = __commonJS({
  "node_modules/ajv/dist/vocabularies/discriminator/types.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.DiscrError = void 0;
    var DiscrError;
    (function(DiscrError2) {
      DiscrError2.Tag = "tag", DiscrError2.Mapping = "mapping";
    })(DiscrError || (exports.DiscrError = DiscrError = {}));
  }
});

// node_modules/ajv/dist/vocabularies/discriminator/index.js
var require_discriminator = __commonJS({
  "node_modules/ajv/dist/vocabularies/discriminator/index.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var codegen_1 = require_codegen(), types_1 = require_types(), compile_1 = require_compile(), ref_error_1 = require_ref_error(), util_1 = require_util(), error2 = {
      message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
      params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._)`{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`
    }, def = {
      keyword: "discriminator",
      type: "object",
      schemaType: "object",
      error: error2,
      code(cxt) {
        let { gen, data, schema, parentSchema, it } = cxt, { oneOf } = parentSchema;
        if (!it.opts.discriminator)
          throw new Error("discriminator: requires discriminator option");
        let tagName = schema.propertyName;
        if (typeof tagName != "string")
          throw new Error("discriminator: requires propertyName");
        if (schema.mapping)
          throw new Error("discriminator: mapping is not supported");
        if (!oneOf)
          throw new Error("discriminator: requires oneOf keyword");
        let valid = gen.let("valid", !1), tag = gen.const("tag", (0, codegen_1._)`${data}${(0, codegen_1.getProperty)(tagName)}`);
        gen.if((0, codegen_1._)`typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(!1, { discrError: types_1.DiscrError.Tag, tag, tagName })), cxt.ok(valid);
        function validateMapping() {
          let mapping = getMapping();
          gen.if(!1);
          for (let tagValue in mapping)
            gen.elseIf((0, codegen_1._)`${tag} === ${tagValue}`), gen.assign(valid, applyTagSchema(mapping[tagValue]));
          gen.else(), cxt.error(!1, { discrError: types_1.DiscrError.Mapping, tag, tagName }), gen.endIf();
        }
        function applyTagSchema(schemaProp) {
          let _valid = gen.name("valid"), schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
          return cxt.mergeEvaluated(schCxt, codegen_1.Name), _valid;
        }
        function getMapping() {
          var _a3;
          let oneOfMapping = {}, topRequired = hasRequired(parentSchema), tagRequired = !0;
          for (let i = 0; i < oneOf.length; i++) {
            let sch = oneOf[i];
            if (sch?.$ref && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
              let ref = sch.$ref;
              if (sch = compile_1.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, ref), sch instanceof compile_1.SchemaEnv && (sch = sch.schema), sch === void 0)
                throw new ref_error_1.default(it.opts.uriResolver, it.baseId, ref);
            }
            let propSch = (_a3 = sch?.properties) === null || _a3 === void 0 ? void 0 : _a3[tagName];
            if (typeof propSch != "object")
              throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
            tagRequired = tagRequired && (topRequired || hasRequired(sch)), addMappings(propSch, i);
          }
          if (!tagRequired)
            throw new Error(`discriminator: "${tagName}" must be required`);
          return oneOfMapping;
          function hasRequired({ required: required2 }) {
            return Array.isArray(required2) && required2.includes(tagName);
          }
          function addMappings(sch, i) {
            if (sch.const)
              addMapping(sch.const, i);
            else if (sch.enum)
              for (let tagValue of sch.enum)
                addMapping(tagValue, i);
            else
              throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
          }
          function addMapping(tagValue, i) {
            if (typeof tagValue != "string" || tagValue in oneOfMapping)
              throw new Error(`discriminator: "${tagName}" values must be unique strings`);
            oneOfMapping[tagValue] = i;
          }
        }
      }
    };
    exports.default = def;
  }
});

// node_modules/ajv/dist/refs/json-schema-draft-07.json
var require_json_schema_draft_07 = __commonJS({
  "node_modules/ajv/dist/refs/json-schema-draft-07.json"(exports, module) {
    module.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: !0,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: !0,
        readOnly: {
          type: "boolean",
          default: !1
        },
        examples: {
          type: "array",
          items: !0
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
          default: !0
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: !1
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }]
          }
        },
        propertyNames: { $ref: "#" },
        const: !0,
        enum: {
          type: "array",
          items: !0,
          minItems: 1,
          uniqueItems: !0
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: !0
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: !0
    };
  }
});

// node_modules/ajv/dist/ajv.js
var require_ajv = __commonJS({
  "node_modules/ajv/dist/ajv.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.MissingRefError = exports.ValidationError = exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = exports.Ajv = void 0;
    var core_1 = require_core(), draft7_1 = require_draft7(), discriminator_1 = require_discriminator(), draft7MetaSchema = require_json_schema_draft_07(), META_SUPPORT_DATA = ["/properties"], META_SCHEMA_ID = "http://json-schema.org/draft-07/schema", Ajv2 = class extends core_1.default {
      _addVocabularies() {
        super._addVocabularies(), draft7_1.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(discriminator_1.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        let metaSchema = this.opts.$data ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA) : draft7MetaSchema;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, !1), this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : void 0);
      }
    };
    exports.Ajv = Ajv2;
    module.exports = exports = Ajv2;
    module.exports.Ajv = Ajv2;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.default = Ajv2;
    var validate_1 = require_validate();
    Object.defineProperty(exports, "KeywordCxt", { enumerable: !0, get: function() {
      return validate_1.KeywordCxt;
    } });
    var codegen_1 = require_codegen();
    Object.defineProperty(exports, "_", { enumerable: !0, get: function() {
      return codegen_1._;
    } });
    Object.defineProperty(exports, "str", { enumerable: !0, get: function() {
      return codegen_1.str;
    } });
    Object.defineProperty(exports, "stringify", { enumerable: !0, get: function() {
      return codegen_1.stringify;
    } });
    Object.defineProperty(exports, "nil", { enumerable: !0, get: function() {
      return codegen_1.nil;
    } });
    Object.defineProperty(exports, "Name", { enumerable: !0, get: function() {
      return codegen_1.Name;
    } });
    Object.defineProperty(exports, "CodeGen", { enumerable: !0, get: function() {
      return codegen_1.CodeGen;
    } });
    var validation_error_1 = require_validation_error();
    Object.defineProperty(exports, "ValidationError", { enumerable: !0, get: function() {
      return validation_error_1.default;
    } });
    var ref_error_1 = require_ref_error();
    Object.defineProperty(exports, "MissingRefError", { enumerable: !0, get: function() {
      return ref_error_1.default;
    } });
  }
});

// node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "node_modules/ajv-formats/dist/formats.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate2, compare) {
      return { validate: validate2, compare };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date3, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(!0), compareTime),
      "date-time": fmtDef(getDateTime(!0), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte,
      // signed 32 bit integer
      int32: { type: "number", validate: validateInt32 },
      // signed 64 bit integer
      int64: { type: "number", validate: validateInt64 },
      // C-type float
      float: { type: "number", validate: validateNumber },
      // C-type double
      double: { type: "number", validate: validateNumber },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    };
    exports.fastFormats = {
      ...exports.fullFormats,
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date3(str) {
      let matches = DATE.exec(str);
      if (!matches)
        return !1;
      let year = +matches[1], month = +matches[2], day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (d1 && d2)
        return d1 > d2 ? 1 : d1 < d2 ? -1 : 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function(str) {
        let matches = TIME.exec(str);
        if (!matches)
          return !1;
        let hr = +matches[1], min = +matches[2], sec = +matches[3], tz = matches[4], tzSign = matches[5] === "-" ? -1 : 1, tzH = +(matches[6] || 0), tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
          return !1;
        if (hr <= 23 && min <= 59 && sec < 60)
          return !0;
        let utcMin = min - tzM * tzSign, utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s2) {
      if (!(s1 && s2))
        return;
      let t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf(), t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s2)).valueOf();
      if (t1 && t2)
        return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2))
        return;
      let a1 = TIME.exec(t1), a2 = TIME.exec(t2);
      if (a1 && a2)
        return t1 = a1[1] + a1[2] + a1[3], t2 = a2[1] + a2[2] + a2[3], t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      let time3 = getTime(strictTimeZone);
      return function(str) {
        let dateTime = str.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date3(dateTime[0]) && time3(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return;
      let d1 = new Date(dt1).valueOf(), d2 = new Date(dt2).valueOf();
      if (d1 && d2)
        return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return;
      let [d1, t1] = dt1.split(DATE_TIME_SEPARATOR), [d2, t2] = dt2.split(DATE_TIME_SEPARATOR), res = compareDate(d1, d2);
      if (res !== void 0)
        return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/, URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(str) {
      return BYTE.lastIndex = 0, BYTE.test(str);
    }
    var MIN_INT32 = -(2 ** 31), MAX_INT32 = 2 ** 31 - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      return Number.isInteger(value);
    }
    function validateNumber() {
      return !0;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return !1;
      try {
        return new RegExp(str), !0;
      } catch {
        return !1;
      }
    }
  }
});

// node_modules/ajv-formats/dist/limit.js
var require_limit = __commonJS({
  "node_modules/ajv-formats/dist/limit.js"(exports) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.formatLimitDefinition = void 0;
    var ajv_1 = require_ajv(), codegen_1 = require_codegen(), ops = codegen_1.operators, KWDs = {
      formatMaximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
      formatMinimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
      formatExclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE }
    }, error2 = {
      message: ({ keyword, schemaCode }) => (0, codegen_1.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
      params: ({ keyword, schemaCode }) => (0, codegen_1._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
    };
    exports.formatLimitDefinition = {
      keyword: Object.keys(KWDs),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: error2,
      code(cxt) {
        let { gen, data, schemaCode, keyword, it } = cxt, { opts, self } = it;
        if (!opts.validateFormats)
          return;
        let fCxt = new ajv_1.KeywordCxt(it, self.RULES.all.format.definition, "format");
        fCxt.$data ? validate$DataFormat() : validateFormat();
        function validate$DataFormat() {
          let fmts = gen.scopeValue("formats", {
            ref: self.formats,
            code: opts.code.formats
          }), fmt = gen.const("fmt", (0, codegen_1._)`${fmts}[${fCxt.schemaCode}]`);
          cxt.fail$data((0, codegen_1.or)((0, codegen_1._)`typeof ${fmt} != "object"`, (0, codegen_1._)`${fmt} instanceof RegExp`, (0, codegen_1._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
        }
        function validateFormat() {
          let format = fCxt.schema, fmtDef = self.formats[format];
          if (!fmtDef || fmtDef === !0)
            return;
          if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function")
            throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
          let fmt = gen.scopeValue("formats", {
            key: format,
            ref: fmtDef,
            code: opts.code.formats ? (0, codegen_1._)`${opts.code.formats}${(0, codegen_1.getProperty)(format)}` : void 0
          });
          cxt.fail$data(compareCode(fmt));
        }
        function compareCode(fmt) {
          return (0, codegen_1._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    var formatLimitPlugin = (ajv) => (ajv.addKeyword(exports.formatLimitDefinition), ajv);
    exports.default = formatLimitPlugin;
  }
});

// node_modules/ajv-formats/dist/index.js
var require_dist = __commonJS({
  "node_modules/ajv-formats/dist/index.js"(exports, module) {
    "use strict";
    init_define_LUFF_CREW_ASSETS();
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var formats_1 = require_formats(), limit_1 = require_limit(), codegen_1 = require_codegen(), fullName = new codegen_1.Name("fullFormats"), fastName = new codegen_1.Name("fastFormats"), formatsPlugin = (ajv, opts = { keywords: !0 }) => {
      if (Array.isArray(opts))
        return addFormats(ajv, opts, formats_1.fullFormats, fullName), ajv;
      let [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName], list = opts.formats || formats_1.formatNames;
      return addFormats(ajv, list, formats, exportName), opts.keywords && (0, limit_1.default)(ajv), ajv;
    };
    formatsPlugin.get = (name, mode = "full") => {
      let f = (mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats)[name];
      if (!f)
        throw new Error(`Unknown format "${name}"`);
      return f;
    };
    function addFormats(ajv, list, fs, exportName) {
      var _a3, _b;
      (_a3 = (_b = ajv.opts.code).formats) !== null && _a3 !== void 0 || (_b.formats = (0, codegen_1._)`require("ajv-formats/dist/formats").${exportName}`);
      for (let f of list)
        ajv.addFormat(f, fs[f]);
    }
    module.exports = exports = formatsPlugin;
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.default = formatsPlugin;
  }
});

// src/cli.ts
init_define_LUFF_CREW_ASSETS();
import { resolve as resolve2 } from "node:path";
import { parseArgs } from "node:util";

// src/config.ts
init_define_LUFF_CREW_ASSETS();
import { readFileSync } from "node:fs";
import { join as join2 } from "node:path";

// src/paths.ts
init_define_LUFF_CREW_ASSETS();
import { existsSync } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, join } from "node:path";
var claudeDir = () => process.env.CLAUDE_CONFIG_DIR || join(homedir(), ".claude"), projectsDir = () => join(claudeDir(), "projects"), encodeProject = (cwd) => cwd.replace(/[^a-zA-Z0-9]/g, "-");
async function findProjectDir(cwd) {
  let root = projectsDir(), exact = join(root, encodeProject(cwd));
  if (existsSync(exact)) return exact;
  let want = encodeProject(cwd).toLowerCase();
  try {
    for (let name of await readdir(root)) if (name.toLowerCase() === want) return join(root, name);
  } catch {
  }
  return null;
}
var SESSION_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.jsonl$/i;
async function listSessions(projectDir) {
  let names;
  try {
    names = await readdir(projectDir);
  } catch {
    return [];
  }
  let out = [];
  return await Promise.all(
    names.filter((n) => SESSION_RE.test(n)).map(async (n) => {
      let path = join(projectDir, n);
      try {
        let s = await stat(path);
        out.push({ id: basename(n, ".jsonl"), path, projectDir, mtimeMs: s.mtimeMs, birthtimeMs: s.birthtimeMs || s.ctimeMs });
      } catch {
      }
    })
  ), out.sort((a, b) => b.mtimeMs - a.mtimeMs);
}
async function newestSessionAnywhere() {
  let dirs;
  try {
    dirs = await readdir(projectsDir());
  } catch {
    return null;
  }
  let best = null;
  for (let d of dirs) {
    let [top] = await listSessions(join(projectsDir(), d));
    top && (!best || top.mtimeMs > best.mtimeMs) && (best = top);
  }
  return best;
}
var subagentsDir = (projectDir, sessionId) => join(projectDir, sessionId, "subagents"), appDir = () => process.env.LUFF_CREW_HOME || join(homedir(), ".luff-crew");

// src/pricing.ts
init_define_LUFF_CREW_ASSETS();
var RULES = [
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
    long: { threshold: 1e5, price: [0.5, 0.625, 1, 0.05, 2.5] }
  },
  { match: /haiku-3-5|3-5-haiku/, price: [0.8, 1, 1.6, 0.08, 4] },
  { match: /haiku/, price: [1, 1.25, 2, 0.1, 5] }
], FALLBACK_PRICE = [3, 3.75, 6, 0.3, 15], overrides = [];
function setPriceOverrides(table) {
  overrides = Object.entries(table ?? {}).filter(([, row]) => Array.isArray(row) && row.length === 5 && row.every((n) => typeof n == "number" && n >= 0)).map(([key, row]) => ({ match: new RegExp(escapeRegExp(key.toLowerCase())), price: row }));
}
var escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), promptTokens = (u) => (u.input_tokens ?? 0) + (u.cache_read_input_tokens ?? 0) + (u.cache_creation_input_tokens ?? 0);
function priceOf(model, usage) {
  let id = model.toLowerCase(), custom2 = overrides.find((o) => o.match.test(id));
  if (custom2) return custom2.price;
  let rule = RULES.find((r) => r.match.test(id));
  return rule ? rule.long && usage && promptTokens(usage) > rule.long.threshold ? rule.long.price : rule.price : FALLBACK_PRICE;
}
function costOf(model, u) {
  let [input, write5m, write1h, read, output] = priceOf(model, u), written = u.cache_creation_input_tokens ?? 0, w1h = Math.min(written, u.cache_creation?.ephemeral_1h_input_tokens ?? 0), w5m = written - w1h;
  return ((u.input_tokens ?? 0) * input + w5m * write5m + w1h * write1h + (u.cache_read_input_tokens ?? 0) * read + (u.output_tokens ?? 0) * output) / 1e6;
}
var tokensOf = (u) => promptTokens(u) + (u.output_tokens ?? 0), windowOverrides = {};
function setContextWindowOverrides(table) {
  windowOverrides = Object.fromEntries(
    Object.entries(table ?? {}).filter(([, n]) => typeof n == "number" && n > 0).map(([k, n]) => [k.toLowerCase(), n])
  );
}
function contextWindowOf(model) {
  let id = model.toLowerCase();
  for (let [key, size] of Object.entries(windowOverrides)) if (id.includes(key)) return size;
  if (/\[1m\]/.test(id)) return 1e6;
  if (/haiku|claude-3/.test(id)) return 2e5;
  let gen = /(?:opus|sonnet|fable|mythos)-(\d+)/.exec(id);
  return gen && Number(gen[1]) < 5 ? 2e5 : 1e6;
}
function modelLabel(id) {
  if (!id) return "\u2014";
  let m = /(fable|mythos|opus|sonnet|haiku)-(\d+)(?:-(\d{1,2})(?!\d))?/i.exec(id);
  if (!m) {
    let bare = id.replace(/^claude-/, "").replace(/\[.*\]$/, "");
    return /^(fable|mythos|opus|sonnet|haiku)$/i.test(bare) ? bare.charAt(0).toUpperCase() + bare.slice(1).toLowerCase() : bare || "\u2014";
  }
  let [, family = "", major = "", minor] = m;
  return `${family.charAt(0).toUpperCase()}${family.slice(1).toLowerCase()} ${major}${minor ? "." + minor : ""}`;
}

// src/config.ts
var DEFAULTS = { port: 7420, language: "auto", autoOpen: !0, stallMinutes: 30 }, configPath = () => join2(appDir(), "config.json");
function readJson(path) {
  try {
    let value = JSON.parse(readFileSync(path, "utf8"));
    return value && typeof value == "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}
var bool = (v) => v === void 0 || v === "" ? void 0 : !/^(0|false|no|off)$/i.test(v.trim()), num = (v) => {
  let n = typeof v == "string" ? Number(v) : v;
  return typeof n == "number" && Number.isFinite(n) && n > 0 ? n : void 0;
}, lang = (v) => v === "en" || v === "ru" || v === "auto" ? v : void 0;
function loadConfig(env = process.env) {
  let file = readJson(configPath()), cfg = {
    port: num(env.LUFF_CREW_PORT) ?? num(file.port) ?? DEFAULTS.port,
    language: lang(env.LUFF_CREW_LANG) ?? lang(file.language) ?? DEFAULTS.language,
    autoOpen: bool(env.LUFF_CREW_AUTO_OPEN) ?? (typeof file.autoOpen == "boolean" ? file.autoOpen : DEFAULTS.autoOpen),
    stallMinutes: num(env.LUFF_CREW_STALL_MINUTES) ?? num(file.stallMinutes) ?? DEFAULTS.stallMinutes
  };
  return file.prices && typeof file.prices == "object" && (cfg.prices = file.prices), file.contextWindows && typeof file.contextWindows == "object" && (cfg.contextWindows = file.contextWindows), setPriceOverrides(cfg.prices), setContextWindowOverrides(cfg.contextWindows), cfg;
}
var isRussian = (v) => typeof v == "string" && /^(ru|russian|рус)/i.test(v.trim());
function resolveLang(cfg, env = process.env) {
  if (cfg.language !== "auto") return cfg.language;
  let settings = readJson(join2(claudeDir(), "settings.json"));
  if (typeof settings.language == "string" && settings.language.trim()) return isRussian(settings.language) ? "ru" : "en";
  let locale = env.LC_ALL || env.LC_MESSAGES || env.LANG || Intl.DateTimeFormat().resolvedOptions().locale;
  return isRussian(locale) ? "ru" : "en";
}

// src/mcp.ts
init_define_LUFF_CREW_ASSETS();

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/mcp.js
init_define_LUFF_CREW_ASSETS();

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js
init_define_LUFF_CREW_ASSETS();

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js
init_define_LUFF_CREW_ASSETS();

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v3/errors.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v3/locales/en.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v3/ZodError.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v3/helpers/util.js
init_define_LUFF_CREW_ASSETS();
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs2(_arg) {
  }
  util2.assertIs = assertIs2;
  function assertNever2(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever2, util2.arrayToEnum = (items) => {
    let obj = {};
    for (let item of items)
      obj[item] = item;
    return obj;
  }, util2.getValidEnumValues = (obj) => {
    let validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] != "number"), filtered = {};
    for (let k of validKeys)
      filtered[k] = obj[k];
    return util2.objectValues(filtered);
  }, util2.objectValues = (obj) => util2.objectKeys(obj).map(function(e) {
    return obj[e];
  }), util2.objectKeys = typeof Object.keys == "function" ? (obj) => Object.keys(obj) : (object3) => {
    let keys = [];
    for (let key in object3)
      Object.prototype.hasOwnProperty.call(object3, key) && keys.push(key);
    return keys;
  }, util2.find = (arr, checker) => {
    for (let item of arr)
      if (checker(item))
        return item;
  }, util2.isInteger = typeof Number.isInteger == "function" ? (val) => Number.isInteger(val) : (val) => typeof val == "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues2(array2, separator = " | ") {
    return array2.map((val) => typeof val == "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues2, util2.jsonStringifyReplacer = (_, value) => typeof value == "bigint" ? value.toString() : value;
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => ({
    ...first,
    ...second
    // second overwrites first
  });
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), getParsedType = (data) => {
  switch (typeof data) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      return Array.isArray(data) ? ZodParsedType.array : data === null ? ZodParsedType.null : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? ZodParsedType.promise : typeof Map < "u" && data instanceof Map ? ZodParsedType.map : typeof Set < "u" && data instanceof Set ? ZodParsedType.set : typeof Date < "u" && data instanceof Date ? ZodParsedType.date : ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super(), this.issues = [], this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    }, this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    let actualProto = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, actualProto) : this.__proto__ = actualProto, this.name = "ZodError", this.issues = issues;
  }
  format(_mapper) {
    let mapper = _mapper || function(issue2) {
      return issue2.message;
    }, fieldErrors = { _errors: [] }, processError = (error2) => {
      for (let issue2 of error2.issues)
        if (issue2.code === "invalid_union")
          issue2.unionErrors.map(processError);
        else if (issue2.code === "invalid_return_type")
          processError(issue2.returnTypeError);
        else if (issue2.code === "invalid_arguments")
          processError(issue2.argumentsError);
        else if (issue2.path.length === 0)
          fieldErrors._errors.push(mapper(issue2));
        else {
          let curr = fieldErrors, i = 0;
          for (; i < issue2.path.length; ) {
            let el = issue2.path[i], terminal = i === issue2.path.length - 1;
            if (el === "_errors") {
              terminal && curr._errors.push(mapper(issue2)), i++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(curr, el) || (el === "__proto__" ? Object.defineProperty(curr, el, {
              value: { _errors: [] },
              writable: !0,
              enumerable: !0,
              configurable: !0
            }) : curr[el] = { _errors: [] }), curr = curr[el], terminal && curr._errors.push(mapper(issue2)), i++;
          }
        }
    };
    return processError(this), fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError))
      throw new Error(`Not a ZodError: ${value}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue2) => issue2.message) {
    let fieldErrors = /* @__PURE__ */ Object.create(null), formErrors = [];
    for (let sub of this.issues)
      if (sub.path.length > 0) {
        let firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [], fieldErrors[firstEl].push(mapper(sub));
      } else
        formErrors.push(mapper(sub));
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => new ZodError(issues);

// node_modules/zod/v3/locales/en.js
var errorMap = (issue2, _ctx) => {
  let message;
  switch (issue2.code) {
    case ZodIssueCode.invalid_type:
      issue2.received === ZodParsedType.undefined ? message = "Required" : message = `Expected ${issue2.expected}, received ${issue2.received}`;
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue2.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue2.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue2.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue2.options)}, received '${issue2.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      message = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      message = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      typeof issue2.validation == "object" ? "includes" in issue2.validation ? (message = `Invalid input: must include "${issue2.validation.includes}"`, typeof issue2.validation.position == "number" && (message = `${message} at one or more positions greater than or equal to ${issue2.validation.position}`)) : "startsWith" in issue2.validation ? message = `Invalid input: must start with "${issue2.validation.startsWith}"` : "endsWith" in issue2.validation ? message = `Invalid input: must end with "${issue2.validation.endsWith}"` : util.assertNever(issue2.validation) : issue2.validation !== "regex" ? message = `Invalid ${issue2.validation}` : message = "Invalid";
      break;
    case ZodIssueCode.too_small:
      issue2.type === "array" ? message = `Array must contain ${issue2.exact ? "exactly" : issue2.inclusive ? "at least" : "more than"} ${issue2.minimum} element(s)` : issue2.type === "string" ? message = `String must contain ${issue2.exact ? "exactly" : issue2.inclusive ? "at least" : "over"} ${issue2.minimum} character(s)` : issue2.type === "number" ? message = `Number must be ${issue2.exact ? "exactly equal to " : issue2.inclusive ? "greater than or equal to " : "greater than "}${issue2.minimum}` : issue2.type === "bigint" ? message = `Number must be ${issue2.exact ? "exactly equal to " : issue2.inclusive ? "greater than or equal to " : "greater than "}${issue2.minimum}` : issue2.type === "date" ? message = `Date must be ${issue2.exact ? "exactly equal to " : issue2.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(issue2.minimum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      issue2.type === "array" ? message = `Array must contain ${issue2.exact ? "exactly" : issue2.inclusive ? "at most" : "less than"} ${issue2.maximum} element(s)` : issue2.type === "string" ? message = `String must contain ${issue2.exact ? "exactly" : issue2.inclusive ? "at most" : "under"} ${issue2.maximum} character(s)` : issue2.type === "number" ? message = `Number must be ${issue2.exact ? "exactly" : issue2.inclusive ? "less than or equal to" : "less than"} ${issue2.maximum}` : issue2.type === "bigint" ? message = `BigInt must be ${issue2.exact ? "exactly" : issue2.inclusive ? "less than or equal to" : "less than"} ${issue2.maximum}` : issue2.type === "date" ? message = `Date must be ${issue2.exact ? "exactly" : issue2.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(issue2.maximum))}` : message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue2.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError, util.assertNever(issue2);
  }
  return { message };
}, en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/zod/v3/helpers/parseUtil.js
init_define_LUFF_CREW_ASSETS();
var makeIssue = (params) => {
  let { data, path, errorMaps, issueData } = params, fullPath = [...path, ...issueData.path || []], fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0)
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  let errorMessage = "", maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (let map of maps)
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
function addIssueToContext(ctx, issueData) {
  let overrideMap = getErrorMap(), issue2 = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue2);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(status, results) {
    let arrayValue = [];
    for (let s of results) {
      if (s.status === "aborted")
        return INVALID;
      s.status === "dirty" && status.dirty(), arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    let syncPairs = [];
    for (let pair of pairs) {
      let key = await pair.key, value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    let finalObject = {};
    for (let pair of pairs) {
      let { key, value } = pair;
      if (key.status === "aborted" || value.status === "aborted")
        return INVALID;
      key.status === "dirty" && status.dirty(), value.status === "dirty" && status.dirty(), key.value !== "__proto__" && (typeof value.value < "u" || pair.alwaysSet) && (finalObject[key.value] = value.value);
    }
    return { status: status.value, value: finalObject };
  }
}, INVALID = Object.freeze({
  status: "aborted"
}), DIRTY = (value) => ({ status: "dirty", value }), OK = (value) => ({ status: "valid", value }), isAborted = (x) => x.status === "aborted", isDirty = (x) => x.status === "dirty", isValid = (x) => x.status === "valid", isAsync = (x) => typeof Promise < "u" && x instanceof Promise;

// node_modules/zod/v3/types.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v3/helpers/errorUtil.js
init_define_LUFF_CREW_ASSETS();
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message == "string" ? { message } : message || {}, errorUtil2.toString = (message) => typeof message == "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [], this.parent = parent, this.data = value, this._path = path, this._key = key;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}, handleResult = (ctx, result) => {
  if (isValid(result))
    return { success: !0, data: result.value };
  if (!ctx.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      let error2 = new ZodError(ctx.common.issues);
      return this._error = error2, this._error;
    }
  };
};
function processCreateParams(params) {
  if (!params)
    return {};
  let { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return errorMap2 ? { errorMap: errorMap2, description } : { errorMap: (iss, ctx) => {
    let { message } = params;
    return iss.code === "invalid_enum_value" ? { message: message ?? ctx.defaultError } : typeof ctx.data > "u" ? { message: message ?? required_error ?? ctx.defaultError } : iss.code !== "invalid_type" ? { message: ctx.defaultError } : { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    let result = this._parse(input);
    if (isAsync(result))
      throw new Error("Synchronous parse encountered promise.");
    return result;
  }
  _parseAsync(input) {
    let result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    let result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    let ctx = {
      common: {
        issues: [],
        async: params?.async ?? !1,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    let ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async)
      try {
        let result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        err?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0), ctx.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    let result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    let ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: !0
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    }, maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx }), result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    let getIssueProperties = (val) => typeof message == "string" || typeof message > "u" ? { message } : typeof message == "function" ? message(val) : message;
    return this._refinement((val, ctx) => {
      let result = check(val), setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      return typeof Promise < "u" && result instanceof Promise ? result.then((data) => data ? !0 : (setError(), !1)) : result ? !0 : (setError(), !1);
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => check(val) ? !0 : (ctx.addIssue(typeof refinementData == "function" ? refinementData(val, ctx) : refinementData), !1));
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync, this._def = def, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform2) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform: transform2 }
    });
  }
  default(def) {
    let defaultValueFunc = typeof def == "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    let catchValueFunc = typeof def == "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    let This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}, cuidRegex = /^c[^\s-]{8,}$/i, cuid2Regex = /^[0-9a-z]+$/, ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i, uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, nanoidRegex = /^[a-z0-9_-]{21}$/i, jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, _emojiRegex = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", emojiRegex, ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, dateRegexSource = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = "[0-5]\\d";
  args.precision ? secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}` : args.precision == null && (secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`);
  let secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`, opts = [];
  return opts.push(args.local ? "Z?" : "Z"), args.offset && opts.push("([+-]\\d{2}:?\\d{2})"), regex = `${regex}(${opts.join("|")})`, new RegExp(`^${regex}$`);
}
function isValidIP(ip, version2) {
  return !!((version2 === "v4" || !version2) && ipv4Regex.test(ip) || (version2 === "v6" || !version2) && ipv6Regex.test(ip));
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return !1;
  try {
    let [header] = jwt.split(".");
    if (!header)
      return !1;
    let base642 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "="), decoded = JSON.parse(atob(base642));
    return !(typeof decoded != "object" || decoded === null || "typ" in decoded && decoded?.typ !== "JWT" || !decoded.alg || alg && decoded.alg !== alg);
  } catch {
    return !1;
  }
}
function isValidCidr(ip, version2) {
  return !!((version2 === "v4" || !version2) && ipv4CidrRegex.test(ip) || (version2 === "v6" || !version2) && ipv6CidrRegex.test(ip));
}
var ZodString = class _ZodString2 extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = String(input.data)), this._getType(input) !== ZodParsedType.string) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      }), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      if (check.kind === "min")
        input.data.length < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "max")
        input.data.length > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: check.message
        }), status.dirty());
      else if (check.kind === "length") {
        let tooBig = input.data.length > check.value, tooSmall = input.data.length < check.value;
        (tooBig || tooSmall) && (ctx = this._getOrReturnCtx(input, ctx), tooBig ? addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }) : tooSmall && addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: check.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: check.message
        }), status.dirty());
      } else if (check.kind === "email")
        emailRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "email",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "emoji")
        emojiRegex || (emojiRegex = new RegExp(_emojiRegex, "u")), emojiRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "emoji",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "uuid")
        uuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "uuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "nanoid")
        nanoidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "nanoid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid")
        cuidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "cuid2")
        cuid2Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "cuid2",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "ulid")
        ulidRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
          validation: "ulid",
          code: ZodIssueCode.invalid_string,
          message: check.message
        }), status.dirty());
      else if (check.kind === "url")
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          }), status.dirty();
        }
      else check.kind === "regex" ? (check.regex.lastIndex = 0, check.regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "regex",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty())) : check.kind === "trim" ? input.data = input.data.trim() : check.kind === "includes" ? input.data.includes(check.value, check.position) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { includes: check.value, position: check.position },
        message: check.message
      }), status.dirty()) : check.kind === "toLowerCase" ? input.data = input.data.toLowerCase() : check.kind === "toUpperCase" ? input.data = input.data.toUpperCase() : check.kind === "startsWith" ? input.data.startsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { startsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "endsWith" ? input.data.endsWith(check.value) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: { endsWith: check.value },
        message: check.message
      }), status.dirty()) : check.kind === "datetime" ? datetimeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "datetime",
        message: check.message
      }), status.dirty()) : check.kind === "date" ? dateRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "date",
        message: check.message
      }), status.dirty()) : check.kind === "time" ? timeRegex(check).test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_string,
        validation: "time",
        message: check.message
      }), status.dirty()) : check.kind === "duration" ? durationRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "duration",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "ip" ? isValidIP(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "ip",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "jwt" ? isValidJWT(input.data, check.alg) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "jwt",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "cidr" ? isValidCidr(input.data, check.version) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "cidr",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64" ? base64Regex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : check.kind === "base64url" ? base64urlRegex.test(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        validation: "base64url",
        code: ZodIssueCode.invalid_string,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString2({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: options
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision > "u" ? null : options?.precision,
      offset: options?.offset ?? !1,
      local: options?.local ?? !1,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    return typeof options == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: options
    }) : this._addCheck({
      kind: "time",
      precision: typeof options?.precision > "u" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString2({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString2({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString2({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxLength() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodString.create = (params) => new ZodString({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodString,
  coerce: params?.coerce ?? !1,
  ...processCreateParams(params)
});
function floatSafeRemainder(val, step) {
  let valDecCount = (val.toString().split(".")[1] || "").length, stepDecCount = (step.toString().split(".")[1] || "").length, decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount, valInt = Number.parseInt(val.toFixed(decCount).replace(".", "")), stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce && (input.data = Number(input.data)), this._getType(input) !== ZodParsedType.number) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      }), INVALID;
    }
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "int" ? util.isInteger(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: "integer",
        received: "float",
        message: check.message
      }), status.dirty()) : check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: check.value,
        type: "number",
        inclusive: check.inclusive,
        exact: !1,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? floatSafeRemainder(input.data, check.value) !== 0 && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : check.kind === "finite" ? Number.isFinite(input.data) || (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_finite,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (let ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf")
        return !0;
      ch.kind === "min" ? (min === null || ch.value > min) && (min = ch.value) : ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => new ZodNumber({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: params?.coerce || !1,
  ...processCreateParams(params)
});
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce)
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    if (this._getType(input) !== ZodParsedType.bigint)
      return this._getInvalidInput(input);
    let ctx, status = new ParseStatus();
    for (let check of this._def.checks)
      check.kind === "min" ? (check.inclusive ? input.data < check.value : input.data <= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        type: "bigint",
        minimum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "max" ? (check.inclusive ? input.data > check.value : input.data >= check.value) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        type: "bigint",
        maximum: check.value,
        inclusive: check.inclusive,
        message: check.message
      }), status.dirty()) : check.kind === "multipleOf" ? input.data % check.value !== BigInt(0) && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.not_multiple_of,
        multipleOf: check.value,
        message: check.message
      }), status.dirty()) : util.assertNever(check);
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    let ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    }), INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, !0, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, !1, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, !0, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, !1, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min;
  }
  get maxValue() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max;
  }
};
ZodBigInt.create = (params) => new ZodBigInt({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodBigInt,
  coerce: params?.coerce ?? !1,
  ...processCreateParams(params)
});
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = !!input.data), this._getType(input) !== ZodParsedType.boolean) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => new ZodBoolean({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: params?.coerce || !1,
  ...processCreateParams(params)
});
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce && (input.data = new Date(input.data)), this._getType(input) !== ZodParsedType.date) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      }), INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      }), INVALID;
    }
    let status = new ParseStatus(), ctx;
    for (let check of this._def.checks)
      check.kind === "min" ? input.data.getTime() < check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        message: check.message,
        inclusive: !0,
        exact: !1,
        minimum: check.value,
        type: "date"
      }), status.dirty()) : check.kind === "max" ? input.data.getTime() > check.value && (ctx = this._getOrReturnCtx(input, ctx), addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        message: check.message,
        inclusive: !0,
        exact: !1,
        maximum: check.value,
        type: "date"
      }), status.dirty()) : util.assertNever(check);
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (let ch of this._def.checks)
      ch.kind === "min" && (min === null || ch.value > min) && (min = ch.value);
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (let ch of this._def.checks)
      ch.kind === "max" && (max === null || ch.value < max) && (max = ch.value);
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => new ZodDate({
  checks: [],
  coerce: params?.coerce || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...processCreateParams(params)
});
var ZodSymbol = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.symbol) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => new ZodSymbol({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...processCreateParams(params)
});
var ZodUndefined = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => new ZodUndefined({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...processCreateParams(params)
});
var ZodNull = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.null) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => new ZodNull({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...processCreateParams(params)
});
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => new ZodAny({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...processCreateParams(params)
});
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => new ZodUnknown({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...processCreateParams(params)
});
var ZodNever = class extends ZodType {
  _parse(input) {
    let ctx = this._getOrReturnCtx(input);
    return addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    }), INVALID;
  }
};
ZodNever.create = (params) => new ZodNever({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...processCreateParams(params)
});
var ZodVoid = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.undefined) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      }), INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => new ZodVoid({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...processCreateParams(params)
});
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    let { ctx, status } = this._processInputParams(input), def = this._def;
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (def.exactLength !== null) {
      let tooBig = ctx.data.length > def.exactLength.value, tooSmall = ctx.data.length < def.exactLength.value;
      (tooBig || tooSmall) && (addIssueToContext(ctx, {
        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: tooSmall ? def.exactLength.value : void 0,
        maximum: tooBig ? def.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: def.exactLength.message
      }), status.dirty());
    }
    if (def.minLength !== null && ctx.data.length < def.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.minLength.message
    }), status.dirty()), def.maxLength !== null && ctx.data.length > def.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: def.maxLength.message
    }), status.dirty()), ctx.common.async)
      return Promise.all([...ctx.data].map((item, i) => def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i)))).then((result2) => ParseStatus.mergeArray(status, result2));
    let result = [...ctx.data].map((item, i) => def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => new ZodArray({
  type: schema,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...processCreateParams(params)
});
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    let newShape = {};
    for (let key in schema.shape) {
      let fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else return schema instanceof ZodArray ? new ZodArray({
    ...schema._def,
    type: deepPartialify(schema.element)
  }) : schema instanceof ZodOptional ? ZodOptional.create(deepPartialify(schema.unwrap())) : schema instanceof ZodNullable ? ZodNullable.create(deepPartialify(schema.unwrap())) : schema instanceof ZodTuple ? ZodTuple.create(schema.items.map((item) => deepPartialify(item))) : schema;
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    let shape = this._def.shape(), keys = util.objectKeys(shape);
    return this._cached = { shape, keys }, this._cached;
  }
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.object) {
      let ctx2 = this._getOrReturnCtx(input);
      return addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      }), INVALID;
    }
    let { status, ctx } = this._processInputParams(input), { shape, keys: shapeKeys } = this._getCached(), extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip"))
      for (let key in ctx.data)
        shapeKeys.includes(key) || extraKeys.push(key);
    let pairs = [];
    for (let key of shapeKeys) {
      let keyValidator = shape[key], value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      let unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough")
        for (let key of extraKeys)
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
      else if (unknownKeys === "strict")
        extraKeys.length > 0 && (addIssueToContext(ctx, {
          code: ZodIssueCode.unrecognized_keys,
          keys: extraKeys
        }), status.dirty());
      else if (unknownKeys !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let catchall = this._def.catchall;
      for (let key of extraKeys) {
        let value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      let syncPairs = [];
      for (let pair of pairs) {
        let key = await pair.key, value = await pair.value;
        syncPairs.push({
          key,
          value,
          alwaysSet: pair.alwaysSet
        });
      }
      return syncPairs;
    }).then((syncPairs) => ParseStatus.mergeObjectSync(status, syncPairs)) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    return errorUtil.errToObj, new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue2, ctx) => {
          let defaultError = this._def.errorMap?.(issue2, ctx).message ?? ctx.defaultError;
          return issue2.code === "unrecognized_keys" ? {
            message: errorUtil.errToObj(message).message ?? defaultError
          } : {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    return new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    let shape = {};
    for (let key of util.objectKeys(mask))
      mask[key] && this.shape[key] && (shape[key] = this.shape[key]);
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    let shape = {};
    for (let key of util.objectKeys(this.shape))
      mask[key] || (shape[key] = this.shape[key]);
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    let newShape = {};
    for (let key of util.objectKeys(this.shape)) {
      let fieldSchema = this.shape[key];
      mask && !mask[key] ? newShape[key] = fieldSchema : newShape[key] = fieldSchema.optional();
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    let newShape = {};
    for (let key of util.objectKeys(this.shape))
      if (mask && !mask[key])
        newShape[key] = this.shape[key];
      else {
        let newField = this.shape[key];
        for (; newField instanceof ZodOptional; )
          newField = newField._def.innerType;
        newShape[key] = newField;
      }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.strictCreate = (shape, params) => new ZodObject({
  shape: () => shape,
  unknownKeys: "strict",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
ZodObject.lazycreate = (shape, params) => new ZodObject({
  shape,
  unknownKeys: "strip",
  catchall: ZodNever.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...processCreateParams(params)
});
var ZodUnion = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), options = this._def.options;
    function handleResults(results) {
      for (let result of results)
        if (result.result.status === "valid")
          return result.result;
      for (let result of results)
        if (result.result.status === "dirty")
          return ctx.common.issues.push(...result.ctx.common.issues), result.result;
      let unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
    if (ctx.common.async)
      return Promise.all(options.map(async (option) => {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    {
      let dirty, issues = [];
      for (let option of options) {
        let childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        }, result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid")
          return result;
        result.status === "dirty" && !dirty && (dirty = { result, ctx: childCtx }), childCtx.common.issues.length && issues.push(childCtx.common.issues);
      }
      if (dirty)
        return ctx.common.issues.push(...dirty.ctx.common.issues), dirty.result;
      let unionErrors = issues.map((issues2) => new ZodError(issues2));
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      }), INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => new ZodUnion({
  options: types,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...processCreateParams(params)
});
var getDiscriminator = (type) => type instanceof ZodLazy ? getDiscriminator(type.schema) : type instanceof ZodEffects ? getDiscriminator(type.innerType()) : type instanceof ZodLiteral ? [type.value] : type instanceof ZodEnum ? type.options : type instanceof ZodNativeEnum ? util.objectValues(type.enum) : type instanceof ZodDefault ? getDiscriminator(type._def.innerType) : type instanceof ZodUndefined ? [void 0] : type instanceof ZodNull ? [null] : type instanceof ZodOptional ? [void 0, ...getDiscriminator(type.unwrap())] : type instanceof ZodNullable ? [null, ...getDiscriminator(type.unwrap())] : type instanceof ZodBranded || type instanceof ZodReadonly ? getDiscriminator(type.unwrap()) : type instanceof ZodCatch ? getDiscriminator(type._def.innerType) : [], ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let discriminator = this.discriminator, discriminatorValue = ctx.data[discriminator], option = this.optionsMap.get(discriminatorValue);
    return option ? ctx.common.async ? option._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : option._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [discriminator]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    let optionsMap = /* @__PURE__ */ new Map();
    for (let type of options) {
      let discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length)
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      for (let value of discriminatorValues) {
        if (optionsMap.has(value))
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  let aType = getParsedType(a), bType = getParsedType(b);
  if (a === b)
    return { valid: !0, data: a };
  if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    let bKeys = util.objectKeys(b), sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    Object.prototype.hasOwnProperty.call(newObj, "__proto__") && delete newObj.__proto__;
    for (let key of sharedKeys) {
      if (key === "__proto__")
        continue;
      let sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid)
        return { valid: !1 };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length)
      return { valid: !1 };
    let newArray = [];
    for (let index = 0; index < a.length; index++) {
      let itemA = a[index], itemB = b[index], sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid)
        return { valid: !1 };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  } else return aType === ZodParsedType.date && bType === ZodParsedType.date && +a == +b ? { valid: !0, data: a } : { valid: !1 };
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight))
        return INVALID;
      let merged = mergeValues(parsedLeft.value, parsedRight.value);
      return merged.valid ? ((isDirty(parsedLeft) || isDirty(parsedRight)) && status.dirty(), { status: status.value, value: merged.data }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }),
      this._def.right._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      })
    ]).then(([left, right]) => handleParsed(left, right)) : handleParsed(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
};
ZodIntersection.create = (left, right, params) => new ZodIntersection({
  left,
  right,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...processCreateParams(params)
});
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      }), INVALID;
    if (ctx.data.length < this._def.items.length)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), INVALID;
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    let items = [...ctx.data].map((item, itemIndex) => {
      let schema = this._def.items[itemIndex] || this._def.rest;
      return schema ? schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex)) : null;
    }).filter((x) => !!x);
    return ctx.common.async ? Promise.all(items).then((results) => ParseStatus.mergeArray(status, results)) : ParseStatus.mergeArray(status, items);
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      }), INVALID;
    let pairs = [], keyType = this._def.keyType, valueType = this._def.valueType;
    for (let key in ctx.data)
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, pairs) : ParseStatus.mergeObjectSync(status, pairs);
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    return second instanceof ZodType ? new _ZodRecord({
      keyType: first,
      valueType: second,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(third)
    }) : new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
}, ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      }), INVALID;
    let keyType = this._def.keyType, valueType = this._def.valueType, pairs = [...ctx.data.entries()].map(([key, value], index) => ({
      key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
      value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
    }));
    if (ctx.common.async) {
      let finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (let pair of pairs) {
          let key = await pair.key, value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted")
            return INVALID;
          (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      let finalMap = /* @__PURE__ */ new Map();
      for (let pair of pairs) {
        let key = pair.key, value = pair.value;
        if (key.status === "aborted" || value.status === "aborted")
          return INVALID;
        (key.status === "dirty" || value.status === "dirty") && status.dirty(), finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => new ZodMap({
  valueType,
  keyType,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...processCreateParams(params)
});
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      }), INVALID;
    let def = this._def;
    def.minSize !== null && ctx.data.size < def.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: def.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.minSize.message
    }), status.dirty()), def.maxSize !== null && ctx.data.size > def.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: def.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: def.maxSize.message
    }), status.dirty());
    let valueType = this._def.valueType;
    function finalizeSet(elements2) {
      let parsedSet = /* @__PURE__ */ new Set();
      for (let element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        element.status === "dirty" && status.dirty(), parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    let elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    return ctx.common.async ? Promise.all(elements).then((elements2) => finalizeSet(elements2)) : finalizeSet(elements);
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => new ZodSet({
  valueType,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...processCreateParams(params)
});
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      }), INVALID;
    function makeArgsIssue(args, error2) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error2
        }
      });
    }
    function makeReturnsIssue(returns, error2) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error2
        }
      });
    }
    let params = { errorMap: ctx.common.contextualErrorMap }, fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      let me = this;
      return OK(async function(...args) {
        let error2 = new ZodError([]), parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          throw error2.addIssue(makeArgsIssue(args, e)), error2;
        }), result = await Reflect.apply(fn, this, parsedArgs);
        return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          throw error2.addIssue(makeReturnsIssue(result, e)), error2;
        });
      });
    } else {
      let me = this;
      return OK(function(...args) {
        let parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success)
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        let result = Reflect.apply(fn, this, parsedArgs.data), parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success)
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    return this.parse(func);
  }
  strictImplement(func) {
    return this.parse(func);
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args || ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
}, ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    return this._def.getter()._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => new ZodLazy({
  getter,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...processCreateParams(params)
});
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => new ZodLiteral({
  value,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...processCreateParams(params)
});
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data != "string") {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(input.data)) {
      let ctx = this._getOrReturnCtx(input), expectedValues = this._def.values;
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Values() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  get Enum() {
    let enumValues = {};
    for (let val of this._def.values)
      enumValues[val] = val;
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    let nativeEnumValues = util.getValidEnumValues(this._def.values), ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      }), INVALID;
    }
    if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(input.data)) {
      let expectedValues = util.objectValues(nativeEnumValues);
      return addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      }), INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => new ZodNativeEnum({
  values,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...processCreateParams(params)
});
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    let { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === !1)
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      }), INVALID;
    let promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => this._def.type.parseAsync(data, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
};
ZodPromise.create = (schema, params) => new ZodPromise({
  type: schema,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...processCreateParams(params)
});
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    let { status, ctx } = this._processInputParams(input), effect = this._def.effect || null, checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg), arg.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx), effect.type === "preprocess") {
      let processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async)
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          let result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          return result.status === "aborted" ? INVALID : result.status === "dirty" ? DIRTY(result.value) : status.value === "dirty" ? DIRTY(result.value) : result;
        });
      {
        if (status.value === "aborted")
          return INVALID;
        let result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        return result.status === "aborted" ? INVALID : result.status === "dirty" ? DIRTY(result.value) : status.value === "dirty" ? DIRTY(result.value) : result;
      }
    }
    if (effect.type === "refinement") {
      let executeRefinement = (acc) => {
        let result = effect.refinement(acc, checkCtx);
        if (ctx.common.async)
          return Promise.resolve(result);
        if (result instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return acc;
      };
      if (ctx.common.async === !1) {
        let inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value), { status: status.value, value: inner.value });
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => inner.status === "aborted" ? INVALID : (inner.status === "dirty" && status.dirty(), executeRefinement(inner.value).then(() => ({ status: status.value, value: inner.value }))));
    }
    if (effect.type === "transform")
      if (ctx.common.async === !1) {
        let base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        let result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: status.value, value: result };
      } else
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => isValid(base) ? Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
          status: status.value,
          value: result
        })) : INVALID);
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => new ZodEffects({
  schema,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect,
  ...processCreateParams(params)
});
ZodEffects.createWithPreprocess = (preprocess2, schema, params) => new ZodEffects({
  schema,
  effect: { type: "preprocess", transform: preprocess2 },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...processCreateParams(params)
});
var ZodOptional = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => new ZodOptional({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...processCreateParams(params)
});
var ZodNullable = class extends ZodType {
  _parse(input) {
    return this._getType(input) === ZodParsedType.null ? OK(null) : this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => new ZodNullable({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...processCreateParams(params)
});
var ZodDefault = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return ctx.parsedType === ZodParsedType.undefined && (data = this._def.defaultValue()), this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => new ZodDefault({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof params.default == "function" ? params.default : () => params.default,
  ...processCreateParams(params)
});
var ZodCatch = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    }, result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    return isAsync(result) ? result.then((result2) => ({
      status: "valid",
      value: result2.status === "valid" ? result2.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    })) : {
      status: "valid",
      value: result.status === "valid" ? result.value : this._def.catchValue({
        get error() {
          return new ZodError(newCtx.common.issues);
        },
        input: newCtx.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => new ZodCatch({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof params.catch == "function" ? params.catch : () => params.catch,
  ...processCreateParams(params)
});
var ZodNaN = class extends ZodType {
  _parse(input) {
    if (this._getType(input) !== ZodParsedType.nan) {
      let ctx = this._getOrReturnCtx(input);
      return addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      }), INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => new ZodNaN({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...processCreateParams(params)
});
var ZodBranded = class extends ZodType {
  _parse(input) {
    let { ctx } = this._processInputParams(input), data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}, ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    let { status, ctx } = this._processInputParams(input);
    if (ctx.common.async)
      return (async () => {
        let inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), DIRTY(inResult.value)) : this._def.out._parseAsync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      })();
    {
      let inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return inResult.status === "aborted" ? INVALID : inResult.status === "dirty" ? (status.dirty(), {
        status: "dirty",
        value: inResult.value
      }) : this._def.out._parseSync({
        data: inResult.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
}, ZodReadonly = class extends ZodType {
  _parse(input) {
    let result = this._def.innerType._parse(input), freeze = (data) => (isValid(data) && (data.value = Object.freeze(data.value)), data);
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => new ZodReadonly({
  innerType: type,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...processCreateParams(params)
});
var late = {
  object: ZodObject.lazycreate
}, ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2.ZodString = "ZodString", ZodFirstPartyTypeKind2.ZodNumber = "ZodNumber", ZodFirstPartyTypeKind2.ZodNaN = "ZodNaN", ZodFirstPartyTypeKind2.ZodBigInt = "ZodBigInt", ZodFirstPartyTypeKind2.ZodBoolean = "ZodBoolean", ZodFirstPartyTypeKind2.ZodDate = "ZodDate", ZodFirstPartyTypeKind2.ZodSymbol = "ZodSymbol", ZodFirstPartyTypeKind2.ZodUndefined = "ZodUndefined", ZodFirstPartyTypeKind2.ZodNull = "ZodNull", ZodFirstPartyTypeKind2.ZodAny = "ZodAny", ZodFirstPartyTypeKind2.ZodUnknown = "ZodUnknown", ZodFirstPartyTypeKind2.ZodNever = "ZodNever", ZodFirstPartyTypeKind2.ZodVoid = "ZodVoid", ZodFirstPartyTypeKind2.ZodArray = "ZodArray", ZodFirstPartyTypeKind2.ZodObject = "ZodObject", ZodFirstPartyTypeKind2.ZodUnion = "ZodUnion", ZodFirstPartyTypeKind2.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", ZodFirstPartyTypeKind2.ZodIntersection = "ZodIntersection", ZodFirstPartyTypeKind2.ZodTuple = "ZodTuple", ZodFirstPartyTypeKind2.ZodRecord = "ZodRecord", ZodFirstPartyTypeKind2.ZodMap = "ZodMap", ZodFirstPartyTypeKind2.ZodSet = "ZodSet", ZodFirstPartyTypeKind2.ZodFunction = "ZodFunction", ZodFirstPartyTypeKind2.ZodLazy = "ZodLazy", ZodFirstPartyTypeKind2.ZodLiteral = "ZodLiteral", ZodFirstPartyTypeKind2.ZodEnum = "ZodEnum", ZodFirstPartyTypeKind2.ZodEffects = "ZodEffects", ZodFirstPartyTypeKind2.ZodNativeEnum = "ZodNativeEnum", ZodFirstPartyTypeKind2.ZodOptional = "ZodOptional", ZodFirstPartyTypeKind2.ZodNullable = "ZodNullable", ZodFirstPartyTypeKind2.ZodDefault = "ZodDefault", ZodFirstPartyTypeKind2.ZodCatch = "ZodCatch", ZodFirstPartyTypeKind2.ZodPromise = "ZodPromise", ZodFirstPartyTypeKind2.ZodBranded = "ZodBranded", ZodFirstPartyTypeKind2.ZodPipeline = "ZodPipeline", ZodFirstPartyTypeKind2.ZodReadonly = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var stringType = ZodString.create, numberType = ZodNumber.create, nanType = ZodNaN.create, bigIntType = ZodBigInt.create, booleanType = ZodBoolean.create, dateType = ZodDate.create, symbolType = ZodSymbol.create, undefinedType = ZodUndefined.create, nullType = ZodNull.create, anyType = ZodAny.create, unknownType = ZodUnknown.create, neverType = ZodNever.create, voidType = ZodVoid.create, arrayType = ZodArray.create, objectType = ZodObject.create, strictObjectType = ZodObject.strictCreate, unionType = ZodUnion.create, discriminatedUnionType = ZodDiscriminatedUnion.create, intersectionType = ZodIntersection.create, tupleType = ZodTuple.create, recordType = ZodRecord.create, mapType = ZodMap.create, setType = ZodSet.create, functionType = ZodFunction.create, lazyType = ZodLazy.create, literalType = ZodLiteral.create, enumType = ZodEnum.create, nativeEnumType = ZodNativeEnum.create, promiseType = ZodPromise.create, effectsType = ZodEffects.create, optionalType = ZodOptional.create, nullableType = ZodNullable.create, preprocessType = ZodEffects.createWithPreprocess, pipelineType = ZodPipeline.create;

// node_modules/zod/v4/mini/external.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/core/index.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/core/core.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  CONSTANT_CATCH: () => CONSTANT_CATCH,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  attachSchema: () => attachSchema,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  codePointLength: () => codePointLength,
  constantCatch: () => constantCatch,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  defineLazyInternal: () => defineLazyInternal,
  derived: () => derived,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder2,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType2,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  hide: () => hide,
  installLazyProp: () => installLazyProp,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  members: () => members,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  own: () => own,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  rawShape: () => rawShape,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  toZod: () => toZod,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
init_define_LUFF_CREW_ASSETS();
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function toZod() {
  return (schema) => schema;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  let numericValues = Object.values(entries).filter((v) => typeof v == "number");
  return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  return typeof value == "bigint" ? value.toString() : value;
}
var Cached = class {
  constructor(getter) {
    this._getter = getter, this._value = void 0;
  }
  get value() {
    let getter = this._getter;
    return getter !== void 0 && (this._value = getter(), this._getter = void 0), this._value;
  }
};
function cached(getter) {
  return new Cached(getter);
}
function nullish(input) {
  return input == null;
}
function cleanRegex(source) {
  let start = source.startsWith("^") ? 1 : 0, end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder2(val, step) {
  let ratio = val / step, roundedRatio = Math.round(ratio), tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
  return Math.abs(ratio - roundedRatio) < tolerance ? 0 : ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object3, key, getter) {
  let value;
  Object.defineProperty(object3, key, {
    get() {
      if (value !== EVALUATING)
        return value === void 0 && (value = EVALUATING, value = getter()), value;
    },
    set(v) {
      Object.defineProperty(object3, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function rawShape(def) {
  let desc = Object.getOwnPropertyDescriptor(def, "shape");
  return desc?.get ? desc.get.raw : desc?.value;
}
function sourceShape(schema) {
  return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key, getter) {
  Object.defineProperty(target, key, {
    get() {
      let value = getter();
      return assignProp(this, key, value), value;
    },
    enumerable: !0,
    configurable: !0
  });
}
function putProp(target, key, value) {
  key in target ? assignProp(target, key, value) : target[key] = value;
}
function mirrorShape(target, source, keys, wrap) {
  let raw = sourceShape(source);
  for (let key of keys) {
    let desc = Object.getOwnPropertyDescriptor(raw, key);
    desc.enumerable && (desc.get ? deferProp(target, key, () => {
      let value = source._zod.def.shape[key];
      return wrap ? wrap(value, key) : value;
    }) : putProp(target, key, wrap ? wrap(desc.value, key) : desc.value));
  }
}
function mirrorProps(target, source) {
  for (let key of Reflect.ownKeys(source)) {
    let desc = Object.getOwnPropertyDescriptor(source, key);
    desc.enumerable && (desc.get ? deferProp(target, key, () => source[key]) : putProp(target, key, desc.value));
  }
}
function mergeDefs(...defs) {
  let mergedDescriptors = {};
  for (let def of defs) {
    let descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  return path ? path.reduce((acc, key) => acc?.[key], obj) : obj;
}
function promiseAllObject(promisesObj) {
  let keys = Object.keys(promisesObj), promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    let resolvedObj = {};
    for (let i = 0; i < keys.length; i++)
      resolvedObj[keys[i]] = results[i];
    return resolvedObj;
  });
}
function randomString(length = 10) {
  let chars = "abcdefghijklmnopqrstuvwxyz", str = "";
  for (let i = 0; i < length; i++)
    str += chars[Math.floor(Math.random() * chars.length)];
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data == "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    let F = Function;
    return new F(""), !0;
  } catch {
    return !1;
  }
});
function isPlainObject(o) {
  if (isObject(o) === !1)
    return !1;
  let ctor = o.constructor;
  if (ctor === void 0 || typeof ctor != "function")
    return !0;
  let prot = ctor.prototype;
  return !(isObject(prot) === !1 || Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === !1);
}
function shallowClone(o) {
  return isPlainObject(o) ? { ...o } : Array.isArray(o) ? [...o] : o instanceof Map ? new Map(o) : o instanceof Set ? new Set(o) : o;
}
function numKeys(data) {
  let keyCount = 0;
  for (let key in data)
    Object.prototype.hasOwnProperty.call(data, key) && keyCount++;
  return keyCount;
}
var getParsedType2 = (data) => {
  let t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(data) ? "array" : data === null ? "null" : data.then && typeof data.then == "function" && data.catch && typeof data.catch == "function" ? "promise" : typeof Map < "u" && data instanceof Map ? "map" : typeof Set < "u" && data instanceof Set ? "set" : typeof Date < "u" && data instanceof Date ? "date" : typeof File < "u" && data instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
}, propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]), primitiveTypes = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  let cl = new inst._zod.constr(def ?? inst._zod.def);
  return (!def || params?.parent) && (cl._zod.parent = inst), cl;
}
function normalizeParams(_params) {
  let params = _params;
  if (!params)
    return {};
  if (typeof params == "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  return delete params.message, typeof params.error == "string" ? { ...params, error: () => params.error } : params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      return target ?? (target = getter()), Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      return target ?? (target = getter()), Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      return target ?? (target = getter()), Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      return target ?? (target = getter()), Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      return target ?? (target = getter()), Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      return target ?? (target = getter()), Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      return target ?? (target = getter()), Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  return typeof value == "bigint" ? value.toString() + "n" : typeof value == "string" ? `"${value}"` : `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional");
}
var NUMBER_FORMAT_RANGES = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  let currDef = schema._zod.def, checks = currDef.checks;
  if (checks && checks.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  let newShape = {};
  return mirrorShape(newShape, schema, maskedKeys(schema, mask)), clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function maskedKeys(schema, mask) {
  let raw = sourceShape(schema), keys = [];
  for (let key of Reflect.ownKeys(mask)) {
    if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable)
      throw new Error(`Unrecognized key: "${String(key)}"`);
    mask[key] && keys.push(key);
  }
  return keys;
}
function omit(schema, mask) {
  let currDef = schema._zod.def, checks = currDef.checks;
  if (checks && checks.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  let omitted = new Set(maskedKeys(schema, mask)), newShape = {};
  return mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key))), clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function extend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to extend: expected a plain object");
  let checks = schema._zod.def.checks;
  if (checks && checks.length > 0) {
    let existingShape = sourceShape(schema);
    for (let key of Reflect.ownKeys(shape))
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
  let newShape = {};
  return mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema))), mirrorProps(newShape, shape), newShape;
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
  if (!b?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (a._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  let newShape = {};
  mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a))), mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
  let def = mergeDefs(a._zod.def, {
    shape: newShape,
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class2, schema, mask, name = "partial") {
  let checks = schema._zod.def.checks;
  if (checks && checks.length > 0)
    throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
  let selected = mask ? new Set(maskedKeys(schema, mask)) : void 0, newShape = {};
  return mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class2 && ((value, key) => selected && !selected.has(key) ? value : new Class2({ type: "optional", innerType: value }))), clone(schema, mergeDefs(schema._zod.def, { shape: newShape, checks: [] }));
}
function required(Class2, schema, mask) {
  let selected = mask ? new Set(maskedKeys(schema, mask)) : void 0, newShape = {};
  return mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => (
    // overwrite with non-optional
    selected && !selected.has(key) ? value : new Class2({ type: "nonoptional", innerType: value })
  )), clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
  if (x.aborted === !0)
    return !0;
  for (let i = startIndex; i < x.issues.length; i++)
    if (x.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === !0)
    return !0;
  for (let i = startIndex; i < x.issues.length; i++)
    if (x.issues[i]?.continue === !1)
      return !0;
  return !1;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a3;
    return (_a3 = iss).path ?? (_a3.path = []), iss.path.unshift(path), iss;
  });
}
function unwrapMessage(message) {
  return typeof message == "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
  var _a3;
  for (let i = start; i < issues.length; i++)
    (_a3 = issues[i]).schema ?? (_a3.schema = inst);
}
function finalizeIssue(iss, ctx, config2) {
  var _a3;
  let traits = iss.inst?._zod?.traits;
  traits?.has("$ZodType") && (traits.has("$ZodCheck") ? (_a3 = iss).schema ?? (_a3.schema = iss.inst) : iss.schema = iss.inst);
  let schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0, message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input", full = {};
  for (let k of Object.keys(iss))
    k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__" || (full[k] = iss[k]);
  return full.path ?? (full.path = []), full.message = message, ctx?.reportInput && (full.input = iss.input), full;
}
function getSizableOrigin(input) {
  return input instanceof Set ? "set" : input instanceof Map ? "map" : input instanceof File ? "file" : "unknown";
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
  let units = str.length;
  if (!highSurrogate.test(str))
    return units;
  let count = units;
  for (let i = 0; i < units - 1; i++)
    (str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320 && (count--, i++);
  return count;
}
function getLengthableOrigin(input) {
  return Array.isArray(input) ? "array" : typeof input == "string" ? "string" : "unknown";
}
function parsedType(data) {
  let t = typeof data;
  switch (t) {
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "object": {
      if (data === null)
        return "null";
      if (Array.isArray(data))
        return "array";
      let obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor)
        return obj.constructor.name;
    }
  }
  return t;
}
function issue(...args) {
  let [iss, input, inst] = args;
  return typeof iss == "string" ? {
    message: iss,
    code: "custom",
    input,
    inst
  } : { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => Number.isNaN(Number.parseInt(k, 10))).map((el) => el[1]);
}
function base64ToUint8Array(base642) {
  let binaryString = atob(base642), bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++)
    bytes[i] = binaryString.charCodeAt(i);
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++)
    binaryString += String.fromCharCode(bytes[i]);
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url2) {
  let base642 = base64url2.replace(/-/g, "+").replace(/_/g, "/"), padding = "=".repeat((4 - base642.length % 4) % 4);
  return base64ToUint8Array(base642 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  let cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0)
    throw new Error("Invalid hex string length");
  let bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2)
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};
function members(proto, table) {
  for (let key in table) {
    let desc = Object.getOwnPropertyDescriptor(table, key);
    desc.get ? Object.defineProperty(proto, key, { ...desc, enumerable: !1 }) : defineBound(proto, key, desc.value);
  }
}
function own(inst, key, value, enumerable = !0) {
  return Object.defineProperty(inst, key, { configurable: !0, writable: !0, enumerable, value }), value;
}
function hide(inst, key, value) {
  return own(inst, key, value, !1);
}
// @__NO_SIDE_EFFECTS__
function derived(computes, table) {
  for (let key in computes) {
    let compute = computes[key];
    Object.defineProperty(table, key, {
      configurable: !0,
      enumerable: !0,
      get() {
        return own(this, key, compute(this));
      },
      set(value) {
        own(this, key, value);
      }
    });
  }
  return table;
}
function defineBound(proto, key, fn) {
  Object.defineProperty(proto, key, {
    configurable: !0,
    get() {
      return this == null ? fn : own(this, key, fn.bind(this));
    },
    set(value) {
      own(this, key, value);
    }
  });
}
function claim(inst, sentinel) {
  let proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? void 0 : proto;
}
var installing, broke = !1, breaker = {
  configurable: !0,
  get() {
    broke = !0;
  }
};
function defineLazyInternal(inst, key, compute) {
  let proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing !== inst._zod) {
    installing = void 0;
    return;
  }
  installing = inst._zod, Object.defineProperty(proto, key, {
    configurable: !0,
    get() {
      Object.defineProperty(this, key, breaker);
      let outer = broke;
      broke = !1;
      try {
        let value = compute(this);
        return broke ? delete this[key] : Object.defineProperty(this, key, { configurable: !0, writable: !0, value }), broke = broke || outer, value;
      } catch (err) {
        throw delete this[key], broke = broke || outer, err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: !0, writable: !0, value });
    }
  });
}
function installLazyProp(inst, key, make, enumerable) {
  let proto = claim(inst, key);
  proto && Object.defineProperty(proto, key, {
    configurable: !0,
    get() {
      let desc = { configurable: !0, writable: !0, enumerable, value: void 0 };
      return Object.defineProperty(this, key, desc), desc.value = make(this), Object.defineProperty(this, key, desc), desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: !0, writable: !0, enumerable, value });
    }
  });
}
var CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
  let fn = () => value;
  return fn[CONSTANT_CATCH] = !0, fn;
}

// node_modules/zod/v4/core/core.js
var _a;
var _zodDesc = { value: void 0, enumerable: !1 }, _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
  let E = _E;
  if (E) {
    let saved = E.stackTraceLimit;
    if (typeof saved == "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        return _E = null, new Definition();
      }
      try {
        return new Definition();
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition();
}
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, proto, params) {
  let zodProto = {};
  function Internals(def) {
    this.def = def, this.constr = _, this.traits = /* @__PURE__ */ new Set();
  }
  Internals.prototype = zodProto;
  let protoMembers = proto, initialized = protoMembers && /* @__PURE__ */ new WeakSet();
  function init(inst, def) {
    if (inst._zod) {
      if (inst._zod.traits.has(name))
        return;
    } else {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = void 0;
      }
    }
    if (inst._zod.traits.add(name), initializer3(inst, def), initialized) {
      let own2 = Object.getPrototypeOf(inst), ctorProto = inst._zod.constr.prototype, up = own2;
      for (; up && up !== ctorProto; )
        up = Object.getPrototypeOf(up);
      let target = up ?? own2;
      initialized.has(target) || (initialized.add(target), members(target, protoMembers));
    }
    let proto2 = _.prototype;
    for (let k in proto2)
      Object.prototype.hasOwnProperty.call(proto2, k) && (k in inst || (inst[k] = proto2[k].bind(inst)));
  }
  let Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    let inst = params?.Parent ? newError(Definition) : this;
    init(inst, def);
    let deferred = inst._zod.deferred;
    if (deferred) {
      for (let fn of deferred)
        fn();
      inst._zod.deferred = void 0;
    }
    let pp = globalThis.__zod_globalConfig?.postProcessor;
    return pp && pp(inst), inst;
  }
  return Object.defineProperty(_, "init", { value: init }), Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => params?.Parent && inst instanceof params.Parent ? !0 : inst?._zod?.traits?.has(name)
  }), Object.defineProperty(_, "name", { value: name }), _;
}
var $ZodAsyncError = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`), this.name = "ZodEncodeError";
  }
};
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  return newConfig && Object.assign(globalConfig, newConfig), globalConfig;
}

// node_modules/zod/v4/core/parse.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/core/errors.js
init_define_LUFF_CREW_ASSETS();
function _getMessage() {
  let internals = this._zod;
  return internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2)), internals.message;
}
function _setMessage(value) {
  this._zod.message = value;
}
var _messageDesc = {
  get: _getMessage,
  set: _setMessage,
  enumerable: !0,
  configurable: !0
}, _issuesDesc = { value: void 0, enumerable: !1 }, _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), initializer = (inst, def) => {
  inst.name = "$ZodError", _issuesDesc.value = def, Object.defineProperty(inst, "issues", _issuesDesc), _issuesDesc.value = void 0, Object.defineProperty(inst, "message", _messageDesc);
  let proto = Object.getPrototypeOf(inst);
  _installedToString.has(proto) || (_installedToString.add(proto), Object.defineProperty(proto, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      let value = () => this.message;
      return Object.defineProperty(this, "toString", { value, configurable: !0, writable: !0 }), value;
    },
    set(value) {
      Object.defineProperty(this, "toString", { value, configurable: !0, writable: !0 });
    }
  }));
}, $ZodError = $constructor("$ZodError", initializer), $ZodRealError = $constructor("$ZodError", initializer, void 0, {
  Parent: Error
});
function node(obj, key, make) {
  return Object.prototype.hasOwnProperty.call(obj, key) || (key === "__proto__" ? Object.defineProperty(obj, key, { value: make(), writable: !0, enumerable: !0, configurable: !0 }) : obj[key] = make()), obj[key];
}
function flattenError(error2, mapper = (issue2) => issue2.message) {
  let fieldErrors = {}, formErrors = [];
  for (let sub of error2.issues)
    sub.path.length > 0 ? node(fieldErrors, sub.path[0], () => []).push(mapper(sub)) : formErrors.push(mapper(sub));
  return { formErrors, fieldErrors };
}
function formatError(error2, mapper = (issue2) => issue2.message) {
  let fieldErrors = { _errors: [] }, processError = (error3, path = []) => {
    for (let issue2 of error3.issues)
      if (issue2.code === "invalid_union" && issue2.errors.length)
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      else if (issue2.code === "invalid_key")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else if (issue2.code === "invalid_element")
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      else {
        let fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0)
          fieldErrors._errors.push(mapper(issue2));
        else {
          let curr = fieldErrors, i = 0;
          for (; i < fullpath.length; ) {
            let el = fullpath[i], terminal = i === fullpath.length - 1;
            if (el === "_errors") {
              terminal && curr._errors.push(mapper(issue2)), i++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(curr, el) || Object.defineProperty(curr, el, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            let node2 = curr[el];
            terminal && node2._errors.push(mapper(issue2)), curr = node2, i++;
          }
        }
      }
  };
  return processError(error2), fieldErrors;
}

// node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
  return { callee: params?.callee ?? callee, Err: params?.Err };
}
var _parse = (_Err) => {
  let fn = (schema, value, _ctx, _params) => {
    let ctx = _ctx ? { ..._ctx, async: !1 } : { async: !1 }, result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      throw new $ZodAsyncError();
    if (result.issues.length) {
      let e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      throw captureStackTrace(e, _params?.callee ?? fn), e;
    }
    return result.value;
  };
  return fn;
}, parse = /* @__PURE__ */ _parse($ZodRealError), _parseAsync = (_Err) => {
  let fn = async (schema, value, _ctx, params) => {
    let ctx = _ctx ? { ..._ctx, async: !0 } : { async: !0 }, result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise && (result = await result), result.issues.length) {
      let e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      throw captureStackTrace(e, params?.callee ?? fn), e;
    }
    return result.value;
  };
  return fn;
}, parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError), _safeParse = (_Err) => (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, async: !1 } : { async: !1 }, result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    throw new $ZodAsyncError();
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: !0, data: result.value };
}, safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
function failure(Err, issues, ctx) {
  let error2;
  return {
    success: !1,
    get error() {
      return error2 || (error2 = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config()))), issues = void 0, ctx = void 0), error2;
    },
    set error(e) {
      error2 = e, issues = void 0, ctx = void 0;
    }
  };
}
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, async: !0 } : { async: !0 }, result = schema._zod.run({ value, issues: [] }, ctx);
  return result instanceof Promise && (result = await result), result.issues.length ? failure(_Err, result.issues, ctx) : { success: !0, data: result.value };
}, safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError), COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), validate = ((schema, value, _ctx) => {
  let validator = schema._zod.bag.validator;
  if (validator !== void 0) {
    if (validator(value) !== COMPILE_INVALID)
      return !0;
    if (validator.definite === !0 && _ctx === void 0)
      return !1;
  }
  return validateFallback(schema, value, _ctx);
});
function validateFallback(schema, value, _ctx) {
  let ctx = _ctx ? { ..._ctx, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, fallbackRun = schema._zod.bag.fallbackRun, result;
  if (fallbackRun ? (ctx[COMPILE_FALLBACK] = !0, result = fallbackRun({ value, issues: [] }, ctx)) : result = schema._zod.run({ value, issues: [] }, ctx), result instanceof Promise)
    throw new $ZodAsyncError();
  return result.issues.length === 0;
}
var validateAsync = async (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 }, result = schema._zod.run({ value, issues: [] }, ctx);
  return result instanceof Promise && (result = await result), result.issues.length === 0;
}, _encode = (_Err) => {
  let parse3 = _parse(_Err), fn = (schema, value, _ctx, _params) => {
    let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse3(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decode = (_Err) => {
  let parse3 = _parse(_Err), fn = (schema, value, _ctx, _params) => parse3(schema, value, _ctx, finalizeParams(fn, _params));
  return fn;
};
var _encodeAsync = (_Err) => {
  let parseAsync3 = _parseAsync(_Err), fn = async (schema, value, _ctx, _params) => {
    let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync3(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decodeAsync = (_Err) => {
  let parseAsync3 = _parseAsync(_Err), fn = async (schema, value, _ctx, _params) => await parseAsync3(schema, value, _ctx, finalizeParams(fn, _params));
  return fn;
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => _safeParse(_Err)(schema, value, _ctx);
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  let ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => _safeParseAsync(_Err)(schema, value, _ctx);

// node_modules/zod/v4/core/schemas.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/core/checks.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/core/regexes.js
init_define_LUFF_CREW_ASSETS();
var cuid = /^[cC][0-9a-z]{6,}$/, cuid2 = /^[0-9a-z]+$/, ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, xid = /^[0-9a-vA-V]{20}$/, ksuid = /^[A-Za-z0-9]{27}$/, nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, uuid = (version2) => version2 ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
var email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var httpProtocol = /^https?$/, e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function anchor(source) {
  return new RegExp(`^${source}$`);
}
var date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  let hhmm = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof args.precision == "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  let opts = ["Z"];
  args.offset && opts.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let qualified = `${timeSource({ precision: args.precision, seconds: !0 })}(?:${opts.join("|")})`, timeRegex2 = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource}T(?:${timeRegex2})$`);
}
var anyString = /^[\s\S]{0,}$/;
var integer = /^-?\d+$/, number = /^-?\d+(?:\.\d+)?$/, boolean = /^(?:true|false)$/i, _null = /^null$/i;
var lowercase = /^[^A-Z]*$/, uppercase = /^[^a-z]*$/;

// node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a3;
  inst._zod ?? (inst._zod = {}), inst._zod.def = def, (_a3 = inst._zod).onattach ?? (_a3.onattach = []);
});
var _whenHasLength = (payload) => {
  let val = payload.value;
  return !nullish(val) && val.length !== void 0;
}, numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  let origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    (def.inclusive ? payload.value <= def.value : payload.value < def.value) || payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_big",
      maximum: typeof def.value == "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  let origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    (def.inclusive ? payload.value >= def.value : payload.value > def.value) || payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_small",
      minimum: typeof def.value == "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def), inst._zod.check = (payload) => {
    if (typeof payload.value != typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof payload.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      def.value !== BigInt(0) && payload.value % def.value === BigInt(0)
    ) : floatSafeRemainder2(payload.value, def.value) === 0) || payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def), def.format = def.format || "float64";
  let isInt = def.format?.includes("int"), origin = isInt ? "int" : "number", [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.check = (payload) => {
    let input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: !1,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        input > 0 ? payload.issues.push({
          input,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst,
          origin,
          inclusive: !0,
          continue: !def.abort
        }) : payload.issues.push({
          input,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst,
          origin,
          inclusive: !0,
          continue: !def.abort
        });
        return;
      }
    }
    input < minimum && payload.issues.push({
      origin: "number",
      input,
      code: "too_small",
      minimum,
      inclusive: !0,
      inst,
      continue: !def.abort
    }), input > maximum && payload.issues.push({
      origin: "number",
      input,
      code: "too_big",
      maximum,
      inclusive: !0,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength), inst._zod.check = (payload) => {
    let input = payload.value, units = input.length;
    if ((typeof input == "string" && units > def.maximum ? codePointLength(input) : units) <= def.maximum)
      return;
    let origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength), inst._zod.check = (payload) => {
    let input = payload.value, units = input.length;
    if ((typeof input == "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units) >= def.minimum)
      return;
    let origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: !0,
      input,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a3;
  $ZodCheck.init(inst, def), (_a3 = inst._zod.def).when ?? (_a3.when = _whenHasLength), inst._zod.check = (payload) => {
    let input = payload.value, units = input.length, length = typeof input == "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
    if (length === def.length)
      return;
    let origin = getLengthableOrigin(input), tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: !0,
      exact: !0,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a3, _b;
  $ZodCheck.init(inst, def), def.pattern ? (_a3 = inst._zod).check ?? (_a3.check = (payload) => {
    def.pattern.lastIndex = 0, !def.pattern.test(payload.value) && payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: def.format,
      input: payload.value,
      ...def.pattern ? { pattern: def.pattern.toString() } : {},
      inst,
      continue: !def.abort
    });
  }) : (_b = inst._zod).check ?? (_b.check = () => {
  });
}), $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def), inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0, !def.pattern.test(payload.value) && payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase), $ZodCheckStringFormat.init(inst, def);
}), $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase), $ZodCheckStringFormat.init(inst, def);
}), $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  let escapedRegex = escapeRegex(def.includes), pattern = new RegExp(typeof def.position == "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern, inst._zod.check = (payload) => {
    payload.value.includes(def.includes, def.position) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  let pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern), inst._zod.check = (payload) => {
    payload.value.startsWith(def.prefix) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  let pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern), inst._zod.check = (payload) => {
    payload.value.endsWith(def.suffix) || payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def), inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
init_define_LUFF_CREW_ASSETS();
var Doc = class {
  constructor(args = [], closed = {}) {
    this.content = [], this.indent = 0, this.args = args, this.closed = closed;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(fn) {
    this.indent += 1;
    try {
      fn(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(arg) {
    if (typeof arg == "function") {
      arg(this, { execution: "sync" }), arg(this, { execution: "async" });
      return;
    }
    let lines = arg.split(`
`).filter((x) => x), minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length)), dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (let line of dedented)
      this.content.push(line);
  }
  compile() {
    let F = Function, content = this?.content ?? [""];
    return new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join(`
`)}
};`)(...Object.values(this.closed));
  }
};

// node_modules/zod/v4/core/versions.js
init_define_LUFF_CREW_ASSETS();
var version = {
  major: 4,
  minor: 6,
  patch: 5
};

// node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a3;
  inst ?? (inst = {}), inst._zod.def = def, inst._zod.bag = inst._zod.bag || {}, inst._zod.version = version;
  let defChecks = inst._zod.def.checks, checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
  for (let ch of checks)
    for (let fn of ch._zod.onattach)
      fn(inst);
  if (checks.length === 0)
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []), inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  else {
    let runChecks = (payload, checks2, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted2 = aborted(payload), asyncResult;
      for (let ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload) || !ch._zod.def.when(payload))
            continue;
        } else if (isAborted2)
          continue;
        let currLen = payload.issues.length, _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === !1)
          throw new $ZodAsyncError();
        if (asyncResult || _ instanceof Promise)
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _, payload.issues.length !== currLen && (attachSchema(payload.issues, currLen, inst), isAborted2 || (isAborted2 = aborted(payload, currLen)));
          });
        else {
          if (payload.issues.length === currLen)
            continue;
          attachSchema(payload.issues, currLen, inst), isAborted2 || (isAborted2 = aborted(payload, currLen));
        }
      }
      return asyncResult ? asyncResult.then(() => payload) : payload;
    }, handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary))
        return canary.aborted = !0, canary;
      let checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === !1)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks)
        return inst._zod.parse(payload, ctx);
      if (ctx.direction === "backward") {
        let canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: !0 });
        return canary instanceof Promise ? canary.then((canary2) => handleCanaryResult(canary2, payload, ctx)) : handleCanaryResult(canary, payload, ctx);
      }
      let result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === !1)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return hide(this, "~standard", standardProps(this));
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  }
}), toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync2(inst, value) {
  let ctx = { async: !0 };
  return toStandardResult(await inst._zod.run({ value, issues: [] }, ctx), ctx);
}
function standardProps(inst) {
  return {
    validate: (value) => {
      let ctx = { async: !1 };
      try {
        let r = inst._zod.run({ value, issues: [] }, ctx);
        if (!(r instanceof Promise))
          return toStandardResult(r, ctx);
      } catch {
      }
      return validateAsync2(inst, value);
    },
    vendor: "zod",
    version: 1
  };
}
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = def.pattern ?? anyString, inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch {
      }
    return typeof payload.value == "string" || payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    }), payload;
  };
}), $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def), $ZodString.init(inst, def);
}), $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid), $ZodStringFormat.init(inst, def);
}), $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    let v = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
}), $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email), $ZodStringFormat.init(inst, def);
}), URL_BAD_FORMAT = 1, URL_UNPARSEABLE = 2;
function canParseURL(input) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(input) : (new URL(input), !0);
  } catch {
    return !1;
  }
}
function validateURL(trimmed, def) {
  return !("normalize" in def) && !("hostname" in def) && !("protocol" in def) ? canParseURL(trimmed) || URL_UNPARSEABLE : parseURLObject(trimmed, def);
}
function parseURLObject(trimmed, def) {
  if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed))
    return URL_BAD_FORMAT;
  try {
    if (typeof URL < "u") {
      let URLStatic = URL;
      if (typeof URLStatic.parse == "function")
        return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
    }
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE;
  }
}
var asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(value) {
  return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
  return hostname.lastIndex = 0, hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
  return protocol.lastIndex = 0, protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    try {
      let trimmed = payload.value.trim(), url = validateURL(trimmed, def);
      if (url === URL_BAD_FORMAT) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === URL_UNPARSEABLE) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === !0) {
        payload.value = stripTabAndNewline(trimmed);
        return;
      }
      def.hostname && !urlHostnameOk(url, def.hostname) && payload.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: def.hostname.source,
        input: payload.value,
        inst,
        continue: !def.abort
      }), def.protocol && !urlProtocolOk(url, def.protocol) && payload.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: def.protocol.source,
        input: payload.value,
        inst,
        continue: !def.abort
      }), payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
      return;
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
}), $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji()), $ZodStringFormat.init(inst, def);
}), $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === void 0 ? nanoid : nanoidOfLength(def.length)), $ZodStringFormat.init(inst, def);
}), $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid), $ZodStringFormat.init(inst, def);
}), $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2), $ZodStringFormat.init(inst, def);
}), $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid), $ZodStringFormat.init(inst, def);
}), $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid), $ZodStringFormat.init(inst, def);
}), $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid), $ZodStringFormat.init(inst, def);
}), $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def)), $ZodStringFormat.init(inst, def);
}), $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date), $ZodStringFormat.init(inst, def);
}), $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def)), $ZodStringFormat.init(inst, def);
}), $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration), $ZodStringFormat.init(inst, def);
}), $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4), $ZodStringFormat.init(inst, def);
}), ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
  return ipv6Alphabet.test(value) ? canParseURL(`http://[${value}]`) : !1;
}
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6), $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    isValidIPv6(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4), $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
  let parts = value.split("/");
  if (parts.length !== 2)
    return !1;
  let [address, prefix] = parts;
  if (!prefix)
    return !1;
  let prefixNum = Number(prefix);
  return `${prefixNum}` !== prefix || prefixNum < 0 || prefixNum > 128 ? !1 : isValidIPv6(address);
}
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6), $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    isValidCIDRv6(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64(data) {
  if (data === "")
    return !0;
  if (/\s/.test(data) || data.length % 4 !== 0)
    return !1;
  try {
    return atob(data), !0;
  } catch {
    return !1;
  }
}
var base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/, $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64Charset), $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    isValidBase64(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
  if (!base64urlCharset.test(data))
    return !1;
  let base642 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/"), padded = base642.padEnd(Math.ceil(base642.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64urlCharset), $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    isValidBase64URL(payload.value) || payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
}), $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164), $ZodStringFormat.init(inst, def);
});
function isValidJWT2(token, algorithm = null) {
  try {
    let tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return !1;
    let [header] = tokensParts;
    if (!header)
      return !1;
    let parsedHeader = JSON.parse(atob(header));
    return !("typ" in parsedHeader && parsedHeader?.typ !== "JWT" || !parsedHeader.alg || algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm));
  } catch {
    return !1;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def), inst._zod.check = (payload) => {
    isValidJWT2(payload.value, def.alg) || payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = number, inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch {
      }
    let input = payload.value;
    if (typeof input == "number" && !Number.isNaN(input) && Number.isFinite(input))
      return payload;
    let received = typeof input == "number" ? Number.isNaN(input) ? "NaN" : Number.isFinite(input) ? void 0 : String(input) : void 0;
    return payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    }), payload;
  };
}), $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def), $ZodNumber.init(inst, def);
}), $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = boolean, inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = !!payload.value;
      } catch {
      }
    let input = payload.value;
    return typeof input == "boolean" || payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.pattern = _null, inst._zod.values = /* @__PURE__ */ new Set([null]), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return input === null || payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    }), payload;
  };
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload) => payload;
}), $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, _ctx) => (payload.issues.push({
    expected: "never",
    code: "invalid_type",
    input: payload.value,
    inst
  }), payload);
});
function handleArrayResult(result, final, index) {
  result.issues.length && final.issues.push(...prefixIssues(index, result.issues)), final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  let memo2 = globalConfig.memoizer;
  memo2?.attach(inst), inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!Array.isArray(input))
      return payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      }), payload;
    payload.value = memo2 ? memo2.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    let proms = [], abortEarly = ctx?.abortEarly;
    for (let i = 0; i < input.length; i++) {
      let item = input[i], result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise)
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      else if (handleArrayResult(result, payload, i), abortEarly && result.issues.length !== 0 && aborted(result))
        break;
    }
    return proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
});
function handlePropertyResult(result, final, key, input, optin, optout) {
  let isPresent = key in input, isOptionalOut = optout === "optional";
  if (!(!isPresent && isOptionalOut && optin === "optional")) {
    if (result.issues.length) {
      if (optin !== void 0 && isOptionalOut && !isPresent)
        return;
      final.issues.push(...prefixIssues(key, result.issues));
    }
    if (!isPresent && optin === void 0) {
      result.issues.length || final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
      return;
    }
    result.value === void 0 ? (isPresent || optin === "defaulted" && !isOptionalOut) && (final.value[key] = void 0) : final.value[key] = result.value;
  }
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
  let keys = Object.keys(def.shape), ownSymbols = Object.getOwnPropertySymbols(def.shape), symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS, allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (let k of allKeys)
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
  let okeys = optionalKeys(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
  let unrecognized = [], keySet = def.keySet, _catchall = def.catchall._zod, t = _catchall.def.type, optin = _catchall.optin, optout = _catchall.optout, seen = 0;
  for (let key in input) {
    if (abortEarly && payload.issues.length !== seen) {
      if (aborted(payload, seen))
        break;
      seen = payload.issues.length;
    }
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      t === "never" && unrecognized.push(key);
      continue;
    }
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    let r = _catchall.run({ value: input[key], issues: [] }, ctx);
    r instanceof Promise ? proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout))) : handlePropertyResult(r, payload, key, input, optin, optout);
  }
  return unrecognized.length && payload.issues.push({
    code: "unrecognized_keys",
    keys: unrecognized,
    input,
    inst,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), proms.length ? Promise.all(proms).then(() => payload) : payload;
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  let desc = Object.getOwnPropertyDescriptor(def, "shape"), sh = desc?.get ? desc.get.raw : def.shape ?? {};
  if (sh) {
    let get = () => {
      let newSh = { ...sh };
      return Object.defineProperty(def, "shape", { value: newSh }), get.raw = newSh, newSh;
    };
    get.raw = sh, Object.defineProperty(def, "shape", { get });
  }
  let _normalized = cached(() => normalizeDef(def));
  defineLazyInternal(inst, "propValues", (zod) => {
    let shape = zod.def.shape, propValues = {};
    for (let key in shape) {
      let field = shape[key]._zod;
      if (field.values) {
        Object.prototype.hasOwnProperty.call(propValues, key) || assignProp(propValues, key, /* @__PURE__ */ new Set());
        for (let v of field.values)
          propValues[key].add(v);
        field.optin !== void 0 && propValues[key].add(void 0);
      }
    }
    return propValues;
  });
  let isObject2 = isObject, catchall = def.catchall, value, memo2 = globalConfig.memoizer;
  memo2?.attach(inst), inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    let input = payload.value;
    if (!isObject2(input))
      return payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      }), payload;
    payload.value = memo2 ? memo2.alloc(inst, payload, {}, ctx) : {};
    let proms = [], shape = value.shape, abortEarly = ctx?.abortEarly, seen = payload.issues.length;
    for (let key of value.allKeys) {
      if (abortEarly && payload.issues.length !== seen) {
        if (aborted(payload, seen))
          break;
        seen = payload.issues.length;
      }
      if (key === "__proto__")
        continue;
      let el = shape[key], optin = el._zod.optin, optout = el._zod.optout, r = el._zod.run({ value: input[key], issues: [] }, ctx);
      r instanceof Promise ? proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout))) : handlePropertyResult(r, payload, key, input, optin, optout);
    }
    return catchall ? handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === !0) : proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
}), $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  let superParse = inst._zod.parse, _normalized = cached(() => normalizeDef(def)), memo2 = globalConfig.memoizer, generateFastpass = (shape) => {
    let normalized = _normalized.value, syms = normalized.symbolKeys, doc = new Doc(["payload", "ctx"], { shape, inst, memo: memo2, syms }), parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`, prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    doc.write("const input = payload.value;");
    let ids = /* @__PURE__ */ Object.create(null), counter = 0;
    for (let key of normalized.allKeys)
      ids[key] = `key_${counter++}`;
    doc.write(memo2 ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (let key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      let id = ids[key], k = typeof key == "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key), isPresent = `${k} in input`, schema = shape[key], optin = schema?._zod?.optin, isOptionalIn = optin !== void 0, isOptionalOut = schema?._zod?.optout === "optional";
      if (doc.write(`const ${id} = ${parseStr(k)};`), isOptionalIn && isOptionalOut) {
        let assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
        doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else isOptionalIn ? (doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `), optin === "defaulted" ? doc.write(`newResult[${k}] = ${id}.value;`) : doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `)) : doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
    }
    return doc.write("payload.value = newResult;"), doc.write("return payload;"), doc.compile();
  }, fastpass, isObject2 = isObject, jit = !globalConfig.jitless, fastEnabled = jit && allowsEval.value, catchall = def.catchall, value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    let input = payload.value;
    return isObject2(input) ? jit && fastEnabled && ctx?.async === !1 && ctx.jitless !== !0 ? (fastpass || (fastpass = generateFastpass(def.shape)), payload = fastpass(payload, ctx), catchall ? handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === !0) : payload) : superParse(payload, ctx) : (payload.issues.push({
      expected: "object",
      code: "invalid_type",
      input,
      inst
    }), payload);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (let result of results)
    if (result.issues.length === 0)
      return final.value = result.value, final;
  let nonaborted = results.filter((r) => !aborted(r));
  return nonaborted.length === 1 ? (final.value = nonaborted[0].value, nonaborted[0]) : (final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  }), final);
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0), defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), defineLazyInternal(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values))
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
  }), defineLazyInternal(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      let patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
  });
  let first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first)
      return first(payload, ctx);
    let async = !1, results = [];
    for (let option of def.options) {
      let result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise)
        results.push(result), async = !0;
      else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    return async ? Promise.all(results).then((results2) => handleUnionResults(results2, payload, inst, ctx)) : handleUnionResults(results, payload, inst, ctx);
  };
});
function discriminatorMap(def) {
  let map = /* @__PURE__ */ new Map();
  for (let option of def.options) {
    let values = option._zod.propValues?.[def.discriminator];
    if (!values || values.size === 0)
      throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
    for (let value of values)
      if (map.has(value)) {
        if (value !== void 0)
          throw new Error(`Duplicate discriminator value "${String(value)}"`);
        map.set(value, null);
      } else
        map.set(value, option);
  }
  return map;
}
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = !1, $ZodUnion.init(inst, def);
  let _super = inst._zod.parse;
  defineLazyInternal(inst, "propValues", (zod) => {
    let propValues = {}, undefinedCount = 0;
    for (let option of zod.def.options) {
      let pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
      pv[zod.def.discriminator]?.has(void 0) && undefinedCount++;
      for (let [k, v] of Object.entries(pv)) {
        Object.prototype.hasOwnProperty.call(propValues, k) || assignProp(propValues, k, /* @__PURE__ */ new Set());
        for (let val of v)
          propValues[k].add(val);
      }
    }
    return !zod.def.unionFallback && undefinedCount > 1 && propValues[zod.def.discriminator]?.delete(void 0), propValues;
  }), def.options.forEach((option, i) => {
    let propShape = rawShape(option._zod.def);
    if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator))
      throw new Error(`Invalid discriminated union option at index "${i}"`);
  });
  let disc = cached(() => discriminatorMap(def));
  inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!isObject(input))
      return payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      }), payload;
    let value = input?.[def.discriminator], opt = disc.value.get(value);
    return opt && (value !== void 0 || ctx.direction !== "backward") ? opt._zod.run(payload, ctx) : def.unionFallback || ctx.direction === "backward" ? _super(payload, ctx) : (payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      options: Array.from(disc.value.keys()).filter((value2) => disc.value.get(value2) !== null),
      input,
      path: [def.discriminator],
      inst
    }), payload);
  };
}), $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.parse = (payload, ctx) => {
    let input = payload.value, left = def.left._zod.run({ value: input, issues: [] }, ctx), right = def.right._zod.run({ value: input, issues: [] }, ctx);
    return left instanceof Promise || right instanceof Promise ? Promise.all([left, right]).then(([left2, right2]) => handleIntersectionResults(payload, left2, right2)) : handleIntersectionResults(payload, left, right);
  };
});
function mergeValues2(a, b) {
  if (a === b)
    return { valid: !0, data: a };
  if (a instanceof Date && b instanceof Date && +a == +b)
    return { valid: !0, data: a };
  if (isPlainObject(a) && isPlainObject(b)) {
    let bKeys = Object.keys(b), sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1), newObj = { ...a, ...b };
    Object.prototype.hasOwnProperty.call(newObj, "__proto__") && delete newObj.__proto__;
    for (let key of sharedKeys) {
      if (key === "__proto__")
        continue;
      let sharedValue = mergeValues2(a[key], b[key]);
      if (!sharedValue.valid)
        return {
          valid: !1,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      newObj[key] = sharedValue.data;
    }
    return { valid: !0, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return { valid: !1, mergeErrorPath: [] };
    let newArray = [];
    for (let index = 0; index < a.length; index++) {
      let itemA = a[index], itemB = b[index], sharedValue = mergeValues2(itemA, itemB);
      if (!sharedValue.valid)
        return {
          valid: !1,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      newArray.push(sharedValue.data);
    }
    return { valid: !0, data: newArray };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  let unrecKeys = /* @__PURE__ */ new Map(), unrecIssue, keyIssues = /* @__PURE__ */ new Map(), collect = (iss, side) => {
    let keys;
    if (iss.code === "unrecognized_keys" && !iss.path?.length)
      unrecIssue ?? (unrecIssue = iss), keys = iss.keys;
    else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
      let k = String(iss.path[0]);
      keyIssues.has(k) || keyIssues.set(k, iss), keys = [k];
    } else
      return !1;
    for (let k of keys)
      unrecKeys.has(k) || unrecKeys.set(k, {}), unrecKeys.get(k)[side] = !0;
    return !0;
  };
  for (let iss of left.issues)
    collect(iss, "l") || result.issues.push(iss);
  for (let iss of right.issues)
    collect(iss, "r") || result.issues.push(iss);
  let bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length) {
    let aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
    aggregated.length && result.issues.push({ ...unrecIssue, keys: aggregated });
    for (let k of bothKeys)
      !aggregated.includes(k) && keyIssues.has(k) && result.issues.push(keyIssues.get(k));
  }
  let merged = mergeValues2(left.value, right.value);
  if (!merged.valid) {
    if (aborted(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  return result.value = merged.data, result;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  let memo2 = globalConfig.memoizer;
  memo2?.attach(inst), inst._zod.parse = (payload, ctx) => {
    let input = payload.value;
    if (!isPlainObject(input))
      return payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      }), payload;
    let proms = [], values = def.keyType._zod.values;
    if (values && !def.partial) {
      payload.value = memo2 ? memo2.alloc(inst, payload, {}, ctx) : {};
      let recordKeys = /* @__PURE__ */ new Set();
      for (let key of values)
        if (typeof key == "string" || typeof key == "number" || typeof key == "symbol") {
          if (recordKeys.add(typeof key == "number" ? key.toString() : key), key === "__proto__")
            continue;
          let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (keyResult.issues.length) {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
            continue;
          }
          let outKey = keyResult.value;
          if (outKey === "__proto__")
            continue;
          let result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          result instanceof Promise ? proms.push(result.then((result2) => {
            result2.issues.length && payload.issues.push(...prefixIssues(key, result2.issues)), payload.value[outKey] = result2.value;
          })) : (result.issues.length && payload.issues.push(...prefixIssues(key, result.issues)), payload.value[outKey] = result.value);
        }
      let unrecognized;
      for (let key in input)
        if (!recordKeys.has(key))
          if (def.mode === "loose") {
            if (key === "__proto__")
              continue;
            payload.value[key] = input[key];
          } else
            unrecognized = unrecognized ?? [], unrecognized.push(key);
      unrecognized && unrecognized.length > 0 && payload.issues.push({
        code: "unrecognized_keys",
        input,
        inst,
        keys: unrecognized,
        continue: !0
      });
    } else {
      payload.value = memo2 ? memo2.alloc(inst, payload, {}, ctx) : {};
      let unrecognized;
      for (let key of Reflect.ownKeys(input)) {
        if (key === "__proto__" || !Object.prototype.propertyIsEnumerable.call(input, key))
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof key == "string" && number.test(key) && keyResult.issues.length) {
          let retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          retryResult.issues.length === 0 && (keyResult = retryResult);
        }
        if (keyResult.issues.length) {
          def.mode === "loose" ? payload.value[key] = input[key] : values ? (unrecognized = unrecognized ?? [], unrecognized.push(key)) : payload.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
            input: key,
            path: [key],
            inst
          });
          continue;
        }
        let outKey = keyResult.value;
        if (outKey === "__proto__")
          continue;
        let result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        result instanceof Promise ? proms.push(result.then((result2) => {
          result2.issues.length && payload.issues.push(...prefixIssues(key, result2.issues)), payload.value[outKey] = result2.value;
        })) : (result.issues.length && payload.issues.push(...prefixIssues(key, result.issues)), payload.value[outKey] = result.value);
      }
      unrecognized && unrecognized.length > 0 && payload.issues.push({
        code: "unrecognized_keys",
        input,
        inst,
        keys: unrecognized,
        continue: !0
      });
    }
    return proms.length ? Promise.all(proms).then(() => payload) : payload;
  };
});
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  let values = getEnumValues(def.entries), valuesSet = new Set(values);
  inst._zod.values = valuesSet, defineLazyInternal(inst, "pattern", (zod) => {
    let patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
    return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return valuesSet.has(input) || payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    }), payload;
  };
}), $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  let values = new Set(def.values);
  inst._zod.values = values, defineLazyInternal(inst, "pattern", (zod) => {
    let vals = zod.def.values;
    return new RegExp(vals.length ? `^(${vals.map((o) => typeof o == "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$");
  }), inst._zod.parse = (payload, _ctx) => {
    let input = payload.value;
    return values.has(input) || payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    }), payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "optional", globalConfig.memoizer?.guard(inst), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      throw new $ZodEncodeError(inst.constructor.name);
    let _out = def.transform(payload.value, payload);
    if (ctx.async)
      return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output2) => (payload.value = output2, payload));
    if (_out instanceof Promise)
      throw new $ZodAsyncError();
    return payload.value = _out, payload;
  };
});
function handleOptionalResult(payload, result) {
  return payload.value = result.issues.length ? void 0 : result.value, payload;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), inst._zod.optout = "optional", defineLazyInternal(inst, "values", (zod) => {
    let values = zod.def.innerType._zod.values;
    return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
  }), defineLazyInternal(inst, "pattern", (zod) => {
    let pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  }), inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      let result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      return result instanceof Promise ? result.then((result2) => handleOptionalResult(payload, result2)) : handleOptionalResult(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
}), $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def), defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values), defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern), inst._zod.parse = (payload, ctx) => def.innerType._zod.run(payload, ctx);
}), $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin), defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout), defineLazyInternal(inst, "pattern", (zod) => {
    let pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  }), defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0), inst._zod.parse = (payload, ctx) => payload.value === null ? payload : def.innerType._zod.run(payload, ctx);
}), $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "defaulted", defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    if (payload.value === void 0)
      return payload.value = def.defaultValue, payload;
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then((result2) => handleDefaultResult(result2, def)) : handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  return payload.value === void 0 && (payload.value = def.defaultValue), payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def), inst._zod.optin = "defaulted", defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values), inst._zod.parse = (payload, ctx) => (ctx.direction === "backward" || payload.value === void 0 && (payload.value = def.defaultValue), def.innerType._zod.run(payload, ctx));
}), $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "values", (zod) => {
    let v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  }), inst._zod.parse = (payload, ctx) => {
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then((result2) => handleNonOptionalResult(result2, inst)) : handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  return !payload.issues.length && payload.value === void 0 && payload.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: payload.value,
    inst
  }), payload;
}
function handleCatchResult(payload, result, def, ctx) {
  return result.issues.length ? (payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
    },
    input: payload.value
  }), payload) : (payload.value = result.value, result.memo && (payload.memo = !0), payload);
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout), defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    let result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    return result instanceof Promise ? result.then((result2) => handleCatchResult(payload, result2, def, ctx)) : handleCatchResult(payload, result, def, ctx);
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values), defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin), defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout), defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      let right = def.out._zod.run(payload, ctx);
      return right instanceof Promise ? right.then((right2) => handlePipeResult(right2, def.in, ctx)) : handlePipeResult(right, def.in, ctx);
    }
    let left = def.in._zod.run(payload, ctx);
    return left instanceof Promise ? left.then((left2) => handlePipeResult(left2, def.out, ctx)) : handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  return left.issues.some((iss) => iss.code !== "unrecognized_keys") ? (left.aborted = !0, left) : next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
  $ZodPipe.init(inst, def);
}), $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def), defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues), defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values), defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin), defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout), inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward")
      return def.innerType._zod.run(payload, ctx);
    let result = def.innerType._zod.run(payload, ctx);
    return result instanceof Promise ? result.then(handleReadonlyResult) : handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  return payload.memo || (payload.value = Object.freeze(payload.value)), payload;
}
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def), $ZodType.init(inst, def), inst._zod.parse = (payload, _) => payload, inst._zod.check = (payload) => {
    let input = payload.value, r = def.fn(input);
    if (r instanceof Promise)
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    handleRefineResult(r, payload, input, inst);
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    let _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    inst._zod.def.params && (_iss.params = inst._zod.def.params), payload.issues.push(issue(_iss));
  }
}

// node_modules/zod/v4/core/memoizer.js
init_define_LUFF_CREW_ASSETS();
var $ZodCyclicError = class extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}, STATE = "~memo", NO_ISSUES = [];
function isRef(value) {
  return value !== null && typeof value == "object";
}
function cloneIssues(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
var recursive = /* @__PURE__ */ new WeakMap(), NONE = 0, ASSUMED = 1, PROVEN = 2;
function isRecursive(inst, stack, resolve3) {
  let cached3 = recursive.get(inst);
  if (cached3 !== void 0)
    return cached3 ? PROVEN : NONE;
  if (stack.has(inst))
    return PROVEN;
  stack.add(inst);
  let result = NONE, check = (child) => {
    if (result !== PROVEN && child?._zod) {
      let answer = isRecursive(child, stack, resolve3);
      answer > result && (result = answer);
    }
  }, shape = (sh, spread) => {
    let answer = NONE;
    for (let key of Reflect.ownKeys(sh)) {
      let desc = Object.getOwnPropertyDescriptor(sh, key);
      if (spread && !desc.enumerable)
        continue;
      let child = desc.get ? ASSUMED : desc.value?._zod ? isRecursive(desc.value, stack, resolve3) : NONE;
      child > answer && (answer = child);
    }
    return answer;
  }, merge2 = (answer) => {
    answer > result && (result = answer);
  }, def = inst._zod.def, kind = def.type;
  switch (kind) {
    case "object": {
      let raw = rawShape(def);
      merge2(raw ? shape(raw, !0) : ASSUMED), check(def.catchall);
      break;
    }
    case "array":
      check(def.element);
      break;
    case "tuple":
      for (let el of def.items)
        check(el);
      check(def.rest);
      break;
    case "record":
    case "map":
      check(def.keyType), check(def.valueType);
      break;
    case "set":
      check(def.valueType);
      break;
    case "union":
      for (let el of def.options)
        check(el);
      break;
    case "intersection":
      check(def.left), check(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check(def.innerType);
      break;
    case "pipe":
      check(def.in), check(def.out);
      break;
    case "function":
      check(def.input), check(def.output);
      break;
    // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
    case "lazy": {
      let inner = def._cachedInner ?? (resolve3 ? inst._zod.innerType : void 0);
      merge2(inner ? isRecursive(inner, stack, !1) : ASSUMED);
      break;
    }
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (let key in def) {
        let desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        let value = desc.value;
        if (!(!value || typeof value != "object")) {
          if (value._zod)
            check(value);
          else if (Array.isArray(value))
            for (let el of value)
              check(el);
        }
      }
  }
  return stack.delete(inst), settle(inst, result);
}
function settle(inst, answer) {
  return answer !== ASSUMED && recursive.set(inst, answer === PROVEN), answer;
}
function bucketFor(state, inst) {
  let bucket = state.buckets.get(inst);
  return bucket || (bucket = /* @__PURE__ */ new WeakMap(), state.buckets.set(inst, bucket)), bucket;
}
var handoff, open = [], memo = {
  alloc(_inst, payload, empty) {
    let bucket = handoff;
    if (!bucket)
      return empty;
    handoff = void 0;
    let entry = { value: empty, issues: null };
    return bucket.set(payload.value, entry), open.push(entry), empty;
  },
  guard(inst) {
    var _a3;
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []), inst._zod.deferred.push(() => {
      let base = inst._zod.parse, wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
          throw new $ZodCyclicError();
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped, inst._zod.run === base && (inst._zod.run = wrapped);
    });
  },
  attach(inst) {
    var _a3;
    let isRecursiveInst, rechecked = !1, lastCtx, lastBucket;
    (_a3 = inst._zod).deferred ?? (_a3.deferred = []), inst._zod.deferred.push(() => {
      let base = inst._zod.parse, wrapped = (payload, ctx) => {
        if (isRecursiveInst === void 0) {
          let walked = isRecursive(inst, /* @__PURE__ */ new Set(), !1);
          if (walked === NONE)
            return inst._zod.parse = base, inst._zod.run === wrapped && (inst._zod.run = base), base(payload, ctx);
          walked === PROVEN || rechecked ? isRecursiveInst = !0 : rechecked = !0;
        }
        let input = payload.value;
        if (!isRef(input))
          return base(payload, ctx);
        let state = ctx[STATE];
        state || (state = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, ctx[STATE] = state);
        let bucket;
        lastCtx === ctx ? bucket = lastBucket : (bucket = bucketFor(state, inst), lastCtx = ctx, lastBucket = bucket);
        let hit = bucket.get(input);
        if (hit)
          return payload.value = hit.value, hit.issues ? hit.issues.length && payload.issues.push(...cloneIssues(hit.issues)) : (payload.memo = !0, state.backEdges ?? (state.backEdges = /* @__PURE__ */ new WeakSet()), state.backEdges.add(hit.value)), payload;
        handoff = bucket;
        let depth = open.length, result = base(payload, ctx);
        handoff = void 0;
        let entry = open.length > depth ? open.pop() : void 0;
        return result instanceof Promise ? result.then((r) => (entry && (entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES), r)) : (entry && (entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES), result);
      };
      inst._zod.parse = wrapped, inst._zod.run === base && (inst._zod.run = wrapped);
    });
  }
};
function memoizer() {
  return memo;
}
function isBackEdge(ctx, value) {
  let backEdges = ctx[STATE]?.backEdges;
  return backEdges !== void 0 && isRef(value) && backEdges.has(value);
}

// node_modules/zod/v4/locales/en.js
init_define_LUFF_CREW_ASSETS();
var error = () => {
  let Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  let FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  }, TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function getTypeName(type, input) {
    return type === "number" && typeof input == "number" && !Number.isFinite(input) ? String(input) : TypeDictionary[type] ?? type;
  }
  return (issue2) => {
    switch (issue2.code) {
      case "invalid_type": {
        let expected = getTypeName(issue2.expected), receivedType = parsedType(issue2.input), received = getTypeName(receivedType, issue2.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        return issue2.values.length === 1 ? `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}` : `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
      case "too_big": {
        let adj = issue2.exact ? "exactly " : issue2.inclusive ? "<=" : "<", sizing = getSizing(issue2.origin);
        return sizing ? `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}` : `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
      }
      case "too_small": {
        let adj = issue2.exact ? "exactly " : issue2.inclusive ? ">=" : ">", sizing = getSizing(issue2.origin);
        return sizing ? `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}` : `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
      }
      case "invalid_format": {
        let _issue = issue2;
        return _issue.format === "starts_with" ? `Invalid string: must start with "${_issue.prefix}"` : _issue.format === "ends_with" ? `Invalid string: must end with "${_issue.suffix}"` : _issue.format === "includes" ? `Invalid string: must include "${_issue.includes}"` : _issue.format === "regex" ? `Invalid string: must match pattern ${_issue.pattern}` : `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue2.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue2.origin}`;
      case "invalid_union":
        return issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0 ? `Invalid discriminator value. Expected ${issue2.options.map((o) => `'${o}'`).join(" | ")}` : issue2.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue2.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function en_default2() {
  return {
    localeError: error()
  };
}

// node_modules/zod/v4/core/registries.js
init_define_LUFF_CREW_ASSETS();
var _a2;
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    let meta2 = _meta[0];
    return this._map.set(schema, meta2), meta2 && typeof meta2 == "object" && "id" in meta2 && this._idmap.set(meta2.id, schema), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(schema) {
    let meta2 = this._map.get(schema);
    return meta2 && typeof meta2 == "object" && "id" in meta2 && this._idmap.delete(meta2.id), this._map.delete(schema), this;
  }
  get(schema) {
    let p = schema._zod.parent;
    if (p) {
      let pm = { ...this.get(p) ?? {} };
      delete pm.id;
      let f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// node_modules/zod/v4/core/api.js
init_define_LUFF_CREW_ASSETS();
function snapshotChecks(def) {
  return def.checks && (def.checks = [...def.checks]), def;
}
// @__NO_SIDE_EFFECTS__
function _string(Class2, params) {
  return new Class2(snapshotChecks({ type: "string", ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _email(Class2, params) {
  return new Class2({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class2, params) {
  return new Class2({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class2, params) {
  return new Class2({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class2, params) {
  return new Class2({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class2, params) {
  return new Class2({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class2, params) {
  return new Class2({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class2, params) {
  return new Class2({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class2, params) {
  return new Class2({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class2, params) {
  return new Class2({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class2, params) {
  return new Class2({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class2, params) {
  return new Class2({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class2, params) {
  return new Class2({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class2, params) {
  return new Class2({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class2, params) {
  return new Class2({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class2, params) {
  return new Class2({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class2, params) {
  return new Class2({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class2, params) {
  return new Class2(snapshotChecks({ type: "number", checks: [], ...normalizeParams(params) }));
}
// @__NO_SIDE_EFFECTS__
function _int(Class2, params) {
  return new Class2({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class2, params) {
  return new Class2({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null2(Class2, params) {
  return new Class2({
    type: "null",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class2) {
  return new Class2({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class2, params) {
  return new Class2({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  return new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class2, element, params) {
  return new Class2({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _custom(Class2, fn, _params) {
  let norm = normalizeParams(_params);
  return norm.abort ?? (norm.abort = !0), new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...norm
  });
}
// @__NO_SIDE_EFFECTS__
function _refine(Class2, fn, _params) {
  return new Class2({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
  let ch = /* @__PURE__ */ _check((payload) => (payload.addIssue = (issue2) => {
    if (typeof issue2 == "string")
      payload.issues.push(issue(issue2, payload.value, ch._zod.def));
    else {
      let _issue = issue2;
      _issue.fatal && (_issue.continue = !1), _issue.code ?? (_issue.code = "custom"), "input" in _issue || (_issue.input = payload.value), _issue.inst ?? (_issue.inst = ch), _issue.continue ?? (_issue.continue = !ch._zod.def.abort), payload.issues.push(issue(_issue));
    }
  }, fn(payload.value, payload)), params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  let ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  return ch._zod.check = fn, ch;
}

// node_modules/zod/v4/core/to-json-schema.js
init_define_LUFF_CREW_ASSETS();
function assignProps(target, ...sources) {
  for (let source of sources)
    for (let key of Reflect.ownKeys(source))
      Object.prototype.propertyIsEnumerable.call(source, key) && assignProp(target, key, source[key]);
  return target;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  return target === "draft-4" && (target = "draft-04"), target === "draft-7" && (target = "draft-07"), {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: params?.external ?? void 0
  };
}
function handleUnrepresentable(schema, ctx, json, params, message) {
  let result = typeof ctx.unrepresentable == "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any")
    return !1;
  if (result === void 0 || result === "throw")
    throw new Error(message);
  return Object.assign(json, result), !0;
}
function processSchema(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a3;
  let def = schema._zod.def, seen = ctx.seen.get(schema);
  if (seen)
    return seen.count++, _params.schemaPath.includes(schema) && (seen.cycle = _params.path), seen.schema;
  let result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result), ctx.sharedDefsExtractedFor = void 0, ctx.sharedEmitDoneFor = void 0;
  let overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema)
    result.schema = overrideSchema;
  else {
    let params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema)
      schema._zod.processJSONSchema(ctx, result.schema, params);
    else {
      let _json = result.schema, processor = ctx.processors[def.type];
      if (!processor)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      processor(schema, ctx, _json, params);
    }
    let parent = schema._zod.parent;
    parent && (result.ref || (result.ref = parent), processSchema(parent, ctx, params), ctx.seen.get(parent).isParent = !0);
  }
  let meta2 = ctx.metadataRegistry.get(schema);
  return meta2 && assignProps(result.schema, meta2), ctx.io === "input" && isTransforming(schema) && (delete result.schema.examples, delete result.schema.default), ctx.io === "input" && "_prefault" in result.schema && ((_a3 = result.schema).default ?? (_a3.default = result.schema._prefault)), delete result.schema._prefault, ctx.seen.get(schema).schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  let root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  let idToSchema = /* @__PURE__ */ new Map();
  for (let entry of ctx.seen.entries()) {
    let id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      let existing = idToSchema.get(id);
      if (existing && existing !== entry[0])
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      idToSchema.set(id, entry[0]);
    }
  }
  let makeURI = (entry) => {
    let defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      let externalId = ctx.external.registry.get(entry[0])?.id, uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId)
        return { ref: uriGenerator(externalId) };
      let id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      return entry[1].defId = id, { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
    }
    let uriPrefix = "#", defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id)
      return { ref: uriPrefix };
    let defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  }, extractToDef = (entry) => {
    if (entry[1].schema.$ref)
      return;
    let seen = entry[1], { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema }, defId && (seen.defId = defId);
    let schema2 = seen.schema;
    for (let key in schema2)
      delete schema2[key];
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw")
    for (let entry of ctx.seen.entries()) {
      let seen = entry[1];
      if (seen.cycle)
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let entry of ctx.seen.entries()) {
    let seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      let ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    if (ctx.metadataRegistry.get(entry[0])?.id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    seen.count > 1 && ctx.reused === "ref" && extractToDef(entry);
  }
  ctx.external && (ctx.sharedDefsExtractedFor = ctx.external);
}
function compactTypeUnion(schema) {
  let options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0)
    return;
  let types = [];
  for (let option of options) {
    if (!option || typeof option != "object")
      return;
    compactTypeUnion(option);
    let keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    let type = option.type;
    for (let member of Array.isArray(type) ? type : [type]) {
      if (typeof member != "string")
        return;
      types.includes(member) || types.push(member);
    }
  }
  delete schema.anyOf, schema.type = types.length === 1 ? types[0] : types;
}
var FOLDABLE_KEYS = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
  let extra = member.additionalProperties;
  return extra === void 0 || extra === !1 || typeof extra != "object" || extra === null ? null : Object.keys(extra).length ? extra : null;
}
function foldObjects(members2) {
  let objects = [];
  for (let member of members2) {
    if (typeof member != "object" || member.type !== "object")
      return null;
    for (let key in member)
      if (!FOLDABLE_KEYS.has(key))
        return null;
    objects.push(member);
  }
  let properties = {}, required2 = /* @__PURE__ */ new Set();
  for (let object3 of objects) {
    for (let key in object3.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      let parts = [];
      for (let other of objects) {
        let part = other.properties?.[key] ?? undeclaredConstraint(other);
        part != null && (parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)) || parts.push(part));
      }
      let merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts };
      assignProp(properties, key, merged);
    }
    for (let key of object3.required ?? [])
      required2.add(key);
  }
  let folded = { type: "object", properties };
  if (required2.size && (folded.required = [...required2]), objects.every((object3) => object3.additionalProperties === !1))
    folded.additionalProperties = !1;
  else {
    let constraints = [];
    for (let object3 of objects) {
      let constraint = undeclaredConstraint(object3);
      constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)) && constraints.push(constraint);
    }
    constraints.length === 1 ? folded.additionalProperties = constraints[0] : constraints.length > 1 && (folded.additionalProperties = { allOf: constraints });
  }
  return folded;
}
function foldIntersection(json) {
  let allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (let key of FOLDABLE_KEYS)
    if (key in json)
      return;
  let unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k]))), folded = null;
  if (!unions.length)
    folded = foldObjects(allOf);
  else {
    let union2 = unions[0], keyword = UNION_KEYS.find((k) => Array.isArray(union2[k]));
    if (Object.keys(union2).length !== 1)
      return;
    let rest = allOf.filter((m) => m !== union2), branches = union2[keyword].map((branch) => foldObjects([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  folded && (delete json.allOf, assignProps(json, folded));
}
function finalize(ctx, schema) {
  let root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  let flattenRef = (zodSchema) => {
    let seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    let schema2 = seen.def ?? seen.schema, _cached = { ...schema2 }, ref = seen.ref;
    if (seen.ref = null, ref) {
      flattenRef(ref);
      let refSeen = ctx.seen.get(ref), refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0") ? (schema2.allOf = schema2.allOf ?? [], schema2.allOf.push(refSchema)) : assignProps(schema2, refSchema), assignProps(schema2, _cached), zodSchema._zod.parent === ref)
        for (let key in schema2)
          key === "$ref" || key === "allOf" || key in _cached || delete schema2[key];
      if (refSchema.$ref && refSeen.def)
        for (let key in schema2)
          key === "$ref" || key === "allOf" || key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key]) && delete schema2[key];
    }
    let parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      let parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref && (schema2.$ref = parentSeen.schema.$ref, parentSeen.def))
        for (let key in schema2)
          key === "$ref" || key === "allOf" || key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key]) && delete schema2[key];
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (let entry of [...ctx.seen.entries()].reverse())
      flattenRef(entry[0]);
    if (ctx.target !== "openapi-3.0")
      for (let entry of ctx.seen.entries())
        compactTypeUnion(entry[1].def ?? entry[1].schema);
    for (let rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      let carriers = /* @__PURE__ */ new Map();
      for (let seen of ctx.seen.values())
        for (let json of [seen.schema, seen.def]) {
          let allOf = json?.allOf;
          if (!Array.isArray(allOf))
            continue;
          let existing = carriers.get(allOf);
          existing ? existing.push(json) : carriers.set(allOf, [json]);
        }
      for (let allOf of ctx.intersections)
        for (let json of carriers.get(allOf) ?? [])
          foldIntersection(json);
    }
  }
  let result = {};
  if (ctx.target === "draft-2020-12" ? result.$schema = "https://json-schema.org/draft/2020-12/schema" : ctx.target === "draft-07" ? result.$schema = "http://json-schema.org/draft-07/schema#" : ctx.target === "draft-04" ? result.$schema = "http://json-schema.org/draft-04/schema#" : ctx.target, ctx.external?.uri) {
    let id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  let rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  rootMetaId !== void 0 && result.id === rootMetaId && delete result.id;
  let defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external)
    for (let entry of ctx.seen.entries()) {
      let seen = entry[1];
      seen.def && seen.defId && (seen.def.id === seen.defId && delete seen.def.id, assignProp(defs, seen.defId, seen.def));
    }
  ctx.external && (ctx.sharedEmitDoneFor = ctx.external), ctx.external || Object.keys(defs).length > 0 && (ctx.target === "draft-2020-12" ? result.$defs = defs : result.definitions = defs);
  try {
    let finalized = JSON.parse(JSON.stringify(result));
    return Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), finalized;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  let ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return !1;
  ctx.seen.add(_schema);
  let def = _schema._zod.def;
  if (def.type === "transform")
    return !0;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch")
    return isTransforming(def.innerType, ctx);
  if (def.type === "intersection")
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  if (def.type === "record" || def.type === "map")
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  if (def.type === "pipe")
    return _schema._zod.traits.has("$ZodCodec") ? !0 : isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  if (def.type === "object") {
    for (let key in def.shape)
      if (isTransforming(def.shape[key], ctx))
        return !0;
    return !1;
  }
  if (def.type === "union") {
    for (let option of def.options)
      if (isTransforming(option, ctx))
        return !0;
    return !1;
  }
  if (def.type === "tuple") {
    for (let item of def.items)
      if (isTransforming(item, ctx))
        return !0;
    return !!(def.rest && isTransforming(def.rest, ctx));
  }
  return !1;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  let ctx = initializeContext({ ...params, processors });
  return processSchema(schema, ctx), extractDefs(ctx, schema), finalize(ctx, schema);
}, createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  let { libraryOptions, target } = params ?? {}, ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  return processSchema(schema, ctx), extractDefs(ctx, schema), finalize(ctx, schema);
};

// node_modules/zod/v4/core/json-schema-processors.js
init_define_LUFF_CREW_ASSETS();
var narrowMin = (agg, key, value) => {
  (agg[key] === void 0 || value > agg[key]) && (agg[key] = value);
}, narrowMax = (agg, key, value) => {
  (agg[key] === void 0 || value < agg[key]) && (agg[key] = value);
}, narrowBoth = (agg, value) => {
  narrowMin(agg, "minimum", value), narrowMax(agg, "maximum", value);
}, addDivisor = (agg, value) => {
  agg.multipleOf ?? (agg.multipleOf = []), agg.multipleOf.includes(value) || agg.multipleOf.push(value);
}, addPattern = (agg, pattern) => {
  agg.patterns ?? (agg.patterns = /* @__PURE__ */ new Set()), agg.patterns.add(pattern);
}, intersectMime = (agg, mime) => {
  agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
}, setFormat = (agg, format) => {
  agg.format = format, format.includes("int") && (agg.isInt = !0);
}, minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum), maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum), formatContributor = (ranges) => (agg, def) => {
  setFormat(agg, def.format);
  let [minimum, maximum] = ranges[def.format];
  narrowMin(agg, "minimum", minimum), narrowMax(agg, "maximum", maximum);
}, contributors = {
  greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
  less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
  multiple_of: (agg, def) => addDivisor(agg, def.value),
  number_format: formatContributor(NUMBER_FORMAT_RANGES),
  bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
  min_length: minContributor,
  max_length: maxContributor,
  length_equals: (agg, def) => narrowBoth(agg, def.length),
  min_size: minContributor,
  max_size: maxContributor,
  size_equals: (agg, def) => narrowBoth(agg, def.size),
  string_format: (agg, def) => {
    setFormat(agg, def.format), def.pattern && addPattern(agg, def.pattern), (def.format === "base64" || def.format === "base64url") && (agg.contentEncoding = def.format), (def.local || def.precision === -1) && (agg.laxFormat = !0);
  },
  mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
  let agg = {}, def = schema._zod.def, list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
  for (let ch of list)
    contributors[ch._zod.def.check]?.(agg, ch._zod.def);
  let bag = schema._zod.bag;
  bag.minimum !== void 0 && narrowMin(agg, "minimum", bag.minimum), bag.exclusiveMinimum !== void 0 && narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum), bag.maximum !== void 0 && narrowMax(agg, "maximum", bag.maximum), bag.exclusiveMaximum !== void 0 && narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum), bag.multipleOf !== void 0 && addDivisor(agg, bag.multipleOf), bag.format !== void 0 && (agg.format ?? (agg.format = bag.format), bag.format.includes("int") && (agg.isInt = !0)), bag.mime && intersectMime(agg, bag.mime);
  for (let pattern of bag.patterns ?? [])
    addPattern(agg, pattern);
  return agg;
}
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, exactPatterns = /* @__PURE__ */ new Map([
  [base64Charset, base64],
  [base64urlCharset, base64url]
]), exactPattern = (p) => exactPatterns.get(p) ?? p, stringProcessor = (schema, ctx, _json, _params) => {
  let json = _json;
  json.type = "string";
  let { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
  if (typeof minimum == "number" && (json.minLength = minimum), typeof maximum == "number" && (json.maxLength = maximum), format && (json.format = formatMap[format] ?? format, json.format === "" && delete json.format, (format === "time" || laxFormat) && delete json.format), contentEncoding && (json.contentEncoding = contentEncoding), patterns && patterns.size > 0) {
    let patternList = [...patterns].map(exactPattern);
    patternList.length === 1 ? json.pattern = patternList[0].source : patternList.length > 1 && (json.allOf = [
      ...patternList.map((regex) => ({
        ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: regex.source
      }))
    ]);
  }
}, numberProcessor = (schema, ctx, _json, params) => {
  let json = _json, { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
  json.type = isInt ? "integer" : "number";
  let exMin = typeof exclusiveMinimum == "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY), exMax = typeof exclusiveMaximum == "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY), legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin ? legacy ? (json.minimum = exclusiveMinimum, json.exclusiveMinimum = !0) : json.exclusiveMinimum = exclusiveMinimum : typeof minimum == "number" && (json.minimum = minimum), exMax ? legacy ? (json.maximum = exclusiveMaximum, json.exclusiveMaximum = !0) : json.exclusiveMaximum = exclusiveMaximum : typeof maximum == "number" && (json.maximum = maximum), multipleOf) {
    let divisors = /* @__PURE__ */ new Set();
    for (let divisor of multipleOf)
      Number.isFinite(divisor) && divisor !== 0 ? divisors.add(Math.abs(divisor)) : handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
    let [first, ...rest] = divisors;
    first !== void 0 && (json.multipleOf = first), rest.length && (json.allOf = [...json.allOf ?? [], ...rest.map((m) => ({ multipleOf: m }))]);
  }
}, booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
}, bigintProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
}, symbolProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Symbols cannot be represented in JSON Schema");
}, nullProcessor = (_schema, ctx, json, _params) => {
  ctx.target === "openapi-3.0" ? (json.type = "string", json.nullable = !0, json.enum = [null]) : json.type = "null";
}, undefinedProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Undefined cannot be represented in JSON Schema");
}, voidProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Void cannot be represented in JSON Schema");
}, neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
}, anyProcessor = (_schema, _ctx, _json, _params) => {
}, unknownProcessor = (_schema, _ctx, _json, _params) => {
}, dateProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
}, enumProcessor = (schema, _ctx, json, _params) => {
  let def = schema._zod.def, values = getEnumValues(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  values.every((v) => typeof v == "number") && (json.type = "number"), values.every((v) => typeof v == "string") && (json.type = "string"), json.enum = values;
}, literalProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def;
  if (def.values.length === 0) {
    json.not = {};
    return;
  }
  let vals = [];
  for (let val of def.values)
    if (val === void 0) {
      if (handleUnrepresentable(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof val == "bigint") {
      if (handleUnrepresentable(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
        return;
      vals.push(Number(val));
    } else
      vals.push(val);
  if (vals.length !== 0)
    if (vals.length === 1) {
      let val = vals[0];
      json.type = val === null ? "null" : typeof val, ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? json.enum = [val] : json.const = val;
    } else
      vals.every((v) => typeof v == "number") && (json.type = "number"), vals.every((v) => typeof v == "string") && (json.type = "string"), vals.every((v) => typeof v == "boolean") && (json.type = "boolean"), vals.every((v) => v === null) && (json.type = "null"), json.enum = vals;
}, nanProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "NaN cannot be represented in JSON Schema");
}, templateLiteralProcessor = (schema, _ctx, json, _params) => {
  let _json = json, pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string", _json.pattern = pattern.source;
}, fileProcessor = (schema, _ctx, json, _params) => {
  let _json = json;
  _json.type = "string", _json.format = "binary", _json.contentEncoding = "binary";
  let { minimum, maximum, mime } = aggregateChecks(schema);
  minimum !== void 0 && (_json.minLength = minimum), maximum !== void 0 && (_json.maxLength = maximum), mime && (mime.length === 0 ? _json.not = {} : mime.length === 1 ? _json.contentMediaType = mime[0] : _json.anyOf = mime.map((m) => ({ contentMediaType: m })));
}, successProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
}, customProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
}, functionProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Function types cannot be represented in JSON Schema");
}, transformProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
}, mapProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Map cannot be represented in JSON Schema");
}, setProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Set cannot be represented in JSON Schema");
}, arrayProcessor = (schema, ctx, _json, params) => {
  let json = _json, def = schema._zod.def, { minimum, maximum } = aggregateChecks(schema);
  typeof minimum == "number" && (json.minItems = minimum), typeof maximum == "number" && (json.maxItems = maximum), json.type = "array", json.items = processSchema(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  let def = schema._zod.def;
  return def.type === "pipe" && def.in._zod.traits.has("$ZodTransform") ? inputOptin(def.out) : def.type === "catch" ? inputOptin(def.innerType) : schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
  let json = _json, def = schema._zod.def, shape = def.shape;
  if (Object.getOwnPropertySymbols(shape).length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema"))
    return;
  json.type = "object", json.properties = {};
  for (let key in shape)
    assignProp(json.properties, key, processSchema(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  let requiredKeys = [];
  for (let key of Object.keys(shape)) {
    let field = def.shape[key];
    (ctx.io === "input" ? inputOptin(field) === void 0 : field._zod.optout === void 0) && requiredKeys.push(key);
  }
  requiredKeys.length > 0 && (json.required = requiredKeys), def.catchall?._zod.def.type === "never" ? json.additionalProperties = !1 : def.catchall ? def.catchall && (json.additionalProperties = processSchema(def.catchall, ctx, {
    ...params,
    path: [...params.path, "additionalProperties"]
  })) : ctx.io === "output" && (json.additionalProperties = !1);
}, unionProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def, isExclusive = def.inclusive === !1, options = def.options.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  isExclusive ? json.oneOf = options : json.anyOf = options;
}, intersectionProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def, a = processSchema(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  }), b = processSchema(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  }), isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1, allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf, ctx.intersections.push(allOf);
}, tupleProcessor = (schema, ctx, _json, params) => {
  let json = _json, def = schema._zod.def;
  json.type = "array";
  let prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items", restPath = ctx.target === "draft-2020-12" || ctx.target === "openapi-3.0" ? "items" : "additionalItems", prefixItems = def.items.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  })), rest = def.rest ? processSchema(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null, minItems = def.items.length;
  for (; minItems > 0; ) {
    let item = def.items[minItems - 1];
    if (!(ctx.io === "input" ? inputOptin(item) !== void 0 : item._zod.optout === "optional"))
      break;
    minItems--;
  }
  let maxItems = def.items.length, isClosed = !def.rest;
  ctx.target === "draft-2020-12" ? (json.prefixItems = prefixItems, isClosed ? json.items = !1 : rest && (json.items = rest), minItems > 0 && (json.minItems = minItems), isClosed && (json.maxItems = maxItems)) : ctx.target === "openapi-3.0" ? (json.items = {
    anyOf: prefixItems
  }, rest && json.items.anyOf.push(rest), minItems > 0 && (json.minItems = minItems), isClosed && (json.maxItems = maxItems)) : (json.items = prefixItems, isClosed ? json.additionalItems = !1 : rest && (json.additionalItems = rest), minItems > 0 && (json.minItems = minItems), isClosed && (json.maxItems = maxItems));
  let { minimum, maximum } = aggregateChecks(schema);
  typeof minimum == "number" && (json.minItems = minimum), typeof maximum == "number" && (json.maxItems = maximum);
};
function stringifyKeyNames(bySchema, json, visited) {
  if (json.$ref) {
    if (visited.has(json))
      return json;
    visited.add(json);
    let def = bySchema.get(json)?.def;
    if (!def)
      return json;
    let inlined = stringifyKeyNames(bySchema, def, visited);
    return inlined === def ? json : inlined;
  }
  for (let keyword of ["anyOf", "oneOf"]) {
    let branches = json[keyword];
    if (!Array.isArray(branches))
      continue;
    let mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
    mapped.some((branch, i) => branch !== branches[i]) && (json = { ...json, [keyword]: mapped });
  }
  let types = Array.isArray(json.type) ? json.type : [json.type], numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer"), values = json.enum ?? (json.const !== void 0 ? [json.const] : void 0);
  if (!numericType && !values?.some((v) => typeof v == "number"))
    return json;
  let { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = json;
  return rest.enum ? rest.enum = rest.enum.map((v) => typeof v == "number" ? String(v) : v) : typeof rest.const == "number" && (rest.const = String(rest.const)), numericType && (rest.type = "string", values || (rest.pattern = (types.includes("number") ? number : integer).source)), rest;
}
var pendingRecords = /* @__PURE__ */ new WeakMap();
function rewriteKeyNames(ctx) {
  let bySchema = /* @__PURE__ */ new Map();
  for (let entry of ctx.seen.values())
    entry.def && !bySchema.has(entry.schema) && bySchema.set(entry.schema, entry);
  let rewrites = /* @__PURE__ */ new Map();
  for (let record2 of pendingRecords.get(ctx) ?? []) {
    let seen = ctx.seen.get(record2), names = (seen?.def ?? seen?.schema)?.propertyNames;
    if (!names || names === !0 || rewrites.has(names))
      continue;
    let rewritten = stringifyKeyNames(bySchema, names, /* @__PURE__ */ new Set());
    rewritten !== names && rewrites.set(names, rewritten);
  }
  if (rewrites.size)
    for (let entry of ctx.seen.values())
      for (let carrier of [entry.schema, entry.def]) {
        let rewritten = carrier && rewrites.get(carrier.propertyNames);
        rewritten && (carrier.propertyNames = rewritten);
      }
}
var recordProcessor = (schema, ctx, _json, params) => {
  let json = _json, def = schema._zod.def;
  json.type = "object";
  let keyType = def.keyType, patterns = aggregateChecks(keyType).patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    let valueSchema = processSchema(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json.patternProperties = {};
    for (let pattern of patterns)
      assignProp(json.patternProperties, exactPattern(pattern).source, valueSchema);
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json.propertyNames = processSchema(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
      let pending = pendingRecords.get(ctx);
      pending || (pending = [], pendingRecords.set(ctx, pending), ctx.deferred.push(() => rewriteKeyNames(ctx))), pending.push(schema);
    }
    json.additionalProperties = processSchema(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  let keyValues = keyType._zod.values, omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== void 0;
  if (keyValues && !def.partial && !omittableOnInput) {
    let validKeyValues = [...keyValues].filter((v) => typeof v == "string" || typeof v == "number");
    validKeyValues.length > 0 && (json.required = validKeyValues.map(String));
  }
}, nullableProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def, inner = processSchema(def.innerType, ctx, params), seen = ctx.seen.get(schema);
  ctx.target === "openapi-3.0" ? (seen.ref = def.innerType, json.nullable = !0) : json.anyOf = [inner, { type: "null" }];
}, nonoptionalProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
}, UNREPRESENTABLE_DEFAULT = /* @__PURE__ */ Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
  let unrepresentable = !1, serialized = JSON.stringify(value, (_, val) => typeof val != "bigint" ? val : (unrepresentable = !0, null));
  return unrepresentable ? (handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema"), UNREPRESENTABLE_DEFAULT) : JSON.parse(serialized);
}
var defaultProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  value !== UNREPRESENTABLE_DEFAULT && (json.default = value);
}, prefaultProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  if (seen.ref = def.innerType, ctx.io !== "input")
    return;
  let value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  value !== UNREPRESENTABLE_DEFAULT && (json._prefault = value);
}, catchProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
}, pipeProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def, inIsTransform = def.in._zod.traits.has("$ZodTransform"), innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  processSchema(innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = innerType;
}, readonlyProcessor = (schema, ctx, json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType, json.readOnly = !0;
}, promiseProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
}, optionalProcessor = (schema, ctx, _json, params) => {
  let def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
}, lazyProcessor = (schema, ctx, _json, params) => {
  let innerType = schema._zod.innerType;
  processSchema(innerType, ctx, params);
  let seen = ctx.seen.get(schema);
  seen.ref = innerType;
}, allProcessors = {
  string: stringProcessor,
  number: numberProcessor,
  boolean: booleanProcessor,
  bigint: bigintProcessor,
  symbol: symbolProcessor,
  null: nullProcessor,
  undefined: undefinedProcessor,
  void: voidProcessor,
  never: neverProcessor,
  any: anyProcessor,
  unknown: unknownProcessor,
  date: dateProcessor,
  enum: enumProcessor,
  literal: literalProcessor,
  nan: nanProcessor,
  template_literal: templateLiteralProcessor,
  file: fileProcessor,
  success: successProcessor,
  custom: customProcessor,
  function: functionProcessor,
  transform: transformProcessor,
  map: mapProcessor,
  set: setProcessor,
  array: arrayProcessor,
  object: objectProcessor,
  union: unionProcessor,
  intersection: intersectionProcessor,
  tuple: tupleProcessor,
  record: recordProcessor,
  nullable: nullableProcessor,
  nonoptional: nonoptionalProcessor,
  default: defaultProcessor,
  prefault: prefaultProcessor,
  catch: catchProcessor,
  pipe: pipeProcessor,
  readonly: readonlyProcessor,
  promise: promiseProcessor,
  optional: optionalProcessor,
  lazy: lazyProcessor
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    let registry2 = input, ctx2 = initializeContext({ ...params, processors: allProcessors }), defs = {};
    for (let entry of registry2._idmap.entries()) {
      let [_, schema] = entry;
      processSchema(schema, ctx2);
    }
    let schemas = {}, external = {
      registry: registry2,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (let entry of registry2._idmap.entries()) {
      let [key, schema] = entry;
      extractDefs(ctx2, schema), assignProp(schemas, key, finalize(ctx2, schema));
    }
    if (Object.keys(defs).length > 0) {
      let defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  let ctx = initializeContext({ ...params, processors: allProcessors });
  return processSchema(input, ctx), extractDefs(ctx, input), finalize(ctx, input);
}

// node_modules/zod/v4/mini/parse.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/mini/schemas.js
init_define_LUFF_CREW_ASSETS();
var ZodMiniType = /* @__PURE__ */ $constructor("ZodMiniType", (inst, def) => {
  if (!inst._zod)
    throw new Error("Uninitialized schema in ZodMiniType.");
  $ZodType.init(inst, def), inst.def = def, inst.type = def.type;
}, {
  // `with` is an alias for `check`: the same function object, not a wrapper.
  get with() {
    return this.check;
  },
  set with(value) {
    own(this, "with", value);
  },
  parse(data, params) {
    return parse(this, data, params, { callee: this.parse });
  },
  parseAsync(data, params) {
    return parseAsync(this, data, params, { callee: this.parseAsync });
  },
  safeParse(data, params) {
    return safeParse(this, data, params);
  },
  safeParseAsync(data, params) {
    return safeParseAsync(this, data, params);
  },
  check(...checks) {
    let def = this.def;
    return this.clone({
      ...def,
      checks: [
        ...def.checks ?? [],
        ...checks.map((ch) => typeof ch == "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }, { parent: !0 });
  },
  clone(_def, params) {
    return clone(this, _def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta2) {
    return reg.add(this, meta2), this;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  }
});
var ZodMiniObject = /* @__PURE__ */ $constructor("ZodMiniObject", (inst, def) => {
  $ZodObject.init(inst, def), ZodMiniType.init(inst, def), installLazyProp(inst, "shape", (self) => self._zod.def.shape, !1);
});
// @__NO_SIDE_EFFECTS__
function object(shape, params) {
  let def = {
    type: "object",
    shape: shape ?? {},
    ...normalizeParams(params)
  };
  return new ZodMiniObject(def);
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-compat.js
function isZ4Schema(s) {
  return !!s._zod;
}
function objectFromShape(shape) {
  let values = Object.values(shape);
  if (values.length === 0)
    return object({});
  let allV4 = values.every(isZ4Schema), allV3 = values.every((s) => !isZ4Schema(s));
  if (allV4)
    return object(shape);
  if (allV3)
    return objectType(shape);
  throw new Error("Mixed Zod versions detected in object shape.");
}
function safeParse2(schema, data) {
  return isZ4Schema(schema) ? safeParse(schema, data) : schema.safeParse(data);
}
async function safeParseAsync2(schema, data) {
  return isZ4Schema(schema) ? await safeParseAsync(schema, data) : await schema.safeParseAsync(data);
}
function getObjectShape(schema) {
  if (!schema)
    return;
  let rawShape2;
  if (isZ4Schema(schema) ? rawShape2 = schema._zod?.def?.shape : rawShape2 = schema.shape, !!rawShape2) {
    if (typeof rawShape2 == "function")
      try {
        return rawShape2();
      } catch {
        return;
      }
    return rawShape2;
  }
}
function normalizeObjectSchema(schema) {
  if (schema) {
    if (typeof schema == "object") {
      let asV3 = schema, asV4 = schema;
      if (!asV3._def && !asV4._zod) {
        let values = Object.values(schema);
        if (values.length > 0 && values.every((v) => typeof v == "object" && v !== null && (v._def !== void 0 || v._zod !== void 0 || typeof v.parse == "function")))
          return objectFromShape(schema);
      }
    }
    if (isZ4Schema(schema)) {
      let def = schema._zod?.def;
      if (def && (def.type === "object" || def.shape !== void 0))
        return schema;
    } else if (schema.shape !== void 0)
      return schema;
  }
}
function getDotPath(path) {
  return path.length === 0 ? "object root" : path.reduce((acc, seg, index) => index === 0 ? String(seg) : typeof seg == "number" ? `${acc}[${seg}]` : `${acc}.${seg}`, "");
}
function getParseErrorMessage(error2) {
  if (error2 && typeof error2 == "object") {
    if ("issues" in error2 && Array.isArray(error2.issues) && error2.issues.length > 0)
      return error2.issues.map((i) => i.path?.length ? `${i.message} at ${getDotPath(i.path)}` : i.message).join(`
`);
    if ("message" in error2 && typeof error2.message == "string")
      return error2.message;
    try {
      return JSON.stringify(error2);
    } catch {
      return String(error2);
    }
  }
  return String(error2);
}
function getSchemaDescription(schema) {
  return schema.description;
}
function isSchemaOptional(schema) {
  if (isZ4Schema(schema))
    return schema._zod?.def?.type === "optional";
  let v3Schema = schema;
  return typeof schema.isOptional == "function" ? schema.isOptional() : v3Schema._def?.typeName === "ZodOptional";
}
function getLiteralValue(schema) {
  if (isZ4Schema(schema)) {
    let def2 = schema._zod?.def;
    if (def2) {
      if (def2.value !== void 0)
        return def2.value;
      if (Array.isArray(def2.values) && def2.values.length > 0)
        return def2.values[0];
    }
  }
  let def = schema._def;
  if (def) {
    if (def.value !== void 0)
      return def.value;
    if (Array.isArray(def.values) && def.values.length > 0)
      return def.values[0];
  }
  let directValue = schema.value;
  if (directValue !== void 0)
    return directValue;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/classic/external.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/classic/schemas.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/classic/checks.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/classic/parse.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod/v4/classic/errors.js
init_define_LUFF_CREW_ASSETS();
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: !0,
    enumerable: !1,
    get() {
      let value = make(this);
      return Object.defineProperty(this, key, { value, configurable: !0, writable: !0 }), value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: !0, writable: !0 });
    }
  });
}
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues), inst.name = "ZodError";
  let proto = Object.getPrototypeOf(inst);
  _installedErrorProtos.has(proto) || (_installedErrorProtos.add(proto), _lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper)), _lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper)), _lazyMethod(proto, "addIssue", (self) => (issue2) => {
    self.issues.push(issue2), self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  }), _lazyMethod(proto, "addIssues", (self) => (issues2) => {
    self.issues.push(...issues2), self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  }), Object.defineProperty(proto, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
};
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, void 0, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError), parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError), safeParse3 = /* @__PURE__ */ _safeParse(ZodRealError), safeParseAsync3 = /* @__PURE__ */ _safeParseAsync(ZodRealError), encode2 = /* @__PURE__ */ _encode(ZodRealError), decode2 = /* @__PURE__ */ _decode(ZodRealError), encodeAsync2 = /* @__PURE__ */ _encodeAsync(ZodRealError), decodeAsync2 = /* @__PURE__ */ _decodeAsync(ZodRealError), safeEncode2 = /* @__PURE__ */ _safeEncode(ZodRealError), safeDecode2 = /* @__PURE__ */ _safeDecode(ZodRealError), safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync(ZodRealError), safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
  globalConfig.localeError || config(en_default2());
}
function _ensureDefaultMemoizer() {
  globalConfig.memoizer || config({ memoizer: memoizer() });
}
var ZodType2 = /* @__PURE__ */ $constructor("ZodType", (inst, def) => (_ensureDefaultLocale(), $ZodType.init(inst, def), inst.def = def, inst.type = def.type, inst), {
  check(...chks) {
    let def = this.def;
    return this.clone(util_exports.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch == "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: !0 });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta2) {
    return reg.add(this, meta2), this;
  },
  refine(check, params) {
    return this.check(refine(check, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite(fn));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    let cl = this.clone();
    return globalRegistry.add(cl, { description }), cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    let cl = this.clone();
    return globalRegistry.add(cl, args[0]), cl;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return util_exports.hide(this, "~standard", {
      ...standardProps(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod(this, "input"),
        output: createStandardJSONSchemaMethod(this, "output")
      }
    });
  },
  set "~standard"(value) {
    util_exports.own(this, "~standard", value);
  },
  parse: function _parse2(data, params) {
    return parse2(this, data, params, { callee: _parse2 });
  },
  parseAsync: async function _parseAsync2(data, params) {
    return await parseAsync2(this, data, params, { callee: _parseAsync2 });
  },
  safeParse(data, params) {
    return safeParse3(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync3(this, data, params);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(value) {
    util_exports.own(this, "spa", value);
  },
  validate(data, params) {
    return validate(this, data, params);
  },
  validateAsync(data, params) {
    return validateAsync(this, data, params);
  },
  encode: function _encode2(data, params) {
    return encode2(this, data, params, { callee: _encode2 });
  },
  decode: function _decode2(data, params) {
    return decode2(this, data, params, { callee: _decode2 });
  },
  encodeAsync: async function _encodeAsync2(data, params) {
    return await encodeAsync2(this, data, params, { callee: _encodeAsync2 });
  },
  decodeAsync: async function _decodeAsync2(data, params) {
    return await decodeAsync2(this, data, params, { callee: _decodeAsync2 });
  },
  safeEncode(data, params) {
    return safeEncode2(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode2(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync2(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync2(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod(this, {})(params);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return globalRegistry.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), _ZodString = /* @__PURE__ */ $constructor(
  "_ZodString",
  (inst, def) => {
    $ZodString.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
  },
  /* @__PURE__ */ util_exports.derived({
    format: (inst) => aggregateChecks(inst).format ?? null,
    minLength: (inst) => aggregateChecks(inst).minimum ?? null,
    maxLength: (inst) => aggregateChecks(inst).maximum ?? null
  }, {
    regex(...args) {
      return this.check(_regex(...args));
    },
    includes(...args) {
      return this.check(_includes(...args));
    },
    startsWith(...args) {
      return this.check(_startsWith(...args));
    },
    endsWith(...args) {
      return this.check(_endsWith(...args));
    },
    min(...args) {
      return this.check(_minLength(...args));
    },
    max(...args) {
      return this.check(_maxLength(...args));
    },
    length(...args) {
      return this.check(_length(...args));
    },
    nonempty(...args) {
      return this.check(_minLength(1, ...args));
    },
    lowercase(params) {
      return this.check(_lowercase(params));
    },
    uppercase(params) {
      return this.check(_uppercase(params));
    },
    trim() {
      return this.check(_trim());
    },
    normalize(...args) {
      return this.check(_normalize(...args));
    },
    toLowerCase() {
      return this.check(_toLowerCase());
    },
    toUpperCase() {
      return this.check(_toUpperCase());
    },
    slugify() {
      return this.check(_slugify());
    }
  })
), ZodString2 = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def), _ZodString.init(inst, def);
}, {
  email(params) {
    return this.check(_email(ZodEmail, params));
  },
  url(params) {
    return this.check(_url(ZodURL, params));
  },
  jwt(params) {
    return this.check(_jwt(ZodJWT, params));
  },
  emoji(params) {
    return this.check(_emoji2(ZodEmoji, params));
  },
  guid(params) {
    return this.check(_guid(ZodGUID, params));
  },
  uuid(params) {
    return this.check(_uuid(ZodUUID, params));
  },
  uuidv4(params) {
    return this.check(_uuidv4(ZodUUID, params));
  },
  uuidv6(params) {
    return this.check(_uuidv6(ZodUUID, params));
  },
  uuidv7(params) {
    return this.check(_uuidv7(ZodUUID, params));
  },
  nanoid(params) {
    return this.check(_nanoid(ZodNanoID, params));
  },
  cuid(params) {
    return this.check(_cuid(ZodCUID, params));
  },
  cuid2(params) {
    return this.check(_cuid2(ZodCUID2, params));
  },
  ulid(params) {
    return this.check(_ulid(ZodULID, params));
  },
  base64(params) {
    return this.check(_base64(ZodBase64, params));
  },
  base64url(params) {
    return this.check(_base64url(ZodBase64URL, params));
  },
  xid(params) {
    return this.check(_xid(ZodXID, params));
  },
  ksuid(params) {
    return this.check(_ksuid(ZodKSUID, params));
  },
  ipv4(params) {
    return this.check(_ipv4(ZodIPv4, params));
  },
  ipv6(params) {
    return this.check(_ipv6(ZodIPv6, params));
  },
  cidrv4(params) {
    return this.check(_cidrv4(ZodCIDRv4, params));
  },
  cidrv6(params) {
    return this.check(_cidrv6(ZodCIDRv6, params));
  },
  e164(params) {
    return this.check(_e164(ZodE164, params));
  },
  datetime(params) {
    return this.check(_isoDateTime(ZodISODateTime, params));
  },
  date(params) {
    return this.check(_isoDate(ZodISODate, params));
  },
  time(params) {
    return this.check(_isoTime(ZodISOTime, params));
  },
  duration(params) {
    return this.check(_isoDuration(ZodISODuration, params));
  }
});
function string2(params) {
  return _string(ZodString2, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def), _ZodString.init(inst, def);
}), ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def), ZodStringFormat.init(inst, def);
}), ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def), ZodStringFormat.init(inst, def);
}), ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def), ZodStringFormat.init(inst, def);
}), ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def), ZodStringFormat.init(inst, def);
}), ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def), ZodStringFormat.init(inst, def);
});
var ZodNumber2 = /* @__PURE__ */ $constructor(
  "ZodNumber",
  (inst, def) => {
    $ZodNumber.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params), inst.isFinite = !0;
  },
  /* @__PURE__ */ util_exports.derived({
    minValue: (inst) => {
      let { minimum, exclusiveMinimum } = aggregateChecks(inst);
      return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (inst) => {
      let { maximum, exclusiveMaximum } = aggregateChecks(inst);
      return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
    },
    isInt: (inst) => {
      let { isInt, multipleOf } = aggregateChecks(inst);
      return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
    },
    format: (inst) => aggregateChecks(inst).format ?? null
  }, {
    gt(value, params) {
      return this.check(_gt(value, params));
    },
    gte(value, params) {
      return this.check(_gte(value, params));
    },
    min(value, params) {
      return this.check(_gte(value, params));
    },
    lt(value, params) {
      return this.check(_lt(value, params));
    },
    lte(value, params) {
      return this.check(_lte(value, params));
    },
    max(value, params) {
      return this.check(_lte(value, params));
    },
    int(params) {
      return this.check(int(params));
    },
    safe(params) {
      return this.check(int(params));
    },
    positive(params) {
      return this.check(_gt(0, params));
    },
    nonnegative(params) {
      return this.check(_gte(0, params));
    },
    negative(params) {
      return this.check(_lt(0, params));
    },
    nonpositive(params) {
      return this.check(_lte(0, params));
    },
    multipleOf(value, params) {
      return this.check(_multipleOf(value, params));
    },
    step(value, params) {
      return this.check(_multipleOf(value, params));
    },
    finite() {
      return this;
    }
  })
);
function number2(params) {
  return _number(ZodNumber2, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def), ZodNumber2.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
var ZodBoolean2 = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean2, params);
}
var ZodNull2 = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null3(params) {
  return _null2(ZodNull2, params);
}
var ZodUnknown2 = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown2);
}
var ZodNever2 = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever2, params);
}
var ZodArray2 = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer(), $ZodArray.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params), inst.element = def.element;
}, {
  min(n, params) {
    return this.check(_minLength(n, params));
  },
  nonempty(params) {
    return this.check(_minLength(1, params));
  },
  max(n, params) {
    return this.check(_maxLength(n, params));
  },
  length(n, params) {
    return this.check(_length(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array(element, params) {
  return _array(ZodArray2, element, params);
}
var ZodObject2 = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer(), $ZodObjectJIT.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params), util_exports.installLazyProp(inst, "shape", (self) => self._zod.def.shape, !1);
}, {
  keyof() {
    return _enum(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall }));
  },
  passthrough() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  loose() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  strict() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: never() }));
  },
  strip() {
    return this.clone(util_exports.mergeDefs(this._zod.def, { catchall: void 0 }));
  },
  extend(incoming) {
    return util_exports.extend(this, incoming);
  },
  safeExtend(incoming) {
    return util_exports.safeExtend(this, incoming);
  },
  merge(other) {
    return util_exports.merge(this, other);
  },
  pick(mask) {
    return util_exports.pick(this, mask);
  },
  omit(mask) {
    return util_exports.omit(this, mask);
  },
  partial(...args) {
    return util_exports.partial(ZodOptional2, this, args[0]);
  },
  exactPartial(...args) {
    return util_exports.partial(ZodExactOptional, this, args[0], "exactPartial");
  },
  required(...args) {
    return util_exports.required(ZodNonOptional, this, args[0]);
  }
});
function object2(shape, params) {
  let def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject2(def);
}
function looseObject(shape, params) {
  return new ZodObject2({
    type: "object",
    shape,
    catchall: unknown(),
    ...util_exports.normalizeParams(params)
  });
}
var ZodUnion2 = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params), inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion2({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion2 = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion2.init(inst, def), $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion2({
    type: "union",
    options,
    discriminator,
    ...util_exports.normalizeParams(params)
  });
}
var ZodIntersection2 = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection2({
    type: "intersection",
    left,
    right
  });
}
var ZodRecord2 = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  _ensureDefaultMemoizer(), $ZodRecord.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params), inst.keyType = def.keyType, inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  return !valueType || !valueType._zod ? new ZodRecord2({
    type: "record",
    keyType: string2(),
    valueType: keyType,
    ...util_exports.normalizeParams(valueType)
  }) : new ZodRecord2({
    type: "record",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEnum2 = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params), inst.enum = def.entries, inst.options = [...inst._zod.values];
  let keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    let newEntries = {};
    for (let value of values)
      if (keys.has(value))
        newEntries[value] = def.entries[value];
      else
        throw new Error(`Key ${value} not found in enum`);
    return new ZodEnum2({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  }, inst.exclude = (values, params) => {
    let newEntries = { ...def.entries };
    for (let value of values)
      if (keys.has(value))
        delete newEntries[value];
      else
        throw new Error(`Key ${value} not found in enum`);
    return new ZodEnum2({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  let entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum2({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLiteral2 = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params), inst.values = new Set(def.values), Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer(), $ZodTransform.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params), inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward")
      throw new $ZodEncodeError(inst.constructor.name);
    payload.addIssue = (issue2) => {
      if (typeof issue2 == "string")
        payload.issues.push(util_exports.issue(issue2, payload.value, def));
      else {
        let _issue = issue2;
        _issue.fatal && (_issue.continue = !1), _issue.code ?? (_issue.code = "custom"), "input" in _issue || (_issue.input = payload.value), _issue.inst ?? (_issue.inst = inst), payload.issues.push(util_exports.issue(_issue));
      }
    };
    let output = def.transform(payload.value, payload);
    return output instanceof Promise ? output.then((output2) => (payload.value = output2, payload)) : (payload.value = output, payload);
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional2 = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional2({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable2 = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable2({
    type: "nullable",
    innerType
  });
}
var ZodDefault2 = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType, inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue == "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodCatch2 = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType, inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue == "function" ? catchValue : util_exports.constantCatch(catchValue)
  });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params), inst.in = def.in, inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodPreprocess = /* @__PURE__ */ $constructor("ZodPreprocess", (inst, def) => {
  ZodPipe.init(inst, def), $ZodPreprocess.init(inst, def);
}), ZodReadonly2 = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params), inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly2({
    type: "readonly",
    innerType
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def), ZodType2.init(inst, def), inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function custom(fn, _params) {
  return _custom(ZodCustom, fn ?? (() => !0), _params);
}
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}
function preprocess(fn, schema) {
  return new ZodPreprocess({
    type: "pipe",
    in: transform(fn),
    out: schema
  });
}

// node_modules/zod/v4/classic/iso.js
var iso_exports2 = {};
__export(iso_exports2, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
init_define_LUFF_CREW_ASSETS();
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
function date2(params) {
  return _isoDate(ZodISODate, params);
}
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/types.js
var LATEST_PROTOCOL_VERSION = "2025-11-25";
var SUPPORTED_PROTOCOL_VERSIONS = [LATEST_PROTOCOL_VERSION, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"], RELATED_TASK_META_KEY = "io.modelcontextprotocol/related-task", JSONRPC_VERSION = "2.0", AssertObjectSchema = custom((v) => v !== null && (typeof v == "object" || typeof v == "function")), ProgressTokenSchema = union([string2(), number2().int()]), CursorSchema = string2(), TaskCreationParamsSchema = looseObject({
  /**
   * Requested duration in milliseconds to retain task from creation.
   */
  ttl: number2().optional(),
  /**
   * Time in milliseconds to wait between task status requests.
   */
  pollInterval: number2().optional()
}), TaskMetadataSchema = object2({
  ttl: number2().optional()
}), RelatedTaskMetadataSchema = object2({
  taskId: string2()
}), RequestMetaSchema = looseObject({
  /**
   * If specified, the caller is requesting out-of-band progress notifications for this request (as represented by notifications/progress). The value of this parameter is an opaque token that will be attached to any subsequent notifications. The receiver is not obligated to provide these notifications.
   */
  progressToken: ProgressTokenSchema.optional(),
  /**
   * If specified, this request is related to the provided task.
   */
  [RELATED_TASK_META_KEY]: RelatedTaskMetadataSchema.optional()
}), BaseRequestParamsSchema = object2({
  /**
   * See [General fields: `_meta`](/specification/draft/basic/index#meta) for notes on `_meta` usage.
   */
  _meta: RequestMetaSchema.optional()
}), TaskAugmentedRequestParamsSchema = BaseRequestParamsSchema.extend({
  /**
   * If specified, the caller is requesting task-augmented execution for this request.
   * The request will return a CreateTaskResult immediately, and the actual result can be
   * retrieved later via tasks/result.
   *
   * Task augmentation is subject to capability negotiation - receivers MUST declare support
   * for task augmentation of specific request types in their capabilities.
   */
  task: TaskMetadataSchema.optional()
}), isTaskAugmentedRequestParams = (value) => TaskAugmentedRequestParamsSchema.safeParse(value).success, RequestSchema = object2({
  method: string2(),
  params: BaseRequestParamsSchema.loose().optional()
}), NotificationsParamsSchema = object2({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: RequestMetaSchema.optional()
}), NotificationSchema = object2({
  method: string2(),
  params: NotificationsParamsSchema.loose().optional()
}), ResultSchema = looseObject({
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: RequestMetaSchema.optional()
}), RequestIdSchema = union([string2(), number2().int()]), JSONRPCRequestSchema = object2({
  jsonrpc: literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  ...RequestSchema.shape
}).strict(), isJSONRPCRequest = (value) => JSONRPCRequestSchema.safeParse(value).success, JSONRPCNotificationSchema = object2({
  jsonrpc: literal(JSONRPC_VERSION),
  ...NotificationSchema.shape
}).strict(), isJSONRPCNotification = (value) => JSONRPCNotificationSchema.safeParse(value).success, JSONRPCResultResponseSchema = object2({
  jsonrpc: literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  result: ResultSchema
}).strict(), isJSONRPCResultResponse = (value) => JSONRPCResultResponseSchema.safeParse(value).success;
var ErrorCode;
(function(ErrorCode2) {
  ErrorCode2[ErrorCode2.ConnectionClosed = -32e3] = "ConnectionClosed", ErrorCode2[ErrorCode2.RequestTimeout = -32001] = "RequestTimeout", ErrorCode2[ErrorCode2.ParseError = -32700] = "ParseError", ErrorCode2[ErrorCode2.InvalidRequest = -32600] = "InvalidRequest", ErrorCode2[ErrorCode2.MethodNotFound = -32601] = "MethodNotFound", ErrorCode2[ErrorCode2.InvalidParams = -32602] = "InvalidParams", ErrorCode2[ErrorCode2.InternalError = -32603] = "InternalError", ErrorCode2[ErrorCode2.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(ErrorCode || (ErrorCode = {}));
var JSONRPCErrorResponseSchema = object2({
  jsonrpc: literal(JSONRPC_VERSION),
  id: RequestIdSchema.optional(),
  error: object2({
    /**
     * The error type that occurred.
     */
    code: number2().int(),
    /**
     * A short description of the error. The message SHOULD be limited to a concise single sentence.
     */
    message: string2(),
    /**
     * Additional information about the error. The value of this member is defined by the sender (e.g. detailed error information, nested errors etc.).
     */
    data: unknown().optional()
  })
}).strict();
var isJSONRPCErrorResponse = (value) => JSONRPCErrorResponseSchema.safeParse(value).success;
var JSONRPCMessageSchema = union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResultResponseSchema,
  JSONRPCErrorResponseSchema
]), JSONRPCResponseSchema = union([JSONRPCResultResponseSchema, JSONRPCErrorResponseSchema]), EmptyResultSchema = ResultSchema.strict(), CancelledNotificationParamsSchema = NotificationsParamsSchema.extend({
  /**
   * The ID of the request to cancel.
   *
   * This MUST correspond to the ID of a request previously issued in the same direction.
   */
  requestId: RequestIdSchema.optional(),
  /**
   * An optional string describing the reason for the cancellation. This MAY be logged or presented to the user.
   */
  reason: string2().optional()
}), CancelledNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/cancelled"),
  params: CancelledNotificationParamsSchema
}), IconSchema = object2({
  /**
   * URL or data URI for the icon.
   */
  src: string2(),
  /**
   * Optional MIME type for the icon.
   */
  mimeType: string2().optional(),
  /**
   * Optional array of strings that specify sizes at which the icon can be used.
   * Each string should be in WxH format (e.g., `"48x48"`, `"96x96"`) or `"any"` for scalable formats like SVG.
   *
   * If not provided, the client should assume that the icon can be used at any size.
   */
  sizes: array(string2()).optional(),
  /**
   * Optional specifier for the theme this icon is designed for. `light` indicates
   * the icon is designed to be used with a light background, and `dark` indicates
   * the icon is designed to be used with a dark background.
   *
   * If not provided, the client should assume the icon can be used with any theme.
   */
  theme: _enum(["light", "dark"]).optional()
}), IconsSchema = object2({
  /**
   * Optional set of sized icons that the client can display in a user interface.
   *
   * Clients that support rendering icons MUST support at least the following MIME types:
   * - `image/png` - PNG images (safe, universal compatibility)
   * - `image/jpeg` (and `image/jpg`) - JPEG images (safe, universal compatibility)
   *
   * Clients that support rendering icons SHOULD also support:
   * - `image/svg+xml` - SVG images (scalable but requires security precautions)
   * - `image/webp` - WebP images (modern, efficient format)
   */
  icons: array(IconSchema).optional()
}), BaseMetadataSchema = object2({
  /** Intended for programmatic or logical use, but used as a display name in past specs or fallback */
  name: string2(),
  /**
   * Intended for UI and end-user contexts — optimized to be human-readable and easily understood,
   * even by those unfamiliar with domain-specific terminology.
   *
   * If not provided, the name should be used for display (except for Tool,
   * where `annotations.title` should be given precedence over using `name`,
   * if present).
   */
  title: string2().optional()
}), ImplementationSchema = BaseMetadataSchema.extend({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  version: string2(),
  /**
   * An optional URL of the website for this implementation.
   */
  websiteUrl: string2().optional(),
  /**
   * An optional human-readable description of what this implementation does.
   *
   * This can be used by clients or servers to provide context about their purpose
   * and capabilities. For example, a server might describe the types of resources
   * or tools it provides, while a client might describe its intended use case.
   */
  description: string2().optional()
}), FormElicitationCapabilitySchema = intersection(object2({
  applyDefaults: boolean2().optional()
}), record(string2(), unknown())), ElicitationCapabilitySchema = preprocess((value) => value && typeof value == "object" && !Array.isArray(value) && Object.keys(value).length === 0 ? { form: {} } : value, intersection(object2({
  form: FormElicitationCapabilitySchema.optional(),
  url: AssertObjectSchema.optional()
}), record(string2(), unknown()).optional())), ClientTasksCapabilitySchema = looseObject({
  /**
   * Present if the client supports listing tasks.
   */
  list: AssertObjectSchema.optional(),
  /**
   * Present if the client supports cancelling tasks.
   */
  cancel: AssertObjectSchema.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: looseObject({
    /**
     * Task support for sampling requests.
     */
    sampling: looseObject({
      createMessage: AssertObjectSchema.optional()
    }).optional(),
    /**
     * Task support for elicitation requests.
     */
    elicitation: looseObject({
      create: AssertObjectSchema.optional()
    }).optional()
  }).optional()
}), ServerTasksCapabilitySchema = looseObject({
  /**
   * Present if the server supports listing tasks.
   */
  list: AssertObjectSchema.optional(),
  /**
   * Present if the server supports cancelling tasks.
   */
  cancel: AssertObjectSchema.optional(),
  /**
   * Capabilities for task creation on specific request types.
   */
  requests: looseObject({
    /**
     * Task support for tool requests.
     */
    tools: looseObject({
      call: AssertObjectSchema.optional()
    }).optional()
  }).optional()
}), ClientCapabilitiesSchema = object2({
  /**
   * Experimental, non-standard capabilities that the client supports.
   */
  experimental: record(string2(), AssertObjectSchema).optional(),
  /**
   * Present if the client supports sampling from an LLM.
   */
  sampling: object2({
    /**
     * Present if the client supports context inclusion via includeContext parameter.
     * If not declared, servers SHOULD only use `includeContext: "none"` (or omit it).
     */
    context: AssertObjectSchema.optional(),
    /**
     * Present if the client supports tool use via tools and toolChoice parameters.
     */
    tools: AssertObjectSchema.optional()
  }).optional(),
  /**
   * Present if the client supports eliciting user input.
   */
  elicitation: ElicitationCapabilitySchema.optional(),
  /**
   * Present if the client supports listing roots.
   */
  roots: object2({
    /**
     * Whether the client supports issuing notifications for changes to the roots list.
     */
    listChanged: boolean2().optional()
  }).optional(),
  /**
   * Present if the client supports task creation.
   */
  tasks: ClientTasksCapabilitySchema.optional(),
  /**
   * Extensions that the client supports. Keys are extension identifiers (vendor-prefix/extension-name).
   */
  extensions: record(string2(), AssertObjectSchema).optional()
}), InitializeRequestParamsSchema = BaseRequestParamsSchema.extend({
  /**
   * The latest version of the Model Context Protocol that the client supports. The client MAY decide to support older versions as well.
   */
  protocolVersion: string2(),
  capabilities: ClientCapabilitiesSchema,
  clientInfo: ImplementationSchema
}), InitializeRequestSchema = RequestSchema.extend({
  method: literal("initialize"),
  params: InitializeRequestParamsSchema
});
var ServerCapabilitiesSchema = object2({
  /**
   * Experimental, non-standard capabilities that the server supports.
   */
  experimental: record(string2(), AssertObjectSchema).optional(),
  /**
   * Present if the server supports sending log messages to the client.
   */
  logging: AssertObjectSchema.optional(),
  /**
   * Present if the server supports sending completions to the client.
   */
  completions: AssertObjectSchema.optional(),
  /**
   * Present if the server offers any prompt templates.
   */
  prompts: object2({
    /**
     * Whether this server supports issuing notifications for changes to the prompt list.
     */
    listChanged: boolean2().optional()
  }).optional(),
  /**
   * Present if the server offers any resources to read.
   */
  resources: object2({
    /**
     * Whether this server supports clients subscribing to resource updates.
     */
    subscribe: boolean2().optional(),
    /**
     * Whether this server supports issuing notifications for changes to the resource list.
     */
    listChanged: boolean2().optional()
  }).optional(),
  /**
   * Present if the server offers any tools to call.
   */
  tools: object2({
    /**
     * Whether this server supports issuing notifications for changes to the tool list.
     */
    listChanged: boolean2().optional()
  }).optional(),
  /**
   * Present if the server supports task creation.
   */
  tasks: ServerTasksCapabilitySchema.optional(),
  /**
   * Extensions that the server supports. Keys are extension identifiers (vendor-prefix/extension-name).
   */
  extensions: record(string2(), AssertObjectSchema).optional()
}), InitializeResultSchema = ResultSchema.extend({
  /**
   * The version of the Model Context Protocol that the server wants to use. This may not match the version that the client requested. If the client cannot support this version, it MUST disconnect.
   */
  protocolVersion: string2(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ImplementationSchema,
  /**
   * Instructions describing how to use the server and its features.
   *
   * This can be used by clients to improve the LLM's understanding of available tools, resources, etc. It can be thought of like a "hint" to the model. For example, this information MAY be added to the system prompt.
   */
  instructions: string2().optional()
}), InitializedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/initialized"),
  params: NotificationsParamsSchema.optional()
});
var PingRequestSchema = RequestSchema.extend({
  method: literal("ping"),
  params: BaseRequestParamsSchema.optional()
}), ProgressSchema = object2({
  /**
   * The progress thus far. This should increase every time progress is made, even if the total is unknown.
   */
  progress: number2(),
  /**
   * Total number of items to process (or total progress required), if known.
   */
  total: optional(number2()),
  /**
   * An optional message describing the current progress.
   */
  message: optional(string2())
}), ProgressNotificationParamsSchema = object2({
  ...NotificationsParamsSchema.shape,
  ...ProgressSchema.shape,
  /**
   * The progress token which was given in the initial request, used to associate this notification with the request that is proceeding.
   */
  progressToken: ProgressTokenSchema
}), ProgressNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/progress"),
  params: ProgressNotificationParamsSchema
}), PaginatedRequestParamsSchema = BaseRequestParamsSchema.extend({
  /**
   * An opaque token representing the current pagination position.
   * If provided, the server should return results starting after this cursor.
   */
  cursor: CursorSchema.optional()
}), PaginatedRequestSchema = RequestSchema.extend({
  params: PaginatedRequestParamsSchema.optional()
}), PaginatedResultSchema = ResultSchema.extend({
  /**
   * An opaque token representing the pagination position after the last returned result.
   * If present, there may be more results available.
   */
  nextCursor: CursorSchema.optional()
}), TaskStatusSchema = _enum(["working", "input_required", "completed", "failed", "cancelled"]), TaskSchema = object2({
  taskId: string2(),
  status: TaskStatusSchema,
  /**
   * Time in milliseconds to keep task results available after completion.
   * If null, the task has unlimited lifetime until manually cleaned up.
   */
  ttl: union([number2(), _null3()]),
  /**
   * ISO 8601 timestamp when the task was created.
   */
  createdAt: string2(),
  /**
   * ISO 8601 timestamp when the task was last updated.
   */
  lastUpdatedAt: string2(),
  pollInterval: optional(number2()),
  /**
   * Optional diagnostic message for failed tasks or other status information.
   */
  statusMessage: optional(string2())
}), CreateTaskResultSchema = ResultSchema.extend({
  task: TaskSchema
}), TaskStatusNotificationParamsSchema = NotificationsParamsSchema.merge(TaskSchema), TaskStatusNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/tasks/status"),
  params: TaskStatusNotificationParamsSchema
}), GetTaskRequestSchema = RequestSchema.extend({
  method: literal("tasks/get"),
  params: BaseRequestParamsSchema.extend({
    taskId: string2()
  })
}), GetTaskResultSchema = ResultSchema.merge(TaskSchema), GetTaskPayloadRequestSchema = RequestSchema.extend({
  method: literal("tasks/result"),
  params: BaseRequestParamsSchema.extend({
    taskId: string2()
  })
}), GetTaskPayloadResultSchema = ResultSchema.loose(), ListTasksRequestSchema = PaginatedRequestSchema.extend({
  method: literal("tasks/list")
}), ListTasksResultSchema = PaginatedResultSchema.extend({
  tasks: array(TaskSchema)
}), CancelTaskRequestSchema = RequestSchema.extend({
  method: literal("tasks/cancel"),
  params: BaseRequestParamsSchema.extend({
    taskId: string2()
  })
}), CancelTaskResultSchema = ResultSchema.merge(TaskSchema), ResourceContentsSchema = object2({
  /**
   * The URI of this resource.
   */
  uri: string2(),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: optional(string2()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), TextResourceContentsSchema = ResourceContentsSchema.extend({
  /**
   * The text of the item. This must only be set if the item can actually be represented as text (not binary data).
   */
  text: string2()
}), Base64Schema = string2().refine((val) => {
  try {
    return atob(val), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), BlobResourceContentsSchema = ResourceContentsSchema.extend({
  /**
   * A base64-encoded string representing the binary data of the item.
   */
  blob: Base64Schema
}), RoleSchema = _enum(["user", "assistant"]), AnnotationsSchema = object2({
  /**
   * Intended audience(s) for the resource.
   */
  audience: array(RoleSchema).optional(),
  /**
   * Importance hint for the resource, from 0 (least) to 1 (most).
   */
  priority: number2().min(0).max(1).optional(),
  /**
   * ISO 8601 timestamp for the most recent modification.
   */
  lastModified: iso_exports2.datetime({ offset: !0 }).optional()
}), ResourceSchema = object2({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  /**
   * The URI of this resource.
   */
  uri: string2(),
  /**
   * A description of what this resource represents.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: optional(string2()),
  /**
   * The MIME type of this resource, if known.
   */
  mimeType: optional(string2()),
  /**
   * The size of the raw resource content, in bytes (i.e., before base64 encoding or any tokenization), if known.
   *
   * This can be used by Hosts to display file sizes and estimate context window usage.
   */
  size: optional(number2()),
  /**
   * Optional annotations for the client.
   */
  annotations: AnnotationsSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: optional(looseObject({}))
}), ResourceTemplateSchema = object2({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  /**
   * A URI template (according to RFC 6570) that can be used to construct resource URIs.
   */
  uriTemplate: string2(),
  /**
   * A description of what this template is for.
   *
   * This can be used by clients to improve the LLM's understanding of available resources. It can be thought of like a "hint" to the model.
   */
  description: optional(string2()),
  /**
   * The MIME type for all resources that match this template. This should only be included if all resources matching this template have the same type.
   */
  mimeType: optional(string2()),
  /**
   * Optional annotations for the client.
   */
  annotations: AnnotationsSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: optional(looseObject({}))
}), ListResourcesRequestSchema = PaginatedRequestSchema.extend({
  method: literal("resources/list")
}), ListResourcesResultSchema = PaginatedResultSchema.extend({
  resources: array(ResourceSchema)
}), ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({
  method: literal("resources/templates/list")
}), ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({
  resourceTemplates: array(ResourceTemplateSchema)
}), ResourceRequestParamsSchema = BaseRequestParamsSchema.extend({
  /**
   * The URI of the resource to read. The URI can use any protocol; it is up to the server how to interpret it.
   *
   * @format uri
   */
  uri: string2()
}), ReadResourceRequestParamsSchema = ResourceRequestParamsSchema, ReadResourceRequestSchema = RequestSchema.extend({
  method: literal("resources/read"),
  params: ReadResourceRequestParamsSchema
}), ReadResourceResultSchema = ResultSchema.extend({
  contents: array(union([TextResourceContentsSchema, BlobResourceContentsSchema]))
}), ResourceListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/resources/list_changed"),
  params: NotificationsParamsSchema.optional()
}), SubscribeRequestParamsSchema = ResourceRequestParamsSchema, SubscribeRequestSchema = RequestSchema.extend({
  method: literal("resources/subscribe"),
  params: SubscribeRequestParamsSchema
}), UnsubscribeRequestParamsSchema = ResourceRequestParamsSchema, UnsubscribeRequestSchema = RequestSchema.extend({
  method: literal("resources/unsubscribe"),
  params: UnsubscribeRequestParamsSchema
}), ResourceUpdatedNotificationParamsSchema = NotificationsParamsSchema.extend({
  /**
   * The URI of the resource that has been updated. This might be a sub-resource of the one that the client actually subscribed to.
   */
  uri: string2()
}), ResourceUpdatedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/resources/updated"),
  params: ResourceUpdatedNotificationParamsSchema
}), PromptArgumentSchema = object2({
  /**
   * The name of the argument.
   */
  name: string2(),
  /**
   * A human-readable description of the argument.
   */
  description: optional(string2()),
  /**
   * Whether this argument must be provided.
   */
  required: optional(boolean2())
}), PromptSchema = object2({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  /**
   * An optional description of what this prompt provides
   */
  description: optional(string2()),
  /**
   * A list of arguments to use for templating the prompt.
   */
  arguments: optional(array(PromptArgumentSchema)),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: optional(looseObject({}))
}), ListPromptsRequestSchema = PaginatedRequestSchema.extend({
  method: literal("prompts/list")
}), ListPromptsResultSchema = PaginatedResultSchema.extend({
  prompts: array(PromptSchema)
}), GetPromptRequestParamsSchema = BaseRequestParamsSchema.extend({
  /**
   * The name of the prompt or prompt template.
   */
  name: string2(),
  /**
   * Arguments to use for templating the prompt.
   */
  arguments: record(string2(), string2()).optional()
}), GetPromptRequestSchema = RequestSchema.extend({
  method: literal("prompts/get"),
  params: GetPromptRequestParamsSchema
}), TextContentSchema = object2({
  type: literal("text"),
  /**
   * The text content of the message.
   */
  text: string2(),
  /**
   * Optional annotations for the client.
   */
  annotations: AnnotationsSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), ImageContentSchema = object2({
  type: literal("image"),
  /**
   * The base64-encoded image data.
   */
  data: Base64Schema,
  /**
   * The MIME type of the image. Different providers may support different image types.
   */
  mimeType: string2(),
  /**
   * Optional annotations for the client.
   */
  annotations: AnnotationsSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), AudioContentSchema = object2({
  type: literal("audio"),
  /**
   * The base64-encoded audio data.
   */
  data: Base64Schema,
  /**
   * The MIME type of the audio. Different providers may support different audio types.
   */
  mimeType: string2(),
  /**
   * Optional annotations for the client.
   */
  annotations: AnnotationsSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), ToolUseContentSchema = object2({
  type: literal("tool_use"),
  /**
   * The name of the tool to invoke.
   * Must match a tool name from the request's tools array.
   */
  name: string2(),
  /**
   * Unique identifier for this tool call.
   * Used to correlate with ToolResultContent in subsequent messages.
   */
  id: string2(),
  /**
   * Arguments to pass to the tool.
   * Must conform to the tool's inputSchema.
   */
  input: record(string2(), unknown()),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), EmbeddedResourceSchema = object2({
  type: literal("resource"),
  resource: union([TextResourceContentsSchema, BlobResourceContentsSchema]),
  /**
   * Optional annotations for the client.
   */
  annotations: AnnotationsSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), ResourceLinkSchema = ResourceSchema.extend({
  type: literal("resource_link")
}), ContentBlockSchema = union([
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ResourceLinkSchema,
  EmbeddedResourceSchema
]), PromptMessageSchema = object2({
  role: RoleSchema,
  content: ContentBlockSchema
}), GetPromptResultSchema = ResultSchema.extend({
  /**
   * An optional description for the prompt.
   */
  description: string2().optional(),
  messages: array(PromptMessageSchema)
}), PromptListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/prompts/list_changed"),
  params: NotificationsParamsSchema.optional()
}), ToolAnnotationsSchema = object2({
  /**
   * A human-readable title for the tool.
   */
  title: string2().optional(),
  /**
   * If true, the tool does not modify its environment.
   *
   * Default: false
   */
  readOnlyHint: boolean2().optional(),
  /**
   * If true, the tool may perform destructive updates to its environment.
   * If false, the tool performs only additive updates.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: true
   */
  destructiveHint: boolean2().optional(),
  /**
   * If true, calling the tool repeatedly with the same arguments
   * will have no additional effect on the its environment.
   *
   * (This property is meaningful only when `readOnlyHint == false`)
   *
   * Default: false
   */
  idempotentHint: boolean2().optional(),
  /**
   * If true, this tool may interact with an "open world" of external
   * entities. If false, the tool's domain of interaction is closed.
   * For example, the world of a web search tool is open, whereas that
   * of a memory tool is not.
   *
   * Default: true
   */
  openWorldHint: boolean2().optional()
}), ToolExecutionSchema = object2({
  /**
   * Indicates the tool's preference for task-augmented execution.
   * - "required": Clients MUST invoke the tool as a task
   * - "optional": Clients MAY invoke the tool as a task or normal request
   * - "forbidden": Clients MUST NOT attempt to invoke the tool as a task
   *
   * If not present, defaults to "forbidden".
   */
  taskSupport: _enum(["required", "optional", "forbidden"]).optional()
}), ToolSchema = object2({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  /**
   * A human-readable description of the tool.
   */
  description: string2().optional(),
  /**
   * A JSON Schema 2020-12 object defining the expected parameters for the tool.
   * Must have type: 'object' at the root level per MCP spec.
   */
  inputSchema: object2({
    type: literal("object"),
    properties: record(string2(), AssertObjectSchema).optional(),
    required: array(string2()).optional()
  }).catchall(unknown()),
  /**
   * An optional JSON Schema 2020-12 object defining the structure of the tool's output
   * returned in the structuredContent field of a CallToolResult.
   * Must have type: 'object' at the root level per MCP spec.
   */
  outputSchema: object2({
    type: literal("object"),
    properties: record(string2(), AssertObjectSchema).optional(),
    required: array(string2()).optional()
  }).catchall(unknown()).optional(),
  /**
   * Optional additional tool information.
   */
  annotations: ToolAnnotationsSchema.optional(),
  /**
   * Execution-related properties for this tool.
   */
  execution: ToolExecutionSchema.optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), ListToolsRequestSchema = PaginatedRequestSchema.extend({
  method: literal("tools/list")
}), ListToolsResultSchema = PaginatedResultSchema.extend({
  tools: array(ToolSchema)
}), CallToolResultSchema = ResultSchema.extend({
  /**
   * A list of content objects that represent the result of the tool call.
   *
   * If the Tool does not define an outputSchema, this field MUST be present in the result.
   * For backwards compatibility, this field is always present, but it may be empty.
   */
  content: array(ContentBlockSchema).default([]),
  /**
   * An object containing structured tool output.
   *
   * If the Tool defines an outputSchema, this field MUST be present in the result, and contain a JSON object that matches the schema.
   */
  structuredContent: record(string2(), unknown()).optional(),
  /**
   * Whether the tool call ended in an error.
   *
   * If not set, this is assumed to be false (the call was successful).
   *
   * Any errors that originate from the tool SHOULD be reported inside the result
   * object, with `isError` set to true, _not_ as an MCP protocol-level error
   * response. Otherwise, the LLM would not be able to see that an error occurred
   * and self-correct.
   *
   * However, any errors in _finding_ the tool, an error indicating that the
   * server does not support tool calls, or any other exceptional conditions,
   * should be reported as an MCP error response.
   */
  isError: boolean2().optional()
}), CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({
  toolResult: unknown()
})), CallToolRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  /**
   * The name of the tool to call.
   */
  name: string2(),
  /**
   * Arguments to pass to the tool.
   */
  arguments: record(string2(), unknown()).optional()
}), CallToolRequestSchema = RequestSchema.extend({
  method: literal("tools/call"),
  params: CallToolRequestParamsSchema
}), ToolListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/tools/list_changed"),
  params: NotificationsParamsSchema.optional()
}), ListChangedOptionsBaseSchema = object2({
  /**
   * If true, the list will be refreshed automatically when a list changed notification is received.
   * The callback will be called with the updated list.
   *
   * If false, the callback will be called with null items, allowing manual refresh.
   *
   * @default true
   */
  autoRefresh: boolean2().default(!0),
  /**
   * Debounce time in milliseconds for list changed notification processing.
   *
   * Multiple notifications received within this timeframe will only trigger one refresh.
   * Set to 0 to disable debouncing.
   *
   * @default 300
   */
  debounceMs: number2().int().nonnegative().default(300)
}), LoggingLevelSchema = _enum(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]), SetLevelRequestParamsSchema = BaseRequestParamsSchema.extend({
  /**
   * The level of logging that the client wants to receive from the server. The server should send all logs at this level and higher (i.e., more severe) to the client as notifications/logging/message.
   */
  level: LoggingLevelSchema
}), SetLevelRequestSchema = RequestSchema.extend({
  method: literal("logging/setLevel"),
  params: SetLevelRequestParamsSchema
}), LoggingMessageNotificationParamsSchema = NotificationsParamsSchema.extend({
  /**
   * The severity of this log message.
   */
  level: LoggingLevelSchema,
  /**
   * An optional name of the logger issuing this message.
   */
  logger: string2().optional(),
  /**
   * The data to be logged, such as a string message or an object. Any JSON serializable type is allowed here.
   */
  data: unknown()
}), LoggingMessageNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/message"),
  params: LoggingMessageNotificationParamsSchema
}), ModelHintSchema = object2({
  /**
   * A hint for a model name.
   */
  name: string2().optional()
}), ModelPreferencesSchema = object2({
  /**
   * Optional hints to use for model selection.
   */
  hints: array(ModelHintSchema).optional(),
  /**
   * How much to prioritize cost when selecting a model.
   */
  costPriority: number2().min(0).max(1).optional(),
  /**
   * How much to prioritize sampling speed (latency) when selecting a model.
   */
  speedPriority: number2().min(0).max(1).optional(),
  /**
   * How much to prioritize intelligence and capabilities when selecting a model.
   */
  intelligencePriority: number2().min(0).max(1).optional()
}), ToolChoiceSchema = object2({
  /**
   * Controls when tools are used:
   * - "auto": Model decides whether to use tools (default)
   * - "required": Model MUST use at least one tool before completing
   * - "none": Model MUST NOT use any tools
   */
  mode: _enum(["auto", "required", "none"]).optional()
}), ToolResultContentSchema = object2({
  type: literal("tool_result"),
  toolUseId: string2().describe("The unique identifier for the corresponding tool call."),
  content: array(ContentBlockSchema).default([]),
  structuredContent: object2({}).loose().optional(),
  isError: boolean2().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), SamplingContentSchema = discriminatedUnion("type", [TextContentSchema, ImageContentSchema, AudioContentSchema]), SamplingMessageContentBlockSchema = discriminatedUnion("type", [
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ToolUseContentSchema,
  ToolResultContentSchema
]), SamplingMessageSchema = object2({
  role: RoleSchema,
  content: union([SamplingMessageContentBlockSchema, array(SamplingMessageContentBlockSchema)]),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), CreateMessageRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  messages: array(SamplingMessageSchema),
  /**
   * The server's preferences for which model to select. The client MAY modify or omit this request.
   */
  modelPreferences: ModelPreferencesSchema.optional(),
  /**
   * An optional system prompt the server wants to use for sampling. The client MAY modify or omit this prompt.
   */
  systemPrompt: string2().optional(),
  /**
   * A request to include context from one or more MCP servers (including the caller), to be attached to the prompt.
   * The client MAY ignore this request.
   *
   * Default is "none". Values "thisServer" and "allServers" are soft-deprecated. Servers SHOULD only use these values if the client
   * declares ClientCapabilities.sampling.context. These values may be removed in future spec releases.
   */
  includeContext: _enum(["none", "thisServer", "allServers"]).optional(),
  temperature: number2().optional(),
  /**
   * The requested maximum number of tokens to sample (to prevent runaway completions).
   *
   * The client MAY choose to sample fewer tokens than the requested maximum.
   */
  maxTokens: number2().int(),
  stopSequences: array(string2()).optional(),
  /**
   * Optional metadata to pass through to the LLM provider. The format of this metadata is provider-specific.
   */
  metadata: AssertObjectSchema.optional(),
  /**
   * Tools that the model may use during generation.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   */
  tools: array(ToolSchema).optional(),
  /**
   * Controls how the model uses tools.
   * The client MUST return an error if this field is provided but ClientCapabilities.sampling.tools is not declared.
   * Default is `{ mode: "auto" }`.
   */
  toolChoice: ToolChoiceSchema.optional()
}), CreateMessageRequestSchema = RequestSchema.extend({
  method: literal("sampling/createMessage"),
  params: CreateMessageRequestParamsSchema
}), CreateMessageResultSchema = ResultSchema.extend({
  /**
   * The name of the model that generated the message.
   */
  model: string2(),
  /**
   * The reason why sampling stopped, if known.
   *
   * Standard values:
   * - "endTurn": Natural end of the assistant's turn
   * - "stopSequence": A stop sequence was encountered
   * - "maxTokens": Maximum token limit was reached
   *
   * This field is an open string to allow for provider-specific stop reasons.
   */
  stopReason: optional(_enum(["endTurn", "stopSequence", "maxTokens"]).or(string2())),
  role: RoleSchema,
  /**
   * Response content. Single content block (text, image, or audio).
   */
  content: SamplingContentSchema
}), CreateMessageResultWithToolsSchema = ResultSchema.extend({
  /**
   * The name of the model that generated the message.
   */
  model: string2(),
  /**
   * The reason why sampling stopped, if known.
   *
   * Standard values:
   * - "endTurn": Natural end of the assistant's turn
   * - "stopSequence": A stop sequence was encountered
   * - "maxTokens": Maximum token limit was reached
   * - "toolUse": The model wants to use one or more tools
   *
   * This field is an open string to allow for provider-specific stop reasons.
   */
  stopReason: optional(_enum(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(string2())),
  role: RoleSchema,
  /**
   * Response content. May be a single block or array. May include ToolUseContent if stopReason is "toolUse".
   */
  content: union([SamplingMessageContentBlockSchema, array(SamplingMessageContentBlockSchema)])
}), BooleanSchemaSchema = object2({
  type: literal("boolean"),
  title: string2().optional(),
  description: string2().optional(),
  default: boolean2().optional()
}), StringSchemaSchema = object2({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  minLength: number2().optional(),
  maxLength: number2().optional(),
  format: _enum(["email", "uri", "date", "date-time"]).optional(),
  default: string2().optional()
}), NumberSchemaSchema = object2({
  type: _enum(["number", "integer"]),
  title: string2().optional(),
  description: string2().optional(),
  minimum: number2().optional(),
  maximum: number2().optional(),
  default: number2().optional()
}), UntitledSingleSelectEnumSchemaSchema = object2({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  enum: array(string2()),
  default: string2().optional()
}), TitledSingleSelectEnumSchemaSchema = object2({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  oneOf: array(object2({
    const: string2(),
    title: string2()
  })),
  default: string2().optional()
}), LegacyTitledEnumSchemaSchema = object2({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  enum: array(string2()),
  enumNames: array(string2()).optional(),
  default: string2().optional()
}), SingleSelectEnumSchemaSchema = union([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema]), UntitledMultiSelectEnumSchemaSchema = object2({
  type: literal("array"),
  title: string2().optional(),
  description: string2().optional(),
  minItems: number2().optional(),
  maxItems: number2().optional(),
  items: object2({
    type: literal("string"),
    enum: array(string2())
  }),
  default: array(string2()).optional()
}), TitledMultiSelectEnumSchemaSchema = object2({
  type: literal("array"),
  title: string2().optional(),
  description: string2().optional(),
  minItems: number2().optional(),
  maxItems: number2().optional(),
  items: object2({
    anyOf: array(object2({
      const: string2(),
      title: string2()
    }))
  }),
  default: array(string2()).optional()
}), MultiSelectEnumSchemaSchema = union([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema]), EnumSchemaSchema = union([LegacyTitledEnumSchemaSchema, SingleSelectEnumSchemaSchema, MultiSelectEnumSchemaSchema]), PrimitiveSchemaDefinitionSchema = union([EnumSchemaSchema, BooleanSchemaSchema, StringSchemaSchema, NumberSchemaSchema]), ElicitRequestFormParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  /**
   * The elicitation mode.
   *
   * Optional for backward compatibility. Clients MUST treat missing mode as "form".
   */
  mode: literal("form").optional(),
  /**
   * The message to present to the user describing what information is being requested.
   */
  message: string2(),
  /**
   * A restricted subset of JSON Schema.
   * Only top-level properties are allowed, without nesting.
   */
  requestedSchema: object2({
    type: literal("object"),
    properties: record(string2(), PrimitiveSchemaDefinitionSchema),
    required: array(string2()).optional()
  })
}), ElicitRequestURLParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  /**
   * The elicitation mode.
   */
  mode: literal("url"),
  /**
   * The message to present to the user explaining why the interaction is needed.
   */
  message: string2(),
  /**
   * The ID of the elicitation, which must be unique within the context of the server.
   * The client MUST treat this ID as an opaque value.
   */
  elicitationId: string2(),
  /**
   * The URL that the user should navigate to.
   */
  url: string2().url()
}), ElicitRequestParamsSchema = union([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema]), ElicitRequestSchema = RequestSchema.extend({
  method: literal("elicitation/create"),
  params: ElicitRequestParamsSchema
}), ElicitationCompleteNotificationParamsSchema = NotificationsParamsSchema.extend({
  /**
   * The ID of the elicitation that completed.
   */
  elicitationId: string2()
}), ElicitationCompleteNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/elicitation/complete"),
  params: ElicitationCompleteNotificationParamsSchema
}), ElicitResultSchema = ResultSchema.extend({
  /**
   * The user action in response to the elicitation.
   * - "accept": User submitted the form/confirmed the action
   * - "decline": User explicitly decline the action
   * - "cancel": User dismissed without making an explicit choice
   */
  action: _enum(["accept", "decline", "cancel"]),
  /**
   * The submitted form data, only present when action is "accept".
   * Contains values matching the requested schema.
   * Per MCP spec, content is "typically omitted" for decline/cancel actions.
   * We normalize null to undefined for leniency while maintaining type compatibility.
   */
  content: preprocess((val) => val === null ? void 0 : val, record(string2(), union([string2(), number2(), boolean2(), array(string2())])).optional())
}), ResourceTemplateReferenceSchema = object2({
  type: literal("ref/resource"),
  /**
   * The URI or URI template of the resource.
   */
  uri: string2()
});
var PromptReferenceSchema = object2({
  type: literal("ref/prompt"),
  /**
   * The name of the prompt or prompt template
   */
  name: string2()
}), CompleteRequestParamsSchema = BaseRequestParamsSchema.extend({
  ref: union([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
  /**
   * The argument's information
   */
  argument: object2({
    /**
     * The name of the argument
     */
    name: string2(),
    /**
     * The value of the argument to use for completion matching.
     */
    value: string2()
  }),
  context: object2({
    /**
     * Previously-resolved variables in a URI template or prompt.
     */
    arguments: record(string2(), string2()).optional()
  }).optional()
}), CompleteRequestSchema = RequestSchema.extend({
  method: literal("completion/complete"),
  params: CompleteRequestParamsSchema
});
function assertCompleteRequestPrompt(request) {
  if (request.params.ref.type !== "ref/prompt")
    throw new TypeError(`Expected CompleteRequestPrompt, but got ${request.params.ref.type}`);
}
function assertCompleteRequestResourceTemplate(request) {
  if (request.params.ref.type !== "ref/resource")
    throw new TypeError(`Expected CompleteRequestResourceTemplate, but got ${request.params.ref.type}`);
}
var CompleteResultSchema = ResultSchema.extend({
  completion: looseObject({
    /**
     * An array of completion values. Must not exceed 100 items.
     */
    values: array(string2()).max(100),
    /**
     * The total number of completion options available. This can exceed the number of values actually sent in the response.
     */
    total: optional(number2().int()),
    /**
     * Indicates whether there are additional completion options beyond those provided in the current response, even if the exact total is unknown.
     */
    hasMore: optional(boolean2())
  })
}), RootSchema = object2({
  /**
   * The URI identifying the root. This *must* start with file:// for now.
   */
  uri: string2().startsWith("file://"),
  /**
   * An optional name for the root.
   */
  name: string2().optional(),
  /**
   * See [MCP specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/47339c03c143bb4ec01a26e721a1b8fe66634ebe/docs/specification/draft/basic/index.mdx#general-fields)
   * for notes on _meta usage.
   */
  _meta: record(string2(), unknown()).optional()
}), ListRootsRequestSchema = RequestSchema.extend({
  method: literal("roots/list"),
  params: BaseRequestParamsSchema.optional()
}), ListRootsResultSchema = ResultSchema.extend({
  roots: array(RootSchema)
}), RootsListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/roots/list_changed"),
  params: NotificationsParamsSchema.optional()
}), ClientRequestSchema = union([
  PingRequestSchema,
  InitializeRequestSchema,
  CompleteRequestSchema,
  SetLevelRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  SubscribeRequestSchema,
  UnsubscribeRequestSchema,
  CallToolRequestSchema,
  ListToolsRequestSchema,
  GetTaskRequestSchema,
  GetTaskPayloadRequestSchema,
  ListTasksRequestSchema,
  CancelTaskRequestSchema
]), ClientNotificationSchema = union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  InitializedNotificationSchema,
  RootsListChangedNotificationSchema,
  TaskStatusNotificationSchema
]), ClientResultSchema = union([
  EmptyResultSchema,
  CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema,
  ElicitResultSchema,
  ListRootsResultSchema,
  GetTaskResultSchema,
  ListTasksResultSchema,
  CreateTaskResultSchema
]), ServerRequestSchema = union([
  PingRequestSchema,
  CreateMessageRequestSchema,
  ElicitRequestSchema,
  ListRootsRequestSchema,
  GetTaskRequestSchema,
  GetTaskPayloadRequestSchema,
  ListTasksRequestSchema,
  CancelTaskRequestSchema
]), ServerNotificationSchema = union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  LoggingMessageNotificationSchema,
  ResourceUpdatedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  PromptListChangedNotificationSchema,
  TaskStatusNotificationSchema,
  ElicitationCompleteNotificationSchema
]), ServerResultSchema = union([
  EmptyResultSchema,
  InitializeResultSchema,
  CompleteResultSchema,
  GetPromptResultSchema,
  ListPromptsResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  CallToolResultSchema,
  ListToolsResultSchema,
  GetTaskResultSchema,
  ListTasksResultSchema,
  CreateTaskResultSchema
]), McpError = class _McpError extends Error {
  constructor(code, message, data) {
    super(`MCP error ${code}: ${message}`), this.code = code, this.data = data, this.name = "McpError";
  }
  /**
   * Factory method to create the appropriate error type based on the error code and data
   */
  static fromError(code, message, data) {
    if (code === ErrorCode.UrlElicitationRequired && data) {
      let errorData = data;
      if (errorData.elicitations)
        return new UrlElicitationRequiredError(errorData.elicitations, message);
    }
    return new _McpError(code, message, data);
  }
}, UrlElicitationRequiredError = class extends McpError {
  constructor(elicitations, message = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
    super(ErrorCode.UrlElicitationRequired, message, {
      elicitations
    });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/interfaces.js
init_define_LUFF_CREW_ASSETS();
function isTerminal(status) {
  return status === "completed" || status === "failed" || status === "cancelled";
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-json-schema-compat.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/index.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/Options.js
init_define_LUFF_CREW_ASSETS();
var ignoreOverride = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use");
var defaultOptions = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref",
  openAiAnyTypeName: "OpenAiAnyType"
}, getDefaultOptions = (options) => typeof options == "string" ? {
  ...defaultOptions,
  name: options
} : {
  ...defaultOptions,
  ...options
};

// node_modules/zod-to-json-schema/dist/esm/Refs.js
init_define_LUFF_CREW_ASSETS();
var getRefs = (options) => {
  let _options = getDefaultOptions(options), currentPath = _options.name !== void 0 ? [..._options.basePath, _options.definitionPath, _options.name] : _options.basePath;
  return {
    ..._options,
    flags: { hasReferencedOpenAiAnyType: !1 },
    currentPath,
    propertyPath: void 0,
    seen: new Map(Object.entries(_options.definitions).map(([name, def]) => [
      def._def,
      {
        def: def._def,
        path: [..._options.basePath, _options.definitionPath, name],
        // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
        jsonSchema: void 0
      }
    ]))
  };
};

// node_modules/zod-to-json-schema/dist/esm/errorMessages.js
init_define_LUFF_CREW_ASSETS();
function addErrorMessage(res, key, errorMessage, refs) {
  refs?.errorMessages && errorMessage && (res.errorMessage = {
    ...res.errorMessage,
    [key]: errorMessage
  });
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
  res[key] = value, addErrorMessage(res, key, errorMessage, refs);
}

// node_modules/zod-to-json-schema/dist/esm/getRelativePath.js
init_define_LUFF_CREW_ASSETS();
var getRelativePath = (pathA, pathB) => {
  let i = 0;
  for (; i < pathA.length && i < pathB.length && pathA[i] === pathB[i]; i++)
    ;
  return [(pathA.length - i).toString(), ...pathB.slice(i)].join("/");
};

// node_modules/zod-to-json-schema/dist/esm/parseDef.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/selectParser.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/parsers/any.js
init_define_LUFF_CREW_ASSETS();
function parseAnyDef(refs) {
  if (refs.target !== "openAi")
    return {};
  let anyDefinitionPath = [
    ...refs.basePath,
    refs.definitionPath,
    refs.openAiAnyTypeName
  ];
  return refs.flags.hasReferencedOpenAiAnyType = !0, {
    $ref: refs.$refStrategy === "relative" ? getRelativePath(anyDefinitionPath, refs.currentPath) : anyDefinitionPath.join("/")
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/array.js
init_define_LUFF_CREW_ASSETS();
function parseArrayDef(def, refs) {
  let res = {
    type: "array"
  };
  return def.type?._def && def.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny && (res.items = parseDef(def.type._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items"]
  })), def.minLength && setResponseValueAndErrors(res, "minItems", def.minLength.value, def.minLength.message, refs), def.maxLength && setResponseValueAndErrors(res, "maxItems", def.maxLength.value, def.maxLength.message, refs), def.exactLength && (setResponseValueAndErrors(res, "minItems", def.exactLength.value, def.exactLength.message, refs), setResponseValueAndErrors(res, "maxItems", def.exactLength.value, def.exactLength.message, refs)), res;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js
init_define_LUFF_CREW_ASSETS();
function parseBigintDef(def, refs) {
  let res = {
    type: "integer",
    format: "int64"
  };
  if (!def.checks)
    return res;
  for (let check of def.checks)
    switch (check.kind) {
      case "min":
        refs.target === "jsonSchema7" ? check.inclusive ? setResponseValueAndErrors(res, "minimum", check.value, check.message, refs) : setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs) : (check.inclusive || (res.exclusiveMinimum = !0), setResponseValueAndErrors(res, "minimum", check.value, check.message, refs));
        break;
      case "max":
        refs.target === "jsonSchema7" ? check.inclusive ? setResponseValueAndErrors(res, "maximum", check.value, check.message, refs) : setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs) : (check.inclusive || (res.exclusiveMaximum = !0), setResponseValueAndErrors(res, "maximum", check.value, check.message, refs));
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  return res;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js
init_define_LUFF_CREW_ASSETS();
function parseBooleanDef() {
  return {
    type: "boolean"
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/branded.js
init_define_LUFF_CREW_ASSETS();
function parseBrandedDef(_def, refs) {
  return parseDef(_def.type._def, refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/catch.js
init_define_LUFF_CREW_ASSETS();
var parseCatchDef = (def, refs) => parseDef(def.innerType._def, refs);

// node_modules/zod-to-json-schema/dist/esm/parsers/date.js
init_define_LUFF_CREW_ASSETS();
function parseDateDef(def, refs, overrideDateStrategy) {
  let strategy = overrideDateStrategy ?? refs.dateStrategy;
  if (Array.isArray(strategy))
    return {
      anyOf: strategy.map((item, i) => parseDateDef(def, refs, item))
    };
  switch (strategy) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return integerDateParser(def, refs);
  }
}
var integerDateParser = (def, refs) => {
  let res = {
    type: "integer",
    format: "unix-time"
  };
  if (refs.target === "openApi3")
    return res;
  for (let check of def.checks)
    switch (check.kind) {
      case "min":
        setResponseValueAndErrors(
          res,
          "minimum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
      case "max":
        setResponseValueAndErrors(
          res,
          "maximum",
          check.value,
          // This is in milliseconds
          check.message,
          refs
        );
        break;
    }
  return res;
};

// node_modules/zod-to-json-schema/dist/esm/parsers/default.js
init_define_LUFF_CREW_ASSETS();
function parseDefaultDef(_def, refs) {
  return {
    ...parseDef(_def.innerType._def, refs),
    default: _def.defaultValue()
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/effects.js
init_define_LUFF_CREW_ASSETS();
function parseEffectsDef(_def, refs) {
  return refs.effectStrategy === "input" ? parseDef(_def.schema._def, refs) : parseAnyDef(refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/enum.js
init_define_LUFF_CREW_ASSETS();
function parseEnumDef(def) {
  return {
    type: "string",
    enum: Array.from(def.values)
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js
init_define_LUFF_CREW_ASSETS();
var isJsonSchema7AllOfType = (type) => "type" in type && type.type === "string" ? !1 : "allOf" in type;
function parseIntersectionDef(def, refs) {
  let allOf = [
    parseDef(def.left._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "0"]
    }),
    parseDef(def.right._def, {
      ...refs,
      currentPath: [...refs.currentPath, "allOf", "1"]
    })
  ].filter((x) => !!x), unevaluatedProperties = refs.target === "jsonSchema2019-09" ? { unevaluatedProperties: !1 } : void 0, mergedAllOf = [];
  return allOf.forEach((schema) => {
    if (isJsonSchema7AllOfType(schema))
      mergedAllOf.push(...schema.allOf), schema.unevaluatedProperties === void 0 && (unevaluatedProperties = void 0);
    else {
      let nestedSchema = schema;
      if ("additionalProperties" in schema && schema.additionalProperties === !1) {
        let { additionalProperties, ...rest } = schema;
        nestedSchema = rest;
      } else
        unevaluatedProperties = void 0;
      mergedAllOf.push(nestedSchema);
    }
  }), mergedAllOf.length ? {
    allOf: mergedAllOf,
    ...unevaluatedProperties
  } : void 0;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/literal.js
init_define_LUFF_CREW_ASSETS();
function parseLiteralDef(def, refs) {
  let parsedType2 = typeof def.value;
  return parsedType2 !== "bigint" && parsedType2 !== "number" && parsedType2 !== "boolean" && parsedType2 !== "string" ? {
    type: Array.isArray(def.value) ? "array" : "object"
  } : refs.target === "openApi3" ? {
    type: parsedType2 === "bigint" ? "integer" : parsedType2,
    enum: [def.value]
  } : {
    type: parsedType2 === "bigint" ? "integer" : parsedType2,
    const: def.value
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/map.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/parsers/record.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/parsers/string.js
init_define_LUFF_CREW_ASSETS();
var emojiRegex2, zodPatterns = {
  /**
   * `c` was changed to `[cC]` to replicate /i flag
   */
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  /**
   * `a-z` was added to replicate /i flag
   */
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  /**
   * Constructed a valid Unicode RegExp
   *
   * Lazily instantiate since this type of regex isn't supported
   * in all envs (e.g. React Native).
   *
   * See:
   * https://github.com/colinhacks/zod/issues/2433
   * Fix in Zod:
   * https://github.com/colinhacks/zod/commit/9340fd51e48576a75adc919bff65dbc4a5d4c99b
   */
  emoji: () => (emojiRegex2 === void 0 && (emojiRegex2 = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), emojiRegex2),
  /**
   * Unused
   */
  uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
  /**
   * Unused
   */
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  /**
   * Unused
   */
  ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function parseStringDef(def, refs) {
  let res = {
    type: "string"
  };
  if (def.checks)
    for (let check of def.checks)
      switch (check.kind) {
        case "min":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength == "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
          break;
        case "max":
          setResponseValueAndErrors(res, "maxLength", typeof res.maxLength == "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "email":
          switch (refs.emailStrategy) {
            case "format:email":
              addFormat(res, "email", check.message, refs);
              break;
            case "format:idn-email":
              addFormat(res, "idn-email", check.message, refs);
              break;
            case "pattern:zod":
              addPattern2(res, zodPatterns.email, check.message, refs);
              break;
          }
          break;
        case "url":
          addFormat(res, "uri", check.message, refs);
          break;
        case "uuid":
          addFormat(res, "uuid", check.message, refs);
          break;
        case "regex":
          addPattern2(res, check.regex, check.message, refs);
          break;
        case "cuid":
          addPattern2(res, zodPatterns.cuid, check.message, refs);
          break;
        case "cuid2":
          addPattern2(res, zodPatterns.cuid2, check.message, refs);
          break;
        case "startsWith":
          addPattern2(res, RegExp(`^${escapeLiteralCheckValue(check.value, refs)}`), check.message, refs);
          break;
        case "endsWith":
          addPattern2(res, RegExp(`${escapeLiteralCheckValue(check.value, refs)}$`), check.message, refs);
          break;
        case "datetime":
          addFormat(res, "date-time", check.message, refs);
          break;
        case "date":
          addFormat(res, "date", check.message, refs);
          break;
        case "time":
          addFormat(res, "time", check.message, refs);
          break;
        case "duration":
          addFormat(res, "duration", check.message, refs);
          break;
        case "length":
          setResponseValueAndErrors(res, "minLength", typeof res.minLength == "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs), setResponseValueAndErrors(res, "maxLength", typeof res.maxLength == "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
          break;
        case "includes": {
          addPattern2(res, RegExp(escapeLiteralCheckValue(check.value, refs)), check.message, refs);
          break;
        }
        case "ip": {
          check.version !== "v6" && addFormat(res, "ipv4", check.message, refs), check.version !== "v4" && addFormat(res, "ipv6", check.message, refs);
          break;
        }
        case "base64url":
          addPattern2(res, zodPatterns.base64url, check.message, refs);
          break;
        case "jwt":
          addPattern2(res, zodPatterns.jwt, check.message, refs);
          break;
        case "cidr": {
          check.version !== "v6" && addPattern2(res, zodPatterns.ipv4Cidr, check.message, refs), check.version !== "v4" && addPattern2(res, zodPatterns.ipv6Cidr, check.message, refs);
          break;
        }
        case "emoji":
          addPattern2(res, zodPatterns.emoji(), check.message, refs);
          break;
        case "ulid": {
          addPattern2(res, zodPatterns.ulid, check.message, refs);
          break;
        }
        case "base64": {
          switch (refs.base64Strategy) {
            case "format:binary": {
              addFormat(res, "binary", check.message, refs);
              break;
            }
            case "contentEncoding:base64": {
              setResponseValueAndErrors(res, "contentEncoding", "base64", check.message, refs);
              break;
            }
            case "pattern:zod": {
              addPattern2(res, zodPatterns.base64, check.message, refs);
              break;
            }
          }
          break;
        }
        case "nanoid":
          addPattern2(res, zodPatterns.nanoid, check.message, refs);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
      }
  return res;
}
function escapeLiteralCheckValue(literal2, refs) {
  return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(literal2) : literal2;
}
var ALPHA_NUMERIC = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function escapeNonAlphaNumeric(source) {
  let result = "";
  for (let i = 0; i < source.length; i++)
    ALPHA_NUMERIC.has(source[i]) || (result += "\\"), result += source[i];
  return result;
}
function addFormat(schema, value, message, refs) {
  schema.format || schema.anyOf?.some((x) => x.format) ? (schema.anyOf || (schema.anyOf = []), schema.format && (schema.anyOf.push({
    format: schema.format,
    ...schema.errorMessage && refs.errorMessages && {
      errorMessage: { format: schema.errorMessage.format }
    }
  }), delete schema.format, schema.errorMessage && (delete schema.errorMessage.format, Object.keys(schema.errorMessage).length === 0 && delete schema.errorMessage)), schema.anyOf.push({
    format: value,
    ...message && refs.errorMessages && { errorMessage: { format: message } }
  })) : setResponseValueAndErrors(schema, "format", value, message, refs);
}
function addPattern2(schema, regex, message, refs) {
  schema.pattern || schema.allOf?.some((x) => x.pattern) ? (schema.allOf || (schema.allOf = []), schema.pattern && (schema.allOf.push({
    pattern: schema.pattern,
    ...schema.errorMessage && refs.errorMessages && {
      errorMessage: { pattern: schema.errorMessage.pattern }
    }
  }), delete schema.pattern, schema.errorMessage && (delete schema.errorMessage.pattern, Object.keys(schema.errorMessage).length === 0 && delete schema.errorMessage)), schema.allOf.push({
    pattern: stringifyRegExpWithFlags(regex, refs),
    ...message && refs.errorMessages && { errorMessage: { pattern: message } }
  })) : setResponseValueAndErrors(schema, "pattern", stringifyRegExpWithFlags(regex, refs), message, refs);
}
function stringifyRegExpWithFlags(regex, refs) {
  if (!refs.applyRegexFlags || !regex.flags)
    return regex.source;
  let flags = {
    i: regex.flags.includes("i"),
    m: regex.flags.includes("m"),
    s: regex.flags.includes("s")
    // `.` matches newlines
  }, source = flags.i ? regex.source.toLowerCase() : regex.source, pattern = "", isEscaped = !1, inCharGroup = !1, inCharRange = !1;
  for (let i = 0; i < source.length; i++) {
    if (isEscaped) {
      pattern += source[i], isEscaped = !1;
      continue;
    }
    if (flags.i) {
      if (inCharGroup) {
        if (source[i].match(/[a-z]/)) {
          inCharRange ? (pattern += source[i], pattern += `${source[i - 2]}-${source[i]}`.toUpperCase(), inCharRange = !1) : source[i + 1] === "-" && source[i + 2]?.match(/[a-z]/) ? (pattern += source[i], inCharRange = !0) : pattern += `${source[i]}${source[i].toUpperCase()}`;
          continue;
        }
      } else if (source[i].match(/[a-z]/)) {
        pattern += `[${source[i]}${source[i].toUpperCase()}]`;
        continue;
      }
    }
    if (flags.m) {
      if (source[i] === "^") {
        pattern += `(^|(?<=[\r
]))`;
        continue;
      } else if (source[i] === "$") {
        pattern += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (flags.s && source[i] === ".") {
      pattern += inCharGroup ? `${source[i]}\r
` : `[${source[i]}\r
]`;
      continue;
    }
    pattern += source[i], source[i] === "\\" ? isEscaped = !0 : inCharGroup && source[i] === "]" ? inCharGroup = !1 : !inCharGroup && source[i] === "[" && (inCharGroup = !0);
  }
  try {
    new RegExp(pattern);
  } catch {
    return console.warn(`Could not convert regex pattern at ${refs.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), regex.source;
  }
  return pattern;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/record.js
function parseRecordDef(def, refs) {
  if (refs.target === "openAi" && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), refs.target === "openApi3" && def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum)
    return {
      type: "object",
      required: def.keyType._def.values,
      properties: def.keyType._def.values.reduce((acc, key) => ({
        ...acc,
        [key]: parseDef(def.valueType._def, {
          ...refs,
          currentPath: [...refs.currentPath, "properties", key]
        }) ?? parseAnyDef(refs)
      }), {}),
      additionalProperties: refs.rejectedAdditionalProperties
    };
  let schema = {
    type: "object",
    additionalProperties: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    }) ?? refs.allowedAdditionalProperties
  };
  if (refs.target === "openApi3")
    return schema;
  if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.checks?.length) {
    let { type, ...keyType } = parseStringDef(def.keyType._def, refs);
    return {
      ...schema,
      propertyNames: keyType
    };
  } else {
    if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum)
      return {
        ...schema,
        propertyNames: {
          enum: def.keyType._def.values
        }
      };
    if (def.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && def.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && def.keyType._def.type._def.checks?.length) {
      let { type, ...keyType } = parseBrandedDef(def.keyType._def, refs);
      return {
        ...schema,
        propertyNames: keyType
      };
    }
  }
  return schema;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/map.js
function parseMapDef(def, refs) {
  if (refs.mapStrategy === "record")
    return parseRecordDef(def, refs);
  let keys = parseDef(def.keyType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "0"]
  }) || parseAnyDef(refs), values = parseDef(def.valueType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "items", "items", "1"]
  }) || parseAnyDef(refs);
  return {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [keys, values],
      minItems: 2,
      maxItems: 2
    }
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js
init_define_LUFF_CREW_ASSETS();
function parseNativeEnumDef(def) {
  let object3 = def.values, actualValues = Object.keys(def.values).filter((key) => typeof object3[object3[key]] != "number").map((key) => object3[key]), parsedTypes = Array.from(new Set(actualValues.map((values) => typeof values)));
  return {
    type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : ["string", "number"],
    enum: actualValues
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/never.js
init_define_LUFF_CREW_ASSETS();
function parseNeverDef(refs) {
  return refs.target === "openAi" ? void 0 : {
    not: parseAnyDef({
      ...refs,
      currentPath: [...refs.currentPath, "not"]
    })
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/null.js
init_define_LUFF_CREW_ASSETS();
function parseNullDef(refs) {
  return refs.target === "openApi3" ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/parsers/union.js
init_define_LUFF_CREW_ASSETS();
var primitiveMappings = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function parseUnionDef(def, refs) {
  if (refs.target === "openApi3")
    return asAnyOf(def, refs);
  let options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
  if (options.every((x) => x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
    let types = options.reduce((types2, x) => {
      let type = primitiveMappings[x._def.typeName];
      return type && !types2.includes(type) ? [...types2, type] : types2;
    }, []);
    return {
      type: types.length > 1 ? types : types[0]
    };
  } else if (options.every((x) => x._def.typeName === "ZodLiteral" && !x.description)) {
    let types = options.reduce((acc, x) => {
      let type = typeof x._def.value;
      switch (type) {
        case "string":
        case "number":
        case "boolean":
          return [...acc, type];
        case "bigint":
          return [...acc, "integer"];
        case "object":
          if (x._def.value === null)
            return [...acc, "null"];
        default:
          return acc;
      }
    }, []);
    if (types.length === options.length) {
      let uniqueTypes = types.filter((x, i, a) => a.indexOf(x) === i);
      return {
        type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
        enum: options.reduce((acc, x) => acc.includes(x._def.value) ? acc : [...acc, x._def.value], [])
      };
    }
  } else if (options.every((x) => x._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: options.reduce((acc, x) => [
        ...acc,
        ...x._def.values.filter((x2) => !acc.includes(x2))
      ], [])
    };
  return asAnyOf(def, refs);
}
var asAnyOf = (def, refs) => {
  let anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i) => parseDef(x._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", `${i}`]
  })).filter((x) => !!x && (!refs.strictUnions || typeof x == "object" && Object.keys(x).length > 0));
  return anyOf.length ? { anyOf } : void 0;
};

// node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js
function parseNullableDef(def, refs) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length))
    return refs.target === "openApi3" ? {
      type: primitiveMappings[def.innerType._def.typeName],
      nullable: !0
    } : {
      type: [
        primitiveMappings[def.innerType._def.typeName],
        "null"
      ]
    };
  if (refs.target === "openApi3") {
    let base2 = parseDef(def.innerType._def, {
      ...refs,
      currentPath: [...refs.currentPath]
    });
    return base2 && "$ref" in base2 ? { allOf: [base2], nullable: !0 } : base2 && { ...base2, nullable: !0 };
  }
  let base = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "0"]
  });
  return base && { anyOf: [base, { type: "null" }] };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/number.js
init_define_LUFF_CREW_ASSETS();
function parseNumberDef(def, refs) {
  let res = {
    type: "number"
  };
  if (!def.checks)
    return res;
  for (let check of def.checks)
    switch (check.kind) {
      case "int":
        res.type = "integer", addErrorMessage(res, "type", check.message, refs);
        break;
      case "min":
        refs.target === "jsonSchema7" ? check.inclusive ? setResponseValueAndErrors(res, "minimum", check.value, check.message, refs) : setResponseValueAndErrors(res, "exclusiveMinimum", check.value, check.message, refs) : (check.inclusive || (res.exclusiveMinimum = !0), setResponseValueAndErrors(res, "minimum", check.value, check.message, refs));
        break;
      case "max":
        refs.target === "jsonSchema7" ? check.inclusive ? setResponseValueAndErrors(res, "maximum", check.value, check.message, refs) : setResponseValueAndErrors(res, "exclusiveMaximum", check.value, check.message, refs) : (check.inclusive || (res.exclusiveMaximum = !0), setResponseValueAndErrors(res, "maximum", check.value, check.message, refs));
        break;
      case "multipleOf":
        setResponseValueAndErrors(res, "multipleOf", check.value, check.message, refs);
        break;
    }
  return res;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/object.js
init_define_LUFF_CREW_ASSETS();
function parseObjectDef(def, refs) {
  let forceOptionalIntoNullable = refs.target === "openAi", result = {
    type: "object",
    properties: {}
  }, required2 = [], shape = def.shape();
  for (let propName in shape) {
    let propDef = shape[propName];
    if (propDef === void 0 || propDef._def === void 0)
      continue;
    let propOptional = safeIsOptional(propDef);
    propOptional && forceOptionalIntoNullable && (propDef._def.typeName === "ZodOptional" && (propDef = propDef._def.innerType), propDef.isNullable() || (propDef = propDef.nullable()), propOptional = !1);
    let parsedDef = parseDef(propDef._def, {
      ...refs,
      currentPath: [...refs.currentPath, "properties", propName],
      propertyPath: [...refs.currentPath, "properties", propName]
    });
    parsedDef !== void 0 && (result.properties[propName] = parsedDef, propOptional || required2.push(propName));
  }
  required2.length && (result.required = required2);
  let additionalProperties = decideAdditionalProperties(def, refs);
  return additionalProperties !== void 0 && (result.additionalProperties = additionalProperties), result;
}
function decideAdditionalProperties(def, refs) {
  if (def.catchall._def.typeName !== "ZodNever")
    return parseDef(def.catchall._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalProperties"]
    });
  switch (def.unknownKeys) {
    case "passthrough":
      return refs.allowedAdditionalProperties;
    case "strict":
      return refs.rejectedAdditionalProperties;
    case "strip":
      return refs.removeAdditionalStrategy === "strict" ? refs.allowedAdditionalProperties : refs.rejectedAdditionalProperties;
  }
}
function safeIsOptional(schema) {
  try {
    return schema.isOptional();
  } catch {
    return !0;
  }
}

// node_modules/zod-to-json-schema/dist/esm/parsers/optional.js
init_define_LUFF_CREW_ASSETS();
var parseOptionalDef = (def, refs) => {
  if (refs.currentPath.toString() === refs.propertyPath?.toString())
    return parseDef(def.innerType._def, refs);
  let innerSchema = parseDef(def.innerType._def, {
    ...refs,
    currentPath: [...refs.currentPath, "anyOf", "1"]
  });
  return innerSchema ? {
    anyOf: [
      {
        not: parseAnyDef(refs)
      },
      innerSchema
    ]
  } : parseAnyDef(refs);
};

// node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js
init_define_LUFF_CREW_ASSETS();
var parsePipelineDef = (def, refs) => {
  if (refs.pipeStrategy === "input")
    return parseDef(def.in._def, refs);
  if (refs.pipeStrategy === "output")
    return parseDef(def.out._def, refs);
  let a = parseDef(def.in._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", "0"]
  }), b = parseDef(def.out._def, {
    ...refs,
    currentPath: [...refs.currentPath, "allOf", a ? "1" : "0"]
  });
  return {
    allOf: [a, b].filter((x) => x !== void 0)
  };
};

// node_modules/zod-to-json-schema/dist/esm/parsers/promise.js
init_define_LUFF_CREW_ASSETS();
function parsePromiseDef(def, refs) {
  return parseDef(def.type._def, refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/set.js
init_define_LUFF_CREW_ASSETS();
function parseSetDef(def, refs) {
  let schema = {
    type: "array",
    uniqueItems: !0,
    items: parseDef(def.valueType._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items"]
    })
  };
  return def.minSize && setResponseValueAndErrors(schema, "minItems", def.minSize.value, def.minSize.message, refs), def.maxSize && setResponseValueAndErrors(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs), schema;
}

// node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js
init_define_LUFF_CREW_ASSETS();
function parseTupleDef(def, refs) {
  return def.rest ? {
    type: "array",
    minItems: def.items.length,
    items: def.items.map((x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", `${i}`]
    })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], []),
    additionalItems: parseDef(def.rest._def, {
      ...refs,
      currentPath: [...refs.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: def.items.length,
    maxItems: def.items.length,
    items: def.items.map((x, i) => parseDef(x._def, {
      ...refs,
      currentPath: [...refs.currentPath, "items", `${i}`]
    })).reduce((acc, x) => x === void 0 ? acc : [...acc, x], [])
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js
init_define_LUFF_CREW_ASSETS();
function parseUndefinedDef(refs) {
  return {
    not: parseAnyDef(refs)
  };
}

// node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js
init_define_LUFF_CREW_ASSETS();
function parseUnknownDef(refs) {
  return parseAnyDef(refs);
}

// node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js
init_define_LUFF_CREW_ASSETS();
var parseReadonlyDef = (def, refs) => parseDef(def.innerType._def, refs);

// node_modules/zod-to-json-schema/dist/esm/selectParser.js
var selectParser = (def, typeName, refs) => {
  switch (typeName) {
    case ZodFirstPartyTypeKind.ZodString:
      return parseStringDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNumber:
      return parseNumberDef(def, refs);
    case ZodFirstPartyTypeKind.ZodObject:
      return parseObjectDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return parseBigintDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return parseBooleanDef();
    case ZodFirstPartyTypeKind.ZodDate:
      return parseDateDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return parseUndefinedDef(refs);
    case ZodFirstPartyTypeKind.ZodNull:
      return parseNullDef(refs);
    case ZodFirstPartyTypeKind.ZodArray:
      return parseArrayDef(def, refs);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return parseUnionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return parseIntersectionDef(def, refs);
    case ZodFirstPartyTypeKind.ZodTuple:
      return parseTupleDef(def, refs);
    case ZodFirstPartyTypeKind.ZodRecord:
      return parseRecordDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return parseLiteralDef(def, refs);
    case ZodFirstPartyTypeKind.ZodEnum:
      return parseEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return parseNativeEnumDef(def);
    case ZodFirstPartyTypeKind.ZodNullable:
      return parseNullableDef(def, refs);
    case ZodFirstPartyTypeKind.ZodOptional:
      return parseOptionalDef(def, refs);
    case ZodFirstPartyTypeKind.ZodMap:
      return parseMapDef(def, refs);
    case ZodFirstPartyTypeKind.ZodSet:
      return parseSetDef(def, refs);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => def.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return parsePromiseDef(def, refs);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return parseNeverDef(refs);
    case ZodFirstPartyTypeKind.ZodEffects:
      return parseEffectsDef(def, refs);
    case ZodFirstPartyTypeKind.ZodAny:
      return parseAnyDef(refs);
    case ZodFirstPartyTypeKind.ZodUnknown:
      return parseUnknownDef(refs);
    case ZodFirstPartyTypeKind.ZodDefault:
      return parseDefaultDef(def, refs);
    case ZodFirstPartyTypeKind.ZodBranded:
      return parseBrandedDef(def, refs);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return parseReadonlyDef(def, refs);
    case ZodFirstPartyTypeKind.ZodCatch:
      return parseCatchDef(def, refs);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return parsePipelineDef(def, refs);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return;
    default:
      return /* @__PURE__ */ ((_) => {
      })(typeName);
  }
};

// node_modules/zod-to-json-schema/dist/esm/parseDef.js
function parseDef(def, refs, forceResolution = !1) {
  let seenItem = refs.seen.get(def);
  if (refs.override) {
    let overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
    if (overrideResult !== ignoreOverride)
      return overrideResult;
  }
  if (seenItem && !forceResolution) {
    let seenSchema = get$ref(seenItem, refs);
    if (seenSchema !== void 0)
      return seenSchema;
  }
  let newItem = { def, path: refs.currentPath, jsonSchema: void 0 };
  refs.seen.set(def, newItem);
  let jsonSchemaOrGetter = selectParser(def, def.typeName, refs), jsonSchema = typeof jsonSchemaOrGetter == "function" ? parseDef(jsonSchemaOrGetter(), refs) : jsonSchemaOrGetter;
  if (jsonSchema && addMeta(def, refs, jsonSchema), refs.postProcess) {
    let postProcessResult = refs.postProcess(jsonSchema, def, refs);
    return newItem.jsonSchema = jsonSchema, postProcessResult;
  }
  return newItem.jsonSchema = jsonSchema, jsonSchema;
}
var get$ref = (item, refs) => {
  switch (refs.$refStrategy) {
    case "root":
      return { $ref: item.path.join("/") };
    case "relative":
      return { $ref: getRelativePath(refs.currentPath, item.path) };
    case "none":
    case "seen":
      return item.path.length < refs.currentPath.length && item.path.every((value, index) => refs.currentPath[index] === value) ? (console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`), parseAnyDef(refs)) : refs.$refStrategy === "seen" ? parseAnyDef(refs) : void 0;
  }
}, addMeta = (def, refs, jsonSchema) => (def.description && (jsonSchema.description = def.description, refs.markdownDescription && (jsonSchema.markdownDescription = def.description)), jsonSchema);

// node_modules/zod-to-json-schema/dist/esm/parseTypes.js
init_define_LUFF_CREW_ASSETS();

// node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js
init_define_LUFF_CREW_ASSETS();
var zodToJsonSchema = (schema, options) => {
  let refs = getRefs(options), definitions = typeof options == "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name2, schema2]) => ({
    ...acc,
    [name2]: parseDef(schema2._def, {
      ...refs,
      currentPath: [...refs.basePath, refs.definitionPath, name2]
    }, !0) ?? parseAnyDef(refs)
  }), {}) : void 0, name = typeof options == "string" ? options : options?.nameStrategy === "title" ? void 0 : options?.name, main2 = parseDef(schema._def, name === void 0 ? refs : {
    ...refs,
    currentPath: [...refs.basePath, refs.definitionPath, name]
  }, !1) ?? parseAnyDef(refs), title = typeof options == "object" && options.name !== void 0 && options.nameStrategy === "title" ? options.name : void 0;
  title !== void 0 && (main2.title = title), refs.flags.hasReferencedOpenAiAnyType && (definitions || (definitions = {}), definitions[refs.openAiAnyTypeName] || (definitions[refs.openAiAnyTypeName] = {
    // Skipping "object" as no properties can be defined and additionalProperties must be "false"
    type: ["string", "number", "integer", "boolean", "array", "null"],
    items: {
      $ref: refs.$refStrategy === "relative" ? "1" : [
        ...refs.basePath,
        refs.definitionPath,
        refs.openAiAnyTypeName
      ].join("/")
    }
  }));
  let combined = name === void 0 ? definitions ? {
    ...main2,
    [refs.definitionPath]: definitions
  } : main2 : {
    $ref: [
      ...refs.$refStrategy === "relative" ? [] : refs.basePath,
      refs.definitionPath,
      name
    ].join("/"),
    [refs.definitionPath]: {
      ...definitions,
      [name]: main2
    }
  };
  return refs.target === "jsonSchema7" ? combined.$schema = "http://json-schema.org/draft-07/schema#" : (refs.target === "jsonSchema2019-09" || refs.target === "openAi") && (combined.$schema = "https://json-schema.org/draft/2019-09/schema#"), refs.target === "openAi" && ("anyOf" in combined || "oneOf" in combined || "allOf" in combined || "type" in combined && Array.isArray(combined.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property."), combined;
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/zod-json-schema-compat.js
function mapMiniTarget(t) {
  return !t || t === "jsonSchema7" || t === "draft-7" ? "draft-7" : t === "jsonSchema2019-09" || t === "draft-2020-12" ? "draft-2020-12" : "draft-7";
}
function toJsonSchemaCompat(schema, opts) {
  return isZ4Schema(schema) ? toJSONSchema(schema, {
    target: mapMiniTarget(opts?.target),
    io: opts?.pipeStrategy ?? "input"
  }) : zodToJsonSchema(schema, {
    strictUnions: opts?.strictUnions ?? !0,
    pipeStrategy: opts?.pipeStrategy ?? "input"
  });
}
function getMethodLiteral(schema) {
  let methodSchema = getObjectShape(schema)?.method;
  if (!methodSchema)
    throw new Error("Schema is missing a method literal");
  let value = getLiteralValue(methodSchema);
  if (typeof value != "string")
    throw new Error("Schema method literal must be a string");
  return value;
}
function parseWithCompat(schema, data) {
  let result = safeParse2(schema, data);
  if (!result.success)
    throw result.error;
  return result.data;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/protocol.js
var DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4, Protocol = class {
  constructor(_options) {
    this._options = _options, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(CancelledNotificationSchema, (notification) => {
      this._oncancel(notification);
    }), this.setNotificationHandler(ProgressNotificationSchema, (notification) => {
      this._onprogress(notification);
    }), this.setRequestHandler(
      PingRequestSchema,
      // Automatic pong by default.
      (_request) => ({})
    ), this._taskStore = _options?.taskStore, this._taskMessageQueue = _options?.taskMessageQueue, this._taskStore && (this.setRequestHandler(GetTaskRequestSchema, async (request, extra) => {
      let task = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
      if (!task)
        throw new McpError(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
      return {
        ...task
      };
    }), this.setRequestHandler(GetTaskPayloadRequestSchema, async (request, extra) => {
      let handleTaskResult = async () => {
        let taskId = request.params.taskId;
        if (!await this._taskStore.getTask(taskId, extra.sessionId))
          throw new McpError(ErrorCode.InvalidParams, `Task not found: ${taskId}`);
        if (this._taskMessageQueue) {
          let queuedMessage;
          for (; queuedMessage = await this._taskMessageQueue.dequeue(taskId, extra.sessionId); ) {
            if (queuedMessage.type === "response" || queuedMessage.type === "error") {
              let message = queuedMessage.message, requestId = message.id, resolver = this._requestResolvers.get(requestId);
              if (resolver)
                if (this._requestResolvers.delete(requestId), queuedMessage.type === "response")
                  resolver(message);
                else {
                  let errorMessage = message, error2 = new McpError(errorMessage.error.code, errorMessage.error.message, errorMessage.error.data);
                  resolver(error2);
                }
              else {
                let messageType = queuedMessage.type === "response" ? "Response" : "Error";
                this._onerror(new Error(`${messageType} handler missing for request ${requestId}`));
              }
              continue;
            }
            await this._transport?.send(queuedMessage.message, { relatedRequestId: extra.requestId });
          }
        }
        let task = await this._taskStore.getTask(taskId, extra.sessionId);
        if (!task)
          throw new McpError(ErrorCode.InvalidParams, `Task not found: ${taskId}`);
        if (!isTerminal(task.status))
          return await this._waitForTaskUpdate(taskId, extra.signal, extra.sessionId), await handleTaskResult();
        if (isTerminal(task.status)) {
          let result = await this._taskStore.getTaskResult(taskId, extra.sessionId);
          return this._clearTaskQueue(taskId, extra.sessionId), {
            ...result,
            _meta: {
              ...result._meta,
              [RELATED_TASK_META_KEY]: {
                taskId
              }
            }
          };
        }
        return await handleTaskResult();
      };
      return await handleTaskResult();
    }), this.setRequestHandler(ListTasksRequestSchema, async (request, extra) => {
      try {
        let { tasks, nextCursor } = await this._taskStore.listTasks(request.params?.cursor, extra.sessionId);
        return {
          tasks,
          nextCursor,
          _meta: {}
        };
      } catch (error2) {
        throw new McpError(ErrorCode.InvalidParams, `Failed to list tasks: ${error2 instanceof Error ? error2.message : String(error2)}`);
      }
    }), this.setRequestHandler(CancelTaskRequestSchema, async (request, extra) => {
      try {
        let task = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
        if (!task)
          throw new McpError(ErrorCode.InvalidParams, `Task not found: ${request.params.taskId}`);
        if (isTerminal(task.status))
          throw new McpError(ErrorCode.InvalidParams, `Cannot cancel task in terminal status: ${task.status}`);
        await this._taskStore.updateTaskStatus(request.params.taskId, "cancelled", "Client cancelled task execution.", extra.sessionId), this._clearTaskQueue(request.params.taskId, extra.sessionId);
        let cancelledTask = await this._taskStore.getTask(request.params.taskId, extra.sessionId);
        if (!cancelledTask)
          throw new McpError(ErrorCode.InvalidParams, `Task not found after cancellation: ${request.params.taskId}`);
        return {
          _meta: {},
          ...cancelledTask
        };
      } catch (error2) {
        throw error2 instanceof McpError ? error2 : new McpError(ErrorCode.InvalidRequest, `Failed to cancel task: ${error2 instanceof Error ? error2.message : String(error2)}`);
      }
    }));
  }
  async _oncancel(notification) {
    if (!notification.params.requestId)
      return;
    this._requestHandlerAbortControllers.get(notification.params.requestId)?.abort(notification.params.reason);
  }
  _setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = !1) {
    this._timeoutInfo.set(messageId, {
      timeoutId: setTimeout(onTimeout, timeout),
      startTime: Date.now(),
      timeout,
      maxTotalTimeout,
      resetTimeoutOnProgress,
      onTimeout
    });
  }
  _resetTimeout(messageId) {
    let info = this._timeoutInfo.get(messageId);
    if (!info)
      return !1;
    let totalElapsed = Date.now() - info.startTime;
    if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout)
      throw this._timeoutInfo.delete(messageId), McpError.fromError(ErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: info.maxTotalTimeout,
        totalElapsed
      });
    return clearTimeout(info.timeoutId), info.timeoutId = setTimeout(info.onTimeout, info.timeout), !0;
  }
  _cleanupTimeout(messageId) {
    let info = this._timeoutInfo.get(messageId);
    info && (clearTimeout(info.timeoutId), this._timeoutInfo.delete(messageId));
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The Protocol object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    if (this._transport)
      throw new Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = transport;
    let _onclose = this.transport?.onclose;
    this._transport.onclose = () => {
      _onclose?.(), this._onclose();
    };
    let _onerror = this.transport?.onerror;
    this._transport.onerror = (error2) => {
      _onerror?.(error2), this._onerror(error2);
    };
    let _onmessage = this._transport?.onmessage;
    this._transport.onmessage = (message, extra) => {
      _onmessage?.(message, extra), isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message) ? this._onresponse(message) : isJSONRPCRequest(message) ? this._onrequest(message, extra) : isJSONRPCNotification(message) ? this._onnotification(message) : this._onerror(new Error(`Unknown message type: ${JSON.stringify(message)}`));
    }, await this._transport.start();
  }
  _onclose() {
    let responseHandlers = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (let info of this._timeoutInfo.values())
      clearTimeout(info.timeoutId);
    this._timeoutInfo.clear();
    for (let controller of this._requestHandlerAbortControllers.values())
      controller.abort();
    this._requestHandlerAbortControllers.clear();
    let error2 = McpError.fromError(ErrorCode.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (let handler of responseHandlers.values())
      handler(error2);
  }
  _onerror(error2) {
    this.onerror?.(error2);
  }
  _onnotification(notification) {
    let handler = this._notificationHandlers.get(notification.method) ?? this.fallbackNotificationHandler;
    handler !== void 0 && Promise.resolve().then(() => handler(notification)).catch((error2) => this._onerror(new Error(`Uncaught error in notification handler: ${error2}`)));
  }
  _onrequest(request, extra) {
    let handler = this._requestHandlers.get(request.method) ?? this.fallbackRequestHandler, capturedTransport = this._transport, relatedTaskId = request.params?._meta?.[RELATED_TASK_META_KEY]?.taskId, sessionId = capturedTransport?.sessionId, store = this._taskStore, relatedTaskFound = !0, relatedTaskLookup;
    if (relatedTaskId && store && this._taskMessageQueue && sessionId !== void 0 && (relatedTaskFound = !1, relatedTaskLookup = (async () => {
      if (!await store.getTask(relatedTaskId, sessionId))
        throw new McpError(ErrorCode.InvalidParams, `Task not found: ${relatedTaskId}`);
      relatedTaskFound = !0;
    })()), handler === void 0) {
      let errorResponse = {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: ErrorCode.MethodNotFound,
          message: "Method not found"
        }
      };
      if (relatedTaskId && relatedTaskLookup) {
        let queuedError = { type: "error", message: errorResponse, timestamp: Date.now() };
        relatedTaskLookup.then(() => this._enqueueTaskMessage(relatedTaskId, queuedError, sessionId), () => capturedTransport?.send(errorResponse)).catch((error2) => this._onerror(new Error(`Failed to send an error response: ${error2}`)));
      } else relatedTaskId && this._taskMessageQueue ? this._enqueueTaskMessage(relatedTaskId, {
        type: "error",
        message: errorResponse,
        timestamp: Date.now()
      }, capturedTransport?.sessionId).catch((error2) => this._onerror(new Error(`Failed to enqueue error response: ${error2}`))) : capturedTransport?.send(errorResponse).catch((error2) => this._onerror(new Error(`Failed to send an error response: ${error2}`)));
      return;
    }
    let abortController = new AbortController();
    this._requestHandlerAbortControllers.set(request.id, abortController);
    let taskCreationParams = isTaskAugmentedRequestParams(request.params) ? request.params.task : void 0, taskStore = this._taskStore ? this.requestTaskStore(request, capturedTransport?.sessionId) : void 0, fullExtra = {
      signal: abortController.signal,
      sessionId: capturedTransport?.sessionId,
      _meta: request.params?._meta,
      sendNotification: async (notification) => {
        if (abortController.signal.aborted)
          return;
        let notificationOptions = { relatedRequestId: request.id };
        relatedTaskId && (notificationOptions.relatedTask = { taskId: relatedTaskId }), await this.notification(notification, notificationOptions);
      },
      sendRequest: async (r, resultSchema, options) => {
        if (abortController.signal.aborted)
          throw new McpError(ErrorCode.ConnectionClosed, "Request was cancelled");
        let requestOptions = { ...options, relatedRequestId: request.id };
        relatedTaskId && !requestOptions.relatedTask && (requestOptions.relatedTask = { taskId: relatedTaskId });
        let effectiveTaskId = requestOptions.relatedTask?.taskId ?? relatedTaskId;
        return effectiveTaskId && taskStore && await taskStore.updateTaskStatus(effectiveTaskId, "input_required"), await this.request(r, resultSchema, requestOptions);
      },
      authInfo: extra?.authInfo,
      requestId: request.id,
      requestInfo: extra?.requestInfo,
      taskId: relatedTaskId,
      taskStore,
      taskRequestedTtl: taskCreationParams?.ttl,
      closeSSEStream: extra?.closeSSEStream,
      closeStandaloneSSEStream: extra?.closeStandaloneSSEStream
    };
    (relatedTaskLookup ?? Promise.resolve()).then(() => {
      if (relatedTaskLookup && abortController.signal.aborted)
        throw new McpError(ErrorCode.ConnectionClosed, "Request was cancelled");
      taskCreationParams && this.assertTaskHandlerCapability(request.method);
    }).then(() => handler(request, fullExtra)).then(async (result) => {
      if (abortController.signal.aborted)
        return;
      let response = {
        result,
        jsonrpc: "2.0",
        id: request.id
      };
      relatedTaskId && this._taskMessageQueue ? await this._enqueueTaskMessage(relatedTaskId, {
        type: "response",
        message: response,
        timestamp: Date.now()
      }, capturedTransport?.sessionId) : await capturedTransport?.send(response);
    }, async (error2) => {
      if (abortController.signal.aborted)
        return;
      let errorResponse = {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: Number.isSafeInteger(error2.code) ? error2.code : ErrorCode.InternalError,
          message: error2.message ?? "Internal error",
          ...error2.data !== void 0 && { data: error2.data }
        }
      };
      relatedTaskId && this._taskMessageQueue && relatedTaskFound ? await this._enqueueTaskMessage(relatedTaskId, {
        type: "error",
        message: errorResponse,
        timestamp: Date.now()
      }, capturedTransport?.sessionId) : await capturedTransport?.send(errorResponse);
    }).catch((error2) => this._onerror(new Error(`Failed to send response: ${error2}`))).finally(() => {
      this._requestHandlerAbortControllers.get(request.id) === abortController && this._requestHandlerAbortControllers.delete(request.id);
    });
  }
  _onprogress(notification) {
    let { progressToken, ...params } = notification.params, messageId = Number(progressToken), handler = this._progressHandlers.get(messageId);
    if (!handler) {
      this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
      return;
    }
    let responseHandler = this._responseHandlers.get(messageId), timeoutInfo = this._timeoutInfo.get(messageId);
    if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress)
      try {
        this._resetTimeout(messageId);
      } catch (error2) {
        this._responseHandlers.delete(messageId), this._progressHandlers.delete(messageId), this._cleanupTimeout(messageId), responseHandler(error2);
        return;
      }
    handler(params);
  }
  _onresponse(response) {
    let messageId = Number(response.id), resolver = this._requestResolvers.get(messageId);
    if (resolver) {
      if (this._requestResolvers.delete(messageId), isJSONRPCResultResponse(response))
        resolver(response);
      else {
        let error2 = new McpError(response.error.code, response.error.message, response.error.data);
        resolver(error2);
      }
      return;
    }
    let handler = this._responseHandlers.get(messageId);
    if (handler === void 0) {
      this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
      return;
    }
    this._responseHandlers.delete(messageId), this._cleanupTimeout(messageId);
    let isTaskResponse = !1;
    if (isJSONRPCResultResponse(response) && response.result && typeof response.result == "object") {
      let result = response.result;
      if (result.task && typeof result.task == "object") {
        let task = result.task;
        typeof task.taskId == "string" && (isTaskResponse = !0, this._taskProgressTokens.set(task.taskId, messageId));
      }
    }
    if (isTaskResponse || this._progressHandlers.delete(messageId), isJSONRPCResultResponse(response))
      handler(response);
    else {
      let error2 = McpError.fromError(response.error.code, response.error.message, response.error.data);
      handler(error2);
    }
  }
  get transport() {
    return this._transport;
  }
  /**
   * Closes the connection.
   */
  async close() {
    await this._transport?.close();
  }
  /**
   * Sends a request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * @example
   * ```typescript
   * const stream = protocol.requestStream(request, resultSchema, options);
   * for await (const message of stream) {
   *   switch (message.type) {
   *     case 'taskCreated':
   *       console.log('Task created:', message.task.taskId);
   *       break;
   *     case 'taskStatus':
   *       console.log('Task status:', message.task.status);
   *       break;
   *     case 'result':
   *       console.log('Final result:', message.result);
   *       break;
   *     case 'error':
   *       console.error('Error:', message.error);
   *       break;
   *   }
   * }
   * ```
   *
   * @experimental Use `client.experimental.tasks.requestStream()` to access this method.
   */
  async *requestStream(request, resultSchema, options) {
    let { task } = options ?? {};
    if (!task) {
      try {
        yield { type: "result", result: await this.request(request, resultSchema, options) };
      } catch (error2) {
        yield {
          type: "error",
          error: error2 instanceof McpError ? error2 : new McpError(ErrorCode.InternalError, String(error2))
        };
      }
      return;
    }
    let taskId;
    try {
      let createResult = await this.request(request, CreateTaskResultSchema, options);
      if (createResult.task)
        taskId = createResult.task.taskId, yield { type: "taskCreated", task: createResult.task };
      else
        throw new McpError(ErrorCode.InternalError, "Task creation did not return a task");
      for (; ; ) {
        let task2 = await this.getTask({ taskId }, options);
        if (yield { type: "taskStatus", task: task2 }, isTerminal(task2.status)) {
          task2.status === "completed" ? yield { type: "result", result: await this.getTaskResult({ taskId }, resultSchema, options) } : task2.status === "failed" ? yield {
            type: "error",
            error: new McpError(ErrorCode.InternalError, `Task ${taskId} failed`)
          } : task2.status === "cancelled" && (yield {
            type: "error",
            error: new McpError(ErrorCode.InternalError, `Task ${taskId} was cancelled`)
          });
          return;
        }
        if (task2.status === "input_required") {
          yield { type: "result", result: await this.getTaskResult({ taskId }, resultSchema, options) };
          return;
        }
        let pollInterval = task2.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise((resolve3) => setTimeout(resolve3, pollInterval)), options?.signal?.throwIfAborted();
      }
    } catch (error2) {
      yield {
        type: "error",
        error: error2 instanceof McpError ? error2 : new McpError(ErrorCode.InternalError, String(error2))
      };
    }
  }
  /**
   * Sends a request and waits for a response.
   *
   * Do not use this method to emit notifications! Use notification() instead.
   */
  request(request, resultSchema, options) {
    let { relatedRequestId, resumptionToken, onresumptiontoken, task, relatedTask } = options ?? {};
    return new Promise((resolve3, reject) => {
      let earlyReject = (error2) => {
        reject(error2);
      };
      if (!this._transport) {
        earlyReject(new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0)
        try {
          this.assertCapabilityForMethod(request.method), task && this.assertTaskCapability(request.method);
        } catch (e) {
          earlyReject(e);
          return;
        }
      options?.signal?.throwIfAborted();
      let messageId = this._requestMessageId++, jsonrpcRequest = {
        ...request,
        jsonrpc: "2.0",
        id: messageId
      };
      options?.onprogress && (this._progressHandlers.set(messageId, options.onprogress), jsonrpcRequest.params = {
        ...request.params,
        _meta: {
          ...request.params?._meta || {},
          progressToken: messageId
        }
      }), task && (jsonrpcRequest.params = {
        ...jsonrpcRequest.params,
        task
      }), relatedTask && (jsonrpcRequest.params = {
        ...jsonrpcRequest.params,
        _meta: {
          ...jsonrpcRequest.params?._meta || {},
          [RELATED_TASK_META_KEY]: relatedTask
        }
      });
      let cancel = (reason) => {
        this._responseHandlers.delete(messageId), this._progressHandlers.delete(messageId), this._cleanupTimeout(messageId), this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: messageId,
            reason: String(reason)
          }
        }, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error3) => this._onerror(new Error(`Failed to send cancellation: ${error3}`)));
        let error2 = reason instanceof McpError ? reason : new McpError(ErrorCode.RequestTimeout, String(reason));
        reject(error2);
      };
      this._responseHandlers.set(messageId, (response) => {
        if (!options?.signal?.aborted) {
          if (response instanceof Error)
            return reject(response);
          try {
            let parseResult = safeParse2(resultSchema, response.result);
            parseResult.success ? resolve3(parseResult.data) : reject(parseResult.error);
          } catch (error2) {
            reject(error2);
          }
        }
      }), options?.signal?.addEventListener("abort", () => {
        cancel(options?.signal?.reason);
      });
      let timeout = options?.timeout ?? DEFAULT_REQUEST_TIMEOUT_MSEC, timeoutHandler = () => cancel(McpError.fromError(ErrorCode.RequestTimeout, "Request timed out", { timeout }));
      this._setupTimeout(messageId, timeout, options?.maxTotalTimeout, timeoutHandler, options?.resetTimeoutOnProgress ?? !1);
      let relatedTaskId = relatedTask?.taskId;
      if (relatedTaskId) {
        let responseResolver = (response) => {
          let handler = this._responseHandlers.get(messageId);
          handler ? handler(response) : this._onerror(new Error(`Response handler missing for side-channeled request ${messageId}`));
        };
        this._requestResolvers.set(messageId, responseResolver), this._enqueueTaskMessage(relatedTaskId, {
          type: "request",
          message: jsonrpcRequest,
          timestamp: Date.now()
        }).catch((error2) => {
          this._cleanupTimeout(messageId), reject(error2);
        });
      } else
        this._transport.send(jsonrpcRequest, { relatedRequestId, resumptionToken, onresumptiontoken }).catch((error2) => {
          this._cleanupTimeout(messageId), reject(error2);
        });
    });
  }
  /**
   * Gets the current status of a task.
   *
   * @experimental Use `client.experimental.tasks.getTask()` to access this method.
   */
  async getTask(params, options) {
    return this.request({ method: "tasks/get", params }, GetTaskResultSchema, options);
  }
  /**
   * Retrieves the result of a completed task.
   *
   * @experimental Use `client.experimental.tasks.getTaskResult()` to access this method.
   */
  async getTaskResult(params, resultSchema, options) {
    return this.request({ method: "tasks/result", params }, resultSchema, options);
  }
  /**
   * Lists tasks, optionally starting from a pagination cursor.
   *
   * @experimental Use `client.experimental.tasks.listTasks()` to access this method.
   */
  async listTasks(params, options) {
    return this.request({ method: "tasks/list", params }, ListTasksResultSchema, options);
  }
  /**
   * Cancels a specific task.
   *
   * @experimental Use `client.experimental.tasks.cancelTask()` to access this method.
   */
  async cancelTask(params, options) {
    return this.request({ method: "tasks/cancel", params }, CancelTaskResultSchema, options);
  }
  /**
   * Emits a notification, which is a one-way message that does not expect a response.
   */
  async notification(notification, options) {
    if (!this._transport)
      throw new Error("Not connected");
    this.assertNotificationCapability(notification.method);
    let relatedTaskId = options?.relatedTask?.taskId;
    if (relatedTaskId) {
      let jsonrpcNotification2 = {
        ...notification,
        jsonrpc: "2.0",
        params: {
          ...notification.params,
          _meta: {
            ...notification.params?._meta || {},
            [RELATED_TASK_META_KEY]: options.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(relatedTaskId, {
        type: "notification",
        message: jsonrpcNotification2,
        timestamp: Date.now()
      });
      return;
    }
    if ((this._options?.debouncedNotificationMethods ?? []).includes(notification.method) && !notification.params && !options?.relatedRequestId && !options?.relatedTask) {
      if (this._pendingDebouncedNotifications.has(notification.method))
        return;
      this._pendingDebouncedNotifications.add(notification.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(notification.method), !this._transport)
          return;
        let jsonrpcNotification2 = {
          ...notification,
          jsonrpc: "2.0"
        };
        options?.relatedTask && (jsonrpcNotification2 = {
          ...jsonrpcNotification2,
          params: {
            ...jsonrpcNotification2.params,
            _meta: {
              ...jsonrpcNotification2.params?._meta || {},
              [RELATED_TASK_META_KEY]: options.relatedTask
            }
          }
        }), this._transport?.send(jsonrpcNotification2, options).catch((error2) => this._onerror(error2));
      });
      return;
    }
    let jsonrpcNotification = {
      ...notification,
      jsonrpc: "2.0"
    };
    options?.relatedTask && (jsonrpcNotification = {
      ...jsonrpcNotification,
      params: {
        ...jsonrpcNotification.params,
        _meta: {
          ...jsonrpcNotification.params?._meta || {},
          [RELATED_TASK_META_KEY]: options.relatedTask
        }
      }
    }), await this._transport.send(jsonrpcNotification, options);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a request with the given method.
   *
   * Note that this will replace any previous request handler for the same method.
   */
  setRequestHandler(requestSchema, handler) {
    let method = getMethodLiteral(requestSchema);
    this.assertRequestHandlerCapability(method), this._requestHandlers.set(method, (request, extra) => {
      let parsed = parseWithCompat(requestSchema, request);
      return Promise.resolve(handler(parsed, extra));
    });
  }
  /**
   * Removes the request handler for the given method.
   */
  removeRequestHandler(method) {
    this._requestHandlers.delete(method);
  }
  /**
   * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
   */
  assertCanSetRequestHandler(method) {
    if (this._requestHandlers.has(method))
      throw new Error(`A request handler for ${method} already exists, which would be overridden`);
  }
  /**
   * Registers a handler to invoke when this protocol object receives a notification with the given method.
   *
   * Note that this will replace any previous notification handler for the same method.
   */
  setNotificationHandler(notificationSchema, handler) {
    let method = getMethodLiteral(notificationSchema);
    this._notificationHandlers.set(method, (notification) => {
      let parsed = parseWithCompat(notificationSchema, notification);
      return Promise.resolve(handler(parsed));
    });
  }
  /**
   * Removes the notification handler for the given method.
   */
  removeNotificationHandler(method) {
    this._notificationHandlers.delete(method);
  }
  /**
   * Cleans up the progress handler associated with a task.
   * This should be called when a task reaches a terminal status.
   */
  _cleanupTaskProgressHandler(taskId) {
    let progressToken = this._taskProgressTokens.get(taskId);
    progressToken !== void 0 && (this._progressHandlers.delete(progressToken), this._taskProgressTokens.delete(taskId));
  }
  /**
   * Enqueues a task-related message for side-channel delivery via tasks/result.
   * @param taskId The task ID to associate the message with
   * @param message The message to enqueue
   * @param sessionId Optional session ID for binding the operation to a specific session
   * @throws Error if taskStore is not configured or if enqueue fails (e.g., queue overflow)
   *
   * Note: If enqueue fails, it's the TaskMessageQueue implementation's responsibility to handle
   * the error appropriately (e.g., by failing the task, logging, etc.). The Protocol layer
   * simply propagates the error.
   */
  async _enqueueTaskMessage(taskId, message, sessionId) {
    if (!this._taskStore || !this._taskMessageQueue)
      throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    let maxQueueSize = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(taskId, message, sessionId ?? this._transport?.sessionId, maxQueueSize);
  }
  /**
   * Clears the message queue for a task and rejects any pending request resolvers.
   * @param taskId The task ID whose queue should be cleared
   * @param sessionId Optional session ID for binding the operation to a specific session
   */
  async _clearTaskQueue(taskId, sessionId) {
    if (this._taskMessageQueue) {
      let messages = await this._taskMessageQueue.dequeueAll(taskId, sessionId);
      for (let message of messages)
        if (message.type === "request" && isJSONRPCRequest(message.message)) {
          let requestId = message.message.id, resolver = this._requestResolvers.get(requestId);
          resolver ? (resolver(new McpError(ErrorCode.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(requestId)) : this._onerror(new Error(`Resolver missing for request ${requestId} during task ${taskId} cleanup`));
        }
    }
  }
  /**
   * Waits for a task update (new messages or status change) with abort signal support.
   * Uses polling to check for updates at the task's configured poll interval.
   * @param taskId The task ID to wait for
   * @param signal Abort signal to cancel the wait
   * @param sessionId Session of the request that waits, passed to the task store
   * @returns Promise that resolves when an update occurs or rejects if aborted
   */
  async _waitForTaskUpdate(taskId, signal, sessionId) {
    let interval = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      let task = await this._taskStore?.getTask(taskId, sessionId);
      task?.pollInterval && (interval = task.pollInterval);
    } catch {
    }
    return new Promise((resolve3, reject) => {
      if (signal.aborted) {
        reject(new McpError(ErrorCode.InvalidRequest, "Request cancelled"));
        return;
      }
      let timeoutId = setTimeout(resolve3, interval);
      signal.addEventListener("abort", () => {
        clearTimeout(timeoutId), reject(new McpError(ErrorCode.InvalidRequest, "Request cancelled"));
      }, { once: !0 });
    });
  }
  requestTaskStore(request, sessionId) {
    let taskStore = this._taskStore;
    if (!taskStore)
      throw new Error("No task store configured");
    return {
      createTask: async (taskParams) => {
        if (!request)
          throw new Error("No request provided");
        return await taskStore.createTask(taskParams, request.id, {
          method: request.method,
          params: request.params
        }, sessionId);
      },
      getTask: async (taskId) => {
        let task = await taskStore.getTask(taskId, sessionId);
        if (!task)
          throw new McpError(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
        return task;
      },
      storeTaskResult: async (taskId, status, result) => {
        await taskStore.storeTaskResult(taskId, status, result, sessionId);
        let task = await taskStore.getTask(taskId, sessionId);
        if (task) {
          let notification = TaskStatusNotificationSchema.parse({
            method: "notifications/tasks/status",
            params: task
          });
          await this.notification(notification), isTerminal(task.status) && this._cleanupTaskProgressHandler(taskId);
        }
      },
      getTaskResult: (taskId) => taskStore.getTaskResult(taskId, sessionId),
      updateTaskStatus: async (taskId, status, statusMessage) => {
        let task = await taskStore.getTask(taskId, sessionId);
        if (!task)
          throw new McpError(ErrorCode.InvalidParams, `Task "${taskId}" not found - it may have been cleaned up`);
        if (isTerminal(task.status))
          throw new McpError(ErrorCode.InvalidParams, `Cannot update task "${taskId}" from terminal status "${task.status}" to "${status}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await taskStore.updateTaskStatus(taskId, status, statusMessage, sessionId);
        let updatedTask = await taskStore.getTask(taskId, sessionId);
        if (updatedTask) {
          let notification = TaskStatusNotificationSchema.parse({
            method: "notifications/tasks/status",
            params: updatedTask
          });
          await this.notification(notification), isTerminal(updatedTask.status) && this._cleanupTaskProgressHandler(taskId);
        }
      },
      listTasks: (cursor) => taskStore.listTasks(cursor, sessionId)
    };
  }
};
function isPlainObject2(value) {
  return value !== null && typeof value == "object" && !Array.isArray(value);
}
function mergeCapabilities(base, additional) {
  let result = { ...base };
  for (let key in additional) {
    let k = key, addValue = additional[k];
    if (addValue === void 0)
      continue;
    let baseValue = result[k];
    isPlainObject2(baseValue) && isPlainObject2(addValue) ? result[k] = { ...baseValue, ...addValue } : result[k] = addValue;
  }
  return result;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/validation/ajv-provider.js
init_define_LUFF_CREW_ASSETS();
var import_ajv = __toESM(require_ajv(), 1), import_ajv_formats = __toESM(require_dist(), 1);
function createDefaultAjvInstance() {
  let ajv = new import_ajv.default({
    strict: !1,
    validateFormats: !0,
    validateSchema: !1,
    allErrors: !0
  });
  return (0, import_ajv_formats.default)(ajv), ajv;
}
var AjvJsonSchemaValidator = class {
  /**
   * Create an AJV validator
   *
   * @param ajv - Optional pre-configured AJV instance. If not provided, a default instance will be created.
   *
   * @example
   * ```typescript
   * // Use default configuration (recommended for most cases)
   * import { AjvJsonSchemaValidator } from '@modelcontextprotocol/sdk/validation/ajv';
   * const validator = new AjvJsonSchemaValidator();
   *
   * // Or provide custom AJV instance for advanced configuration
   * import { Ajv } from 'ajv';
   * import addFormats from 'ajv-formats';
   *
   * const ajv = new Ajv({ validateFormats: true });
   * addFormats(ajv);
   * const validator = new AjvJsonSchemaValidator(ajv);
   * ```
   */
  constructor(ajv) {
    this._ajv = ajv ?? createDefaultAjvInstance();
  }
  /**
   * Create a validator for the given JSON Schema
   *
   * The validator is compiled once and can be reused multiple times.
   * If the schema has an $id, it will be cached by AJV automatically.
   *
   * @param schema - Standard JSON Schema object
   * @returns A validator function that validates input data
   */
  getValidator(schema) {
    let ajvValidator = "$id" in schema && typeof schema.$id == "string" ? this._ajv.getSchema(schema.$id) ?? this._ajv.compile(schema) : this._ajv.compile(schema);
    return (input) => ajvValidator(input) ? {
      valid: !0,
      data: input,
      errorMessage: void 0
    } : {
      valid: !1,
      data: void 0,
      errorMessage: this._ajv.errorsText(ajvValidator.errors)
    };
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/server.js
init_define_LUFF_CREW_ASSETS();
var ExperimentalServerTasks = class {
  constructor(_server) {
    this._server = _server;
  }
  /**
   * Sends a request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * This method provides streaming access to request processing, allowing you to
   * observe intermediate task status updates for task-augmented requests.
   *
   * @param request - The request to send
   * @param resultSchema - Zod schema for validating the result
   * @param options - Optional request options (timeout, signal, task creation params, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  requestStream(request, resultSchema, options) {
    return this._server.requestStream(request, resultSchema, options);
  }
  /**
   * Sends a sampling request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * For task-augmented requests, yields 'taskCreated' and 'taskStatus' messages
   * before the final result.
   *
   * @example
   * ```typescript
   * const stream = server.experimental.tasks.createMessageStream({
   *     messages: [{ role: 'user', content: { type: 'text', text: 'Hello' } }],
   *     maxTokens: 100
   * }, {
   *     onprogress: (progress) => {
   *         // Handle streaming tokens via progress notifications
   *         console.log('Progress:', progress.message);
   *     }
   * });
   *
   * for await (const message of stream) {
   *     switch (message.type) {
   *         case 'taskCreated':
   *             console.log('Task created:', message.task.taskId);
   *             break;
   *         case 'taskStatus':
   *             console.log('Task status:', message.task.status);
   *             break;
   *         case 'result':
   *             console.log('Final result:', message.result);
   *             break;
   *         case 'error':
   *             console.error('Error:', message.error);
   *             break;
   *     }
   * }
   * ```
   *
   * @param params - The sampling request parameters
   * @param options - Optional request options (timeout, signal, task creation params, onprogress, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  createMessageStream(params, options) {
    let clientCapabilities = this._server.getClientCapabilities();
    if ((params.tools || params.toolChoice) && !clientCapabilities?.sampling?.tools)
      throw new Error("Client does not support sampling tools capability.");
    if (params.messages.length > 0) {
      let lastMessage = params.messages[params.messages.length - 1], lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content], hasToolResults = lastContent.some((c) => c.type === "tool_result"), previousMessage = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0, previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [], hasPreviousToolUse = previousContent.some((c) => c.type === "tool_use");
      if (hasToolResults) {
        if (lastContent.some((c) => c.type !== "tool_result"))
          throw new Error("The last message must contain only tool_result content if any is present");
        if (!hasPreviousToolUse)
          throw new Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (hasPreviousToolUse) {
        let toolUseIds = new Set(previousContent.filter((c) => c.type === "tool_use").map((c) => c.id)), toolResultIds = new Set(lastContent.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
        if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id)))
          throw new Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    return this.requestStream({
      method: "sampling/createMessage",
      params
    }, CreateMessageResultSchema, options);
  }
  /**
   * Sends an elicitation request and returns an AsyncGenerator that yields response messages.
   * The generator is guaranteed to end with either a 'result' or 'error' message.
   *
   * For task-augmented requests (especially URL-based elicitation), yields 'taskCreated'
   * and 'taskStatus' messages before the final result.
   *
   * @example
   * ```typescript
   * const stream = server.experimental.tasks.elicitInputStream({
   *     mode: 'url',
   *     message: 'Please authenticate',
   *     elicitationId: 'auth-123',
   *     url: 'https://example.com/auth'
   * }, {
   *     task: { ttl: 300000 } // Task-augmented for long-running auth flow
   * });
   *
   * for await (const message of stream) {
   *     switch (message.type) {
   *         case 'taskCreated':
   *             console.log('Task created:', message.task.taskId);
   *             break;
   *         case 'taskStatus':
   *             console.log('Task status:', message.task.status);
   *             break;
   *         case 'result':
   *             console.log('User action:', message.result.action);
   *             break;
   *         case 'error':
   *             console.error('Error:', message.error);
   *             break;
   *     }
   * }
   * ```
   *
   * @param params - The elicitation request parameters
   * @param options - Optional request options (timeout, signal, task creation params, etc.)
   * @returns AsyncGenerator that yields ResponseMessage objects
   *
   * @experimental
   */
  elicitInputStream(params, options) {
    let clientCapabilities = this._server.getClientCapabilities(), mode = params.mode ?? "form";
    switch (mode) {
      case "url": {
        if (!clientCapabilities?.elicitation?.url)
          throw new Error("Client does not support url elicitation.");
        break;
      }
      case "form": {
        if (!clientCapabilities?.elicitation?.form)
          throw new Error("Client does not support form elicitation.");
        break;
      }
    }
    let normalizedParams = mode === "form" && params.mode === void 0 ? { ...params, mode: "form" } : params;
    return this.requestStream({
      method: "elicitation/create",
      params: normalizedParams
    }, ElicitResultSchema, options);
  }
  /**
   * Gets the current status of a task.
   *
   * @param taskId - The task identifier
   * @param options - Optional request options
   * @returns The task status
   *
   * @experimental
   */
  async getTask(taskId, options) {
    return this._server.getTask({ taskId }, options);
  }
  /**
   * Retrieves the result of a completed task.
   *
   * @param taskId - The task identifier
   * @param resultSchema - Zod schema for validating the result
   * @param options - Optional request options
   * @returns The task result
   *
   * @experimental
   */
  async getTaskResult(taskId, resultSchema, options) {
    return this._server.getTaskResult({ taskId }, resultSchema, options);
  }
  /**
   * Lists tasks with optional pagination.
   *
   * @param cursor - Optional pagination cursor
   * @param options - Optional request options
   * @returns List of tasks with optional next cursor
   *
   * @experimental
   */
  async listTasks(cursor, options) {
    return this._server.listTasks(cursor ? { cursor } : void 0, options);
  }
  /**
   * Cancels a running task.
   *
   * @param taskId - The task identifier
   * @param options - Optional request options
   *
   * @experimental
   */
  async cancelTask(taskId, options) {
    return this._server.cancelTask({ taskId }, options);
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/helpers.js
init_define_LUFF_CREW_ASSETS();
function assertToolsCallTaskCapability(requests, method, entityName) {
  if (!requests)
    throw new Error(`${entityName} does not support task creation (required for ${method})`);
  switch (method) {
    case "tools/call":
      if (!requests.tools?.call)
        throw new Error(`${entityName} does not support task creation for tools/call (required for ${method})`);
      break;
    default:
      break;
  }
}
function assertClientRequestTaskCapability(requests, method, entityName) {
  if (!requests)
    throw new Error(`${entityName} does not support task creation (required for ${method})`);
  switch (method) {
    case "sampling/createMessage":
      if (!requests.sampling?.createMessage)
        throw new Error(`${entityName} does not support task creation for sampling/createMessage (required for ${method})`);
      break;
    case "elicitation/create":
      if (!requests.elicitation?.create)
        throw new Error(`${entityName} does not support task creation for elicitation/create (required for ${method})`);
      break;
    default:
      break;
  }
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/index.js
var Server = class extends Protocol {
  /**
   * Initializes this server with the given name and version information.
   */
  constructor(_serverInfo, options) {
    super(options), this._serverInfo = _serverInfo, this._loggingLevels = /* @__PURE__ */ new Map(), this.LOG_LEVEL_SEVERITY = new Map(LoggingLevelSchema.options.map((level, index) => [level, index])), this.isMessageIgnored = (level, sessionId) => {
      let currentLevel = this._loggingLevels.get(sessionId);
      return currentLevel ? this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(currentLevel) : !1;
    }, this._capabilities = options?.capabilities ?? {}, this._instructions = options?.instructions, this._jsonSchemaValidator = options?.jsonSchemaValidator ?? new AjvJsonSchemaValidator(), this.setRequestHandler(InitializeRequestSchema, (request) => this._oninitialize(request)), this.setNotificationHandler(InitializedNotificationSchema, () => this.oninitialized?.()), this._capabilities.logging && this.setRequestHandler(SetLevelRequestSchema, async (request, extra) => {
      let transportSessionId = extra.sessionId || extra.requestInfo?.headers["mcp-session-id"] || void 0, { level } = request.params, parseResult = LoggingLevelSchema.safeParse(level);
      return parseResult.success && this._loggingLevels.set(transportSessionId, parseResult.data), {};
    });
  }
  /**
   * Access experimental features.
   *
   * WARNING: These APIs are experimental and may change without notice.
   *
   * @experimental
   */
  get experimental() {
    return this._experimental || (this._experimental = {
      tasks: new ExperimentalServerTasks(this)
    }), this._experimental;
  }
  /**
   * Registers new capabilities. This can only be called before connecting to a transport.
   *
   * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
   */
  registerCapabilities(capabilities) {
    if (this.transport)
      throw new Error("Cannot register capabilities after connecting to transport");
    this._capabilities = mergeCapabilities(this._capabilities, capabilities);
  }
  /**
   * Override request handler registration to enforce server-side validation for tools/call.
   */
  setRequestHandler(requestSchema, handler) {
    let methodSchema = getObjectShape(requestSchema)?.method;
    if (!methodSchema)
      throw new Error("Schema is missing a method literal");
    let methodValue = getLiteralValue(methodSchema);
    if (typeof methodValue != "string")
      throw new Error("Schema method literal must be a string");
    if (methodValue === "tools/call") {
      let wrappedHandler = async (request, extra) => {
        let validatedRequest = safeParse2(CallToolRequestSchema, request);
        if (!validatedRequest.success) {
          let errorMessage = validatedRequest.error instanceof Error ? validatedRequest.error.message : String(validatedRequest.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid tools/call request: ${errorMessage}`);
        }
        let { params } = validatedRequest.data, result = await Promise.resolve(handler(request, extra));
        if (params.task) {
          let taskValidationResult = safeParse2(CreateTaskResultSchema, result);
          if (!taskValidationResult.success) {
            let errorMessage = taskValidationResult.error instanceof Error ? taskValidationResult.error.message : String(taskValidationResult.error);
            throw new McpError(ErrorCode.InvalidParams, `Invalid task creation result: ${errorMessage}`);
          }
          return taskValidationResult.data;
        }
        let validationResult = safeParse2(CallToolResultSchema, result);
        if (!validationResult.success) {
          let errorMessage = validationResult.error instanceof Error ? validationResult.error.message : String(validationResult.error);
          throw new McpError(ErrorCode.InvalidParams, `Invalid tools/call result: ${errorMessage}`);
        }
        return validationResult.data;
      };
      return super.setRequestHandler(requestSchema, wrappedHandler);
    }
    return super.setRequestHandler(requestSchema, handler);
  }
  assertCapabilityForMethod(method) {
    switch (method) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling)
          throw new Error(`Client does not support sampling (required for ${method})`);
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation)
          throw new Error(`Client does not support elicitation (required for ${method})`);
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots)
          throw new Error(`Client does not support listing roots (required for ${method})`);
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(method) {
    switch (method) {
      case "notifications/message":
        if (!this._capabilities.logging)
          throw new Error(`Server does not support logging (required for ${method})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources)
          throw new Error(`Server does not support notifying about resources (required for ${method})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools)
          throw new Error(`Server does not support notifying of tool list changes (required for ${method})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts)
          throw new Error(`Server does not support notifying of prompt list changes (required for ${method})`);
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url)
          throw new Error(`Client does not support URL elicitation (required for ${method})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(method) {
    if (this._capabilities)
      switch (method) {
        case "completion/complete":
          if (!this._capabilities.completions)
            throw new Error(`Server does not support completions (required for ${method})`);
          break;
        case "logging/setLevel":
          if (!this._capabilities.logging)
            throw new Error(`Server does not support logging (required for ${method})`);
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._capabilities.prompts)
            throw new Error(`Server does not support prompts (required for ${method})`);
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
          if (!this._capabilities.resources)
            throw new Error(`Server does not support resources (required for ${method})`);
          break;
        case "tools/call":
        case "tools/list":
          if (!this._capabilities.tools)
            throw new Error(`Server does not support tools (required for ${method})`);
          break;
        case "tasks/get":
        case "tasks/list":
        case "tasks/result":
        case "tasks/cancel":
          if (!this._capabilities.tasks)
            throw new Error(`Server does not support tasks capability (required for ${method})`);
          break;
        case "ping":
        case "initialize":
          break;
      }
  }
  assertTaskCapability(method) {
    assertClientRequestTaskCapability(this._clientCapabilities?.tasks?.requests, method, "Client");
  }
  assertTaskHandlerCapability(method) {
    this._capabilities && assertToolsCallTaskCapability(this._capabilities.tasks?.requests, method, "Server");
  }
  async _oninitialize(request) {
    let requestedVersion = request.params.protocolVersion;
    return this._clientCapabilities = request.params.capabilities, this._clientVersion = request.params.clientInfo, {
      protocolVersion: SUPPORTED_PROTOCOL_VERSIONS.includes(requestedVersion) ? requestedVersion : LATEST_PROTOCOL_VERSION,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...this._instructions && { instructions: this._instructions }
    };
  }
  /**
   * After initialization has completed, this will be populated with the client's reported capabilities.
   */
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  /**
   * After initialization has completed, this will be populated with information about the client's name and version.
   */
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, EmptyResultSchema);
  }
  // Implementation
  async createMessage(params, options) {
    if ((params.tools || params.toolChoice) && !this._clientCapabilities?.sampling?.tools)
      throw new Error("Client does not support sampling tools capability.");
    if (params.messages.length > 0) {
      let lastMessage = params.messages[params.messages.length - 1], lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content], hasToolResults = lastContent.some((c) => c.type === "tool_result"), previousMessage = params.messages.length > 1 ? params.messages[params.messages.length - 2] : void 0, previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [], hasPreviousToolUse = previousContent.some((c) => c.type === "tool_use");
      if (hasToolResults) {
        if (lastContent.some((c) => c.type !== "tool_result"))
          throw new Error("The last message must contain only tool_result content if any is present");
        if (!hasPreviousToolUse)
          throw new Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (hasPreviousToolUse) {
        let toolUseIds = new Set(previousContent.filter((c) => c.type === "tool_use").map((c) => c.id)), toolResultIds = new Set(lastContent.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
        if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id)))
          throw new Error("ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    return params.tools ? this.request({ method: "sampling/createMessage", params }, CreateMessageResultWithToolsSchema, options) : this.request({ method: "sampling/createMessage", params }, CreateMessageResultSchema, options);
  }
  /**
   * Creates an elicitation request for the given parameters.
   * For backwards compatibility, `mode` may be omitted for form requests and will default to `'form'`.
   * @param params The parameters for the elicitation request.
   * @param options Optional request options.
   * @returns The result of the elicitation request.
   */
  async elicitInput(params, options) {
    switch (params.mode ?? "form") {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url)
          throw new Error("Client does not support url elicitation.");
        let urlParams = params;
        return this.request({ method: "elicitation/create", params: urlParams }, ElicitResultSchema, options);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form)
          throw new Error("Client does not support form elicitation.");
        let formParams = params.mode === "form" ? params : { ...params, mode: "form" }, result = await this.request({ method: "elicitation/create", params: formParams }, ElicitResultSchema, options);
        if (result.action === "accept" && result.content && formParams.requestedSchema)
          try {
            let validationResult = this._jsonSchemaValidator.getValidator(formParams.requestedSchema)(result.content);
            if (!validationResult.valid)
              throw new McpError(ErrorCode.InvalidParams, `Elicitation response content does not match requested schema: ${validationResult.errorMessage}`);
          } catch (error2) {
            throw error2 instanceof McpError ? error2 : new McpError(ErrorCode.InternalError, `Error validating elicitation response: ${error2 instanceof Error ? error2.message : String(error2)}`);
          }
        return result;
      }
    }
  }
  /**
   * Creates a reusable callback that, when invoked, will send a `notifications/elicitation/complete`
   * notification for the specified elicitation ID.
   *
   * @param elicitationId The ID of the elicitation to mark as complete.
   * @param options Optional notification options. Useful when the completion notification should be related to a prior request.
   * @returns A function that emits the completion notification when awaited.
   */
  createElicitationCompletionNotifier(elicitationId, options) {
    if (!this._clientCapabilities?.elicitation?.url)
      throw new Error("Client does not support URL elicitation (required for notifications/elicitation/complete)");
    return () => this.notification({
      method: "notifications/elicitation/complete",
      params: {
        elicitationId
      }
    }, options);
  }
  async listRoots(params, options) {
    return this.request({ method: "roots/list", params }, ListRootsResultSchema, options);
  }
  /**
   * Sends a logging message to the client, if connected.
   * Note: You only need to send the parameters object, not the entire JSON RPC message
   * @see LoggingMessageNotification
   * @param params
   * @param sessionId optional for stateless and backward compatibility
   */
  async sendLoggingMessage(params, sessionId) {
    if (this._capabilities.logging && !this.isMessageIgnored(params.level, sessionId))
      return this.notification({ method: "notifications/message", params });
  }
  async sendResourceUpdated(params) {
    return this.notification({
      method: "notifications/resources/updated",
      params
    });
  }
  async sendResourceListChanged() {
    return this.notification({
      method: "notifications/resources/list_changed"
    });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/completable.js
init_define_LUFF_CREW_ASSETS();
var COMPLETABLE_SYMBOL = /* @__PURE__ */ Symbol.for("mcp.completable");
function isCompletable(schema) {
  return !!schema && typeof schema == "object" && COMPLETABLE_SYMBOL in schema;
}
function getCompleter(schema) {
  return schema[COMPLETABLE_SYMBOL]?.complete;
}
var McpZodTypeKind;
(function(McpZodTypeKind2) {
  McpZodTypeKind2.Completable = "McpCompletable";
})(McpZodTypeKind || (McpZodTypeKind = {}));

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/uriTemplate.js
init_define_LUFF_CREW_ASSETS();

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/toolNameValidation.js
init_define_LUFF_CREW_ASSETS();
var TOOL_NAME_REGEX = /^[A-Za-z0-9._-]{1,128}$/;
function validateToolName(name) {
  let warnings = [];
  if (name.length === 0)
    return {
      isValid: !1,
      warnings: ["Tool name cannot be empty"]
    };
  if (name.length > 128)
    return {
      isValid: !1,
      warnings: [`Tool name exceeds maximum length of 128 characters (current: ${name.length})`]
    };
  if (name.includes(" ") && warnings.push("Tool name contains spaces, which may cause parsing issues"), name.includes(",") && warnings.push("Tool name contains commas, which may cause parsing issues"), (name.startsWith("-") || name.endsWith("-")) && warnings.push("Tool name starts or ends with a dash, which may cause parsing issues in some contexts"), (name.startsWith(".") || name.endsWith(".")) && warnings.push("Tool name starts or ends with a dot, which may cause parsing issues in some contexts"), !TOOL_NAME_REGEX.test(name)) {
    let invalidChars = name.split("").filter((char) => !/[A-Za-z0-9._-]/.test(char)).filter((char, index, arr) => arr.indexOf(char) === index);
    return warnings.push(`Tool name contains invalid characters: ${invalidChars.map((c) => `"${c}"`).join(", ")}`, "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)"), {
      isValid: !1,
      warnings
    };
  }
  return {
    isValid: !0,
    warnings
  };
}
function issueToolNameWarning(name, warnings) {
  if (warnings.length > 0) {
    console.warn(`Tool name validation warning for "${name}":`);
    for (let warning of warnings)
      console.warn(`  - ${warning}`);
    console.warn("Tool registration will proceed, but this may cause compatibility issues."), console.warn("Consider updating the tool name to conform to the MCP tool naming standard."), console.warn("See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.");
  }
}
function validateAndWarnToolName(name) {
  let result = validateToolName(name);
  return issueToolNameWarning(name, result.warnings), result.isValid;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/experimental/tasks/mcp-server.js
init_define_LUFF_CREW_ASSETS();
var ExperimentalMcpServerTasks = class {
  constructor(_mcpServer) {
    this._mcpServer = _mcpServer;
  }
  registerToolTask(name, config2, handler) {
    let execution = { taskSupport: "required", ...config2.execution };
    if (execution.taskSupport === "forbidden")
      throw new Error(`Cannot register task-based tool '${name}' with taskSupport 'forbidden'. Use registerTool() instead.`);
    return this._mcpServer._createRegisteredTool(name, config2.title, config2.description, config2.inputSchema, config2.outputSchema, config2.annotations, execution, config2._meta, handler);
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/mcp.js
function toolInputElementCount(value, max) {
  let count = 0, stack = [value];
  for (; stack.length > 0; ) {
    let node2 = stack.pop();
    if (!(node2 === null || typeof node2 != "object"))
      if (Array.isArray(node2))
        for (let child of node2) {
          if (++count > max)
            return count;
          child !== null && typeof child == "object" && stack.push(child);
        }
      else
        for (let key in node2) {
          if (!Object.prototype.hasOwnProperty.call(node2, key))
            continue;
          if (++count > max)
            return count;
          let child = node2[key];
          child !== null && typeof child == "object" && stack.push(child);
        }
  }
  return count;
}
function resolveMaxToolInputElements(value) {
  if (!(value === void 0 || value === 1 / 0)) {
    if (typeof value != "number" || Number.isNaN(value) || value < 1)
      throw new RangeError(`maxToolInputElements must be a number of at least 1, or Infinity, got ${String(value)}`);
    return value;
  }
}
var McpServer = class {
  constructor(serverInfo, options) {
    this._registeredResources = {}, this._registeredResourceTemplates = {}, this._registeredTools = {}, this._registeredPrompts = {}, this._toolHandlersInitialized = !1, this._completionHandlerInitialized = !1, this._resourceHandlersInitialized = !1, this._promptHandlersInitialized = !1, this.server = new Server(serverInfo, options), this._maxToolInputElements = resolveMaxToolInputElements(options?.maxToolInputElements);
  }
  /**
   * Access experimental features.
   *
   * WARNING: These APIs are experimental and may change without notice.
   *
   * @experimental
   */
  get experimental() {
    return this._experimental || (this._experimental = {
      tasks: new ExperimentalMcpServerTasks(this)
    }), this._experimental;
  }
  /**
   * Attaches to the given transport, starts it, and starts listening for messages.
   *
   * The `server` object assumes ownership of the Transport, replacing any callbacks that have already been set, and expects that it is the only user of the Transport instance going forward.
   */
  async connect(transport) {
    return await this.server.connect(transport);
  }
  /**
   * Closes the connection.
   */
  async close() {
    await this.server.close();
  }
  setToolRequestHandlers() {
    this._toolHandlersInitialized || (this.server.assertCanSetRequestHandler(getMethodValue(ListToolsRequestSchema)), this.server.assertCanSetRequestHandler(getMethodValue(CallToolRequestSchema)), this.server.registerCapabilities({
      tools: {
        listChanged: !0
      }
    }), this.server.setRequestHandler(ListToolsRequestSchema, () => ({
      tools: Object.entries(this._registeredTools).filter(([, tool]) => tool.enabled).map(([name, tool]) => {
        let toolDefinition = {
          name,
          title: tool.title,
          description: tool.description,
          inputSchema: (() => {
            let obj = normalizeObjectSchema(tool.inputSchema);
            return obj ? toJsonSchemaCompat(obj, {
              strictUnions: !0,
              pipeStrategy: "input"
            }) : EMPTY_OBJECT_JSON_SCHEMA;
          })(),
          annotations: tool.annotations,
          execution: tool.execution,
          _meta: tool._meta
        };
        if (tool.outputSchema) {
          let obj = normalizeObjectSchema(tool.outputSchema);
          obj && (toolDefinition.outputSchema = toJsonSchemaCompat(obj, {
            strictUnions: !0,
            pipeStrategy: "output"
          }));
        }
        return toolDefinition;
      })
    })), this.server.setRequestHandler(CallToolRequestSchema, async (request, extra) => {
      try {
        let tool = this._registeredTools[request.params.name];
        if (!tool)
          throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} not found`);
        if (!tool.enabled)
          throw new McpError(ErrorCode.InvalidParams, `Tool ${request.params.name} disabled`);
        let isTaskRequest = !!request.params.task, taskSupport = tool.execution?.taskSupport, isTaskHandler = "createTask" in tool.handler;
        if ((taskSupport === "required" || taskSupport === "optional") && !isTaskHandler)
          throw new McpError(ErrorCode.InternalError, `Tool ${request.params.name} has taskSupport '${taskSupport}' but was not registered with registerToolTask`);
        if (taskSupport === "required" && !isTaskRequest)
          throw new McpError(ErrorCode.MethodNotFound, `Tool ${request.params.name} requires task augmentation (taskSupport: 'required')`);
        if (taskSupport === "optional" && !isTaskRequest && isTaskHandler)
          return await this.handleAutomaticTaskPolling(tool, request, extra);
        let args = await this.validateToolInput(tool, request.params.arguments, request.params.name), result = await this.executeToolHandler(tool, args, extra);
        return isTaskRequest || await this.validateToolOutput(tool, result, request.params.name), result;
      } catch (error2) {
        if (error2 instanceof McpError && error2.code === ErrorCode.UrlElicitationRequired)
          throw error2;
        return this.createToolError(error2 instanceof Error ? error2.message : String(error2));
      }
    }), this._toolHandlersInitialized = !0);
  }
  /**
   * Creates a tool error result.
   *
   * @param errorMessage - The error message.
   * @returns The tool error result.
   */
  createToolError(errorMessage) {
    return {
      content: [
        {
          type: "text",
          text: errorMessage
        }
      ],
      isError: !0
    };
  }
  /**
   * Validates tool input arguments against the tool's input schema.
   */
  async validateToolInput(tool, args, toolName) {
    if (this._maxToolInputElements !== void 0 && toolInputElementCount(args, this._maxToolInputElements) > this._maxToolInputElements)
      throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for tool ${toolName}: arguments contain more than the maximum of ${this._maxToolInputElements} elements`);
    if (!tool.inputSchema)
      return;
    let schemaToParse = normalizeObjectSchema(tool.inputSchema) ?? tool.inputSchema, parseResult = await safeParseAsync2(schemaToParse, args ?? {});
    if (!parseResult.success) {
      let error2 = "error" in parseResult ? parseResult.error : "Unknown error", errorMessage = getParseErrorMessage(error2);
      throw new McpError(ErrorCode.InvalidParams, `Input validation error: Invalid arguments for tool ${toolName}: ${errorMessage}`);
    }
    return parseResult.data;
  }
  /**
   * Validates tool output against the tool's output schema.
   */
  async validateToolOutput(tool, result, toolName) {
    if (!tool.outputSchema || !("content" in result) || result.isError)
      return;
    if (!result.structuredContent)
      throw new McpError(ErrorCode.InvalidParams, `Output validation error: Tool ${toolName} has an output schema but no structured content was provided`);
    let outputObj = normalizeObjectSchema(tool.outputSchema), parseResult = await safeParseAsync2(outputObj, result.structuredContent);
    if (!parseResult.success) {
      let error2 = "error" in parseResult ? parseResult.error : "Unknown error", errorMessage = getParseErrorMessage(error2);
      throw new McpError(ErrorCode.InvalidParams, `Output validation error: Invalid structured content for tool ${toolName}: ${errorMessage}`);
    }
  }
  /**
   * Executes a tool handler (either regular or task-based).
   */
  async executeToolHandler(tool, args, extra) {
    let handler = tool.handler;
    if ("createTask" in handler) {
      if (!extra.taskStore)
        throw new Error("No task store provided.");
      let taskExtra = { ...extra, taskStore: extra.taskStore };
      if (tool.inputSchema) {
        let typedHandler = handler;
        return await Promise.resolve(typedHandler.createTask(args, taskExtra));
      } else {
        let typedHandler = handler;
        return await Promise.resolve(typedHandler.createTask(taskExtra));
      }
    }
    if (tool.inputSchema) {
      let typedHandler = handler;
      return await Promise.resolve(typedHandler(args, extra));
    } else {
      let typedHandler = handler;
      return await Promise.resolve(typedHandler(extra));
    }
  }
  /**
   * Handles automatic task polling for tools with taskSupport 'optional'.
   */
  async handleAutomaticTaskPolling(tool, request, extra) {
    if (!extra.taskStore)
      throw new Error("No task store provided for task-capable tool.");
    let args = await this.validateToolInput(tool, request.params.arguments, request.params.name), handler = tool.handler, taskExtra = { ...extra, taskStore: extra.taskStore }, createTaskResult = args ? await Promise.resolve(handler.createTask(args, taskExtra)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await Promise.resolve(handler.createTask(taskExtra))
    ), taskId = createTaskResult.task.taskId, task = createTaskResult.task, pollInterval = task.pollInterval ?? 5e3;
    for (; task.status !== "completed" && task.status !== "failed" && task.status !== "cancelled"; ) {
      await new Promise((resolve3) => setTimeout(resolve3, pollInterval));
      let updatedTask = await extra.taskStore.getTask(taskId);
      if (!updatedTask)
        throw new McpError(ErrorCode.InternalError, `Task ${taskId} not found during polling`);
      task = updatedTask;
    }
    return await extra.taskStore.getTaskResult(taskId);
  }
  setCompletionRequestHandler() {
    this._completionHandlerInitialized || (this.server.assertCanSetRequestHandler(getMethodValue(CompleteRequestSchema)), this.server.registerCapabilities({
      completions: {}
    }), this.server.setRequestHandler(CompleteRequestSchema, async (request) => {
      switch (request.params.ref.type) {
        case "ref/prompt":
          return assertCompleteRequestPrompt(request), this.handlePromptCompletion(request, request.params.ref);
        case "ref/resource":
          return assertCompleteRequestResourceTemplate(request), this.handleResourceCompletion(request, request.params.ref);
        default:
          throw new McpError(ErrorCode.InvalidParams, `Invalid completion reference: ${request.params.ref}`);
      }
    }), this._completionHandlerInitialized = !0);
  }
  async handlePromptCompletion(request, ref) {
    let prompt = this._registeredPrompts[ref.name];
    if (!prompt)
      throw new McpError(ErrorCode.InvalidParams, `Prompt ${ref.name} not found`);
    if (!prompt.enabled)
      throw new McpError(ErrorCode.InvalidParams, `Prompt ${ref.name} disabled`);
    if (!prompt.argsSchema)
      return EMPTY_COMPLETION_RESULT;
    let field = getObjectShape(prompt.argsSchema)?.[request.params.argument.name];
    if (!isCompletable(field))
      return EMPTY_COMPLETION_RESULT;
    let completer = getCompleter(field);
    if (!completer)
      return EMPTY_COMPLETION_RESULT;
    let suggestions = await completer(request.params.argument.value, request.params.context);
    return createCompletionResult(suggestions);
  }
  async handleResourceCompletion(request, ref) {
    let template = Object.values(this._registeredResourceTemplates).find((t) => t.resourceTemplate.uriTemplate.toString() === ref.uri);
    if (!template) {
      if (this._registeredResources[ref.uri])
        return EMPTY_COMPLETION_RESULT;
      throw new McpError(ErrorCode.InvalidParams, `Resource template ${request.params.ref.uri} not found`);
    }
    let completer = template.resourceTemplate.completeCallback(request.params.argument.name);
    if (!completer)
      return EMPTY_COMPLETION_RESULT;
    let suggestions = await completer(request.params.argument.value, request.params.context);
    return createCompletionResult(suggestions);
  }
  setResourceRequestHandlers() {
    this._resourceHandlersInitialized || (this.server.assertCanSetRequestHandler(getMethodValue(ListResourcesRequestSchema)), this.server.assertCanSetRequestHandler(getMethodValue(ListResourceTemplatesRequestSchema)), this.server.assertCanSetRequestHandler(getMethodValue(ReadResourceRequestSchema)), this.server.registerCapabilities({
      resources: {
        listChanged: !0
      }
    }), this.server.setRequestHandler(ListResourcesRequestSchema, async (request, extra) => {
      let resources = Object.entries(this._registeredResources).filter(([_, resource]) => resource.enabled).map(([uri, resource]) => ({
        uri,
        name: resource.name,
        ...resource.metadata
      })), templateResources = [];
      for (let template of Object.values(this._registeredResourceTemplates)) {
        if (!template.resourceTemplate.listCallback)
          continue;
        let result = await template.resourceTemplate.listCallback(extra);
        for (let resource of result.resources)
          templateResources.push({
            ...template.metadata,
            // the defined resource metadata should override the template metadata if present
            ...resource
          });
      }
      return { resources: [...resources, ...templateResources] };
    }), this.server.setRequestHandler(ListResourceTemplatesRequestSchema, async () => ({ resourceTemplates: Object.entries(this._registeredResourceTemplates).map(([name, template]) => ({
      name,
      uriTemplate: template.resourceTemplate.uriTemplate.toString(),
      ...template.metadata
    })) })), this.server.setRequestHandler(ReadResourceRequestSchema, async (request, extra) => {
      let uri = new URL(request.params.uri), resource = this._registeredResources[uri.toString()];
      if (resource) {
        if (!resource.enabled)
          throw new McpError(ErrorCode.InvalidParams, `Resource ${uri} disabled`);
        return resource.readCallback(uri, extra);
      }
      for (let template of Object.values(this._registeredResourceTemplates)) {
        let variables = template.resourceTemplate.uriTemplate.match(uri.toString());
        if (variables)
          return template.readCallback(uri, variables, extra);
      }
      throw new McpError(ErrorCode.InvalidParams, `Resource ${uri} not found`);
    }), this._resourceHandlersInitialized = !0);
  }
  setPromptRequestHandlers() {
    this._promptHandlersInitialized || (this.server.assertCanSetRequestHandler(getMethodValue(ListPromptsRequestSchema)), this.server.assertCanSetRequestHandler(getMethodValue(GetPromptRequestSchema)), this.server.registerCapabilities({
      prompts: {
        listChanged: !0
      }
    }), this.server.setRequestHandler(ListPromptsRequestSchema, () => ({
      prompts: Object.entries(this._registeredPrompts).filter(([, prompt]) => prompt.enabled).map(([name, prompt]) => ({
        name,
        title: prompt.title,
        description: prompt.description,
        arguments: prompt.argsSchema ? promptArgumentsFromSchema(prompt.argsSchema) : void 0
      }))
    })), this.server.setRequestHandler(GetPromptRequestSchema, async (request, extra) => {
      let prompt = this._registeredPrompts[request.params.name];
      if (!prompt)
        throw new McpError(ErrorCode.InvalidParams, `Prompt ${request.params.name} not found`);
      if (!prompt.enabled)
        throw new McpError(ErrorCode.InvalidParams, `Prompt ${request.params.name} disabled`);
      if (prompt.argsSchema) {
        let argsObj = normalizeObjectSchema(prompt.argsSchema), parseResult = await safeParseAsync2(argsObj, request.params.arguments ?? {});
        if (!parseResult.success) {
          let error2 = "error" in parseResult ? parseResult.error : "Unknown error", errorMessage = getParseErrorMessage(error2);
          throw new McpError(ErrorCode.InvalidParams, `Invalid arguments for prompt ${request.params.name}: ${errorMessage}`);
        }
        let args = parseResult.data, cb = prompt.callback;
        return await Promise.resolve(cb(args, extra));
      } else {
        let cb = prompt.callback;
        return await Promise.resolve(cb(extra));
      }
    }), this._promptHandlersInitialized = !0);
  }
  resource(name, uriOrTemplate, ...rest) {
    let metadata;
    typeof rest[0] == "object" && (metadata = rest.shift());
    let readCallback = rest[0];
    if (typeof uriOrTemplate == "string") {
      if (this._registeredResources[uriOrTemplate])
        throw new Error(`Resource ${uriOrTemplate} is already registered`);
      let registeredResource = this._createRegisteredResource(name, void 0, uriOrTemplate, metadata, readCallback);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), registeredResource;
    } else {
      if (this._registeredResourceTemplates[name])
        throw new Error(`Resource template ${name} is already registered`);
      let registeredResourceTemplate = this._createRegisteredResourceTemplate(name, void 0, uriOrTemplate, metadata, readCallback);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), registeredResourceTemplate;
    }
  }
  registerResource(name, uriOrTemplate, config2, readCallback) {
    if (typeof uriOrTemplate == "string") {
      if (this._registeredResources[uriOrTemplate])
        throw new Error(`Resource ${uriOrTemplate} is already registered`);
      let registeredResource = this._createRegisteredResource(name, config2.title, uriOrTemplate, config2, readCallback);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), registeredResource;
    } else {
      if (this._registeredResourceTemplates[name])
        throw new Error(`Resource template ${name} is already registered`);
      let registeredResourceTemplate = this._createRegisteredResourceTemplate(name, config2.title, uriOrTemplate, config2, readCallback);
      return this.setResourceRequestHandlers(), this.sendResourceListChanged(), registeredResourceTemplate;
    }
  }
  _createRegisteredResource(name, title, uri, metadata, readCallback) {
    let registeredResource = {
      name,
      title,
      metadata,
      readCallback,
      enabled: !0,
      disable: () => registeredResource.update({ enabled: !1 }),
      enable: () => registeredResource.update({ enabled: !0 }),
      remove: () => registeredResource.update({ uri: null }),
      update: (updates) => {
        typeof updates.uri < "u" && updates.uri !== uri && (delete this._registeredResources[uri], updates.uri && (this._registeredResources[updates.uri] = registeredResource)), typeof updates.name < "u" && (registeredResource.name = updates.name), typeof updates.title < "u" && (registeredResource.title = updates.title), typeof updates.metadata < "u" && (registeredResource.metadata = updates.metadata), typeof updates.callback < "u" && (registeredResource.readCallback = updates.callback), typeof updates.enabled < "u" && (registeredResource.enabled = updates.enabled), this.sendResourceListChanged();
      }
    };
    return this._registeredResources[uri] = registeredResource, registeredResource;
  }
  _createRegisteredResourceTemplate(name, title, template, metadata, readCallback) {
    let registeredResourceTemplate = {
      resourceTemplate: template,
      title,
      metadata,
      readCallback,
      enabled: !0,
      disable: () => registeredResourceTemplate.update({ enabled: !1 }),
      enable: () => registeredResourceTemplate.update({ enabled: !0 }),
      remove: () => registeredResourceTemplate.update({ name: null }),
      update: (updates) => {
        typeof updates.name < "u" && updates.name !== name && (delete this._registeredResourceTemplates[name], updates.name && (this._registeredResourceTemplates[updates.name] = registeredResourceTemplate)), typeof updates.title < "u" && (registeredResourceTemplate.title = updates.title), typeof updates.template < "u" && (registeredResourceTemplate.resourceTemplate = updates.template), typeof updates.metadata < "u" && (registeredResourceTemplate.metadata = updates.metadata), typeof updates.callback < "u" && (registeredResourceTemplate.readCallback = updates.callback), typeof updates.enabled < "u" && (registeredResourceTemplate.enabled = updates.enabled), this.sendResourceListChanged();
      }
    };
    this._registeredResourceTemplates[name] = registeredResourceTemplate;
    let variableNames = template.uriTemplate.variableNames;
    return Array.isArray(variableNames) && variableNames.some((v) => !!template.completeCallback(v)) && this.setCompletionRequestHandler(), registeredResourceTemplate;
  }
  _createRegisteredPrompt(name, title, description, argsSchema, callback) {
    let registeredPrompt = {
      title,
      description,
      argsSchema: argsSchema === void 0 ? void 0 : objectFromShape(argsSchema),
      callback,
      enabled: !0,
      disable: () => registeredPrompt.update({ enabled: !1 }),
      enable: () => registeredPrompt.update({ enabled: !0 }),
      remove: () => registeredPrompt.update({ name: null }),
      update: (updates) => {
        typeof updates.name < "u" && updates.name !== name && (delete this._registeredPrompts[name], updates.name && (this._registeredPrompts[updates.name] = registeredPrompt)), typeof updates.title < "u" && (registeredPrompt.title = updates.title), typeof updates.description < "u" && (registeredPrompt.description = updates.description), typeof updates.argsSchema < "u" && (registeredPrompt.argsSchema = objectFromShape(updates.argsSchema)), typeof updates.callback < "u" && (registeredPrompt.callback = updates.callback), typeof updates.enabled < "u" && (registeredPrompt.enabled = updates.enabled), this.sendPromptListChanged();
      }
    };
    return this._registeredPrompts[name] = registeredPrompt, argsSchema && Object.values(argsSchema).some((field) => {
      let inner = field instanceof ZodOptional2 ? field._def?.innerType : field;
      return isCompletable(inner);
    }) && this.setCompletionRequestHandler(), registeredPrompt;
  }
  _createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, execution, _meta, handler) {
    validateAndWarnToolName(name);
    let registeredTool = {
      title,
      description,
      inputSchema: getZodSchemaObject(inputSchema),
      outputSchema: getZodSchemaObject(outputSchema),
      annotations,
      execution,
      _meta,
      handler,
      enabled: !0,
      disable: () => registeredTool.update({ enabled: !1 }),
      enable: () => registeredTool.update({ enabled: !0 }),
      remove: () => registeredTool.update({ name: null }),
      update: (updates) => {
        typeof updates.name < "u" && updates.name !== name && (typeof updates.name == "string" && validateAndWarnToolName(updates.name), delete this._registeredTools[name], updates.name && (this._registeredTools[updates.name] = registeredTool)), typeof updates.title < "u" && (registeredTool.title = updates.title), typeof updates.description < "u" && (registeredTool.description = updates.description), typeof updates.paramsSchema < "u" && (registeredTool.inputSchema = objectFromShape(updates.paramsSchema)), typeof updates.outputSchema < "u" && (registeredTool.outputSchema = objectFromShape(updates.outputSchema)), typeof updates.callback < "u" && (registeredTool.handler = updates.callback), typeof updates.annotations < "u" && (registeredTool.annotations = updates.annotations), typeof updates._meta < "u" && (registeredTool._meta = updates._meta), typeof updates.enabled < "u" && (registeredTool.enabled = updates.enabled), this.sendToolListChanged();
      }
    };
    return this._registeredTools[name] = registeredTool, this.setToolRequestHandlers(), this.sendToolListChanged(), registeredTool;
  }
  /**
   * tool() implementation. Parses arguments passed to overrides defined above.
   */
  tool(name, ...rest) {
    if (this._registeredTools[name])
      throw new Error(`Tool ${name} is already registered`);
    let description, inputSchema, outputSchema, annotations;
    if (typeof rest[0] == "string" && (description = rest.shift()), rest.length > 1) {
      let firstArg = rest[0];
      if (isZodRawShapeCompat(firstArg))
        inputSchema = rest.shift(), rest.length > 1 && typeof rest[0] == "object" && rest[0] !== null && !isZodRawShapeCompat(rest[0]) && (annotations = rest.shift());
      else if (typeof firstArg == "object" && firstArg !== null) {
        if (Object.values(firstArg).some((v) => typeof v == "object" && v !== null))
          throw new Error(`Tool ${name} expected a Zod schema or ToolAnnotations, but received an unrecognized object`);
        annotations = rest.shift();
      }
    }
    let callback = rest[0];
    return this._createRegisteredTool(name, void 0, description, inputSchema, outputSchema, annotations, { taskSupport: "forbidden" }, void 0, callback);
  }
  /**
   * Registers a tool with a config object and callback.
   */
  registerTool(name, config2, cb) {
    if (this._registeredTools[name])
      throw new Error(`Tool ${name} is already registered`);
    let { title, description, inputSchema, outputSchema, annotations, _meta } = config2;
    return this._createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, { taskSupport: "forbidden" }, _meta, cb);
  }
  prompt(name, ...rest) {
    if (this._registeredPrompts[name])
      throw new Error(`Prompt ${name} is already registered`);
    let description;
    typeof rest[0] == "string" && (description = rest.shift());
    let argsSchema;
    rest.length > 1 && (argsSchema = rest.shift());
    let cb = rest[0], registeredPrompt = this._createRegisteredPrompt(name, void 0, description, argsSchema, cb);
    return this.setPromptRequestHandlers(), this.sendPromptListChanged(), registeredPrompt;
  }
  /**
   * Registers a prompt with a config object and callback.
   */
  registerPrompt(name, config2, cb) {
    if (this._registeredPrompts[name])
      throw new Error(`Prompt ${name} is already registered`);
    let { title, description, argsSchema } = config2, registeredPrompt = this._createRegisteredPrompt(name, title, description, argsSchema, cb);
    return this.setPromptRequestHandlers(), this.sendPromptListChanged(), registeredPrompt;
  }
  /**
   * Checks if the server is connected to a transport.
   * @returns True if the server is connected
   */
  isConnected() {
    return this.server.transport !== void 0;
  }
  /**
   * Sends a logging message to the client, if connected.
   * Note: You only need to send the parameters object, not the entire JSON RPC message
   * @see LoggingMessageNotification
   * @param params
   * @param sessionId optional for stateless and backward compatibility
   */
  async sendLoggingMessage(params, sessionId) {
    return this.server.sendLoggingMessage(params, sessionId);
  }
  /**
   * Sends a resource list changed event to the client, if connected.
   */
  sendResourceListChanged() {
    this.isConnected() && this.server.sendResourceListChanged();
  }
  /**
   * Sends a tool list changed event to the client, if connected.
   */
  sendToolListChanged() {
    this.isConnected() && this.server.sendToolListChanged();
  }
  /**
   * Sends a prompt list changed event to the client, if connected.
   */
  sendPromptListChanged() {
    this.isConnected() && this.server.sendPromptListChanged();
  }
};
var EMPTY_OBJECT_JSON_SCHEMA = {
  type: "object",
  properties: {}
};
function isZodTypeLike(value) {
  return value !== null && typeof value == "object" && "parse" in value && typeof value.parse == "function" && "safeParse" in value && typeof value.safeParse == "function";
}
function isZodSchemaInstance(obj) {
  return "_def" in obj || "_zod" in obj || isZodTypeLike(obj);
}
function isZodRawShapeCompat(obj) {
  return typeof obj != "object" || obj === null || isZodSchemaInstance(obj) ? !1 : Object.keys(obj).length === 0 ? !0 : Object.values(obj).some(isZodTypeLike);
}
function getZodSchemaObject(schema) {
  if (schema) {
    if (isZodRawShapeCompat(schema))
      return objectFromShape(schema);
    if (!isZodSchemaInstance(schema))
      throw new Error("inputSchema must be a Zod schema or raw shape, received an unrecognized object");
    return schema;
  }
}
function promptArgumentsFromSchema(schema) {
  let shape = getObjectShape(schema);
  return shape ? Object.entries(shape).map(([name, field]) => {
    let description = getSchemaDescription(field), isOptional = isSchemaOptional(field);
    return {
      name,
      description,
      required: !isOptional
    };
  }) : [];
}
function getMethodValue(schema) {
  let methodSchema = getObjectShape(schema)?.method;
  if (!methodSchema)
    throw new Error("Schema is missing a method literal");
  let value = getLiteralValue(methodSchema);
  if (typeof value == "string")
    return value;
  throw new Error("Schema method literal must be a string");
}
function createCompletionResult(suggestions) {
  return {
    completion: {
      values: suggestions.slice(0, 100),
      total: suggestions.length,
      hasMore: suggestions.length > 100
    }
  };
}
var EMPTY_COMPLETION_RESULT = {
  completion: {
    values: [],
    hasMore: !1
  }
};

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
init_define_LUFF_CREW_ASSETS();
import process2 from "node:process";

// node_modules/@modelcontextprotocol/sdk/dist/esm/shared/stdio.js
init_define_LUFF_CREW_ASSETS();
var STDIO_DEFAULT_MAX_BUFFER_SIZE = 10 * 1024 * 1024, ReadBuffer = class {
  constructor(options) {
    this._maxBufferSize = options?.maxBufferSize ?? STDIO_DEFAULT_MAX_BUFFER_SIZE;
  }
  append(chunk) {
    if ((this._buffer?.length ?? 0) + chunk.length > this._maxBufferSize)
      throw this.clear(), new Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`);
    this._buffer = this._buffer ? Buffer.concat([this._buffer, chunk]) : chunk;
  }
  readMessage() {
    if (!this._buffer)
      return null;
    let index = this._buffer.indexOf(`
`);
    if (index === -1)
      return null;
    let line = this._buffer.toString("utf8", 0, index).replace(/\r$/, "");
    return this._buffer = this._buffer.subarray(index + 1), deserializeMessage(line);
  }
  clear() {
    this._buffer = void 0;
  }
};
function deserializeMessage(line) {
  return JSONRPCMessageSchema.parse(JSON.parse(line));
}
function serializeMessage(message) {
  return JSON.stringify(message) + `
`;
}

// node_modules/@modelcontextprotocol/sdk/dist/esm/server/stdio.js
var StdioServerTransport = class {
  constructor(_stdin = process2.stdin, _stdout = process2.stdout, options) {
    this._stdin = _stdin, this._stdout = _stdout, this._started = !1, this._ondata = (chunk) => {
      try {
        this._readBuffer.append(chunk), this.processReadBuffer();
      } catch (error2) {
        this.onerror?.(error2), this.close().catch(() => {
        });
      }
    }, this._onerror = (error2) => {
      this.onerror?.(error2);
    }, this._readBuffer = new ReadBuffer({ maxBufferSize: options?.maxBufferSize });
  }
  /**
   * Starts listening for messages on stdin.
   */
  async start() {
    if (this._started)
      throw new Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");
    this._started = !0, this._stdin.on("data", this._ondata), this._stdin.on("error", this._onerror);
  }
  processReadBuffer() {
    for (; ; )
      try {
        let message = this._readBuffer.readMessage();
        if (message === null)
          break;
        this.onmessage?.(message);
      } catch (error2) {
        this.onerror?.(error2);
      }
  }
  async close() {
    this._stdin.off("data", this._ondata), this._stdin.off("error", this._onerror), this._stdin.listenerCount("data") === 0 && this._stdin.pause(), this._readBuffer.clear(), this.onclose?.();
  }
  send(message) {
    return new Promise((resolve3) => {
      let json = serializeMessage(message);
      this._stdout.write(json) ? resolve3() : this._stdout.once("drain", resolve3);
    });
  }
};

// src/monitor.ts
init_define_LUFF_CREW_ASSETS();

// src/dashboard/server.ts
init_define_LUFF_CREW_ASSETS();
import { randomBytes } from "node:crypto";
import { createServer } from "node:http";

// src/dashboard/page.ts
init_define_LUFF_CREW_ASSETS();
import { readFileSync as readFileSync2 } from "node:fs";

// src/i18n.ts
init_define_LUFF_CREW_ASSETS();
var STRINGS = {
  en: {
    appName: "Crew",
    cost: "Cost",
    tokens: "Tokens",
    time: "Time",
    collapse: "Collapse",
    expand: "Expand",
    running: "Running",
    finished: "Finished",
    planned: "Planned",
    empty: "No subagents yet. Give Claude a job big enough to split across a few helpers.",
    waiting: "Waiting for a Claude Code session\u2026",
    round: "round",
    error: "error",
    killed: "stopped",
    stalled: "stalled",
    after: "after",
    background: "background",
    tokensWord: "tokens",
    agents: "agents",
    live: "live",
    reconnecting: "reconnecting\u2026",
    dismiss: "Hide bar",
    theme: "Theme",
    estimate: "Costs are estimates from token counts and list prices, not your bill.",
    phase: { plan: "Plan", design: "Design", delegate: "Tasks", review: "Review", close: "Done" },
    busy: "running"
  },
  ru: {
    appName: "\u041A\u043E\u043C\u0430\u043D\u0434\u0430",
    cost: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
    tokens: "\u0422\u043E\u043A\u0435\u043D\u044B",
    time: "\u0412\u0440\u0435\u043C\u044F",
    collapse: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    expand: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    running: "\u0420\u0430\u0431\u043E\u0442\u0430\u044E\u0442",
    finished: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u044B",
    planned: "\u0417\u0430\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u044B",
    empty: "\u0421\u0443\u0431\u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442. \u0414\u0430\u0439\u0442\u0435 Claude \u0437\u0430\u0434\u0430\u0447\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0441\u0442\u043E\u0438\u0442 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0430\u043C\u0438.",
    waiting: "\u0416\u0434\u0451\u043C \u0441\u0435\u0441\u0441\u0438\u044E Claude Code\u2026",
    round: "\u0440\u0430\u0443\u043D\u0434",
    error: "\u043E\u0448\u0438\u0431\u043A\u0430",
    killed: "\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D",
    stalled: "\u0437\u0430\u0432\u0438\u0441",
    after: "\u043F\u043E\u0441\u043B\u0435",
    background: "\u0432 \u0444\u043E\u043D\u0435",
    tokensWord: "\u0442\u043E\u043A\u0435\u043D\u043E\u0432",
    agents: "\u0430\u0433\u0435\u043D\u0442\u043E\u0432",
    live: "\u043E\u043D\u043B\u0430\u0439\u043D",
    reconnecting: "\u043F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026",
    dismiss: "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u043B\u043E\u0441\u0443",
    theme: "\u0422\u0435\u043C\u0430",
    estimate: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0446\u0435\u043D\u0435\u043D\u0430 \u043F\u043E \u0442\u043E\u043A\u0435\u043D\u0430\u043C \u0438 \u043F\u0440\u0430\u0439\u0441-\u043B\u0438\u0441\u0442\u0443, \u044D\u0442\u043E \u043D\u0435 \u0441\u0447\u0451\u0442.",
    phase: { plan: "\u041F\u043B\u0430\u043D", design: "\u0414\u0438\u0437\u0430\u0439\u043D", delegate: "\u0417\u0430\u0434\u0430\u0447\u0438", review: "\u0420\u0435\u0432\u044C\u044E", close: "\u0413\u043E\u0442\u043E\u0432\u043E" },
    busy: "\u0432 \u0440\u0430\u0431\u043E\u0442\u0435"
  }
}, stringsFor = (lang2) => STRINGS[lang2];

// src/version.ts
init_define_LUFF_CREW_ASSETS();
var VERSION = "1.0.0";

// src/dashboard/page.ts
var cached2 = null;
function assets() {
  return typeof define_LUFF_CREW_ASSETS_default == "object" && define_LUFF_CREW_ASSETS_default ? define_LUFF_CREW_ASSETS_default : (cached2 ??= {
    css: readFileSync2(new URL("./client.css", import.meta.url), "utf8"),
    js: readFileSync2(new URL("./client.js", import.meta.url), "utf8")
  }, cached2);
}
var scriptJson = (value) => JSON.stringify(value).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029"), FAVICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" shape-rendering="crispEdges"><rect x="7" y="9" width="10" height="1" fill="#5b6cf0"/><rect x="6" y="10" width="12" height="1" fill="#5b6cf0"/><rect x="5" y="11" width="14" height="6" fill="#5b6cf0"/><rect x="6" y="17" width="12" height="1" fill="#5b6cf0"/><rect x="8" y="12" width="2" height="2" fill="#fff"/><rect x="14" y="12" width="2" height="2" fill="#fff"/><rect x="6" y="5" width="12" height="3" fill="#1F2A4A"/><rect x="5" y="8" width="14" height="1" fill="#22201d"/><rect x="6" y="18" width="2" height="3" fill="#5b6cf0"/><rect x="16" y="18" width="2" height="3" fill="#5b6cf0"/></svg>';
function renderPage(nonce, lang2) {
  let s = stringsFor(lang2), { css, js } = assets(), boot = { lang: lang2, strings: s, version: VERSION };
  return `<!doctype html>
<html lang="${lang2}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Luff Crew</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<style nonce="${nonce}">${css}</style>
</head>
<body>
<div class="wrap">
  <div class="top">
    <div class="brand">${FAVICON.replace("<svg ", '<svg width="22" height="19" ')}<span>Luff Crew</span></div>
    <div class="spacer"></div>
    <div class="conn off" id="conn" aria-live="polite"><i></i><span id="conn-text">${s.reconnecting}</span></div>
    <button class="icon-btn" id="theme" aria-label="${s.theme}">
      <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 2a6 6 0 0 1 0 12z" fill="currentColor"/></svg>
    </button>
  </div>

  <div class="card job" id="job" hidden>
    <span class="dot"></span>
    <span class="title" id="job-title"></span>
    <div class="segs" id="segs" role="presentation"></div>
    <span class="pill" id="job-pill"></span>
    <span class="pct num" id="job-pct"></span>
    <button class="crew-btn num" id="crew" aria-label="${s.agents}"></button>
    <button class="icon-btn" id="dismiss" aria-label="${s.dismiss}" title="${s.dismiss}">
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
    </button>
  </div>

  <section class="card agents" id="agents" aria-label="${s.agents}">
    <h1 id="agents-title" hidden></h1>
    <div class="tiles">
      <div class="tile"><div class="k">${s.cost}</div><div class="v num" id="t-cost">\u2248$0.00</div></div>
      <div class="tile"><div class="k">${s.tokens}</div><div class="v num" id="t-tokens">0</div></div>
      <div class="tile"><div class="k">${s.time}</div><div class="v num" id="t-time">0:00</div></div>
    </div>
    <div class="bar-row"><button class="link" id="compact-toggle">${s.collapse}</button></div>
    <div class="empty" id="empty">${s.waiting}</div>
    <div class="compact" id="compact" hidden></div>
    <div id="full">
      <div class="section-h" id="h-running" hidden></div>
      <div id="running"></div>
      <div class="section-h" id="h-finished" hidden><button id="finished-toggle" aria-controls="finished"></button></div>
      <div id="finished"></div>
      <div class="section-h" id="h-planned" hidden></div>
      <div id="planned"></div>
    </div>
  </section>

  <footer>
    <span>${s.estimate}</span>
    <span><span id="session"></span> \xB7 v${VERSION}</span>
  </footer>
</div>
<script type="application/json" id="boot">${scriptJson(boot)}</script>
<script nonce="${nonce}">${js}</script>
</body>
</html>`;
}

// src/dashboard/server.ts
var PORT_ATTEMPTS = 20, HEARTBEAT_MS = 15e3;
async function startDashboard(opts) {
  let host = opts.host ?? "127.0.0.1", streams = /* @__PURE__ */ new Set(), lastSent = "", port = 0, allowedHost = (req) => {
    let h = (req.headers.host ?? "").toLowerCase();
    return h === `127.0.0.1:${port}` || h === `localhost:${port}` || h === `[::1]:${port}`;
  }, frame = () => {
    let snap = opts.snapshot();
    return JSON.stringify(snap);
  }, withoutClock = (json) => json.replace(/"now":\d+,/, ""), server = createServer((req, res) => {
    if (!allowedHost(req)) {
      res.writeHead(403, { "content-type": "text/plain" }).end("Forbidden host");
      return;
    }
    let url = new URL(req.url ?? "/", `http://${req.headers.host}`), common = { "cache-control": "no-store", "x-content-type-options": "nosniff", "referrer-policy": "no-referrer" };
    if (req.method === "GET" && url.pathname === "/") {
      let nonce = randomBytes(16).toString("base64");
      res.writeHead(200, {
        ...common,
        "content-type": "text/html; charset=utf-8",
        "content-security-policy": `default-src 'none'; script-src 'nonce-${nonce}'; style-src 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'`,
        "x-frame-options": "DENY"
      }), res.end(renderPage(nonce, opts.lang()));
      return;
    }
    if (req.method === "GET" && url.pathname === "/favicon.svg") {
      res.writeHead(200, { ...common, "content-type": "image/svg+xml" }).end(FAVICON);
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/state") {
      res.writeHead(200, { ...common, "content-type": "application/json" }).end(frame());
      return;
    }
    if (req.method === "GET" && url.pathname === "/api/health") {
      res.writeHead(200, { ...common, "content-type": "application/json" }).end(JSON.stringify({ ok: !0, app: "luff-crew-monitor" }));
      return;
    }
    if (req.method === "GET" && url.pathname === "/events") {
      res.writeHead(200, { ...common, "content-type": "text/event-stream", connection: "keep-alive" }), res.write(`retry: 2000
event: snapshot
data: ${frame()}

`), streams.add(res), req.on("close", () => streams.delete(res));
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/dismiss") {
      if (req.headers["x-luff-crew"] !== "1") {
        res.writeHead(403, common).end();
        return;
      }
      opts.onDismiss?.(), res.writeHead(204, common).end(), push(!0);
      return;
    }
    res.writeHead(404, { ...common, "content-type": "text/plain" }).end("Not found");
  });
  server.keepAliveTimeout = 5e3, port = await listen(server, host, opts.port);
  let push = (force = !1) => {
    if (!streams.size) return;
    let json = frame(), key = withoutClock(json);
    if (!(!force && key === lastSent)) {
      lastSent = key;
      for (let res of streams) res.write(`event: snapshot
data: ${json}

`);
    }
  }, heartbeat = setInterval(() => {
    for (let res of streams) res.write(`: ping

`);
  }, HEARTBEAT_MS);
  return heartbeat.unref(), {
    url: `http://${host === "127.0.0.1" ? "localhost" : host}:${port}`,
    port,
    push: () => push(!1),
    clients: () => streams.size,
    close: () => new Promise((resolve3) => {
      clearInterval(heartbeat);
      for (let res of streams) res.end();
      streams.clear(), server.close(() => resolve3()), server.closeAllConnections?.();
    })
  };
}
async function listen(server, host, first) {
  let ports = [...Array.from({ length: PORT_ATTEMPTS }, (_, i) => first + i), 0];
  for (let p of ports)
    try {
      return await new Promise((resolve3, reject) => {
        let onError = (err) => {
          server.off("listening", onListening), reject(err);
        }, onListening = () => {
          server.off("error", onError), resolve3();
        };
        server.once("error", onError), server.once("listening", onListening), server.listen(p, host);
      }), server.address().port;
    } catch (err) {
      if (err.code !== "EADDRINUSE" && err.code !== "EACCES") throw err;
    }
  throw new Error("No free port for the dashboard");
}

// src/open.ts
init_define_LUFF_CREW_ASSETS();
import { spawn } from "node:child_process";
function openBrowser(url) {
  if (!/^https?:\/\//.test(url)) return !1;
  let [cmd, args] = process.platform === "darwin" ? ["open", [url]] : process.platform === "win32" ? ["cmd", ["/c", "start", '""', url.replace(/&/g, "^&")]] : ["xdg-open", [url]];
  try {
    let child = spawn(cmd, args, { stdio: "ignore", detached: !0, windowsHide: !0 });
    return child.on("error", () => {
    }), child.unref(), !0;
  } catch {
    return !1;
  }
}

// src/tracker.ts
init_define_LUFF_CREW_ASSETS();
import { existsSync as existsSync2 } from "node:fs";
import { open as open3, readdir as readdir2, readFile, stat as stat3 } from "node:fs/promises";
import { basename as basename2, dirname, join as join3 } from "node:path";

// src/flow.ts
init_define_LUFF_CREW_ASSETS();

// src/format.ts
init_define_LUFF_CREW_ASSETS();
var fmtTokens = (n) => n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}k` : `${Math.max(0, Math.round(n))}`, fmtCost = (usd) => usd >= 100 ? `$${Math.round(usd)}` : usd >= 10 ? `$${usd.toFixed(1)}` : `$${usd.toFixed(2)}`;
function fmtTime(ms) {
  let s = Math.max(0, Math.round(ms / 1e3)), h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), ss = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
}
var normalize = (s) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim(), clip = (s, max) => s.length > max ? s.slice(0, Math.max(1, max - 1)) + "\u2026" : s, textBar = (ratio, width, on = "\u25B0", off = "\u25B1") => {
  let filled = Math.round(Math.max(0, Math.min(1, ratio)) * width);
  return on.repeat(filled) + off.repeat(Math.max(0, width - filled));
};

// src/types.ts
init_define_LUFF_CREW_ASSETS();
var PHASES = ["plan", "design", "delegate", "review", "close"], EFFORTS = ["low", "medium", "high", "xhigh", "max"];

// src/flow.ts
var DEFAULT_TITLE = "Crew job", isPhase = (p) => typeof p == "string" && PHASES.includes(p), toCount = (n) => typeof n == "number" && Number.isFinite(n) ? Math.max(0, Math.round(n)) : void 0;
function cleanTasks(tasks) {
  return Array.isArray(tasks) ? tasks.filter((t) => typeof t?.title == "string" && t.title.trim()).map((t, i) => {
    let out = {
      title: (t.title ?? "").trim(),
      after: [...new Set((t.after ?? []).filter((n) => Number.isInteger(n) && n > 0 && n !== i + 1))].sort((a, b) => a - b)
    };
    return t.agent?.trim() && (out.agent = t.agent.trim()), t.model?.trim() && (out.model = t.model.trim()), t.effort?.trim() && (out.effort = t.effort.trim().toLowerCase()), out;
  }) : void 0;
}
function startsNewFlow(prev, input) {
  if (!prev || prev.finished) return !0;
  let title = input.title?.trim();
  return title !== void 0 && title !== "" && title !== prev.title;
}
function applyProgress(prev, input, at) {
  let base = startsNewFlow(prev, input) || !prev ? { title: DEFAULT_TITLE, total: 0, done: 0, phase: "plan", finished: !1, tasks: [], startedAt: at, updatedAt: at } : prev, tasks = cleanTasks(input.tasks) ?? base.tasks, total = toCount(input.total) ?? (input.tasks ? tasks.length : base.total), doneRaw = toCount(input.done) ?? base.done, done = input.finished ? Math.max(doneRaw, total) : total ? Math.min(total, doneRaw) : doneRaw, phase = input.finished ? "close" : isPhase(input.phase) ? input.phase : base.phase;
  return {
    title: input.title?.trim() || base.title,
    total,
    done,
    phase,
    finished: input.finished === !0,
    tasks,
    startedAt: base.startedAt,
    updatedAt: at
  };
}
function visibleRuns(flow, runs) {
  return flow ? runs.filter((r) => r.status === "running" || (r.endedAt ?? r.lastActivityAt) >= flow.startedAt) : runs;
}
function pendingTasks(flow, runs) {
  if (!flow || flow.finished) return [];
  let started = new Set(runs.map((r) => normalize(r.description)));
  return flow.tasks.map((t, i) => ({ ...t, n: i + 1 })).filter((t) => !started.has(normalize(t.title)));
}
function viewFlow(flow, runs) {
  if (!flow) return null;
  let running = runs.filter((r) => r.status === "running").length, ratio = flow.finished ? 1 : flow.total ? flow.done / flow.total : 0, shownPhase = flow.phase === "plan" && running > 0 ? "delegate" : flow.phase, segments = [], total = flow.finished ? Math.max(flow.total, 1) : flow.total, byTitle = new Map(runs.map((r) => [normalize(r.description), r])), inFlight = flow.tasks.length ? flow.tasks.filter((t) => byTitle.get(normalize(t.title))?.status === "running").length : running;
  for (let i = 0; i < total; i++)
    flow.finished || i < flow.done ? segments.push("done") : i < flow.done + inFlight ? segments.push("running") : segments.push("todo");
  return { ...flow, ratio, running, shownPhase, segments };
}

// src/transcript.ts
init_define_LUFF_CREW_ASSETS();
import { open as open2, stat as stat2 } from "node:fs/promises";
var blocksOf = (line) => {
  let c = line.message?.content;
  return Array.isArray(c) ? c.filter((b) => b && typeof b == "object") : [];
}, timeOf = (line, fallback) => {
  let t = line.timestamp ? Date.parse(line.timestamp) : NaN;
  return Number.isFinite(t) ? t : fallback;
}, CHUNK = 1 << 20, JsonlTail = class {
  path;
  offset = 0;
  rest = Buffer.alloc(0);
  ino = 0;
  /** mtime of the file at the last read, in epoch ms. */
  mtimeMs = 0;
  size = 0;
  keep;
  /** `keep` skips JSON parsing of lines the caller has no use for. */
  constructor(path, keep) {
    this.path = path, this.keep = keep;
  }
  /** New complete lines since the last call; `reset` is true when the file was replaced. */
  async read() {
    let info;
    try {
      info = await stat2(this.path);
    } catch {
      return { lines: [], reset: !1 };
    }
    let reset = !1;
    if ((info.size < this.offset || this.ino && info.ino !== this.ino) && (this.offset = 0, this.rest = Buffer.alloc(0), reset = !0), this.ino = info.ino, this.mtimeMs = info.mtimeMs, this.size = info.size, info.size === this.offset) return { lines: [], reset };
    let fh = await open2(this.path, "r"), parts = [this.rest];
    try {
      for (; this.offset < info.size; ) {
        let len = Math.min(CHUNK, info.size - this.offset), buf = Buffer.alloc(len), { bytesRead } = await fh.read(buf, 0, len, this.offset);
        if (bytesRead <= 0) break;
        this.offset += bytesRead, parts.push(buf.subarray(0, bytesRead));
      }
    } finally {
      await fh.close();
    }
    let bytes = Buffer.concat(parts), cut = bytes.lastIndexOf(10);
    return cut < 0 ? (this.rest = bytes, { lines: [], reset }) : (this.rest = Buffer.from(bytes.subarray(cut + 1)), { lines: parseLines(bytes.subarray(0, cut).toString("utf8"), this.keep), reset });
  }
};
function parseLines(text, keep) {
  let out = [];
  for (let raw of text.split(`
`)) {
    let line = raw.trim();
    if (!(!line || line[0] !== "{") && !(keep && !keep(line)))
      try {
        out.push(JSON.parse(line));
      } catch {
      }
  }
  return out;
}
function taskNotifications(text) {
  let out = [], re = /<task-notification>([\s\S]*?)<\/task-notification>/g;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    let body = m[1] ?? "", taskId = /<task-id>\s*([^<\s]+)\s*<\/task-id>/.exec(body)?.[1], status = /<status>\s*([^<\s]+)\s*<\/status>/.exec(body)?.[1], toolUseId = /<tool-use-id>\s*([^<\s]+)\s*<\/tool-use-id>/.exec(body)?.[1];
    taskId && status && out.push(toolUseId ? { taskId, status, toolUseId } : { taskId, status });
  }
  return out;
}
function textOf(value, depth = 0) {
  return typeof value == "string" ? value : depth > 6 || !value || typeof value != "object" ? "" : Array.isArray(value) ? value.map((v) => textOf(v, depth + 1)).join(`
`) : Object.values(value).map((v) => textOf(v, depth + 1)).join(`
`);
}

// src/tracker.ts
function isOwnTool(name, kind) {
  return typeof name == "string" && /^mcp__.*luff[-_]?crew/i.test(name) && name.endsWith(`__${kind}`);
}
var AGENT_TOOLS = /* @__PURE__ */ new Set(["Agent", "Task"]), mainLineFilter = (raw) => raw.includes('"tool_use"') || raw.includes('"tool_result"') || raw.includes("task-notification") || /"isSidechain":\s*true/.test(raw), IDLE_DONE_MS = 2e4;
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value == "object") {
    let obj = value;
    return `{${Object.keys(obj).filter((k) => obj[k] !== void 0).sort().map((k) => `${JSON.stringify(k)}:${stableJson(obj[k])}`).join(",")}}`;
  }
  return JSON.stringify(value) ?? "null";
}
function progressKey(input) {
  let i = input ?? {};
  return stableJson({
    title: i.title?.trim() || void 0,
    total: typeof i.total == "number" ? Math.round(i.total) : void 0,
    done: typeof i.done == "number" ? Math.round(i.done) : void 0,
    phase: i.phase,
    finished: i.finished === !0 ? !0 : void 0,
    tasks: cleanTasks(i.tasks)
  });
}
var CrewTracker = class {
  follow;
  stallMs;
  now;
  bornAt;
  session = null;
  cwd;
  projectDir = null;
  main = null;
  polls = 0;
  spawns = /* @__PURE__ */ new Map();
  completions = /* @__PURE__ */ new Map();
  agents = /* @__PURE__ */ new Map();
  flowCalls = [];
  pending = [];
  dismissedAt = 0;
  constructor(opts) {
    this.follow = opts.follow, this.stallMs = opts.stallMs ?? 30 * 6e4, this.now = opts.now ?? Date.now, this.bornAt = this.now(), opts.follow.kind === "project" && (this.cwd = opts.follow.cwd);
  }
  get sessionInfo() {
    if (!this.session) return null;
    let info = { id: this.session.id, projectDir: this.session.projectDir, transcript: this.session.path };
    return this.cwd && (info.cwd = this.cwd), info;
  }
  /** Reads whatever the transcripts gained since the last call. True when anything changed. */
  async poll() {
    this.polls++;
    let changed = await this.pickSession();
    if (!this.session || !this.main) return changed;
    let { lines, reset } = await this.main.read();
    reset && (this.clearSessionState(), changed = !0);
    for (let line of lines) this.onMainLine(line);
    return lines.length && (changed = !0), await this.pollAgents() && (changed = !0), changed;
  }
  /** Records a `progress` call the server received directly, before its transcript line lands. */
  noteProgress(input) {
    this.pending.push({ at: this.now(), input, key: progressKey(input) });
  }
  /** Points the tracker at the session whose transcript holds this `progress` call, if it is not the current one. */
  async pinByProgressCall(input) {
    if (this.follow.kind !== "project") return !1;
    let dir = this.projectDir ?? await findProjectDir(this.follow.cwd);
    if (!dir) return !1;
    let want = progressKey(input), candidates = (await listSessions(dir)).slice(0, 6);
    for (let s of candidates)
      if (s.id !== this.session?.id && !(this.now() - s.mtimeMs > 10 * 6e4) && await containsProgressCall(s.path, want))
        return this.switchTo(s), !0;
    return !1;
  }
  /** Hides the current job's bar in views until another progress call arrives. */
  dismissFlow() {
    this.dismissedAt = this.now();
  }
  snapshot(lang2) {
    let now = this.now(), flow = this.currentFlow(), runs = visibleRuns(flow, this.runs(now)), shownFlow = flow && flow.updatedAt > this.dismissedAt ? flow : null;
    return {
      version: VERSION,
      now,
      lang: lang2,
      session: this.sessionInfo,
      flow: viewFlow(shownFlow, runs),
      agents: runs,
      planned: pendingTasks(shownFlow, runs),
      totals: totalsOf(runs, now)
    };
  }
  // ---------------------------------------------------------------------------
  // Session selection
  async pickSession() {
    let f = this.follow;
    if (f.kind === "transcript") {
      if (this.session || !existsSync2(f.path)) return !1;
      let s = await stat3(f.path);
      return this.switchTo({ id: basename2(f.path, ".jsonl"), path: f.path, projectDir: dirname(f.path), mtimeMs: s.mtimeMs, birthtimeMs: s.birthtimeMs }), !0;
    }
    if (this.session && this.polls % 3 !== 1) return !1;
    let newest;
    if (f.kind === "project") {
      if (this.projectDir ??= await findProjectDir(f.cwd), !this.projectDir) return !1;
      let all = await listSessions(this.projectDir);
      if (!this.session && f.preferSessionId) {
        let preferred = all.find((s) => s.id === f.preferSessionId);
        if (preferred)
          return this.switchTo(preferred), !0;
      }
      newest = all[0] ?? null;
    } else
      newest = await newestSessionAnywhere();
    if (!newest) return !1;
    if (!this.session)
      return this.switchTo(newest), !0;
    if (newest.id === this.session.id) return !1;
    let current = this.main?.mtimeMs ?? this.session.mtimeMs, quiet = this.now() - current > 6e4, bornLater = newest.birthtimeMs > this.bornAt && newest.mtimeMs > current;
    return newest.mtimeMs > current && (quiet || bornLater) ? (this.switchTo(newest), !0) : !1;
  }
  switchTo(s) {
    this.session = s, this.main = new JsonlTail(s.path, mainLineFilter), this.clearSessionState();
  }
  clearSessionState() {
    this.spawns.clear(), this.completions.clear(), this.agents.clear(), this.flowCalls = [], this.dismissedAt = 0;
  }
  // ---------------------------------------------------------------------------
  // Main thread
  onMainLine(line) {
    let at = timeOf(line, this.now());
    if (!this.cwd && line.cwd && (this.cwd = line.cwd), line.isSidechain && line.agentId) {
      this.onAgentLine(this.agentState(line.agentId), line);
      return;
    }
    if (line.type === "assistant")
      for (let b of blocksOf(line)) {
        if (b.type !== "tool_use" || !b.id) continue;
        let input = b.input ?? {};
        if (AGENT_TOOLS.has(b.name ?? "")) {
          let spawn3 = {
            toolUseId: b.id,
            description: String(input.description ?? "").trim(),
            type: String(input.subagent_type ?? "general-purpose"),
            at,
            background: input.run_in_background === !0
          };
          typeof input.model == "string" && (spawn3.model = input.model), this.spawns.set(b.id, spawn3);
        } else isOwnTool(b.name, "progress") && this.flowCalls.push({ id: b.id, at, input });
      }
    if (line.type === "user")
      for (let b of blocksOf(line)) {
        if (b.type !== "tool_result" || !b.tool_use_id) continue;
        let spawn3 = this.spawns.get(b.tool_use_id);
        if (!spawn3) continue;
        let r = line.toolUseResult && typeof line.toolUseResult == "object" ? line.toolUseResult : {};
        if (typeof r.agentId == "string" && (spawn3.agentId = r.agentId), r.status === "async_launched") {
          spawn3.background = !0;
          continue;
        }
        if (b.is_error) {
          let failure2 = /interrupt|cancel|abort/i.test(textOf(b.content)) ? "killed" : "error";
          this.completions.set(b.tool_use_id, { status: "failed", failure: failure2, at });
          continue;
        }
        this.completions.set(b.tool_use_id, { status: "done", at });
        let result = {};
        typeof r.resolvedModel == "string" && (result.model = r.resolvedModel), r.usage && typeof r.usage == "object" && (result.usage = r.usage), typeof r.totalDurationMs == "number" && (result.durationMs = r.totalDurationMs), spawn3.result = result;
      }
    let text = line.type === "queue-operation" || line.type === "user" || line.type === "system" ? textOf(line.content ?? line.message?.content) : "";
    if (text.includes("<task-notification>"))
      for (let n of taskNotifications(text)) {
        let status = n.status.toLowerCase(), completion = status === "completed" || status === "done" || status === "success" ? { status: "done", at } : { status: "failed", failure: /kill|stop|cancel/.test(status) ? "killed" : "error", at };
        status === "running" || status === "pending" || (this.completions.set(n.taskId, completion), n.toolUseId && this.completions.set(n.toolUseId, completion));
      }
  }
  // ---------------------------------------------------------------------------
  // Subagents
  agentState(id) {
    let a = this.agents.get(id);
    return a || (a = { id, metaChecked: 0, requests: /* @__PURE__ */ new Map(), model: "", lastAt: 0, contextTokens: 0 }, this.agents.set(id, a)), a;
  }
  async pollAgents() {
    if (!this.session) return !1;
    let dir = subagentsDir(this.session.projectDir, this.session.id), names = [];
    try {
      names = await readdir2(dir);
    } catch {
      return !1;
    }
    let changed = !1;
    for (let name of names) {
      let m = /^agent-(.+)\.jsonl$/.exec(name);
      if (!m?.[1]) continue;
      let a = this.agentState(m[1]);
      a.tail ??= new JsonlTail(join3(dir, name)), !a.meta && a.metaChecked < 5 && (a.metaChecked++, a.meta = await readMeta(join3(dir, `agent-${m[1]}.meta.json`)), a.meta && (changed = !0));
      let { lines, reset } = await a.tail.read();
      reset && (a.requests.clear(), a.step = void 0);
      for (let line of lines) this.onAgentLine(a, line);
      lines.length && (changed = !0);
    }
    return changed;
  }
  onAgentLine(a, line) {
    let at = timeOf(line, this.now());
    if (a.firstAt ??= at, a.lastAt = Math.max(a.lastAt, at), line.type === "user" && a.firstPrompt === void 0) {
      let text = textOf(line.message?.content).trim();
      text && (a.firstPrompt = text);
    }
    if (line.type !== "assistant" || !line.message) return;
    let msg = line.message;
    if (msg.model && msg.model !== "<synthetic>" && (a.model = msg.model), typeof line.effort == "string" && line.effort && (a.effort = line.effort), msg.stop_reason !== void 0 && (a.lastStop = msg.stop_reason), msg.usage && a.model) {
      let usage = msg.usage;
      a.requests.set(msg.id ?? line.uuid ?? `${at}`, { model: a.model, usage }), a.contextTokens = tokensOf(usage);
    }
    for (let b of blocksOf(line))
      b.type === "tool_use" && isOwnTool(b.name, "step") && (a.step = mergeStep(a.step, b.input));
  }
  // ---------------------------------------------------------------------------
  // Views
  /** Every run of the session, oldest first. */
  runs(now = this.now()) {
    let out = [], linked = /* @__PURE__ */ new Set();
    for (let a of this.agents.values()) {
      let toolUseId = a.meta?.toolUseId ?? [...this.spawns.values()].find((s) => s.agentId === a.id)?.toolUseId, spawn3 = toolUseId ? this.spawns.get(toolUseId) : void 0;
      toolUseId && linked.add(toolUseId);
      let tokens = 0, costUsd = 0;
      for (let r of a.requests.values())
        tokens += tokensOf(r.usage), costUsd += costOf(r.model, r.usage);
      let model = a.model || spawn3?.result?.model || spawn3?.model || "", startedAt = Math.min(spawn3?.at ?? 1 / 0, a.firstAt ?? 1 / 0, a.lastAt || 1 / 0), completion = this.completions.get(a.id) ?? (toolUseId ? this.completions.get(toolUseId) : void 0), { status, endedAt, failure: failure2 } = this.statusOf(completion, a, now), run = {
        id: a.id,
        type: a.meta?.agentType ?? spawn3?.type ?? "agent",
        description: a.meta?.description || spawn3?.description || clip(firstLine(a.firstPrompt ?? ""), 60) || a.id,
        model,
        status,
        background: spawn3?.background ?? a.meta?.requestShape === "background",
        startedAt: Number.isFinite(startedAt) ? startedAt : now,
        lastActivityAt: a.lastAt || now,
        contextTokens: a.contextTokens,
        contextMax: contextWindowOf(model),
        tokens,
        costUsd,
        requests: a.requests.size,
        round: 1,
        depth: a.meta?.spawnDepth ?? 1
      };
      toolUseId && (run.toolUseId = toolUseId), a.effort && (run.effort = a.effort), endedAt !== void 0 && (run.endedAt = endedAt), failure2 && (run.failure = failure2), a.step && (run.step = a.step), out.push(run);
    }
    for (let s of this.spawns.values()) {
      if (linked.has(s.toolUseId) || s.agentId && this.agents.has(s.agentId)) continue;
      let completion = this.completions.get(s.toolUseId) ?? (s.agentId ? this.completions.get(s.agentId) : void 0), usage = s.result?.usage, model = s.result?.model ?? s.model ?? "", stalled = !completion && now - s.at > this.stallMs, run = {
        id: s.agentId ?? s.toolUseId,
        toolUseId: s.toolUseId,
        type: s.type,
        description: s.description || s.type,
        model,
        status: completion?.status ?? (stalled ? "failed" : "running"),
        background: s.background,
        startedAt: s.at,
        lastActivityAt: completion?.at ?? s.at,
        contextTokens: usage ? tokensOf(usage) : 0,
        contextMax: contextWindowOf(model),
        tokens: usage ? tokensOf(usage) : 0,
        costUsd: usage && model ? costOf(model, usage) : 0,
        requests: 0,
        round: 1,
        depth: 1
      };
      completion && (run.endedAt = s.result?.durationMs ? s.at + s.result.durationMs : completion.at), completion?.failure ? run.failure = completion.failure : stalled && (run.failure = "stalled", run.endedAt = s.at), out.push(run);
    }
    out.sort((x, y) => x.startedAt - y.startedAt);
    let seen = /* @__PURE__ */ new Map();
    for (let r of out) {
      let key = normalize(r.description), n = (seen.get(key) ?? 0) + 1;
      seen.set(key, n), r.round = n;
    }
    return out;
  }
  statusOf(c, a, now) {
    let resumed = c && a.lastAt > c.at + 5e3 && a.lastStop !== "end_turn";
    if (c && !resumed) {
      let out = { status: c.status, endedAt: Math.max(c.at, a.lastAt) };
      return c.failure && (out.failure = c.failure), out;
    }
    let quietFor = now - Math.max(a.lastAt, a.tail?.mtimeMs ?? 0);
    return a.lastStop === "end_turn" && quietFor > IDLE_DONE_MS ? { status: "done", endedAt: a.lastAt } : a.lastAt && quietFor > this.stallMs ? { status: "failed", endedAt: a.lastAt, failure: "stalled" } : { status: "running" };
  }
  /** The job as reported through `progress`, from transcript lines plus calls not yet written there. */
  currentFlow() {
    let seen = new Set(this.flowCalls.map((c) => progressKey(c.input)));
    this.pending = this.pending.filter((p) => !seen.has(p.key) && this.now() - p.at < 5 * 6e4);
    let calls = [...this.flowCalls, ...this.pending].sort((x, y) => x.at - y.at), flow = null;
    for (let c of calls) flow = applyProgress(flow, c.input, c.at);
    return flow;
  }
};
function totalsOf(runs, now) {
  let t = { costUsd: 0, tokens: 0, timeMs: 0, running: 0, done: 0, failed: 0 };
  if (!runs.length) return t;
  let start = 1 / 0, end = 0;
  for (let r of runs)
    t.costUsd += r.costUsd, t.tokens += r.tokens, t[r.status === "running" ? "running" : r.status === "done" ? "done" : "failed"]++, start = Math.min(start, r.startedAt), end = Math.max(end, r.endedAt ?? Math.max(now, r.startedAt));
  return t.timeMs = Math.max(0, end - start), t;
}
function mergeStep(prev, input) {
  let i = input ?? {}, int2 = (v) => typeof v == "number" && Number.isFinite(v) ? Math.max(0, Math.round(v)) : void 0, total = int2(i.total) ?? prev?.total ?? 0, done = int2(i.done) ?? prev?.done ?? 0, out = { total, done: total ? Math.min(total, done) : done }, note = typeof i.note == "string" ? i.note.trim() : "";
  return note && (out.note = clip(note, 80)), out;
}
async function readMeta(path) {
  try {
    let v = JSON.parse(await readFile(path, "utf8"));
    return v && typeof v == "object" ? v : void 0;
  } catch {
    return;
  }
}
var firstLine = (s) => s.split(`
`).find((l) => l.trim())?.trim() ?? "";
async function containsProgressCall(path, want) {
  try {
    let fh = await open3(path, "r");
    try {
      let { size } = await fh.stat(), len = Math.min(size, 512 * 1024), buf = Buffer.alloc(len);
      await fh.read(buf, 0, len, size - len);
      for (let line of parseLines(buf.toString("utf8")))
        for (let b of blocksOf(line))
          if (b.type === "tool_use" && isOwnTool(b.name, "progress") && progressKey(b.input) === want) return !0;
    } finally {
      await fh.close();
    }
  } catch {
  }
  return !1;
}

// src/monitor.ts
var TICK_MS = 1e3, Monitor = class {
  tracker;
  cfg;
  lang;
  dashboard = null;
  starting = null;
  timer = null;
  polling = null;
  openedFor = /* @__PURE__ */ new Set();
  alwaysPoll;
  constructor(follow, cfg, opts = {}) {
    this.cfg = cfg, this.lang = resolveLang(cfg), this.tracker = new CrewTracker({ follow, stallMs: cfg.stallMinutes * 6e4 }), this.alwaysPoll = opts.alwaysPoll ?? !1;
  }
  /** One poll at a time: overlapping reads of the same file would double-count. */
  poll() {
    return this.polling ??= this.tracker.poll().finally(() => {
      this.polling = null;
    }), this.polling;
  }
  snapshot() {
    return this.tracker.snapshot(this.lang);
  }
  async refresh() {
    return await this.poll(), this.snapshot();
  }
  get dashboardUrl() {
    return this.dashboard?.url ?? null;
  }
  start() {
    this.timer || (this.timer = setInterval(() => {
      this.tick();
    }, TICK_MS), this.timer.unref());
  }
  async tick() {
    if (!(!((this.dashboard?.clients() ?? 0) > 0) && !this.alwaysPoll))
      try {
        await this.poll(), this.dashboard?.push();
      } catch (err) {
        process.stderr.write(`[luff-crew] poll failed: ${err.message}
`);
      }
  }
  async ensureDashboard() {
    return this.dashboard ? this.dashboard : (this.starting ??= startDashboard({
      port: this.cfg.port,
      lang: () => this.lang,
      snapshot: () => this.snapshot(),
      onDismiss: () => this.tracker.dismissFlow()
    }).then((d) => (this.dashboard = d, this.start(), d)), this.starting);
  }
  /** Opens the dashboard in a browser unless a page is already watching it. */
  async openDashboard(force = !1) {
    let d = await this.ensureDashboard();
    return !force && d.clients() > 0 ? { url: d.url, opened: !1 } : { url: d.url, opened: openBrowser(d.url) };
  }
  /** Auto-open once per job, when the config allows it. */
  async autoOpenFor(title) {
    if (!this.cfg.autoOpen || this.openedFor.has(title)) return this.dashboardUrl;
    this.openedFor.add(title);
    let { url } = await this.openDashboard();
    return url;
  }
  async stop() {
    this.timer && clearInterval(this.timer), this.timer = null, await this.dashboard?.close(), this.dashboard = null;
  }
};

// src/render-text.ts
init_define_LUFF_CREW_ASSETS();
function flowLabel(f, lang2) {
  let s = stringsFor(lang2);
  if (f.finished) return s.phase.close;
  if (f.shownPhase === "plan" || f.shownPhase === "design") return s.phase[f.shownPhase];
  let count = f.total ? `${f.done}/${f.total}` : `${f.running} ${s.busy}`;
  return `${f.shownPhase === "review" ? s.phase.review : s.phase.delegate} ${count}`;
}
var ctxPercent = (a) => a.contextMax ? Math.min(100, Math.round(a.contextTokens / a.contextMax * 100)) : 0, elapsed = (a, now) => (a.endedAt ?? Math.max(now, a.startedAt)) - a.startedAt, GLYPH = { running: "\u25CF", done: "\u2713", failed: "\u2717", planned: "\u25F7" };
function runLine(a, snap) {
  let s = stringsFor(snap.lang), model = [modelLabel(a.model), a.effort].filter(Boolean).join(" \xB7 "), extra = [
    a.round > 1 ? `${s.round} ${a.round}` : "",
    a.background ? s.background : "",
    a.status === "failed" ? s[a.failure ?? "error"] ?? s.error : ""
  ].filter(Boolean), steps = a.step?.total ? ` \xB7 ${a.step.done}/${a.step.total}${a.step.note ? " " + clip(a.step.note, 40) : ""}` : "", stats = `ctx ${ctxPercent(a)}% \xB7 ${fmtTokens(a.contextTokens)} \xB7 \u2248${fmtCost(a.costUsd)} \xB7 ${fmtTime(elapsed(a, snap.now))}`;
  return `  ${GLYPH[a.status]} ${clip(a.description, 60)}  [${a.type} \xB7 ${model}${extra.length ? " \xB7 " + extra.join(" \xB7 ") : ""}]${steps}
      ${stats}`;
}
function renderStatus(snap, dashboardUrl) {
  let s = stringsFor(snap.lang), out = [], f = snap.flow;
  f && out.push(`${f.title}  ${textBar(f.ratio, 16)}  ${flowLabel(f, snap.lang)}  ${Math.round(f.ratio * 100)}%`);
  let t = snap.totals;
  out.push(`${s.cost} \u2248${fmtCost(t.costUsd)} \xB7 ${s.tokens} ${fmtTokens(t.tokens)} \xB7 ${s.time} ${fmtTime(t.timeMs)}`);
  let running = snap.agents.filter((a) => a.status === "running").reverse(), finished = snap.agents.filter((a) => a.status !== "running").reverse();
  if (!snap.agents.length && !snap.planned.length && out.push("", snap.session ? s.empty : s.waiting), running.length && out.push("", `${s.running} \xB7 ${running.length}`, ...running.map((a) => runLine(a, snap))), finished.length && out.push("", `${s.finished} \xB7 ${finished.length}`, ...finished.map((a) => runLine(a, snap))), snap.planned.length) {
    out.push("", `${s.planned} \xB7 ${snap.planned.length}`);
    for (let p of snap.planned) {
      let meta2 = [p.agent, p.model ? modelLabel(p.model) : "", p.effort, p.after.length ? `${s.after} ${p.after.join(", ")}` : ""].filter(Boolean).join(" \xB7 ");
      out.push(`  ${GLYPH.planned} ${p.n}. ${clip(p.title, 60)}${meta2 ? `  [${meta2}]` : ""}`);
    }
  }
  return dashboardUrl && out.push("", `Dashboard: ${dashboardUrl}`), out.push(`(${s.estimate})`), out.join(`
`);
}
function renderStatusline(snap, opts) {
  let f = snap.flow, t = snap.totals;
  if (!f && !snap.agents.length) return "";
  let c = (code, text) => opts.color ? `\x1B[${code}m${text}\x1B[0m` : text, parts = [];
  if (f) {
    let color = f.finished ? "32" : "35";
    parts.push(`${c(color, "\u26F5")} ${clip(f.title, 28)} ${c(color, textBar(f.ratio, 10))} ${c("1", flowLabel(f, snap.lang))} ${c("2", Math.round(f.ratio * 100) + "%")}`);
  }
  let crew = snap.agents.length + snap.planned.length, live = t.running ? ` ${c("33", `${t.running}\u25CF`)}` : "";
  return parts.push(`${c("2", `\xD7${crew}`)}${live} ${c("2", `\u2248${fmtCost(t.costUsd)} \xB7 ${fmtTokens(t.tokens)} \xB7 ${fmtTime(t.timeMs)}`)}`), parts.join("  ");
}

// src/mcp.ts
var SERVER_NAME = "luff-crew", INSTRUCTIONS = 'Luff Crew tracks subagents (helper Claudes started with the Agent tool) and shows them on a live dashboard: model, effort, steps, context, estimated cost and time.\n\nWhen you split a job across subagents:\n1. After presenting the plan, call `progress` with a short title, the tasks (each title EXACTLY equal to the Agent `description` you will use) and phase "delegate".\n2. Each time you accept a finished task, call `progress` with the new `done` count. Switch `phase` to "review" while checking results.\n3. When everything is finished, call `progress` once with `finished: true`.\n\nTell each subagent, in its prompt, to call `step` right after reading its brief (done: 0, total: its plan in 3-8 steps) and again as each step finishes.\n\nUse `crew_status` to read the crew as text and `open_dashboard` when the user asks to see the agents panel.', taskSchema = object2({
  title: string2().min(1).describe("A few words; reuse it verbatim as the Agent tool description."),
  agent: string2().optional().describe('Subagent type it will run as, e.g. "general-purpose" or "Explore".'),
  model: string2().optional().describe('Model it is expected to run on, e.g. "opus", "sonnet", "haiku".'),
  effort: _enum(EFFORTS).optional().describe("Reasoning effort it will run with."),
  after: array(number2().int().positive()).optional().describe("Numbers (1-based) of the tasks this one waits for.")
});
async function runMcpServer() {
  let cfg = loadConfig(), cwd = process.env.CLAUDE_PROJECT_DIR || process.cwd(), follow = process.env.CLAUDE_CODE_SESSION_ID ? { kind: "project", cwd, preferSessionId: process.env.CLAUDE_CODE_SESSION_ID } : { kind: "project", cwd }, monitor = new Monitor(follow, cfg), server = new McpServer({ name: SERVER_NAME, title: "Luff Crew Monitor", version: VERSION }, { instructions: INSTRUCTIONS });
  server.registerTool(
    "progress",
    {
      title: "Report job progress",
      description: 'Report the progress of a multi-agent job to the Luff Crew dashboard and status line. Call it after presenting the plan (title, tasks, phase "delegate"), each time a task is accepted (done), when switching phase or re-planning (tasks), and once at the end with finished: true. Omitted fields keep their previous value; a new title starts a new job.',
      inputSchema: {
        title: string2().optional().describe("Short name of the overall job, a few words."),
        total: number2().int().min(0).optional().describe("Number of planned worker tasks. Defaults to the number of tasks."),
        done: number2().int().min(0).optional().describe("Number of tasks accepted so far."),
        phase: _enum(PHASES).optional().describe("Where the job is: plan, design, delegate, review or close."),
        finished: boolean2().optional().describe("True once the whole job is closed."),
        tasks: array(taskSchema).optional().describe("The planned worker tasks, in order, numbered from 1.")
      },
      annotations: { readOnlyHint: !1, destructiveHint: !1, idempotentHint: !0, openWorldHint: !1 }
    },
    async (args) => {
      let input = args;
      monitor.tracker.noteProgress(input), await monitor.tracker.pinByProgressCall(input).catch(() => !1);
      let snap = await monitor.refresh(), url = monitor.dashboardUrl;
      return snap.flow && input.tasks?.length && (url = await monitor.autoOpenFor(snap.flow.title).catch(() => url)), { content: [{ type: "text", text: `ok: ${snap.flow ? flowLabel(snap.flow, snap.lang) : "ok"}${url ? ` \xB7 dashboard ${url}` : ""}` }] };
    }
  ), server.registerTool(
    "step",
    {
      title: "Report own step",
      description: "For subagents: report progress on your own task to the Luff Crew dashboard. Right after reading your brief, call it with `total` (your plan in 3-8 steps) and `done: 0`; call it again as each step finishes. Cheap and silent: it only moves your progress bar.",
      inputSchema: {
        done: number2().int().min(0).describe("Steps finished so far."),
        total: number2().int().min(1).optional().describe("Steps planned; may change if the plan changes."),
        note: string2().max(120).optional().describe("The step in progress, a few words.")
      },
      annotations: { readOnlyHint: !1, destructiveHint: !1, idempotentHint: !0, openWorldHint: !1 }
    },
    // The call itself is recorded in the worker's transcript, which is where the
    // dashboard reads it from: that is how it knows which worker reported.
    async () => ({ content: [{ type: "text", text: "ok" }] })
  ), server.registerTool(
    "crew_status",
    {
      title: "Crew status",
      description: "Read the current crew as text: running, finished and planned subagents with model, effort, steps, context, estimated cost and time, plus job progress.",
      inputSchema: {},
      annotations: { readOnlyHint: !0, openWorldHint: !1 }
    },
    async () => {
      let snap = await monitor.refresh();
      return { content: [{ type: "text", text: renderStatus(snap, monitor.dashboardUrl ?? void 0) }] };
    }
  ), server.registerTool(
    "open_dashboard",
    {
      title: "Open agents dashboard",
      description: "Open the live Luff Crew dashboard in the browser and return its URL. Use it when the user asks to see the agents panel.",
      inputSchema: {
        open: boolean2().optional().describe("Set false to only start the dashboard and return its URL.")
      },
      annotations: { readOnlyHint: !0, openWorldHint: !1 }
    },
    async ({ open: open4 }) => {
      if (await monitor.poll(), open4 === !1)
        return { content: [{ type: "text", text: `Dashboard: ${(await monitor.ensureDashboard()).url}` }] };
      let { url, opened } = await monitor.openDashboard(!0);
      return {
        content: [{ type: "text", text: opened ? `Opened the dashboard: ${url}` : `Dashboard is at ${url} (could not open a browser here).` }]
      };
    }
  ), server.registerPrompt(
    "agents-info",
    { title: "Agents panel", description: "Open the live agents dashboard and summarise the crew." },
    () => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: "Call the luff-crew `open_dashboard` tool, then `crew_status`, and reply with the dashboard URL and a two-line summary of the crew (running, finished, estimated cost). Do not do anything else."
          }
        }
      ]
    })
  );
  let transport = new StdioServerTransport();
  await server.connect(transport);
  let shutdown = () => {
    monitor.stop().finally(() => process.exit(0));
  };
  process.stdin.on("close", shutdown), process.on("SIGINT", shutdown), process.on("SIGTERM", shutdown);
}

// src/setup.ts
init_define_LUFF_CREW_ASSETS();
import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync as existsSync3, mkdirSync, readFileSync as readFileSync3, rmSync, writeFileSync } from "node:fs";
import { join as join4, resolve } from "node:path";
import { fileURLToPath } from "node:url";
var MARKER = "<!-- luff-crew-monitor -->", SLASH_COMMAND = `---
description: Open the live agents dashboard (running, finished and planned subagents with cost and time)
---
${MARKER}
Call the \`open_dashboard\` tool of the luff-crew MCP server, then \`crew_status\`.
Reply with the dashboard URL and a two-line summary of the crew: how many are running and finished, and the estimated cost so far. Do nothing else.
`, STATUSLINE_TAG = "luff-crew-monitor statusline", log = (msg) => {
  process.stdout.write(msg + `
`);
}, quote = (s) => /^[\w@%+=:,./-]+$/.test(s) ? s : `'${s.replace(/'/g, "'\\''")}'`, NPX_SPEC = "github:tanwar-harsh/luff-crew-monitor";
function launchCommand() {
  let script = process.argv[1] ? resolve(process.argv[1]) : fileURLToPath(import.meta.url);
  if (/[\\/]_npx[\\/]/.test(script)) return ["npx", "-y", NPX_SPEC];
  let which = spawnSync(process.platform === "win32" ? "where" : "which", ["luff-crew-monitor"], { encoding: "utf8" });
  return which.status === 0 && which.stdout.trim() ? ["luff-crew-monitor"] : [process.execPath, script];
}
function claude(args) {
  let r = spawnSync("claude", args, { encoding: "utf8", shell: process.platform === "win32" });
  return { ok: r.status === 0, out: `${r.stdout ?? ""}${r.stderr ?? ""}`.trim() };
}
var hasClaudeCli = () => claude(["--version"]).ok;
function readSettings(path) {
  try {
    return JSON.parse(readFileSync3(path, "utf8"));
  } catch {
    return {};
  }
}
function setup(opts) {
  let cmd = opts.command?.length ? opts.command : launchCommand();
  if (log(`Luff Crew Monitor ${VERSION} setup
`), hasClaudeCli()) {
    let exists = claude(["mcp", "get", opts.name]).ok;
    if (exists && !opts.force)
      log(`\u2713 MCP server "${opts.name}" is already registered (use --force to replace it).`);
    else {
      exists && !opts.dryRun && claude(["mcp", "remove", opts.name, "--scope", opts.scope]);
      let args = ["mcp", "add", "--scope", opts.scope, opts.name, "--", ...cmd];
      if (opts.dryRun) log(`would run: claude ${args.map(quote).join(" ")}`);
      else {
        let r = claude(args);
        if (!r.ok)
          return log(`\u2717 claude mcp add failed:
${r.out}`), 1;
        log(`\u2713 Registered MCP server "${opts.name}" (${opts.scope} scope): ${cmd.map(quote).join(" ")}`);
      }
    }
  } else
    log("! The `claude` CLI was not found on PATH. Add this to your MCP config by hand:\n"), log(JSON.stringify({ mcpServers: { [opts.name]: { command: cmd[0], args: cmd.slice(1) } } }, null, 2) + `
`);
  if (opts.slashCommand) {
    let dir = join4(claudeDir(), "commands"), file = join4(dir, "agents-info.md"), existing = existsSync3(file) ? readFileSync3(file, "utf8") : null;
    existing !== null && !existing.includes(MARKER) ? log(`! ${file} exists and is not ours: left as is.`) : opts.dryRun ? log(`would write ${file}`) : (mkdirSync(dir, { recursive: !0 }), writeFileSync(file, SLASH_COMMAND), log(`\u2713 Added the /agents-info command (${file}).`));
  }
  if (opts.statusline) {
    let path = join4(claudeDir(), "settings.json"), settings = readSettings(path), current = settings.statusLine, self = cmd.map(quote).join(" ");
    if (current?.command?.includes(STATUSLINE_TAG)) log("\u2713 The status line already includes Luff Crew.");
    else {
      let command = current?.command ? `${self} statusline --wrap ${quote(current.command)}` : `${self} statusline`;
      opts.dryRun ? log(`would set statusLine.command to: ${command}`) : (existsSync3(path) && copyFileSync(path, `${path}.luff-crew.bak`), settings.statusLine = { ...current ?? {}, type: "command", command }, writeFileSync(path, JSON.stringify(settings, null, 2) + `
`), log(`\u2713 Status line set${current?.command ? " (your previous one still runs first)" : ""}. Backup: ${path}.luff-crew.bak`));
    }
  }
  return log(`
Next:
  1. Restart Claude Code (or run /mcp) so it picks up the server.
  2. Give Claude a job big enough for a few subagents, then type /agents-info.
Settings: ${configPath()} (port ${DEFAULTS.port}, language auto, autoOpen on).`), 0;
}
function uninstall(opts) {
  if (hasClaudeCli()) {
    let r = claude(["mcp", "remove", opts.name, "--scope", opts.scope]);
    log(r.ok ? `\u2713 Removed MCP server "${opts.name}".` : `- MCP server "${opts.name}" was not registered in ${opts.scope} scope.`);
  }
  let file = join4(claudeDir(), "commands", "agents-info.md");
  existsSync3(file) && readFileSync3(file, "utf8").includes(MARKER) && (rmSync(file), log("\u2713 Removed the /agents-info command."));
  let path = join4(claudeDir(), "settings.json"), settings = readSettings(path), line = settings.statusLine;
  if (line?.command?.includes(STATUSLINE_TAG)) {
    let wrapped = /--wrap\s+('(?:[^']|'\\'')*'|\S+)\s*$/.exec(line.command)?.[1];
    wrapped ? settings.statusLine = { ...line, command: wrapped.startsWith("'") ? wrapped.slice(1, -1).replace(/'\\''/g, "'") : wrapped } : delete settings.statusLine, writeFileSync(path, JSON.stringify(settings, null, 2) + `
`), log(wrapped ? "\u2713 Restored your previous status line." : "\u2713 Removed the Luff Crew status line.");
  }
  return 0;
}
async function doctor() {
  let problems = 0, ok = (m) => log(`\u2713 ${m}`), bad = (m) => {
    problems++, log(`\u2717 ${m}`);
  }, [major = 0, minor = 0] = process.versions.node.split(".").map(Number);
  major > 18 || major === 18 && minor >= 17 ? ok(`Node ${process.versions.node}`) : bad(`Node ${process.versions.node}: 18.17 or newer is required`);
  let cli = claude(["--version"]);
  cli.ok ? ok(`Claude Code ${cli.out.split(`
`)[0]}`) : bad("`claude` CLI not found on PATH (the dashboard still works; setup must be done by hand)"), cli.ok && (claude(["mcp", "get", SERVER_NAME]).ok ? ok(`MCP server "${SERVER_NAME}" is registered`) : log(`- MCP server "${SERVER_NAME}" is not registered via \`claude mcp\` (fine if you installed the plugin). Run: luff-crew-monitor setup`));
  let dir = claudeDir();
  existsSync3(join4(dir, "projects")) ? ok(`Transcripts folder: ${join4(dir, "projects")}`) : bad(`No transcripts folder at ${join4(dir, "projects")}: has Claude Code run on this machine?`);
  let project = await findProjectDir(process.cwd());
  if (project) {
    let sessions = await listSessions(project);
    ok(`This folder has ${sessions.length} Claude Code session(s)${sessions[0] ? `, latest ${sessions[0].id.slice(0, 8)}` : ""}`);
  } else log(`- No Claude Code sessions for ${process.cwd()} yet (normal before the first run here).`);
  let cfg = loadConfig();
  return ok(`Config: ${existsSync3(configPath()) ? configPath() : "defaults"} (port ${cfg.port}, language ${cfg.language}, autoOpen ${cfg.autoOpen})`), log(problems ? `
${problems} problem(s) found.` : `
All good.`), problems ? 1 : 0;
}

// src/statusline.ts
init_define_LUFF_CREW_ASSETS();
import { spawn as spawn2 } from "node:child_process";
async function readStdin(timeoutMs) {
  return process.stdin.isTTY ? "" : new Promise((resolve3) => {
    let data = "", done = () => resolve3(data), timer = setTimeout(done, timeoutMs);
    process.stdin.setEncoding("utf8"), process.stdin.on("data", (chunk) => data += chunk), process.stdin.on("end", () => {
      clearTimeout(timer), done();
    });
  });
}
function runWrapped(command, input) {
  return new Promise((resolve3) => {
    let child = spawn2(command, { shell: !0, stdio: ["pipe", "pipe", "ignore"] }), out = "", timer = setTimeout(() => {
      child.kill(), resolve3(out);
    }, 4e3);
    child.stdout.setEncoding("utf8"), child.stdout.on("data", (c) => out += c), child.on("close", () => {
      clearTimeout(timer), resolve3(out);
    }), child.on("error", () => {
      clearTimeout(timer), resolve3(out);
    }), child.stdin.on("error", () => {
    }), child.stdin.end(input);
  });
}
async function runStatusline(opts) {
  let raw = await readStdin(1500), wrapped = opts.wrap ? runWrapped(opts.wrap, raw) : Promise.resolve(""), ours = "";
  try {
    let input = raw ? JSON.parse(raw) : {};
    if (input.transcript_path) {
      let cfg = loadConfig(), tracker = new CrewTracker({ follow: { kind: "transcript", path: input.transcript_path }, stallMs: cfg.stallMinutes * 6e4 });
      await tracker.poll(), ours = renderStatusline(tracker.snapshot(resolveLang(cfg)), { color: opts.color });
    }
  } catch {
  }
  let theirs = (await wrapped).replace(/\s+$/, "");
  process.stdout.write([theirs, ours].filter(Boolean).join("  ") + `
`);
}

// src/cli.ts
var HELP = `luff-crew-monitor ${VERSION}
Live dashboard of Claude Code subagents: model, effort, steps, context, estimated cost and time.

Usage
  luff-crew-monitor                 Run as an MCP server over stdio (how Claude Code starts it)
  luff-crew-monitor setup           Register with Claude Code and add the /agents-info command
      --scope user|project|local      Where to register (default: user)
      --statusline                    Also add the job bar to Claude Code's status line
      --force                         Replace an existing registration
      --dry-run                       Show what would change
  luff-crew-monitor dashboard       Open the dashboard without Claude (follows the latest session)
      --project <dir>                 Follow the sessions of this folder instead
      --session <id>                  Follow one session of that folder
      --port <n>  --no-open
  luff-crew-monitor status          Print the crew once as text (same options as dashboard)
  luff-crew-monitor statusline      Status line command; reads Claude Code's JSON on stdin
      --wrap "<command>"              Run your existing status line first and append to it
      --no-color
  luff-crew-monitor doctor          Check the installation
  luff-crew-monitor uninstall       Undo setup

Config: ~/.luff-crew/config.json or LUFF_CREW_PORT, LUFF_CREW_LANG, LUFF_CREW_AUTO_OPEN.
`;
function followFrom(values) {
  if (values.project || values.session) {
    let cwd = resolve2(values.project ?? process.cwd());
    return values.session ? { kind: "project", cwd, preferSessionId: values.session } : { kind: "project", cwd };
  }
  return { kind: "anywhere" };
}
async function main(argv) {
  let [cmd, ...rest] = argv;
  if (cmd === "--version" || cmd === "-v")
    return process.stdout.write(VERSION + `
`), 0;
  if (cmd === "--help" || cmd === "-h" || cmd === "help")
    return process.stdout.write(HELP), 0;
  if (cmd === void 0 || cmd === "serve" || cmd === "mcp")
    return cmd === void 0 && process.stdin.isTTY ? (process.stdout.write(HELP), 0) : (await runMcpServer(), -1);
  if (cmd === "setup" || cmd === "uninstall") {
    let { values } = parseArgs({
      args: rest,
      options: {
        scope: { type: "string", default: "user" },
        name: { type: "string", default: SERVER_NAME },
        statusline: { type: "boolean", default: !1 },
        "no-command": { type: "boolean", default: !1 },
        force: { type: "boolean", default: !1 },
        "dry-run": { type: "boolean", default: !1 }
      }
    }), scope = values.scope === "project" || values.scope === "local" ? values.scope : "user";
    return cmd === "uninstall" ? uninstall({ scope, name: values.name }) : setup({
      scope,
      name: values.name,
      statusline: values.statusline,
      slashCommand: !values["no-command"],
      dryRun: values["dry-run"],
      force: values.force
    });
  }
  if (cmd === "doctor") return doctor();
  if (cmd === "statusline") {
    let { values } = parseArgs({
      args: rest,
      options: { wrap: { type: "string" }, "no-color": { type: "boolean", default: !1 } }
    });
    return await runStatusline({ ...values.wrap ? { wrap: values.wrap } : {}, color: !values["no-color"] && !process.env.NO_COLOR }), 0;
  }
  if (cmd === "dashboard" || cmd === "status") {
    let { values } = parseArgs({
      args: rest,
      options: {
        project: { type: "string" },
        session: { type: "string" },
        port: { type: "string" },
        "no-open": { type: "boolean", default: !1 }
      }
    }), cfg = loadConfig();
    values.port && (cfg.port = Number(values.port) || cfg.port);
    let monitor = new Monitor(followFrom(values), cfg, { alwaysPoll: cmd === "dashboard" });
    if (cmd === "status")
      return process.stdout.write(renderStatus(await monitor.refresh()) + `
`), 0;
    await monitor.poll();
    let d = await monitor.ensureDashboard();
    process.stdout.write(`Luff Crew dashboard: ${d.url}
Press Ctrl+C to stop.
`), values["no-open"] || await monitor.openDashboard(!0);
    let stop = () => {
      monitor.stop().finally(() => process.exit(0));
    };
    return process.on("SIGINT", stop), process.on("SIGTERM", stop), -1;
  }
  return process.stderr.write(`Unknown command: ${cmd}

${HELP}`), 2;
}
main(process.argv.slice(2)).then(
  (code) => {
    code >= 0 && (process.exitCode = code);
  },
  (err) => {
    process.stderr.write(`luff-crew-monitor: ${err instanceof Error ? err.stack ?? err.message : String(err)}
`), process.exitCode = 1;
  }
);
