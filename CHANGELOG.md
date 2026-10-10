# Changelog

## 1.0.0 — 2026-10-10

First release.

- MCP server with `progress`, `step`, `crew_status` and `open_dashboard` tools and an `agents-info` prompt.
- Live dashboard: job bar with per-task segments, cost/tokens/time totals, running/finished/planned subagents with model, effort, steps, context and estimated cost; compact view; light/dark; English and Russian.
- Transcript tracker: foreground and background runs, task notifications, retries as rounds, stall detection, older inline-sidechain transcripts.
- Cost estimates from list prices, including 5-minute vs 1-hour cache writes and Haiku 5.5's long-prompt tier.
- `setup`, `uninstall`, `doctor`, `dashboard`, `status` and `statusline` commands; Claude Code plugin and marketplace manifests.
