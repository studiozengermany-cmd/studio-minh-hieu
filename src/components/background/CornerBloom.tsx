import { motion, useReducedMotion } from "motion/react";
import { useActive } from "@/hooks/use-active";

const blobs = [
  {
    className: "-top-56 -left-56",
    color: "rgba(66,133,244,0.14)", // blue
    size: 620,
    delay: 0,
  },
  {
    className: "-top-40 -right-56",
    color: "rgba(155,114,245,0.12)", // violet
    size: 560,
    delay: 3,
  },
  {
    className: "-bottom-56 -right-40",
    color: "rgba(217,101,112,0.10)", // coral
    size: 640,
    delay: 6,
  },
  {
    className: "-bottom-48 -left-40",
    color: "rgba(78,205,196,0.08)", // teal
    size: 540,
    delay: 9,
  },
];

export function CornerBloom() {
  const reduce = useReducedMotion();
  const active = useActive();
  const animate = !reduce && active;
  return (
    <div className="absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${b.className}`}
          style={{
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle at center, ${b.color} 0%, transparent 70%)`,
          }}
          animate={
            animate
              ? {
                  scale: [1, 1.06, 1],
                  opacity: [0.85, 1, 0.85],
                }
              : undefined
          }
          transition={
            animate
              ? {
                  duration: 16 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: b.delay,
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}

export default CornerBloom;
