interface BadgeProps {
  children: string;
}

/** Tech tag pill, shared by TechStack and Projects. */
export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1 font-code text-smaller tracking-wide text-accent-green sm:text-small">
      {children}
    </span>
  );
}
