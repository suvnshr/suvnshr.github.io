import type { NextConfig } from "next";

const debug = process.env.NODE_ENV !== "production";
const githubUsername = "suvnshr";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: !debug ? `https://${githubUsername}.github.io/` : "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

