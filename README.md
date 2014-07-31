# MirrorKey

A small utility that takes a object literal and returns a new object literal whose values are the same as keys.

The idea came from [react/utils/keyMirror](https://github.com/facebook/react/blob/master/src/utils/keyMirror.js) but I 
added transforms which allows you to transform the values. There are 5 available transforms: `none`, `camel-case`, 
`lower-case`, `dashed` & `lower-dashed`. You pass the transform in as the second argument (default is `none`),

## Examples
TODO

## Installation
TODO

## Runtime support
TODO

## Developing

Clone this repository. Source code is in `mirrorkey.js` and the tests are in `spec/`. To run the tests you will need to 
install jasmine-node with `npm install jasmine-node -g`. After which you can run `npm test` to run the tests.

## License
See LICENSE file.