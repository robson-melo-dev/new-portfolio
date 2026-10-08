import { usePrefersReducedMotion } from "hooks/usePrefersReducedMotion";
import type { Variants } from "framer-motion";

/**
 * Shared scroll-reveal variants. These replace the inline
 * `initial`/`whileInView`/`transition` objects that were repeated at nearly
 * every element in the previous implementation.
 *
 * Consumed through `useReveal()`, which also handles reduced motion.
 */

export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fromLeft: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fromRight: Variants = {
  hidden: { opacity: 0, x: 64 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Staggers direct children that use one of the variants above. */
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/**
 * Spread onto a `motion.*` element to reveal it once on scroll.
 * `once: true` avoids re-animating on every scroll pass, which the previous
 * `once: false` config did on all sections at once.
 */
export const revealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
} as const;

/**
 * Scroll-reveal props for a `motion.*` element.
 *
 * Under `prefers-reduced-motion: reduce` the element is mounted already in its
 * final state: no entrance animation, and no dependence on scrolling into view
 * to become visible. The CSS guard in `index.css` cannot do this on its own,
 * because framer-motion drives opacity and transform from JS rather than
 * through CSS transitions.
 */
export function useReveal() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return { initial: "visible", animate: "visible" } as const;
  }
  return revealProps;
}
