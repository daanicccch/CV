import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;
    const resolvedThreshold = isMobileViewport ? Math.min(threshold, 0.04) : threshold;
    const rootMargin = isMobileViewport ? "0px 0px -12% 0px" : "0px 0px -8% 0px";

    if (el.getBoundingClientRect().top <= window.innerHeight * 0.92) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: resolvedThreshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
