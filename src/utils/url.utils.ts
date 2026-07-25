import { env } from "@/config/env";
export const getAbsoluteUrl = (pathOrUrl: string): string => {
  try {
    return new URL(pathOrUrl).toString();
  } catch {
    return `${env.siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
  }
};
