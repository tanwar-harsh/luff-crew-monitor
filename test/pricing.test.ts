import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'

import { contextWindowOf, costOf, FALLBACK_PRICE, modelLabel, priceOf, setPriceOverrides, tokensOf } from '../src/pricing.ts'

const close = (a: number, b: number): void => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≠ ${b}`)

describe('costOf', () => {
  afterEach(() => setPriceOverrides(undefined))

  it('prices every token class for Opus 5.5', () => {
    // 1M of each: 4 + 5 (5m write) + 0.2 + 20
    close(
      costOf('claude-opus-5-5', { input_tokens: 1e6, output_tokens: 1e6, cache_read_input_tokens: 1e6, cache_creation_input_tokens: 1e6 }),
      29.2,
    )
  })

  it('bills 1h cache writes at their own rate', () => {
    const u = { cache_creation_input_tokens: 1e6, cache_creation: { ephemeral_1h_input_tokens: 4e5, ephemeral_5m_input_tokens: 6e5 } }
    close(costOf('claude-sonnet-5', u), 0.6 * 2.5 + 0.4 * 4)
  })

  it('switches Haiku 5.5 to its long-prompt tier past 100k prompt tokens', () => {
    assert.equal(priceOf('claude-haiku-5-5', { input_tokens: 50_000 })[0], 0.1)
    assert.equal(priceOf('claude-haiku-5-5', { input_tokens: 10, cache_read_input_tokens: 150_000 })[0], 0.5)
  })

  it('tells model generations apart', () => {
    assert.equal(priceOf('claude-opus-4-1-20250805')[4], 75)
    assert.equal(priceOf('claude-opus-4-6')[4], 25)
    assert.equal(priceOf('claude-sonnet-5-5')[3], 0.1)
    assert.equal(priceOf('claude-fable-5-1')[3], 0.25)
    assert.equal(priceOf('claude-fable-5')[3], 1)
    assert.deepEqual(priceOf('some-other-model'), FALLBACK_PRICE)
  })

  it('honours config overrides first', () => {
    setPriceOverrides({ 'opus-5-5': [1, 1, 1, 1, 1], bad: [1, 2] })
    close(costOf('claude-opus-5-5', { input_tokens: 1e6 }), 1)
  })

  it('counts every billed token', () => {
    assert.equal(tokensOf({ input_tokens: 1, output_tokens: 2, cache_read_input_tokens: 3, cache_creation_input_tokens: 4 }), 10)
  })
})

describe('model helpers', () => {
  it('formats model ids', () => {
    assert.equal(modelLabel('claude-opus-5-5'), 'Opus 5.5')
    assert.equal(modelLabel('claude-sonnet-5'), 'Sonnet 5')
    assert.equal(modelLabel('claude-sonnet-4-5-20250929'), 'Sonnet 4.5')
    assert.equal(modelLabel('opus'), 'Opus')
    assert.equal(modelLabel(''), '—')
  })

  it('sizes context windows by generation', () => {
    assert.equal(contextWindowOf('claude-opus-5-5'), 1_000_000)
    assert.equal(contextWindowOf('claude-haiku-5-5'), 200_000)
    assert.equal(contextWindowOf('claude-sonnet-4-5-20250929'), 200_000)
    assert.equal(contextWindowOf('claude-sonnet-4-5[1m]'), 1_000_000)
  })
})
