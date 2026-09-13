import { article } from '../content/ley30936'

export function Art04() {
  const data = article(4)
  return (
    <div className="layout">
      <h1>{data.titulo}</h1>
      <div className="bands">
        <article className="band">
          <span className="tag">4.1</span>
          <h2>MINEDU · Primaria y secundaria</h2>
          <p>
            Actividades de educación vial en II.EE. públicas y privadas. Coordina con el MTC las
            normas de tránsito.
          </p>
        </article>
        <article className="band">
          <span className="tag">4.2</span>
          <h2>Educación superior</h2>
          <p>
            Jornadas de sensibilización sobre tránsito en bicicleta y cumplimiento de las normas.
          </p>
        </article>
        <article className="band">
          <span className="tag duty">4.3</span>
          <h2>Zonas rurales</h2>
          <p>
            Gobiernos locales priorizan señalización y puntos de guía hacia centros educativos.
          </p>
        </article>
        <article className="band">
          <span className="tag duty">4.4</span>
          <h2>Municipalidades</h2>
          <p>
            Sensibilización ambiental sobre la bicicleta en sus programas de educación, cultura y
            ciudadanía ambiental.
          </p>
        </article>
      </div>
      <blockquote className="cita">
        <strong>Texto de la ley.</strong>
        {data.cita}
      </blockquote>
    </div>
  )
}
