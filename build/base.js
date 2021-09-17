const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const resolve = (filepath) => {
    return path.resolve(__dirname, filepath)
}
module.exports = {
    entry: resolve('../src/entry.js'),
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
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
            '@': resolve('../src'),
        },
        extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
        new htmlPlugin({
            template: resolve('../public/index.html'),
            filename: resolve('../dist/index.html'),
            inject: true,
            hash: true,
        })
    ],
    output: {
        filename: 'js/[name].[hash:7].js',
        chunkFilename: 'js/[name].[hash:7].chunk.js',
        path: resolve('../dist/'),
        publicPath: '/'
    }
}