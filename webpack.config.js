var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development';

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = (MODE === 'development');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: MODE,

    context: __dirname,

    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
        port: 3000,
        
    },

    entry: [
        './frontend/static/frontend/main'
    ],

    output: {
        path: path.resolve('./frontend/static/frontend/'),
        filename: 'main.js',
        publicPath: 'http://localhost:3000/frontend/static/frontend/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    },

    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        noEmitOnErrors: true
    },

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
                            sourceMap: enabledSourceMap,

                        }
                    },
                ],
            }
        ]
    }
};

