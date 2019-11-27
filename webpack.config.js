/*!
 * WebPack Config - v1.0 (2019-11-20T09:34:11+0800)
 * Copyright 2005-2019 56.com
 */

const path = require('path');

let entryPath = './src/js/app/page/home/index.js';
let outputPath = entryPath.replace('src', 'dist');

console.log(outputPath);

module.exports = {
	entry: entryPath,
	output: {
		path: path.resolve(__dirname, './dist/js/app/page/home'),
		filename: 'index.js'
		//filename: '[name]-bundle.js'
	},
	module: {
		rules: [{
			//test: /\.s[ac]ss$/i,
			test: /\.js$/i,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	}
};
