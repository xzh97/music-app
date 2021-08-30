module.exports = {
    entry: '../src/App.js',
    module: {
        rules:[
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
}