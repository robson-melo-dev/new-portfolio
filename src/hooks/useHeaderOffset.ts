import { useEffect, useRef } from "react";

/**
 * Publishes the sticky header's measured height as `--header-height`, which
 * `scroll-padding-top` consumes so in-page anchors never land underneath it.
 *
 * Measured rather than hard-coded: the header wraps onto a different number of
 * rows depending on viewport width *and* locale (the Portuguese nav labels are
 * longer than the English ones), so any fixed value is wrong somewhere.
 */
export function useHeaderOffset<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const publish = () => {
      const { height } = element.getBoundingClientRect();
      document.documentElement.style.setProperty("--header-height", `${Math.ceil(height)}px`);
    };

    publish();

    const observer = new ResizeObserver(publish);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
