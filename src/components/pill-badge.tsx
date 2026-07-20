import * as React from "react";
import { cn } from "@/lib/utils";

interface PillBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  live?: boolean;
  tone?: "default" | "mint" | "lavender";
}

export function PillBadge({
  className,
  children,
  live = false,
  tone = "default",
  ...props
}: PillBadgeProps) {
  const toneClass =
    tone === "mint"
      ? "border-mint-signal/40 text-mint-signal"
      : tone === "lavender"
        ? "border-lavender-pulse/40 text-lavender-pulse"
        : "border-steel-gray/40 text-ghost-white";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[13px] font-medium leading-none",
        toneClass,
        className,
      )}
      {...props}
    >
      {live && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-signal/60 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-signal" />
        </span>
      )}
      {children}
    </span>
  );
}
