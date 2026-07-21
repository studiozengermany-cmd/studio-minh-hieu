import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { memo } from "react";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";

export const Route = createFileRoute("/du-an/dowsample-extension")({
  head: () => ({
    meta: [
      { title: "MH-Dowsampl.Extension — MINH HIEU STUDIO" },
      {
        name: "description",
        content:
          "Chrome Extension + Python backend chạy local. Dán link → tìm audio công khai → tải về máy không ghi đè.",
      },
    ],
  }),
  component: DownsampleExtensionPage,
});

/* ── shared helpers ──────────────────────────────────────────────── */
const SectionLabel = memo(function SectionLabel({ children }: { children: string }) {
  return (
    <span className="block text-[11px] font-mono tracking-[0.2em] uppercase text-ash-gray/50 mb-5">
      {children}
    </span>
  );
});

const Bullet = memo(function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[14px] leading-relaxed text-ghost-white/80">
      <span className="text-lavender-pulse/60 flex-shrink-0 mt-1">◆</span>
      <span>{children}</span>
    </li>
  );
});

const Warning = memo(function Warning({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[14px] leading-relaxed text-ash-gray">
      <span className="text-steel-gray/70 flex-shrink-0 mt-1">–</span>
      <span>{children}</span>
    </li>
  );
});

const Step = memo(function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 items-start">
      <span className="font-display text-[22px] leading-none text-lavender-pulse/50 tabular-nums flex-shrink-0 w-8">
        {String(n).padStart(2, "0")}
      </span>
      <span className="text-[14px] leading-relaxed text-ghost-white/85 pt-0.5">{children}</span>
    </li>
  );
});

const Code = memo(function Code({ children }: { children: string }) {
  return (
    <code className="rounded bg-white/8 px-1.5 py-0.5 text-[12px] font-mono text-lavender-pulse/80">
      {children}
    </code>
  );
});

/* ── Hero ──────────────────────────────────────────────────────── */
const Hero = memo(function Hero() {
  return (
    <div className="mb-20">
      {/* Breadcrumb */}
      <motion.div
        className="flex items-center gap-2 text-[13px] text-steel-gray mb-10"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
      >
        <Link to="/du-an" className="hover:text-ghost-white transition-colors">
          Dự án
        </Link>
        <span className="text-white/20">/</span>
        <span className="text-ash-gray">MH-Dowsampl.Extension</span>
      </motion.div>

      {/* Status pills */}
      <motion.div
        className="flex flex-wrap gap-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT_EXPO }}
      >
        <span className="rounded-full border border-amber-400/30 bg-amber-400/8 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-amber-400">
          Development
        </span>
        <span className="rounded-full border border-sky-400/25 bg-sky-400/8 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-sky-300">
          Chrome Extension
        </span>
        <span className="rounded-full border border-emerald-400/25 bg-emerald-400/8 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-emerald-400">
          Local-first
        </span>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-ash-gray">
          Windows
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="font-display text-[clamp(40px,7vw,80px)] leading-[0.9] tracking-[-0.03em] text-ghost-white"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
      >
        MH-Dowsampl<span className="text-lavender-pulse">.</span>Extension
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="mt-5 text-[17px] md:text-[18px] leading-relaxed text-ash-gray max-w-[600px]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_EXPO }}
      >
        Lớp thu thập âm thanh local-first trong hệ sinh thái công cụ MH.
      </motion.p>

      {/* Warning notice */}
      <motion.div
        className="mt-8 rounded-xl border border-amber-400/20 bg-amber-400/[0.04] px-5 py-4 max-w-[680px]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.45, ease: EASE_OUT_EXPO }}
      >
        <p className="text-[13px] leading-relaxed text-ash-gray">
          <span className="font-medium text-amber-400">Giai đoạn phát triển.</span>{" "}
          Công cụ được xây dựng trước hết cho quy trình thu thập sample của Minh Hiếu.
          Chưa phát hành trên Chrome Web Store và chưa được tuyên bố là bản ổn định cho mọi website.
        </p>
      </motion.div>
    </div>
  );
});

