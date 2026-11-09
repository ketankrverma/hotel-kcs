import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/booking-confirmation"],
      },
    ],
    sitemap: "https://hotelkcs.com/sitemap.xml",
  };
}

