const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['jquery', 'bootstrap']
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.ejs'
        }),
        new InlineManifestWebpackPlugin({
            name: 'webpackManifest'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015'], {modules: false}]
                }
            },
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080
    },
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    },
    performace: {
        hints: false
    },
    devtool: 'source-map'
};