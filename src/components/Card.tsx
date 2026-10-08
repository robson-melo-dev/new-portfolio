import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/** Surface shared by project and experience entries. */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-chrome-border/60 bg-gradient-to-b from-black/90 to-black/40 p-5 transition-colors hover:border-accent-green/50 sm:p-6 ${className}`}
    >
      {children}
    </div>
  );
}
