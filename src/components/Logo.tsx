interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  return (
    <div className={`font-serif font-semibold ${variant === 'light' ? 'text-cream' : 'text-hunter'} ${className}`}>
      <span className="text-2xl tracking-tight">J Calvin</span>
      <span className="block text-xs tracking-[0.2em] uppercase font-sans font-normal text-bronze">
        Property Care
      </span>
    </div>
  );
}
