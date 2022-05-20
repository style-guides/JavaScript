const path = require("path")
const assert = require("assert")

const eslintPackage = require("eslint")

async function main () {
  const eslint = new eslintPackage.ESLint()
  const filePath = path.join(__dirname, "incorrect.js")

  try {
    const reports = await eslint.lintFiles([filePath])

    process.stdout.write("Number of errors")
    assert.equal(reports[0].errorCount, 2)
    console.info(" ✔︎")

    process.stdout.write("List of warnings")
    const warningRules = [
      "indent",
      "indent",
      "semi",
      "no-useless-escape",
      "no-unused-vars",
      "@typescript-eslint/no-unused-vars",
      "operator-linebreak",
      "operator-linebreak",
      "operator-linebreak",
      "no-const-assign",
      "no-console",
      "no-fallthrough",
      "quote-props",
      "func-style",
    ]
    assert.deepStrictEqual(
      warningRules,
      reports[0].messages
        .map(warning => warning.ruleId),
    )
    console.info(" ✔︎")
  }
  catch (error) {
    console.error(error)
  }
}

main()
