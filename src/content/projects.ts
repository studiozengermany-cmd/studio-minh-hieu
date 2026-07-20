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
}


export const projects: Project[] = [
  {
    slug: "quantum-inspector",
    title: "MH Quantum Inspector",
    role: "Quan sát và làm rõ",
    status: "experiment",
    oneLine: "Lấy ngữ cảnh DOM/CSS để mô tả vấn đề rõ hơn cho AI.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-05",
    language: "TypeScript",
    platform: "Browser (personal)",
    version: "internal",
    
    badges: [
      { label: "Experiment", tone: "amber" },
      { label: "TypeScript", tone: "blue" },
      { label: "Personal", tone: "neutral" },
    ],
  },
  {
    slug: "dowsample",
    title: "MH-Dowsample",
    role: "Thu thập và chuẩn hóa",
    status: "alpha",
    oneLine: "Kiểm tra, phân loại và sắp xếp sample.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-06",
    language: "Python 3.11+",
    platform: "Windows / macOS / Linux · CLI",
    version: "4.1.0",
    logo: "/media/projects/dowsample-logo.png",
    badges: [
      { label: "v4.1.0", tone: "lavender" },
      { label: "Python 3.11+", tone: "blue" },
      { label: "CI passing", tone: "mint" },
      { label: "MIT License", tone: "neutral" },
    ],
  },
  {
    slug: "fileos",
    title: "MH FileOS",
    role: "Tổ chức và bảo vệ",
    status: "experiment",
    oneLine: "Nghiên cứu tổ chức file an toàn và có phục hồi.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-04",
    language: "Rust",
    platform: "Windows 10 / 11",
    version: "Milestone 6 read-only",
    
    badges: [
      { label: "Milestone 6 · read-only", tone: "amber" },
      { label: "Windows 10 / 11", tone: "blue" },
      { label: "Rust", tone: "neutral" },
      { label: "Data safety first", tone: "mint" },
    ],
  },
  {
    slug: "sample-fl",
    title: "MH Sample FL",
    role: "Tìm, nghe và sử dụng",
    status: "alpha",
    oneLine: "Quản lý, preview và ghi nhớ sample trong workflow FL Studio.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "TypeScript · Electron",
    platform: "Windows",
    version: "v0.1.0-alpha",
    
    badges: [
      { label: "v0.1.0-alpha", tone: "amber" },
      { label: "Windows", tone: "blue" },
      { label: "Local-first", tone: "mint" },
      { label: "Not commercialized", tone: "neutral" },
    ],
  },
  {
    slug: "studio-site",
    title: "MINH HIEU STUDIO",
    role: "Ghi lại và chia sẻ",
    status: "beta",
    oneLine: "Website và nơi kể câu chuyện chung của hệ sinh thái MH.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "TypeScript · TanStack Start",
    platform: "Web",
    version: "beta",
    
    badges: [
      { label: "Beta", tone: "lavender" },
      { label: "TanStack Start", tone: "blue" },
      { label: "Vi / En", tone: "mint" },
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

