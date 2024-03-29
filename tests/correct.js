const isTest = true

function doSomething (argument) {
  return (argument || 1) * Math.random()
}

function doNothing () {
  const two = 1 + 1
  Number(two)
}

doSomething(
  isTest
    ? "is a test"
    : "is not a test",
)

doSomething(
  "This is a" +
  "test",
)

console.info("Explicit logging is allowed")
console.warn("Warning too")
console.error("Writing to stderr even more")
console.debug("And last but not least, debugging")

console.info('Strings including "double quotes" can use single quotes')

switch (isTest) {
  case false:
    doNothing()
    break
  case true:
  default:
    doSomething()
}

function useSpread (spreadObj) {
  return {
    ...spreadObj,
    info: "spread operator used",
  }
}

useSpread({
  spread: "operator",
  used: "successfully",
})
