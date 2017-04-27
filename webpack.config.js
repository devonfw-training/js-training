module.exports = {
    entry: './app',
    output: {
        path: '/build',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true
    }
}