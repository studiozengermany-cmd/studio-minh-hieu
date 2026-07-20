import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section-header";
import { MetricCard } from "@/components/metric-card";
import { PillBadge } from "@/components/pill-badge";
import { releases } from "@/content/releases";
import i18n from "@/i18n";

export const Route = createFileRoute("/am-nhac")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.music.title") },
      { name: "description", content: i18n.t("meta.music.description") },
      { property: "og:title", content: i18n.t("meta.music.ogTitle") },
      { property: "og:description", content: i18n.t("meta.music.ogDescription") },
    ],
  }),
  component: Music,
});

function Music() {
  const { t } = useTranslation();
  return (
    <div className="px-6 pt-24 pb-16">
      <div className="mx-auto max-w-[1000px]">
        <div className="anim-in" style={{ animationDelay: "40ms" }}>
          <SectionHeader
            as="h1"
            eyebrow={t("music.eyebrow")}
            title={t("music.title")}
            subtitle={t("music.subtitle")}
          />
        </div>

        <div className="mt-20 flex flex-col gap-6">
          {releases.map((r) => (
            <MetricCard key={r.slug} className="flex flex-col gap-6 p-6 md:flex-row md:p-8">
              <div className="flex h-28 w-28 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-graphite">
                {r.cover ? (
                  <img
                    src={r.cover}
                    alt={t("music.coverAlt", { title: r.title })}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-display text-[40px] text-ash-gray">MH</span>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {r.tags.map((tag) => (
                    <PillBadge key={tag}>{tag}</PillBadge>
                  ))}
                </div>
                <h2 className="font-display mt-4 text-[30px] leading-tight text-ghost-white">
                  {r.title}
                </h2>
                <p className="mt-1 text-[14px] text-ash-gray">
                  {r.artist} · {r.year} · BPM {r.bpm} · {r.keyLabel}
                </p>
                <p className="mt-4 max-w-[560px] text-[14px] leading-relaxed text-ash-gray">
                  {r.note}
                </p>

                {r.audio ? (
                  <audio controls preload="none" className="mt-5 w-full max-w-[480px]">
                    <source src={r.audio} />
                    {t("music.audioFallback")}
                  </audio>
                ) : (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-graphite px-3 py-2 text-[13px] text-ash-gray">
                    <span className="h-2 w-2 rounded-full bg-lavender-pulse" />
                    {t("music.previewPreparing")}
                  </div>
                )}
              </div>
            </MetricCard>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <MetricCard className="p-8">
            <span className="text-eyebrow">{t("music.panels.directionEyebrow")}</span>
            <h3 className="font-display mt-4 text-[24px] text-ghost-white">
              {t("music.panels.directionTitle")}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-ash-gray">
              {t("music.panels.directionBody")}
            </p>
          </MetricCard>

          <MetricCard className="p-8">
            <span className="text-eyebrow">{t("music.panels.workflowEyebrow")}</span>
            <h3 className="font-display mt-4 text-[24px] text-ghost-white">
              {t("music.panels.workflowTitle")}
            </h3>
            <p className="mt-4 text-[14px] leading-relaxed text-ash-gray">
              {t("music.panels.workflowBody")}
            </p>
          </MetricCard>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/du-an/$slug"
            params={{ slug: "sample-fl" }}
            className="text-[14px] font-medium text-ghost-white hover:underline underline-offset-4"
          >
            {t("music.seeSampleFl")}
          </Link>
        </div>
      </div>
    </div>
  );
}
