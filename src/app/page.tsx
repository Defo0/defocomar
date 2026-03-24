import Image from "next/image";
import Link from "next/link";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import { SECCIONES } from "@/types/content";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/logo.PNG"
            alt="DEFO.com.ar"
            width={400}
            height={200}
            className="mx-auto mb-8"
            priority
          />
          
          <h1 className="font-[family-name:var(--font-press-start)] text-xl md:text-2xl mb-8 glow-cyan">
            Reaprendiendo a programar
            <br />
            <span className="text-accent-green">codeando a mano</span>
          </h1>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/python">
              <PixelButton variant="primary">
                🐍 Empezar con Python
              </PixelButton>
            </Link>
            <Link href="/perfil">
              <PixelButton variant="secondary">
                👤 Ver mi perfil
              </PixelButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Secciones Grid */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-press-start)] text-lg text-center mb-8">
            Secciones
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECCIONES.map((seccion) => (
              <Link 
                key={seccion.id} 
                href={seccion.disponible ? `/${seccion.id}` : '#'}
                className={!seccion.disponible ? 'cursor-not-allowed' : ''}
              >
                <PixelCard 
                  hover={seccion.disponible} 
                  className={`h-full ${!seccion.disponible ? 'opacity-50' : ''}`}
                >
                  <div className="text-center">
                    <span className="text-4xl mb-3 block">{seccion.emoji}</span>
                    <h3 
                      className="font-bold text-lg mb-2"
                      style={{ color: seccion.disponible ? `var(--${seccion.color})` : undefined }}
                    >
                      {seccion.nombre}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {seccion.descripcion}
                    </p>
                    {!seccion.disponible && (
                      <span className="inline-block mt-2 text-xs px-2 py-1 bg-border">
                        Próximamente
                      </span>
                    )}
                  </div>
                </PixelCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Código de Honor */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <PixelCard accent className="text-center">
            <h2 className="font-[family-name:var(--font-press-start)] text-lg mb-6 text-accent-cyan">
              Código de Honor
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nada te impide usar IA para resolver los desafíos. 
                La plataforma <strong className="text-foreground">no te controla</strong>.
              </p>
              <p>
                El punto es practicar escribiendo código a mano para 
                <strong className="text-accent-green"> recuperar o desarrollar músculo de programación</strong>.
              </p>
              <p>
                La solución oculta existe para copiarla a mano si te trabás, 
                <strong className="text-accent-pink"> no para pegarla</strong>.
              </p>
            </div>
          </PixelCard>
        </div>
      </section>

      {/* Gamificación Preview */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-press-start)] text-lg mb-8">
            Sistema de Recompensas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PixelCard>
              <span className="text-4xl block mb-3">🥚</span>
              <h3 className="font-bold text-accent-cyan mb-2">Avatar Evolutivo</h3>
              <p className="text-sm text-muted-foreground">
                Tu avatar evoluciona de Huevo a Legendario según los módulos completados
              </p>
            </PixelCard>
            
            <PixelCard>
              <span className="text-4xl block mb-3">⭐</span>
              <h3 className="font-bold text-xp mb-2">Sistema de XP</h3>
              <p className="text-sm text-muted-foreground">
                Ganá experiencia con cada desafío completado y subí de rango
              </p>
            </PixelCard>
            
            <PixelCard>
              <span className="text-4xl block mb-3">🏅</span>
              <h3 className="font-bold text-accent-pink mb-2">Medallas</h3>
              <p className="text-sm text-muted-foreground">
                Desbloqueá medallas por hitos específicos dentro de cada sección
              </p>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-press-start)] text-lg mb-4">
            ¿Listo para codear?
          </h2>
          <p className="text-muted-foreground mb-8">
            Empezá con Python, el lenguaje perfecto para principiantes y expertos.
          </p>
          <Link href="/python">
            <PixelButton variant="success">
              🚀 Ir a Python
            </PixelButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
