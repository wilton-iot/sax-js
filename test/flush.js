define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var parser = require("sax/test/index").test({
  expect: [
    ['opentagstart', {'name': 'T', attributes: {}}],
    ['opentag', {'name': 'T', attributes: {}, isSelfClosing: false}],
    ['text', 'flush'],
    ['text', 'rest'],
    ['closetag', 'T']
  ]
})

parser.write('<T>flush')
parser.flush()
parser.write('rest</T>')
parser.close()

return module.exports;});
