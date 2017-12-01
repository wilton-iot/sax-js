define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// stray ending tags should just be ignored in non-strict mode.
// https://github.com/isaacs/sax-js/issues/32
require("sax/test/index").test({
  xml: '<a><b></c></b></a>',
  expect: [
    [
      'opentagstart',
      {
        name: 'A',
        attributes: {}
      }
    ],
    [
      'opentag',
      {
        name: 'A',
        attributes: {},
        isSelfClosing: false
      }
    ],
    [
      'opentagstart',
      {
        name: 'B',
        attributes: {}
      }
    ],
    [
      'opentag',
      {
        name: 'B',
        attributes: {},
        isSelfClosing: false
      }
    ],
    [
      'text',
      '</c>'
    ],
    [
      'closetag',
      'B'
    ],
    [
      'closetag',
      'A'
    ]
  ],
  strict: false,
  opt: {}
})

require = requireOrig;});
