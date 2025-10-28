import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // distDir: "docs", // <== tambahkan ini
  basePath: "/portofolio_online",
  assetPrefix: "/portofolio_online/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;