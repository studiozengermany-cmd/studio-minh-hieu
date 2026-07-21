import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { memo, useState } from "react";
import i18n from "@/i18n";
import { projects, statusLabel, statusColor } from "@/content/projects";
import type { Project } from "@/content/projects";
import { Reveal, StaggerGroup, staggerItem, EASE_OUT_EXPO } from "@/components/reveal";

export const Route = createFileRoute("/du-an/")({
  head: () => ({
    meta: [
      { title: "D\u1ef0 \u00c1N \u2014 MINH HIEU STUDIO" },
      {
        name: "description",
        content:
          "C\u00e1c d\u1ef1 \u00e1n mang ti\u1ec1n t\u1ed1 MH \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng nh\u01b0 m\u1ed9t chu\u1ed7i c\u00f3 li\u00ean k\u1ebft.",
      },
    ],
  }),
  component: ProjectsPage,
});

/* ------------------------------------------------------------------ */
/* BACKGROUND                                                           */
/* ------------------------------------------------------------------ */
const BgLayer = memo(function BgLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_10%,rgba(153,132,216,0.07)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_80%_80%,rgba(56,189,248,0.04)_0%,transparent_60%)]" />
    </div>
  );
});

/* ------------------------------------------------------------------ */
/* PAGE HEADER                                                          */
/* ------------------------------------------------------------------ */
const PageHeader = memo(function PageHeader() {
  return (
    <div className="mb-24">
      <motion.span
        className="block text-[11px] font-mono tracking-[0.25em] text-ash-gray/60 uppercase mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      >
        H\u1ec6 SINH TH\u00c1I MH
      </motion.span>
      <motion.h1
        className="font-display text-[clamp(52px,9vw,110px)] leading-[0.9] tracking-[-0.04em] text-ghost-white"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT_EXPO }}
      >
        D\u1ef0<br />
        <span className="text-lavender-pulse italic">\u00c1N.</span>
      </motion.h1>
      <motion.p
        className="mt-8 max-w-[460px] text-[15px] leading-relaxed text-ash-gray"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: EASE_OUT_EXPO }}
      >
        C\u00e1c d\u1ef1 \u00e1n mang ti\u1ec1n t\u1ed1 MH \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng nh\u01b0 m\u1ed9t chu\u1ed7i c\u00f3 li\u00ean k\u1ebft,
        kh\u00f4ng ph\u1ea3i c\u00e1c repository r\u1eddi r\u1ea1c.
      </motion.p>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/* ECOSYSTEM FLOW — minimal text pipeline                              */
/* ------------------------------------------------------------------ */
const EcoFlow = memo(function EcoFlow() {
  const nodes = [
    "Quantum",
    "Extension",
    "FileOS",
    "Sample FL",
    "Studio",
  ];
  return (
    <Reveal className="mb-20">
      <div className="flex flex-wrap items-center gap-0">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <span className="text-[12px] font-mono text-steel-gray/70 px-2 py-1">
              {node}
            </span>
            {i < nodes.length - 1 && (
              <span className="text-white/15 text-[11px] px-1">\u2192</span>
            )}
          </div>
        ))}
        <span className="ml-4 text-[11px] font-mono tracking-widest text-lavender-pulse/40 uppercase">
          pipeline
        </span>
      </div>
    </Reveal>
  );
});

/* ------------------------------------------------------------------ */
/* PROJECT ITEM — tracklist row style                                  */
/* ------------------------------------------------------------------ */
const ProjectItem = memo(function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const colorClass = statusColor[project.status] ?? "text-ash-gray";

  return (
    <motion.div
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link
        to="/du-an/$slug"
        params={{ slug: project.slug }}
        className="group relative block"
      >
        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-lavender-pulse/[0.04] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered && !reduce ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />

        <div className="relative flex items-baseline gap-6 border-t border-white/8 py-7 px-2 transition-colors duration-300 group-hover:border-lavender-pulse/20">
          {/* Big step number */}
          <span className="font-display text-[42px] md:text-[54px] leading-none tracking-[-0.04em] text-white/10 group-hover:text-lavender-pulse/30 transition-colors duration-300 flex-shrink-0 w-[60px] md:w-[80px]">
            {num}
          </span>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-ash-gray/60">
                {project.role}
              </span>
              <span className="text-white/20 text-[10px]">/</span>
              <span className={`text-[11px] font-mono uppercase tracking-wider ${colorClass}`}>
                {statusLabel[project.status]}
              </span>
            </div>
            <h2 className="font-display text-[24px] md:text-[32px] leading-tight tracking-[-0.02em] text-ghost-white group-hover:text-white transition-colors duration-300">
              {project.title}
            </h2>
            <p className="mt-2 text-[13px] md:text-[14px] text-ash-gray leading-relaxed max-w-[600px] line-clamp-2">
              {project.oneLine}
            </p>
          </div>

          {/* Right meta */}
          <div className="hidden md:flex flex-col items-end gap-2 flex-shrink-0 ml-4">
            <span className="text-[11px] font-mono text-steel-gray">
              {project.language}
            </span>
            {project.updatedAt && (
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
                {project.updatedAt}
              </span>
            )}
          </div>

          {/* Arrow */}
          <motion.span
            className="hidden md:block text-[18px] text-lavender-pulse flex-shrink-0 ml-2"
            animate={{ opacity: hovered && !reduce ? 1 : 0, x: hovered && !reduce ? 0 : -10 }}
            transition={{ duration: 0.2 }}
          >
            \u2192
          </motion.span>
        </div>
      </Link>
    </motion.div>
  );
});

/* ------------------------------------------------------------------ */
/* FOOTER CTA                                                          */
/* ------------------------------------------------------------------ */
const FooterCta = memo(function FooterCta() {
  return (
    <Reveal className="mt-4 pt-16 border-t border-white/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="text-[12px] font-mono uppercase tracking-widest text-ash-gray/50">
          H\u1ec6 SINH TH\u00c1I
        </p>
        <p className="mt-1 text-[15px] text-ash-gray">
          Xem gi\u1edbi thi\u1ec7u h\u1ec7 sinh th\u00e1i v\u00e0 MH Master Memory
        </p>
      </div>
      <Link
        to="/he-sinh-thai"
        className="flex items-center gap-2 text-[14px] font-medium text-ghost-white border border-white/15 rounded-full px-6 py-3 hover:border-lavender-pulse/50 hover:text-lavender-pulse transition-colors duration-300"
      >
        Xem h\u1ec7 sinh th\u00e1i \u2192
      </Link>
    </Reveal>
  );
});

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */
function ProjectsPage() {
  return (
    <div className="relative px-6 pt-28 pb-24">
      <BgLayer />
      <div className="mx-auto max-w-[1000px]">
        <PageHeader />
        <EcoFlow />
        <StaggerGroup className="" stagger={0.07}>
          {projects.map((p, i) => (
            <ProjectItem key={p.slug} project={p} index={i} />
          ))}
        </StaggerGroup>
        <FooterCta />
      </div>
    </div>
  );
}
