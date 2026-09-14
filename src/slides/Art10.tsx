import { NormBridge } from '../components/NormBridge'
import { article, derechosCiclista } from '../content/ley30936'
import { leyBridges } from '../data/bridges'

export function Art10() {
  const data = article(10)
  return (
    <div className="layout">
      <h1>{data.titulo}</h1>
      <div className="rights-wrap">
        <div className="rights">
          {derechosCiclista.map((item) => (
            <article key={item.letra} className="right-card">
              <span className="letter">{item.letra}</span>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
        <div>
          <p className="note" style={{ marginBottom: '0.35rem' }}>
            Preferencia en la vía, según el literal d):
          </p>
          <div className="hierarchy" aria-label="Peatón, luego ciclista, luego vehículo">
            <div className="hier p">1 · Peatón</div>
            <div className="hier c">2 · Ciclista</div>
            <div className="hier v">3 · Vehículo</div>
          </div>
        </div>
      </div>
      <blockquote className="cita">
        <strong>Texto de la ley.</strong>
        {data.cita}
        <NormBridge bridges={leyBridges['ley-art-10'] ?? []} />
      </blockquote>
    </div>
  )
}
