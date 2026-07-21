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
    role: "Quan s\u00e1t v\u00e0 l\u00e0m r\u00f5",
    status: "experiment",
    oneLine: "L\u1ea5y ng\u1eef c\u1ea3nh DOM/CSS \u0111\u1ec3 m\u00f4 t\u1ea3 v\u1ea5n \u0111\u1ec1 r\u00f5 h\u01a1n cho AI.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-05",
    language: "TypeScript",
    platform: "Browser (personal)",
    version: "internal",
    githubUrl: "https://github.com/studiozengermany-cmd/MH-Quantum-Inspector",
    badges: [
      { label: "Experiment", tone: "amber" },
      { label: "TypeScript", tone: "blue" },
      { label: "Personal", tone: "neutral" },
    ],
  },
  {
    slug: "dowsample-extension",
    title: "MH-Dowsampl.Extension",
    role: "Thu th\u1eadp \u00e2m thanh",
    status: "alpha",
    oneLine: "Chrome Extension + Python local \u2014 d\u00e1n link, t\u00ecm audio c\u00f4ng khai, t\u1ea3i v\u1ec1 m\u00e1y kh\u00f4ng ghi \u0111\u00e8.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "JavaScript \u00b7 Python 3",
    platform: "Windows \u00b7 Chrome Extension",
    version: "Development",
    githubUrl: "https://github.com/studiozengermany-cmd/MH-Dowsampl.Extension",
    badges: [
      { label: "Development", tone: "amber" },
      { label: "Chrome Extension", tone: "blue" },
      { label: "Local-first", tone: "mint" },
      { label: "Python backend", tone: "neutral" },
    ],
  },
  {
    slug: "fileos",
    title: "MH FileOS",
    role: "T\u1ed5 ch\u1ee9c v\u00e0 b\u1ea3o v\u1ec7",
    status: "experiment",
    oneLine: "Nghi\u00ean c\u1ee9u t\u1ed5 ch\u1ee9c file an to\u00e0n v\u00e0 c\u00f3 ph\u1ee5c h\u1ed3i.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-04",
    language: "Rust",
    platform: "Windows 10 / 11",
    version: "Milestone 6 read-only",
    badges: [
      { label: "Milestone 6 \u00b7 read-only", tone: "amber" },
      { label: "Windows 10 / 11", tone: "blue" },
      { label: "Rust", tone: "neutral" },
      { label: "Data safety first", tone: "mint" },
    ],
  },
  {
    slug: "sample-fl",
    title: "MH Sample FL",
    role: "T\u00ecm, nghe v\u00e0 s\u1eed d\u1ee5ng",
    status: "alpha",
    oneLine: "Qu\u1ea3n l\u00fd, preview v\u00e0 ghi nh\u1edb sample trong workflow FL Studio.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "TypeScript \u00b7 Electron",
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
    role: "Ghi l\u1ea1i v\u00e0 chia s\u1ebb",
    status: "beta",
    oneLine: "Website v\u00e0 n\u01a1i k\u1ec3 c\u00e2u chuy\u1ec7n chung c\u1ee7a h\u1ec7 sinh th\u00e1i MH.",
    description: [],
    dos: [],
    donts: [],
    updatedAt: "2026-07",
    language: "TypeScript \u00b7 TanStack Start",
    platform: "Web",
    version: "beta",
    githubUrl: "https://github.com/studiozengermany-cmd/studio-minh-hieu",
    badges: [
      { label: "Beta", tone: "lavender" },
      { label: "TanStack Start", tone: "blue" },
      { label: "Vi / En", tone: "mint" },
    ],
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  idea: "\u00dd t\u01b0\u1edfng",
  experiment: "Th\u1eed nghi\u1ec7m",
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
