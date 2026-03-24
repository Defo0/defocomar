'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SECCIONES } from '@/types/content';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b-4 border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.PNG" 
              alt="DEFO" 
              width={120} 
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {SECCIONES.map(seccion => (
              <Link
                key={seccion.id}
                href={`/${seccion.id}`}
                className="px-3 py-2 text-sm hover:bg-muted transition-colors"
                style={{ color: `var(--${seccion.color})` }}
              >
                {seccion.emoji} {seccion.nombre}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link 
              href="/perfil"
              className="px-3 py-2 text-sm hover:bg-muted transition-colors"
            >
              👤 Perfil
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
