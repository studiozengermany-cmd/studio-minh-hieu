import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/metric-card";
import { StatusBadge } from "@/components/status-badge";
import { projects, type Project } from "@/content/projects";
import i18n from "@/i18n";

export const Route = createFileRoute("/du-an/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: i18n.t("projectsPage.detailPage.notFoundTitle") },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const slug = loaderData.project.slug;
    const title = i18n.t(`projectsData.${slug}.title`);
    const oneLine = i18n.t(`projectsData.${slug}.oneLine`);
    return {
      meta: [
        { title: `${title} — ${i18n.t("meta.projects.ogTitle")}` },
        { name: "description", content: oneLine },
        { property: "og:title", content: title },
        { property: "og:description", content: oneLine },
      ],
    };
  },
  notFoundComponent: SlugNotFound,
  errorComponent: SlugError,
  component: ProjectDetail,
});

function SlugNotFound() {
  const { t } = useTranslation();
  return (
    <div className="px-6 py-32 text-center">
      <p className="text-eyebrow mb-6">{t("projectsPage.detailPage.notFoundEyebrow")}</p>
      <h1 className="font-display text-[40px] leading-none text-ghost-white">
        {t("projectsPage.detailPage.notFoundTitle")}
      </h1>
      <Link
        to="/du-an"
        className="mt-8 inline-block text-[14px] font-medium text-ghost-white hover:underline underline-offset-4"
      >
        {t("projectsPage.detailPage.backList")}
      </Link>
    </div>
  );
}

function SlugError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const { t } = useTranslation();
  console.error(error);
  return (
    <div className="px-6 py-32 text-center">
      <p className="text-eyebrow mb-6">{t("projectsPage.detailPage.errorEyebrow")}</p>
      <h1 className="font-display text-[40px] leading-none text-ghost-white">
        {t("projectsPage.detailPage.errorTitle")}
      </h1>
      <p className="mt-4 text-[15px] text-ash-gray">
        {t("projectsPage.detailPage.errorBody")}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button variant="hero" onClick={() => { router.invalidate(); reset(); }}>
          {t("projectsPage.detailPage.retry")}
        </Button>
        <Button asChild variant="outline">
          <Link to="/du-an">{t("projectsPage.detailPage.backToList")}</Link>
        </Button>
      </div>
    </div>
  );
}

