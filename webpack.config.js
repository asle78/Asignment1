var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        "./client.js"
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname,'client.js'),
                path.join(__dirname, 'Components')],
                query:
                {
                    presets:['react', 'es2015', 'react-hmre']
                }
            }
        ]
    }
};