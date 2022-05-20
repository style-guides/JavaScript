const path = require("path")
const assert = require("assert")

const eslintPackage = require("eslint")

async function main () {
  const eslint = new eslintPackage.ESLint()
  const filePath = path.join(__dirname, "incorrect.js")

  try {
    const reports = await eslint.lintFiles([filePath])

    process.stdout.write("Number of errors")
    assert.equal(reports[0].errorCount, 1)
    console.info(" ✔︎")

    process.stdout.write("Number of warnings")
    assert.equal(reports[0].warningCount, 11)
    console.info(" ✔︎")
  }
  catch (error) {
    console.error(error)
  }
}

main()
