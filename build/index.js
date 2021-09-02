const devConfig = require('./dev.js')
const prodConfig = require('./prod.js')

console.log('appEnv ', process.env.appEnv);
let finalConfig = process.env.appEnv === 'dev' ? devConfig : prodConfig

console.log('finalConfig', finalConfig.module.rules);
module.exports = finalConfig