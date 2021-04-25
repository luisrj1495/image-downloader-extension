const path = require("path")

const entry = require("./entry")
const webpackModule = require("./module")
const plugins = require("./plugins")


/**
 * @param {Object} env - Build environment flag. Can either be set to prod or dev
 * @param {Boolean} env.prod - Production flag
 * @param {Boolean} env.dev - Development flag
 */

module.exports = (env) => {
    console.log(env)
    const mode = env.dev ? "development" : "production"

    return {
        mode,
        entry: entry(),
        devtool: env.dev ? "inline-source-map" : false,
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "../dist"),
            publicPath: "./"
        },
        module: webpackModule(),
        plugins: plugins(mode),
        resolve: {
            extensions: [".js", ".ts", ".json", ".jsx", ".tsx"],
        },
    }

}