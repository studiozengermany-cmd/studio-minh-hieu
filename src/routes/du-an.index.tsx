import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section-header";
import { MetricCard } from "@/components/metric-card";
import { StatusBadge } from "@/components/status-badge";
import { Reveal, StaggerGroup, staggerItem } from "@/components/reveal";
import { projects, type ProjectStatus } from "@/content/projects";
import i18n from "@/i18n";

export const Route = createFileRoute("/du-an/")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.projects.title") },
      { name: "description", content: i18n.t("meta.projects.description") },
      { property: "og:title", content: i18n.t("meta.projects.ogTitle") },
      { property: "og:description", content: i18n.t("meta.projects.ogDescription") },
    ],
  }),
  component: ProjectsPage,
});

const CHAIN_NODES = ["Quantum", "Dowsample", "FileOS", "Sample FL", "Studio"] as const;

const Chain = memo(function Chain() {
  const { t } = useTranslation();
  return (
    <Reveal className="mt-16">
      <div className="surface-card overflow-x-auto p-8">
        <StaggerGroup
          className="flex min-w-[720px] items-center justify-between gap-4"
          stagger={0.08}
        >
          {CHAIN_NODES.map((n, i) => (
            <motion.div
              key={n}
              variants={staggerItem}
              className="flex flex-1 items-center gap-4"
            >
              <div className="flex flex-1 flex-col items-center gap-2">
                <span className="rounded-full border border-lavender-pulse/40 px-4 py-2 text-[13px] font-medium text-ghost-white">
                  {n}
                </span>
                <span className="text-[11px] text-steel-gray">
                  {t("projectsPage.step", { n: i + 1 })}
                </span>
              </div>
              {i < CHAIN_NODES.length - 1 && (
                <div className="h-px w-full min-w-8 flex-shrink bg-graphite" />
              )}
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </Reveal>
  );
});

interface ProjectRowItem {
  slug: string;
  status: ProjectStatus;
  cover?: string;
  logo?: string;
}

const ProjectRow = memo(function ProjectRow({ p }: { p: ProjectRowItem }) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24, mass: 0.6 }}
      className="will-change-transform"
    >
      <Link to="/du-an/$slug" params={{ slug: p.slug }} className="block">
        <MetricCard className="overflow-hidden p-0 transition-colors duration-300 hover:border-lavender-pulse/40">
          {p.cover && (
            <div className="aspect-[16/9] overflow-hidden border-b border-graphite/70 bg-void-black">
              <img
                src={p.cover}
                alt=""
                width={1600}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          )}
          {!p.cover && p.logo && (
            <div className="flex items-center gap-3 border-b border-graphite/70 bg-void-black px-6 py-4">
              <img
                src={p.logo}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 object-contain"
              />
              <span className="text-eyebrow text-ash-gray">Logo · GitHub</span>
            </div>
          )}
          <div className="p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="text-eyebrow">{t(`projectsData.${p.slug}.role`)}</span>
              <StatusBadge status={p.status} />
            </div>
            <h2 className="font-display mt-5 text-[28px] leading-tight text-ghost-white">
              {t(`projectsData.${p.slug}.title`)}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ash-gray">
              {t(`projectsData.${p.slug}.oneLine`)}
            </p>
            <div className="mt-6 flex items-center gap-5 text-[13px]">
              <span className="font-medium text-ghost-white hover:underline underline-offset-4">
                {t("projectsPage.detail")} →
              </span>
            </div>
          </div>
        </MetricCard>
      </Link>
    </motion.div>
  );
});


function ProjectsPage() {
  const { t } = useTranslation();
  return (
    <div className="px-6 pt-24 pb-16">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionHeader
            as="h1"
            eyebrow={t("projectsPage.eyebrow")}
            title={t("projectsPage.title")}
            subtitle={t("projectsPage.subtitle")}
          />
        </Reveal>

        <Chain />

        <StaggerGroup
          className="mt-16 grid gap-4 md:grid-cols-2"
          stagger={0.08}
        >
          {projects.map((p) => (
            <ProjectRow key={p.slug} p={{ slug: p.slug, status: p.status, cover: p.cover, logo: p.logo }} />
          ))}

        </StaggerGroup>
      </div>
    </div>
  );
}
