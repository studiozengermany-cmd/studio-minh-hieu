import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/pill-badge";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { SplitText } from "@/components/split-text";
import i18n from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.home.title") },
      { name: "description", content: i18n.t("meta.home.description") },
      { property: "og:title", content: i18n.t("meta.home.ogTitle") },
      { property: "og:description", content: i18n.t("meta.home.ogDescription") },
    ],
  }),
  component: Home,
});

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const ECOSYSTEM = [
  { step: "01", name: "MH Quantum Inspector", role: "Quan sát", slug: "quantum-inspector" },
  { step: "02", name: "MH-Dowsampl.Extension", role: "Thu thập", slug: "dowsample-extension" },
  { step: "03", name: "MH FileOS", role: "Tổ chức", slug: "fileos" },
  { step: "04", name: "MH Sample FL", role: "Sử dụng", slug: "sample-fl" },
  { step: "05", name: "MINH HIEU STUDIO", role: "Chia sẻ", slug: "studio-site" },
];

/* ------------------------------------------------------------------ */
/* HERO BLOOM                                                          */
/* ------------------------------------------------------------------ */

const HeroBloom = memo(function HeroBloom() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[640px] max-w-[1000px] blur-3xl"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(153,132,216,0.22) 0%, rgba(153,132,216,0.08) 50%, transparent 75%)",
        willChange: "transform, opacity",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        reduce
          ? { opacity: 0.5, scale: 1 }
          : { opacity: [0.4, 0.6, 0.4], scale: [1, 1.08, 1] }
      }
      transition={
        reduce ? { duration: 0.8 } : { duration: 11, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

const Hero = memo(function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -72]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.15]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-[128px] pb-24 md:pt-[160px] md:pb-32"
    >
      <HeroBloom />

      <motion.div
        className="relative mx-auto flex max-w-[900px] flex-col items-center text-center"
        style={{ y, opacity, willChange: "transform, opacity" }}
      >
        {/* Live pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
        >
          <PillBadge live>{t("home.hero.pill")}</PillBadge>
        </motion.div>

        {/* Main headline */}
        <h1
          className="font-display mt-8 text-[68px] leading-[0.95] tracking-[-0.025em] text-ghost-white md:text-[104px]"
          data-cursor="text"
        >
          <SplitText text={t("home.hero.titleA")} as="span" stagger={0.08} />
          {" "}
          <SplitText
            text={t("home.hero.titleB")}
            as="span"
            wordClassName="text-lavender-pulse italic"
            delay={0.32}
            stagger={0.08}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 max-w-[520px] text-[17px] leading-[1.65] text-ash-gray md:text-[18px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: EASE_OUT_EXPO }}
        >
          {t("home.hero.subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7, ease: EASE_OUT_EXPO }}
        >
          <Magnetic as="div" strength={14} radius={140}>
            <Button asChild variant="hero" size="lg">
              <Link to="/am-nhac">{t("home.hero.ctaPrimary")}</Link>
            </Button>
          </Magnetic>
          <Magnetic as="div" strength={10} radius={120}>
            <Button asChild variant="ghost-link" size="lg">
              <Link to="/du-an">{t("home.hero.ctaSecondary")}</Link>
            </Button>
          </Magnetic>
        </motion.div>

        {/* Identity strip */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0, ease: EASE_OUT_EXPO }}
        >
          {[
            { label: "Âm nhạc", value: "Vinahouse · DJ" },
            { label: "Công cụ", value: "5 dự án MH" },
            { label: "Địa điểm", value: "Sài Gòn, VN" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-[11px] font-mono uppercase tracking-[0.12em] text-lavender-pulse/50">
                {item.label}
              </div>
              <div className="mt-1 text-[13px] text-ash-gray">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* ECOSYSTEM                                                           */
/* ------------------------------------------------------------------ */

const EcosystemSection = memo(function EcosystemSection() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-28 border-t border-white/8">
      <div className="mx-auto max-w-[900px]">

        <Reveal className="mb-6">
          <h2 className="font-display text-[52px] md:text-[72px] leading-none tracking-[-0.025em] text-ghost-white">
            {t("home.projects.title")}
          </h2>
        </Reveal>

        <Reveal className="mb-16">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] mb-4">
            {["Quan sát", "Thu thập", "Tổ chức", "Sử dụng", "Chia sẻ"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-3">
                <span className="text-ghost-white/50">{step}</span>
                {i < arr.length - 1 && (
                  <span className="text-lavender-pulse/30">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="max-w-[540px] text-[15px] leading-relaxed text-ash-gray/70">
            {t("home.projects.subtitle")}
          </p>
        </Reveal>

        <StaggerGroup as="div" stagger={0.07} delayChildren={0.1}>
          {ECOSYSTEM.map((item) => (
            <motion.div key={item.step} variants={staggerItem}>
              <Link to="/du-an/$slug" params={{ slug: item.slug }}>
                <motion.div
                  className="group grid grid-cols-[36px_1fr_auto] md:grid-cols-[36px_1fr_140px_32px] items-center gap-x-6 py-7 border-b border-white/8"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  <span className="font-mono text-[11px] text-lavender-pulse/40 self-start pt-[3px]">
                    {item.step}
                  </span>
                  <span className="text-[22px] md:text-[28px] font-medium leading-tight text-ghost-white group-hover:text-lavender-pulse transition-colors duration-200">
                    {item.name}
                  </span>
                  <span className="hidden md:block text-[13px] text-ash-gray/40 tracking-wide">
                    {item.role}
                  </span>
                  <span className="text-[16px] text-lavender-pulse/30 group-hover:text-lavender-pulse group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12">
          <Link
            to="/du-an"
            className="inline-flex items-center gap-2 text-[14px] text-ash-gray/50 hover:text-ghost-white transition-colors duration-200"
          >
            <span>Xem toàn bộ hệ sinh thái MH</span>
            <span className="text-lavender-pulse/50">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* PRINCIPLES                                                          */
/* ------------------------------------------------------------------ */

const PrinciplesSection = memo(function PrinciplesSection() {
  const { t } = useTranslation();
  const principles = t("principles", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    body: string;
  }>;

  return (
    <section className="px-6 py-28 border-t border-white/8">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-16">
          <h2 className="font-display text-[52px] md:text-[72px] leading-none tracking-[-0.025em] text-ghost-white">
            {t("home.principles.title")}
          </h2>
        </Reveal>

        <div className="border-t border-white/8">
          {principles.map((p) => (
            <Reveal key={p.n}>
              <motion.div
                className="grid grid-cols-[36px_1fr] md:grid-cols-[36px_1fr_300px] gap-x-8 gap-y-2 py-8 border-b border-white/8"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <span className="font-mono text-[11px] text-lavender-pulse/40 pt-1">{p.n}</span>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ghost-white">
                  {p.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-[13px] leading-relaxed text-ash-gray/70 md:row-start-1">
                  {p.body}
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
/* CLOSING CTA                                                         */
/* ------------------------------------------------------------------ */

const ClosingCta = memo(function ClosingCta() {
  return (
    <section className="px-6 py-32 border-t border-white/8">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-lavender-pulse/50 mb-8">
            Minh Hieu Studio · 2026
          </p>
          <h2 className="font-display text-[60px] md:text-[92px] leading-none tracking-[-0.025em] text-ghost-white">
            Bằng chứng<br />
            <span className="text-lavender-pulse italic">trước tuyên bố.</span>
          </h2>
          <div className="mt-12 flex gap-5 flex-wrap">
            <Magnetic as="div" strength={12} radius={130}>
              <Button asChild variant="hero" size="lg">
                <Link to="/am-nhac">Nghe nhạc →</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="ghost-link" size="lg">
              <Link to="/lien-he">Liên hệ</Link>
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

function Home() {
  return (
    <>
      <Hero />
      <EcosystemSection />
      <PrinciplesSection />
      <ClosingCta />
    </>
  );
}
