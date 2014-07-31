'use strict';

module.exports = function(obj, config) {
	if (obj === null || typeof obj !== 'object') {
		throw 'The first argument to mirrorKey must be a object.';
	}

	var result = {};

	for (var key in obj) {
		if (obj.hasOwnProperty(key) === false) {
			continue;
		}

		result[key] = key;
	}

	return result;
};