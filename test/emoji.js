define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
// split high-order numeric attributes into surrogate pairs
require("sax/test/index").test({
  xml: '<a>&#x1f525;</a>',
  expect: [
    [ 'opentagstart', { name: 'A', attributes: {} } ],
    [ 'opentag', { name: 'A', attributes: {}, isSelfClosing: false } ],
    [ 'text', '\ud83d\udd25' ],
    [ 'closetag', 'A' ]
  ],
  strict: false,
  opt: {}
})

return module.exports;});
