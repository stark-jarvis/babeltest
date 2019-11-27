/*!
 * Babel Config - v1.0 (2019-11-14T11:05:13+0800)
 * Copyright 2005-2019 56.com
 */
const presets = [
	[
		"@babel/env",
		{
			"targets": {
				//"edge": "17",
				//"firefox": "60",
				"chrome": "58",
				//"safari": "11.1"
				//"browsers": "last 2 versions, not ie <= 7"
				//"ie": "8"
			},
			// 启用将 ES6 模块转换为其他模块类型，设置为 false 不会转换模块
			//"modules": false,
			// 在每个文件中使用 polyfill 时，为 polyfill 添加特定导入；
			// 利用捆绑器只加载一次相同的 polyfill
			// usage: 按需引入；entry: 入口引入（整体引入） false: 不引入
			//"useBuiltIns": "usage",
			//"corejs": 3
		}
	]
];

const plugins = [
	["@babel/plugin-transform-runtime", {
		"helpers": false
	}]
]

module.exports = { 
	presets
	//plugins
};
