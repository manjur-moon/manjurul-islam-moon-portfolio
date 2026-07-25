import process from "node:process";
const input = process.argv[2]?.trim();
if (!input) {
  console.error("Usage: npm run verify:production -- https://your-domain.com");
  process.exit(1);
}
const base = new URL(input).toString().replace(/\/$/, "");
for (const path of [
  "/",
  "/favicon.svg",
  "/robots.txt",
  "/sitemap.xml",
  "/projects/__route_check__",
]) {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) {
    console.error(`Failed: ${path}`);
    process.exitCode = 1;
  } else {
    console.log(`Passed: ${path}`);
  }
}
