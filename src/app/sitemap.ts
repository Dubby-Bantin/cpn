import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.cpnltd.com.ng/",
      lastModified: new Date(),
    },
    {
      url: "https://www.cpnltd.com.ng/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.cpnltd.com.ng/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.cpnltd.com.ng/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.cpnltd.com.ng/educational",
      lastModified: new Date(),
    },
    {
      url: "https://www.cpnltd.com.ng/leadership",
      lastModified: new Date(),
    },
  ];
}
