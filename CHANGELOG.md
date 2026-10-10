# Changelog

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
