import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { vacations } from "@/data/properties";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/property-owners", "/property-listed", "/vacation-rentals", "/about", "/rental-inquiry", "/management-quote", "/direct-booking", "/contact", "/privacy-policy", "/terms-of-service",
    ...vacations.map((v) => `/vacation-rentals/${v.slug}`)];
  return paths.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : 0.7 }));
}
