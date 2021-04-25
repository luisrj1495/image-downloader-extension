const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpack = require('webpack');

module.exports = () => {
    return [
        // new BundleAnalyzerPlugin(),
        new webpack.HotModuleReplacementPlugin({
            
        })
    ]
}