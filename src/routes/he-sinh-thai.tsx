import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { PillBadge } from "@/components/pill-badge";
import { Reveal, EASE_OUT_EXPO } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const COPY = {
  vi: {
    metaTitle: "MH Master Memory — MINH HIEU STUDIO",
    metaDescription:
      "Khung quản trị bối cảnh, quyết định, bằng chứng và phạm vi cho workflow đa-AI nội bộ của Studio Minh Hiếu.",
    eyebrow: "INTERNAL WORKFLOW FRAMEWORK",
    titleA: "MH Master",
    titleB: "Memory.",
    intro:
      "Khung làm việc nội bộ giúp Studio Minh Hiếu giữ đúng bối cảnh, quyết định, bằng chứng và giới hạn khi nhiều công cụ AI cùng tham gia một dự án.",
    status: "Internal · Đang hoàn thiện · Không phải sản phẩm độc lập",
    overviewEyebrow: "MỤC ĐÍCH",
    overviewTitle: "Giảm việc giải thích lại. Tăng khả năng kiểm chứng.",
    overviewBody:
      "MH Master Memory không thay người vận hành ra quyết định. Nó tổ chức thông tin cần thiết để mỗi phiên làm việc biết đang giải quyết vấn đề gì, phần nào đã được kiểm tra và công cụ nào được phép thực hiện hành động nào.",
    whatIs: "Hiện tại là gì",
    whatIsItems: [
      "Bộ quy ước để giữ bối cảnh giữa nhiều phiên làm việc.",
      "Nơi ghi lại quyết định quan trọng và lý do thay đổi.",
      "Cách phân biệt Tested, Observed và Untested.",
      "Khung xác định phạm vi đọc, sửa và đề xuất của từng công cụ.",
    ],
    whatNot: "Hiện tại chưa phải gì",
    whatNotItems: [
      "Không phải một ứng dụng độc lập đã phát hành.",
      "Không phải nền tảng SaaS hoặc dịch vụ bán cho doanh nghiệp.",
      "Không tự cấp quyền cho AI hành động ngoài phạm vi.",
      "Không thay thế việc kiểm tra source, log, test và dữ liệu thật.",
    ],
    layersEyebrow: "CẤU TRÚC",
    layersTitle: "Bốn lớp quản trị.",
    layers: [
      {
        n: "01",
        label: "Memory",
        title: "Giữ bối cảnh xuyên phiên",
        body: "Lưu mục tiêu, trạng thái, lỗi đã gặp và bước tiếp theo để phiên mới không bắt đầu lại từ đầu.",
      },
      {
        n: "02",
        label: "Decision",
        title: "Ghi lại quyết định và lý do",
        body: "Những thay đổi quan trọng cần có lý do, rủi ro và người phê duyệt trước khi được áp dụng.",
      },
      {
        n: "03",
        label: "Evidence",
        title: "Tách tuyên bố khỏi bằng chứng",
        body: "Phân biệt phần đã kiểm thử, phần mới quan sát và phần chưa xác nhận để tránh báo cáo sai trạng thái.",
      },
      {
        n: "04",
        label: "Governance",
        title: "Giới hạn phạm vi hành động",
        body: "Xác định công cụ nào được đọc, sửa hoặc đề xuất trong từng dự án; người vận hành quyết định cuối cùng.",
      },
    ],
    flowEyebrow: "QUY TRÌNH",
    flowTitle: "Một vòng làm việc có dấu vết.",
    flow: [
      { n: "01", title: "Nhận bối cảnh", body: "Xác định mục tiêu, source hiện tại, giới hạn và việc đang dang dở." },
      { n: "02", title: "Đề xuất thay đổi", body: "Công cụ phân tích và đưa ra phương án trong đúng phạm vi được giao." },
      { n: "03", title: "Người vận hành duyệt", body: "Minh Hiếu quyết định phần nào được thực hiện, hoãn lại hoặc loại bỏ." },
      { n: "04", title: "Kiểm tra bằng chứng", body: "Đối chiếu source, build, test, log, ảnh hoặc video sau khi thay đổi." },
      { n: "05", title: "Cập nhật trạng thái", body: "Lưu kết quả thật và bước tiếp theo cho phiên làm việc sau." },
    ],
    relationEyebrow: "MỐI LIÊN HỆ VỚI SẢN PHẨM",
    relationTitle: "Khung vận hành đứng phía sau các dự án.",
    relationBody:
      "MH Master Memory hỗ trợ quá trình xây dựng MH Quantum Inspector, MH Dowsample Extension, MH FileOS và MH Sample FL. Nội dung và trạng thái của từng công cụ được trình bày riêng tại trang Dự án để tránh trộn framework nội bộ với sản phẩm.",
    relationCta: "Xem bốn dự án →",
    contactCta: "Trao đổi hợp tác",
  },
  en: {
    metaTitle: "MH Master Memory — MINH HIEU STUDIO",
    metaDescription:
      "An internal framework for managing context, decisions, evidence and scope across Studio Minh Hieu's multi-AI workflow.",
    eyebrow: "INTERNAL WORKFLOW FRAMEWORK",
    titleA: "MH Master",
    titleB: "Memory.",
    intro:
      "An internal working framework that helps Studio Minh Hieu preserve context, decisions, evidence and boundaries when multiple AI tools participate in one project.",
    status: "Internal · In development · Not a standalone product",
    overviewEyebrow: "PURPOSE",
    overviewTitle: "Less re-explaining. More verifiable work.",
    overviewBody:
      "MH Master Memory does not replace the operator's decisions. It organises the information required for every session to know the current problem, what has been verified and which tools are allowed to take which actions.",
    whatIs: "What it is today",
    whatIsItems: [
      "A convention for preserving context across working sessions.",
      "A place to record important decisions and reasons for change.",
      "A method for separating Tested, Observed and Untested states.",
      "A framework for defining read, edit and proposal scope for each tool.",
    ],
    whatNot: "What it is not yet",
    whatNotItems: [
      "Not a released standalone application.",
      "Not a SaaS platform or an enterprise service.",
      "It does not grant AI tools permission to act outside their scope.",
      "It does not replace source, log, test and real-data verification.",
    ],
    layersEyebrow: "STRUCTURE",
    layersTitle: "Four governance layers.",
    layers: [
      {
        n: "01",
        label: "Memory",
        title: "Preserve cross-session context",
        body: "Stores goals, current status, known failures and next steps so a new session does not restart from zero.",
      },
      {
        n: "02",
        label: "Decision",
        title: "Record decisions and reasons",
        body: "Important changes require a reason, risk assessment and operator approval before they are applied.",
      },
      {
        n: "03",
        label: "Evidence",
        title: "Separate claims from evidence",
        body: "Distinguishes tested behaviour, observed behaviour and unverified assumptions to prevent false status reporting.",
      },
      {
        n: "04",
        label: "Governance",
        title: "Limit the action scope",
        body: "Defines which tools may read, edit or propose within each project; the operator remains the final decision-maker.",
      },
    ],
    flowEyebrow: "WORKFLOW",
    flowTitle: "A traceable working loop.",
    flow: [
      { n: "01", title: "Receive context", body: "Identify the goal, current source, limits and unfinished work." },
      { n: "02", title: "Propose a change", body: "A tool analyses and proposes actions within the assigned scope." },
      { n: "03", title: "Operator approval", body: "Minh Hieu decides what is executed, deferred or rejected." },
      { n: "04", title: "Verify evidence", body: "Check source, build, tests, logs, images or video after the change." },
      { n: "05", title: "Update status", body: "Store the real outcome and next step for the following session." },
    ],
    relationEyebrow: "RELATION TO THE PRODUCTS",
    relationTitle: "The operating framework behind the projects.",
    relationBody:
      "MH Master Memory supports the development of MH Quantum Inspector, MH Dowsample Extension, MH FileOS and MH Sample FL. Each tool's content and status live on the Projects page so the internal framework is not mixed with the products.",
    relationCta: "View the four projects →",
    contactCta: "Discuss a collaboration",
  },
} as const;

