import { useCallback, useEffect, useState, type RefObject } from 'react'

export function useFullscreen(target: RefObject<HTMLElement | null>) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const onChange = () => {
      setActive(document.fullscreenElement === target.current)
    }
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [target])

  const toggle = useCallback(async () => {
    const el = target.current
    if (!el) return
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
        return
      }
      await el.requestFullscreen()
    } catch {
      setActive(Boolean(document.fullscreenElement))
    }
  }, [target])

  return { active, toggle }
}
