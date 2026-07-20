import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <span className="text-eyebrow">{eyebrow}</span>}
      <Heading className="text-display text-ghost-white max-w-[720px]">{title}</Heading>
      {subtitle && (
        <p className="max-w-[640px] text-[18px] leading-[1.56] text-ash-gray">{subtitle}</p>
      )}
    </div>
  );
}
