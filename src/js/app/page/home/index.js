/*!
 * Index JS For Test - v1.0 (2019-11-14T11:41:43+0800)
 * Copyright 2005-2019 56.com
 */

import { log } from '../../common/util/index';
import Player from '../../common/player/player';

const version = '6.2.1.0';

let list = ['IE', 'FireFox', 'Edge', 'Chrome', 'QQBrowser'];

let player = new Player({
	id: 'h5Player',
	stream: {
		flv: 'https://qf.56.com/',
		isLive: '1'
	}
});


document.querySelector('#play').addEventListener('click', (e) => {
	e.preventDefault();

	console.log(e);
	player.play();
}, false);

document.querySelector('#pause').addEventListener('click', (e) => {
	e.preventDefault();

	player.pause();
}, false);


list.forEach((d) => {
	log(d);
});
