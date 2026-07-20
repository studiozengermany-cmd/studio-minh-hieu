import { motion, useReducedMotion, type Variants } from "motion/react";
import { memo, useMemo } from "react";
import { EASE_OUT_EXPO } from "@/components/reveal";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const container: Variants = {
  hidden: {},
  show: (custom: { delay: number; stagger: number }) => ({
    transition: { staggerChildren: custom.stagger, delayChildren: custom.delay },
  }),
};

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

/**
 * Word-by-word reveal. Uses `overflow: hidden` sleeves so words slide up
 * from behind their own baseline — no layout shift, no CLS.
 */
export const SplitText = memo(function SplitText({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  as = "span",
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(/(\s+)/), [text]);
  const Tag = motion[as] as typeof motion.span;

  if (reduce) {
    const Static = as as unknown as "span";
    return <Static className={className}>{text}</Static>;
  }

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      custom={{ delay, stagger }}
      aria-label={text}
    >
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <span key={i} aria-hidden> </span>
        ) : (
          <span
            key={i}
            aria-hidden
            className="inline-block overflow-hidden align-baseline"
            style={{ paddingBottom: "0.08em" }}
          >
            <motion.span
              variants={word}
              className={wordClassName ? `inline-block ${wordClassName}` : "inline-block"}
              style={{ willChange: "transform, opacity, filter" }}
            >
              {w}
            </motion.span>
          </span>
        ),
      )}
    </Tag>
  );
});

export default SplitText;
