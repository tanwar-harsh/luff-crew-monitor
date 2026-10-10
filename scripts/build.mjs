// Bundles the CLI and its dependencies into one dependency-free file, so the
// package runs from a git checkout, a Claude Code plugin install, or npx alike.
import { chmodSync, readFileSync, statSync } from 'node:fs'
import { build } from 'esbuild'

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const read = p => readFileSync(new URL(p, import.meta.url), 'utf8')
const outfile = 'dist/luff-crew.mjs'

await build({
  entryPoints: ['src/cli.ts'],
  outfile,
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node18.17',
  minifySyntax: true,
  legalComments: 'eof',
  banner: {
    // Some bundled dependencies still call require(); give them one.
    js: "#!/usr/bin/env node\nimport { createRequire as __luffCreateRequire } from 'node:module';\nconst require = __luffCreateRequire(import.meta.url);",
  },
  define: {
    __LUFF_CREW_VERSION__: JSON.stringify(pkg.version),
    __LUFF_CREW_ASSETS__: JSON.stringify({ css: read('../src/dashboard/client.css'), js: read('../src/dashboard/client.js') }),
  },
  logLevel: 'warning',
})

chmodSync(outfile, 0o755)
console.log(`built ${outfile} (${Math.round(statSync(outfile).size / 1024)} KB, v${pkg.version})`)
