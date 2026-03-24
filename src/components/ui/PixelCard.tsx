interface PixelCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
  hover?: boolean;
}

export function PixelCard({ children, className = '', accent = false, hover = false }: PixelCardProps) {
  const borderClass = accent ? 'pixel-border-accent' : 'pixel-border';
  const hoverClass = hover ? 'hover:translate-x-1 hover:-translate-y-1 hover:pixel-shadow-accent transition-all cursor-pointer' : '';
  
  return (
    <div className={`bg-muted p-4 ${borderClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
