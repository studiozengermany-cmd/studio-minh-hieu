import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/pill-badge";
import { MetricCard } from "@/components/metric-card";
import { toast } from "sonner";
import i18n from "@/i18n";

const EMAIL = "support@studiominhhieu.com";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.contact.title") },
      { name: "description", content: i18n.t("meta.contact.description") },
      { property: "og:title", content: i18n.t("meta.contact.ogTitle") },
      { property: "og:description", content: i18n.t("meta.contact.ogDescription") },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success(t("contact.copySuccess"));
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(t("contact.copyError"));
    }
  };

  return (
    <div className="px-6 pt-24 pb-16">
      <div className="mx-auto max-w-[1000px]">
        <div className="anim-in" style={{ animationDelay: "40ms" }}>
          <SectionHeader
            as="h1"
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            subtitle={t("contact.subtitle")}
          />
        </div>

        <div className="mx-auto mt-16 max-w-[720px]">
          <div className="surface-card p-8 md:p-12">
            <span className="text-eyebrow">{t("contact.officialChannel")}</span>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-6 block w-full text-left font-display text-[28px] leading-tight text-ghost-white transition-colors hover:text-lavender-pulse md:text-[36px]"
              title={t("contact.clickToCopy")}
            >
              {EMAIL}
            </button>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={`mailto:${EMAIL}`}>{t("contact.sendEmail")}</a>
              </Button>
              <Button variant="outline" size="lg" onClick={copyEmail}>
                {copied ? t("contact.copied") : t("contact.copyAddress")}
              </Button>
            </div>

            <div className="mt-10 h-px bg-graphite" />

            <dl className="mt-8 grid gap-5 md:grid-cols-3">
              <MetaItem label={t("contact.replyLabel")} value={t("contact.replyValue")} />
              <MetaItem label={t("contact.langLabel")} value={t("contact.langValue")} />
              <MetaItem label={t("contact.tzLabel")} value={t("contact.tzValue")} />
            </dl>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <MetricCard className="p-7">
              <PillBadge tone="lavender">{t("contact.sourcePill")}</PillBadge>
              <h3 className="mt-5 text-[18px] font-medium text-ghost-white">
                {t("contact.sourceTitle")}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ash-gray">
                {t("contact.sourceBody")}
              </p>
              <Link
                to="/du-an"
                className="mt-5 inline-block text-[14px] font-medium text-ghost-white hover:underline underline-offset-4"
              >
                {t("contact.openProjects")}
              </Link>
            </MetricCard>


            <MetricCard className="p-7">
              <PillBadge tone="mint">{t("contact.mainPill")}</PillBadge>
              <h3 className="mt-5 text-[18px] font-medium text-ghost-white">
                {t("contact.mainTitle")}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ash-gray">
                {t("contact.mainBody")}
              </p>
              <a
                href="https://studiominhhieu.com"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-[14px] font-medium text-ghost-white hover:underline underline-offset-4"
              >
                {t("contact.openWebsite")}
              </a>
            </MetricCard>
          </div>

          <div className="mt-20 text-center">
            <p className="font-quote mx-auto max-w-[560px] text-[24px] leading-[1.3] text-ghost-white">
              &ldquo;{t("contact.quote")}&rdquo;
            </p>
            <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-relaxed text-ash-gray">
              {t("contact.quoteBody")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="text-[12px] uppercase tracking-[0.14em] text-steel-gray">{label}</dt>
      <dd className="text-[15px] font-medium text-ghost-white">{value}</dd>
    </div>
  );
}
