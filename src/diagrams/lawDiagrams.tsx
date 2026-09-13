import { Arrow, Canvas, Panel } from './shared'

export function BikeMark() {
  return (
    <svg className="diag" viewBox="0 0 420 280" role="img" aria-label="Bicicleta como medio de transporte">
      <circle cx="110" cy="190" r="54" fill="none" stroke="var(--accent)" strokeWidth="10" />
      <circle cx="310" cy="190" r="54" fill="none" stroke="var(--accent)" strokeWidth="10" />
      <path
        d="M110 190 L175 95 H268 L310 190 M175 95 L148 168 H268"
        fill="none"
        stroke="var(--text)"
        strokeWidth="10"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M268 95 H300" stroke="var(--duty)" strokeWidth="10" strokeLinecap="round" />
      <circle cx="175" cy="95" r="8" fill="var(--duty)" />
    </svg>
  )
}

export function Art01Diagram() {
  return (
    <Canvas label="Promover y regular la bicicleta para la capacidad vial y el ambiente">
      <Panel x={40} y={90} w={250} h={120} title="Promover" tone="promo" lines={['Incentivos', 'Educación', 'Infraestructura']} />
      <Panel x={40} y={240} w={250} h={120} title="Regular" tone="duty" lines={['Derechos', 'Obligaciones', 'Plazos']} />
      <Arrow x1={290} y1={150} x2={430} y2={210} />
      <Arrow x1={290} y1={300} x2={430} y2={230} tone="duty" />
      <Panel
        x={450}
        y={70}
        w={300}
        h={140}
        title="Capacidad vial"
        tone="promo"
        lines={['Uso más eficiente', 'de las vías']}
      />
      <Panel
        x={450}
        y={240}
        w={300}
        h={140}
        title="Ambiente"
        tone="promo"
        lines={['Preservación', 'transporte sostenible']}
      />
      <Panel x={790} y={155} w={270} h={120} title="Bicicleta" lines={['Medio de transporte', 'sostenible']} />
      <Arrow x1={750} y1={140} x2={790} y2={190} />
      <Arrow x1={750} y1={300} x2={790} y2={230} />
    </Canvas>
  )
}

export function Art02Diagram() {
  return (
    <Canvas label="MTC e INEI con los tres niveles de gobierno">
      <Panel
        x={40}
        y={40}
        w={500}
        h={220}
        title="MTC"
        tone="promo"
        lines={[
          'Políticas de diseño vial',
          'Planificación urbana y rural',
          'Coordinación intergubernamental',
        ]}
      />
      <Panel
        x={560}
        y={40}
        w={500}
        h={220}
        title="INEI"
        tone="duty"
        lines={[
          'Estadísticas básicas, progresivas',
          'Censos y encuestas por muestreo',
          'Registros administrativos',
        ]}
      />
      <Panel x={40} y={300} w={320} h={100} title="Nacional" lines={['Política y rectoría']} />
      <Panel x={390} y={300} w={320} h={100} title="Regional" lines={['Planes e infraestructura']} />
      <Panel x={740} y={300} w={320} h={100} title="Local" lines={['Vías urbanas y control']} />
    </Canvas>
  )
}

export function Art03Diagram() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  return (
    <Canvas label="Calendario del 3 de junio, Día Nacional de la Bicicleta" viewBox="0 0 1100 430">
      <text x="40" y="48" fontSize="28" fontWeight="700" fill="var(--text)">
        Junio
      </text>
      <text x="40" y="82" fontSize="18" fill="var(--muted)">
        Día Nacional de la Bicicleta
      </text>
      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
        <text key={`${d}-${i}`} x={70 + i * 70} y="130" fontSize="16" fill="var(--muted)" textAnchor="middle">
          {d}
        </text>
      ))}
      {days.map((day, i) => {
        const col = i % 7
        const row = Math.floor(i / 7)
        const x = 40 + col * 70
        const y = 150 + row * 52
        const isThree = day === 3
        return (
          <g key={day}>
            <rect
              x={x}
              y={y}
              width="56"
              height="42"
              rx="8"
              fill={isThree ? 'var(--accent)' : 'var(--card)'}
              stroke={isThree ? 'var(--accent)' : 'var(--line)'}
            />
            <text
              x={x + 28}
              y={y + 27}
              fontSize="18"
              fontWeight="700"
              textAnchor="middle"
              fill={isThree ? '#062018' : 'var(--text)'}
            >
              {day}
            </text>
          </g>
        )
      })}
      <Panel
        x={640}
        y={120}
        w={420}
        h={200}
        title="ONU 72/272"
        tone="promo"
        lines={['Referencia internacional', 'Conmemorar y crear conciencia', 'Públicos y privados actúan']}
      />
    </Canvas>
  )
}

