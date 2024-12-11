import type { NextConfig } from "next";
import withVideos from "next-videos";

const nextConfig: NextConfig = withVideos({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.oaiusercontent.com",
      },
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
      },
    ],
  },
});

export default nextConfig;
