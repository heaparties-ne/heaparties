import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heaparties-ne.co.uk";

  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/packages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/fantails-wetheral-carlisle-wedding-dj`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/pat-testing-week`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/choosing-your-first-dance`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/north-east-wedding-venue-dj-checklist`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/enquire`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
