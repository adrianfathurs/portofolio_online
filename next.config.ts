import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/portofolio_online",
  assetPrefix: "/portofolio_online/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
