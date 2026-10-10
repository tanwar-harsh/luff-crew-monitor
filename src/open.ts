import { spawn } from 'node:child_process'

/** Opens a URL in the default browser. Never throws: failing to open is not fatal. */
export function openBrowser(url: string): boolean {
  if (!/^https?:\/\//.test(url)) return false
  const [cmd, args] =
    process.platform === 'darwin'
      ? ['open', [url]]
      : process.platform === 'win32'
        ? ['cmd', ['/c', 'start', '""', url.replace(/&/g, '^&')]]
        : ['xdg-open', [url]]
  try {
    const child = spawn(cmd, args as string[], { stdio: 'ignore', detached: true, windowsHide: true })
    child.on('error', () => {})
    child.unref()
    return true
  } catch {
    return false
  }
}