interface Feature { name: string; desc: string }

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const { t } = useTranslation();
  const slug = project.slug;
  const title = t(`projectsData.${slug}.title`);
  const role = t(`projectsData.${slug}.role`);
  const oneLine = t(`projectsData.${slug}.oneLine`);
  const description = t(`projectsData.${slug}.description`, { returnObjects: true }) as string[];
  const features = (t(`projectsData.${slug}.features`, { returnObjects: true }) as Feature[]) || [];
  const pipeline = (t(`projectsData.${slug}.pipeline`, { returnObjects: true }) as string[]) || [];
  const evidence = (t(`projectsData.${slug}.evidence`, { returnObjects: true }) as string[]) || [];
  const notReady = (t(`projectsData.${slug}.notReady`, { returnObjects: true }) as string[]) || [];
  const dos = t(`projectsData.${slug}.dos`, { returnObjects: true }) as string[];
  const donts = t(`projectsData.${slug}.donts`, { returnObjects: true }) as string[];

  return (
    <div className="px-6 pt-24 pb-16">
      <div className="mx-auto max-w-[1120px]">
        <div className="anim-in flex items-center gap-2 text-[13px] text-steel-gray" style={{ animationDelay: "20ms" }}>
          <Link to="/du-an" className="hover:text-ghost-white">
            {t("projectsPage.detailPage.breadcrumb")}
          </Link>
          <span>/</span>
          <span className="text-ash-gray">{title}</span>
        </div>

        <div className="anim-in mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "80ms" }}>
          <span className="text-eyebrow">{role}</span>
          <StatusBadge status={project.status} />
        </div>

        <h1 className="font-display anim-in mt-6 text-[48px] leading-none text-ghost-white md:text-[64px]" style={{ animationDelay: "140ms" }}>
          {title}
        </h1>
        <p className="anim-in mt-6 max-w-[720px] text-[18px] leading-[1.55] text-ash-gray" style={{ animationDelay: "220ms" }}>
          {oneLine}
        </p>

        {project.badges && project.badges.length > 0 && (
          <div className="anim-in mt-6 flex flex-wrap gap-2" style={{ animationDelay: "260ms" }}>
            {project.badges.map((b) => (
              <span
                key={b.label}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide uppercase ${
                  b.tone === "lavender"
                    ? "border-lavender-pulse/40 bg-lavender-pulse/10 text-lavender-pulse"
                    : b.tone === "amber"
                    ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                    : b.tone === "mint"
                    ? "border-mint-signal/30 bg-mint-signal/10 text-mint-signal"
                    : b.tone === "blue"
                    ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
                    : "border-graphite bg-carbon-card/40 text-ash-gray"
                }`}
              >
                {b.label}
              </span>
            ))}
          </div>
        )}

        {project.cover && (
          <figure
            className="anim-in mt-10 overflow-hidden rounded-2xl border border-graphite/70 bg-carbon-card/40"
            style={{ animationDelay: "320ms" }}
          >
            <img
              src={project.cover}
              alt={`${title} — cover`}
              width={1600}
              height={900}
              loading="lazy"
              className="block h-auto w-full"
            />
          </figure>
        )}
        {!project.cover && project.logo && (
          <figure
            className="anim-in mt-10 flex items-center gap-4 rounded-2xl border border-graphite/70 bg-carbon-card/40 px-6 py-5"
            style={{ animationDelay: "320ms" }}
          >
            <img
              src={project.logo}
              alt={`${title} — logo`}
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 object-contain"
            />
            <figcaption className="text-[13px] text-ash-gray">
              Logo dự án lấy từ repository GitHub.
            </figcaption>
          </figure>
        )}


        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            <div className="flex flex-col gap-5">
              {description.map((para, i) => (
                <p key={i} className="text-[15px] leading-[1.7] text-ash-gray">
                  {para}
                </p>
              ))}
            </div>

            {features.length > 0 && (
              <section className="mt-14">
                <span className="text-eyebrow">{t("projectsPage.detailPage.featuresLabel")}</span>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {features.map((f) => (
                    <div key={f.name} className="rounded-xl border border-graphite/70 bg-carbon-card/40 p-5">
                      <h3 className="text-[14px] font-medium text-ghost-white">{f.name}</h3>
                      <p className="mt-2 text-[13px] leading-[1.6] text-ash-gray">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {pipeline.length > 0 && (
              <section className="mt-14">
                <span className="text-eyebrow">{t("projectsPage.detailPage.pipelineLabel")}</span>
                <ol className="mt-5 flex flex-col gap-3">
                  {pipeline.map((step, i) => (
                    <li key={i} className="flex gap-4 rounded-lg border border-graphite/60 bg-carbon-card/30 px-4 py-3">
                      <span className="font-display text-[15px] tabular-nums text-lavender-pulse">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14px] leading-[1.55] text-ghost-white">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {evidence.length > 0 && (
              <section className="mt-14">
                <span className="text-eyebrow">{t("projectsPage.detailPage.evidenceLabel")}</span>
                <ul className="mt-5 space-y-3">
                  {evidence.map((e) => (
                    <li key={e} className="flex gap-3 text-[14px] leading-[1.6] text-ghost-white">
                      <span className="text-mint-signal">◉</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {notReady.length > 0 && (
              <section className="mt-14">
                <span className="text-eyebrow">{t("projectsPage.detailPage.notReadyLabel")}</span>
                <ul className="mt-5 space-y-3">
                  {notReady.map((n) => (
                    <li key={n} className="flex gap-3 text-[14px] leading-[1.6] text-ash-gray">
                      <span className="text-steel-gray">○</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-14 grid gap-4 md:grid-cols-2">
              <div>
                <span className="text-eyebrow">{t("projectsPage.detailPage.dosLabel")}</span>
                <ul className="mt-5 space-y-3">
                  {dos.map((d) => (
                    <li key={d} className="flex gap-3 text-[14px] text-ghost-white">
                      <span className="text-mint-signal">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-eyebrow">{t("projectsPage.detailPage.dontsLabel")}</span>
                <ul className="mt-5 space-y-3">
                  {donts.map((d) => (
                    <li key={d} className="flex gap-3 text-[14px] text-ash-gray">
                      <span className="text-steel-gray">–</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <MetricCard className="p-6">
              <div className="flex flex-col gap-5">
                <MetaRow
                  label={t("projectsPage.detailPage.metaStatus")}
                  value={<StatusBadge status={project.status} />}
                />
                <div className="h-px bg-graphite" />
                <MetaRow label={t("projectsPage.detailPage.metaRole")} value={role} />
                <MetaRow label={t("projectsPage.detailPage.metaLanguage")} value={project.language} />
                {project.platform && (
                  <MetaRow label={t("projectsPage.detailPage.metaPlatform")} value={project.platform} />
                )}
                {project.version && (
                  <MetaRow label={t("projectsPage.detailPage.metaVersion")} value={project.version} />
                )}
                <MetaRow label={t("projectsPage.detailPage.metaUpdated")} value={project.updatedAt} />
                <div className="h-px bg-graphite" />
                <p className="text-[12px] leading-[1.55] text-steel-gray">
                  {t("projectsPage.detailPage.sourceNote")}
                </p>
              </div>
            </MetricCard>
          </aside>
        </div>

        <div className="mt-20">
          <Link
            to="/du-an"
            className="text-[14px] font-medium text-ash-gray hover:text-ghost-white"
          >
            {t("projectsPage.detailPage.backAll")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[13px] text-ash-gray">{label}</span>
      <span className="text-right text-[14px] text-ghost-white">{value}</span>
    </div>
  );
}
