const { merge } = require('webpack-merge')

const devConfig = require('./dev')
const prodConfig = require('./prod')
const baseConfig = require('./base')

console.log('appEnv ', process.env.appEnv);
let configMap = {
    dev: devConfig,
    prod: prodConfig,
}
let finalConfig = merge(baseConfig, configMap[process.env.appEnv])

console.log('finalConfig', finalConfig);
module.exports = finalConfig