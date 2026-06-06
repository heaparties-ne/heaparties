import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heaparties-ne.co.uk";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/enquire`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
