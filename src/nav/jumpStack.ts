type Listener = () => void

let stack: readonly string[] = []
const listeners = new Set<Listener>()

function emit() {
  for (const listener of listeners) listener()
}

export function subscribeJumpStack(listener: Listener): () => void {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

export function getJumpStack(): readonly string[] {
  return stack
}

export function pushJump(fromId: string): void {
  stack = [...stack, fromId]
  emit()
}

export function popJump(): string | undefined {
  if (stack.length === 0) return undefined
  const last = stack[stack.length - 1]
  stack = stack.slice(0, -1)
  emit()
  return last
}

export function resetJumpStack(): void {
  if (stack.length === 0) return
  stack = []
  emit()
}
