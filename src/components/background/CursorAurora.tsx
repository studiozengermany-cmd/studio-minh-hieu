import { useEffect, useRef, useState } from "react";

export function CursorAurora() {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    setEnabled(true);
    target.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...target.current };

    let raf = 0;
    let running = document.visibilityState !== "hidden";
    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const loop = () => {
      current.current.x += (target.current.x - current.current.x) * 0.10;
      current.current.y += (target.current.y - current.current.y) * 0.10;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 180}px, ${current.current.y - 180}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (raf) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVis = () => {
      running = document.visibilityState !== "hidden";
      if (running) start();
      else stop();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    if (running) start();
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      stop();
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 h-[360px] w-[360px] will-change-transform"
      style={{ mixBlendMode: "screen" }}
      aria-hidden
    >
      <div
        className="h-full w-full rounded-full opacity-[0.18] blur-[60px]"
        style={{
          background:
            "conic-gradient(from 0deg, #4285F4, #9B72F5, #D96570, #F2A65A, #4ECDC4, #4285F4)",
        }}
      />
    </div>
  );
}

export default CursorAurora;
