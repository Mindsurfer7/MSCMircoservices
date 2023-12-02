import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import ReactRefreshTypescript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions["rules"] {
  const isDev = options.mode === "development";

  const svgLoader = {
    test: /\.svg$/,
    use: [{ loader: "@svgr/webpack", options: { icon: true } }],
  };
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
        compilerOptions: { noEmit: false },
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypescript()].filter(Boolean),
        }),
      },
    },
    exclude: /node_modules/,
  };

  return [assetLoader, scssLoader, tsLoader, svgLoader];
}

//transpileOnly: true отключает проверку типов к тс лоадера.
