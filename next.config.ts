import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.oaiusercontent.com",
      },
    ],
  },
};

export default nextConfig;
