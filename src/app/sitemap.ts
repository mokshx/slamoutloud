import type { MetadataRoute } from "next";

const siteUrl = "https://slamoutloud.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/programmes", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/afa", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/jijivisha", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/work-with-us", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
