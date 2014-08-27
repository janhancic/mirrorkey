var mirrorKey = require('../mirrorkey');

describe('MirrorKey', function() {
	it('throws an exception if the passed in argument is not an object or an array', function() {
		var errorMsg = 'The first argument to mirrorKey must be a object or an array.';

		expect(function() {
			mirrorKey(null);
		}).toThrow(errorMsg);

		expect(function() {
			mirrorKey(1);
		}).toThrow(errorMsg);

		expect(function() {
			mirrorKey('bob');
		}).toThrow(errorMsg);
	});

	it('throws an exception if transformType is unknown', function() {
		expect(function() {
			mirrorKey({}, '404-transform');
		}).toThrow('Unknown value for transformType. Valid values: none, camel-case, lower-case, dashed, lower-dashed');
	});

	it('returns an empty object if the argument is an empty object', function() {
		var result = mirrorKey({});

		expect(Object.keys(result).length).toEqual(0);
	});

	it('returns an empty object if the argument is an empty array', function() {
		var result = mirrorKey([]);

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

	it('adds values to each key (array)', function() {
		var result = mirrorKey([
			'MY_KEY1',
			'MY_KEY2'
		]);

		expect(result.MY_KEY1).toEqual('MY_KEY1');
		expect(result.MY_KEY2).toEqual('MY_KEY2');
	});

	it('adds values in camel-case', function() {
		var result = mirrorKey(
			{MY_KEY1: null},
			'camel-case'
		);

		expect(result.MY_KEY1).toEqual('MyKey1');

		result = mirrorKey(
			['MY_KEY1'],
			'camel-case'
		);

		expect(result.MY_KEY1).toEqual('MyKey1');
	});

	it('adds values in lower-case', function() {
		var result = mirrorKey(
			{MY_KEY1: null},
			'lower-case'
		);

		expect(result.MY_KEY1).toEqual('my_key1');

		result = mirrorKey(
			['MY_KEY1'],
			'lower-case'
		);

		expect(result.MY_KEY1).toEqual('my_key1');
	});

	it('adds values in dashed', function() {
		var result = mirrorKey(
			{MY_KEY1: null},
			'dashed'
		);

		expect(result.MY_KEY1).toEqual('MY-KEY1');

		result = mirrorKey(
			['MY_KEY1'],
			'dashed'
		);

		expect(result.MY_KEY1).toEqual('MY-KEY1');
	});

	it('adds values in lower-dashed', function() {
		var result = mirrorKey(
			{MY_KEY1: null},
			'lower-dashed'
		);

		expect(result.MY_KEY1).toEqual('my-key1');

		result = mirrorKey(
			['MY_KEY1'],
			'lower-dashed'
		);

		expect(result.MY_KEY1).toEqual('my-key1');
	});
});