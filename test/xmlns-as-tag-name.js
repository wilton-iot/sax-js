define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  xml: '<xmlns/>',
  expect: [
    [
      'opentagstart',
      {
        name: 'xmlns',
        attributes: {},
        ns: {}
      }
    ],
    [
      'opentag',
      {
        name: 'xmlns',
        uri: '',
        prefix: '',
        local: 'xmlns',
        attributes: {},
        ns: {},
        isSelfClosing: true
      }
    ],
    [
      'closetag',
      'xmlns'
    ]
  ],
  strict: true,
  opt: {
    xmlns: true
  }
})

return module.exports;});
