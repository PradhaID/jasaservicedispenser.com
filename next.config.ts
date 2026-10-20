import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: "/sample/dispenserfix",
  images: {
    path: "/sample/dispenserfix/_next/image",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
