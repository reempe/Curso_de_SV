import { Arrow, Canvas, Panel } from './shared'

export function DsBikeMark() {
  return (
    <svg className="diag" viewBox="0 0 420 280" role="img" aria-label="Reglamento de la bicicleta">
      <rect x="24" y="36" width="372" height="208" rx="18" fill="none" stroke="var(--duty)" strokeWidth="6" />
      <circle cx="130" cy="190" r="40" fill="none" stroke="var(--accent)" strokeWidth="8" />
      <circle cx="290" cy="190" r="40" fill="none" stroke="var(--accent)" strokeWidth="8" />
      <path
        d="M130 190 L178 118 H248 L290 190 M178 118 L158 172 H248"
        fill="none"
        stroke="var(--text)"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <text x="210" y="70" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--duty)">
        D.S. 012-2020-MTC
      </text>
    </svg>
  )
}

export function DsMapDiagram() {
  return (
    <Canvas label="El decreto aprueba el reglamento y modifica el RNT y el RNGIV">
      <Panel
        x={40}
        y={40}
        w={320}
        h={160}
        title="1. Aprueba"
        tone="promo"
        lines={['Reglamento Ley 30936', '26 artículos', '3 DCF y 1 DCT']}
      />
      <Panel
        x={390}
        y={40}
        w={320}
        h={160}
        title="2. Modifica el RNT"
        tone="duty"
        lines={['D.S. 033-2001-MTC', 'Ciclos y SPA', 'Infracciones educativas']}
      />
      <Panel
        x={740}
        y={40}
        w={320}
        h={160}
        title="3. Modifica el RNGIV"
        lines={['D.S. 034-2008-MTC', 'Manual ciclovial', 'Movilidad sostenible']}
      />
      <Panel
        x={200}
        y={250}
        w={700}
        h={140}
        title="Un solo decreto, tres instrumentos"
        tone="promo"
        lines={['El anexo desarrolla la ley; las modificatorias operan el tránsito y las vías']}
      />
    </Canvas>
  )
}

export function DsGenericDiagram({
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
      <Panel x={80} y={80} w={940} h={260} title={`${kicker} · ${title}`} tone={tone} lines={lines} />
    </Canvas>
  )
}

export function DsArt01Diagram() {
  return (
    <Canvas label="El reglamento desarrolla la Ley 30936">
      <Panel x={40} y={120} w={360} h={160} title="Ley 30936" lines={['Mandatos y plazos', 'Qué debe hacerse']} />
      <Arrow x1={400} y1={200} x2={500} y2={200} tone="duty" />
      <Panel
        x={510}
        y={100}
        w={550}
        h={200}
        title="Este reglamento"
        tone="promo"
        lines={['Cómo se hace', 'Quién, con qué plazo', 'Sin sustituir la ley']}
      />
    </Canvas>
  )
}

export function DsArt03Diagram() {
  return (
    <Canvas label="Ámbito: territorio, entidades y tres roles en la vía">
      <Panel x={40} y={80} w={320} h={250} title="Territorio" tone="promo" lines={['Toda la República']} />
      <Panel
        x={390}
        y={80}
        w={320}
        h={250}
        title="Entidades"
        lines={['Públicas', 'Privadas']}
      />
      <Panel
        x={740}
        y={80}
        w={320}
        h={250}
        title="Roles"
        tone="duty"
        lines={['Peatón', 'Ciclista', 'Conductor']}
      />
    </Canvas>
  )
}

export function DsArt06Diagram() {
  return (
    <Canvas label="Del 3 de junio al reporte del 31 de julio y datos abiertos">
      <Panel x={40} y={80} w={280} h={140} title="3 de junio" tone="promo" lines={['Día Nacional', 'Actividades en el PEI/POI']} />
      <Arrow x1={320} y1={150} x2={400} y2={150} />
      <Panel x={410} y={80} w={280} h={140} title="31 de julio" tone="duty" lines={['Informe al MTC', 'Qué se hizo']} />
      <Arrow x1={690} y1={150} x2={770} y2={150} tone="duty" />
      <Panel x={780} y={80} w={280} h={140} title="Datos abiertos" lines={['Portal nacional', 'por entidad']} />
      <Panel
        x={180}
        y={280}
        w={740}
        h={100}
        title="Deportivas, recreativas, educativas, familiares y campañas"
      />
    </Canvas>
  )
}

