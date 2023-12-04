/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "clone",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./clonedArt": "./pages/clonedArticles.tsx",
        },
        shared: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;

// [
//   {
//     react: {
//       eager: true,
//       singleton: true,
//       reqiredVersion: false,
//     },
//   },
//   {
//     "react-dom": {
//       eager: true,
//       singleton: true,
//       reqiredVersion: false,
//     },
//   },
// ],
