import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section-header";
import i18n from "@/i18n";

export const Route = createFileRoute("/ghi-chu")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.notes.title") },
      { name: "description", content: i18n.t("meta.notes.description") },
      { property: "og:title", content: i18n.t("meta.notes.ogTitle") },
      { property: "og:description", content: i18n.t("meta.notes.ogDescription") },
    ],
  }),
  component: Notes,
});

function Notes() {
  const { t } = useTranslation();
  const principles = t("principles", { returnObjects: true }) as Array<{
    n: string;
    title: string;
    body: string;
  }>;

  return (
    <div className="px-6 pt-24 pb-24">
      <div className="mx-auto max-w-[1080px]">
        <div className="anim-in" style={{ animationDelay: "40ms" }}>
          <SectionHeader
            as="h1"
            eyebrow={t("notes.eyebrow")}
            title={t("notes.title")}
            subtitle={t("notes.subtitle")}
          />
        </div>

        <section className="mt-24">
          <div className="mb-8 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-lavender-pulse shadow-[0_0_6px_rgba(153,132,216,0.9)]" />
            <h2 className="text-eyebrow">{t("notes.principlesHeading")}</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-graphite bg-graphite md:grid-cols-2">
            {principles.map((p) => (
              <article
                key={p.n}
                className="group relative bg-carbon-card p-6 transition-colors hover:bg-[#0a0b0d] md:p-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[15px] font-semibold tracking-tight text-ghost-white">
                    {p.title}
                  </h3>
                  <span className="text-[11px] font-mono text-steel-gray">{p.n}</span>
                </div>
                <p className="mt-3 text-[13.5px] leading-[1.65] text-ash-gray">{p.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
