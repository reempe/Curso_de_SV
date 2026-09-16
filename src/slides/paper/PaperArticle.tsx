import type { ComponentType } from 'react'
import { paperSection } from '../../content/santos2010'
import { paperBridges } from '../../data/bridges'
import {
  PaperBikeShareDiagram,
  PaperGenericDiagram,
  PaperHealthDiagram,
  PaperPoliciesDiagram,
  PaperSafetyDiagram,
  PaperShareDiagram,
} from '../../diagrams/paperDiagrams'
import { PaperFrame } from '../PaperFrame'

const diagrams: Record<string, ComponentType> = {
  politicas: PaperPoliciesDiagram,
  salud: PaperHealthDiagram,
  seguridad: PaperSafetyDiagram,
  ejemplos: PaperShareDiagram,
  bicipublica: PaperBikeShareDiagram,
}

const genericLines: Record<string, string[]> = {
  corto: ['Uso del suelo como incentivo primario', 'Distancias cortas cerca de estaciones', 'Integración con el transporte público'],
  ambiente: ['Sin emisiones ni contaminación local', 'Sustituyen viajes cortos en auto', 'Efecto palanca sobre los km-vehículo'],
  economia: ['Ahorros en salud y seguridad', 'Comercio y valor del suelo', 'Beneficio-costo del ciclismo ~3,2'],
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
        <PaperGenericDiagram
          kicker="Sección 4"
          title={data.titulo}
          lines={genericLines[sectionKey] ?? data.puntos.slice(0, 3)}
        />
      )}
    </PaperFrame>
  )
}
