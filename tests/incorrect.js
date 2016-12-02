// Const is assigned but never used
const unusedVariable = 'whatever'

// Incorrect placement of ternary operator
const sentence = isTest ?
  'is a test' :
  'is not a test'

// Incorrect placement of plus operator
const anotherSentence = 'This is a'
  + 'test'

// Forbidden reassignment of const
const isAllowed = true
isAllowed = false

// Forbidden debug logging
console.log('Debug logging must be deleted')

switch (isAllowed) {
case true:
  1 + 1
case false:
  2 + 2
break
default:
  3 + 3
}