export const Route = createFileRoute("/he-sinh-thai")({
  head: () => ({
    meta: [
      { title: COPY.vi.metaTitle },
      { name: "description", content: COPY.vi.metaDescription },
    ],
  }),
  component: MasterMemoryPage,
});

function MasterMemoryPage() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.startsWith("en") ? "en" : "vi";
  const copy = COPY[lang];

  return (
    <div className="relative px-6 pb-24 pt-28">
      <AmbientBackground />
      <main className="relative z-10 mx-auto max-w-[1040px]">
        <Hero copy={copy} />
        <Overview copy={copy} />
        <Layers copy={copy} />
        <Workflow copy={copy} />
        <Relation copy={copy} />
      </main>
    </div>
  );
}

function AmbientBackground() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_0%,rgba(153,132,216,0.10)_0%,transparent_70%)]" />
      <motion.div
        className="absolute left-[12%] top-[22%] h-[420px] w-[420px] rounded-full bg-lavender-pulse/[0.045] blur-[110px]"
        animate={reduce ? {} : { y: [-20, 20, -20], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

type Copy = (typeof COPY)["vi"] | (typeof COPY)["en"];

function Hero({ copy }: { copy: Copy }) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
      >
        <PillBadge tone="lavender">{copy.eyebrow}</PillBadge>
      </motion.div>
      <motion.h1
        className="font-display mt-8 text-[clamp(62px,10vw,112px)] leading-[0.9] tracking-[-0.045em] text-ghost-white"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.12, ease: EASE_OUT_EXPO }}
      >
        {copy.titleA}<br />
        <span className="italic text-lavender-pulse">{copy.titleB}</span>
      </motion.h1>
      <motion.p
        className="mt-9 max-w-[720px] text-[17px] leading-[1.75] text-ash-gray md:text-[19px]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.62, delay: 0.3, ease: EASE_OUT_EXPO }}
      >
        {copy.intro}
      </motion.p>
      <motion.p
        className="mt-7 font-mono text-[10px] uppercase tracking-[0.15em] text-steel-gray"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.48 }}
      >
        {copy.status}
      </motion.p>
    </section>
  );
}

