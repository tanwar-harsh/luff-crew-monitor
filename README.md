# Luff Crew Monitor

**See what every helper Claude is doing, and what it costs, live.**

A Claude Code mod: it draws **inside Claude itself** (the desktop app, VS Code and the terminal). When Claude splits work across subagents, Luff Crew gives you a live panel of the whole crew: who's running, who's finished, what's still planned, and for each one the model, effort, step progress, context fill, estimated cost and time. A job bar sits above the prompt, and your 5-hour and weekly plan limits are always one glance away.

![Luff Crew dashboard](docs/dashboard.jpg)

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

Requires Claude Code 2.1.295 or newer (`claude update`).

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

| Tool | Who calls it | What it does |
| --- | --- | --- |
| `progress` | Orchestrator | Reports the job: `title`, `tasks[]` (`title`, `agent`, `model`, `effort`, `after`), `phase` (`plan`, `design`, `delegate`, `review`, `close`), `done`, `total`, `finished`. Omitted fields keep their value. A new title starts a new job. |
| `step` | Subagent | Reports its own steps: `done`, `total`, `note`. |
| `crew_status` | Anyone | Returns the crew as text. |
| `open_dashboard` | Anyone | Opens the dashboard and returns its URL. |
| `agents-info` *(prompt)* | You | Same as the slash command. |

Planned tasks match runs by title, so each task's `title` should equal the Agent tool `description` it's delegated with.

## Configure

Everything is optional. Settings live in `~/.luff-crew/config.json`; environment variables take precedence.

| Setting | Env var | Default | |
| --- | --- | --- | --- |
| `port` | `LUFF_CREW_PORT` | `7420` | First port to try. If it's taken, the next free one is used. |
| `language` | `LUFF_CREW_LANG` | `auto` | `en` or `ru`. `auto` follows Claude Code's `language` setting, then your locale. |
| `autoOpen` | `LUFF_CREW_AUTO_OPEN` | `true` | Open the browser when a job with a plan starts. |
| `stallMinutes` | `LUFF_CREW_STALL_MINUTES` | `30` | A run silent this long, with no end, is marked stalled. |
| `prices` | | built in | `{ "model-substring": [input, 5m write, 1h write, cache read, output] }` in USD per million tokens. |
| `contextWindows` | | built in | `{ "model-substring": tokens }` |

## CLI

```
luff-crew-monitor                 MCP server over stdio (what Claude Code runs)
luff-crew-monitor setup           Register + /agents-info  [--statusline] [--scope user|project|local] [--force] [--dry-run]
luff-crew-monitor dashboard       Dashboard without Claude, following the latest session  [--project <dir>] [--session <id>] [--port <n>] [--no-open]
luff-crew-monitor status          Print the crew once as text
luff-crew-monitor statusline      Status line command  [--wrap "<existing command>"] [--no-color]
luff-crew-monitor doctor          Check the installation
luff-crew-monitor uninstall       Undo setup
```

## How it works

Claude Code writes every session to `~/.claude/projects/<project>/<session>.jsonl`, and each subagent to its own transcript beside it. Luff Crew tails those files incrementally. It picks up Agent launches, results and background-task notifications from the main thread, and model, effort, token usage and `step` calls from each subagent. Then it streams a snapshot to the dashboard over server-sent events. The `progress` and `step` calls are recorded in those same transcripts, which is how a step gets attributed to the right worker.

## Good to know

- **Costs are estimates.** They're computed from token counts and public list prices (including cache reads, and 5-minute vs 1-hour cache writes), not taken from your bill. Subscription plans aren't billed per token at all.
- **Local only.** The server needs your machine's transcripts, so it runs locally (stdio). It can't be added as a claude.ai web connector, because a remote server can't see your local Claude Code sessions.
- **Claude Desktop chat** has no subagents. The tools work there, but the panel only shows job progress.
- The dashboard binds to `127.0.0.1`, rejects foreign `Host` headers and uses a strict CSP. Nothing leaves your machine.

## Development

```bash
npm install
```

```bash
npm run check
```

```bash
npm run demo
```

`check` runs typecheck, build and tests. `demo` runs a simulated crew, with no tokens spent. The bundle in `dist/` is committed so plugin installs need no build step. Run `npm run build` before committing source changes.

## License

[MIT](LICENSE) © 2026 Harsh Tanwar
