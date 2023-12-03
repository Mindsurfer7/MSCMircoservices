import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import webpack from "webpack";
import { buildWebpack } from "@packages/build-config";
import { BuildMode, BuildPaths } from "@packages/build-config";
import PackageJson from "./package.json";

interface EnvVariables {
  mode: BuildMode;
  port: number;
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

  config.plugins?.push(new webpack.container.ModuleFederationPlugin({}));

  return config;
};
