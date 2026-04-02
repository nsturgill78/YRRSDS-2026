import { site } from "@/data/site-data";

function normalizeBasePath(value?: string) {
  if (!value || value === "/") {
    return "";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

export const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yrrsds2026.example.com";

export function assetPath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}

export function absoluteUrl(path = "/") {
  const resolvedPath = path.startsWith("/") ? `${basePath}${path}` || "/" : path;
  return new URL(resolvedPath, siteUrl).toString();
}

export { site };
