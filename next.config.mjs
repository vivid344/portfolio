/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: true,
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

export default nextConfig;
