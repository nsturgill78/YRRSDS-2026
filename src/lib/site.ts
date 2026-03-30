import { site } from "@/data/site-data";

export const siteUrl = "https://yrrsds2026.example.com";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export { site };
