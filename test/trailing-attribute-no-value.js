define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<root attrib>',
  expect: [
    ['opentagstart', {name: 'ROOT', attributes: {}}],
    ['attribute', {name: 'ATTRIB', value: 'attrib'}],
    ['opentag', {name: 'ROOT', attributes: {'ATTRIB': 'attrib'}, isSelfClosing: false}]
  ],
  opt: { trim: true }
})

return module.exports;});
