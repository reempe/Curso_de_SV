import type { ReactNode } from 'react'
import { NormBridge } from '../components/NormBridge'
import type { Bridge } from '../data/bridges'
import { fuente } from '../content/santos2010'

type Props = {
  title: string
  points: string[]
  cita: string
  fuentes: string[]
  children: ReactNode
  bridges?: Bridge[]
}

export function PaperFrame({ title, points, cita, fuentes, children, bridges }: Props) {
  return (
    <div className="layout">
      <h1>{title}</h1>
      <div className="split">
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
      <div className="cita-row">
        <blockquote className="cita">
          <strong>Del paper.</strong>
          {cita}
        </blockquote>
        <div className="sources">
          <span className="sources-label">Fuentes del paquete</span>
          <ul>
            {fuentes.map((id) => {
              const f = fuente(id)
              return (
                <li key={id}>
                  <strong>
                    {f.autores} ({f.anio}).
                  </strong>{' '}
                  {f.titulo}. <em>{f.publicacion}.</em>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
