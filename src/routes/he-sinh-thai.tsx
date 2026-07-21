import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import { PillBadge } from "@/components/pill-badge";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { Button } from "@/components/ui/button";

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
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const LAYERS = [
  {
    n: "01",
    label: "Memory",
    title: "Bộ nhớ xuyên phiên",
    body:
      "Lưu bối cảnh, lỗi và bài học qua từng phiên làm việc. AI nào tham gia cũng bắt đầu từ đúng chỗ — không cần giải thích lại từ đầu.",
  },
  {
    n: "02",
    label: "Decision",
    title: "Lưu quyết định và lý do",
    body:
      "Mọi quyết định quan trọng đều có lý do, rủi ro và người phê duyệt rõ ràng. Không có quyết định nào chỉ do AI tự làm mà không có dấu vết.",
  },
  {
    n: "03",
    label: "Evidence",
    title: "Bằng chứng kiểm thử",
    body:
      "Phân biệt rõ Tested và Untested. Mọi tính năng được label trạng thái thật — không gọi demo là sản phẩm xong.",
  },
  {
    n: "04",
    label: "Governance",
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
    slug: "quantum-inspector",
  },
  {
    step: "02",
    name: "MH-Dowsampl.Extension",
    role: "Thu thập",
    desc: "Dán link → tìm audio công khai → tải về local. Không ghi đè, không mở dịch vụ ra ngoài.",
    status: "Alpha · v4.1.0",
    lang: "Python 3.11+",
    slug: "dowsample-extension",
  },
  {
    step: "03",
    name: "MH FileOS",
    role: "Tổ chức",
    desc: "Chỉ mục file local-first. Không mất dữ liệu là ưu tiên số một.",
    status: "Experiment · M6",
    lang: "Rust",
    slug: "fileos",
  },
  {
    step: "04",
    name: "MH Sample FL",
    role: "Sử dụng",
    desc: "Duyệt, preview và ghi nhớ sample trong FL Studio — không rời cửa sổ.",
    status: "Alpha · v0.1.0",
    lang: "TypeScript · Electron",
    slug: "sample-fl",
  },
  {
    step: "05",
    name: "MINH HIEU STUDIO",
    role: "Chia sẻ",
    desc: "Website công khai — ghi lại hành trình, kiểm chứng và chia sẻ.",
    status: "Beta",
    lang: "TypeScript · TanStack",
    slug: "studio-site",
  },
];

/* ------------------------------------------------------------------ */
/* AMBIENT BACKGROUND                                                  */
/* ------------------------------------------------------------------ */

const AmbientBackground = memo(function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(153,132,216,0.10)_0%,transparent_65%)]" />
      <motion.div
        className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{ background: "rgba(153,132,216,0.07)" }}
        animate={reduce ? {} : { y: [-30, 30, -30], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[50%] h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: "rgba(56,189,248,0.05)" }}
        animate={reduce ? {} : { y: [30, -30, 30], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
});

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

