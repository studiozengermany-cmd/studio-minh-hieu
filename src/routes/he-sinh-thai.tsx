import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import { PillBadge } from "@/components/pill-badge";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";

export const Route = createFileRoute("/he-sinh-thai")({
  head: () => ({
    meta: [
      { title: "HỆ SINH THÁI MH — MINH HIEU STUDIO" },
      {
        name: "description",
        content:
          "MH Master Memory là lớp điều hành trí nhớ chung cho toàn bộ hệ sinh thái MH. Từ Dowsample → FileOS → Sample FL → Quantum Inspector.",
      },
    ],
  }),
  component: HeSinhThai,
});

/* ------------------------------------------------------------------ */
/* CONSTANTS                                                           */
/* ------------------------------------------------------------------ */

const LAYERS = [
  {
    id: "memory",
    label: "Memory",
    color: "text-lavender-pulse",
    border: "border-lavender-pulse/20",
    bg: "bg-lavender-pulse/5",
    glow: "rgba(153,132,216,0.15)",
    title: "Bộ nhớ xuyên phiên",
    body:
      "Lưu bối cảnh, lỗi và bài học qua từng phiên làm việc. AI nào tham gia cũng bắt đầu từ đúng chỗ — không cần giải thích lại từ đầu.",
  },
  {
    id: "decision",
    label: "Decision",
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/5",
    glow: "rgba(251,191,36,0.12)",
    title: "Lưu quyết định và lý do",
    body:
      "Mọi quyết định quan trọng đều có lý do, rủi ro và người phê duyệt rõ ràng. Không có quyết định nào chỉ do AI tự làm mà không có dấu vết.",
  },
  {
    id: "evidence",
    label: "Evidence",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
    glow: "rgba(52,211,153,0.12)",
    title: "Bằng chứng kiểm thử",
    body:
      "Phân biệt rõ Tested và Untested. Mọi tính năng được label trạng thái thật — không gọi demo là sản phẩm xong.",
  },
  {
    id: "governance",
    label: "Governance",
    color: "text-sky-400",
    border: "border-sky-400/20",
    bg: "bg-sky-400/5",
    glow: "rgba(56,189,248,0.12)",
    title: "Phạm vi và quyền AI",
    body:
      "Xác định rõ từng AI được làm gì, trong phạm vi nào, với tài sản nào. Không có vùng xám về quyền truy cập.",
  },
];

const AGENTS = [
  { name: "Notion AI", role: "Bộ nhớ trung tâm · điều phối phiên" },
  { name: "Claude", role: "Phân tích kỹ thuật · code review" },
  { name: "ChatGPT", role: "Copywriting · brainstorm nội dung" },
  { name: "AntiGravity", role: "Scope được xác định theo dự án" },
  { name: "Lovable", role: "UI generation · prototype nhanh" },
];

const ECOSYSTEM = [
  {
    step: "01",
    name: "MH Quantum Inspector",
    role: "Quan sát",
    desc: "Trích xuất DOM/CSS — giúp AI hiểu đúng vị trí vấn đề trên giao diện.",
    status: "Experiment",
    lang: "TypeScript",
  },
  {
    step: "02",
    name: "MH-Dowsample",
    role: "Thu thập",
    desc: "Kiểm tra, phân loại và chuẩn hóa sample thành thư viện gọn.",
    status: "Alpha · v4.1.0",
    lang: "Python 3.11+",
  },
  {
    step: "03",
    name: "MH FileOS",
    role: "Tổ chức",
    desc: "Sắp xếp lại file an toàn, có phục hồi, không mất dữ liệu.",
    status: "Experiment · M6",
    lang: "Rust",
  },
  {
    step: "04",
    name: "MH Sample FL",
    role: "Sử dụng",
    desc: "Tìm, nghe, ghi nhớ và kéo sample vào FL Studio trong workflow.",
    status: "Alpha · v0.1.0",
    lang: "TypeScript · Electron",
  },
  {
    step: "05",
    name: "MINH HIEU STUDIO",
    role: "Chia sẻ",
    desc: "Website công khai — ghi lại hành trình, kiểm chứng và chia sẻ.",
    status: "Beta",
    lang: "TypeScript · TanStack",
  },
];

