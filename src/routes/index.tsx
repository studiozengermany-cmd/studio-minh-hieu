import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/pill-badge";
import { Reveal, EASE_OUT_EXPO } from "@/components/reveal";
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
      className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[520px] max-w-[900px] blur-3xl"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(153,132,216,0.28) 0%, rgba(153,132,216,0.10) 40%, transparent 70%)",
        willChange: "transform, opacity",
      }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={
        reduce
          ? { opacity: 0.4, scale: 1 }
          : { opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }
      }
      transition={
        reduce ? { duration: 0.8 } : { duration: 9, repeat: Infinity, ease: "easeInOut" }
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
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      <HeroBloom />
      <motion.div
        className="relative mx-auto flex max-w-[880px] flex-col items-center text-center"
        style={{ y, opacity, willChange: "transform, opacity" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <PillBadge live>{t("home.hero.pill")}</PillBadge>
        </motion.div>

        <h1
          className="font-display mt-8 text-[64px] leading-[0.98] tracking-[-0.02em] text-ghost-white md:text-[96px]"
          data-cursor="text"
        >
          <SplitText text={t("home.hero.titleA")} as="span" stagger={0.09} />{" "}
          <SplitText
            text={t("home.hero.titleB")}
            as="span"
            wordClassName="text-lavender-pulse italic"
            delay={0.35}
            stagger={0.09}
          />
        </h1>

        <motion.p
          className="mt-8 max-w-[560px] text-[17px] leading-[1.6] text-ash-gray md:text-[18px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE_OUT_EXPO }}
        >
          {t("home.hero.subtitle")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: EASE_OUT_EXPO }}
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
      </motion.div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* ECOSYSTEM — numbered list, no cards, no eyebrow                    */
/* ------------------------------------------------------------------ */

const EcosystemSection = memo(function EcosystemSection() {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-28 border-t border-white/8">
      <div className="mx-auto max-w-[900px]">
        <Reveal className="mb-16">
          <h2 className="font-display text-[48px] md:text-[64px] leading-none tracking-[-0.03em] text-ghost-white">
            {t("home.projects.title")}
          </h2>
          <p className="mt-5 max-w-[480px] text-[16px] text-ash-gray leading-relaxed">
            {t("home.projects.subtitle")}
          </p>
        </Reveal>

        <div className="border-t border-white/8">
          {ECOSYSTEM.map((item) => (
            <Reveal key={item.step}>
              <Link to="/du-an/$slug" params={{ slug: item.slug }}>
                <motion.div
                  className="group flex items-baseline justify-between gap-8 py-7 border-b border-white/8"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-[12px] text-lavender-pulse/50 flex-shrink-0 w-8">
                      {item.step}
                    </span>
                    <span className="text-[20px] md:text-[24px] font-medium text-ghost-white group-hover:text-lavender-pulse transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-[13px] text-ash-gray/50">{item.role}</span>
                    <span className="text-[14px] text-lavender-pulse/40 group-hover:text-lavender-pulse transition-colors">→</span>
                  </div>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <Button asChild variant="ghost-link">
            <Link to="/du-an">Xem đầy đủ hệ sinh thái MH →</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
});

/* ------------------------------------------------------------------ */
/* PRINCIPLES — no eyebrow, heading leads directly                    */
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
          <h2 className="font-display text-[48px] md:text-[64px] leading-none tracking-[-0.03em] text-ghost-white">
            {t("home.principles.title")}
          </h2>
        </Reveal>

        <div className="border-t border-white/8">
          {principles.map((p) => (
            <Reveal key={p.n}>
              <motion.div
                className="grid grid-cols-[48px_1fr] md:grid-cols-[48px_1fr_320px] gap-x-8 gap-y-2 py-8 border-b border-white/8"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span className="font-mono text-[12px] text-lavender-pulse/50 pt-1">{p.n}</span>
                <h3 className="text-[18px] md:text-[20px] font-medium text-ghost-white">
                  {p.title}
                </h3>
                <p className="col-start-2 md:col-start-3 text-[14px] leading-relaxed text-ash-gray md:row-start-1">
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
/* CLOSING CTA — direct, one action, no brand repetition             */
/* ------------------------------------------------------------------ */

const ClosingCta = memo(function ClosingCta() {
  return (
    <section className="px-6 py-28 border-t border-white/8">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <h2 className="font-display text-[56px] md:text-[88px] leading-none tracking-[-0.03em] text-ghost-white">
            Bằng chứng<br />
            <span className="text-lavender-pulse italic">trước tuyên bố.</span>
          </h2>
          <div className="mt-10 flex gap-5 flex-wrap">
            <Magnetic as="div" strength={12} radius={130}>
              <Button asChild variant="hero">
                <Link to="/am-nhac">Nghe nhạc →</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="ghost-link">
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
