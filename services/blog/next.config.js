/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        name: "blog",
        filename: "remoteEntry.js",
        exposes: {
          "./BlogModule": "./src/app/page.tsx",
        },
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            "react-dom": {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );

    return config;
  },
};

module.exports = nextConfig;

// {
//     "react-dom": {
//       eager: true,
//     },
//   },
