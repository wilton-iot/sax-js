define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
require("sax/test/index").test({
  strict: true,
  opt: { xmlns: true },
  expect: [
    [
      'opentagstart',
      {
        name: 'root',
        attributes: {},
        ns: {}
      }
    ],
    [
      'error',
      'Unbound namespace prefix: "unbound"\nLine: 0\nColumn: 28\nChar: >'
    ],
    [
      'attribute',
      {
        name: 'unbound:attr',
        value: 'value',
        uri: 'unbound',
        prefix: 'unbound',
        local: 'attr'
      }
    ],
    [
      'opentag',
      {
        name: 'root',
        uri: '',
        prefix: '',
        local: 'root',
        attributes: {
          'unbound:attr': {
            name: 'unbound:attr',
            value: 'value',
            uri: 'unbound',
            prefix: 'unbound',
            local: 'attr'
          }
        },
        ns: {},
        isSelfClosing: true
      }
    ],
    [
      'closetag',
      'root'
    ]
  ]
}).write("<root unbound:attr='value'/>")

return module.exports;});
