const en = {
  common: {
    nav: {
      home: "Home",
      music: "Music",
      archive: "Archive",
      projects: "Projects",
      notes: "Notes",
      about: "About",
      signIn: "Sign in",
      contact: "Contact",
      cta: "Listen",
    },
    footer: {
      brand: "Minh Hieu Studio",
      tagline:
        "A personal studio for music and tools. No commercial assumptions. Evidence before claims.",
      navLabel: "Navigate",
      channelsLabel: "Channels",
      copyright: "© 2026 MINH HIEU STUDIO.",
      motto: "Evidence before claims · No overselling",
    },
    errors: {
      notFoundEyebrow: "404",
      notFoundTitle: "Page not found",
      notFoundBody: "This URL does not exist or has been moved.",
      backHome: "Back to home",
      errorEyebrow: "Something went wrong",
      errorTitle: "Page failed to load",
      errorBody: "A system error occurred. You can retry or return to the home page.",
      retry: "Retry",
    },
    language: { switchTo: "VI", label: "Language" },
    status: {
      idea: "Idea",
      experiment: "Experiment",
      alpha: "Alpha",
      beta: "Beta",
      stable: "Stable",
    },
  },

  meta: {
    root: {
      title: "MINH HIEU STUDIO — Music studio & MH tooling ecosystem",
      description:
        "Minh Hieu's personal studio: a log of the music-making process, workflow notes, and the MH projects combining AI, tools and music.",
      ogTitle: "MINH HIEU STUDIO",
      ogDescription:
        "A personal studio for music and tools. The MH ecosystem: Quantum Inspector, Dowsample, FileOS, Sample FL.",
    },
    home: {
      title: "MINH HIEU STUDIO — Music, workflow & the MH tooling ecosystem",
      description:
        "Minh Hieu's personal studio. Vinahouse remixes, FL Studio notes, and the MH projects: Quantum Inspector, Dowsample, FileOS, Sample FL.",
      ogTitle: "MINH HIEU STUDIO",
      ogDescription:
        "A personal studio for music and tools. The MH ecosystem: five projects across AI, tools and music.",
    },
    music: {
      title: "Music — MINH HIEU STUDIO",
      description:
        "Vinahouse remixes, FL Studio workflow direction, and 60-second previews from Minh Hieu's personal archive.",
      ogTitle: "Music — MINH HIEU STUDIO",
      ogDescription:
        "60-second preview of the Lieu Thanh Yen x J97 remix and FL Studio workflow direction.",
    },
    archive: {
      title: "Live archive — MINH HIEU STUDIO",
      description:
        "Real photos from booth sets, posters and event spaces of Minh Hieu.",
      ogTitle: "Live archive — MINH HIEU STUDIO",
      ogDescription: "Archive photos from booths, posters and events.",
    },
    projects: {
      title: "MH ecosystem — MINH HIEU STUDIO",
      description:
        "Five MH projects: Quantum Inspector, Dowsample, FileOS, Sample FL and the Studio Site. Public status, plainly stated.",
      ogTitle: "MH ecosystem",
      ogDescription:
        "A chain of five MH projects: observe → normalise → organise → use → share.",
    },
    notes: {
      title: "Notes & principles — MINH HIEU STUDIO",
      description:
        "The eight building principles of Minh Hieu Studio and the convention for describing project status.",
      ogTitle: "Notes & principles — MINH HIEU STUDIO",
      ogDescription: "Real needs first · Evidence before claims.",
    },
    about: {
      title: "About — MINH HIEU STUDIO",
      description:
        "Minh Hieu Studio is a personal studio for music and tools. Evidence before claims, no commercial assumptions.",
      ogTitle: "About — MINH HIEU STUDIO",
      ogDescription:
        "A personal studio for music and tools. The MH ecosystem: Quantum Inspector, Dowsample, FileOS, Sample FL.",
    },
    contact: {
      title: "Contact — MINH HIEU STUDIO",
      description:
        "Official contact for Minh Hieu Studio: email support@studiominhhieu.com, GitHub and the website. Replies within 24–72h.",
      ogTitle: "Contact — MINH HIEU STUDIO",
      ogDescription:
        "Talk about music collabs and MH tool feedback. Replies within 24–72h.",
    },
    signIn: {
      title: "Sign in — MINH HIEU STUDIO",
      description:
        "Internal sign-in gate for Minh Hieu Studio. UI preview only, not connected to real accounts.",
      ogTitle: "Sign in — MINH HIEU STUDIO",
      ogDescription: "Internal sign-in gate. UI preview only.",
    },
  },

  home: {
    hero: {
      pill: "Updating the 2026 remix",
      titleA: "Minh Hieu",
      titleB: "Studio.",
      subtitle:
        "Music and tools, made by Minh Hieu. An archive of mixes, workflow notes and MH project status.",
      ctaPrimary: "Play the latest",
      ctaSecondary: "See the MH ecosystem →",
    },
    projects: {
      eyebrow: "MH ecosystem",
      title: "Five projects, one chain",
      subtitle:
        "The MH projects are built as a connected chain: observe → normalise → organise → use → share.",
      detail: "Details",
      hoverLabel: "View →",
    },
    principles: {
      eyebrow: "Building principles",
      title: "Eight fixed points",
    },
    tools: { eyebrow: "Tools in use" },
  },

  music: {
    eyebrow: "Music",
    title: "Preview cuts from the personal archive",
    subtitle:
      "The site only publishes 60-second previews to convey the sonic direction — no master files are made public.",
    coverAlt: "Cover of {{title}}",
    audioFallback: "Your browser does not support audio playback.",
    previewPreparing: "Preview is being prepared for the site",
    panels: {
      directionEyebrow: "Musical direction",
      directionTitle: "Vinahouse & DJ",
      directionBody:
        "Focused on sound selection, arrangement, vocal treatment, transitions and finishing versions suited to either listening or performance.",
      workflowEyebrow: "Workflow",
      workflowTitle: "FL Studio",
      workflowBody:
        "Projects, samples, presets and plugins are organised to cut search time, avoid missing paths and keep old projects reopenable years later.",
    },
    seeSampleFl: "See the MH Sample FL project →",
  },

  archive: {
    eyebrow: "Archive",
    title: "Archive photos from booths & events",
    subtitle:
      "Real photos from booth sets, posters and event spaces. Being digitised gradually from the original archive.",
    statusPreparing: "Status · In preparation",
    emptyTitle: "The archive is being digitised.",
    emptyBody:
      "The studio only publishes original, rights-cleared photos. When the first proper set is ready, this page will reopen — no stock placeholders.",
    pressNote: "Need press / booking materials? Email directly.",
  },

  projectsPage: {
    eyebrow: "Projects",
    title: "The MH ecosystem",
    subtitle:
      "The MH-prefixed projects are built as one connected chain, not as separate repositories.",
    step: "Step {{n}}",
    detail: "Details →",
    github: "GitHub ↗",
    detailPage: {
      breadcrumb: "Projects",
      dosLabel: "What it is",
      dontsLabel: "What it isn't",
      featuresLabel: "Features",
      pipelineLabel: "Processing flow",
      evidenceLabel: "Evidence today",
      notReadyLabel: "Not yet confirmed",
      metaStatus: "Status",
      metaRole: "Role",
      metaLanguage: "Language",
      metaUpdated: "Updated",
      metaPlatform: "Platform",
      metaVersion: "Version",
      sourceNote: "Source code is a personal project; the repository is not public.",
      backAll: "← All projects",
      notFoundEyebrow: "404 · Project",
      notFoundTitle: "No such project",
      backList: "← Back to the project list",
      errorEyebrow: "Project load error",
      errorTitle: "This project failed to open",
      errorBody: "A data-loading error occurred. You can retry or go back to the list.",
      retry: "Retry",
      backToList: "Back to list",
    },

  },

  projectsData: {
    "quantum-inspector": {
      title: "MH Quantum Inspector",
      role: "Observe and clarify",
      oneLine: "Grab DOM/CSS context to describe UI problems to AI more precisely.",
      description: [
        "A personal dev tool that extracts UI context — DOM structure, classes, computed styles — so UI issues can be described to AI more accurately.",
        "Currently an internal experiment, not yet through a full security review.",
      ],
      features: [
        { name: "Context-aware DOM capture", desc: "Path, classes, aria and computed styles of the selected element." },
        { name: "Compact AI-ready output", desc: "Clean format, keeping only what is needed to describe a UI issue." },
        { name: "Local only", desc: "All extraction runs in a personal browser; nothing is uploaded." },
      ],
      pipeline: ["Pick element", "Extract DOM + computed CSS", "Format prompt", "Copy into AI chat"],
      evidence: ["Used internally in the studio's UI fixing loop"],
      notReady: ["No security audit", "No public release"],
      dos: ["Use in a personal dev environment", "Grab context for AI prompts"],
      donts: ["Do not install in a browser used for sensitive work", "No security audit yet"],
    },
    dowsample: {
      title: "MH-Dowsample",
      role: "Collect and normalise",
      oneLine: "Check, classify and organise samples into a tidy library for the DAW.",
      description: [
        "MH-Dowsample turns mixed folders of audio files into a predictable library that is easy to browse from a DAW. The pipeline inspects every file, estimates musical metadata, converts accepted audio to tagged 16-bit PCM WAV, deduplicates with SHA-256, and records results in SQLite.",
        "Runs fully locally. Audio files, browser sessions, the SQLite database, credentials, logs and generated libraries are excluded from Git and stay on the user's machine.",
      ],
      features: [
        { name: "Quality inspection", desc: "Checks duration, bitrate, silence ratio and readable audio before accepting a file." },
        { name: "Content classification", desc: "Distinguishes loops, one-shots and FX; estimates BPM, key and a practical genre hint." },
        { name: "Consistent output", desc: "Normalises and exports tagged 44.1 kHz, 16-bit PCM WAV." },
        { name: "Clean library layout", desc: "Readable, content-first filenames; DAW-friendly folders." },
        { name: "Duplicate protection", desc: "SHA-256 fingerprints and SQLite inventory to avoid duplicate imports." },
        { name: "Concurrent processing", desc: "Batches with configurable worker and batch sizes." },
        { name: "Guarded web discovery", desc: "Finds public audio via direct URLs, page resources, JSON and media controls." },
        { name: "Approved Telegram access", desc: "Invited users may submit public audio links after admin approval." },
      ],
      pipeline: [
        "Local folder or approved URL",
        "Quality gate",
        "Classify and analyze",
        "Normalize + tag WAV",
        "SHA-256 duplicate check",
        "Organised library + SQLite inventory",
      ],
      evidence: [
        "CI matrix on Python 3.11 and 3.12 with tests, coverage ≥68%, ruff, mypy, bandit",
        "Telegram bot runs on invite codes + admin approval",
        "Standard 44.1 kHz / 16-bit PCM WAV output with metadata",
      ],
      notReady: [
        "No end-user GUI",
        "Do not run on a production library without backup",
        "Legal clearance is per-source, not automatic",
      ],
      dos: ["Run a dry-run first", "Back up before applying", "Check the log after every run"],
      donts: ["Do not run on a production library without a backup", "Do not auto-apply on large batches"],
    },
    fileos: {
      title: "MH FileOS",
      role: "Organise and protect",
      oneLine: "Local-first file-management research prioritising data safety and recovery.",
      description: [
        "MH FileOS is a personal research project on a local file-index model with recovery, operation logs and rollback. The current slice runs read-only on synthetic testkit data.",
        "Non-reversible priority order: no data loss → correctness → explainable → verifiable & recoverable → performance → UI → automation (last).",
      ],
      features: [
        { name: "Read-only scan", desc: "Never mutates the source; before/after snapshots confirm integrity." },
        { name: "SQLite catalog", desc: "Results go into a schema'd artifact separated from user data." },
        { name: "JSON summary", desc: "Result excludes real data paths — shareable and verifiable." },
        { name: "Verified state", desc: "Marked verified only when summary matches manifest and sandbox is cleaned up." },
        { name: "Testkit fixtures", desc: "Generates test data with a pre-declared manifest for reproducible evidence." },
      ],
      pipeline: [
        "Understand data",
        "Detect issues",
        "Plan",
        "User approval",
        "Transactional execution",
        "Verify",
        "Journal",
        "Recoverable",
      ],
      evidence: [
        "Milestone M6 read-only vertical slice complete on synthetic fixture",
        "Summary matches manifest, source snapshot unchanged, sandbox cleaned up",
        "Rust workspace with clear crate boundaries (domain, catalog, scanner, platform-windows)",
      ],
      notReady: [
        "Desktop UI for end users",
        "Official Windows installer",
        "Scan of real user data",
        "Action Plan with approval UI",
        "Transactional execution on real data",
        "Complete journal and undo / recovery",
      ],
      dos: ["Read the source as research notes", "Run on the demo fixtures"],
      donts: ["Do not use on real data", "Do not treat it as a ready file manager"],
    },
    "sample-fl": {
      title: "MH Sample FL",
      role: "Find, audition and use",
      oneLine: "Local-first sample manager for producers using FL Studio.",
      description: [
        "Desktop app to browse, preview and remember the samples used across FL Studio projects. Goals: find fast, audition first, remember project ↔ sample links, keep source and license, detect missing or duplicated files without destroying data.",
        "Version v0.1.0-alpha — many runtime gates are unverified; not a release.",
      ],
      features: [
        { name: "Search", desc: "Folder scan, parent–child structure, SQLite FTS5, filter and sort." },
        { name: "Preview", desc: "Audition audio, view waveform and metadata; source files are never modified." },
        { name: "Remember", desc: "Project Workspace, Project Memory, tags, notes and used-sample confirmation." },
        { name: "Protect", desc: "SHA-256, exact duplicate report, missing-file detection; read-only or simulated first." },
        { name: "Provenance", desc: "Source, license and supporting docs supplied by the user." },
        { name: "Backup", desc: "SQLite backup and JSON export; no cloud required." },
        { name: "FL Studio drag", desc: "Native file drag via the OS mechanism (not called a deep integration)." },
      ],
      pipeline: [
        "Add Folder",
        "Discovery: build the folder tree",
        "Analyze: metadata, hash, audio",
        "Search / Filter / Preview",
        "Create or pick a project",
        "Drag samples to FL Studio",
        "Confirm used",
        "Notes, source, license, backup",
      ],
      evidence: [
        "10/10 automated tests on Windows CI",
        "TypeScript tsc --noEmit passes",
        "Vite production renderer build passes",
        "Electron Builder produces an NSIS installer",
        "Packaged app passed smoke launch on a Windows runner",
        "Integration test against real WAV, SQLite, FTS search, SHA-256 and backup",
      ],
      notReady: [
        "Full acceptance on the owner's real Windows machine",
        "Scan of a real sample library with the redesigned UI",
        "Audio and waveform preview in a real desktop runtime",
        "Drag into FL Studio Channel Rack / Playlist / Sampler",
        "Performance test with libraries around 100,000 samples",
        "Crash recovery and real power-loss scenarios",
        "Stable installer release for end users",
      ],
      dos: ["Personal use alongside FL Studio", "Back the library up regularly"],
      donts: ["Do not call it a deep FL Studio integration", "Do not treat native file drag as an official API"],
    },
    "studio-site": {
      title: "MINH HIEU STUDIO",
      role: "Log and share",
      oneLine: "The website and shared story of the MH ecosystem.",
      description: [
        "The studio's public site — a log of the music-making process, workflow notes and the status of each MH project.",
        "Not by default a store, not by default a service with commercial commitments.",
      ],
      features: [
        { name: "Music", desc: "Latest remix, poster, live photos." },
        { name: "Archive", desc: "Photos from booths, events and posters." },
        { name: "MH ecosystem", desc: "Transparent status for every MH project." },
        { name: "Workflow notes", desc: "Studio principles and conventions." },
        { name: "Contact", desc: "Direct email — no forced signup form." },
      ],
      pipeline: [],
      evidence: ["Live at studiominhhieu.com", "Bilingual Vi / En", "SSR + i18n in place"],
      notReady: ["No commercial commitment", "Not a store"],
      dos: ["Read to understand the MH project context", "Cite when reaching out for collabs"],
      donts: ["Do not assume every item is a shipped product", "Do not infer commercial commitments"],
    },
  },


  principles: [
    { n: "01", title: "Real needs first", body: "A project must start from a problem that actually exists in the work." },
    { n: "02", title: "The user decides", body: "AI helps execute; it does not decide the product's goals." },
    { n: "03", title: "Local-first when it fits", body: "Prefer data on the user's machine with clear control." },
    { n: "04", title: "Never destroy data", body: "Risky operations must have warnings, previews and a way to verify." },
    { n: "05", title: "Do not oversell", body: "Do not call a build, mockup or demo a finished product." },
    { n: "06", title: "Evidence before claims", body: "Status must be backed by source, tests, logs, photos or real video." },
    { n: "07", title: "Personal first, community second", body: "Build for personal needs first; share only when stable enough." },
    { n: "08", title: "READMEs must be useful", body: "State plainly what it is, how to use it, where it stops, and where to start." },
  ],

  statusConvention: [
    { status: "Idea", when: "No source or runnable behaviour yet." },
    { status: "Experiment", when: "There is source or a demo, but not enough verification." },
    { status: "Alpha", when: "The main workflow exists but bugs and unverified gates remain." },
    { status: "Beta", when: "Real users have tried it and a feedback loop is in place." },
    { status: "Stable", when: "Release criteria, tests and support are clearly in place." },
  ],

  notes: {
    eyebrow: "Notes",
    title: "Principles & conventions",
    subtitle:
      "How the studio decides what to build, how it describes projects and where the limits are drawn.",
    principlesHeading: "Building principles",
    statusHeading: "Project status convention",
    tableStatus: "Status",
    tableWhen: "When to use it",
  },

  about: {
    heroPill: "About the studio",
    heroTitleA: "Minh Hieu",
    heroTitleB: "Studio.",
    heroBody:
      "Minh Hieu's personal studio in Saigon — music, tools and workflow notes, logged in chronological order.",
    ctaListen: "Play the latest",
    ctaProjects: "See the MH ecosystem",
    facts: [
      { label: "Operator", value: "1" },
      { label: "Active projects", value: "5" },
      { label: "Time zone", value: "UTC+7" },
      { label: "Commercial releases", value: "0" },
    ],
    manifestoEyebrow: "Principles",
    manifestoTitle: "Evidence before claims",
    manifestoSubtitle:
      "Three short lines that guide every decision in the studio — from how project descriptions are written to how a remix is announced.",
    manifesto: [
      {
        n: "01",
        t: "Real needs first",
        d: "Only build when there is a specific, personal problem. No market guessing, no user assumptions.",
      },
      {
        n: "02",
        t: "Transparent status",
        d: "Idea, experiment, alpha, beta, stable — every project always carries the label it actually has.",
      },
      {
        n: "03",
        t: "No forced collaboration",
        d: "No forced sign-ups, no auto newsletters. Sign in only when there is real business to do.",
      },
    ],
    timelineEyebrow: "Timeline",
    timelineTitle: "Real milestones",
    timeline: [
      { year: "2023", title: "MH seed", desc: "Started logging FL Studio workflow and the first personal remixes." },
      { year: "2024", title: "First tools", desc: "Quantum Inspector and Dowsample appear as internal prototypes." },
      { year: "2025", title: "MH ecosystem", desc: "FileOS and Sample FL reconnect into a chain of tools with shared logic." },
      { year: "2026", title: "Studio Site", desc: "Music, archive and project status go public at studiominhhieu.com." },
    ],
    ctaQuote: "If you want to work together, email first. Sign-in later.",
    ctaEmail: "Send email",
    ctaSignIn: "See the sign-in gate",
  },

  contact: {
    eyebrow: "Contact",
    title: "Talk directly by email",
    subtitle:
      "The studio takes conversations about music collabs, MH tool feedback and public questions. Replies within 24–72 business hours.",
    officialChannel: "Official channel",
    clickToCopy: "Click to copy",
    sendEmail: "Send email",
    copyAddress: "Copy address",
    copied: "Copied ✓",
    copySuccess: "Email copied to clipboard",
    copyError: "Copy failed — please select manually",
    replyLabel: "Reply time",
    replyValue: "24–72h",
    langLabel: "Language",
    langValue: "Vietnamese / English",
    tzLabel: "Time zone",
    tzValue: "UTC+7 · Hanoi",
    sourcePill: "Projects",
    sourceTitle: "MH ecosystem",
    sourceBody: "Status, features and evidence for every MH project — embedded directly on this site.",
    openProjects: "See projects →",

    mainPill: "Main channel",
    mainTitle: "studiominhhieu.com",
    mainBody: "The official site — where every project status change is announced.",
    openWebsite: "Open website ↗",
    quote: "Real needs first. Evidence before claims.",
    quoteBody:
      "When reaching out about a collab, state the goal, deadline, references and technical constraints. The studio does not take requests to buy master files or to release commercially.",
  },

  signIn: {
    pill: "Studio · Open",
    brandA: "Minh Hieu",
    brandB: "Studio.",
    bullets: [
      "Manage unreleased mixes",
      "Internal FL Studio workflow notes",
      "Real-time status of MH projects",
    ],
    motto: "Evidence before claims",
    cardEyebrow: "Sign in",
    version: "v0 preview",
    welcome: "Welcome back",
    invitedText: "Use the email the studio invited. No account?",
    seeAbout: "See the about page",
    emailLabel: "Email",
    passwordLabel: "Password",
    forgot: "Forgot?",
    submitting: "Authenticating…",
    submit: "Enter studio",
    or: "or",
    github: "Continue with GitHub",
    google: "Continue with Google",
    githubToast: "GitHub OAuth will turn on after backend review",
    googleToast: "Google OAuth will turn on after backend review",
    forgotToast: "Password reset will turn on when the backend is online",
    previewToastTitle: "UI preview",
    previewToastDesc: "Backend not connected yet. Real sign-in will turn on after you approve.",
    agree: "By signing in you agree to the",
    principles: "studio principles",
    dot: ".",
  },
} as const;

export default en;
