import type { ReactNode } from 'react'
import { NormBridge } from '../components/NormBridge'
import type { Bridge } from '../data/bridges'

type Props = {
  title: string
  points: string[]
  cita: string
  children: ReactNode
  reverse?: boolean
  citeLabel?: string
  bridges?: Bridge[]
}

export function ArticleFrame({
  title,
  points,
  cita,
  children,
  reverse,
  citeLabel = 'Texto de la ley.',
  bridges,
}: Props) {
  return (
    <div className="layout">
      <h1>{title}</h1>
      <div className={`split${reverse ? ' reverse' : ''}`}>
        {children}
        <div className="points-col">
          <ul className="points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          {bridges && bridges.length > 0 && <NormBridge bridges={bridges} />}
        </div>
      </div>
      <blockquote className="cita">
        <strong>{citeLabel}</strong>
        {cita}
      </blockquote>
    </div>
  )
}
