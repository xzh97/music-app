const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/entry.js'),
    module: {
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg|webp|woff)$/,
                use: {
                    loader: 'url-loader',
                    options:{
                        limit: 1024,
                    }
                }
            }
        ]
    },
    resolve:{
        alias:{
            '@': '../src',
        },
        extensions: ['js', 'jsx', 'json'],
    },
    plugins: [
        new htmlPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
        })
    ],
    output: {
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[name].[hash:7].chunk.js',
        path: path.resolve(__dirname, '../dist/')
    }
}