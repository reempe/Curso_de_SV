import { paperMeta } from '../../content/santos2010'
import { PaperBikeMark } from '../../diagrams/paperDiagrams'
import { useDeckNav } from '../../hooks/useDeckNav'

export function PaperPortada() {
  const { go } = useDeckNav()
  return (
    <div className="layout cover">
      <div className="cover-grid">
        <div>
          <p className="eyebrow">Evidencia internacional · Universidad de Oxford</p>
          <h1>{paperMeta.titulo}</h1>
          <div className="cover-meta">
            <span className="pill">{paperMeta.autores} ({paperMeta.anio})</span>
            <span className="pill">{paperMeta.seccion}</span>
            <span className="pill">{paperMeta.revista}</span>
          </div>
          <p className="lede">
            Por qué caminar y pedalear son la mejor opción para los trayectos cortos, y qué
            políticas —de infraestructura, salud, seguridad y economía— lo hacen posible. Cada lámina
            conecta la evidencia con la Ley 30936 y su reglamento.
          </p>
          <button type="button" className="bridge-btn" onClick={() => go('ley-portada')}>
            Ver la Ley 30936
          </button>
        </div>
        <PaperBikeMark />
      </div>
    </div>
  )
}
