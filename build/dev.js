const { merge } = require('webpack-merge')
const baseConfig = require('./base')
const devConfig = {
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    devServer:{
        hot: true, // 开启热更新
        host: 'localhost',
        port: 3030,
        open: false,
    }
}

module.exports = merge(baseConfig, devConfig)
