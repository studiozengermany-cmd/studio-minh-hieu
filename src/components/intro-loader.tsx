import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { memo, useEffect, useState } from "react";
import { EASE_OUT_EXPO } from "@/components/reveal";

const SESSION_KEY = "mhs.intro.seen";

/**
 * One-shot intro overlay per session.
 * Void-black cover → logo mark fades in → curtain lifts.
 * Cleared after ~1.6s. Skipped entirely for reduced-motion or repeat visits.
 */
export const IntroLoader = memo(function IntroLoader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (typeof window === "undefined") return;
    try {
      if (window.sessionStorage.getItem(SESSION_KEY)) return;
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // sessionStorage blocked — skip intro rather than replay it every nav.
      return;
    }
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-void-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <motion.span
              className="inline-block h-2.5 w-2.5 rounded-full bg-lavender-pulse"
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
            />
            <span className="font-display text-[28px] tracking-tight text-ghost-white">
              Minh Hieu Studio<span className="text-lavender-pulse">.</span>
            </span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
});

export default IntroLoader;
