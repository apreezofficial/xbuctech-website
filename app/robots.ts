import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mail", "/api/"],
    },
    sitemap: "https://xbuc.pxxl.dev/sitemap.xml",
  };
}
