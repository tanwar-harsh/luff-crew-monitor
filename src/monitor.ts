import type { Config, Lang } from './config.ts'
import { resolveLang } from './config.ts'
import { startDashboard } from './dashboard/server.ts'
import type { Dashboard } from './dashboard/server.ts'
import { openBrowser } from './open.ts'
import { CrewTracker } from './tracker.ts'
import type { FollowMode } from './tracker.ts'
import type { Snapshot } from './types.ts'

const TICK_MS = 1000

/** A tracker plus the dashboard that shows it, polled while anyone is watching. */
export class Monitor {
  readonly tracker: CrewTracker
  readonly cfg: Config
  readonly lang: Lang
  private dashboard: Dashboard | null = null
  private starting: Promise<Dashboard> | null = null
  private timer: NodeJS.Timeout | null = null
  private polling: Promise<boolean> | null = null
  private openedFor = new Set<string>()
  private alwaysPoll: boolean

  constructor(follow: FollowMode, cfg: Config, opts: { alwaysPoll?: boolean } = {}) {
    this.cfg = cfg
    this.lang = resolveLang(cfg)
    this.tracker = new CrewTracker({ follow, stallMs: cfg.stallMinutes * 60_000 })
    this.alwaysPoll = opts.alwaysPoll ?? false
  }

  /** One poll at a time: overlapping reads of the same file would double-count. */
  poll(): Promise<boolean> {
    this.polling ??= this.tracker.poll().finally(() => {
      this.polling = null
    })
    return this.polling
  }

  snapshot(): Snapshot {
    return this.tracker.snapshot(this.lang)
  }

  async refresh(): Promise<Snapshot> {
    await this.poll()
    return this.snapshot()
  }

  get dashboardUrl(): string | null {
    return this.dashboard?.url ?? null
  }

  start(): void {
    if (this.timer) return
    this.timer = setInterval(() => void this.tick(), TICK_MS)
    this.timer.unref()
  }

  private async tick(): Promise<void> {
    const watched = (this.dashboard?.clients() ?? 0) > 0
    if (!watched && !this.alwaysPoll) return
    try {
      await this.poll()
      this.dashboard?.push()
    } catch (err) {
      process.stderr.write(`[luff-crew] poll failed: ${(err as Error).message}\n`)
    }
  }

  async ensureDashboard(): Promise<Dashboard> {
    if (this.dashboard) return this.dashboard
    this.starting ??= startDashboard({
      port: this.cfg.port,
      lang: () => this.lang,
      snapshot: () => this.snapshot(),
      onDismiss: () => this.tracker.dismissFlow(),
    }).then(d => {
      this.dashboard = d
      this.start()
      return d
    })
    return this.starting
  }

  /** Opens the dashboard in a browser unless a page is already watching it. */
  async openDashboard(force = false): Promise<{ url: string; opened: boolean }> {
    const d = await this.ensureDashboard()
    if (!force && d.clients() > 0) return { url: d.url, opened: false }
    return { url: d.url, opened: openBrowser(d.url) }
  }

  /** Auto-open once per job, when the config allows it. */
  async autoOpenFor(title: string): Promise<string | null> {
    if (!this.cfg.autoOpen || this.openedFor.has(title)) return this.dashboardUrl
    this.openedFor.add(title)
    const { url } = await this.openDashboard()
    return url
  }

  async stop(): Promise<void> {
    if (this.timer) clearInterval(this.timer)
    this.timer = null
    await this.dashboard?.close()
    this.dashboard = null
  }
}
