import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'

import { loadConfig } from '../src/config.ts'
import { instructions } from '../src/mcp.ts'

describe('stepReports for the MCP server', () => {
  it('defaults to light and reads LUFF_CREW_STEP_REPORTS', () => {
    // An empty settings folder, so the person's own config.json plays no part.
    process.env.LUFF_CREW_HOME = mkdtempSync(join(tmpdir(), 'luff-crew-steps-'))
    assert.equal(loadConfig({}).stepReports, 'light')
    assert.equal(loadConfig({ LUFF_CREW_STEP_REPORTS: 'off' }).stepReports, 'off')
    assert.equal(loadConfig({ LUFF_CREW_STEP_REPORTS: 'loud' }).stepReports, 'light')
  })

  it('briefs subagents as the option says', () => {
    assert.match(instructions('light'), /at most twice/)
    assert.match(instructions('full'), /as each step finishes/)
    assert.match(instructions('off'), /Do not ask subagents to report steps/)
    assert.doesNotMatch(instructions('off'), /call `step`/)
  })
})
