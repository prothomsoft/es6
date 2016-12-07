var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
    entry: {
        react_app: './react_app.js'
        //promise: './js/promise.js',
        //calculator: './js/calculator.js',
        //ratefinder: './js/ratefinder.js'
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
            },
            {   test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ]
    },
    stats: {
        colors: true
    },
    plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),        
		new HtmlWebpackPlugin({
			template: './react_app.html',
			title: 'Webpack App'
		}),
		new webpack.optimize.DedupePlugin()
	]
};