import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['newsapi.org'], 
  },
  env: {
    NEXT_PUBLIC_API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN, 
  },
  reactStrictMode: true,
};

export default nextConfig;