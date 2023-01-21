/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