export function DsArt08Diagram() {
  return (
    <Canvas label="El reglamento de la ley remite derechos y sanciones al RNT">
      <Panel x={40} y={90} w={300} h={180} title="Ley 30936" lines={['Art. 10 derechos', 'Art. 11 infracciones']} />
      <Arrow x1={340} y1={180} x2={430} y2={180} />
      <Panel x={440} y={90} w={280} h={180} title="Este reglamento" tone="promo" lines={['Art. 8', 'No tipifica aquí']} />
      <Arrow x1={720} y1={180} x2={800} y2={180} tone="duty" />
      <Panel
        x={810}
        y={70}
        w={250}
        h={220}
        title="RNT"
        tone="duty"
        lines={['D.S. 033-2001-MTC', 'TUO 016-2009-MTC', 'Ciclos y papeletas']}
      />
    </Canvas>
  )
}

export function DsArt11Diagram() {
  return (
    <Canvas label="MINEDU norma la forma; el MTC aporta el contenido de tránsito">
      <Panel
        x={40}
        y={70}
        w={480}
        h={280}
        title="MINEDU"
        tone="promo"
        lines={['Norma y orienta', 'Forma, duración, periodicidad', 'Orientaciones del año escolar']}
      />
      <Panel
        x={580}
        y={70}
        w={480}
        h={280}
        title="MTC"
        tone="duty"
        lines={['Contenido de tránsito', 'Soporte técnico', 'Especialistas descentralizados']}
      />
    </Canvas>
  )
}

export function DsArt17Diagram() {
  return (
    <Canvas label="Cinco incentivos laborales para llegar en bicicleta">
      <Panel x={40} y={50} w={200} h={140} title="Horario" tone="promo" lines={['Flexible', 'sin recortar jornada']} />
      <Panel x={260} y={50} w={200} h={140} title="Tiempo libre" tone="duty" lines={['Días u horas', 'acumulables']} />
      <Panel x={480} y={50} w={200} h={140} title="Vestimenta" lines={['Uniforme', 'más flexible']} />
      <Panel x={700} y={50} w={180} h={140} title="Duchas" tone="promo" lines={['En el centro', 'de trabajo']} />
      <Panel x={900} y={50} w={160} h={140} title="Charlas" lines={['Sensibilizar']} />
      <Panel
        x={180}
        y={240}
        w={740}
        h={140}
        title="Sector público: verificar y certificar con SERVIR"
        tone="duty"
        lines={['El empleador privado fija su política interna de comprobación']}
      />
    </Canvas>
  )
}

export function DsArt21Diagram() {
  return (
    <Canvas label="Cinco por ciento del área neta de estacionamiento vehicular">
      <Panel
        x={40}
        y={40}
        w={500}
        h={180}
        title="Base: área neta vehicular"
        tone="promo"
        lines={['5 % de esa área', 'No circulación ni comunes']}
      />
      <Panel
        x={560}
        y={40}
        w={500}
        h={180}
        title="Cómo se mide"
        tone="duty"
        lines={['Módulos CE.030', 'Lo más cerca del ingreso', 'Patrimonio: anclaje removible']}
      />
      <Panel
        x={40}
        y={250}
        w={500}
        h={140}
        title="Excepción"
        lines={['Sin estacionamientos vehiculares', 'en la conformidad de obra']}
      />
      <Panel
        x={560}
        y={250}
        w={500}
        h={140}
        title="SIT"
        tone="promo"
        lines={['Cicloparqueadero de', 'transferencia modal']}
      />
    </Canvas>
  )
}

export function DsArt24Diagram() {
  return (
    <Canvas label="Sistema municipal de préstamo o alquiler en un perímetro">
      <Panel x={360} y={30} w={380} h={100} title="Municipalidad" tone="duty" lines={['Provincial o distrital']} />
      <Panel x={40} y={180} w={300} h={140} title="Persona inscrita" tone="promo" lines={['Identificada']} />
      <Panel x={400} y={180} w={300} h={140} title="Préstamo o alquiler" lines={['Gratis o pagado']} />
      <Panel x={760} y={180} w={300} h={140} title="Perímetro" tone="promo" lines={['Vial y ciclovial', 'auto o manual']} />
    </Canvas>
  )
}

