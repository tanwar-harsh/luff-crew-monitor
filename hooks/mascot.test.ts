import { expect, test } from 'claude-code/testing'

import { crewSlots, lookOf, mascotCells, mascotSvg, TERM_MASCOT_H, TERM_MASCOT_W } from './draw.ts'

const flat = (slot: number, effort?: string): string =>
  mascotCells(slot, effort)
    .map(line => line.map(c => `${c.ch}${c.fg ?? ''}${c.bg ?? ''}`).join(''))
    .join('\n')

test('gives every member of a ten-agent job its own body color and look', () => {
  for (const base of [0, 5, 11]) {
    const looks = Array.from({ length: 10 }, (_, i) => lookOf(base + i))
    expect(new Set(looks.map(l => l.body)).size).toBe(10)
    expect(new Set(looks.map(l => JSON.stringify(l))).size).toBe(10)
    for (const l of looks) expect(l.hatColor === l.body).toBe(false)
  }
})

test('neighbouring members differ in hat, eyes and mouth', () => {
  for (let i = 0; i < 24; i++) {
    const a = lookOf(i)
    const b = lookOf(i + 1)
    expect(a.hat === b.hat).toBe(false)
    expect(a.eyes === b.eyes).toBe(false)
    expect(a.mouth === b.mouth).toBe(false)
  }
})

test('draws ten different pictures on both surfaces', () => {
  const slots = Array.from({ length: 10 }, (_, i) => i)
  expect(new Set(slots.map(s => mascotSvg(s, 'medium'))).size).toBe(10)
  expect(new Set(slots.map(s => flat(s, 'medium'))).size).toBe(10)
})

test('keeps the terminal mascot a fixed size', () => {
  for (let s = 0; s < 12; s++) {
    const lines = mascotCells(s, 'max', s)
    expect(lines.length).toBe(TERM_MASCOT_H)
    for (const line of lines) expect([...line.map(c => c.ch).join('')].length).toBe(TERM_MASCOT_W)
  }
})

test('keeps a member’s slot from planned to running, in plan order', () => {
  const slot = crewSlots('job', ['task a', 'task b', 'task c'])
  expect(slot('task b') - slot('task a')).toBe(1)
  expect(slot('task c') - slot('task a')).toBe(2)
  expect(slot('task b')).toBe(crewSlots('job', ['task a', 'task b', 'task c', 'extra'])('task b'))
})
