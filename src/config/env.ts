const getValue = (value: string | undefined, fallback: string): string =>
  value?.trim() || fallback;
const getSiteUrl = (value: string | undefined): string => {
  try {
    return new URL(getValue(value, "http://localhost:5173"))
      .toString()
      .replace(/\/$/, "");
  } catch {
    return "http://localhost:5173";
  }
};

export const env = Object.freeze({
  appName: getValue(import.meta.env.VITE_APP_NAME, "Manjurul Islam Portfolio"),
  siteUrl: getSiteUrl(import.meta.env.VITE_SITE_URL),
  defaultOgImage: getValue(
    import.meta.env.VITE_DEFAULT_OG_IMAGE,
    "/images/social/manjurul-islam-portfolio-og.svg",
  ),
});
