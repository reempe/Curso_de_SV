import type { ComponentType } from 'react'
import { paperSection } from '../../content/santos2010'
import { paperBridges } from '../../data/bridges'
import {
  PaperBikeShareDiagram,
  PaperEconomyDiagram,
  PaperEnvironmentDiagram,
  PaperGenericDiagram,
  PaperHealthDiagram,
  PaperLandUseDiagram,
  PaperPoliciesDiagram,
  PaperSafetyDiagram,
  PaperShareDiagram,
} from '../../diagrams/paperDiagrams'
import { PaperFrame } from '../PaperFrame'

const diagrams: Record<string, ComponentType> = {
  corto: PaperLandUseDiagram,
  politicas: PaperPoliciesDiagram,
  salud: PaperHealthDiagram,
  ambiente: PaperEnvironmentDiagram,
  economia: PaperEconomyDiagram,
  seguridad: PaperSafetyDiagram,
  ejemplos: PaperShareDiagram,
  bicipublica: PaperBikeShareDiagram,
}

export function PaperArticle({ sectionKey }: { sectionKey: string }) {
  const data = paperSection(sectionKey)
  const Diagram = diagrams[sectionKey]
  const bridges = paperBridges[`paper-${sectionKey}`]
  return (
    <PaperFrame
      title={data.titulo}
      points={data.puntos}
      cita={data.cita}
      fuentes={data.fuentes}
      bridges={bridges}
    >
      {Diagram ? (
        <Diagram />
      ) : (
        <PaperGenericDiagram kicker="Sección 4" title={data.titulo} lines={data.puntos.slice(0, 3)} />
      )}
    </PaperFrame>
  )
}
