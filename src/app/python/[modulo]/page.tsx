import { notFound } from "next/navigation";
import Link from "next/link";
import { getModuloBySlug, PYTHON_MODULOS } from "@/lib/content";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import { ChallengeSection } from "./ChallengeSection";

interface Props {
  params: Promise<{ modulo: string }>;
}

export async function generateStaticParams() {
  return PYTHON_MODULOS.map((m) => ({
    modulo: m.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { modulo: slug } = await params;
  const moduloInfo = PYTHON_MODULOS.find(m => m.slug === slug);
  
  return {
    title: moduloInfo 
      ? `${moduloInfo.titulo} | Python | DEFO` 
      : "Módulo | Python | DEFO",
  };
}

export default async function ModuloPage({ params }: Props) {
  const { modulo: slug } = await params;
  const data = await getModuloBySlug("python", slug);
  
  if (!data) {
    notFound();
  }

  const { modulo } = data;
  const moduloIndex = PYTHON_MODULOS.findIndex(m => m.slug === slug);
  const prevModulo = moduloIndex > 0 ? PYTHON_MODULOS[moduloIndex - 1] : null;
  const nextModulo = moduloIndex < PYTHON_MODULOS.length - 1 ? PYTHON_MODULOS[moduloIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/python" className="text-muted-foreground hover:text-foreground transition-colors">
          ← Volver a Python
        </Link>
      </div>

      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-python/20 text-python font-bold mb-4 pixel-border">
          Módulo {String(modulo.numero).padStart(2, '0')}
        </div>
        <h1 className="font-[family-name:var(--font-press-start)] text-xl md:text-2xl mb-4">
          {modulo.titulo}
        </h1>
      </div>

      {/* Teoría */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-press-start)] text-lg mb-6 text-accent-cyan">
          📖 Teoría
        </h2>
        
        <PixelCard className="space-y-6">
          {modulo.teoria.personaje && (
            <div className="flex items-start gap-3 p-3 bg-background pixel-border">
              <span className="text-2xl">🐍</span>
              <p className="text-sm italic text-muted-foreground">
                {modulo.teoria.personaje}
              </p>
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-line">{modulo.teoria.explicacion}</p>
          </div>

          {modulo.teoria.analogia && (
            <div className="p-4 bg-accent-cyan/10 pixel-border">
              <h3 className="font-bold text-accent-cyan mb-2">💡 Analogía</h3>
              <p className="text-muted-foreground">{modulo.teoria.analogia}</p>
            </div>
          )}

          {modulo.teoria.ejemplos && modulo.teoria.ejemplos.length > 0 && (
            <div>
              <h3 className="font-bold mb-3">Ejemplos:</h3>
              <div className="space-y-3">
                {modulo.teoria.ejemplos.map((ejemplo, i) => (
                  <pre 
                    key={i} 
                    className="p-4 bg-background pixel-border overflow-x-auto font-[family-name:var(--font-fira-code)] text-sm"
                  >
                    <code>{ejemplo}</code>
                  </pre>
                ))}
              </div>
            </div>
          )}
        </PixelCard>
      </section>

      {/* Desafíos */}
      <section className="mb-12">
        <h2 className="font-[family-name:var(--font-press-start)] text-lg mb-6 text-accent-green">
          🎯 Desafíos
        </h2>
        
        <ChallengeSection 
          desafios={modulo.desafios} 
          seccion="python"
          moduloNumero={modulo.numero}
        />
      </section>

      {/* Navegación */}
      <div className="flex justify-between items-center pt-8 border-t-4 border-border">
        {prevModulo ? (
          <Link href={`/python/${prevModulo.slug}`}>
            <PixelButton variant="secondary">
              ← {prevModulo.titulo}
            </PixelButton>
          </Link>
        ) : (
          <div />
        )}
        
        {nextModulo ? (
          <Link href={`/python/${nextModulo.slug}`}>
            <PixelButton variant="primary">
              {nextModulo.titulo} →
            </PixelButton>
          </Link>
        ) : (
          <Link href="/python">
            <PixelButton variant="success">
              🏆 Completaste Python
            </PixelButton>
          </Link>
        )}
      </div>
    </div>
  );
}