/* ── Why section ───────────────────────────────────────────────── */
const WhySection = memo(function WhySection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>Vì sao dự án này tồn tại</SectionLabel>
      <p className="text-[15px] leading-relaxed text-ash-gray max-w-[700px] mb-8">
        Trong quá trình làm nhạc, việc mở từng trang, tìm đúng đường dẫn âm thanh
        rồi tải và kiểm tra từng file làm mất nhiều thời gian.
        Công cụ này rút ngắn phần việc lặp lại đó:
      </p>
      <ul className="space-y-3">
        <Bullet>Nhận liên kết do người dùng chủ động cung cấp</Bullet>
        <Bullet>Tìm các đường dẫn âm thanh công khai trên trang</Bullet>
        <Bullet>Tải file về máy local mà không ghi đè file đã có</Bullet>
        <Bullet>Hiển thị tiến trình và kết quả ngay trong popup</Bullet>
        <Bullet>Giữ quá trình thu thập tách biệt với bước quản lý và sử dụng sample</Bullet>
      </ul>
      <p className="mt-6 text-[14px] text-ash-gray/70 italic">
        Mục tiêu là giảm thao tác kỹ thuật để Minh Hiếu dành nhiều thời gian hơn cho công việc sản xuất âm nhạc.
      </p>
    </Reveal>
  );
});

