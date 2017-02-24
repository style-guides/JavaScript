const assert = require('assert')

const eslintConfig = require('..')


process.stdout.write('Structure of eslint config')

assert(eslintConfig.hasOwnProperty('env'))
assert(eslintConfig.hasOwnProperty('extends'))
assert(eslintConfig.hasOwnProperty('parserOptions'))
assert(eslintConfig.hasOwnProperty('rules'))
assert(Object.keys(eslintConfig.rules).length > 60)

console.info(' ✔︎')
