import { NormBridge } from '../../components/NormBridge'

export function DsCierre() {
  return (
    <div className="layout">
      <h1>Quién hace qué, según el reglamento</h1>
      <div className="actors">
        <article className="actor">
          <h2>MTC</h2>
          <p>
            Políticas cicloviales, datos abiertos del 3 de junio, contenido de tránsito para las
            aulas, parámetros de transferencia modal y seguimiento a las universidades.
          </p>
        </article>
        <article className="actor">
          <h2>MINEDU</h2>
          <p>
            Norma la educación vial en todos los niveles y aprueba lineamientos en 90 días. El MTC
            pone el contenido técnico.
          </p>
        </article>
        <article className="actor">
          <h2>INEI</h2>
          <p>Mete la bicicleta en el censo nacional y en las encuestas oficiales, con el MTC.</p>
        </article>
        <article className="actor">
          <h2>Gobiernos</h2>
          <p>
            Ciclovías en planes e inversión, mapas en geoidep, 5 % de estacionamientos, bicicleta
            pública municipal.
          </p>
        </article>
        <article className="actor">
          <h2>Empleadores</h2>
          <p>
            Cinco incentivos optativos. El Estado certifica con SERVIR. El MTPE reconoce buenas
            prácticas.
          </p>
        </article>
        <article className="actor">
          <h2>Ciclistas</h2>
          <p>
            Derechos y sanciones no están en este anexo: van al Reglamento Nacional de Tránsito, con
            un año de papeleta educativa.
          </p>
        </article>
      </div>
      <blockquote className="cita">
        <strong>Lo que el reglamento deja pendiente.</strong>
        Parámetros de transferencia modal (240 días); SERVIR y MINEDU (90 días); infracciones en el
        RNT.
        <NormBridge
          bridges={[
            { label: 'Cierre de la ley', to: 'ley-cierre' },
            { label: 'Modificatorias RNT', to: 'ds-rnt' },
          ]}
        />
      </blockquote>
    </div>
  )
}
