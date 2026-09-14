# Curso Ley 30936 y D.S. 012-2020-MTC

Sitio de presentación para dictar, a pantalla completa, dos normas:

- **Ley N.º 30936**, que promueve y regula el uso de la bicicleta como medio de transporte sostenible (SPIJ H1234001 / *El Peruano* del 24 de abril de 2019).
- **D.S. N.º 012-2020-MTC**, que aprueba el reglamento de esa ley y modifica el Reglamento Nacional de Tránsito y el Reglamento Nacional de Gestión de Infraestructura Vial (SPIJ H1260225 / *El Peruano*, edición extraordinaria del 3 de junio de 2020).

## Cómo dictar el curso

```bash
export PATH="$HOME/.local/node/bin:$PATH"
npm install
npm run dev
```

Abra la URL local. La primera lámina es el **inicio**: elija la ley o el reglamento. Pulse **Pantalla completa** (o la tecla `F`) y recorra las láminas:

- `←` `→` o `AvPág` / `RePág` (solo dentro de la norma activa)
- `I` índice de esa norma
- `Home` / `End` primera y última lámina del mazo
- Botón **Inicio** (o el sello de la norma) vuelve al hub
- Botón **Ley** / **Reglamento** salta a la otra norma
- `Esc` sale de pantalla completa

Cada lámina está pensada en 16:9. Las rutas viejas de la ley (`#/portada`, `#/art/7`) siguen funcionando.

| Hash | Qué muestra |
| --- | --- |
| `#/inicio` | Hub: ley o reglamento |
| `#/ley/art/7` | Estacionamientos 5 % (ley) |
| `#/ds/art/21` | 5 % del área neta (reglamento) |
| `#/ds/art/8` | Remisión al RNT |
| `#/ds/rnt` | Síntesis de modificatorias al RNT y al RNGIV |

## Compilar

```bash
npm run build
npm run preview
```
