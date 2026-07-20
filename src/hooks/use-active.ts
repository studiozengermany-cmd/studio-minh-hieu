import { useEffect, useState, type RefObject } from "react";

/** True when the tab is visible AND (optional) the target is in viewport. */
export function useActive(ref?: RefObject<Element | null>) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (typeof document === "undefined") return;
    let visible = document.visibilityState !== "hidden";
    let inView = true;

    const update = () => setActive(visible && inView);

    const onVis = () => {
      visible = document.visibilityState !== "hidden";
      update();
    };
    document.addEventListener("visibilitychange", onVis);

    let io: IntersectionObserver | undefined;
    const el = ref?.current;
    if (el && typeof IntersectionObserver !== "undefined") {
      inView = false;
      io = new IntersectionObserver(
        (entries) => {
          inView = entries[0]?.isIntersecting ?? false;
          update();
        },
        { rootMargin: "200px" },
      );
      io.observe(el);
    }

    update();
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      io?.disconnect();
    };
  }, [ref]);

  return active;
}
