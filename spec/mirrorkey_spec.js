var mirrorKey = require('../mirrorkey');

describe('MirrorKey', function() {
	it('throws an exception if the passed in argument is not an object', function() {
		var errorMsg = 'The first argument to mirrorKey must be a object.';

		expect(function() {
			mirrorKey(null);
		}).toThrow(errorMsg);
	});

	it('returns an empty object if the argument is an empty object', function() {
		var result = mirrorKey({});

		expect(Object.keys(result).length).toEqual(0);
	});

	it('adds values to each key', function() {
		var result = mirrorKey({
			MY_KEY1: null,
			MY_KEY2: null
		});

		expect(result.MY_KEY1).toEqual('MY_KEY1');
		expect(result.MY_KEY2).toEqual('MY_KEY2');
	});
});