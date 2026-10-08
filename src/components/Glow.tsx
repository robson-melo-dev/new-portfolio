interface GlowProps {
  className?: string;
}

/**
 * Decorative ambient light. Purely visual, so it is removed from the
 * accessibility tree entirely.
 */
export function Glow({ className = "" }: GlowProps) {
  return <div aria-hidden="true" className={`glow ${className}`} />;
}
