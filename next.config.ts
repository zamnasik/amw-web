// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // remove: output: "export",
  images: { unoptimized: true }, // optional
  eslint: { ignoreDuringBuilds: true },     // keep if you want fast deploys
  typescript: { ignoreBuildErrors: true },  // keep if you want fast deploys
};

export default nextConfig;
