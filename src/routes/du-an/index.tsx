import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { projects, statusColor, type Project } from "@/content/projects";
import { Reveal, EASE_OUT_EXPO } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";

interface Feature {
  name: string;
  desc: string;
}

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

function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <div className="relative px-6 pb-24 pt-28">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_15%_10%,rgba(153,132,216,0.07)_0%,transparent_70%)]"
      />

      <main className="mx-auto max-w-[1080px]">
        <PageHeader />

        <Reveal className="mt-14">
          <Link
            to="/he-sinh-thai"
            className="group block rounded-2xl border border-lavender-pulse/20 bg-lavender-pulse/[0.035] p-6 transition-colors hover:bg-lavender-pulse/[0.07] md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-[180px_1fr_auto] md:items-start">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-lavender-pulse/65">
                {t("projectsPage.frameworkLabel")}
              </span>
              <div>
                <h2 className="font-display text-[30px] leading-none text-ghost-white md:text-[38px]">
                  {t("projectsPage.frameworkTitle")}
                </h2>
                <p className="mt-4 max-w-[650px] text-[14px] leading-[1.7] text-ash-gray">
                  {t("projectsPage.frameworkBody")}
                </p>
                <span className="mt-5 inline-block text-[13px] font-medium text-lavender-pulse">
                  {t("projectsPage.frameworkCta")}
                </span>
              </div>
              <span className="text-[20px] text-lavender-pulse/40 transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-20 border-t border-white/10">
          {projects.map((project, index) => (
            <ProjectProfile key={project.slug} project={project} index={index} />
          ))}
        </div>

        <ClosingSection />
      </main>
    </div>
  );
}

function PageHeader() {
  const { t } = useTranslation();

  return (
    <header className="max-w-[820px]">
      <motion.span
        className="block font-mono text-[11px] uppercase tracking-[0.22em] text-lavender-pulse/55"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      >
        {t("projectsPage.eyebrow")}
      </motion.span>

      <motion.h1
        className="font-display mt-7 text-[clamp(52px,8vw,96px)] leading-[0.94] tracking-[-0.035em] text-ghost-white"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: EASE_OUT_EXPO }}
      >
        {t("projectsPage.title")}
      </motion.h1>

      <motion.p
        className="mt-8 max-w-[720px] text-[16px] leading-[1.75] text-ash-gray md:text-[17px]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24, ease: EASE_OUT_EXPO }}
      >
        {t("projectsPage.subtitle")}
      </motion.p>
    </header>
  );
}

function ProjectProfile({ project, index }: { project: Project; index: number }) {
  const { t } = useTranslation();
  const slug = project.slug;
  const title = t(`projectsData.${slug}.title`);
  const role = t(`projectsData.${slug}.role`);
  const oneLine = t(`projectsData.${slug}.oneLine`);
  const description = t(`projectsData.${slug}.description`, { returnObjects: true }) as string[];
  const features = t(`projectsData.${slug}.features`, { returnObjects: true }) as Feature[];
  const evidence = t(`projectsData.${slug}.evidence`, { returnObjects: true }) as string[];
  const notReady = t(`projectsData.${slug}.notReady`, { returnObjects: true }) as string[];
  const status = t(`common.status.${project.status}`);
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal>
      <article className="grid gap-8 border-b border-white/10 py-16 lg:grid-cols-[110px_1fr] lg:gap-12 lg:py-20">
        <div>
          <span className="font-display text-[52px] leading-none text-white/10 md:text-[68px]">
            {number}
          </span>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash-gray/55">
              {role}
            </span>
            <span className="text-white/15">/</span>
            <span className={`font-mono text-[11px] uppercase tracking-[0.12em] ${statusColor[project.status]}`}>
              {status}
            </span>
          </div>

          <h2 className="font-display mt-5 text-[40px] leading-[0.98] tracking-[-0.025em] text-ghost-white md:text-[54px]">
            {title}
          </h2>

          <p className="mt-6 max-w-[780px] text-[17px] leading-[1.7] text-ash-gray">
            {oneLine}
          </p>

          <div className="mt-8 grid gap-6 border-y border-white/8 py-7 md:grid-cols-[1fr_240px]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-lavender-pulse/55">
                {t("projectsPage.problemLabel")}
              </span>
              <p className="mt-3 max-w-[680px] text-[14px] leading-[1.75] text-ash-gray/90">
                {description[0]}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-5 gap-y-4 text-[12px] md:grid-cols-1">
              <Meta label={t("projectsPage.detailPage.metaLanguage")} value={project.language} />
              <Meta label={t("projectsPage.detailPage.metaPlatform")} value={project.platform ?? "—"} />
              <Meta label={t("projectsPage.detailPage.metaVersion")} value={project.version ?? "—"} />
            </dl>
          </div>

          <div className="mt-9">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-lavender-pulse/55">
              {t("projectsPage.capabilitiesLabel")}
            </span>
            <div className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
              {features.slice(0, 6).map((feature) => (
                <div key={feature.name} className="border-l border-white/10 pl-4">
                  <h3 className="text-[14px] font-medium text-ghost-white">{feature.name}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-ash-gray/75">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            <InfoList
              label={t("projectsPage.evidenceLabel")}
              items={evidence.slice(0, 3)}
              marker="●"
              markerClass="text-mint-signal"
            />
            <InfoList
              label={t("projectsPage.limitsLabel")}
              items={notReady.slice(0, 3)}
              marker="○"
              markerClass="text-amber-300"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/du-an/$slug" params={{ slug: project.slug }}>
                {t("projectsPage.detail")} →
              </Link>
            </Button>
            {project.githubUrl && (
              <Button asChild variant="ghost-link">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  {t("projectsPage.github")} ↗
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[9px] uppercase tracking-[0.14em] text-steel-gray">{label}</dt>
      <dd className="mt-1.5 text-[12px] leading-relaxed text-ghost-white/80">{value}</dd>
    </div>
  );
}

function InfoList({
  label,
  items,
  marker,
  markerClass,
}: {
  label: string;
  items: string[];
  marker: string;
  markerClass: string;
}) {
  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-lavender-pulse/55">
        {label}
      </span>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[13px] leading-[1.65] text-ash-gray/80">
            <span className={`${markerClass} mt-[1px] flex-shrink-0`}>{marker}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClosingSection() {
  const { t } = useTranslation();

  return (
    <Reveal className="mt-24">
      <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 md:p-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-lavender-pulse/55">
          {t("projectsPage.closingEyebrow")}
        </span>
        <h2 className="font-display mt-5 max-w-[700px] text-[40px] leading-[1.02] text-ghost-white md:text-[56px]">
          {t("projectsPage.closingTitle")}
        </h2>
        <p className="mt-6 max-w-[670px] text-[15px] leading-[1.75] text-ash-gray">
          {t("projectsPage.closingBody")}
        </p>
        <div className="mt-8">
          <Button asChild variant="hero" size="lg">
            <Link to="/lien-he">{t("projectsPage.closingCta")} →</Link>
          </Button>
        </div>
      </section>
    </Reveal>
  );
}
