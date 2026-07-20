import { memo } from "react";
import { motion } from "motion/react";
import { Reveal, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";

const imgDragDrop = "/assets/sampleguard-drag-drop.webp";
const imgSafeLab = "/assets/sampleguard-safe-lab.webp";
const imgMemory = "/assets/sampleguard-memory.webp";

export const SampleGuardCard = memo(function SampleGuardCard() {
  const features = [
    {
      image: imgDragDrop,
      alt: "Tìm, nghe thử và kéo thả sample",
      title: "Tìm, nghe thử và kéo thả",
      body: "Tìm sample trong thư viện cục bộ, nghe preview và kéo thả vào FL Studio mà không phải mở nhiều thư mục trong lúc đang làm nhạc.",
    },
    {
      image: imgSafeLab,
      alt: "Project-Safe Lab",
      title: "Project-Safe Lab",
      body: "Mô phỏng việc xử lý sample trùng trước khi áp dụng thật, giúp nhận diện file có nguy cơ đang được project cũ tham chiếu.",
    },
    {
      image: imgMemory,
      alt: "Find & Remember",
      title: "Find & Remember",
      body: "Ghi nhớ mối liên hệ giữa sample và project để hỗ trợ tìm lại đúng file, đúng vị trí và đúng ngữ cảnh khi mở lại dự án cũ.",
    },
  ];

  return (
    <Reveal className="w-full">
      <div className="surface-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#050607] p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-[12px] font-mono font-medium tracking-wider uppercase text-steel-gray">
              ĐANG THỬ NGHIỆM
            </span>
            <h3 className="font-display mt-1 text-[28px] md:text-[36px] font-medium leading-tight text-ghost-white">
              SampleGuard FL
            </h3>
          </div>
          <a
            href="https://github.com/studiozengermany-cmd/MH-SAMPLE-FL-2026-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-mono text-ash-gray transition-colors hover:text-ghost-white"
          >
            Xem chi tiết -
          </a>
        </div>

        {/* Lead Subtitle */}
        <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-ash-gray">
          SampleGuard FL được phát triển để tìm sample nhanh hơn, ghi nhớ sample đã dùng theo từng project và kiểm tra rủi ro trước khi xử lý file trùng.
        </p>

        {/* 3 Sub-Cards Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              className="flex flex-col overflow-hidden rounded-xl border border-white/5 bg-[#0a0b0d] p-4 transition-colors hover:border-white/15"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-black/40">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="mt-4 text-[17px] font-medium text-ghost-white">
                {item.title}
              </h4>
              <p className="mt-2 text-[13px] leading-relaxed text-ash-gray">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono uppercase">
          <span className="rounded bg-white/5 px-2.5 py-1 text-ash-gray border border-white/10">
            WINDOWS / FL STUDIO
          </span>
          <span className="rounded bg-lavender-pulse/10 px-2.5 py-1 text-lavender-pulse border border-lavender-pulse/20">
            PROTOTYPE
          </span>
          <span className="rounded bg-mint-signal/10 px-2.5 py-1 text-mint-signal border border-mint-signal/20">
            CHƯA PHÁT HÀNH CÔNG KHAI
          </span>
        </div>
      </div>
    </Reveal>
  );
});
