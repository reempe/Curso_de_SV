import { leyMeta } from '../content/ley30936'
import { BikeMark } from '../diagrams/lawDiagrams'
import { useDeckNav } from '../hooks/useDeckNav'

export function Portada() {
  const { go } = useDeckNav()
  return (
    <div className="layout cover">
      <div className="cover-grid">
        <div>
          <p className="eyebrow">Perú · Congreso de la República</p>
          <h1>{leyMeta.titulo}</h1>
          <div className="cover-meta">
            <span className="pill">Ley N.º {leyMeta.numero}</span>
            <span className="pill">Publicada {leyMeta.fechaPublicacion}</span>
            <span className="pill">{leyMeta.fuente}</span>
          </div>
          <p className="lede">
            Promover y regular la bicicleta como transporte sostenible: más eficiente en la vía y
            más cuidadoso con el ambiente.
          </p>
          <button type="button" className="bridge-btn" onClick={() => go('ds-portada')}>
            Ver el reglamento (D.S. 012-2020-MTC)
          </button>
        </div>
        <BikeMark />
      </div>
    </div>
  )
}
