import { getRango } from '@/types/content';

interface RangoBadgeProps {
  xp: number;
}

const rangoColors: Record<string, string> = {
  'Trainee': 'bg-muted-foreground',
  'Junior': 'bg-accent-green',
  'Semi Senior': 'bg-accent-cyan',
  'Semi Senior Advanced': 'bg-accent-blue',
  'Leader': 'bg-accent-purple',
  'Architect': 'bg-accent-pink',
};

export function RangoBadge({ xp }: RangoBadgeProps) {
  const rango = getRango(xp);
  const colorClass = rangoColors[rango] || 'bg-muted-foreground';

  return (
    <span className={`px-2 py-1 text-xs font-bold text-background pixel-border ${colorClass}`}>
      {rango}
    </span>
  );
}
