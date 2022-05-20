// Setup code
let test = ""
const isTest = true

// For using variables
function noop (value) {
  return value
}


// Tabs instead of spaces
function tabs () {
	return "foo"
}


// 4 spaces instead of 2
function spaces4 () {
    return "foo"
}


// Forbidden semicolon
test = "foo";


// Useless escape
test = "fo\o"


// Const is assigned but never used
const unusedVariable = "whatever"


// Incorrect placement of ternary operator
test = isTest ?
  "is a test" :
  "is not a test"


// Incorrect placement of plus operator
test = "This is a"
  + "test"

noop(test)


// Forbidden reassignment of const
const isAllowed = true
isAllowed = false
noop(isAllowed)


// Forbidden debug logging
console.log("Debug logging must be deleted")


// Missing break statement
switch (global.someFlag) {
  case true:
    console.info("Missing break")

  default:
    console.info("Default")
}


// Forbidden quoted keys
test = {
  "key": "value",
}


// Incorrect function style
const doSomething = () => {
  console.info("Something")
}


// Teardown code
tabs()
spaces4()
doSomething()