export function Art05Diagram() {
  return (
    <Canvas label="Interés nacional, adecuación progresiva y obras por impuestos">
      <Panel x={40} y={80} w={280} h={140} title="Interés nacional" tone="duty" lines={['y necesidad pública']} />
      <Arrow x1={320} y1={150} x2={400} y2={150} tone="duty" />
      <Panel
        x={410}
        y={50}
        w={320}
        h={200}
        title="Adecuación progresiva"
        tone="promo"
        lines={['Nacional', 'Regional', 'Local']}
      />
      <Arrow x1={730} y1={150} x2={800} y2={110} />
      <Arrow x1={730} y1={170} x2={800} y2={250} tone="duty" />
      <Panel x={810} y={40} w={250} h={130} title="Ciclovías" lines={['Infraestructura', 'existente y nueva']} />
      <Panel
        x={810}
        y={200}
        w={250}
        h={160}
        title="Obras por impuestos"
        tone="duty"
        lines={['Ley 29230', 'Evaluación previa', 'Planes viales vigentes']}
      />
    </Canvas>
  )
}

export function Art06Diagram() {
  return (
    <Canvas label="Viaje intermodal del ciclista hacia el transporte masivo">
      <Panel x={40} y={150} w={200} h={110} title="Ciclista" tone="promo" lines={['Origen']} />
      <Arrow x1={240} y1={205} x2={310} y2={205} />
      <Panel x={320} y={150} w={230} h={110} title="Estación" lines={['Estacionamiento seguro']} />
      <Arrow x1={550} y1={205} x2={620} y2={205} />
      <Panel x={630} y={150} w={230} h={110} title="Transporte masivo" tone="duty" lines={['Bus, metro, tren']} />
      <Panel
        x={200}
        y={320}
        w={700}
        h={80}
        title="Interconexión de ciclovías entre distritos contiguos"
        lines={['Autoridades competentes, según las normas de la materia']}
      />
    </Canvas>
  )
}

export function Art08Diagram() {
  return (
    <Canvas label="Sistema local de préstamo o alquiler de bicicletas" viewBox="0 0 1100 430">
      <circle cx="550" cy="210" r="150" fill="none" stroke="var(--accent)" strokeWidth="3" strokeDasharray="8 10" />
      <Panel x={430} y={40} w={240} h={90} title="Gobierno local" tone="duty" lines={['Recursos disponibles']} />
      <Panel x={40} y={160} w={250} h={100} title="Préstamo" tone="promo" lines={['o alquiler']} />
      <Panel x={810} y={160} w={250} h={100} title="Ciudadanía" lines={['Uso incentivado']} />
      <Panel x={400} y={300} w={300} h={100} title="Transporte masivo" tone="promo" lines={['Última milla']} />
    </Canvas>
  )
}

export function Art09Diagram() {
  return (
    <Canvas label="Incentivos laborales optativos y jornada libre por 60 asistencias">
      <Panel
        x={40}
        y={70}
        w={480}
        h={280}
        title="Pueden (9.1)"
        tone="promo"
        lines={[
          'Empleadores públicos y privados',
          'Horario de ingreso flexible',
          'Días u horas libres',
          'Duchas en el centro de trabajo',
        ]}
      />
      <Panel
        x={580}
        y={70}
        w={480}
        h={280}
        title="Deben (9.2)"
        tone="duty"
        lines={[
          'Solo servidores públicos',
          '60 asistencias certificadas',
          '1 jornada libre remunerada',
          'Certificación con SERVIR',
        ]}
      />
    </Canvas>
  )
}

