'use client';

import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export function ThemeToggle() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    return (
      <button
        className="p-2 pixel-border bg-muted hover:bg-border transition-colors"
        aria-label="Cambiar tema"
      >
        <span className="text-xl">☀️</span>
      </button>
    );
  }

  const { theme, toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 pixel-border bg-muted hover:bg-border transition-colors"
      aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      <span className="text-xl">
        {theme === 'dark' ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
