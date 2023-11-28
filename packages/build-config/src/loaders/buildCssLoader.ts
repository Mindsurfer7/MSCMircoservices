import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import 'import-glob-loader';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.(s[ac]ss|css)$/i,
    //include: /node_modules/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => Boolean(path.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },

      'sass-loader',
      'import-glob-loader',
    ],
  };
}
