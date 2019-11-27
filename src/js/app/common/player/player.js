/*!
 * Common Player Class - v1.0 (2019-11-25T17:35:10+0800)
 * Copyright 2005-2019 56.com
 */
import { log, toThousands } from '../util/index';


class Player {
	constructor(options) {
		this._TAG = 'H5Player';
		this._options = options;
	}


	play() {
		log(toThousands.toString());
	}

	pause() {
		var self = this;
		console.log(self._options);
	}

	destroy() {

	}

};

export default Player;
