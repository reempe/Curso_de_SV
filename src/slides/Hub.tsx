import { leyMeta } from '../content/ley30936'
import { dsMeta } from '../content/ds0122020'
import { paperMeta } from '../content/santos2010'
import { BikeMark } from '../diagrams/lawDiagrams'
import { DsBikeMark } from '../diagrams/dsDiagrams'
import { PaperBikeMark } from '../diagrams/paperDiagrams'
import { useDeckNav } from '../hooks/useDeckNav'

export function Hub() {
  const { go } = useDeckNav()
  return (
    <div className="layout cover">
      <div className="hub">
        <div>
          <p className="eyebrow">Curso de movilidad sostenible</p>
          <h1>Dos normas y la evidencia que las respalda</h1>
          <p className="lede">
            Recorra la ley, su reglamento o la evidencia internacional del paper, o salte al tema que
            va a dictar. Las flechas no mezclan un mazo con otro.
          </p>
        </div>
        <div className="hub-cards">
          <button type="button" className="hub-card" onClick={() => go('ley-portada')}>
            <BikeMark />
            <span className="n">Ley N.º {leyMeta.numero}</span>
            <span className="t">{leyMeta.titulo}</span>
            <span className="note">Publicada {leyMeta.fechaPublicacion}</span>
          </button>
          <button type="button" className="hub-card" onClick={() => go('ds-portada')}>
            <DsBikeMark />
            <span className="n">D.S. N.º {dsMeta.numero}</span>
            <span className="t">{dsMeta.titulo}</span>
            <span className="note">Publicado {dsMeta.fechaPublicacion}</span>
          </button>
          <button type="button" className="hub-card" onClick={() => go('paper-portada')}>
            <PaperBikeMark />
            <span className="n">{paperMeta.autores} ({paperMeta.anio})</span>
            <span className="t">{paperMeta.titulo}</span>
            <span className="note">{paperMeta.seccion}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
