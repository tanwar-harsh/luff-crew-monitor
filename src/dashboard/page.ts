import { readFileSync } from 'node:fs'

import type { Lang } from '../config.ts'
import { stringsFor } from '../i18n.ts'
import { VERSION } from '../version.ts'

declare const __LUFF_CREW_ASSETS__: { css: string; js: string } | undefined

let cached: { css: string; js: string } | null = null

/** The bundle inlines the assets; from source they are read next to this file. */
function assets(): { css: string; js: string } {
  if (typeof __LUFF_CREW_ASSETS__ === 'object' && __LUFF_CREW_ASSETS__) return __LUFF_CREW_ASSETS__
  cached ??= {
    css: readFileSync(new URL('./client.css', import.meta.url), 'utf8'),
    js: readFileSync(new URL('./client.js', import.meta.url), 'utf8'),
  }
  return cached
}

/** JSON that is safe inside a <script> element. */
const scriptJson = (value: unknown): string =>
  JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')

export const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 22" shape-rendering="crispEdges"><rect x="7" y="9" width="10" height="1" fill="#5b6cf0"/><rect x="6" y="10" width="12" height="1" fill="#5b6cf0"/><rect x="5" y="11" width="14" height="6" fill="#5b6cf0"/><rect x="6" y="17" width="12" height="1" fill="#5b6cf0"/><rect x="8" y="12" width="2" height="2" fill="#fff"/><rect x="14" y="12" width="2" height="2" fill="#fff"/><rect x="6" y="5" width="12" height="3" fill="#1F2A4A"/><rect x="5" y="8" width="14" height="1" fill="#22201d"/><rect x="6" y="18" width="2" height="3" fill="#5b6cf0"/><rect x="16" y="18" width="2" height="3" fill="#5b6cf0"/></svg>`

export function renderPage(nonce: string, lang: Lang): string {
  const s = stringsFor(lang)
  const { css, js } = assets()
  const boot = { lang, strings: s, version: VERSION }
  return `<!doctype html>
<html lang="${lang}">
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
    <div class="brand">${FAVICON.replace('<svg ', '<svg width="22" height="19" ')}<span>Luff Crew</span></div>
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
      <div class="tile"><div class="k">${s.cost}</div><div class="v num" id="t-cost">≈$0.00</div></div>
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
    <span><span id="session"></span> · v${VERSION}</span>
  </footer>
</div>
<script type="application/json" id="boot">${scriptJson(boot)}</script>
<script nonce="${nonce}">${js}</script>
</body>
</html>`
}
