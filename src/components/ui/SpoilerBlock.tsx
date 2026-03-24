'use client';

import { useState } from 'react';
import { PixelButton } from './PixelButton';

interface SpoilerBlockProps {
  children: React.ReactNode;
  buttonText?: string;
  revealedButtonText?: string;
}

export function SpoilerBlock({ 
  children, 
  buttonText = '👁️ Revelar solución',
  revealedButtonText = '🙈 Ocultar solución'
}: SpoilerBlockProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="space-y-3">
      <PixelButton 
        variant="secondary" 
        onClick={() => setRevealed(!revealed)}
      >
        {revealed ? revealedButtonText : buttonText}
      </PixelButton>
      
      <div className={revealed ? 'spoiler-revealed' : 'spoiler-hidden'}>
        {children}
      </div>
    </div>
  );
}
