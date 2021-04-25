const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const VERSION = require("../../package.json").version;
const dev = require("./dev");
const prod = require("./prod");

/**
 * @param {"production" | "development"} env
 */

module.exports = (env) => {
  const plugins = env === "development" ? dev() : prod();

  return [
    ...plugins,
    /**
     * Clean up files with each build
     */
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, "../../dist"),
        path.resolve(__dirname, "../../bundle.zip"),
      ],
    }),
    /**
     * Copy the manifest, assets and app.html
     */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../../src/public/manifest.json"),
          to: path.resolve(__dirname, "../../dist/manifest.json"),
          transform: (content) => {
            const manifestJSON = JSON.parse(content.toString("utf-8"));

            // Set the version
            manifestJSON.version = VERSION;

            return JSON.stringify(manifestJSON, null, 2);
          },
        },
        {
          from: path.resolve(__dirname, "../../src/public/assets"),
          to: path.resolve(__dirname, "../../dist/assets/"),
        },
        {
          from: path.resolve(__dirname, "../../src/public/app.html"),
          to: path.resolve(__dirname, "../../dist/app.html"),
        },
      ],
    }),
  ];
};
