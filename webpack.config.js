/*!
 * WebPack Config - v1.0 (2019-11-20T09:34:11+0800)
 * Copyright 2005-2019 56.com
 */

const path = require('path');

// 清除输出目录文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//let entryPath = './src/js/app/page/home/index.js';
let entryPath = {
	index: './src/js/app/page/home/index.js',
	page: './src/js/app/page/home/page.js'
};
/**
let entryPath = {
	index: './src/js/app/page/home/index.js',
	page: './src/js/app/page/home/page.js'
}
*/
//let outputPath = entryPath.replace('src', 'dist');

//console.log(outputPath);

module.exports = {
	mode: 'production',
	entry: entryPath,
	output: {
		path: path.resolve(__dirname, './dist/js/app/page/home'),
		filename: '[name].js'
		//filename: '[name]-[hash:8].js'
	},
	module: {
		rules: [{
			//test: /\.s[ac]ss$/i,
			test: /\.js$/i,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
	},

	watch: true,
	watchOptions: {
		poll: 1000, // 每秒询问多少次
		aggregateTimeout: 500,  //防抖 多少毫秒后再次触发
		ignored: /node_modules/ //忽略时时监听
	},

	plugins: [
		// 清空与 output.path 目录文件
		new CleanWebpackPlugin()
		/**
		 * 清空指定目录，需绝对路径
		new CleanWebpackPlugin({
			dry: true,
			cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, './dist/*'), path.resolve(__dirname, './test/sdk')]
		})
		*/
	]
};
