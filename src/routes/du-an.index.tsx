import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { memo, useState } from "react";
import { projects, statusLabel, statusColor } from "@/content/projects";
import type { Project } from "@/content/projects";
import { Reveal, EASE_OUT_EXPO } from "@/components/reveal";

export const Route = createFileRoute("/du-an/")({
  head: () => ({
    meta: [
      { title: "DỰ ÁN — MINH HIEU STUDIO" },
      { name: "description", content: "Các dự án MH được xây dựng như một chuỗi có liên kết, không phải các repository rời rạc." },
    ],
  }),
  component: ProjectsPage,
});

/* ── Expand content ─────────────────────────────────────────────── */
type ExpandData = { summary: string; points: string[]; eco: string; github?: string };

const EXPAND: Record<string, ExpandData> = {
  "quantum-inspector": {
    summary: "Trích xuất DOM/CSS từ trang web đang mở, giúp AI hiểu đúng ngữ cảnh giao diện thay vì mô tả mơ hồ.",
    points: [
      "Lấy selector, class và style của element đang chọn",
      "Xuất ngữ cảnh dưới dạng text để dán vào AI chat",
      "Không gửi dữ liệu ra ngoài — chạy local trong trình duyệt",
    ],
    eco: "Lớp quan sát — đứng đầu pipeline, giúp AI hiểu đúng vấn đề giao diện trước khi các bước tiếp theo bắt đầu.",
    github: "https://github.com/studiozengermany-cmd/MH-Quantum-Inspector",
  },
  "dowsample-extension": {
    summary: "Chrome Extension + Python backend chạy local. Dán link Splice hoặc audio trực tiếp → tìm file âm thanh công khai → tải về máy không ghi đè.",
    points: [
      "Tải đồng thời tối đa 4 file, nhóm tối đa 200 đường dẫn mỗi lần",
      "Ghi vào .part trước, đổi thành file chính khi hoàn tất — không mất dữ liệu giữa chừng",
      "Tự thêm (2), (3)... khi tên file đã tồn tại — không bao giờ ghi đè",
      "Backend chỉ lắng nghe tại 127.0.0.1:8765 — không mở dịch vụ ra ngoài mạng",
      "Lưu job gần nhất để xem lại sau khi đóng popup",
    ],
    eco: "Lớp thu thập — đứng sau Quantum Inspector, đưa file âm thanh từ nguồn công khai về máy local trước khi vào FileOS.",
    github: "https://github.com/studiozengermany-cmd/MH-Dowsampl.Extension",
  },
  "fileos": {
    summary: "Nghiên cứu tổ chức và bảo vệ file trên Windows. Viết bằng Rust, ưu tiên không mất dữ liệu trước khi tối ưu tốc độ.",
    points: [
      "Mọi thao tác sắp xếp đều có bước phục hồi — không xóa thẳng",
      "Milestone 6: chế độ read-only, chưa ghi vào disk thật",
      "Thiết kế cho Windows 10 / 11, viết bằng Rust",
    ],
    eco: "Lớp tổ chức — nhận file từ Extension, sắp xếp thành thư viện có cấu trúc trước khi Sample FL truy cập.",
  },
  "sample-fl": {
    summary: "Ứng dụng desktop Windows. Tìm kiếm, nghe thử, ghi nhớ và kéo sample vào FL Studio trong workflow sản xuất nhạc.",
    points: [
      "Preview audio ngay trong app, không cần mở folder",
      "Ghi nhớ sample đã dùng theo từng dự án nhạc",
      "Tích hợp trực tiếp với FL Studio workflow",
      "Chạy local-first — không cần kết nối cloud hay API key",
    ],
    eco: "Lớp sử dụng — điểm cuối của pipeline thu thập, nơi sample được tìm và đưa vào sản xuất âm nhạc.",
  },
  "studio-site": {
    summary: "Website công khai của hệ sinh thái MH. Ghi lại hành trình, kiểm chứng trạng thái thật của từng dự án và chia sẻ câu chuyện.",
    points: [
      "Mỗi dự án có trang riêng với trạng thái và bằng chứng rõ ràng",
      "Song ngữ Việt / Anh",
      "Xây bằng TypeScript · TanStack Start · Tailwind",
    ],
    eco: "Lớp chia sẻ — bằng chứng công khai rằng hệ sinh thái đang được xây dựng thật.",
    github: "https://github.com/studiozengermany-cmd/studio-minh-hieu",
  },
};

/* ── Background ─────────────────────────────────────────────────── */
const BgLayer = memo(function BgLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_15%_10%,rgba(153,132,216,0.07)_0%,transparent_70%)]" />
    </div>
  );
});

