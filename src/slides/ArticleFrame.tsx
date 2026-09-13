import type { ReactNode } from 'react'

type Props = {
  title: string
  points: string[]
  cita: string
  children: ReactNode
  reverse?: boolean
}

export function ArticleFrame({ title, points, cita, children, reverse }: Props) {
  return (
    <div className="layout">
      <h1>{title}</h1>
      <div className={`split${reverse ? ' reverse' : ''}`}>
        {children}
        <ul className="points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
      <blockquote className="cita">
        <strong>Texto de la ley.</strong>
        {cita}
      </blockquote>
    </div>
  )
}
