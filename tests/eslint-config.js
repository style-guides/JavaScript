const assert = require('assert')

const eslintConfig = require('../eslint-config-javascript')

assert(eslintConfig.hasOwnProperty('env'))
assert(eslintConfig.hasOwnProperty('extends'))
assert(eslintConfig.hasOwnProperty('parserOptions'))
assert(eslintConfig.hasOwnProperty('rules'))
assert(Object.keys(eslintConfig.rules).length > 60)
