import { useTranslation } from "react-i18next";
import { useRouter } from "@tanstack/react-router";
import { useCallback, useEffect } from "react";
import type { AppLanguage } from "@/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const router = useRouter();
  const current = (i18n.resolvedLanguage ?? i18n.language ?? "vi").startsWith("en")
    ? "en"
    : "vi";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = current;
    }
  }, [current]);

  const toggle = useCallback(() => {
    const next: AppLanguage = current === "vi" ? "en" : "vi";
    void i18n.changeLanguage(next).then(() => {
      // Re-run route head() so <title>/meta reflect the new language.
      void router.invalidate();
    });
  }, [current, i18n, router]);

  const other = current === "vi" ? "EN" : "VI";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch language to ${other}`}
      className={`inline-flex h-7 items-center gap-1 rounded-full border border-graphite bg-carbon-card/50 px-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ash-gray transition-colors hover:border-lavender-pulse/50 hover:text-ghost-white ${className}`}
    >
      <span className={current === "vi" ? "text-ghost-white" : ""}>VI</span>
      <span className="text-steel-gray">/</span>
      <span className={current === "en" ? "text-ghost-white" : ""}>EN</span>
    </button>
  );
}
