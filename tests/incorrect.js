// Setup code
let test = ''
const isTest = true


// Tabs instead of spaces
function tabs () {
	return 'foo'
}


// Tabs instead of spaces
function spaces4 () {
    return 'foo'
}


// Forbidden semicolon
test = 'foo';


// Const is assigned but never used
const unusedVariable = 'whatever'


// Incorrect placement of ternary operator
test = isTest ?
  'is a test' :
  'is not a test'


// Incorrect placement of plus operator
test = 'This is a'
  + 'test'


// Forbidden reassignment of const
const isAllowed = true
isAllowed = false


// Forbidden debug logging
console.log('Debug logging must be deleted')


// Missing break statement
switch (isAllowed) {
  case true:
  default:
}


// Forbidden quoted keys
test = {
  'key': 'value',
}


// Teardown code
function noop (value) {
  return value
}
noop(test)
tabs()
spaces4()
