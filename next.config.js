/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "imgur.com",
      "avatars.githubusercontent.com",
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
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
