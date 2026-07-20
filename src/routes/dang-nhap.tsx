import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PillBadge } from "@/components/pill-badge";
import { toast } from "sonner";
import i18n from "@/i18n";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { notifySignup } from "@/lib/notify-signup.functions";

export const Route = createFileRoute("/dang-nhap")({
  head: () => ({
    meta: [
      { title: i18n.t("meta.signIn.title") },
      { name: "description", content: i18n.t("meta.signIn.description") },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: i18n.t("meta.signIn.ogTitle") },
      { property: "og:description", content: i18n.t("meta.signIn.ogDescription") },
    ],
  }),
  component: SignInPage,
});

type Tab = "email" | "phone";
type EmailMode = "signin" | "signup";

function SignInPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("email");
  const [mode, setMode] = useState<EmailMode>("signin");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const bullets = t("signIn.bullets", { returnObjects: true }) as string[];

  const onEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        notifySignup({ data: { method: "email", identifier: email, event: "signup" } }).catch(() => {});
        toast.success("Đã gửi email xác nhận. Kiểm tra hộp thư để hoàn tất.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Đăng nhập thành công.");
        navigate({ to: "/" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Không thể xử lý yêu cầu.");
    } finally {
      setLoading(false);
    }
  };

  const onGoogle = async () => {
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
      });
      if (result.error) throw result.error;
      if (!result.redirected) {
        toast.success("Đăng nhập Google thành công.");
        navigate({ to: "/" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Đăng nhập Google thất bại.");
    } finally {
      setLoading(false);
    }
  };

  const onSendOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({ phone });
      if (error) throw error;
      setOtpSent(true);
      toast.success("Đã gửi mã OTP đến số điện thoại.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Không gửi được OTP. Số điện thoại chưa được cấu hình SMS.");
    } finally {
      setLoading(false);
    }
  };

  const onVerifyOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.verifyOtp({ phone, token: otp, type: "sms" });
      if (error) throw error;
      toast.success("Đăng nhập thành công.");
      navigate({ to: "/" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Mã OTP không đúng.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[calc(100dvh-4rem)] overflow-hidden px-6 pt-20 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[900px] -translate-x-1/2 blur-3xl opacity-35"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(153,132,216,0.32) 0%, rgba(153,132,216,0.08) 45%, transparent 72%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1100px] gap-16 md:grid-cols-[1.05fr_1fr] md:items-center">
        <aside className="anim-in hidden md:block" style={{ animationDelay: "40ms" }}>
          <PillBadge live>{t("signIn.pill")}</PillBadge>
          <h1 className="font-display mt-8 text-[64px] leading-[0.98] tracking-[-0.02em] text-ghost-white">
            {t("signIn.brandA")}
            <br />
            <span className="text-lavender-pulse">{t("signIn.brandB")}</span>
          </h1>

          <ul className="mt-10 space-y-4 text-[14px] text-ash-gray">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-1 w-4 bg-mint-signal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-eyebrow mt-14">{t("signIn.motto")}</p>
        </aside>

        <div className="anim-in mx-auto w-full max-w-[440px]" style={{ animationDelay: "140ms" }}>
          <div className="surface-card p-8 md:p-10">
            <div className="flex items-center justify-between">
              <span className="text-eyebrow">{t("signIn.cardEyebrow")}</span>
              <span className="text-[12px] text-steel-gray">{t("signIn.version")}</span>
            </div>

            <h2 className="font-display mt-4 text-[32px] leading-none text-ghost-white">
              {mode === "signup" ? "Tạo tài khoản" : t("signIn.welcome")}
            </h2>
            <p className="mt-3 text-[14px] text-ash-gray">
              {t("signIn.optionalText")}{" "}
              <Link
                to="/"
                className="text-ghost-white underline underline-offset-4 hover:text-lavender-pulse"
              >
                {t("signIn.backToHome")}
              </Link>
              .
            </p>

            {/* Tabs */}
            <div className="mt-6 grid grid-cols-2 gap-1 rounded-md border border-graphite bg-void-black p-1">
              <TabButton active={tab === "email"} onClick={() => setTab("email")}>
                Email
              </TabButton>
              <TabButton active={tab === "phone"} onClick={() => { setTab("phone"); setOtpSent(false); }}>
                Số điện thoại
              </TabButton>
            </div>

            {tab === "email" ? (
              <form onSubmit={onEmailSubmit} className="mt-6 space-y-5">
                <Field
                  id="email"
                  label={t("signIn.emailLabel")}
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={setEmail}
                  placeholder="ban@studiominhhieu.com"
                />
                <Field
                  id="password"
                  label={t("signIn.passwordLabel")}
                  type="password"
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  required
                  value={password}
                  onChange={setPassword}
                  placeholder="••••••••"
                />

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading
                    ? t("signIn.submitting")
                    : mode === "signup"
                      ? "Tạo tài khoản"
                      : t("signIn.submit")}
                </Button>

                <button
                  type="button"
                  onClick={() => setMode((m) => (m === "signin" ? "signup" : "signin"))}
                  className="block w-full text-center text-[12px] text-steel-gray hover:text-ghost-white"
                >
                  {mode === "signin"
                    ? t("signIn.switchSignup")
                    : t("signIn.switchSignin")}
                </button>
              </form>
            ) : (
              <form onSubmit={otpSent ? onVerifyOtp : onSendOtp} className="mt-6 space-y-5">
                <Field
                  id="phone"
                  label="Số điện thoại"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={setPhone}
                  placeholder="+84 90 xxx xxxx"
                />
                {otpSent && (
                  <Field
                    id="otp"
                    label="Mã OTP"
                    type="text"
                    autoComplete="one-time-code"
                    required
                    value={otp}
                    onChange={setOtp}
                    placeholder="123456"
                  />
                )}
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Đang xử lý..." : otpSent ? "Xác nhận OTP" : "Gửi mã OTP"}
                </Button>
                {otpSent && (
                  <button
                    type="button"
                    onClick={() => { setOtpSent(false); setOtp(""); }}
                    className="block w-full text-center text-[12px] text-steel-gray hover:text-ghost-white"
                  >
                    Đổi số điện thoại
                  </button>
                )}
              </form>
            )}

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-graphite" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-steel-gray">
                {t("signIn.or")}
              </span>
              <div className="h-px flex-1 bg-graphite" />
            </div>

            <ProviderButton
              label={t("signIn.google")}
              onClick={onGoogle}
              icon={<GoogleMark />}
              disabled={loading}
            />
          </div>

          <p className="mt-6 text-center text-[12px] text-steel-gray">
            {t("signIn.agree")}{" "}
            <Link to="/ghi-chu" className="underline underline-offset-4 hover:text-ghost-white">
              {t("signIn.principles")}
            </Link>
            {t("signIn.dot")}
          </p>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-9 rounded text-[13px] font-medium transition-all ${
        active
          ? "bg-carbon-card text-ghost-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
          : "text-steel-gray hover:text-ghost-white"
      }`}
    >
      {children}
    </button>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  trailing?: ReactNode;
}

function Field({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  autoComplete,
  required,
  trailing,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-[12px] uppercase tracking-[0.14em] text-steel-gray">
          {label}
        </label>
        {trailing}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="h-11 rounded-md border border-graphite bg-void-black px-3.5 text-[14px] text-ghost-white placeholder:text-steel-gray/70 outline-none transition-colors focus:border-lavender-pulse focus:ring-2 focus:ring-lavender-pulse/25"
      />
    </div>
  );
}

function ProviderButton({
  label,
  onClick,
  icon,
  disabled,
}: {
  label: string;
  onClick: () => void;
  icon: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="group flex h-11 w-full items-center justify-center gap-3 rounded-md border border-graphite bg-void-black text-[14px] font-medium text-ghost-white transition-all duration-200 hover:border-steel-gray hover:bg-carbon-card active:scale-[0.985] disabled:opacity-50"
    >
      <span className="flex h-4 w-4 items-center justify-center">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-4 w-4">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}
