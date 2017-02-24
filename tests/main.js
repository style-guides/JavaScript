const path = require('path')
const assert = require('assert')

const eslint = require('eslint')

const cli = new eslint.CLIEngine()
const filePath = path.join(__dirname, 'incorrect.js')
const report = cli.executeOnFiles([filePath])


process.stdout.write('Number of errors')
assert.equal(report.errorCount, 1)
console.info(' ✔︎')


process.stdout.write('Number of warnings')
assert.equal(report.warningCount, 9)
console.info(' ✔︎')
