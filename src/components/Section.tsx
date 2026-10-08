import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fromLeft, useReveal } from "lib/motion";

interface SectionProps {
  /** Anchor target; must match the matching entry in `navItems`. */
  id: string;
  title: string;
  /** Optional supporting line under the heading. */
  intro?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Semantic section wrapper. Owns the landmark, the anchor id, the accessible
 * name and the heading style so no section styles its own title.
 */
export function Section({ id, title, intro, children, className = "" }: SectionProps) {
  const reveal = useReveal();
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-14 xl2:px-20 xl2:py-20 ${className}`}
    >
      <motion.div variants={fromLeft} {...reveal}>
        <h2
          id={headingId}
          className="text-large font-bold tracking-tight xl3:text-xlarge"
        >
          {title}
        </h2>
        {intro ? <p className="mt-2 max-w-2xl text-medium text-grey/80 sm:mt-3">{intro}</p> : null}
      </motion.div>

      <div className="mt-6 sm:mt-8 xl2:mt-10">{children}</div>
    </section>
  );
}
