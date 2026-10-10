declare const __LUFF_CREW_VERSION__: string | undefined

/** Injected by the bundler from package.json; `dev` when running from source. */
export const VERSION: string = typeof __LUFF_CREW_VERSION__ === 'string' ? __LUFF_CREW_VERSION__ : 'dev'
