'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'cjs.js',

    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],

    },
    devtool: 'inline-source-map',
    plugins: [
    ]
};
