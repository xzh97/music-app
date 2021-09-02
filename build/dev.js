const baseConfig = require('./base')
const devConfig = {
    mode: 'development',
    devServer:{
        hot: true, // 开启热更新
        host: 'localhost',
        port: 3030,
        open: false,
    }
}

const devFinalConfig = Object.assign({}, baseConfig, devConfig)
module.exports = devFinalConfig
