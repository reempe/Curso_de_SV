import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getJumpStack, popJump, pushJump, resetJumpStack } from './jumpStack.ts'

test('jump stack records slide links and returns in reverse', () => {
  resetJumpStack()
  pushJump('ley-art-2')
  pushJump('ds-art-5')
  assert.deepEqual([...getJumpStack()], ['ley-art-2', 'ds-art-5'])
  assert.equal(popJump(), 'ds-art-5')
  assert.equal(popJump(), 'ley-art-2')
  assert.equal(popJump(), undefined)
  assert.deepEqual([...getJumpStack()], [])
})
