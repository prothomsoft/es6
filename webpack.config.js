var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        react_app: './js/react_app.js',
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
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};