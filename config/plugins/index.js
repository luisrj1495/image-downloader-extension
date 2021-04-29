const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const VERSION = require("../../package.json").version;
const dev = require("./dev");
const prod = require("./prod");
const paths = require("../paths");

/**
 * @param {boolean} isDev
 */

module.exports = (isDev) => {
  const plugins = isDev ? dev() : prod();

  return [
    ...plugins,

    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      filename: "app.html",
      cache: true,
      inject: "body",
      minify: !isDev
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : undefined,
      chunks: ["browser-action"],
    }),

    /**
     * Clean up files with each build
     */
    new CleanWebpackPlugin(),
    /**
     * Copy the manifest, assets and app.html
     */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.manifestJson,
          to: paths.manifestJsonBuild,
          transform: (content) => {
            const manifestJSON = JSON.parse(content.toString("utf-8"));

            // Set the version
            manifestJSON.version = VERSION;

            if (isDev) {
              manifestJSON["content_security_policy"] = "script-src 'self' 'unsafe-eval'; object-src 'self'";
            }

            return JSON.stringify(manifestJSON, null, 2);
          },
        },
        {
          from: paths.assets,
          to: paths.assetsBuild,
        },
      ],
    }),
  ];
};
