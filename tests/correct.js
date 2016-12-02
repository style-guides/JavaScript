const nativeConsole = require('console')
const log = new nativeConsole.Console(process.stdout, process.stderr)
let status = ''

// Incorrect placement of ternary operator
const isTest = true
status = isTest
  ? 'is a test'
  : 'is not a test'

// Incorrect placement of operators
status = 'This is a' +
  'test'

console.info('Explicit logging is allowed')
console.warn('Warning too')
console.error('Writing to stderr even more')

log.info(status)
