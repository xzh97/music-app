
const path = require('path')

module.exports = {
    entry: '../src/App.js',
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
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
        modules: ['../src']
    },
    output: {
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[name].[hash:7].chunk.js',
        path: path.resolve(__dirname, 'dist/')
    }
}