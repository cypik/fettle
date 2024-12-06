/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Set the basePath for GitHub Pages (if using a sub-path, e.g., https://yourusername.github.io/fettle)
  basePath: production ? '/fettle' : '', // Replace 'fettle' with your repo name

  // Set assetPrefix to ensure static assets are loaded correctly on GitHub Pages
  assetPrefix: production ? '/fettle/' : '', // Replace 'fettle' with your repo name

  // Enable static export for Next.js (for GitHub Pages or other static hosts)
  output: 'export',

  // Disable Next.js image optimization (GitHub Pages doesn't support it)
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
