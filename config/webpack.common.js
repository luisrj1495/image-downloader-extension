const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = require("./paths");
const plugins = require("./plugins");

/**
 * @param {Object} env - Build environment flag. Can either be set to prod or dev
 * @param {Boolean} env.prod - Production flag
 * @param {Boolean} env.dev - Development flag
 * @type {import('webpack').Configuration}
 */
module.exports = (env) => {
    return {
        entry: {
            "image-page": paths["image-page"],
            "browser-action": paths["browser-action"],
        },
        output: {
            filename: "[name].js",
            path: paths.appBuild,
            publicPath: paths.publicPath,
            clean: true,
        },
        resolve: {
            extensions: [".js", ".ts", ".json", ".jsx", ".tsx"],
            alias: paths.alias,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader", // Or use: ["ts-loader"]
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
            ],
        },
        plugins: plugins(env.dev),
    };
};
