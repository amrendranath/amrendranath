import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/webp", "image/avif"],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
