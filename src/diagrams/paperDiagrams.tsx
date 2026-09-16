import { Arrow, Canvas, Panel } from './shared'

export function PaperBikeMark() {
  return (
    <svg className="diag" viewBox="0 0 420 280" role="img" aria-label="Paper Santos et al. 2010">
      <rect x="24" y="34" width="372" height="212" rx="18" fill="none" stroke="var(--accent)" strokeWidth="4" />
      <circle cx="132" cy="188" r="38" fill="none" stroke="var(--accent)" strokeWidth="7" />
      <circle cx="288" cy="188" r="38" fill="none" stroke="var(--accent)" strokeWidth="7" />
      <path
        d="M132 188 L178 120 H246 L288 188 M178 120 L160 168 H246"
        fill="none"
        stroke="var(--text)"
        strokeWidth="7"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M60 96 H150 M60 72 H120" stroke="var(--duty)" strokeWidth="8" strokeLinecap="round" />
      <text x="300" y="80" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--accent)">
        Sec. 4
      </text>
    </svg>
  )
}

export function PaperSafetyDiagram() {
  return (
    <Canvas label="Seguridad en números: más ciclistas, menor riesgo individual">
      <line x1="90" y1="360" x2="1050" y2="360" stroke="var(--line)" strokeWidth="2" />
      <line x1="90" y1="40" x2="90" y2="360" stroke="var(--line)" strokeWidth="2" />
      <text x="560" y="405" textAnchor="middle" fontSize="18" fill="var(--muted)">
        Personas que caminan o pedalean →
      </text>
      <text x="40" y="200" fontSize="18" fill="var(--muted)" transform="rotate(-90 40 200)">
        Riesgo individual →
      </text>
      <path
        d="M110 70 C 320 250, 520 320, 1040 348"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="5"
      />
      <circle cx="230" cy="150" r="7" fill="var(--accent)" />
      <circle cx="620" cy="322" r="7" fill="var(--accent)" />
      <text x="250" y="140" fontSize="17" fill="var(--text)">
        Al duplicar ciclistas…
      </text>
      <text x="640" y="315" fontSize="17" fill="var(--text)">
        …el riesgo individual cae ~66 %
      </text>
    </Canvas>
  )
}

export function PaperShareDiagram() {
  const bars = [
    { label: 'EE. UU.', value: 1, color: 'var(--line)' },
    { label: 'R. Unido', value: 1, color: 'var(--line)' },
    { label: 'Alemania', value: 10, color: 'var(--duty)' },
    { label: 'Dinamarca', value: 18, color: 'var(--accent)' },
    { label: 'P. Bajos', value: 27, color: 'var(--accent)' },
  ]
  const max = 27
  const base = 360
  const top = 60
  const usable = base - top
  return (
    <Canvas label="Participación de la bicicleta en el total de viajes">
      <line x1="80" y1={base} x2="1060" y2={base} stroke="var(--line)" strokeWidth="2" />
      {bars.map((bar, i) => {
        const w = 150
        const gap = 40
        const x = 120 + i * (w + gap)
        const h = (bar.value / max) * usable
        const y = base - h
        return (
          <g key={bar.label}>
            <rect x={x} y={y} width={w} height={h} rx="8" fill={bar.color} />
            <text x={x + w / 2} y={y - 12} textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--text)">
              {bar.value}%
            </text>
            <text x={x + w / 2} y={base + 28} textAnchor="middle" fontSize="18" fill="var(--muted)">
              {bar.label}
            </text>
          </g>
        )
      })}
    </Canvas>
  )
}

export function PaperHealthDiagram() {
  return (
    <Canvas label="El transporte activo mejora la salud y reduce la obesidad">
      <Panel x={40} y={60} w={300} h={130} title="30 min · 5 días" tone="promo" lines={['Recomendación OMS', 'que cumple el viaje activo']} />
      <Arrow x1={340} y1={125} x2={430} y2={125} />
      <Panel
        x={440}
        y={40}
        w={340}
        h={180}
        title="Menos enfermedad"
        tone="duty"
        lines={['Coronaria y diabetes', 'Cáncer y ACV', 'Mortalidad general']}
      />
      <Panel
        x={820}
        y={60}
        w={240}
        h={130}
        title="Menos obesidad"
        tone="promo"
        lines={['P. Bajos 11,2 %', 'EE. UU. 34,3 %']}
      />
      <Panel
        x={220}
        y={260}
        w={660}
        h={120}
        title="r = −0,86 entre transporte activo y obesidad"
        lines={['Bassett et al. (2008): a más caminata y pedaleo, menor obesidad']}
      />
    </Canvas>
  )
}

export function PaperPoliciesDiagram() {
  return (
    <Canvas label="Paquete de medidas que hace irresistible pedalear">
      <Panel x={40} y={50} w={230} h={150} title="Carriles" tone="promo" lines={['Exclusivos y anchos', 'Prioridad en cruces']} />
      <Panel x={290} y={50} w={230} h={150} title="Parqueo" tone="duty" lines={['Comercios', 'Estaciones y oficinas']} />
      <Panel x={540} y={50} w={230} h={150} title="Duchas" lines={['En el trabajo', 'para quien pedalea']} />
      <Panel x={790} y={50} w={270} h={150} title="Velocidad" tone="promo" lines={['Límites más bajos', 'Calmado de tránsito']} />
      <Panel
        x={220}
        y={250}
        w={660}
        h={120}
        title="Coordinados, no aislados"
        tone="duty"
        lines={['Países Bajos, Dinamarca y Alemania: paquetes de política, no clima ni cultura']}
      />
    </Canvas>
  )
}

export function PaperBikeShareDiagram() {
  return (
    <Canvas label="De OYBike a Vélib y Bicing: escala y economías">
      <Panel x={40} y={70} w={300} h={200} title="OYBike · Londres" lines={['2004 · ~70 bicicletas', 'Ocio y fin de semana', '£8 por día']} />
      <Arrow x1={340} y1={170} x2={430} y2={170} tone="duty" />
      <Panel x={440} y={50} w={300} h={240} title="Vélib · París" tone="promo" lines={['20.600 bicicletas', '135 hab. por bici', '€1 por día']} />
      <Panel x={770} y={70} w={290} h={200} title="Bicing · Barcelona" tone="promo" lines={['3.000 bicicletas', 'Sustituye viajes en auto', 'Complementa el bus']} />
    </Canvas>
  )
}

export function PaperGenericDiagram({
  kicker,
  title,
  lines,
  tone = 'promo',
}: {
  kicker: string
  title: string
  lines: string[]
  tone?: 'promo' | 'duty' | 'neutral'
}) {
  return (
    <Canvas label={title}>
      <Panel x={80} y={70} w={940} h={280} title={`${kicker} · ${title}`} tone={tone} lines={lines} />
    </Canvas>
  )
}
