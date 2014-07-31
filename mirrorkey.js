'use strict';

module.exports = function(obj, config) {
	if (obj === null || typeof obj !== 'object') {
		throw 'The first argument to mirrorKey must be a object.';
	}
};