import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";
import type { Plugin } from "vite";
import { defineConfig, loadEnv } from "vite";
import { projects } from "./src/data/projects.data";

const normalizeSiteUrl = (value: string | undefined): string => {
  try {
    return new URL(value || "http://localhost:5173").toString().replace(/\/$/, "");
  } catch {
    return "http://localhost:5173";
  }
};

const escapeXml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const createSeoFilesPlugin = (siteUrl: string): Plugin => ({
  name: "generate-seo-files",
  apply: "build",
  async closeBundle() {
    const output = fileURLToPath(new URL("./dist", import.meta.url));
    await mkdir(output, { recursive: true });
    const projectUrls = projects
      .filter((project) => project.status === "published")
      .map(
        (project) =>
          `\n  <url>\n    <loc>${escapeXml(`${siteUrl}/projects/${encodeURIComponent(project.slug)}`)}</loc>\n    <lastmod>${escapeXml(project.completionDate)}</lastmod>\n  </url>`,
      )
      .join("");
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${escapeXml(`${siteUrl}/`)}</loc>\n  </url>${projectUrls}\n</urlset>\n`;
    const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
    await Promise.all([
      writeFile(`${output}/sitemap.xml`, sitemap, "utf8"),
      writeFile(`${output}/robots.txt`, robots, "utf8"),
    ]);
  },
});

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      tailwindcss(),
      createSeoFilesPlugin(normalizeSiteUrl(env.VITE_SITE_URL)),
    ],
    resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
    server: { host: true, port: 5173 },
    preview: { host: true, port: 4173 },
    build: { target: "es2022", sourcemap: false },
  };
});