/* ------------------------------------------------------------------ */
/* ANIMATED BACKGROUND                                                 */
/* ------------------------------------------------------------------ */

const OrbitBackground = memo(function OrbitBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Deep void gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(153,132,216,0.12)_0%,transparent_60%)]" />

      {/* Orbit ring 1 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender-pulse/8"
        style={{ width: 600, height: 600 }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbit ring 2 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender-pulse/5"
        style={{ width: 900, height: 900 }}
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbit ring 3 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/3"
        style={{ width: 1200, height: 1200 }}
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating orb A */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-[320px] w-[320px] rounded-full blur-[80px]"
        style={{ background: "rgba(153,132,216,0.1)" }}
        animate={reduce ? {} : { y: [-20, 20, -20], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Floating orb B */}
      <motion.div
        className="absolute right-[10%] top-[40%] h-[280px] w-[280px] rounded-full blur-[80px]"
        style={{ background: "rgba(56,189,248,0.07)" }}
        animate={reduce ? {} : { y: [20, -20, 20], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
});

/* ------------------------------------------------------------------ */
/* HERO — MH MASTER MEMORY                                            */
/* ------------------------------------------------------------------ */

const MasterMemoryHero = memo(function MasterMemoryHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
      <motion.div
        className="relative z-10 mx-auto max-w-[860px] flex flex-col items-center text-center"
        style={{ y, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <PillBadge tone="lavender">HỆ SINH THÁI MH · BỘ NÃO TRUNG TÂM</PillBadge>
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-display mt-8 text-[56px] md:text-[80px] leading-[0.95] tracking-[-0.03em] text-ghost-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          MH{" "}
          <span className="text-lavender-pulse italic">Master</span>
          <br />
          Memory
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 max-w-[580px] text-[17px] md:text-[18px] leading-[1.65] text-ash-gray"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT_EXPO }}
        >
          Hệ điều hành trí nhớ, quyết định và điều phối đa-AI cho toàn bộ hệ sinh thái Minh Hiếu.
          Không phải một ứng dụng — là cấu trúc giúp mọi AI tham gia đúng vai trò trong đúng phạm vi.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: EASE_OUT_EXPO }}
        >
          <Magnetic as="div" strength={12} radius={130}>
            <Button asChild variant="hero">
              <a href="#ecosystem">Xem hệ sinh thái ↓</a>
            </Button>
          </Magnetic>
          <Button asChild variant="ghost-link">
            <Link to="/du-an">Xem tất cả dự án →</Link>
          </Button>
        </motion.div>

        {/* 4 layer badges */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {["Memory", "Decision", "Evidence", "Governance"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-lavender-pulse/25 bg-lavender-pulse/8 px-4 py-1.5 text-[12px] font-mono tracking-wider text-lavender-pulse/90 uppercase"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* 4 LAYERS SECTION                                                    */
/* ------------------------------------------------------------------ */

const LayersSection = memo(function LayersSection() {
  return (
    <section className="px-6 pt-8 pb-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-eyebrow">Cấu trúc 4 lớp</span>
          <h2 className="font-display mt-6 text-[40px] md:text-[52px] leading-none text-ghost-white">
            Bộ não điều hành chung
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] text-ash-gray">
            Bốn lớp tạo nên một hệ thống mà bất kỳ AI nào tham gia cũng có thể hiểu bối cảnh và hành động đúng vai trò.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-5 md:grid-cols-2" stagger={0.1}>
          {LAYERS.map((layer) => (
            <motion.div
              key={layer.id}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className={`relative overflow-hidden rounded-2xl border ${layer.border} ${layer.bg} p-7 will-change-transform`}
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background: `radial-gradient(ellipse at 30% 30%, ${layer.glow} 0%, transparent 60%)`,
                }}
              />
              <div className="relative">
                <span className={`text-[11px] font-mono tracking-widest uppercase ${layer.color}`}>
                  {layer.label}
                </span>
                <h3 className="mt-3 text-[20px] font-semibold text-ghost-white">{layer.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ash-gray">{layer.body}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* MULTI-AI COORDINATION                                               */
/* ------------------------------------------------------------------ */

const AgentsSection = memo(function AgentsSection() {
  const reduce = useReducedMotion();
  return (
    <section className="px-6 py-24 border-y border-graphite/40">
      <div className="mx-auto max-w-[1000px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-eyebrow">Multi-AI Coordination</span>
          <h2 className="font-display mt-6 text-[40px] md:text-[52px] leading-none text-ghost-white">
            Mỗi AI đúng vai trò
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] text-ash-gray">
            MH Master Memory định nghĩa phạm vi cụ thể cho từng AI Agent. Không có vùng xám, không tự quyết định ngoài scope.
          </p>
        </Reveal>

        {/* Center node */}
        <div className="relative flex flex-col items-center">
          <motion.div
            className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-lavender-pulse/50 bg-lavender-pulse/10 shadow-[0_0_40px_rgba(153,132,216,0.2)]"
            animate={reduce ? {} : { boxShadow: ["0 0 20px rgba(153,132,216,0.15)", "0 0 50px rgba(153,132,216,0.35)", "0 0 20px rgba(153,132,216,0.15)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[11px] font-mono font-bold tracking-widest text-lavender-pulse uppercase text-center leading-tight">
              MH<br />Memory
            </span>
          </motion.div>

          {/* Agents around */}
          <StaggerGroup className="mt-10 flex flex-wrap justify-center gap-4" stagger={0.08}>
            {AGENTS.map((agent) => (
              <motion.div
                key={agent.name}
                variants={staggerItem}
                whileHover={{ y: -4, borderColor: "rgba(153,132,216,0.4)" }}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 text-center min-w-[150px] will-change-transform transition-colors"
              >
                <span className="text-[14px] font-medium text-ghost-white">{agent.name}</span>
                <span className="mt-1.5 text-[12px] text-ash-gray leading-snug">{agent.role}</span>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* ECOSYSTEM CHAIN                                                     */
/* ------------------------------------------------------------------ */

const EcosystemSection = memo(function EcosystemSection() {
  return (
    <section id="ecosystem" className="px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-eyebrow">Chuỗi hệ sinh thái</span>
          <h2 className="font-display mt-6 text-[40px] md:text-[52px] leading-none text-ghost-white">
            Năm công cụ, một quy trình
          </h2>
          <p className="mt-5 max-w-[580px] text-[16px] text-ash-gray">
            Từng công cụ giải quyết một công đoạn riêng. Kết nối lại thành một pipeline hoàn chỉnh — hoặc dùng độc lập tùy nào cần.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {ECOSYSTEM.map((item, idx) => (
            <Reveal key={item.step}>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 240, damping: 24 }}
                className="group flex flex-col md:flex-row md:items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-lavender-pulse/25 hover:bg-lavender-pulse/[0.03] transition-colors will-change-transform"
              >
                {/* Step number */}
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-lavender-pulse/20 bg-lavender-pulse/8">
                  <span className="text-[13px] font-mono font-bold text-lavender-pulse">{item.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[18px] font-semibold text-ghost-white">{item.name}</h3>
                    <span className="text-[11px] font-mono uppercase text-ash-gray/60">· {item.role}</span>
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ash-gray">{item.desc}</p>
                </div>

                {/* Meta badges */}
                <div className="flex flex-shrink-0 flex-col gap-1.5 items-start md:items-end">
                  <span className="rounded bg-white/5 px-2.5 py-1 text-[11px] font-mono text-ash-gray border border-white/8">
                    {item.status}
                  </span>
                  <span className="rounded bg-lavender-pulse/5 px-2.5 py-1 text-[11px] font-mono text-lavender-pulse/70 border border-lavender-pulse/10">
                    {item.lang}
                  </span>
                </div>

                {/* Arrow */}
                {idx < ECOSYSTEM.length - 1 && (
                  <div className="hidden md:block absolute -bottom-6 left-10 text-steel-gray text-[20px]">↓</div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* VISION SECTION                                                      */
/* ------------------------------------------------------------------ */

const VisionSection = memo(function VisionSection() {
  return (
    <section className="px-6 py-24 border-t border-graphite/40">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-eyebrow">Tầm nhìn sản phẩm</span>
          <h2 className="font-display mt-6 text-[40px] md:text-[52px] leading-none text-ghost-white">
            Tích hợp hoặc bán lẻ
          </h2>
          <p className="mt-5 max-w-[600px] text-[16px] text-ash-gray">
            Mỗi công cụ có thể đứng độc lập hoặc được đóng gói thành một sản phẩm tích hợp đầy đủ.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-2 gap-6" stagger={0.1}>
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="rounded-2xl border border-lavender-pulse/20 bg-lavender-pulse/5 p-8 will-change-transform"
          >
            <span className="text-[12px] font-mono tracking-widest text-lavender-pulse uppercase">GÓI TÍCH HỢP</span>
            <h3 className="mt-4 text-[22px] font-semibold text-ghost-white">
              MH Sample FL All-in-One
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ash-gray">
              Tích hợp sẵn Dowsample · FileOS · Sample FL vào một ứng dụng duy nhất.
              Tải về → sắp xếp → dùng ngay trong FL Studio.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Dowsample", "FileOS", "Sample FL"].map((t) => (
                <span key={t} className="rounded bg-lavender-pulse/10 px-2.5 py-1 text-[11px] font-mono text-lavender-pulse/80 border border-lavender-pulse/15">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 will-change-transform"
          >
            <span className="text-[12px] font-mono tracking-widest text-ash-gray uppercase">BÁN Lẻ TỮNG CÔNG CỤ</span>
            <h3 className="mt-4 text-[22px] font-semibold text-ghost-white">
              Chọn theo nhu cầu
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-ash-gray">
              Ai cần công cụ nào thì mua công cụ đó. Không cần mua trọn bộ nếu chỉ dùng một bước trong chuỗi.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Quantum Inspector", "Dowsample", "FileOS", "Sample FL"].map((t) => (
                <span key={t} className="rounded bg-white/5 px-2.5 py-1 text-[11px] font-mono text-ash-gray border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </StaggerGroup>

        {/* Note */}
        <Reveal className="mt-12 text-center">
          <p className="text-[13px] text-steel-gray">
            Tầm nhìn dài hạn — hiện tại các công cụ đang ở giai đoạn Experiment / Alpha. Chưa có phát hành thương mại.
          </p>
        </Reveal>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

function HeSinhThai() {
  return (
    <div className="relative">
      <OrbitBackground />
      <div className="relative z-10">
        <MasterMemoryHero />
        <LayersSection />
        <AgentsSection />
        <EcosystemSection />
        <VisionSection />

        {/* Footer CTA */}
        <section className="px-6 py-24 text-center">
          <Reveal>
            <p className="text-eyebrow mb-4">Bằng chứng trước tuyên bố</p>
            <h2 className="font-display text-[40px] md:text-[56px] leading-none text-ghost-white">
              Xem dự án thật
            </h2>
            <p className="mt-5 max-w-[480px] mx-auto text-[16px] text-ash-gray">
              Tất cả công cụ đều có trạng thái công khai, rõ ràng và có bằng chứng.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Magnetic as="div" strength={12} radius={130}>
                <Button asChild variant="hero">
                  <Link to="/du-an">Xem hệ sinh thái MH →</Link>
                </Button>
              </Magnetic>
              <Button asChild variant="ghost-link">
                <Link to="/lien-he">Liên hệ collab</Link>
              </Button>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