export function DsArt26Diagram() {
  return (
    <Canvas label="Planificar el sistema para que sea sostenible e intermodal">
      <Panel x={40} y={80} w={200} h={130} title="Gestión" />
      <Panel x={260} y={80} w={200} h={130} title="Financiar" tone="duty" />
      <Panel x={480} y={80} w={200} h={130} title="Operar" tone="promo" />
      <Panel x={700} y={80} w={360} h={130} title="Pago e integración tarifaria" />
      <Panel
        x={200}
        y={250}
        w={700}
        h={130}
        title="Mantenimiento y sostenibilidad"
        tone="promo"
        lines={['Conectar con el transporte masivo']}
      />
    </Canvas>
  )
}

export function DsRntDiagram() {
  return (
    <Canvas label="Ciclo y SPA, preferencia, papeleta educativa y manual ciclovial">
      <Panel
        x={40}
        y={40}
        w={330}
        h={180}
        title="SPA ≤ 25 km/h"
        tone="promo"
        lines={['Motor ≤ 350 W', 'No es automotor', 'Corta si no se pedalea']}
      />
      <Panel
        x={385}
        y={40}
        w={330}
        h={180}
        title="Preferencia"
        tone="duty"
        lines={['Ciclo en ciclovía', 'Peatón primero', 'en cruce no señalizado']}
      />
      <Panel
        x={730}
        y={40}
        w={330}
        h={180}
        title="1 año educativo"
        lines={['Papeletas a ciclistas', 'MTC evalúa conductas']}
      />
      <Panel
        x={200}
        y={250}
        w={700}
        h={140}
        title="RNGIV: manual de diseño ciclovial y movilidad sostenible en los planes"
        tone="promo"
      />
    </Canvas>
  )
}

export function DsDisp01Diagram() {
  return (
    <Canvas label="240 días para parámetros de transferencia modal">
      <Panel x={80} y={90} w={300} h={180} title="Art. 21.8" lines={['Cicloparqueadero', 'en el SIT']} />
      <Arrow x1={380} y1={180} x2={470} y2={180} tone="duty" />
      <Panel x={480} y={90} w={280} h={180} title="240 días" tone="duty" lines={['calendario']} />
      <Arrow x1={760} y1={180} x2={840} y2={180} />
      <Panel x={850} y={90} w={210} h={180} title="MTC" tone="promo" lines={['Parámetros', 'técnicos']} />
    </Canvas>
  )
}

export function DsDisp02Diagram() {
  return (
    <Canvas label="90 días para que SERVIR oriente la certificación pública">
      <Panel x={80} y={100} w={400} h={200} title="Cada entidad pública" lines={['Desarrolla y certifica', 'la asistencia en bici']} />
      <Arrow x1={480} y1={200} x2={580} y2={200} tone="duty" />
      <Panel x={590} y={100} w={430} h={200} title="90 días · SERVIR" tone="duty" lines={['Disposiciones', 'de concordancia']} />
    </Canvas>
  )
}

export function DsDisp03Diagram() {
  return (
    <Canvas label="90 días para lineamientos MINEDU de educación vial">
      <Panel x={360} y={30} w={380} h={100} title="90 días calendario" tone="duty" />
      <Panel x={40} y={180} w={320} h={160} title="Básica" lines={['Primaria y secundaria']} />
      <Panel x={390} y={180} w={320} h={160} title="Técnico-productiva" tone="promo" />
      <Panel x={740} y={180} w={320} h={160} title="Superior" lines={['Pública y privada']} />
    </Canvas>
  )
}

export function DsDisp04Diagram() {
  return (
    <Canvas label="Suspensión del informe del 31 de julio hasta 2021">
      <Panel x={80} y={90} w={400} h={220} title="Art. 6.2" tone="duty" lines={['Reporte anual al MTC', 'el 31 de julio']} />
      <Arrow x1={480} y1={200} x2={580} y2={200} />
      <Panel
        x={590}
        y={90}
        w={430}
        h={220}
        title="Pausa hasta 31/07/2021"
        tone="promo"
        lines={['No deroga el Día Nacional', 'Solo suspende el informe']}
      />
    </Canvas>
  )
}
