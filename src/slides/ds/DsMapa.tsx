import { DsMapDiagram } from '../../diagrams/dsDiagrams'
import { ArticleFrame } from '../ArticleFrame'

export function DsMapa() {
  return (
    <ArticleFrame
      title="Tres piezas en un solo decreto"
      points={[
        'Artículo 1 del D.S.: aprueba el reglamento de la Ley 30936 (26 artículos, 3 DCF y 1 DCT).',
        'Modifica el Reglamento Nacional de Tránsito (D.S. 033-2001-MTC): ciclos, SPA, circulación y papeletas.',
        'Modifica el Reglamento Nacional de Gestión de Infraestructura Vial (D.S. 034-2008-MTC): manual ciclovial y movilidad sostenible en los planes.',
      ]}
      cita="Apruébase el Reglamento de la Ley Nº 30936 […], que forma parte integrante del presente Decreto Supremo, el mismo que consta de tres (03) títulos, seis (06) capítulos, veintiséis (26) artículos, tres (03) disposiciones complementarias finales y una (01) disposición complementaria transitoria."
      citeLabel="Texto del decreto."
    >
      <DsMapDiagram />
    </ArticleFrame>
  )
}
