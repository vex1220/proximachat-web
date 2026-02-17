import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from the Anima CDN used in components
  images: {
    domains: ["c.animaapp.com"],
  },
};

export default nextConfig;
