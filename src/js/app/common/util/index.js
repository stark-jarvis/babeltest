/*!
 * Util Module - v1.0 (2019-11-14T11:49:46+0800)
 * Copyright 2005-2019 56.com
 */

function log(x) {
	console.log('[test]-' + x);
}

/**
 * 把数字格式化为千分位形式
 * @method toThousands
 * @param {Number} num 要格式化的数字
 * @return {String} 千分位形式的数字
 */
/**
*/
function toThousands(num) {
	var num = (num || 0).toString(), result = '';
	while (num.length > 3) {
		result = ',' + num.slice(-3) + result;
		num = num.slice(0, num.length - 3);
	}
	if (num) { result = num + result; }
	return result;
}


export { 
	log,
	toThousands
};
