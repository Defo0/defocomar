# DEFO.com.ar

> Hice esta plataforma para mí, para practicar yo. Si a vos te sirve, bienvenido. Te quiero mucho.

**Reaprendiendo a programar codeando a mano.**

Plataforma educativa de programación con estética pixel art, sistema de recompensas y filosofía "código de honor".

[![Live](https://img.shields.io/badge/Live-defo.com.ar-00d4ff?style=for-the-badge)](https://www.defo.com.ar)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-backend-3ecf8e?style=flat-square&logo=supabase)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000?style=flat-square&logo=vercel)](https://vercel.com)

---

## Qué es DEFO

Una plataforma para practicar programación escribiendo código a mano. No es un curso tradicional. No te controla. No te juzga.

La idea es recuperar la chispa del código: leer, entender, escribir, equivocarse, volver a escribir.

### Secciones

| Sección | Estado |
|---------|--------|
| 🐍 Python | 19 módulos (en desarrollo) |
| 🐘 SQL | Próximamente |
| 🐧 Bash | Próximamente |
| 🐱 Git | Próximamente |
| 🐳 Docker | Próximamente |
| 🤖 IA | Próximamente |

### Código de Honor

> Nada te impide usar IA para resolver los desafíos. La plataforma no te controla.
> El punto es practicar escribiendo código a mano para recuperar o desarrollar músculo de programación.
> La solución oculta existe para copiarla a mano si te trabás, no para pegarla.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Estilos**: Tailwind CSS v4 + pixel art design system
- **Fuentes**: Press Start 2P (títulos), Fira Code (código)
- **Backend**: Supabase (futuro auth + persistencia)
- **Deploy**: Vercel
- **Progreso**: localStorage (MVP)

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz con fonts y tema
│   ├── page.tsx                # Landing page
│   ├── python/
│   │   ├── page.tsx            # Lista de módulos Python
│   │   └── [modulo]/
│   │       ├── page.tsx        # Página dinámica por módulo
│   │       └── ChallengeSection.tsx
│   └── perfil/
│       └── page.tsx            # Perfil con stats y about me
├── components/
│   ├── ui/                     # PixelCard, PixelButton, CodeEditor, SpoilerBlock
│   ├── layout/                 # Navbar, Footer
│   ├── gamification/           # XPBar, AvatarDisplay, RangoBadge
│   └── theme/                  # ThemeProvider, ThemeToggle
├── lib/
│   ├── content.ts              # Loader de módulos desde JSON
│   ├── progress.ts             # Gestión de progreso (localStorage)
│   └── supabase.ts             # Cliente Supabase
├── data/
│   └── python/
│       └── modulo-01.json      # Contenido del módulo
└── types/
    └── content.ts              # Tipos TS + constantes de gamificación
```

## Desarrollo local

```bash
# Clonar
git clone https://github.com/Defo0/defocomar.git
cd defocomar

# Instalar dependencias
npm install

# Crear variables de entorno
cp .env.local.example .env.local
# Completar con tus credenciales de Supabase

# Correr en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Sistema de Recompensas

| Concepto | Descripción |
|----------|-------------|
| **XP** | Ganá experiencia completando desafíos |
| **Rangos** | Trainee → Junior → Semi Senior → Senior → Lead → Architect |
| **Avatar** | Evoluciona: Huevo → Cría → Joven → Adulto → Maestro → Legendario |
| **Medallas** | Logros específicos por hitos dentro de cada sección |

## Hecho con

☕ y Claude a full

---

**[www.defo.com.ar](https://www.defo.com.ar)**
