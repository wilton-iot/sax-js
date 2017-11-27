define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var tap = require('assert')
var saxStream = require('sax/lib/sax').createStream()
tap.doesNotThrow(function () {
  saxStream.end()
})

return module.exports;});
