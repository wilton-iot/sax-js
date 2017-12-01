define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
// non-strict: no error
require("sax/test/index").test({
  xml: '<root attr1="first"attr2="second"/>',
  expect: [
    [ 'opentagstart', { name: 'root', attributes: {} } ],
    [ 'attribute', { name: 'attr1', value: 'first' } ],
    [ 'attribute', { name: 'attr2', value: 'second' } ],
    [ 'opentag', { name: 'root', attributes: { attr1: 'first', attr2: 'second' }, isSelfClosing: true } ],
    [ 'closetag', 'root' ]
  ],
  strict: false,
  opt: { lowercase: true }
})

// strict: should give an error, but still parse
require("sax/test/index").test({
  xml: '<root attr1="first"attr2="second"/>',
  expect: [
    [ 'opentagstart', { name: 'root', attributes: {} } ],
    [ 'attribute', { name: 'attr1', value: 'first' } ],
    [ 'error', 'No whitespace between attributes\nLine: 0\nColumn: 20\nChar: a' ],
    [ 'attribute', { name: 'attr2', value: 'second' } ],
    [ 'opentag', { name: 'root', attributes: { attr1: 'first', attr2: 'second' }, isSelfClosing: true } ],
    [ 'closetag', 'root' ]
  ],
  strict: true,
  opt: { }
}
)

// strict: other cases should still pass
require("sax/test/index").test({
  xml: '<root attr1="first" attr2="second"/>',
  expect: [
    [ 'opentagstart', { name: 'root', attributes: {} } ],
    [ 'attribute', { name: 'attr1', value: 'first' } ],
    [ 'attribute', { name: 'attr2', value: 'second' } ],
    [ 'opentag', { name: 'root', attributes: { attr1: 'first', attr2: 'second' }, isSelfClosing: true } ],
    [ 'closetag', 'root' ]
  ],
  strict: true,
  opt: { }
})

// strict: other cases should still pass
require("sax/test/index").test({
  xml: '<root attr1="first"\nattr2="second"/>',
  expect: [
    [ 'opentagstart', { name: 'root', attributes: {} } ],
    [ 'attribute', { name: 'attr1', value: 'first' } ],
    [ 'attribute', { name: 'attr2', value: 'second' } ],
    [ 'opentag', { name: 'root', attributes: { attr1: 'first', attr2: 'second' }, isSelfClosing: true } ],
    [ 'closetag', 'root' ]
  ],
  strict: true,
  opt: { }
})

// strict: other cases should still pass
require("sax/test/index").test({
  xml: '<root attr1="first"  attr2="second"/>',
  expect: [
    [ 'opentagstart', { name: 'root', attributes: {} } ],
    [ 'attribute', { name: 'attr1', value: 'first' } ],
    [ 'attribute', { name: 'attr2', value: 'second' } ],
    [ 'opentag', { name: 'root', attributes: { attr1: 'first', attr2: 'second' }, isSelfClosing: true } ],
    [ 'closetag', 'root' ]
  ],
  strict: true,
  opt: { }
})

require = requireOrig;});
