// import type { NextConfig } from "next";
import withVideos from "next-videos";

const nextConfig = withVideos({
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
      {
        protocol: "https",
        hostname: "www.outsourceglobal.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      { protocol: "https", hostname: "cpnltd.com.ng" },
    ],
  },
});

export default nextConfig;
