import { MetadataRoute } from "next";
import { ROOMS_DATA } from "@/data/rooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hotelkcs.com";

  const staticRoutes = [
    "",
    "/about",
    "/rooms",
    "/dining",
    "/gallery",
    "/facilities",
    "/booking",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/rooms" || route === "/booking" ? 0.9 : 0.8,
  }));

  const roomRoutes = ROOMS_DATA.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...roomRoutes];
}

