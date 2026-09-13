import { useCallback, useEffect, useState } from 'react'
import { parseHash, slideIndex, slides } from '../data/slides'
import type { SlideMeta } from '../data/slides'

type DeckNav = {
  current: SlideMeta
  index: number
  total: number
  go: (id: string) => void
  goOffset: (delta: number) => void
  goFirst: () => void
  goLast: () => void
  goIndexSlide: () => void
}

export function useDeckNav(): DeckNav {
  const [id, setId] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const sync = () => setId(parseHash(window.location.hash))
    window.addEventListener('hashchange', sync)
    if (!window.location.hash) {
      window.location.hash = '#/portada'
    }
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const index = slideIndex(id)
  const current = slides[index] ?? slides[0]

  const go = useCallback((nextId: string) => {
    const slide = slides.find((item) => item.id === nextId)
    if (slide) window.location.hash = `#${slide.path}`
  }, [])

  const goOffset = useCallback((delta: number) => {
    const next = Math.max(0, Math.min(slides.length - 1, slideIndex(parseHash(window.location.hash)) + delta))
    const slide = slides[next]
    if (slide) window.location.hash = `#${slide.path}`
  }, [])

  const goFirst = useCallback(() => {
    window.location.hash = `#${slides[0].path}`
  }, [])

  const goLast = useCallback(() => {
    const last = slides[slides.length - 1]
    if (last) window.location.hash = `#${last.path}`
  }, [])

  const goIndexSlide = useCallback(() => {
    window.location.hash = '#/indice'
  }, [])

  return {
    current,
    index,
    total: slides.length,
    go,
    goOffset,
    goFirst,
    goLast,
    goIndexSlide,
  }
}
