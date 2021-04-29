const entry = require("./entry");
const webpackModule = require("./module");
const plugins = require("./plugins");

const paths = require("./paths");

/**
 * @param {Object} env - Build environment flag. Can either be set to prod or dev
 * @param {Boolean} env.prod - Production flag
 * @param {Boolean} env.dev - Development flag
 * @type {import('webpack').Configuration}
 */

module.exports = (env) => {
    const mode = env.dev ? "development" : "production";

    return {
        mode,
        entry: entry(),
        devtool: env.dev ? "inline-source-map" : false,

        module: webpackModule(),
        plugins: plugins(mode),
        resolve: {
            extensions: [".js", ".ts", ".json", ".jsx", ".tsx"],
            alias: paths.alias,
        },

        // optimization: {
        //   splitChunks: {
        //     chunks: "all",
        //   },
        // },
    };
};
