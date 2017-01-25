const isTest = true

function doSomething (argument) {
  return (argument || 1) * Math.rand()
}
const doNothing = () => {
  const two = 1 + 1
  Number(two)
}

doSomething(
  isTest
    ? 'is a test'
    : 'is not a test'
)

doSomething(
  'This is a' +
  'test'
)

console.info('Explicit logging is allowed')
console.warn('Warning too')
console.error('Writing to stderr even more')

switch (isTest) {
  case true:
    doSomething()
    break
  case false:
    doNothing()
    break
  default:
    doSomething()
}
