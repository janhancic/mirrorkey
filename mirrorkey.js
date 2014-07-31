'use strict';

var transforms = {

};

var transformNames = Object.keys(transforms);

module.exports = function(obj, transformType) {
	if (obj === null || typeof obj !== 'object') {
		throw 'The first argument to mirrorKey must be a object.';
	}

	if (typeof transformType === 'undefined') {
		transformType = 'none';
	} else {
		if (transformNames.indexOf(transformType) === -1) {
			throw 'Unknown value for transformType.'; // TODO: list possible transforms
		}
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