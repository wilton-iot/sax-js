define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<root>',
  expect: [
    [
      'opentagstart',
      {
        name: 'root',
        attributes: {}
      }
    ],
    [
      'opentag',
      {
        name: 'root',
        attributes: {},
        isSelfClosing: false
      }
    ],
    [
      'error',
      'Unclosed root tag\nLine: 0\nColumn: 6\nChar: '
    ]
  ],
  strict: true,
  opt: {}
})

return module.exports;});
