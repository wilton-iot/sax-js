define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<Р>тест</Р>',
  expect: [
    ['opentagstart', {'name': 'Р', attributes: {}}],
    ['opentag', {'name': 'Р', attributes: {}, isSelfClosing: false}],
    ['text', 'тест'],
    ['closetag', 'Р']
  ]
})

return module.exports;});
