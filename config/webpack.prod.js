const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const prodConfig = {
  mode: "production",
  target: "browserslist",
};

/**
 * @param {Object} env - Build environment flag. Can either be set to prod or dev
 * @param {Boolean} env.prod - Production flag
 * @param {Boolean} env.dev - Development flag
 */
module.exports = (env) => {
  return merge(common(env.dev), prodConfig);
};
