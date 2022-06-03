/** @type {import('next').NextConfig} */

const MEDIA_DOMAIN = process.env.MEDIA_DOMAIN;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