/* ── How it works ─────────────────────────────────────────────── */
const HowSection = memo(function HowSection() {
  const flow = [
    { label: "Dán liên kết", sub: "Người dùng" },
    { label: "Chrome Extension", sub: "Gửi yêu cầu" },
    { label: "Local API", sub: "127.0.0.1:8765" },
    { label: "Tìm audio", sub: "Scan public links" },
    { label: "Tải về", sub: "Lưu local" },
  ];
  return (
    <Reveal className="mb-16">
      <SectionLabel>Cách hoạt động</SectionLabel>

      {/* Flow */}
      <div className="overflow-x-auto mb-8">
        <div className="flex items-start gap-0 min-w-[520px]">
          {flow.map((node, i) => (
            <div key={node.label} className="flex items-start">
              <div className="flex flex-col items-center">
                <span className="rounded-lg border border-white/12 bg-white/[0.03] px-3 py-2 text-[12px] font-mono text-ghost-white/80 whitespace-nowrap">
                  {node.label}
                </span>
                <span className="text-[10px] font-mono text-steel-gray/60 mt-1">{node.sub}</span>
              </div>
              {i < flow.length - 1 && (
                <span className="text-white/20 text-[12px] px-2 mt-2.5">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-[14px] text-ash-gray max-w-[620px]">
        Extension không tự tải âm thanh khi người dùng chưa bấm nút.
        Backend chỉ lắng nghe trên địa chỉ loopback{" "}
        <Code>127.0.0.1:8765</Code> — không mở dịch vụ ra ngoài mạng.
      </p>
    </Reveal>
  );
});

/* ── Capabilities ─────────────────────────────────────────────── */
const CAPS = [
  { group: "Nhập nguồn", detail: "Nhận một liên kết HTTP/HTTPS do người dùng dán vào popup" },
  { group: "Tìm âm thanh", detail: "Đọc Splice public sample page hoặc trang có đường dẫn audio công khai" },
  { group: "Tải file", detail: "Tải file gốc / preview tìm thấy về máy local" },
  { group: "Xử lý nhóm", detail: "Tối đa 200 đường dẫn / nhóm, tải đồng thời tối đa 4 file" },
  { group: "Chống ghi đè", detail: "Tự thêm (2), (3) khi tên file đã tồn tại" },
  { group: "An toàn khi tải", detail: "Ghi vào .part trước, chỉ đổi thành file chính sau khi tải xong" },
  { group: "Theo dõi", detail: "Hiển thị trạng thái server, quá trình tìm link, tiến trình tải và kết quả" },
  { group: "Tiếp tục theo dõi", detail: "Lưu job gần nhất trong chrome.storage.local để popup mở lại vẫn xem được" },
];

const CapabilitiesSection = memo(function CapabilitiesSection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>Khả năng hiện có</SectionLabel>
      <div className="space-y-0">
        {CAPS.map((cap, i) => (
          <div
            key={cap.group}
            className={`flex gap-5 py-4 ${
              i < CAPS.length - 1 ? "border-b border-white/6" : ""
            }`}
          >
            <span className="w-[140px] flex-shrink-0 text-[12px] font-mono text-ash-gray/60 uppercase tracking-wider pt-0.5">
              {cap.group}
            </span>
            <p className="text-[14px] leading-relaxed text-ghost-white/80">{cap.detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[12px] text-steel-gray italic">
        Những khả năng trên mô tả source hiện có, không thay thế việc nghiệm thu trên máy Windows thật và nguồn dữ liệu thật.
      </p>
    </Reveal>
  );
});

/* ── Install ──────────────────────────────────────────────────── */
const InstallSection = memo(function InstallSection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>Cài đặt trên Windows</SectionLabel>

      <div className="mb-8">
        <p className="text-[13px] font-mono uppercase tracking-wider text-ash-gray/50 mb-3">Yêu cầu</p>
        <ul className="space-y-2">
          <Bullet>Windows 10 hoặc Windows 11</Bullet>
          <Bullet>Python 3</Bullet>
          <Bullet>Google Chrome hoặc Chromium hỗ trợ Manifest V3</Bullet>
          <Bullet>Repository đã được clone hoặc tải về máy</Bullet>
        </ul>
      </div>

      <div>
        <p className="text-[13px] font-mono uppercase tracking-wider text-ash-gray/50 mb-4">Thiết lập lần đầu</p>
        <ol className="space-y-5">
          <Step n={1}>
            Chạy <Code>SETUP.cmd</Code> để tạo môi trường Python local.
          </Step>
          <Step n={2}>
            Chạy <Code>START-SERVER.cmd</Code> và giữ cửsa sổ server mở trong lúc sử dụng.
          </Step>
          <Step n={3}>
            Chạy <Code>INSTALL-EXTENSION.cmd</Code> để mở trang quản lý extension và thư mục cần nạp.
          </Step>
          <Step n={4}>
            Tại <Code>chrome://extensions/</Code>, bật <span className="text-ghost-white font-medium">Chế độ dành cho nhà phát triển</span>.
          </Step>
          <Step n={5}>
            Chọn <span className="text-ghost-white font-medium">Tải tiện ích đã giải nén</span>.
          </Step>
          <Step n={6}>
            Chọn thư mục <Code>extension</Code> trong repository này.
          </Step>
        </ol>
        <p className="mt-5 text-[13px] text-ash-gray/60">
          Khi source được cập nhật, kéo code mới về máy rồi bấm{" "}
          <span className="text-ghost-white">Tải lại</span> trên thẻ extension.
        </p>
      </div>
    </Reveal>
  );
});

/* ── Usage ─────────────────────────────────────────────────────── */
const UsageSection = memo(function UsageSection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>Hướng dẫn sử dụng</SectionLabel>
      <ol className="space-y-5">
        <Step n={1}>Khởi động <Code>START-SERVER.cmd</Code>.</Step>
        <Step n={2}>
          Mở popup <span className="text-ghost-white font-medium">MH-Dowsample Extension</span> trên thanh công cụ Chrome.
        </Step>
        <Step n={3}>Kiểm tra trạng thái <span className="text-ghost-white font-medium">Server kết nối</span>.</Step>
        <Step n={4}>Dán liên kết Splice hoặc liên kết audio trực tiếp.</Step>
        <Step n={5}>Bấm <span className="text-ghost-white font-medium">Quét và tải âm thanh</span>.</Step>
        <Step n={6}>Theo dõi số file đã tìm thấy, đã tải và lỗi tải.</Step>
        <Step n={7}>Bấm <span className="text-ghost-white font-medium">Mở thư mục tải</span> khi công việc hoàn tất.</Step>
      </ol>
      <p className="mt-5 text-[13px] text-ash-gray/60">
        Có thể đóng popup trong lúc backend đang tải. Mở lại popup để tiếp tục xem job gần nhất.
      </p>
    </Reveal>
  );
});

/* ── File location ─────────────────────────────────────────────── */
const FileLocationSection = memo(function FileLocationSection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>Nơi lưu file</SectionLabel>
      <div className="space-y-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4">
          <p className="text-[12px] font-mono text-ash-gray/50 mb-2">Có ổ J:</p>
          <code className="text-[14px] font-mono text-lavender-pulse/80">J:\MH-Audio-Downloads</code>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4">
          <p className="text-[12px] font-mono text-ash-gray/50 mb-2">Không có ổ J:</p>
          <code className="text-[14px] font-mono text-lavender-pulse/80">Downloads\MH-Audio-Downloads</code>
        </div>
      </div>
      <p className="mt-4 text-[13px] text-ash-gray/60">
        Đổi thư mục gốc bằng biến môi trường{" "}
        <Code>MH_AUDIO_DOWNLOAD_DIR</Code> trước khi mở server.
      </p>
    </Reveal>
  );
});

/* ── Safety ──────────────────────────────────────────────────── */
const SafetySection = memo(function SafetySection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>An toàn và quyền riêng tư</SectionLabel>
      <ul className="space-y-3">
        <Bullet>Backend chỉ lắng nghe tại <Code>127.0.0.1</Code>, không mở dịch vụ ra mạng LAN hoặc Internet.</Bullet>
        <Bullet>Extension chỉ được cấp quyền lưu trạng thái local và gọi local API tại cổng <Code>8765</Code>.</Bullet>
        <Bullet>File đang tải dùng đuôi <Code>.part</Code> để tránh xem file chưa hoàn chỉnh như kết quả cuối.</Bullet>
        <Bullet>File đã tồn tại không bị ghi đè.</Bullet>
        <Bullet>Người dùng tự kiểm tra quyền sử dụng, điều khoản nguồn và license trước khi phân phối.</Bullet>
        <Bullet>Không nên dán liên kết chứa token, thông tin đăng nhập hoặc dữ liệu riêng tư.</Bullet>
      </ul>
    </Reveal>
  );
});

