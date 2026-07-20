import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "motion/react";
import { memo, type ReactNode } from "react";

/**
 * High-end spring physics used across the site.
 * Physical, weighty easing — no linear timing, no infinite loops.
 */
export const SPRING_SMOOTH = { type: "spring", stiffness: 100, damping: 20, mass: 0.8 } as const;
export const SPRING_SNAPPY = { type: "spring", stiffness: 220, damping: 24, mass: 0.6 } as const;
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT_EXPO },
  },
};

type Tag = "div" | "section" | "article" | "header" | "footer" | "h1" | "h2" | "h3" | "p" | "span" | "li" | "ul";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
  /** Trigger once (default) or every time it enters the viewport. */
  once?: boolean;
  /** Root margin passed to the IntersectionObserver. */
  margin?: `${number}px` | `-${number}px`;
}

/**
 * Scroll-reveal wrapper. GPU-friendly: only animates transform / opacity / filter.
 * Respects prefers-reduced-motion.
 */
export const Reveal = memo(function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  once = true,
  margin = "-80px",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Static = as as unknown as "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionTag
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      transition={{ delay, duration: 0.75, ease: EASE_OUT_EXPO }}
      style={{ willChange: "transform, opacity, filter" }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  as?: Tag;
}

/**
 * Parent orchestrator for staggered lists / grids.
 * Children should use `staggerItem` (or a custom variant with `hidden`/`show`).
 */
export const StaggerGroup = memo(function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0,
  once = true,
  as = "div",
}: StaggerGroupProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Static = as as unknown as "div";
    return <Static className={className}>{children}</Static>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </MotionTag>
  );
});

/** Item variant for use inside <StaggerGroup>. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};
