var mirrorKey = require('../mirrorkey');

describe('MirrorKey', function() {
	it('throws an exception if the passed in argument is not an object', function() {
		var errorMsg = 'The first argument to mirrorKey must be a object.';

		expect(function() {
			mirrorKey(null);
		}).toThrow(errorMsg);
	});
});