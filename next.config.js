/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  outputFileTracingRoot: process.cwd(),
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // Use trailing slash for static export compatibility (production only)
  trailingSlash: process.env.NODE_ENV === 'production',
};

module.exports = nextConfig;
