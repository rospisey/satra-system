/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
}
const withImages = require('next-images')

module.exports = nextConfig
module.exports = withImages()
module.exports = {
  images: {
    domains: ["cdn.pixabay.com", "dog.ceo"],
    deviceSizes: [670, 750, 828, 1080, 1224, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
};