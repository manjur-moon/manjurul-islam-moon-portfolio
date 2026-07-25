import { useEffect } from "react";
import { env } from "@/config/env";
import { SEO_DEFAULTS } from "@/data/seo.data";
import type { SeoConfig } from "@/types/seo.types";
import { getAbsoluteUrl } from "@/utils/url.utils";

const setMeta = (attribute: "name" | "property", key: string, content: string): void => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
};

export const useSeo = ({
  title,
  description,
  canonicalPath,
  imagePath = env.defaultOgImage,
  imageAlt = SEO_DEFAULTS.imageAlt,
  type = "website",
  robots = "index, follow",
}: SeoConfig): void => {
  useEffect(() => {
    const canonical = getAbsoluteUrl(canonicalPath);
    const image = getAbsoluteUrl(imagePath);
    document.title = title;
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.append(link);
    }
    link.href = canonical;
    setMeta("name", "description", description);
    setMeta("name", "robots", robots);
    setMeta("property", "og:site_name", env.appName);
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", imageAlt);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  }, [canonicalPath, description, imageAlt, imagePath, robots, title, type]);
};
