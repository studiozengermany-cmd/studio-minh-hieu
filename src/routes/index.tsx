import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/pill-badge";
import { EASE_OUT_EXPO } from "@/components/reveal";
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

const Hero = memo(function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -72]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.15]);
  const identity = t("home.identity", { returnObjects: true }) as Array<{
    label: string;
    value: string;
  }>;

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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
        >
          <PillBadge>{t("home.hero.pill")}</PillBadge>
        </motion.div>

        <h1
          className="font-display mt-8 text-[68px] leading-[0.95] tracking-[-0.025em] text-ghost-white md:text-[104px]"
          data-cursor="text"
        >
          <SplitText text={t("home.hero.titleA")} as="span" stagger={0.08} />{" "}
          <SplitText
            text={t("home.hero.titleB")}
            as="span"
            wordClassName="text-lavender-pulse italic"
            delay={0.32}
            stagger={0.08}
          />
        </h1>

        <motion.p
          className="mt-8 max-w-[650px] text-[17px] leading-[1.65] text-ash-gray md:text-[18px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: EASE_OUT_EXPO }}
        >
          {t("home.hero.subtitle")}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7, ease: EASE_OUT_EXPO }}
        >
          <Magnetic as="div" strength={14} radius={140}>
            <Button asChild variant="hero" size="lg">
              <Link to="/he-sinh-thai">{t("home.hero.ctaPrimary")}</Link>
            </Button>
          </Magnetic>
          <Magnetic as="div" strength={10} radius={120}>
            <Button asChild variant="ghost-link" size="lg">
              <Link to="/lien-he">{t("home.hero.ctaSecondary")}</Link>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-10 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0, ease: EASE_OUT_EXPO }}
        >
          {identity.map((item) => (
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

function Home() {
  return <Hero />;
}
