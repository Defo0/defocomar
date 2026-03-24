import Link from "next/link";
import { PixelCard } from "@/components/ui/PixelCard";
import { PYTHON_MODULOS } from "@/lib/content";

export const metadata = {
  title: "Python | DEFO.com.ar",
  description: "Aprendé Python desde cero con ejercicios prácticos y gamificación",
};

export default function PythonPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-6xl mb-4 block">🐍</span>
        <h1 className="font-[family-name:var(--font-press-start)] text-2xl text-python mb-4">
          Python
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          19 módulos que te llevan desde variables básicas hasta un proyecto integrador. 
          Cada módulo tiene teoría con analogías cotidianas y desafíos graduales.
        </p>
      </div>

      <div className="grid gap-4">
        {PYTHON_MODULOS.map((modulo, index) => {
          const isAvailable = modulo.numero === 1;
          
          return (
            <Link 
              key={modulo.slug}
              href={isAvailable ? `/python/${modulo.slug}` : '#'}
              className={!isAvailable ? 'cursor-not-allowed' : ''}
            >
              <PixelCard 
                hover={isAvailable}
                className={`flex items-center gap-4 ${!isAvailable ? 'opacity-50' : ''}`}
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-python/20 pixel-border text-python font-bold">
                  {String(modulo.numero).padStart(2, '0')}
                </div>
                
                <div className="flex-1">
                  <h2 className="font-bold text-lg">
                    {modulo.titulo}
                    {modulo.numero === 7 && <span className="ml-2">⭐</span>}
                    {modulo.numero === 19 && <span className="ml-2">🏆</span>}
                  </h2>
                  {!isAvailable && (
                    <span className="text-xs text-muted-foreground">Próximamente</span>
                  )}
                </div>

                <div className="text-2xl">
                  {isAvailable ? '→' : '🔒'}
                </div>
              </PixelCard>
            </Link>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <PixelCard accent>
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Tip:</strong> Los módulos marcados con ⭐ son módulos clave. 
            El módulo 🏆 es el integrador final que combina todo lo aprendido.
          </p>
        </PixelCard>
      </div>
    </div>
  );
}
