import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { memo, useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Magnetic } from "@/components/magnetic";

import appCss from "../styles.css?url";
import i18n from "../i18n";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { SiteBackground } from "@/components/background/SiteBackground";
import { PageTransition } from "@/components/page-transition";
import { IntroLoader } from "@/components/intro-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ChatBubble } from "@/components/chat-bubble";
import { SafeBoundary } from "@/components/safe-boundary";
import { supabase } from "@/integrations/supabase/client";
import { notifySignup } from "@/lib/notify-signup.functions";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-void-black px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow mb-6">{t("common.errors.notFoundEyebrow")}</p>
        <h1 className="font-display text-[48px] leading-none text-ghost-white">
          {t("common.errors.notFoundTitle")}
        </h1>
        <p className="mt-4 text-[15px] text-ash-gray">
          {t("common.errors.notFoundBody")}
        </p>
        <div className="mt-8">
          <Button asChild variant="hero">
            <Link to="/">{t("common.errors.backHome")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-void-black px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow mb-6">{t("common.errors.errorEyebrow")}</p>
        <h1 className="font-display text-[40px] leading-none text-ghost-white">
          {t("common.errors.errorTitle")}
        </h1>
        <p className="mt-4 text-[15px] text-ash-gray">
          {t("common.errors.errorBody")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            variant="hero"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            {t("common.errors.retry")}
          </Button>
          <Button asChild variant="outline">
            <a href="/">{t("common.errors.backHome")}</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: i18n.t("meta.root.title") },
      { name: "description", content: i18n.t("meta.root.description") },
      { name: "author", content: "Minh Hieu Studio" },
      { property: "og:title", content: i18n.t("meta.root.ogTitle") },
      { property: "og:description", content: i18n.t("meta.root.ogDescription") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Source+Serif+4:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=Source+Serif+4:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@800;900&display=swap",
      },


    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const lang =
    (i18n.resolvedLanguage ?? i18n.language ?? "vi").startsWith("en") ? "en" : "vi";
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body className="bg-void-black text-ghost-white antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { to: "/", key: "home" },
  { to: "/am-nhac", key: "music" },
  { to: "/tu-lieu", key: "archive" },
  { to: "/du-an", key: "projects" },
  { to: "/ghi-chu", key: "notes" },
  { to: "/gioi-thieu", key: "about" },
] as const;

/* High-End Visual Design: Floating Island Nav Bar */
const TopNav = memo(function TopNav() {
  const { t } = useTranslation();
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[calc(100%-2rem)]">
      <div className="flex items-center justify-center rounded-full border border-white/10 bg-[#030304]/80 px-2 py-1.5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="inline-flex min-h-[38px] items-center justify-center rounded-full px-4 text-[12px] font-mono font-medium tracking-[0.05em] uppercase text-ash-gray/80 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/10 hover:text-white"
              activeProps={{
                className: "bg-white/15 text-ghost-white font-medium border border-white/20 shadow-[0_2px_10px_rgba(255,255,255,0.1)] -translate-y-[1px]",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {({ isActive }) => (
                <span className="flex items-center gap-1.5">
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-lavender-pulse shadow-[0_0_8px_rgba(153,132,216,0.9)]" />
                  )}
                  {t(`common.nav.${item.key}`)}
                </span>
              )}
            </Link>
          ))}
          <div className="ml-1 pl-1 border-l border-white/10 flex items-center gap-1">
            <LanguageSwitcher />
            <Link
              to="/dang-nhap"
              className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-lavender-pulse/90 px-4 text-[12px] font-mono font-medium tracking-[0.05em] uppercase text-void-black transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-lavender-pulse hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(153,132,216,0.35)]"
            >
              {t("common.nav.signIn")}
            </Link>
          </div>

        </nav>
      </div>
    </header>
  );
});

const SiteFooter = memo(function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="mt-32 border-t border-graphite/50">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-2 w-2 rounded-full bg-lavender-pulse" />
              <span className="text-[15px] font-medium text-ghost-white">
                {t("common.footer.brand")}
              </span>
            </div>
            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-ash-gray">
              {t("common.footer.tagline")}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-eyebrow">{t("common.footer.navLabel")}</span>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[14px] text-ash-gray hover:text-ghost-white"
              >
                {t(`common.nav.${item.key}`)}
              </Link>
            ))}
          </div>

          <div>
            <span className="text-eyebrow">{t("common.footer.legalLabel")}</span>
            <p className="mt-4 text-[13px] text-steel-gray">
              {t("common.footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Notify Telegram on new signups (Google / Phone OTP).
    // Email signups are notified explicitly in /dang-nhap.
    const notified = new Set<string>();
    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event !== "SIGNED_IN" || !session?.user) return;
      const u = session.user;
      if (notified.has(u.id)) return;
      notified.add(u.id);
      const created = u.created_at ? new Date(u.created_at).getTime() : 0;
      const isNew = created > 0 && Date.now() - created < 60_000;
      if (!isNew) return;
      const provider = (u.app_metadata?.provider ?? "").toLowerCase();
      if (provider === "email") return; // handled in /dang-nhap
      const method: "google" | "phone" | "email" =
        provider === "google" ? "google" : u.phone ? "phone" : "email";
      const identifier = u.email ?? u.phone ?? u.id;
      notifySignup({ data: { method, identifier, event: "signup" } }).catch(() => {});
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeBoundary name="SiteBackground"><SiteBackground /></SafeBoundary>
      <SafeBoundary name="ScrollProgress"><ScrollProgress /></SafeBoundary>
      <SafeBoundary name="IntroLoader"><IntroLoader /></SafeBoundary>
      <TopNav />
      <SafeBoundary name="PageTransition" fallback={<Outlet />}>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </SafeBoundary>
      <SiteFooter />
      <Toaster position="bottom-right" />
      <SafeBoundary name="ChatBubble"><ChatBubble /></SafeBoundary>
    </QueryClientProvider>
  );
}
