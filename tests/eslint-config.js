import assert from "assert"

import eslintConfig from "../index.js"

process.stdout.write("Structure of eslint config")

assert(Array.isArray(eslintConfig))

console.info(" ✔︎")
