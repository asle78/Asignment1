var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['webpack-hot-middleware/client', "./client.js"],
    output: {
        filename: "bundle.js",
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()

    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query:
                {
                    presets:['react', 'es2015', 'react-hmre']
                }
            }
        ]
    }

};