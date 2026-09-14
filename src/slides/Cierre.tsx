import { NormBridge } from '../components/NormBridge'

export function Cierre() {
  return (
    <div className="layout">
      <h1>Quién hace qué, según la propia ley</h1>
      <div className="actors">
        <article className="actor">
          <h2>MTC</h2>
          <p>
            Políticas de infraestructura, coordinación con los tres niveles de gobierno e informe
            anual al Congreso en septiembre. Propone el reglamento.
          </p>
        </article>
        <article className="actor">
          <h2>INEI</h2>
          <p>Estadísticas básicas progresivas sobre el uso de la bicicleta, con recursos propios.</p>
        </article>
        <article className="actor">
          <h2>MINEDU</h2>
          <p>Educación vial en primaria y secundaria, en coordinación con el MTC.</p>
        </article>
        <article className="actor">
          <h2>Gobiernos</h2>
          <p>
            Adecuar vías, interconectar ciclovías, bicicleta pública, estacionamientos y
            fiscalización municipal del 5 %.
          </p>
        </article>
        <article className="actor">
          <h2>Empleadores</h2>
          <p>
            Pueden incentivar el traslado en bicicleta. Las entidades públicas deben certificar las
            60 asistencias, con SERVIR.
          </p>
        </article>
        <article className="actor">
          <h2>Ciclistas</h2>
          <p>
            Derechos del artículo 10. Obligaciones e infracciones se remiten al Reglamento Nacional
            de Tránsito.
          </p>
        </article>
      </div>
      <blockquote className="cita">
        <strong>Lo que la ley deja a desarrollar.</strong>
        Reglamento en 120 días hábiles (disp. 3.ª); infracciones en el Reglamento Nacional de
        Tránsito (art. 11); medidas de certificación de SERVIR (art. 9.2).
        <NormBridge
          bridges={[
            { label: 'Abrir el reglamento', to: 'ds-portada' },
            { label: 'Modificatorias RNT', to: 'ds-rnt' },
          ]}
        />
      </blockquote>
    </div>
  )
}
