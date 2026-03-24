'use client';

import { AVATAR_ETAPAS } from '@/types/content';

interface AvatarDisplayProps {
  modulosCompletados: number;
  size?: 'sm' | 'md' | 'lg';
}

const avatarEmojis: Record<string, string> = {
  'Huevo': '🥒',
  'Cría': '🐣',
  'Adolescente': '🐥',
  'Adulto': '🐤',
  'Adulto Pro': '🦅',
  'Legendario': '🐉',
};

const sizes = {
  sm: 'text-2xl',
  md: 'text-4xl',
  lg: 'text-6xl',
};

export function AvatarDisplay({ modulosCompletados, size = 'md' }: AvatarDisplayProps) {
  const etapaIndex = AVATAR_ETAPAS.findIndex((e, i) => {
    const next = AVATAR_ETAPAS[i + 1];
    return !next || modulosCompletados < next.minModulos;
  });
  
  const etapa = AVATAR_ETAPAS[etapaIndex];
  const nextEtapa = AVATAR_ETAPAS[etapaIndex + 1];
  const emoji = avatarEmojis[etapa.nombre] || '🥚';

  return (
    <div className="text-center">
      <div className={`${sizes[size]} mb-2`}>
        {emoji}
      </div>
      <div className="text-sm font-bold text-accent-cyan">
        {etapa.nombre}
      </div>
      {nextEtapa && (
        <div className="text-xs text-muted-foreground">
          {nextEtapa.minModulos - modulosCompletados} módulos para {nextEtapa.nombre}
        </div>
      )}
    </div>
  );
}
