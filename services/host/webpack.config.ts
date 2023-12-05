import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import webpack from "webpack";
import { buildWebpack } from "@packages/build-config";
import { BuildMode, BuildPaths } from "@packages/build-config";
import PackageJson from "./package.json";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  BLOG_REMOTE_URL?: string;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 4000,
    mode: env.mode ?? "development",
    paths: paths,
  });

  const NEXT_REMOTE_URL = "http://localhost:3000";
  const CLONE_REMOTE_URL = "http://localhost:5000";

  config.plugins?.push(
    new webpack.container.ModuleFederationPlugin({
      name: "react-host",
      filename: "remoteEntry.js",
      remotes: {
        "next-remote": `next-remote@${NEXT_REMOTE_URL}/_next/static/chunks/remoteEntry.js`,
        clone: `clone@${CLONE_REMOTE_URL}/_next/static/chunks/remoteEntry.js`,
      },
      exposes: {},
      shared: {}, // {
      //   ...PackageJson.dependencies,
      //   react: {
      //     eager: true,
      //     requiredVersion: PackageJson.dependencies["react"],
      //   },
      //   "react-router-dom": {
      //     eager: true,
      //     requiredVersion: PackageJson.dependencies["react-router-dom"],
      //   },
      //   "react-dom": {
      //     eager: true,
      //     requiredVersion: PackageJson.dependencies["react-dom"],
      //   },
      // },
    })
  );

  return config;
};
