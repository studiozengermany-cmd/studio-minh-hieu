import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";
import { memo } from "react";

/**
 * Hairline scroll progress bar pinned to the top of the viewport.
 * Uses spring-smoothed scrollYProgress → no jank on trackpad scroll.
 */
export const ScrollProgress = memo(function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[90] h-[2px] origin-left bg-lavender-pulse/80"
      style={{ scaleX, willChange: "transform" }}
    />
  );
});

export default ScrollProgress;
