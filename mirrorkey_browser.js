(function(){
'use strict';

var transforms = {
	'none': function(key) {
		return key;
	},

	'camel-case': function(key) {
		var parts = key.toLowerCase().split('_');
		var part;

		for (var idx = 0, len = parts.length; idx < len; idx++) {
			part = parts[idx];
			part = part.substr(0, 1).toUpperCase() + part.substr(1);

			parts[idx] = part;
		}

		return parts.join("");
	},

	'lower-case': function(key) {
		return key.toLowerCase();
	},

	'dashed': function(key) {
		return key.replace(/_/g, '-');
	},

	'lower-dashed': function(key) {
		return this['lower-case'](this['dashed'](key));
	}
};

var transformNames = [];
for (var transformName in transforms) {
	transformNames.push(transformName);
}

window.mirrorkey = function(obj, transformType) {
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

		result[key] = transforms[transformType](key);
	}

	return result;
};
}())