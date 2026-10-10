# Changelog

## 1.6.3 — 2026-10-11

- **The browser view (`/agents-web`) shows the crew too**: every agent and planned task there is now the same crew member as in Claude's panel (its own color, hat, eyes, mouth and extra, with gear for its effort), instead of a look-alike per agent type. The looks live in one shared module, `src/crew.ts`, and the server sends each one drawn, so the panel and the browser can't drift apart.

## 1.6.2 — 2026-10-10

- **Job bar follows the crew**: the done count, bar segments and percent now advance as each subagent finishes, instead of waiting for the main agent's `progress` call. A reported `done` still wins when it is higher.
- **Cheaper protocol**: the injected instructions no longer ask the main agent to call `progress` after every accepted task, only to plan, switch phase and finish.

## 1.6.1 — 2026-10-10

Hardening fixes:

- **Config**: ports above 65535 and malformed `prices` / `contextWindows` rows in the config file are ignored instead of trusted.
- **Plans**: `after` numbers stay pointed at the right task when untitled tasks are dropped; task counts are capped at 100; a progress call that only repeats `finished: true` no longer starts a new job.
- **Setup**: a `settings.json` that fails to parse is left alone, with a message, instead of being overwritten; re-registering the MCP server clears every scope so it never registers twice; the final message prints the configured port.
- **Plan limits**: a null `used_percentage` no longer reads as 0%; a failed write cleans up its temp file; a forced usage scan waits for the running one and then scans again, so it sees fresh files.
- **Status line**: a timed-out command is killed with its children, and cut-off input counts as none.
- **Text**: token counts near a million read `1.0M`, not `1000k`; clipping never splits an emoji; Russian gets the right plural for "agents"; claude-3-opus and claude-3-haiku have prices.

## 1.6.0 — 2026-10-10

- **`stepReports` option** (`off` | `light` | `full`) sets how often subagents report their steps. Each report costs the subagent one more model request, the mod's main token cost. `light`, the new default, asks for two (start and halfway) instead of one per step; `off` drops step reports and the `step` tool entirely. Only the panel uses them: the main agent still gets each subagent's answer as before.

## 1.5.2 — 2026-10-10

- Terminal mascots about 40% smaller: an 8×6 pixel crew member, three lines tall like the row beside it and eight columns wide, with the same hats, eyes, mouths and gear. Panes from 40 columns show them.

## 1.5.1 — 2026-10-10

- Panel mascots are 40% smaller (44×38 to 27×24), drawn at native scale so every detail is kept.

## 1.5.0 — 2026-10-10

- **A crew, not clones**: every subagent gets its own mascot — body color, hat (bandana, sailor cap, tricorne, beanie, captain's hat, headphones, antennae, spiky hair, bow), eyes, mouth and an extra — kept from planned to running to done. What it holds still tells its effort. Ten agents of one type now look like ten different crew members.
- **Mascots in the terminal**: the terminal panel draws the same crew in colored half blocks on a 13×8 pixel grid, four lines tall, with two-pixel eyes, readable hats and the held gear in hand; legs walk and gear moves while an agent runs; narrow panes fall back to text.

## 1.4.1 — 2026-10-10

- Limit rings slightly larger and bolder so they read at a glance.
- README: screenshots refreshed to show the new job bar; plan-limit and how-it-works sections cover the rings.

## 1.4.0 — 2026-10-10

- **Plan-limit rings on the job bar**: the 5-hour and weekly limits move to the bar's right edge, beside the crew count, each drawn as a circular meter that turns amber past 70% and red past 90%. The terminal shows the same colors as text.

## 1.3.0 — 2026-10-10

- **The job bar follows every prompt**, not only subagent jobs: while Claude works it shows the prompt, a segment per model request, tool calls (and the one in flight), elapsed time and estimated cost; when the turn ends it reads Done or Stopped until the next prompt or ✕. A finished job gives way to the next prompt. The panel shows the same line for the current or last prompt.
- **Optional browser view**: `/agents-web` (or the panel's *Open in browser* button) starts the dashboard on `localhost` for this session and opens it once; `/agents-web stop` ends it, and it ends with the session. Nothing opens a browser unless you ask.
- `/agents-info` and `/agents-web` run immediately, even while Claude is mid-turn.
- Standalone MCP server: `autoOpen` now defaults to off, so the browser opens only through `open_dashboard`. `dashboard --session <id>` finds that session's transcript in any project folder.

## 1.2.0 — 2026-10-10

- Panel and job bar read correctly in every theme: all words are the app's own themed text, and only mascots and bars are drawn as SVG, in colors that work on light and dark.
- The protocol note tells subagents to load the `step` tool through ToolSearch when it is deferred.
- README: mod-first install, screenshots in light and dark, how it works.

## 1.1.1 — 2026-10-10

- Drop the MCP-era `/agents-info` command file so the mod's own command answers.

## 1.1.0 — 2026-10-10

- **Now a Claude Code mod**: the crew panel, the job bar above the prompt and the plan-limits meters draw inside Claude (desktop app, VS Code, terminal) instead of a browser. `/agents-info` toggles the panel. The tools are registered by the mod, and a system-prompt note teaches Claude the protocol.
- The standalone MCP server and browser dashboard remain for other MCP clients.

- Plan limits panel above the agents: 5-hour session and weekly usage (% used, reset countdown) as Claude Code reports them, plus local token, estimated cost and request totals for the same windows. Also in `crew_status`, `status` and `doctor`.
- The status line now records Claude Code's `rate_limits` to `~/.luff-crew/limits.json`.
- `setup --statusline` and `uninstall` recognise the status line when it was registered with absolute paths.

## 1.0.0 — 2026-10-10

First release.

- MCP server with `progress`, `step`, `crew_status` and `open_dashboard` tools and an `agents-info` prompt.
- Live dashboard: job bar with per-task segments, cost/tokens/time totals, running/finished/planned subagents with model, effort, steps, context and estimated cost; compact view; light/dark; English and Russian.
- Transcript tracker: foreground and background runs, task notifications, retries as rounds, stall detection, older inline-sidechain transcripts.
- Cost estimates from list prices, including 5-minute vs 1-hour cache writes and Haiku 5.5's long-prompt tier.
- `setup`, `uninstall`, `doctor`, `dashboard`, `status` and `statusline` commands; Claude Code plugin and marketplace manifests.
