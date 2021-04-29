const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
    return [new MiniCssExtractPlugin()];
};