export function Art11Diagram() {
  return (
    <Canvas label="Infracciones leves, graves y muy graves remitidas al Reglamento Nacional de Tránsito">
      <polygon points="550,40 720,170 380,170" fill="var(--duty-dim)" stroke="var(--duty)" strokeWidth="2" />
      <text x="550" y="130" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--duty)">
        Muy graves
      </text>
      <polygon points="360,180 740,180 820,290 280,290" fill="var(--accent-dim)" stroke="var(--accent)" strokeWidth="2" />
      <text x="550" y="250" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--accent)">
        Graves
      </text>
      <polygon points="260,300 840,300 930,400 170,400" fill="var(--card)" stroke="var(--line)" strokeWidth="2" />
      <text x="550" y="360" textAnchor="middle" fontSize="20" fontWeight="700" fill="var(--text)">
        Leves
      </text>
      <Panel
        x={40}
        y={80}
        w={250}
        h={160}
        title="Criterio"
        lines={['Peligro', 'Riesgo potencial', 'Daño efectivo']}
      />
      <Panel
        x={810}
        y={80}
        w={250}
        h={160}
        title="Dónde se regulan"
        tone="duty"
        lines={['Reglamento Nacional', 'de Tránsito']}
      />
    </Canvas>
  )
}

export function Disp01Diagram() {
  return (
    <Canvas label="Cambio de la Ley 27181 para incluir movilidad sostenible">
      <Panel
        x={40}
        y={80}
        w={460}
        h={260}
        title="Antes"
        lines={['Racionalizar la infraestructura', 'Reglamentos nacionales de', 'transporte y tránsito']}
      />
      <Arrow x1={500} y1={210} x2={590} y2={210} tone="duty" />
      <Panel
        x={600}
        y={80}
        w={460}
        h={260}
        title="Con la Ley 30936"
        tone="promo"
        lines={[
          'Art. 7.3: trato preferencial',
          'a medios más eficientes',
          'Art. 23.c: pautas técnicas',
          'de movilidad sostenible (bici)',
        ]}
      />
    </Canvas>
  )
}

export function Disp02Diagram() {
  return (
    <Canvas label="Informe anual del MTC a la Comisión de Transportes en septiembre">
      <Panel x={80} y={80} w={280} h={140} title="MTC" tone="promo" lines={['Acciones del año']} />
      <Arrow x1={360} y1={150} x2={470} y2={150} />
      <Panel x={480} y={80} w={280} h={140} title="1.ª quincena" tone="duty" lines={['de septiembre']} />
      <Arrow x1={760} y1={150} x2={840} y2={150} tone="duty" />
      <Panel x={850} y={80} w={210} h={140} title="Congreso" lines={['Comisión de', 'Transportes']} />
      <Panel x={250} y={280} w={600} h={90} title="Informe de implementación de la Ley 30936" />
    </Canvas>
  )
}

export function Disp03Diagram() {
  return (
    <Canvas label="Reglamento en 120 días hábiles con cuatro ministerios">
      <Panel x={360} y={30} w={380} h={110} title="120 días hábiles" tone="duty" lines={['desde la publicación']} />
      <Panel x={40} y={180} w={240} h={110} title="Vivienda" />
      <Panel x={300} y={180} w={240} h={110} title="Educación" />
      <Panel x={560} y={180} w={240} h={110} title="Trabajo" />
      <Panel x={820} y={180} w={240} h={110} title="MTC" tone="promo" lines={['Propone']} />
      <Panel x={250} y={320} w={600} h={80} title="Reglamento de la Ley 30936" tone="promo" />
    </Canvas>
  )
}

export function Disp04Diagram() {
  return (
    <Canvas label="Implementación progresiva sin recursos extra del tesoro">
      <Panel x={80} y={90} w={300} h={180} title="Progresiva" tone="promo" lines={['No es inmediata', 'ni total']} />
      <Panel x={400} y={90} w={300} h={180} title="Presupuesto propio" lines={['De cada entidad', 'involucrada']} />
      <Panel
        x={720}
        y={90}
        w={300}
        h={180}
        title="Sin extra"
        tone="duty"
        lines={['No demanda recursos', 'adicionales al tesoro']}
      />
    </Canvas>
  )
}
