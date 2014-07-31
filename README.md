# MirrorKey

A small utility that takes a object literal and returns a new object literal whose values are the same as keys.

The idea came from [react/utils/keyMirror](https://github.com/facebook/react/blob/master/src/utils/keyMirror.js) but I 
added transforms which allows you to transform the values. There are 5 available transforms: `none`, `camel-case`, 
`lower-case`, `dashed` & `lower-dashed`. You pass the transform in as the second argument (default is `none`),

This utility is useful for creating maps of constants, as it helps you to avoid having to type the same thing twice.

## Examples

```javascript
var myConstants = {
	MY_FOO: null,
	MY_BAR: null
};

mirrorKey(myConstants);
/*
{
	MY_FOO: 'MY_FOO',
	MY_BAR: 'MY_BAR'
}
*/

mirrorKey(myConstants, 'lower-dashed');
/*
{
	MY_FOO: 'my-foo',
	MY_BAR: 'my-bar'
}
*/
```

## Installation
TODO

## Runtime support
TODO

## Developing

Clone this repository. Source code is in `mirrorkey.js` and the tests are in `spec/`. To run the tests you will need to 
install jasmine-node with `npm install jasmine-node -g`. After which you can run `npm test` to run the tests.

## License
See LICENSE file.