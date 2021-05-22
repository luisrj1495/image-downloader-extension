const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const paths = require("./paths");

/**

 * @type {import('webpack').Configuration}
 */
const devConfig = {
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: paths.appBuild,
    compress: true,
    port: 9000,
    writeToDisk: true,
    disableHostCheck: true,
  },
};

/**
 * @param {Object} env - Build environment flag. Can either be set to prod or dev
 * @param {Boolean} env.prod - Production flag
 * @param {Boolean} env.dev - Development flag
 */
module.exports = (env) => {
  return merge(common(env.dev), devConfig);
};
