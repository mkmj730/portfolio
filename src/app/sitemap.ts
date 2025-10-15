import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://your-portfolio-domain.vercel.app";
  return [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
  ];
}


