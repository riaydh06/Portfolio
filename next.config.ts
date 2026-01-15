import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopackFileSystemCacheForBuilds: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
