import { dsMeta } from '../../content/ds0122020'
import { DsBikeMark } from '../../diagrams/dsDiagrams'
import { useDeckNav } from '../../hooks/useDeckNav'

export function DsPortada() {
  const { go } = useDeckNav()
  return (
    <div className="layout cover">
      <div className="cover-grid">
        <div>
          <p className="eyebrow">Perú · Poder Ejecutivo · MTC</p>
          <h1>{dsMeta.titulo}</h1>
          <div className="cover-meta">
            <span className="pill">D.S. N.º {dsMeta.numero}</span>
            <span className="pill">Publicado {dsMeta.fechaPublicacion}</span>
            <span className="pill">{dsMeta.fuente}</span>
          </div>
          <p className="lede">
            Cómo se ejecuta la Ley 30936: educación, trabajo, infraestructura y bicicleta pública,
            más los cambios al tránsito y a la gestión vial.
          </p>
          <button type="button" className="bridge-btn" onClick={() => go('ley-portada')}>
            Ver la Ley 30936
          </button>
        </div>
        <DsBikeMark />
      </div>
    </div>
  )
}
