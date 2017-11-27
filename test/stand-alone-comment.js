define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
// https://github.com/isaacs/sax-js/issues/124
require("sax/test/index").test({
  xml: '<!-- stand alone comment -->',
  expect: [
    [
      'comment',
      ' stand alone comment '
    ]
  ],
  strict: true,
  opt: {}
})

return module.exports;});
