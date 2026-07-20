import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/projects";


const BASE_URL = "https://studiominhhieu.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/am-nhac", "/tu-lieu", "/du-an", "/ghi-chu", "/gioi-thieu", "/lien-he"];
        const projectPaths = projects.map((p) => `/du-an/${p.slug}`);
        const all = [...staticPaths, ...projectPaths];

        const urls = all
          .map(
            (p) =>
              `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p === "/" ? "1.0" : "0.7"}</priority>\n  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
