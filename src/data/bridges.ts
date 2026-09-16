export type Bridge = {
  label: string
  to: string
}

export const leyBridges: Record<string, Bridge[]> = {
  'ley-art-2': [
    { label: 'Reglamento art. 5 · MTC', to: 'ds-art-5' },
    { label: 'Reglamento art. 7 · INEI', to: 'ds-art-7' },
  ],
  'ley-art-3': [{ label: 'Reglamento art. 6 · Día Nacional', to: 'ds-art-6' }],
  'ley-art-4': [{ label: 'Reglamento arts. 9–15 · Educación', to: 'ds-art-9' }],
  'ley-art-5': [{ label: 'Reglamento arts. 19–20 · Infraestructura', to: 'ds-art-19' }],
  'ley-art-6': [
    { label: 'Reglamento art. 21.8 · Transferencia', to: 'ds-art-21' },
    { label: 'Reglamento art. 26 · Bici pública', to: 'ds-art-26' },
  ],
  'ley-art-7': [
    { label: 'Reglamento art. 21 · 5 % neto', to: 'ds-art-21' },
    { label: 'Paper · Políticas', to: 'paper-politicas' },
  ],
  'ley-art-8': [
    { label: 'Reglamento arts. 24–26 · Sistema', to: 'ds-art-24' },
    { label: 'Paper · Bici pública', to: 'paper-bicipublica' },
  ],
  'ley-art-9': [{ label: 'Reglamento arts. 16–18 · Trabajo', to: 'ds-art-16' }],
  'ley-art-10': [{ label: 'Reglamento art. 8 · Al RNT', to: 'ds-art-8' }],
  'ley-art-11': [
    { label: 'Reglamento art. 8 · Al RNT', to: 'ds-art-8' },
    { label: 'Modificatorias RNT', to: 'ds-rnt' },
  ],
  'ley-disp-3': [{ label: 'Abrir el D.S. 012-2020-MTC', to: 'ds-portada' }],
}

export const dsBridges: Record<string, Bridge[]> = {
  'ds-art-5': [{ label: 'Ley art. 2 · Políticas', to: 'ley-art-2' }],
  'ds-art-6': [{ label: 'Ley art. 3 · 3 de junio', to: 'ley-art-3' }],
  'ds-art-7': [{ label: 'Ley art. 2 · INEI', to: 'ley-art-2' }],
  'ds-art-8': [
    { label: 'Ley arts. 10–11 · Derechos', to: 'ley-art-10' },
    { label: 'Qué cambió el RNT', to: 'ds-rnt' },
  ],
  'ds-art-9': [{ label: 'Ley art. 4 · Educación', to: 'ley-art-4' }],
  'ds-art-16': [{ label: 'Ley art. 9 · Trabajo', to: 'ley-art-9' }],
  'ds-art-19': [
    { label: 'Ley art. 5 · Infraestructura', to: 'ley-art-5' },
    { label: 'Paper · Casos de éxito', to: 'paper-ejemplos' },
  ],
  'ds-art-21': [{ label: 'Ley art. 7 · 5 %', to: 'ley-art-7' }],
  'ds-art-24': [{ label: 'Ley art. 8 · Bici pública', to: 'ley-art-8' }],
  'ds-art-26': [{ label: 'Ley art. 6 · Intermodalidad', to: 'ley-art-6' }],
  'ds-disp-3': [{ label: 'Ley art. 4 · Educación', to: 'ley-art-4' }],
  'ds-rnt': [{ label: 'Ley art. 11 · Infracciones', to: 'ley-art-11' }],
}

export const paperBridges: Record<string, Bridge[]> = {
  'paper-corto': [
    { label: 'Ley art. 6 · Intermodalidad', to: 'ley-art-6' },
    { label: 'Reglamento art. 26 · Bici pública', to: 'ds-art-26' },
  ],
  'paper-politicas': [
    { label: 'Ley art. 5 · Infraestructura', to: 'ley-art-5' },
    { label: 'Ley art. 7 · 5 %', to: 'ley-art-7' },
    { label: 'Reglamento art. 17 · Incentivos', to: 'ds-art-17' },
  ],
  'paper-salud': [
    { label: 'Ley art. 2 · Políticas', to: 'ley-art-2' },
    { label: 'Ley art. 4 · Educación', to: 'ley-art-4' },
    { label: 'Reglamento art. 9 · II.EE.', to: 'ds-art-9' },
  ],
  'paper-ambiente': [
    { label: 'Ley art. 1 · Objeto', to: 'ley-art-1' },
    { label: 'Reglamento art. 5 · MTC', to: 'ds-art-5' },
  ],
  'paper-economia': [
    { label: 'Ley disp. 4 · Financiamiento', to: 'ley-disp-4' },
    { label: 'Reglamento art. 20 · Inversión', to: 'ds-art-20' },
    { label: 'Reglamento art. 25 · Financiar', to: 'ds-art-25' },
  ],
  'paper-seguridad': [
    { label: 'Ley art. 10 · Derechos', to: 'ley-art-10' },
    { label: 'Ley art. 11 · Infracciones', to: 'ley-art-11' },
    { label: 'Modificatorias RNT', to: 'ds-rnt' },
  ],
  'paper-ejemplos': [
    { label: 'Ley art. 5 · Infraestructura', to: 'ley-art-5' },
    { label: 'Reglamento art. 19 · Planes', to: 'ds-art-19' },
  ],
  'paper-bicipublica': [
    { label: 'Ley art. 8 · Bici pública', to: 'ley-art-8' },
    { label: 'Reglamento arts. 24–26 · Sistema', to: 'ds-art-24' },
  ],
}
