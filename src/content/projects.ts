export type ProjectStatus = "idea" | "experiment" | "alpha" | "beta" | "stable";

export interface ProjectBadge {
  label: string;
  tone?: "neutral" | "lavender" | "amber" | "mint" | "blue";
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  status: ProjectStatus;
  oneLine: string;
  description: string[];
  dos: string[];
  donts: string[];
  updatedAt: string;
  language: string;
  platform?: string;
  version?: string;
  cover?: string;
  logo?: string;
  badges?: ProjectBadge[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "quantum-inspector",
    title: "MH Quantum Inspector",
    role: "Quan sát và làm rõ giao diện",
    status: "experiment",
    oneLine: "Lấy ngữ cảnh DOM/CSS tại đúng phần tử để mô tả vấn đề giao diện rõ hơn cho AI.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "TypeScript",
    platform: "Browser · Internal development",
    version: "Internal experiment",
    githubUrl: "https://github.com/studiozengermany-cmd/MH-Quantum-Inspector",
    badges: [
      { label: "Experiment", tone: "amber" },
      { label: "TypeScript", tone: "blue" },
      { label: "Local workflow", tone: "mint" },
    ],
  },
  {
    slug: "dowsample-extension",
    title: "MH Dowsample Extension",
    role: "Thu thập và kiểm tra âm thanh",
    status: "alpha",
    oneLine: "Chrome Extension kết hợp backend local để xử lý danh sách link, tải file và báo cáo chất lượng đầu ra.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "JavaScript · Python",
    platform: "Windows · Chrome Extension",
    version: "Development / Alpha",
    githubUrl: "https://github.com/studiozengermany-cmd/MH---DOWSAMPLE-EX",
    badges: [
      { label: "Development", tone: "amber" },
      { label: "Chrome Extension", tone: "blue" },
      { label: "Local backend", tone: "mint" },
      { label: "Quality validation in progress", tone: "neutral" },
    ],
  },
  {
    slug: "fileos",
    title: "MH FileOS",
    role: "Tổ chức và bảo vệ dữ liệu",
    status: "experiment",
    oneLine: "Nghiên cứu hệ thống quản lý file local-first, ưu tiên an toàn và khả năng phục hồi.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "Rust",
    platform: "Windows 10 / 11",
    version: "Milestone 6 · Read-only",
    githubUrl: "https://github.com/studiozengermany-cmd/MH-FileOS",
    badges: [
      { label: "M6 · Read-only", tone: "amber" },
      { label: "Rust", tone: "blue" },
      { label: "Data safety first", tone: "mint" },
    ],
  },
  {
    slug: "sample-fl",
    title: "MH Sample FL",
    role: "Tìm, nghe và ghi nhớ sample",
    status: "alpha",
    oneLine: "Ứng dụng desktop local-first hỗ trợ producer quản lý sample trong workflow sử dụng FL Studio.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "TypeScript · Electron",
    platform: "Windows",
    version: "v0.1.0-alpha",
    githubUrl: "https://github.com/studiozengermany-cmd/MH-SAMPLE-FL-2026-",
    badges: [
      { label: "v0.1.0-alpha", tone: "amber" },
      { label: "Windows", tone: "blue" },
      { label: "Local-first", tone: "mint" },
      { label: "FL Studio workflow", tone: "neutral" },
    ],
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  idea: "Ý tưởng",
  experiment: "Thử nghiệm",
  alpha: "Alpha",
  beta: "Beta",
  stable: "Stable",
};

export const statusColor: Record<ProjectStatus, string> = {
  idea: "text-steel-gray",
  experiment: "text-amber-400",
  alpha: "text-lavender-pulse",
  beta: "text-emerald-400",
  stable: "text-sky-400",
};
