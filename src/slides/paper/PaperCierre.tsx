import { NormBridge } from '../../components/NormBridge'

export function PaperCierre() {
  return (
    <div className="layout">
      <h1>Conclusiones: inclusión social y política pública</h1>
      <div className="actors">
        <article className="actor">
          <h2>Salud</h2>
          <p>
            Efectos positivos y a menudo no marginales: menos enfermedad crónica, menos obesidad y
            mayor esperanza de vida saludable.
          </p>
        </article>
        <article className="actor">
          <h2>Ambiente</h2>
          <p>
            Cero emisiones locales y sustitución de los viajes cortos en auto, los de mayor tasa de
            emisión por kilómetro.
          </p>
        </article>
        <article className="actor">
          <h2>Economía</h2>
          <p>
            Desde una perspectiva de costo-beneficio social, invertir en caminar y pedalear puede ser
            excelente y por eso es piedra angular de las políticas sostenibles.
          </p>
        </article>
        <article className="actor">
          <h2>Seguridad</h2>
          <p>
            Seguridad en números más infraestructura y educación al conductor; el casco ayuda pero por
            sí solo no basta.
          </p>
        </article>
        <article className="actor">
          <h2>Inclusión</h2>
          <p>
            Casi un tercio de los hogares no tiene auto; acercar destinos a pie o en bicicleta borra la
            desigualdad de accesibilidad y alivia la pobreza.
          </p>
        </article>
        <article className="actor">
          <h2>Pendiente</h2>
          <p>
            Aún requieren investigación empírica el uso obligatorio del casco y el diseño fino de las
            ciclovías.
          </p>
        </article>
      </div>
      <blockquote className="cita">
        <strong>Del paper.</strong>
        “Investments in walking and cycling can be excellent and policymakers rightly choose to make
        them a cornerstone of nationwide sustainable transport programmes.”
        <NormBridge
          bridges={[
            { label: 'Ley art. 2 · Políticas', to: 'ley-art-2' },
            { label: 'Reglamento art. 5 · MTC', to: 'ds-art-5' },
          ]}
        />
      </blockquote>
    </div>
  )
}
