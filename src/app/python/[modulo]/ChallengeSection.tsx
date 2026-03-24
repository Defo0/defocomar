'use client';

import { useState, useEffect } from 'react';
import type { Desafio } from '@/types/content';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { CodeEditor } from '@/components/ui/CodeEditor';
import { SpoilerBlock } from '@/components/ui/SpoilerBlock';
import { completeChallenge, isChallengeCompleted, getProgress } from '@/lib/progress';

interface ChallengeSectionProps {
  desafios: Desafio[];
  seccion: string;
  moduloNumero: number;
}

const dificultadColors = {
  facil: 'text-accent-green',
  medio: 'text-accent-orange',
  dificil: 'text-accent-pink',
  integrador: 'text-accent-purple',
};

const dificultadLabels = {
  facil: '🟢 Fácil',
  medio: '🟡 Medio',
  dificil: '🔴 Difícil',
  integrador: '🏆 Integrador',
};

export function ChallengeSection({ desafios, seccion, moduloNumero }: ChallengeSectionProps) {
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
  const [totalXP, setTotalXP] = useState(0);

  useEffect(() => {
    const progress = getProgress();
    setCompletedIds(new Set(progress.completedChallenges));
    setTotalXP(progress.xp);
  }, []);

  const handleComplete = (desafio: Desafio) => {
    const challengeId = `${seccion}-${moduloNumero}-${desafio.numero}`;
    
    if (completedIds.has(challengeId)) return;
    
    const newProgress = completeChallenge(
      challengeId, 
      desafio.xp, 
      desafio.medalla || undefined
    );
    
    setCompletedIds(new Set(newProgress.completedChallenges));
    setTotalXP(newProgress.xp);
  };

  return (
    <div className="space-y-6">
      {desafios.map((desafio) => {
        const challengeId = `${seccion}-${moduloNumero}-${desafio.numero}`;
        const isCompleted = completedIds.has(challengeId);
        
        return (
          <PixelCard 
            key={desafio.numero}
            className={isCompleted ? 'border-l-4 border-l-accent-green' : ''}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={`text-sm font-bold ${dificultadColors[desafio.dificultad]}`}>
                  {dificultadLabels[desafio.dificultad]}
                </span>
                <h3 className="font-bold text-lg mt-1">
                  Desafío {desafio.numero}: {desafio.titulo}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xp font-bold">+{desafio.xp} XP</span>
                {desafio.medalla && <span className="text-xl">🏅</span>}
                {isCompleted && <span className="text-accent-green text-xl">✓</span>}
              </div>
            </div>

            <div className="mb-6 text-muted-foreground whitespace-pre-line">
              {desafio.enunciado}
            </div>

            <div className="mb-6">
              <h4 className="font-bold mb-2 text-sm">Tu código:</h4>
              <CodeEditor 
                placeholder="# Escribí tu solución acá..."
                minHeight="150px"
              />
            </div>

            <div className="mb-6">
              <SpoilerBlock buttonText="👁️ Revelar solución" revealedButtonText="🙈 Ocultar">
                <pre className="p-4 bg-background pixel-border overflow-x-auto font-[family-name:var(--font-fira-code)] text-sm">
                  <code>{desafio.solucion_oculta}</code>
                </pre>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  Recordá: la idea es copiarla a mano si te trabás, no pegarla.
                </p>
              </SpoilerBlock>
            </div>

            <div className="flex justify-end">
              <PixelButton
                variant={isCompleted ? 'secondary' : 'success'}
                onClick={() => handleComplete(desafio)}
                disabled={isCompleted}
              >
                {isCompleted ? '✓ Completado' : '✓ Marcar como completado'}
              </PixelButton>
            </div>
          </PixelCard>
        );
      })}

      <div className="text-center p-4 bg-muted pixel-border">
        <span className="text-xp font-bold">XP Total: {totalXP}</span>
      </div>
    </div>
  );
}
