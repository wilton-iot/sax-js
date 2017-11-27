define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<span>Welcome,</span> to monkey land',
  expect: [
    ['opentagstart', {
      'name': 'SPAN',
      'attributes': {}
    }],
    ['opentag', {
      'name': 'SPAN',
      'attributes': {},
      isSelfClosing: false
    }],
    ['text', 'Welcome,'],
    ['closetag', 'SPAN'],
    ['text', ' to monkey land'],
    ['end'],
    ['ready']
  ],
  strict: false,
  opt: {}
})

return module.exports;});
