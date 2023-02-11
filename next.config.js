/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "imgur.com",
    ],
  },
  experimental: {
    appDir: false,
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
