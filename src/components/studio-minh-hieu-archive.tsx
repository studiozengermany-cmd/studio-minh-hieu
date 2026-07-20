import { memo } from "react";
import { Reveal } from "@/components/reveal";
import "../collab-card.css";

export const StudioMinhHieuArchive = memo(function StudioMinhHieuArchive() {
  return (
    <div className="bento-card-wrapper wrapper-collab card--reveal w-full max-w-[900px] mx-auto" aria-label="Studio Minh Hieu and MinhLyTeam">
      <div className="led-glow-backdrop glow-collab"></div>
      <div className="bento-card-led card-collab">
        <div className="card-content content-collab">
          <div className="collab-brand-stack">
            <h2 className="collab-text-studio">Studio Minh Hieu</h2>
            <h2 className="collab-text-team">MinhLyTeam</h2>
          </div>
        </div>
      </div>
    </div>
  );
});
