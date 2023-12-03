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

  const BLOG_REMOTE_URL = env.BLOG_REMOTE_URL ?? "http://localhost:3000";

  config.plugins?.push(
    new webpack.container.ModuleFederationPlugin({
      name: "blog",
      filename: "remoteEntry.js",
      remotes: {
        blog: `blog@${BLOG_REMOTE_URL}/remoteEntry.js`,
      },
      shared: {
        ...PackageJson.dependencies,
        react: {
          // Notice shared are NOT eager here.
          requiredVersion: false,
          singleton: true,
        },
      },
    })
  );

  return config;
};
