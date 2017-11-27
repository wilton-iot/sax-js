define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<r>&#NaN;</r>',
  expect: [
    ['opentagstart', {'name': 'R', attributes: {}}],
    ['opentag', {'name': 'R', attributes: {}, isSelfClosing: false}],
    ['text', '&#NaN;'],
    ['closetag', 'R']
  ]
})

return module.exports;});
