import { useEffect, useState } from "react";
import CornerBloom from "./CornerBloom";
import CursorAurora from "./CursorAurora";

export function SiteBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void-black"
      >
        <CornerBloom />
      </div>
      {mounted && <CursorAurora />}
    </>
  );
}

export default SiteBackground;
