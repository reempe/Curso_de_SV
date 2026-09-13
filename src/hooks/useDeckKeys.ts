import { useEffect } from 'react'

type DeckKeys = {
  next: () => void
  prev: () => void
  first: () => void
  last: () => void
  index: () => void
  fullscreen: () => void
}

export function useDeckKeys(actions: DeckKeys) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return

      switch (event.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          event.preventDefault()
          actions.next()
          break
        case 'ArrowLeft':
        case 'PageUp':
          event.preventDefault()
          actions.prev()
          break
        case 'Home':
          event.preventDefault()
          actions.first()
          break
        case 'End':
          event.preventDefault()
          actions.last()
          break
        case 'i':
        case 'I':
          event.preventDefault()
          actions.index()
          break
        case 'f':
        case 'F':
          event.preventDefault()
          void actions.fullscreen()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [actions])
}
