export interface Desafio {
  numero: number;
  titulo: string;
  enunciado: string;
  dificultad: 'facil' | 'medio' | 'dificil' | 'integrador';
  xp: number;
  medalla: string | null;
  solucion_oculta: string;
}

export interface Teoria {
  explicacion: string;
  analogia: string;
  ejemplos: string[];
  personaje: string;
}

export interface Modulo {
  numero: number;
  titulo: string;
  slug: string;
  teoria: Teoria;
  desafios: Desafio[];
}

export interface SeccionData {
  seccion: string;
  modulo: Modulo;
}

export interface Seccion {
  id: string;
  nombre: string;
  emoji: string;
  color: string;
  descripcion: string;
  disponible: boolean;
}

export const SECCIONES: Seccion[] = [
  {
    id: 'python',
    nombre: 'Python',
    emoji: '🐍',
    color: 'python',
    descripcion: 'Fundamentos de programación con Python',
    disponible: true,
  },
  {
    id: 'sql',
    nombre: 'SQL',
    emoji: '🐘',
    color: 'sql',
    descripcion: 'Bases de datos y consultas SQL',
    disponible: false,
  },
  {
    id: 'bash',
    nombre: 'Bash',
    emoji: '🐧',
    color: 'bash',
    descripcion: 'Terminal y scripting en Bash',
    disponible: false,
  },
  {
    id: 'git',
    nombre: 'Git',
    emoji: '🐱',
    color: 'git',
    descripcion: 'Control de versiones con Git',
    disponible: false,
  },
  {
    id: 'docker',
    nombre: 'Docker',
    emoji: '🐋',
    color: 'docker',
    descripcion: 'Contenedores y Docker',
    disponible: false,
  },
  {
    id: 'ia',
    nombre: 'IA',
    emoji: '🦊',
    color: 'ia',
    descripcion: 'Inteligencia Artificial y Machine Learning',
    disponible: false,
  },
];

export interface UserProgress {
  xp: number;
  completedChallenges: string[];
  completedModules: string[];
  medals: string[];
}

export const RANGOS = [
  { nombre: 'Trainee', minXp: 0 },
  { nombre: 'Junior', minXp: 100 },
  { nombre: 'Semi Senior', minXp: 300 },
  { nombre: 'Semi Senior Advanced', minXp: 600 },
  { nombre: 'Leader', minXp: 1000 },
  { nombre: 'Architect', minXp: 2000 },
] as const;

export const AVATAR_ETAPAS = [
  { nombre: 'Huevo', minModulos: 0 },
  { nombre: 'Cría', minModulos: 2 },
  { nombre: 'Adolescente', minModulos: 5 },
  { nombre: 'Adulto', minModulos: 10 },
  { nombre: 'Adulto Pro', minModulos: 20 },
  { nombre: 'Legendario', minModulos: 35 },
] as const;

export function getRango(xp: number): string {
  for (let i = RANGOS.length - 1; i >= 0; i--) {
    if (xp >= RANGOS[i].minXp) {
      return RANGOS[i].nombre;
    }
  }
  return RANGOS[0].nombre;
}

export function getAvatarEtapa(modulosCompletados: number): string {
  for (let i = AVATAR_ETAPAS.length - 1; i >= 0; i--) {
    if (modulosCompletados >= AVATAR_ETAPAS[i].minModulos) {
      return AVATAR_ETAPAS[i].nombre;
    }
  }
  return AVATAR_ETAPAS[0].nombre;
}
