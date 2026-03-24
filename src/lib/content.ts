import type { SeccionData, Modulo } from '@/types/content';

const modulosCache: Record<string, SeccionData> = {};

export async function getModulo(seccion: string, numero: number): Promise<SeccionData | null> {
  const key = `${seccion}-${numero.toString().padStart(2, '0')}`;
  
  if (modulosCache[key]) {
    return modulosCache[key];
  }
  
  try {
    const data = await import(`@/data/${seccion}/modulo-${numero.toString().padStart(2, '0')}.json`);
    modulosCache[key] = data.default as SeccionData;
    return modulosCache[key];
  } catch {
    return null;
  }
}

export async function getModuloBySlug(seccion: string, slug: string): Promise<SeccionData | null> {
  const numeroMatch = slug.match(/^(\d+)/);
  if (!numeroMatch) return null;
  
  const numero = parseInt(numeroMatch[1], 10);
  return getModulo(seccion, numero);
}

export async function getAllModulos(seccion: string): Promise<Modulo[]> {
  const modulos: Modulo[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const data = await getModulo(seccion, i);
    if (data) {
      modulos.push(data.modulo);
    } else {
      break;
    }
  }
  
  return modulos;
}

export const PYTHON_MODULOS = [
  { numero: 1, titulo: 'Variables y tipos de datos', slug: '01-variables' },
  { numero: 2, titulo: 'Print e Input', slug: '02-print-input' },
  { numero: 3, titulo: 'Listas', slug: '03-listas' },
  { numero: 4, titulo: 'Diccionarios', slug: '04-diccionarios' },
  { numero: 5, titulo: 'Tuplas y Sets', slug: '05-tuplas-sets' },
  { numero: 6, titulo: 'Condicionales', slug: '06-condicionales' },
  { numero: 7, titulo: 'Bucles (for, while)', slug: '07-bucles' },
  { numero: 8, titulo: 'Funciones', slug: '08-funciones' },
  { numero: 9, titulo: 'Argumentos por consola (sys.argv)', slug: '09-args-consola' },
  { numero: 10, titulo: 'Métodos de listas y diccionarios', slug: '10-metodos' },
  { numero: 11, titulo: 'List/Dict comprehensions', slug: '11-comprehensions' },
  { numero: 12, titulo: 'Manejo de errores', slug: '12-errores' },
  { numero: 13, titulo: 'Clases y OOP básico', slug: '13-clases' },
  { numero: 14, titulo: 'Módulos e imports', slug: '14-modulos' },
  { numero: 15, titulo: 'Archivos', slug: '15-archivos' },
  { numero: 16, titulo: 'JSON', slug: '16-json' },
  { numero: 17, titulo: 'APIs y requests', slug: '17-apis' },
  { numero: 18, titulo: 'Pandas', slug: '18-pandas' },
  { numero: 19, titulo: 'INTEGRADOR', slug: '19-integrador' },
];
