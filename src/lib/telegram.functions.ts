import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string().trim().min(1).max(80),
  contact: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(1).max(2000),
  // Honeypot: bots fill hidden fields; humans leave empty.
  website: z.string().max(0).optional().default(""),
  // Client-rendered timestamp; too-fast submits are bots.
  renderedAt: z.number().optional(),
});

// Per-isolate in-memory rate limit. Not distributed, but blocks single-IP floods.
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const ipHits = new Map<string, number[]>();

function checkRate(ip: string): boolean {
  const now = Date.now();
  const arr = (ipHits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (arr.length >= RATE_MAX) {
    ipHits.set(ip, arr);
    return false;
  }
  arr.push(now);
  ipHits.set(ip, arr);
  // Opportunistic cleanup
  if (ipHits.size > 5000) {
    for (const [k, v] of ipHits) {
      if (!v.some((t) => now - t < RATE_WINDOW_MS)) ipHits.delete(k);
    }
  }
  return true;
}

export const sendTelegramMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: silently succeed so bots don't retry.
    if (data.website && data.website.length > 0) {
      return { ok: true };
    }
    // Min think-time: <1.5s from render to submit = bot.
    if (data.renderedAt && Date.now() - data.renderedAt < 1500) {
      return { ok: true };
    }

    const req = getRequest();
    const ip =
      req.headers.get("cf-connecting-ip") ??
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    if (!checkRate(ip)) {
      throw new Error("Bạn gửi hơi nhanh, vui lòng thử lại sau ít phút.");
    }

    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "8503737793";

    if (!LOVABLE_API_KEY || !TELEGRAM_API_KEY) {
      throw new Error("Telegram connector is not configured.");
    }

    const text = [
      "<b>💬 Tin nhắn mới từ studiominhhieu.com</b>",
      "",
      `<b>Tên:</b> ${escapeHtml(data.name)}`,
      data.contact ? `<b>Liên hệ:</b> ${escapeHtml(data.contact)}` : null,
      "",
      escapeHtml(data.message),
    ]
      .filter(Boolean)
      .join("\n");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    let response: Response;
    try {
      response = await fetch(
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
    } catch (err) {
      const aborted = err instanceof Error && err.name === "AbortError";
      console.error("Telegram gateway network failure:", err);
      throw new Error(
        aborted
          ? "Kết nối Telegram bị quá thời gian. Vui lòng thử lại."
          : "Không kết nối được dịch vụ nhắn tin. Vui lòng thử lại.",
      );
    } finally {
      clearTimeout(timeout);
    }

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      console.error(`Telegram gateway failed [${response.status}]: ${body}`);
      throw new Error("Không gửi được tin nhắn. Vui lòng thử lại.");
    }

    return { ok: true };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
