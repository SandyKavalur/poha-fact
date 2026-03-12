import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gavishripoha.com",
      lastModified: new Date(),
    },
  ];
}
