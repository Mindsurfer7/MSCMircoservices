/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const CLONE_REMOTE_URL = "http://localhost:5000";
const REACT_REMOTE_URL = "http://localhost:4000";

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "next-remote",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./MainPage": "./pages/third.tsx",
        },
        shared: {},
      })
    );
    return config;
  },
};

module.exports = nextConfig;

// new webpack.container.ModuleFederationPlugin({
//     name: "blog",
//     filename: "remoteEntry.js",
//     exposes: {
//       "./BlogModule": "./src/app/page.tsx",
//     },
//     shared: [
//       {
//         react: {
//           eager: true,
//           singleton: true,
//           requiredVersion: false,
//         },
//       },
//       {
//         "react-dom": {
//           eager: true,
//           singleton: true,
//           requiredVersion: false,
//         },
//       },
//     ],
//   })
// const sharedDependencies = Object.entries(packageJson.dependencies).map(
//     ([packageName, packageVersion]) => ({
//       [packageName]: {
//         eager: true,
//         singleton: true,
//         requiredVersion: packageVersion,
//       },
//     })
//   );

// const sharedDependencies = Object.keys(packageJson.dependencies).reduce(
//   (acc, packageName) => {
//     acc[packageName] = {
//       eager: true,
//       singleton: true,
//       requiredVersion: packageJson.dependencies[packageName],
//     };
//     return acc;
//   },
//   {}
// );
// {
//   ...sharedDependencies,
//   react: {
//     eager: true,
//     singleton: true,
//     requiredVersion: packageJson.dependencies.react,
//   },
//   "react-dom": {
//     eager: true,
//     singleton: true,
//     requiredVersion: packageJson.dependencies["react-dom"],
//   },
// },
