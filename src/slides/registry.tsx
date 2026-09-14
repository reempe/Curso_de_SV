import type { ComponentType } from 'react'
import { Art01 } from './Art01'
import { Art02 } from './Art02'
import { Art03 } from './Art03'
import { Art04 } from './Art04'
import { Art05 } from './Art05'
import { Art06 } from './Art06'
import { Art07 } from './Art07'
import { Art08 } from './Art08'
import { Art09 } from './Art09'
import { Art10 } from './Art10'
import { Art11 } from './Art11'
import { Cierre } from './Cierre'
import { Disp01 } from './Disp01'
import { Disp02 } from './Disp02'
import { Disp03 } from './Disp03'
import { Disp04 } from './Disp04'
import { Hub } from './Hub'
import { Indice } from './Indice'
import { Portada } from './Portada'
import { DsArticle } from './ds/DsArticle'
import { DsCierre } from './ds/DsCierre'
import { DsDisposition } from './ds/DsDisposition'
import { DsIndice } from './ds/DsIndice'
import { DsMapa } from './ds/DsMapa'
import { DsPortada } from './ds/DsPortada'
import { DsRnt } from './ds/DsRnt'

function dsArt(n: number) {
  return function DsArtView() {
    return <DsArticle n={n} />
  }
}

function dsDisp(n: 1 | 2 | 3 | 4) {
  return function DsDispView() {
    return <DsDisposition n={n} />
  }
}

export const slideViews: Record<string, ComponentType> = {
  hub: Hub,
  'ley-portada': Portada,
  'ley-indice': Indice,
  'ley-art-1': Art01,
  'ley-art-2': Art02,
  'ley-art-3': Art03,
  'ley-art-4': Art04,
  'ley-art-5': Art05,
  'ley-art-6': Art06,
  'ley-art-7': Art07,
  'ley-art-8': Art08,
  'ley-art-9': Art09,
  'ley-art-10': Art10,
  'ley-art-11': Art11,
  'ley-disp-1': Disp01,
  'ley-disp-2': Disp02,
  'ley-disp-3': Disp03,
  'ley-disp-4': Disp04,
  'ley-cierre': Cierre,
  'ds-portada': DsPortada,
  'ds-indice': DsIndice,
  'ds-mapa': DsMapa,
  'ds-rnt': DsRnt,
  'ds-cierre': DsCierre,
  'ds-disp-1': dsDisp(1),
  'ds-disp-2': dsDisp(2),
  'ds-disp-3': dsDisp(3),
  'ds-disp-4': dsDisp(4),
}

for (let n = 1; n <= 26; n += 1) {
  slideViews[`ds-art-${n}`] = dsArt(n)
}
