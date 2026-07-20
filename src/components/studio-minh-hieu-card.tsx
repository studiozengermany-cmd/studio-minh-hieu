import { memo } from "react";
import { Reveal } from "@/components/reveal";

export const StudioMinhHieuCard = memo(function StudioMinhHieuCard() {
  return (
    <Reveal className="w-full mt-14">
      <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 shadow-[0_0_35px_rgba(236,72,153,0.25)]">
        <div className="flex w-full flex-col items-center justify-center rounded-[15px] bg-[#070709] px-6 py-12 text-center">
          <div className="flex flex-col items-center gap-1.5">
            <h2 className="text-[26px] md:text-[34px] font-extrabold tracking-[0.08em] uppercase text-ghost-white">
              STUDIO MINH HIEU
            </h2>
            <h3 className="text-[11px] font-mono font-semibold tracking-[0.35em] uppercase text-ash-gray/80">
              MINHLYTEAM
            </h3>
          </div>
        </div>
      </div>
    </Reveal>
  );
});
