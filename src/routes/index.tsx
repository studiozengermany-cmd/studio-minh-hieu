import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { memo, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/pill-badge";
import { MetricCard } from "@/components/metric-card";
import { StatusBadge } from "@/components/status-badge";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { SplitText } from "@/components/split-text";
import { SampleGuardCard } from "@/components/sampleguard-card";
import { StudioMinhHieuCard } from "@/components/studio-minh-hieu-card";
import { projects } from "@/content/projects";
import { tools } from "@/content/principles";
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
        reduce
          ? { duration: 0.8 }
          : { duration: 9, repeat: Infinity, ease: "easeInOut" }
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
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0.2]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28"
    >
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

/* --------------------------- MINHLYTEAM (KHÔNG ĐỔI NỘI DUNG) --------------------------- */

const MinhLyTeamBlock = memo(function MinhLyTeamBlock() {
  return (
    <section className="px-6 pt-24">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <div className="surface-card p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <PillBadge tone="lavender">MinhLyTeam</PillBadge>
              <PillBadge>Windows / FL Studio</PillBadge>
              <PillBadge>Prototype</PillBadge>
              <PillBadge tone="mint">Chưa phát hành công khai</PillBadge>
            </div>
            <h2 className="font-display mt-6 text-[40px] leading-none text-ghost-white md:text-[48px]">
              Studio Minh Hieu
            </h2>
            <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-ash-gray">
              Bản prototype nội bộ chạy trên Windows với FL Studio. Chưa phát hành công khai —
              được ghi lại ở đây như một bằng chứng về trạng thái đang phát triển của dự án.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
});

interface ProjectItem {
  slug: string;
  status: string;
}

const ProjectCard = memo(function ProjectCard({ p }: { p: ProjectItem }) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.6 }}
      className="group will-change-transform"
    >
      <MetricCard className="flex h-full flex-col justify-between gap-6 transition-colors duration-300 group-hover:border-lavender-pulse/40">
        <div>
          <div className="flex items-start justify-between gap-3">
            <span className="text-eyebrow">{t(`projectsData.${p.slug}.role`)}</span>
            <StatusBadge status={p.status as never} />
          </div>
          <h3 className="mt-5 text-[20px] font-medium leading-tight text-ghost-white">
            {t(`projectsData.${p.slug}.title`)}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-ash-gray">
            {t(`projectsData.${p.slug}.oneLine`)}
          </p>
        </div>
        <Link
          to="/du-an/$slug"
          params={{ slug: p.slug }}
          data-cursor="hover"
          data-cursor-label={t("home.projects.hoverLabel")}
          className="inline-flex items-center gap-1 text-[14px] font-medium text-ghost-white transition-all group-hover:gap-2 group-hover:text-lavender-pulse"
        >
          {t("home.projects.detail")}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </MetricCard>
    </motion.div>
  );
});

const ProjectsGrid = memo(function ProjectsGrid() {
  const { t } = useTranslation();
  const items = useMemo(
    () => projects.map((p) => ({ slug: p.slug, status: p.status })),
    [],
  );
  return (
    <section className="px-6 pt-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-eyebrow">{t("home.projects.eyebrow")}</span>
          <h2 className="font-display mt-6 text-[40px] leading-none text-ghost-white md:text-[48px]">
            {t("home.projects.title")}
          </h2>
          <p className="mt-5 max-w-[600px] text-[16px] text-ash-gray">
            {t("home.projects.subtitle")}
          </p>
        </Reveal>

        <div className="flex flex-col gap-6">
          <SampleGuardCard />
          <StudioMinhHieuCard />
        </div>

        <StaggerGroup
          className="mt-24 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.09}
        >
          {items.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
});

const PrinciplesSection = memo(function PrinciplesSection() {
  const { t } = useTranslation();
  const principles = t("principles", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    body: string;
  }>;
  return (
    <section className="px-6 pt-32">
      <div className="mx-auto max-w-[1000px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="text-eyebrow">{t("home.principles.eyebrow")}</span>
          <h2 className="font-display mt-6 text-[40px] leading-none text-ghost-white md:text-[48px]">
            {t("home.principles.title")}
          </h2>
        </Reveal>

        <StaggerGroup
          className="grid gap-x-16 gap-y-10 md:grid-cols-2"
          stagger={0.05}
        >
          {principles.map((p) => (
            <motion.div key={p.n} variants={staggerItem} className="flex gap-5">
              <span className="text-[12px] font-mono text-steel-gray pt-1">{p.n}</span>
              <div>
                <h3 className="text-[16px] font-semibold text-ghost-white">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ash-gray">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
});

const ToolsSection = memo(function ToolsSection() {
  const { t } = useTranslation();
  return (
    <section className="px-6 pt-32">
      <div className="mx-auto max-w-[1000px] text-center">
        <Reveal>
          <span className="text-eyebrow">{t("home.tools.eyebrow")}</span>
        </Reveal>
        <StaggerGroup
          className="mt-10 flex flex-wrap justify-center gap-3"
          stagger={0.035}
        >
          {tools.map((tool) => (
            <motion.span
              key={tool}
              variants={staggerItem}
              whileHover={{ y: -3, borderColor: "rgba(153,132,216,0.5)" }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="rounded-md border border-graphite bg-carbon-card px-4 py-2.5 text-[13px] text-ash-gray will-change-transform"
            >
              {tool}
            </motion.span>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
});

function Home() {
  return (
    <>
      <Hero />
      <MinhLyTeamBlock />
      <ProjectsGrid />
      
      <ToolsSection />
    </>
  );
}