function Overview({ copy }: { copy: Copy }) {
  return (
    <section className="border-t border-white/10 py-24">
      <Reveal>
        <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-lavender-pulse/55">
          {copy.overviewEyebrow}
        </span>
        <h2 className="font-display mt-6 max-w-[760px] text-[48px] leading-[1.02] text-ghost-white md:text-[68px]">
          {copy.overviewTitle}
        </h2>
        <p className="mt-7 max-w-[720px] text-[15px] leading-[1.8] text-ash-gray">
          {copy.overviewBody}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Definition title={copy.whatIs} items={copy.whatIsItems} positive />
        <Definition title={copy.whatNot} items={copy.whatNotItems} />
      </div>
    </section>
  );
}

function Definition({ title, items, positive = false }: { title: string; items: readonly string[]; positive?: boolean }) {
  return (
    <Reveal>
      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-8">
        <h3 className="text-[19px] font-medium text-ghost-white">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-[14px] leading-[1.65] text-ash-gray">
              <span className={positive ? "text-mint-signal" : "text-amber-300"}>{positive ? "●" : "○"}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function Layers({ copy }: { copy: Copy }) {
  return (
    <section className="border-t border-white/10 py-24">
      <Reveal>
        <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-lavender-pulse/55">
          {copy.layersEyebrow}
        </span>
        <h2 className="font-display mt-6 text-[48px] leading-none text-ghost-white md:text-[68px]">
          {copy.layersTitle}
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-white/10">
        {copy.layers.map((layer) => (
          <Reveal key={layer.n}>
            <article className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-[70px_200px_1fr] md:gap-8">
              <span className="font-display text-[34px] text-white/12">{layer.n}</span>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-lavender-pulse">
                  {layer.label}
                </span>
                <h3 className="mt-2 text-[20px] font-medium leading-tight text-ghost-white">{layer.title}</h3>
              </div>
              <p className="text-[14px] leading-[1.75] text-ash-gray">{layer.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Workflow({ copy }: { copy: Copy }) {
  return (
    <section className="border-t border-white/10 py-24">
      <Reveal>
        <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-lavender-pulse/55">
          {copy.flowEyebrow}
        </span>
        <h2 className="font-display mt-6 text-[48px] leading-none text-ghost-white md:text-[68px]">
          {copy.flowTitle}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-5">
        {copy.flow.map((step) => (
          <Reveal key={step.n}>
            <article className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <span className="font-mono text-[10px] text-lavender-pulse/55">{step.n}</span>
              <h3 className="mt-5 text-[15px] font-medium text-ghost-white">{step.title}</h3>
              <p className="mt-3 text-[12px] leading-[1.65] text-ash-gray/75">{step.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Relation({ copy }: { copy: Copy }) {
  return (
    <section className="border-t border-white/10 py-24">
      <Reveal>
        <div className="rounded-2xl border border-lavender-pulse/20 bg-lavender-pulse/[0.035] p-8 md:p-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.17em] text-lavender-pulse/60">
            {copy.relationEyebrow}
          </span>
          <h2 className="font-display mt-6 max-w-[720px] text-[42px] leading-[1.04] text-ghost-white md:text-[58px]">
            {copy.relationTitle}
          </h2>
          <p className="mt-7 max-w-[730px] text-[15px] leading-[1.8] text-ash-gray">
            {copy.relationBody}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="lg">
              <Link to="/du-an">{copy.relationCta}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/lien-he">{copy.contactCta}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
