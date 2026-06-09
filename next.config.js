/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    unoptimized: true,
  },
  // Use trailing slash for static export compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
