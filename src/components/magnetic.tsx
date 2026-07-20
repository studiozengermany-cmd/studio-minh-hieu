import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import { useCallback, useRef, forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  /** Max pixel offset the element travels toward the cursor. */
  strength?: number;
  /** Radius (px) around the element where the magnet is active. */
  radius?: number;
  className?: string;
  as?: "button" | "a" | "div";
}

/**
 * Magnetic micro-physics wrapper.
 * Spring: stiffness 100, damping 20 — feels weighty, not rubbery.
 * Only mutates transform → runs on the compositor at 60fps.
 */
export const Magnetic = forwardRef<HTMLButtonElement, MagneticProps>(function Magnetic(
  { children, strength = 18, radius = 120, className, as = "button", ...rest },
  forwardedRef,
) {
  const localRef = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 100, damping: 20, mass: 0.6 });

  // Slight scale response for tactile feedback.
  const scale = useTransform([springX, springY], ([sx, sy]) => {
    const d = Math.hypot(sx as number, sy as number);
    return 1 + Math.min(d / 400, 0.04);
  });

  const setRefs = useCallback(
    (node: HTMLButtonElement | null) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    },
    [forwardedRef],
  );

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reduce || !localRef.current) return;
      const rect = localRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius) {
        x.set(0);
        y.set(0);
        return;
      }
      const falloff = 1 - dist / radius;
      x.set((dx / radius) * strength * falloff);
      y.set((dy / radius) * strength * falloff);
    },
    [radius, strength, x, y, reduce],
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const MotionTag = motion[as] as typeof motion.button;

  return (
    <MotionTag
      ref={setRefs}
      className={cn("inline-flex will-change-transform", className)}
      style={{ x: springX, y: springY, scale }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default Magnetic;
