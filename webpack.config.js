const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()],
   
    resolve: {
        extensions: [".js", ".jsx", ".ts"],
        preferRelative: true
    },
};

