define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
require("sax/test/index").test({
  expect: [
    ['opentagstart', {'name': 'R', 'attributes': {}}],
    ['opentag', {'name': 'R', 'attributes': {}, 'isSelfClosing': false}],
    ['opencdata', undefined],
    ['cdata', ' this is character data  '],
    ['closecdata', undefined],
    ['closetag', 'R']
  ]
}).write('<r><![CDATA[ this is ').write('character data  ').write(']]></r>').close()

require = requireOrig;});
