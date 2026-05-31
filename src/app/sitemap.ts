import type { MetadataRoute } from "next";
import { kotaData } from "@/lib/siteData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://putraranakahtrans.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/armada`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/paket-wisata`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tentang-kami`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontak`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const kotaPages: MetadataRoute.Sitemap = Object.keys(kotaData).map((kota) => ({
    url: `${base}/rental-mobil/${kota}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...kotaPages];
}
