import type { MetadataRoute } from "next";
import { isPreview, site } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Preview builds block all crawling to avoid duplicate content with the live GHL site.
  if (isPreview) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/", disallow: "/thank-you/" }, sitemap: `${site.url}/sitemap.xml` };
}
