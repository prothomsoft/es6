var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        promise: './js/promise.js',
        calculator: './js/calculator.js',
        ratefinder: './js/ratefinder.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};