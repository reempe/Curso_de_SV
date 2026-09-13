import { useMemo, useRef, type ReactNode } from 'react'
import { useDeckKeys } from '../hooks/useDeckKeys'
import { useDeckNav } from '../hooks/useDeckNav'
import { useFullscreen } from '../hooks/useFullscreen'

type Props = {
  children: ReactNode
}

export function SlideShell({ children }: Props) {
  const stageRef = useRef<HTMLDivElement>(null)
  const { current, index, total, goOffset, goFirst, goLast, goIndexSlide } = useDeckNav()
  const { active, toggle } = useFullscreen(stageRef)
  const pct = `${((index + 1) / total) * 100}%`

  const keys = useMemo(
    () => ({
      next: () => goOffset(1),
      prev: () => goOffset(-1),
      first: goFirst,
      last: goLast,
      index: goIndexSlide,
      fullscreen: () => {
        void toggle()
      },
    }),
    [goOffset, goFirst, goLast, goIndexSlide, toggle],
  )

  useDeckKeys(keys)

  return (
    <div className="stage" ref={stageRef}>
      <div className="slide-frame">
        <header className="chrome-top">
          <span className="ley-tag">Ley 30936</span>
          <span className="kicker">{current.kicker}</span>
          <div className="progress" aria-hidden="true">
            <i style={{ width: pct }} />
          </div>
          <span>
            {index + 1} / {total}
          </span>
        </header>
        <main className="slide-body">{children}</main>
        <footer className="chrome-bottom">
          <button
            type="button"
            className="chrome-btn"
            onClick={() => goOffset(-1)}
            disabled={index === 0}
          >
            Anterior
          </button>
          <div className="grow now">{current.short}</div>
          <button type="button" className="chrome-btn" onClick={goIndexSlide}>
            Índice
          </button>
          <button type="button" className="chrome-btn" onClick={() => void toggle()}>
            {active ? 'Salir de pantalla completa' : 'Pantalla completa'}
          </button>
          <button
            type="button"
            className="chrome-btn"
            onClick={() => goOffset(1)}
            disabled={index === total - 1}
          >
            Siguiente
          </button>
        </footer>
      </div>
      <p className="keys-hint">Atajos: ← → navegar · F pantalla completa · I índice · Home / End</p>
    </div>
  )
}
