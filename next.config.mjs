/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/iraq-ziyarat", destination: "/packages/iraq", permanent: true },
      { source: "/iraq-ziyarat/standard", destination: "/packages/iraq", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
