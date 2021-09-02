const baseConfig = require('./base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:7].css',
            chunkFilename: 'css/[name].[hash:7].chunk.css'
        })
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: [MiniCssExtractPlugin.loader, 'css-loader'],
    //         },
    //         {
    //             test: /\.(scss)$/,
    //             use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    //         },
    //     ]
    // },
    optimization:{
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: 4,
                terserOptions:{
                    compress:{
                        drop_console: true,
                    }
                },
                extractComments: false,
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
}

const prodFinalConfig = Object.assign({}, baseConfig, prodConfig)

module.exports = prodFinalConfig