const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    context: __dirname,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader?cacheDirectory"
                }
            },
            {
                test: '/\.scss$/',
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // オプションでCSS内のurl()メソッドの取り込みを禁止する
                            url: false,
                            // CSSの空白文字を削除する
                            minimize: true,
                            // ソースマップを有効にする
                            sourceMap: true,

                        }
                    },
                ],
            }
        ]
    },
    entry: [
        './frontend/src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'frontend/static/frontend/dist'),
        publicPath: 'http://localhost:3000/frontend/static/frontend/dist/',
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
        port: 3000,
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new CleanWebpackPlugin([path.resolve('./frontend/static/frontend/dist/')]),
        new webpack.HotModuleReplacementPlugin(),
    ],
});