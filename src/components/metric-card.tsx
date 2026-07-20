import * as React from "react";
import { cn } from "@/lib/utils";

export function MetricCard({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("surface-card p-5 md:p-6", className)} {...props}>
      {children}
    </div>
  );
}