/* ── Page header ────────────────────────────────────────────────── */
const PageHeader = memo(function PageHeader() {
  return (
    <div className="mb-16">
      <motion.span
        className="block text-[11px] font-mono tracking-[0.25em] text-ash-gray/50 uppercase mb-5"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      >
        HỆ SINH THÁI MH
      </motion.span>
      <motion.h1
        className="font-display text-[clamp(52px,9vw,110px)] leading-[0.9] tracking-[-0.04em] text-ghost-white"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT_EXPO }}
      >
        DỰ<br />
        <span className="text-lavender-pulse italic">ÁN.</span>
      </motion.h1>
      <motion.p
        className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-ash-gray"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: EASE_OUT_EXPO }}
      >
        Mỗi dự án giải quyết một công đoạn trong quy trình làm nhạc.
        Kết nối lại thành một hệ sinh thái.
      </motion.p>
    </div>
  );
});

/* ── Master Memory featured ─────────────────────────────────────── */
const MasterMemoryFeature = memo(function MasterMemoryFeature() {
  return (
    <motion.section
      className="mb-14"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.42, ease: EASE_OUT_EXPO }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-lavender-pulse/20 bg-lavender-pulse/[0.04]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 80% at 10% 50%, rgba(153,132,216,0.13) 0%, transparent 65%)" }}
        />
        <div className="relative p-8 md:p-12">
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-lavender-pulse/60">
            BỘ NÃO ĐIỀU PHỐI · INTERNAL · PRIVATE
          </span>
          <h2 className="font-display mt-4 text-[32px] md:text-[44px] leading-none tracking-[-0.03em] text-ghost-white">
            MH Master Memory
          </h2>
          <p className="mt-4 max-w-[580px] text-[15px] leading-relaxed text-ash-gray">
            Hệ điều hành trí nhớ, quyết định và điều phối đa-AI. Không phải ứng dụng —
            là cấu trúc giúp mọi AI tham gia đúng vai trò trong đúng phạm vi,
            xuyên suốt toàn bộ hệ sinh thái.
          </p>

          {/* 4 layers */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "Memory", desc: "Bối cảnh xuyên phiên" },
              { label: "Decision", desc: "Quyết định có lý do" },
              { label: "Evidence", desc: "Tested vs Untested" },
              { label: "Governance", desc: "Phạm vi AI" },
            ].map((layer) => (
              <div
                key={layer.label}
                className="flex flex-col rounded-xl border border-lavender-pulse/20 bg-lavender-pulse/5 px-4 py-3 min-w-[110px]"
              >
                <span className="text-[12px] font-mono uppercase tracking-wider text-lavender-pulse">
                  {layer.label}
                </span>
                <span className="mt-1 text-[11px] text-ash-gray/60">{layer.desc}</span>
              </div>
            ))}
          </div>

          {/* Multi-AI */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-steel-gray/70 mr-1">Điều phối:</span>
            {["Notion AI", "Claude", "ChatGPT", "AntiGravity", "Lovable"].map((ai) => (
              <span
                key={ai}
                className="rounded bg-white/5 px-2.5 py-1 text-[11px] font-mono text-ash-gray border border-white/8"
              >
                {ai}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/he-sinh-thai"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-lavender-pulse hover:opacity-70 transition-opacity"
            >
              Xem toàn bộ hệ sinh thái →
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

/* ── Pipeline text ──────────────────────────────────────────────── */
const Pipeline = memo(function Pipeline() {
  const nodes = [
    { label: "Quantum", sub: "Quan sát" },
    { label: "Extension", sub: "Thu thập" },
    { label: "FileOS", sub: "Tổ chức" },
    { label: "Sample FL", sub: "Sử dụng" },
    { label: "Studio", sub: "Chia sẻ" },
  ];
  return (
    <Reveal className="mb-14">
      <div className="overflow-x-auto pb-1">
        <div className="flex items-start gap-0 min-w-[480px]">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex items-start">
              <div className="flex flex-col items-center">
                <span className="text-[12px] font-mono text-ghost-white/70 whitespace-nowrap">
                  {node.label}
                </span>
                <span className="text-[10px] font-mono text-steel-gray/50 mt-0.5">{node.sub}</span>
              </div>
              {i < nodes.length - 1 && (
                <span className="text-white/15 text-[11px] px-3 mt-0.5">→</span>
              )}
            </div>
          ))}
          <span className="ml-6 self-start text-[10px] font-mono tracking-widest text-lavender-pulse/35 uppercase mt-0.5">
            PIPELINE
          </span>
        </div>
      </div>
    </Reveal>
  );
});

/* ── Accordion item ─────────────────────────────────────────────── */
interface AccordionItemProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = memo(function AccordionItem({
  project,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const colorClass = statusColor[project.status] ?? "text-ash-gray";
  const expand = EXPAND[project.slug];

  return (
    <div className="border-t border-white/8">
      {/* Row */}
      <button
        onClick={onToggle}
        className="group w-full flex items-baseline gap-5 py-6 px-2 text-left transition-colors duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lavender-pulse/50"
      >
        {/* Number */}
        <span
          className={`font-display text-[38px] md:text-[48px] leading-none tracking-[-0.04em] transition-colors duration-300 flex-shrink-0 w-[55px] md:w-[72px] ${
            isOpen
              ? "text-lavender-pulse/40"
              : "text-white/10 group-hover:text-lavender-pulse/25"
          }`}
        >
          {num}
        </span>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1.5">
            <span className="text-[11px] font-mono tracking-widest uppercase text-ash-gray/50">
              {project.role}
            </span>
            <span className="text-white/15 text-[10px]">/</span>
            <span className={`text-[11px] font-mono uppercase tracking-wider ${colorClass}`}>
              {statusLabel[project.status]}
            </span>
          </div>
          <h3
            className={`font-display text-[22px] md:text-[28px] leading-tight tracking-[-0.02em] transition-colors duration-300 ${
              isOpen ? "text-white" : "text-ghost-white group-hover:text-white"
            }`}
          >
            {project.title}
          </h3>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <span className="text-[11px] font-mono text-steel-gray">{project.language}</span>
          <motion.span
            className="text-[18px] text-lavender-pulse/60 leading-none"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            +
          </motion.span>
        </div>
      </button>

      {/* Expand */}
      <AnimatePresence initial={false}>
        {isOpen && expand && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 px-2 md:pl-[80px]">
              {/* Summary */}
              <p className="text-[14px] md:text-[15px] leading-relaxed text-ash-gray max-w-[680px]">
                {expand.summary}
              </p>

              {/* Points */}
              <ul className="mt-5 space-y-2.5">
                {expand.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-ghost-white/80 leading-relaxed">
                    <span className="text-lavender-pulse/60 flex-shrink-0 mt-0.5">◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Ecosystem */}
              <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ash-gray/40">
                  VỊ TRÍ TRONG HỆ SINH THÁI
                </span>
                <p className="mt-2 text-[13px] text-ash-gray leading-relaxed">{expand.eco}</p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/du-an/$slug"
                  params={{ slug: project.slug }}
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ghost-white border border-white/15 rounded-full px-4 py-2 hover:border-lavender-pulse/40 hover:text-lavender-pulse transition-colors duration-200"
                >
                  Chi tiết đầy đủ →
                </Link>
                {expand.github && (
                  <a
                    href={expand.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ash-gray border border-white/10 rounded-full px-4 py-2 hover:border-white/25 hover:text-ghost-white transition-colors duration-200"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

/* ── Page ───────────────────────────────────────────────────────── */
function ProjectsPage() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const toggle = (slug: string) => {
    setOpenSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="relative px-6 pt-28 pb-24">
      <BgLayer />
      <div className="mx-auto max-w-[960px]">
        <PageHeader />
        <MasterMemoryFeature />
        <Pipeline />

        <motion.span
          className="block text-[11px] font-mono tracking-[0.2em] uppercase text-ash-gray/35 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          CÔNG CỤ TRONG HỆ SINH THÁI — BẤM ĐỂ XEM CHI TIẾT
        </motion.span>

        <div>
          {projects.map((p, i) => (
            <AccordionItem
              key={p.slug}
              project={p}
              index={i}
              isOpen={openSlug === p.slug}
              onToggle={() => toggle(p.slug)}
            />
          ))}
        </div>
        <div className="border-t border-white/8" />

        {/* Footer */}
        <Reveal className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-ash-gray/40">HỆ SINH THÁI</p>
            <p className="mt-1 text-[15px] text-ash-gray">Xem giới thiệu đầy đủ MH Master Memory</p>
          </div>
          <Link
            to="/he-sinh-thai"
            className="flex items-center gap-2 text-[13px] font-medium text-ghost-white border border-white/15 rounded-full px-5 py-2.5 hover:border-lavender-pulse/50 hover:text-lavender-pulse transition-colors duration-300"
          >
            Xem hệ sinh thái →
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
