const { merge } = require("webpack-merge");

const common = require("./webpack.common");

/**
 * @type {import('webpack').Configuration}
 */
const prodConfig = {
  mode: "production",
  target: "browserlist",
};

module.exports = merge(common(), prodConfig);
