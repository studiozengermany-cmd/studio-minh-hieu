import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";
import i18n from "@/i18n";

import imgShow01 from "../../public/assets/show/dj-performing-01.webp";
import imgShow02 from "../../public/assets/show/dj-performing-02.webp";
import imgShow03 from "../../public/assets/show/guest-dj-poster.webp";
import imgShow04 from "../../public/assets/show/six-t-club-stage.webp";
import imgShow05 from "../../public/assets/show/dj-red-stage.webp";

export const Route = createFileRoute("/tu-lieu")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.archive.title") },
      { name: "description", content: i18n.t("meta.archive.description") },
      { property: "og:title", content: i18n.t("meta.archive.ogTitle") },
      { property: "og:description", content: i18n.t("meta.archive.ogDescription") },
    ],
  }),
  component: Archive,
});

const showFigures = [
  {
    src: imgShow03,
    fallback: "/assets/show/guest-dj-poster.webp",
    alt: "Poster Guest DJ tại Six T Club ngày 12 tháng 3 năm 2024",
    caption: "Poster Guest DJ — Six T Club, 12.03.2024.",
    width: 1200,
    height: 1500,
    colSpan: "col-span-12 md:col-span-5", // Poster dọc
  },
  {
    src: imgShow04,
    fallback: "/assets/show/six-t-club-stage.webp",
    alt: "Sân khấu Six T Club hiển thị poster Guest DJ",
    caption: "Poster được trình chiếu trực tiếp trên màn hình sân khấu.",
    width: 1600,
    height: 1200,
    colSpan: "col-span-12 md:col-span-7", // Poster ngang
  },
  {
    src: imgShow01,
    fallback: "/assets/show/dj-performing-01.webp",
    alt: "Minh Hiếu đang điều khiển bàn DJ tại Six T Club",
    caption: "Minh Hiếu làm việc trực tiếp tại booth Six T Club.",
    width: 1400,
    height: 1800,
    colSpan: "col-span-12 md:col-span-5",
  },
  {
    src: imgShow02,
    fallback: "/assets/show/dj-performing-02.webp",
    alt: "Minh Hiếu biểu diễn DJ dưới hệ thống laser sân khấu",
    caption: "Tương tác với không gian và khán giả trong buổi diễn.",
    width: 1400,
    height: 1400,
    colSpan: "col-span-12 md:col-span-7",
  },
  {
    src: imgShow05,
    fallback: "/assets/show/dj-red-stage.webp",
    alt: "Ảnh tại booth DJ trong một sự kiện sân khấu",
    caption: "Một khoảnh khắc khác phía sau bàn DJ sân khấu đỏ.",
    width: 1400,
    height: 1400,
    colSpan: "col-span-12 md:col-span-12",
  },
];

function Archive() {
  const { t } = useTranslation();
  return (
    <div className="px-6 pt-24 pb-28">
      <div className="mx-auto max-w-[1140px]">
        {/* Title Section */}
        <Reveal className="anim-in text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-lavender-pulse shadow-[0_0_8px_rgba(153,132,216,0.9)]" />
            <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-ghost-white/90">
              ✦ ARCHIVE SỰ KIỆN · BOOTH & SHOW DIỄN
            </span>
          </div>

          <h1 className="font-display text-[44px] md:text-[64px] font-normal leading-[1.08] tracking-[-0.03em] text-ghost-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.12)] max-w-[850px]">
            {t("archive.title")}
          </h1>

          <p className="mt-5 max-w-[620px] font-sans text-[16px] md:text-[18px] leading-[1.7] text-ash-gray/90">
            Hình ảnh thật từ những lần đứng booth, poster và không gian sự kiện. Đang được số hoá dần từ archive gốc.
          </p>
        </Reveal>

        {/* GALLERY LƯỚI ẢNH */}
        <div className="w-full mt-16">
          
          <div className="mb-8 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-4 gap-6 md:gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-lavender-pulse shadow-[0_0_8px_rgba(153,132,216,0.8)]" />
                <span className="text-[12px] font-mono font-medium tracking-[0.1em] uppercase text-ghost-white">
                  TƯ LIỆU SỰ KIỆN ARCHIVE · 5 HÌNH ẢNH THẬT
                </span>
              </div>
              <span className="text-[12px] font-mono text-steel-gray">
                SIX T CLUB · BOOTH & STAGE (2024 - 2026)
              </span>
            </div>
            <div className="flex flex-col text-left md:text-right">
              <span className="text-[14px] font-sans font-semibold text-ghost-white">
                Studio Minh Hieu
              </span>
              <span className="text-[12px] font-mono text-steel-gray">
                MinhLyTeam
              </span>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-12 gap-6 md:gap-8" stagger={0.08}>
            {showFigures.map((item, idx) => (
              <motion.figure
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                className={`group relative flex flex-col ${item.colSpan}`}
              >
                <a
                  href={item.src || item.fallback}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full overflow-hidden rounded-xl bg-[#0a0b0d] border border-white/5 transition-colors hover:border-white/20"
                >
                  <img
                    src={item.src || item.fallback}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== item.fallback) {
                        target.src = item.fallback;
                      }
                    }}
                    alt={item.alt}
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
                
                <figcaption className="mt-3.5 px-1 font-sans text-[13px] leading-relaxed text-ash-gray">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </StaggerGroup>
        </div>

      </div>
    </div>
  );
}
