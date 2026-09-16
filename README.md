# Curso Ley 30936 y D.S. 012-2020-MTC

Sitio de presentación para dictar, a pantalla completa, dos normas y la evidencia que las respalda:

- **Ley N.º 30936**, que promueve y regula el uso de la bicicleta como medio de transporte sostenible (SPIJ H1234001 / *El Peruano* del 24 de abril de 2019).
- **D.S. N.º 012-2020-MTC**, que aprueba el reglamento de esa ley y modifica el Reglamento Nacional de Tránsito y el Reglamento Nacional de Gestión de Infraestructura Vial (SPIJ H1260225 / *El Peruano*, edición extraordinaria del 3 de junio de 2020).
- **Paper Santos, Behrendt y Teytelboym (2010)**, *Policy instruments for sustainable road transport*, Sección 4 «Incentives to walking and cycling». Cada lámina conecta la evidencia con los artículos de la ley y el reglamento, y cita los ocho estudios consolidados en `bike-cites-oa.tar.gz`.

## Cómo dictar el curso

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm install
npm run dev
```

Abra la URL local. La primera lámina es el **inicio**: elija la ley, el reglamento o el paper. Pulse **Pantalla completa** (o la tecla `F`) y recorra las láminas:

- `←` `→` o `AvPág` / `RePág` (solo dentro del mazo activo)
- `I` índice de ese mazo
- `Home` / `End` primera y última lámina del mazo
- Botón **Inicio** (o el sello del mazo) vuelve al hub
- Botón **Ley** / **Reglamento** / **Paper** salta al siguiente mazo
- `Esc` sale de pantalla completa

Cada lámina está pensada en 16:9. Las rutas viejas de la ley (`#/portada`, `#/art/7`) siguen funcionando.

| Hash | Qué muestra |
| --- | --- |
| `#/inicio` | Hub: ley, reglamento o paper |
| `#/ley/art/7` | Estacionamientos 5 % (ley) |
| `#/ds/art/21` | 5 % del área neta (reglamento) |
| `#/ds/art/8` | Remisión al RNT |
| `#/ds/rnt` | Síntesis de modificatorias al RNT y al RNGIV |
| `#/paper/seguridad` | Seguridad en números (Jacobsen, 2003) |
| `#/paper/ejemplos` | Casos de éxito: Países Bajos, Alemania, Bogotá |
| `#/paper/bicipublica` | Bicicleta pública: OYBike, Vélib, Bicing |
| `#/paper/fig/jacobsen2003` | Figura y cita de cada uno de los 8 documentos |

El mazo del paper cierra con una sección **«Evidencia · figuras y citas»**: una lámina por cada uno de los ocho documentos de `bike-cites-oa.tar.gz`, con una figura capturada del PDF y una cita textual. Las imágenes viven en `public/papers/`.

## Compilar

```bash
npm run build
npm run preview
```
