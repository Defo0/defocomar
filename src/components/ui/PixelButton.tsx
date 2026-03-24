interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-accent-cyan text-background hover:brightness-110',
  secondary: 'bg-muted text-foreground hover:bg-border',
  success: 'bg-accent-green text-background hover:brightness-110',
  danger: 'bg-accent-pink text-background hover:brightness-110',
};

export function PixelButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false,
  className = '',
  type = 'button'
}: PixelButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 font-bold
        pixel-border pixel-shadow
        active:translate-x-1 active:translate-y-1 active:shadow-none
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-x-0 disabled:active:translate-y-0
        transition-all
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
