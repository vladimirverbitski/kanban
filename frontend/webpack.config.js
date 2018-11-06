const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackSprocketsRailsManifestPlugin = require("webpack-sprockets-rails-manifest-plugin");
const WebpackCopyAfterBuildPlugin = require('webpack-copy-after-build-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.css?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader'
                    ]
                }),
                include: path.resolve(__dirname, "app")
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PATHS.src, 'index.html'),
            filename: 'index.html'
        }),

        new ExtractTextPlugin("styles.css"),

        new WebpackSprocketsRailsManifestPlugin(),
        new WebpackCopyAfterBuildPlugin({
                "application-bundle": "../../backend/src/main/resources/static/app.js"
            }, {
                absoluteMappingPaths : false,
            }
        ),
        new CopyWebpackPlugin([
            {
                from: path.resolve(PATHS.dist, 'index.html'),
                to: '../../backend/src/main/resources/static/',
                toType: 'file'
            },
        ], options)
    ],
    cache: true,
    devtool: '#inline-source-map',
    devServer: {
        port: 8888,
        historyApiFallback: {
            index: '/'
        },
        hot: true,
        proxy: {
            '/api/*': 'http://localhost:9090'
        }
    },
    entry: {
        "application-bundle": "./app/app.module.js",
    },
    output: {
        path: PATHS.dist,
        filename: 'app.js'
    }
}