/* ── Limits ──────────────────────────────────────────────────── */
const LimitsSection = memo(function LimitsSection() {
  return (
    <Reveal className="mb-16">
      <SectionLabel>Giới hạn hiện tại</SectionLabel>
      <ul className="space-y-2.5">
        <Warning>Chưa kiểm thử trên mọi website và mọi kiểu trình phát âm thanh.</Warning>
        <Warning>Ưu tiên Splice public sample pages và liên kết audio trực tiếp.</Warning>
        <Warning>Không vượt qua đăng nhập, paywall, DRM hoặc cơ chế bảo vệ của nguồn.</Warning>
        <Warning>Chưa phát hành trên Chrome Web Store.</Warning>
        <Warning>Chưa có security audit độc lập.</Warning>
        <Warning>Chưa có bộ cài tự động hoàn chỉnh cho người dùng cuối.</Warning>
        <Warning>Kết quả phụ thuộc cấu trúc trang và việc nguồn có cung cấp đường dẫn audio công khai hay không.</Warning>
      </ul>
    </Reveal>
  );
});

/* ── Ecosystem position ────────────────────────────────────────── */
const EcosystemSection = memo(function EcosystemSection() {
  const nodes = [
    { label: "MH Quantum Inspector", sub: "Quan sát và làm rõ", active: false },
    { label: "MH-Dowsampl.Extension", sub: "Thu thập âm thanh", active: true },
    { label: "MH FileOS", sub: "Tổ chức và bảo vệ", active: false },
    { label: "MH Sample FL", sub: "Tìm, nghe và sử dụng", active: false },
    { label: "MINH HIEU STUDIO", sub: "Ghi lại và chia sẻ", active: false },
  ];
  return (
    <Reveal className="mb-16">
      <SectionLabel>Vị trí trong hệ sinh thái MH</SectionLabel>
      <p className="text-[14px] text-ash-gray mb-8 max-w-[620px]">
        Các dự án mang tiền tố MH là những lớp liên kết trong cùng một quy trình,
        không phải các repository rời rạc. MH-Dowsampl.Extension là lớp{" "}
        <span className="text-ghost-white font-medium">thu thập</span>.
      </p>
      <div className="space-y-2">
        {nodes.map((node, i) => (
          <div
            key={node.label}
            className={`flex items-center gap-4 rounded-xl px-5 py-3.5 border transition-colors ${
              node.active
                ? "border-lavender-pulse/30 bg-lavender-pulse/[0.06]"
                : "border-white/6 bg-white/[0.015]"
            }`}
          >
            <span
              className={`font-display text-[16px] tabular-nums flex-shrink-0 w-7 ${
                node.active ? "text-lavender-pulse" : "text-white/20"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className={`text-[14px] font-medium ${
                  node.active ? "text-ghost-white" : "text-ash-gray"
                }`}
              >
                {node.label}
              </p>
              <p className="text-[12px] text-steel-gray/70">{node.sub}</p>
            </div>
            {node.active && (
              <span className="text-[11px] font-mono uppercase tracking-widest text-lavender-pulse/70">
                ← bạn đang ở đây
              </span>
            )}
          </div>
        ))}
      </div>
    </Reveal>
  );
});

/* ── Principles ──────────────────────────────────────────────── */
const PrinciplesSection = memo(function PrinciplesSection() {
  const items = [
    "Bắt đầu từ nhu cầu thật trong quy trình làm nhạc.",
    "Người dùng quyết định nguồn, phạm vi và thời điểm tải.",
    "Dữ liệu và tiến trình hiển thị phải đến từ backend thật, không dùng số giả.",
    "Không ghi đè file đã tồn tại.",
    "Không mô tả mockup, build hoặc source chưa nghiệm thu như sản phẩm hoàn thiện.",
    "Không bắt buộc cloud, API key hoặc gói trả phí cho workflow cốt lõi.",
    "README phải nói rõ vị trí trong hệ sinh thái MH, cách dùng, giới hạn và trách nhiệm của người dùng.",
  ];
  return (
    <Reveal className="mb-16">
      <SectionLabel>Nguyên tắc phát triển</SectionLabel>
      <ol className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 text-[14px] leading-relaxed text-ash-gray">
            <span className="font-display text-[16px] text-lavender-pulse/40 tabular-nums flex-shrink-0 w-6">
              {i + 1}.
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </Reveal>
  );
});

/* ── Sidebar meta ───────────────────────────────────────────────── */
const SidebarMeta = memo(function SidebarMeta() {
  const rows = [
    { label: "Trạng thái", value: "Development" },
    { label: "Loại", value: "Chrome Extension" },
    { label: "Backend", value: "Python 3" },
    { label: "Nền tảng", value: "Windows" },
    { label: "Local port", value: "127.0.0.1:8765" },
    { label: "Cập nhật", value: "2026-07" },
  ];
  return (
    <div className="lg:sticky lg:top-24 lg:h-fit">
      {/* Meta card */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-6">
        {rows.map((row, i) => (
          <div key={row.label}>
            <div className="flex items-center justify-between gap-4 py-3">
              <span className="text-[13px] text-ash-gray">{row.label}</span>
              <span className="text-right text-[13px] font-mono text-ghost-white/80">{row.value}</span>
            </div>
            {i < rows.length - 1 && <div className="h-px bg-white/5" />}
          </div>
        ))}
      </div>

      {/* GitHub */}
      <a
        href="https://github.com/studiozengermany-cmd/MH-Dowsampl.Extension"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 w-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-lavender-pulse/30 hover:bg-lavender-pulse/[0.03] transition-colors duration-200 group mb-4"
      >
        <span className="text-[14px] font-medium text-ghost-white">↗ GitHub</span>
        <span className="text-[12px] font-mono text-steel-gray group-hover:text-lavender-pulse transition-colors">
          studiozengermany-cmd
        </span>
      </a>

      {/* Tagline */}
      <div className="rounded-xl border border-white/8 bg-white/[0.015] px-5 py-4">
        <p className="text-[12px] font-mono text-ash-gray/50 leading-relaxed italic">
          "Thu thập có kiểm soát → tổ chức an toàn → sử dụng hiệu quả."
        </p>
        <p className="mt-3 text-[11px] text-steel-gray/50">
          Ý tưởng, mục tiêu và quyết định sản phẩm: Minh Hiếu.
          AI được dùng như công cụ hỗ trợ.
        </p>
      </div>
    </div>
  );
});

/* ── Page ──────────────────────────────────────────────────────── */
function DownsampleExtensionPage() {
  return (
    <div className="relative px-6 pt-28 pb-24">
      {/* Bg */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_10%,rgba(56,189,248,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-[1080px]">
        <Hero />

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
          <main className="min-w-0">
            <WhySection />
            <HowSection />
            <CapabilitiesSection />
            <InstallSection />
            <UsageSection />
            <FileLocationSection />
            <SafetySection />
            <LimitsSection />
            <EcosystemSection />
            <PrinciplesSection />

            {/* Back */}
            <Link
              to="/du-an"
              className="inline-flex items-center gap-2 text-[13px] text-ash-gray hover:text-ghost-white transition-colors"
            >
              ← Quay lại danh sách dự án
            </Link>
          </main>

          <aside>
            <SidebarMeta />
          </aside>
        </div>
      </div>
    </div>
  );
}
