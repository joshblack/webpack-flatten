'use strict';

var babelPluginModules = require('../babel/rewrite-modules');

module.exports = {
  'retainLines': true,
  'compact': true,
  'comments': false,
  'whitelist': [
    'es6.arrowFunctions',
    'es6.blockScoping',
    'es6.classes',
    'es6.constants',
    'es6.destructuring',
    'es6.modules',
    'es6.parameters',
    'es6.properties.computed',
    'es6.properties.shorthand',
    'es6.spread',
    'es6.templateLiterals',
    'es7.trailingFunctionCommas',
    'es7.classProperties',
    'es7.decorators',
    'es7.exportExtensions',
    'es7.objectRestSpread',
    'flow',
    'react',
    'strict'
  ],
  plugins: [babelPluginModules]
}
