const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const isProduction = process.env.NODE_ENV == "production";

const config = {
    target: "node",
    context: path.resolve(__dirname),
    entry: "./src/index.ts",
    output: {
        library: {
            // name: "autoforge",
            type: "commonjs2",
            export: "default"
        },
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
    },
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            }
        ],
    },
    resolve: { extensions: ['.ts', '.js'] },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