const Hero = memo(function Hero() {
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <PillBadge tone="lavender">HỆ SINH THÁI MH · BỘ NÃO TRUNG TÂM</PillBadge>
        </motion.div>

        <motion.h1
          className="font-display mt-8 text-[64px] md:text-[96px] leading-[0.92] tracking-[-0.04em] text-ghost-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          MH{" "}
          <span className="text-lavender-pulse italic">Master</span>
          <br />
          Memory
        </motion.h1>

        <motion.p
          className="mt-10 max-w-[600px] text-[18px] md:text-[20px] leading-[1.6] text-ash-gray"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT_EXPO }}
        >
          Hệ điều hành trí nhớ, quyết định và điều phối đa-AI cho toàn bộ hệ sinh thái Minh Hiếu.
          Không phải một ứng dụng — là cấu trúc giúp mọi AI tham gia đúng vai trò trong đúng phạm vi.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap gap-4 justify-center"
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

        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {["Memory", "Decision", "Evidence", "Governance"].map((label) => (
            <span
              key={label}
              className="px-4 py-1.5 text-[11px] font-mono tracking-widest text-lavender-pulse/70 uppercase border-b border-lavender-pulse/25"
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
/* 4 LAYERS — editorial list, no cards                                */
/* ------------------------------------------------------------------ */

const LayersSection = memo(function LayersSection() {
  return (
    <section className="px-6 pt-4 pb-28">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-16">
          <span className="text-eyebrow">Cấu trúc 4 lớp</span>
          <h2 className="font-display mt-6 text-[48px] md:text-[64px] leading-none tracking-[-0.03em] text-ghost-white">
            Bộ não điều hành chung
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] text-ash-gray leading-relaxed">
            Bốn lớp tạo nên một hệ thống mà bất kỳ AI nào tham gia cũng có thể hiểu bối cảnh và hành động đúng vai trò.
          </p>
        </Reveal>

        <div className="border-t border-white/8">
          {LAYERS.map((layer, idx) => (
            <Reveal key={layer.n}>
              <motion.div
                className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr_280px] gap-x-8 gap-y-3 py-10 border-b border-white/8"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span className="font-mono text-[13px] text-lavender-pulse/60 pt-1">{layer.n}</span>
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-lavender-pulse">
                    {layer.label}
                  </span>
                  <h3 className="mt-2 text-[24px] md:text-[28px] font-medium text-ghost-white leading-tight">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ash-gray md:hidden">
                    {layer.body}
                  </p>
                </div>
                <p className="hidden md:block text-[15px] leading-relaxed text-ash-gray self-center">
                  {layer.body}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* AGENTS — inline text list, no cards                                */
/* ------------------------------------------------------------------ */

const AgentsSection = memo(function AgentsSection() {
  const reduce = useReducedMotion();
  return (
    <section className="px-6 py-28 border-y border-white/8">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-16">
          <span className="text-eyebrow">Multi-AI Coordination</span>
          <h2 className="font-display mt-6 text-[48px] md:text-[64px] leading-none tracking-[-0.03em] text-ghost-white">
            Mỗi AI đúng vai trò
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] text-ash-gray leading-relaxed">
            MH Master Memory định nghĩa phạm vi cụ thể cho từng AI Agent. Không có vùng xám, không tự quyết định ngoài scope.
          </p>
        </Reveal>

        {/* Central node */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            className="flex h-20 w-20 items-center justify-center"
            animate={
              reduce
                ? {}
                : {
                    textShadow: [
                      "0 0 20px rgba(153,132,216,0.3)",
                      "0 0 50px rgba(153,132,216,0.7)",
                      "0 0 20px rgba(153,132,216,0.3)",
                    ],
                  }
            }
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-[13px] font-bold tracking-widest text-lavender-pulse uppercase text-center leading-snug">
              MH<br />Memory
            </span>
          </motion.div>
          <div className="w-px h-8 bg-gradient-to-b from-lavender-pulse/40 to-transparent" />
        </div>

        {/* Agent list */}
        <div className="border-t border-white/8">
          {AGENTS.map((agent) => (
            <Reveal key={agent.name}>
              <div className="flex items-baseline justify-between py-5 border-b border-white/8">
                <span className="text-[18px] font-medium text-ghost-white">{agent.name}</span>
                <span className="text-[13px] text-ash-gray ml-8 text-right">{agent.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* ECOSYSTEM CHAIN — editorial numbered list                          */
/* ------------------------------------------------------------------ */

const EcosystemSection = memo(function EcosystemSection() {
  return (
    <section id="ecosystem" className="px-6 py-28">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-16">
          <span className="text-eyebrow">Chuỗi hệ sinh thái</span>
          <h2 className="font-display mt-6 text-[48px] md:text-[64px] leading-none tracking-[-0.03em] text-ghost-white">
            Năm công cụ,<br />một quy trình
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] text-ash-gray leading-relaxed">
            Từng công cụ giải quyết một công đoạn riêng. Kết nối lại thành một pipeline hoàn chỉnh — hoặc dùng độc lập tùy nào cần.
          </p>
        </Reveal>

        <div className="border-t border-white/8">
          {ECOSYSTEM.map((item) => (
            <Reveal key={item.step}>
              <Link to="/du-an/$slug" params={{ slug: item.slug }}>
                <motion.div
                  className="group grid grid-cols-[48px_1fr] md:grid-cols-[48px_1fr_auto] gap-x-8 gap-y-2 py-9 border-b border-white/8 cursor-pointer"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                >
                  <span className="font-mono text-[13px] text-lavender-pulse/50 pt-1">{item.step}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-[22px] md:text-[26px] font-medium text-ghost-white group-hover:text-lavender-pulse transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[12px] font-mono uppercase text-ash-gray/50">
                        {item.role}
                      </span>
                    </div>
                    <p className="mt-2 text-[15px] leading-relaxed text-ash-gray">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex flex-col gap-1.5 items-end self-center">
                    <span className="text-[11px] font-mono text-ash-gray/60">{item.status}</span>
                    <span className="text-[11px] font-mono text-lavender-pulse/50">{item.lang}</span>
                    <span className="text-[12px] text-lavender-pulse/40 group-hover:text-lavender-pulse transition-colors">→</span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* CLOSING CTA                                                         */
/* ------------------------------------------------------------------ */

const ClosingCta = memo(function ClosingCta() {
  return (
    <section className="px-6 py-28 border-t border-white/8">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <p className="text-eyebrow mb-6">Bằng chứng trước tuyên bố</p>
          <h2 className="font-display text-[48px] md:text-[72px] leading-none tracking-[-0.03em] text-ghost-white">
            Xem dự án thật
          </h2>
          <p className="mt-8 max-w-[520px] text-[17px] text-ash-gray leading-relaxed">
            Tất cả công cụ đều có trạng thái công khai, rõ ràng và có bằng chứng. Không hứa những gì chưa có.
          </p>
          <div className="mt-10 flex gap-5 flex-wrap">
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
      <AmbientBackground />
      <div className="relative z-10">
        <Hero />
        <LayersSection />
        <AgentsSection />
        <EcosystemSection />
        <ClosingCta />
      </div>
    </div>
  );
}
