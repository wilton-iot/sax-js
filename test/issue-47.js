define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
// https://github.com/isaacs/sax-js/issues/47
require("sax/test/index").test({
  xml: '<a href="query.svc?x=1&y=2&z=3"/>',
  expect: [
    [ 'opentagstart', { name: 'A', attributes: {} } ],
    [ 'attribute', { name: 'HREF', value: 'query.svc?x=1&y=2&z=3' } ],
    [ 'opentag', { name: 'A', attributes: { HREF: 'query.svc?x=1&y=2&z=3' }, isSelfClosing: true } ],
    [ 'closetag', 'A' ]
  ],
  opt: {}
})

return module.exports;});
