import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section-header";
import { MetricCard } from "@/components/metric-card";
import { PillBadge } from "@/components/pill-badge";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.about.title") },
      { name: "description", content: i18n.t("meta.about.description") },
      { property: "og:title", content: i18n.t("meta.about.ogTitle") },
      { property: "og:description", content: i18n.t("meta.about.ogDescription") },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();
  const facts = t("about.facts", { returnObjects: true }) as Array<{
    label: string;
    value: string;
  }>;
  const manifesto = t("about.manifesto", { returnObjects: true }) as Array<{
    n: string;
    t: string;
    d: string;
  }>;
  const timeline = t("about.timeline", { returnObjects: true }) as Array<{
    year: string;
    title: string;
    desc: string;
  }>;

  return (
    <div className="px-6 pt-24 pb-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="anim-in flex flex-col items-center text-center" style={{ animationDelay: "40ms" }}>
          <PillBadge>{t("about.heroPill")}</PillBadge>
          <h1 className="font-display mt-8 text-[clamp(48px,7.5vw,88px)] leading-[0.98] tracking-[-0.02em] text-ghost-white">
            {t("about.heroTitleA")} <span className="text-lavender-pulse">{t("about.heroTitleB")}</span>
          </h1>
          <p className="mt-8 max-w-[620px] text-[17px] leading-[1.65] text-ash-gray">
            {t("about.heroBody")}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/am-nhac">{t("about.ctaListen")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/du-an">{t("about.ctaProjects")}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-graphite bg-graphite md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-carbon-card p-6 text-center">
              <p className="font-display text-[36px] leading-none text-ghost-white">{f.value}</p>
              <p className="text-eyebrow mt-3">{f.label}</p>
            </div>
          ))}
        </div>

        <section className="mt-28">
          <SectionHeader
            eyebrow={t("about.manifestoEyebrow")}
            title={t("about.manifestoTitle")}
            subtitle={t("about.manifestoSubtitle")}
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {manifesto.map((p) => (
              <MetricCard key={p.n} className="p-8">
                <span className="text-[12px] text-steel-gray">{p.n}</span>
                <h3 className="mt-4 text-[20px] font-medium text-ghost-white">{p.t}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ash-gray">{p.d}</p>
              </MetricCard>
            ))}
          </div>
        </section>

        <section className="mt-28">
          <SectionHeader eyebrow={t("about.timelineEyebrow")} title={t("about.timelineTitle")} />

          <ol className="relative mx-auto mt-14 max-w-[720px] border-l border-graphite pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-lavender-pulse shadow-[0_0_10px_rgba(153,132,216,0.7)]" />
                </span>
                <p className="text-eyebrow">{item.year}</p>
                <h3 className="font-display mt-2 text-[26px] leading-none text-ghost-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ash-gray">{item.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-28">
          <div className="surface-card mx-auto flex max-w-[820px] flex-col items-center gap-6 p-10 text-center md:p-14">
            <p className="font-quote max-w-[560px] text-[24px] leading-[1.3] text-ghost-white">
              &ldquo;{t("about.ctaQuote")}&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/lien-he">{t("about.ctaEmail")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/dang-nhap">{t("about.ctaSignIn")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
