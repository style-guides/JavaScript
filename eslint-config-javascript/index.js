const fs = require('fs')
const path = require('path')

const yaml = require('js-yaml')

const eslintrcPath = path.join(__dirname, '.eslintrc.yaml')
const configYaml = fs.readFileSync(eslintrcPath)

module.exports = yaml.safeLoad(configYaml)
