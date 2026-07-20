import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  method: z.enum(["email", "google", "phone"]),
  identifier: z.string().trim().max(200).optional().default(""),
  event: z.enum(["signup", "signin"]).optional().default("signup"),
});

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const notifySignup = createServerFn({ method: "POST" })
  .validator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "8503737793";
    if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY) {
      // Silent: don't block signup UX if Telegram is misconfigured.
      console.error("Telegram connector not configured; skipping notify.");
      return { ok: false };
    }

    const methodLabel =
      data.method === "google"
        ? "Google"
        : data.method === "phone"
          ? "Số điện thoại"
          : "Email";
    const title =
      data.event === "signup"
        ? "🆕 Khách đăng ký mới"
        : "🔓 Đăng nhập mới";

    const text = [
      `<b>${title} · studiominhhieu.com</b>`,
      "",
      `<b>Phương thức:</b> ${methodLabel}`,
      data.identifier ? `<b>Định danh:</b> ${escapeHtml(data.identifier)}` : null,
      `<b>Thời gian:</b> ${new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}`,
    ]
      .filter(Boolean)
      .join("\n");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    try {
      const response = await fetch(
        "https://connector-gateway.lovable.dev/telegram/sendMessage",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": TELEGRAM_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
            parse_mode: "HTML",
          }),
          signal: controller.signal,
        },
      );
      if (!response.ok) {
        const body = await response.text().catch(() => "");
        console.error(`Telegram notify failed [${response.status}]: ${body}`);
        return { ok: false };
      }
      return { ok: true };
    } catch (err) {
      console.error("Telegram notify network error:", err);
      return { ok: false };
    } finally {
      clearTimeout(timeout);
    }
  });
