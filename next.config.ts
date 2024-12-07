import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
