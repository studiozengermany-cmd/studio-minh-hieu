import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { memo, useEffect, type ReactNode } from "react";
import { EASE_OUT_EXPO } from "@/components/reveal";

/**
 * Cinematic route transitions.
 * - Outgoing view fades + scales down slightly with a blur veil.
 * - Incoming view slides up from below with a soft blur clear.
 * - A lavender curtain sweeps upward at the swap point for a native-app feel.
 * - Auto-scrolls to top on route change (smooth).
 * - Reduced-motion → instant swap.
 * GPU-only (transform / opacity / filter) → 60fps.
 */
export const PageTransition = memo(function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    // Delay slightly so the outgoing view finishes fading before scroll jump.
    const t = window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);
    return () => window.clearTimeout(t);
  }, [pathname, reduce]);

  if (reduce) return <>{children}</>;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24, scale: 0.985, filter: "blur(8px)" }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.65, ease: EASE_OUT_EXPO, delay: 0.05 },
        }}
        exit={{
          opacity: 0,
          y: -12,
          scale: 0.99,
          filter: "blur(6px)",
          transition: { duration: 0.35, ease: EASE_OUT_EXPO },
        }}
        style={{ willChange: "transform, opacity, filter", transformOrigin: "50% 30%" }}
      >
        {children}
      </motion.div>

      {/* Lavender curtain sweep at the swap point. */}
      <motion.div
        key={`curtain-${pathname}`}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[150]"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{
          duration: 0.9,
          ease: EASE_OUT_EXPO,
          times: [0, 0.45, 1],
        }}
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(153,132,216,0.10) 40%, rgba(5,6,7,0.98) 55%, rgba(0,0,0,1) 100%)",
          willChange: "transform",
        }}
      />
    </AnimatePresence>
  );
});

export default PageTransition;
