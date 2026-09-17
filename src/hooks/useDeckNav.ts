import { useCallback, useEffect, useState, useSyncExternalStore } from 'react'
import {
  hubSlide,
  parseHash,
  slideById,
  slideIndexInDeck,
  slidesOf,
} from '../data/slides'
import type { DeckId, SlideMeta } from '../data/slides'
import { getJumpStack, popJump, pushJump, subscribeJumpStack } from '../nav/jumpStack'

type DeckNav = {
  current: SlideMeta
  deck: DeckId
  index: number
  total: number
  canGoBack: boolean
  backLabel: string | undefined
  go: (id: string) => void
  goOffset: (delta: number) => void
  goFirst: () => void
  goLast: () => void
  goIndexSlide: () => void
  goHub: () => void
  goBack: () => void
}

export function useDeckNav(): DeckNav {
  const [id, setId] = useState(() => parseHash(window.location.hash))
  const jumpStack = useSyncExternalStore(subscribeJumpStack, getJumpStack, getJumpStack)

  useEffect(() => {
    const sync = () => setId(parseHash(window.location.hash))
    window.addEventListener('hashchange', sync)
    if (!window.location.hash) {
      window.location.hash = `#${hubSlide.path}`
    }
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const current = slideById(id)
  const deckSlides = slidesOf(current.deck)
  const index = slideIndexInDeck(current.id)
  const backId = jumpStack[jumpStack.length - 1]
  const canGoBack = jumpStack.length > 0
  const backLabel = backId ? slideById(backId).short : undefined

  const go = useCallback((nextId: string) => {
    const here = slideById(parseHash(window.location.hash))
    const slide = slideById(nextId)
    if (here.id === slide.id) return
    pushJump(here.id)
    window.location.hash = `#${slide.path}`
  }, [])

  const goOffset = useCallback((delta: number) => {
    const here = slideById(parseHash(window.location.hash))
    if (here.deck === 'hub') return
    const list = slidesOf(here.deck)
    const next = Math.max(0, Math.min(list.length - 1, slideIndexInDeck(here.id) + delta))
    const slide = list[next]
    if (slide) window.location.hash = `#${slide.path}`
  }, [])

  const goFirst = useCallback(() => {
    const here = slideById(parseHash(window.location.hash))
    const first = slidesOf(here.deck)[0]
    if (first) window.location.hash = `#${first.path}`
  }, [])

  const goLast = useCallback(() => {
    const here = slideById(parseHash(window.location.hash))
    const list = slidesOf(here.deck)
    const last = list[list.length - 1]
    if (last) window.location.hash = `#${last.path}`
  }, [])

  const goIndexSlide = useCallback(() => {
    const here = slideById(parseHash(window.location.hash))
    if (here.deck === 'hub') {
      window.location.hash = `#${hubSlide.path}`
      return
    }
    const indexSlide = slidesOf(here.deck).find((item) => item.kind === 'index')
    if (indexSlide) window.location.hash = `#${indexSlide.path}`
  }, [])

  const goHub = useCallback(() => {
    window.location.hash = `#${hubSlide.path}`
  }, [])

  const goBack = useCallback(() => {
    const last = popJump()
    if (!last) return
    window.location.hash = `#${slideById(last).path}`
  }, [])

  return {
    current,
    deck: current.deck,
    index,
    total: deckSlides.length,
    canGoBack,
    backLabel,
    go,
    goOffset,
    goFirst,
    goLast,
    goIndexSlide,
    goHub,
    goBack,
  }
}
