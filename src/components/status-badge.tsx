import { useTranslation } from "react-i18next";
import { PillBadge } from "./pill-badge";
import type { ProjectStatus } from "@/content/projects";

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useTranslation();
  const tone =
    status === "stable"
      ? "mint"
      : status === "beta"
        ? "lavender"
        : "default";

  return <PillBadge tone={tone}>{t(`common.status.${status}`)}</PillBadge>;
}
