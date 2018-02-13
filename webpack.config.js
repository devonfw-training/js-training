module.exports = {
    entry: './app',
    output: {
        path: '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['env']
            }
        }]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}