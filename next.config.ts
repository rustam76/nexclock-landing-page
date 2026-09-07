import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Avoid hanging / stack overflows while collecting build traces on Vercel.
  outputFileTracingExcludes: {
    "*": [
      "**/.superpowers/**",
      "**/docs/**",
      "**/node_modules/@swc/core*/**",
      "**/node_modules/esbuild/**",
      "**/node_modules/webpack/**",
      "**/node_modules/typescript/**",
    ],
  },
};

export default nextConfig;
