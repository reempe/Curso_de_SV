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
import { Indice } from './Indice'
import { Portada } from './Portada'

export const slideViews: Record<string, ComponentType> = {
  portada: Portada,
  indice: Indice,
  'art-1': Art01,
  'art-2': Art02,
  'art-3': Art03,
  'art-4': Art04,
  'art-5': Art05,
  'art-6': Art06,
  'art-7': Art07,
  'art-8': Art08,
  'art-9': Art09,
  'art-10': Art10,
  'art-11': Art11,
  'disp-1': Disp01,
  'disp-2': Disp02,
  'disp-3': Disp03,
  'disp-4': Disp04,
  cierre: Cierre,
}
