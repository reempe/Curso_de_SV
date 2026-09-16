import { NormBridge } from '../../components/NormBridge'
import { evidencia, fuente } from '../../content/santos2010'

export function PaperEvidence({ id }: { id: string }) {
  const data = evidencia(id)
  const f = fuente(data.fuenteId)
  return (
    <div className="layout">
      <h1>{data.titulo}</h1>
      <div className="split">
        <figure className="paper-figure">
          <div className="frame">
            <img src={data.figura} alt={data.figuraCaption} />
          </div>
          <figcaption>{data.figuraCaption}</figcaption>
        </figure>
        <div className="evidence-col">
          <blockquote className="cita quote">
            <span className="mark">“</span>
            {data.cita}
            <span className="who">
              — {f.autores} ({f.anio})
            </span>
          </blockquote>
          <p className="glosa">{data.glosa}</p>
          <div className="evidence-bridge">
            <NormBridge bridges={[{ label: data.bridgeLabel, to: data.bridgeTo }]} />
          </div>
        </div>
      </div>
      <div className="sources">
        <span className="sources-label">Documento</span>
        <ul>
          <li>
            <strong>
              {f.autores} ({f.anio}).
            </strong>{' '}
            {f.titulo}. <em>{f.publicacion}.</em>
          </li>
        </ul>
      </div>
    </div>
  )
}
