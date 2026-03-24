'use client';

import { useEffect, useState } from 'react';
import { PixelCard } from '@/components/ui/PixelCard';
import { PixelButton } from '@/components/ui/PixelButton';
import { XPBar } from '@/components/gamification/XPBar';
import { AvatarDisplay } from '@/components/gamification/AvatarDisplay';
import { RangoBadge } from '@/components/gamification/RangoBadge';
import { getProgress, resetProgress } from '@/lib/progress';
import type { UserProgress } from '@/types/content';
import { AVATAR_ETAPAS } from '@/types/content';

const ABOUT_ME_KEY = 'defo_about_me';

export default function PerfilPage() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showReset, setShowReset] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [previewModulos, setPreviewModulos] = useState<number | null>(null);

  useEffect(() => {
    setProgress(getProgress());
    const savedAbout = localStorage.getItem(ABOUT_ME_KEY);
    if (savedAbout) setAboutMe(savedAbout);
  }, []);

  const handleSaveAboutMe = () => {
    localStorage.setItem(ABOUT_ME_KEY, aboutMe);
  };

  const handleReset = () => {
    resetProgress();
    setProgress(getProgress());
    setShowReset(false);
  };

  if (!progress) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[family-name:var(--font-press-start)] text-2xl text-center mb-12">
        👤 Mi Perfil
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Avatar */}
        <PixelCard className="text-center">
          <h2 className="font-bold mb-4">Avatar</h2>
          <AvatarDisplay 
            modulosCompletados={previewModulos ?? progress.completedModules.length} 
            size="lg" 
          />
          
          {/* Preview de etapas */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground mb-2">Probar etapas:</p>
            <div className="flex flex-wrap gap-1 justify-center">
              <button
                onClick={() => setPreviewModulos(null)}
                className={`px-2 py-1 text-xs ${previewModulos === null ? 'bg-accent-cyan text-background' : 'bg-muted'}`}
              >
                Actual
              </button>
              {AVATAR_ETAPAS.map((etapa) => (
                <button
                  key={etapa.nombre}
                  onClick={() => setPreviewModulos(etapa.minModulos)}
                  className={`px-2 py-1 text-xs ${previewModulos === etapa.minModulos ? 'bg-accent-cyan text-background' : 'bg-muted'}`}
                >
                  {etapa.nombre}
                </button>
              ))}
            </div>
          </div>
        </PixelCard>

        {/* Stats */}
        <PixelCard>
          <h2 className="font-bold mb-4">Estadísticas</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Rango:</span>
              <RangoBadge xp={progress.xp} />
            </div>
            
            <div>
              <XPBar xp={progress.xp} />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Desafíos completados:</span>
              <span className="font-bold text-accent-green">
                {progress.completedChallenges.length}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Módulos completados:</span>
              <span className="font-bold text-accent-cyan">
                {progress.completedModules.length}
              </span>
            </div>
          </div>
        </PixelCard>
      </div>

      {/* Medallas */}
      <PixelCard className="mb-8">
        <h2 className="font-bold mb-4">🏅 Medallas</h2>
        
        {progress.medals.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {progress.medals.map((medal: string, i: number) => (
              <span 
                key={i}
                className="px-3 py-1 bg-accent-gold/20 text-xp pixel-border text-sm"
              >
                {medal}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-sm">
            Todavía no tenés medallas. ¡Completá desafíos para desbloquearlas!
          </p>
        )}
      </PixelCard>

      {/* About Me */}
      <PixelCard className="mb-8">
        <h2 className="font-bold mb-4">✏️ Sobre mí</h2>
        <textarea
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          placeholder="Contá algo sobre vos... ¿Qué te trae a DEFO? ¿Qué querés aprender?"
          className="w-full p-3 bg-background pixel-border resize-none min-h-[100px] text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent-cyan"
        />
        <div className="mt-3 flex justify-end">
          <PixelButton variant="secondary" onClick={handleSaveAboutMe}>
            💾 Guardar
          </PixelButton>
        </div>
      </PixelCard>

      {/* Progreso por sección */}
      <PixelCard className="mb-8">
        <h2 className="font-bold mb-4">📊 Progreso por Sección</h2>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-background pixel-border">
            <span className="flex items-center gap-2">
              🐍 <span className="text-python">Python</span>
            </span>
            <span className="text-sm text-muted-foreground">
              {progress.completedChallenges.filter((c: string) => c.startsWith('python-')).length} desafíos
            </span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-background pixel-border opacity-50">
            <span className="flex items-center gap-2">
              🐘 <span>SQL</span>
            </span>
            <span className="text-sm text-muted-foreground">Próximamente</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-background pixel-border opacity-50">
            <span className="flex items-center gap-2">
              🐧 <span>Bash</span>
            </span>
            <span className="text-sm text-muted-foreground">Próximamente</span>
          </div>
        </div>
      </PixelCard>

      {/* Reset */}
      <div className="text-center">
        {!showReset ? (
          <button 
            onClick={() => setShowReset(true)}
            className="text-sm text-muted-foreground hover:text-accent-pink transition-colors"
          >
            Resetear progreso
          </button>
        ) : (
          <PixelCard accent>
            <p className="mb-4 text-sm">
              ¿Estás seguro? Esto borrará todo tu progreso, XP y medallas.
            </p>
            <div className="flex gap-2 justify-center">
              <PixelButton variant="danger" onClick={handleReset}>
                Sí, resetear
              </PixelButton>
              <PixelButton variant="secondary" onClick={() => setShowReset(false)}>
                Cancelar
              </PixelButton>
            </div>
          </PixelCard>
        )}
      </div>
    </div>
  );
}
