'use client';

import { RANGOS } from '@/types/content';

interface XPBarProps {
  xp: number;
  showLabel?: boolean;
}

export function XPBar({ xp, showLabel = true }: XPBarProps) {
  const currentRangoIndex = RANGOS.findIndex((r, i) => {
    const next = RANGOS[i + 1];
    return !next || xp < next.minXp;
  });
  
  const currentRango = RANGOS[currentRangoIndex];
  const nextRango = RANGOS[currentRangoIndex + 1];
  
  const xpInCurrentRango = xp - currentRango.minXp;
  const xpToNextRango = nextRango ? nextRango.minXp - currentRango.minXp : 1000;
  const progress = nextRango ? (xpInCurrentRango / xpToNextRango) * 100 : 100;

  return (
    <div className="space-y-1">
      {showLabel && (
        <div className="flex justify-between text-sm">
          <span className="text-xp font-bold">{xp} XP</span>
          <span className="text-muted-foreground">
            {nextRango ? `${nextRango.minXp - xp} XP para ${nextRango.nombre}` : 'Nivel máximo'}
          </span>
        </div>
      )}
      <div className="h-4 bg-muted pixel-border overflow-hidden">
        <div 
          className="h-full bg-xp animate-fill-xp"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}
