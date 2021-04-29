const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const paths = require("./paths");

/**
 * @type {import('webpack').Configuration}
 */
const devConfig = {
    mode: "development",
    target: "web",
    devServer: {
        contentBase: paths.appBuild,
        compress: true,
        port: 9000,
        writeToDisk: true,
    },
};

module.exports = merge(common(), devConfig);
