import { PillBadge } from "./pill-badge";
import { statusLabel, type ProjectStatus } from "@/content/projects";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const tone =
    status === "stable"
      ? "mint"
      : status === "beta"
        ? "lavender"
        : "default";
  return <PillBadge tone={tone}>{statusLabel[status]}</PillBadge>;
}
