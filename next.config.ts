import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-aee81a00e0fe433086dbd4d5f0c050e8.r2.dev',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
