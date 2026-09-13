import { article } from '../content/ley30936'

export function Art07() {
  const data = article(7)
  return (
    <div className="layout">
      <h1>{data.titulo}</h1>
      <div className="parking">
        <div>
          <div className="stalls" aria-label="Veinte plazas: diecinueve para autos y una para bicicletas, el cinco por ciento">
            <div className="stall bike">Bici · 5 %</div>
            {Array.from({ length: 19 }, (_, i) => (
              <div key={i} className="stall">
                Auto
              </div>
            ))}
          </div>
          <p className="note" style={{ marginTop: '0.55rem' }}>
            Diecinueve plazas de auto y una de bicicleta: el 5 % del área de estacionamiento
            vehicular, no del total de la edificación.
          </p>
        </div>
        <div className="clocks">
          <div className="clock">
            <strong>3 años</strong>
            Entidades públicas y privadas, desde la publicación, aunque no esté el reglamento.
          </div>
          <div className="clock">
            <strong>1 año</strong>
            Edificaciones ya construidas, desde la publicación en El Peruano.
          </div>
          <div className="clock">
            <strong>Municipalidades</strong>
            Provinciales y distritales cautelan y hacen obligatoria la norma.
          </div>
        </div>
      </div>
      <blockquote className="cita">
        <strong>Texto de la ley.</strong>
        {data.cita}
      </blockquote>
    </div>
  )
}
