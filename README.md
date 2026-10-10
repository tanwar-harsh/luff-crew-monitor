# Luff Crew Monitor

**See what every helper Claude is doing, and what it costs, live.**

A Claude Code mod: it draws **inside Claude itself** (the desktop app, VS Code and the terminal). When Claude splits work across subagents, Luff Crew gives you a live panel of the whole crew: who's running, who's finished, what's still planned, and for each one the model, effort, step progress, context fill, estimated cost and time. A job bar sits above the prompt, and your 5-hour and weekly plan limits are always one glance away.

<p align="center">
  <img src="docs/panel-light.png" alt="The Luff Crew panel and job bar in light theme" width="48%">
  <img src="docs/panel-dark.png" alt="The Luff Crew panel and job bar in dark theme" width="48%">
</p>

- **Job bar**: the job's title, phase, accepted tasks out of planned (one segment per task), percent done and crew size.
- **Agents panel**: Running, Finished and Planned sections with cost, token and time totals. Each subagent gets a pixel deckhand whose gear shows its effort level: mop, oar, spyglass, lantern or ship's wheel.
- **Worker steps**: subagents report their own steps (`2/5 · running tests`). A subagent that doesn't report shows its context fill in grey instead.
- **Works with any subagent**: built-in, custom or plugin agents, foreground or background, retries counted as rounds.
- **Plan limits**: your 5-hour session and weekly usage, with % used and when each resets, above the agents. Under each meter, the tokens, estimated cost and requests counted from your local transcripts for that window.
- **`/agents-info`** opens or closes the panel. It also opens on its own when a job with a plan starts, or when the first subagent of a session starts.
- **Private by design**: everything stays inside your Claude session. No server, no browser, no telemetry.

## Install

In a terminal, run:

```
/plugin install luff-crew-monitor --marketplace tanwar-harsh/luff-crew-monitor
```

Answer `y` to add the marketplace and pick the **user** scope. From then on it runs in every session: terminal, desktop app and VS Code. (The desktop app's Code tab can't run `/plugin`, but a mod installed from a terminal loads there too.)

Or, from your shell:

```bash
claude plugin marketplace add tanwar-harsh/luff-crew-monitor
```

```bash
claude plugin install luff-crew-monitor@luff-crew
```

Requires Claude Code 2.1.295 or newer. Run `claude update`; the desktop app updates itself.

### Without the mod: MCP server and browser dashboard

For other MCP clients, the same tracker also ships as a standalone MCP server with a browser dashboard on `localhost`:

```bash
npm install -g https://codeload.github.com/tanwar-harsh/luff-crew-monitor/tar.gz/refs/heads/main
```

```bash
luff-crew-monitor setup
```

Don't use both in Claude Code: the mod already provides the same tools.

## Use

1. Give Claude a job big enough to split across a few subagents.
2. Watch the job bar above the prompt, or type `/agents-info` to open the panel.

You don't need to prompt anything special. The mod adds a short note to Claude's system prompt so it reports progress and asks its subagents for steps. If you want the job bar to be precise, say "plan it as tasks for subagents" in your request.

## Plan limits

The panel at the top tracks the two Claude.ai plan windows: the **5-hour session** and the **weekly** limit.

- **% used and reset time** come straight from Claude Code (the same figures as its status line), after your first reply in a session. The meters turn amber past 70% and red past 90%.
- **Tokens, estimated cost and requests** for each window are counted from every model request the mod sees, across your sessions and their subagents.

Plan percentages exist only for Claude.ai subscriptions (Pro, Max, Team, Enterprise). With an API key, Bedrock or Vertex the meters stay empty and the local totals cover the last 5 hours and 7 days.

## Tools

The mod gives Claude two tools. The note it adds to the system prompt tells Claude when to call them.

| Tool | Who calls it | What it does |
| --- | --- | --- |
| `mcp__luff-crew-monitor__progress` | Orchestrator | Reports the job: `title`, `tasks[]` (`title`, `agent`, `model`, `effort`, `after`), `phase` (`plan`, `design`, `delegate`, `review`, `close`), `done`, `total`, `finished`. Omitted fields keep their value. A new title starts a new job. |
| `mcp__luff-crew-monitor__step` | Subagent | Reports its own steps: `done`, `total`, `note`. |

Planned tasks match runs by title, so each task's `title` should equal the Agent tool `description` it's delegated with.

## Configure

The only option is the panel language: `auto` (the default) follows Claude Code's `language` setting, then your locale. `en` and `ru` are available. Set it with `/plugin configure luff-crew-monitor@luff-crew`, or in `~/.claude/settings.json`:

```json
{ "pluginConfigs": { "luff-crew-monitor@luff-crew": { "options": { "language": "en" } } } }
```

## How it works

The mod is a hooks module (`hooks/register.tsx`) that Claude Code loads into every session:

- `agent.spawn`, `turn.step` and `turn.complete` give it each subagent's start, model, effort, token usage and end. Cost comes from token counts and the price table in `src/pricing.ts`.
- `session.measure` gives the 5-hour and weekly plan windows.
- `tool.call` answers `progress` and `step`. A subagent's call carries its loop's id, which is how its steps land on the right row.
- A `Pane` and an `AbovePrompt` render hook draw the panel and the bar. Words are the app's own themed text. Mascots and bars are small SVGs (desktop, VS Code) or text (terminal).

It needs no server, no browser and no network.

## Good to know

- **Costs are estimates.** They're computed from token counts and public list prices (including cache reads, and 5-minute vs 1-hour cache writes), not taken from your bill. Subscription plans aren't billed per token at all.
- **Plan limits** appear after Claude's first reply in a session. They're Claude.ai plans only.
- **Where it draws:** the desktop app's Code tab, the VS Code extension and the terminal. In the terminal's main screen the panel opens inline. In the fullscreen layout it docks as a sidebar.

## Standalone CLI and MCP server

The package also ships a CLI that reads Claude Code's transcripts directly. It's for other MCP clients, or a browser view outside Claude.

```
luff-crew-monitor                 MCP server over stdio
luff-crew-monitor setup           Register it with `claude mcp add`  [--statusline] [--scope user|project|local] [--force] [--dry-run]
luff-crew-monitor dashboard       Browser dashboard following the latest session  [--project <dir>] [--session <id>] [--port <n>] [--no-open]
luff-crew-monitor status          Print the crew once as text
luff-crew-monitor statusline      Status line command  [--wrap "<existing command>"] [--no-color]
luff-crew-monitor doctor          Check the installation
luff-crew-monitor uninstall       Undo setup
```

Its settings live in `~/.luff-crew/config.json`, or in `LUFF_CREW_PORT`, `LUFF_CREW_LANG`, `LUFF_CREW_AUTO_OPEN` and `LUFF_CREW_STALL_MINUTES`.

## Development

```bash
npm install
```

```bash
npm run check
```

```bash
claude plugin test .
```

```bash
claude plugin validate .
```

- `npm run check` runs the typecheck, the build and the Node tests (`test/*.spec.ts`).
- `claude plugin test .` runs the mod's own tests (`hooks/*.test.tsx`) against the engine, on the terminal and desktop surfaces.
- `node scripts/mod-preview.ts light|dark` renders the panel for the screenshots.
- To work on the mod live, start Claude Code with `claude --plugin-dir .`. Edits reload when a turn ends.
- The CLI bundle in `dist/` is committed so installs need no build step. Run `npm run build` before committing source changes.

## License

[MIT](LICENSE) © 2026 Harsh Tanwar
