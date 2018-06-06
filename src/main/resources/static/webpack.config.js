const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'target', 'dist')
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
                    use: 'css-loader'
                }),
                include: path.resolve(__dirname, "app")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PATHS.src, 'index.html'),
            filename: 'index.html',
        }),
        new ExtractTextPlugin("[name]-[hash].css")
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
    entry: "./app/app.module.js",
    output: {
        filename: "bundle.js"
    }
}