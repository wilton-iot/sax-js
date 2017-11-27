define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<span id="hello" id="there"></span>',
  expect: [
    [ 'opentagstart', {
      name: 'SPAN',
      attributes: {}
    } ],
    [ 'attribute', { name: 'ID', value: 'hello' } ],
    [ 'opentag', {
      name: 'SPAN',
      attributes: { ID: 'hello' },
      isSelfClosing: false
    } ],
    [ 'closetag', 'SPAN' ]
  ],
  strict: false,
  opt: {}
})

return module.exports;});
