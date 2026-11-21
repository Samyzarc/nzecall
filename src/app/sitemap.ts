import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/approche", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/mentions-legales", priority: 0.3 },
    { path: "/confidentialite", priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
