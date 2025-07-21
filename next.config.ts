import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
};

export default nextConfig;
