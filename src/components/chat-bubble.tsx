import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { sendTelegramMessage } from "@/lib/telegram.functions";

export function ChatBubble() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const renderedAtRef = useRef<number>(Date.now());
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const send = useServerFn(sendTelegramMessage);

  useEffect(() => {
    if (open) {
      textareaRef.current?.focus();
      renderedAtRef.current = Date.now();
    }
  }, [open]);

  const label = (key: string, fallback: string) => {
    const v = t(`chat.${key}`);
    return v === `chat.${key}` ? fallback : v;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim() || sending) return;
    setSending(true);
    try {
      await send({ data: { name: name.trim(), contact: contact.trim(), message: message.trim(), website, renderedAt: renderedAtRef.current } });
      setSent(true);
      setMessage("");
      toast.success(label("sentTitle", "Đã gửi tin nhắn"));
      setTimeout(() => setSent(false), 3500);
    } catch (err) {
      console.error(err);
      const msg = err instanceof Error ? err.message : "";
      toast.error(msg || label("errorTitle", "Không gửi được, thử lại nhé."));
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={label("toggle", "Chat với studio")}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-lavender-pulse/40 bg-carbon-card/90 text-ghost-white shadow-[0_10px_40px_rgba(153,132,216,0.25)] backdrop-blur-md transition-colors hover:border-lavender-pulse hover:bg-carbon-card"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            className="fixed bottom-24 right-6 z-50 w-[min(92vw,360px)] overflow-hidden rounded-2xl border border-graphite bg-carbon-card/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <div className="border-b border-graphite/60 px-5 py-4">
              <p className="text-eyebrow">{label("eyebrow", "Direct line")}</p>
              <h3 className="font-display mt-1 text-[20px] leading-tight text-ghost-white">
                {label("title", "Chat với studio")}
              </h3>
              <p className="mt-1 text-[12px] text-ash-gray">
                {label("subtitle", "Tin nhắn gửi thẳng qua Telegram của Minh Hiếu.")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 px-5 py-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={label("namePlaceholder", "Tên của bạn *")}
                required
                maxLength={80}
                className="w-full rounded-md border border-graphite bg-void-black px-3 py-2 text-[13px] text-ghost-white placeholder:text-steel-gray focus:border-lavender-pulse focus:outline-none"
              />
              {/* Honeypot — off-screen (not display:none, which bots skip) */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={label("contactPlaceholder", "Email / Telegram / SĐT")}
                maxLength={120}
                className="w-full rounded-md border border-graphite bg-void-black px-3 py-2 text-[13px] text-ghost-white placeholder:text-steel-gray focus:border-lavender-pulse focus:outline-none"
              />
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={label("messagePlaceholder", "Nội dung...")}
                required
                rows={4}
                maxLength={2000}
                className="w-full resize-none rounded-md border border-graphite bg-void-black px-3 py-2 text-[13px] text-ghost-white placeholder:text-steel-gray focus:border-lavender-pulse focus:outline-none"
              />
              <button
                type="submit"
                disabled={sending || !name.trim() || !message.trim()}
                className="flex w-full items-center justify-center gap-2 rounded-md bg-lavender-pulse px-4 py-2.5 text-[13px] font-medium text-void-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {sending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {label("sending", "Đang gửi...")}
                  </>
                ) : sent ? (
                  label("sentTitle", "Đã gửi ✓")
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {label("send", "Gửi tin nhắn")}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
