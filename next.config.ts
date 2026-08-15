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
  async redirects() {
    return [
      {
        source: '/programs-and-impact/the-jijivisha-fellowship',
        destination: '/jijivisha',
        permanent: true,
      },
      {
        source: '/why-we-exist',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/get-involved/volunteer',
        destination: '/work-with-us',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
