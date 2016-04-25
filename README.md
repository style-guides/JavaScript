# JavaScript Styleguide

This is a **normative** guide on how to format JavaScript.
The main aim is to get the best possible readability.
It is especially optimized for ECMAScript 2015,
but should work equally good with other versions.

It's assumed that the code
will be optimized by code minifiers and/or package tools
for usage in a production client-side environment.

Influences:

- https://github.com/unboxed/javascript-style-guide
- https://github.com/airbnb/javascript
- http://contribute.jquery.org/style-guide/js/
- https://github.com/styleguide/javascript
- https://github.com/rwaldron/idiomatic.js
- https://github.com/Seravo/js-winning-style
- http://javascript.crockford.com/code.html


The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document
are to be interpreted as described in
[RFC 2119](http://pretty-rfc.herokuapp.com/RFC2119).


## Naming Conventions

- Names SHOULD be descriptive
- camelCase MUST be used for naming objects, functions, and instances
- PascalCase MUST be used for classes and constructor names
- `_this` MUST be used as a reference to `this`


## Whitespace

- 2 spaces MUST be used for indentation
- There MUST be no trailing whitespace characters
- An empty newline must be placed at the end of a file
- Invisibles SHOULD be displayed during coding
  to reduce the likelihood of whitespace mistakes
- Tabs and spaces MUST NOT be mixed


Reasoning:

Originally this guide required the use of tabs for indentation.
The problem, however, is that a tab character can have any length
(normally 2 or 4 characters wide).
This undermines the purpose of monospaced fonts, where every character
is supposed to have the same length to ensures alignment and predictability
of the text layout.


## Multi-line Statements

- Lines MUST not be longer than 80 characters
- When a statement is too long to fit on a line,
  line breaks MUST occur after an operator


## Semicolons

Semicolons MUST NOT be used to terminate statements
except the next line starts with an `(`, `[` or <code>\`</code>


## Commas

### Inline Commas

An inline comma MUST be followed by one space character

```js
const colors = ['green', 'yellow', 'red']
```

instead of

```js
const colors = ['green','yellow','red']
```


### Trailing Commas

Trailing commas MUST be used in Arrays

```js
const fruits = [
  apple,
  banana,
  melon,
]
```

instead of

```js
const fruits = [
  apple,
  banana,
  melon
]
```

… and Objects

```js
const person = {
  firstName: 'John',
  lastName: 'Smith',
}
```

instead of


```js
const person = {
  firstName: 'John',
  lastName: 'Smith'
}
```

Reasoning:

To add an element to the end of an Array or Object,
2 lines must be modified.
This adds unnecessary visual clutter to diffs.
Furthermore, elements can be more easily rearranged
when they all have the same structure.


## Leading Commas

No leading commas MUST be used

```js
const fruits = [
  apple,
  banana,
  peach,
  melon,
]
```

instead of

```js
const fruits = [ apple
             , banana
             , peach
             , melon
             ]
```

and

```js
const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
}
```

instead of

```js
const person = { firstName: 'John'
             , lastName: 'Smith'
             , age: 30
             }
```


## Variables / Constants

### Read Only

Read only references to a value MUST be declared with `const`

```js
const answerToEverything = 42
```

instead of

```js
let answerToEverything = 42
```


### Reassignable

Reassignable variables must be declared with `let`

```js
let currentPage = 138

function turnPageOver () {
  currentPage += 1
}
```

instead of

```js
const currentPage = 138

function turnPageOver () {
  currentPage += 1
}
```

### `var` keyword

Variables must never be declared with `var`


### Declaration Group

Each variable MUST be declared with exactly one `const` or `let` keyword

```js
const name = 'John'
const age = 34
const instrument = 'guitar'
```

instead of

```js
const name = 'John',
      age = 34,
      instrument = 'guitar'
```


### Global Variables

If a variable shall be exposed globally
it MUST be explicitly declared as a property
of the global scope (`window`/`global` object)

```js
window.brandName = 'Stark Industries'
// or
global.brandName = 'Stark Industries'
```

instead of

```js
brandName = 'Stark Industries'
```

### Unassigned variables

Unassigned `let` variables MUST be declared last in a group of declarations

```js
const foo = 7
let bar = 4
let baz
```


## Relational Operators

- `===` MUST be used over `==`
- `!==` MUST be used over `!=`


Shortcuts MAY be used where appropriate:

- `if (name) {…}` instead of `if (name !== '') {…}`
- `if (collection.length) {…}` instead of  `if (collection.length > 0) {…}`
- …


## Blocks

- Blocks MUST NOT be used except as required by the compound statements
  (Blocks don't have scope. Only functions have scope.)


## Conditionals

- Blocks SHOULD be ommited where possible:

  ```js
  if (testValue)
    doSomething()
  ```

  instead of

  ```js
  if (testValue){
    doSomething()
  }
  ```

- `else` MUST be placed on a newline after the `if`-block.
  If braces are omitted there MUST be a blank line
  between the `if` and `else` part.

  ```js
  if (testValue)
    doSomething()

  else
    doSomethingElse()
  ```


## Comments

- API documentation MUST NOT be written in comments.
  It lives in its own repository
- Obscure code SHOULD be commented but not obvious things


### Multiline

- `/* … */` MUST be used for multiline comments
- Two empty line MUST be put before a multi line comment


### Singleline

- `//` MUST be used for single line comments
- There MUST be a space between `//` and the first character of the comment
- Single line comments MUST be placed on a newline
  above the subject of the comment
- One empty line MUST be put before a single line comment
- `// FIXME: ` MAY be used to annotate problems
- `// TODO:` MAY be used to capture issues which need to get solved


## Strings

- Single Quotes MUST be used for strings


## Objects


## Arrays


## Functions


### Anonymous

- MUST start with a `!`

  ```js
  !function(){…}
  ```

## Properties


## Methods


### Chaining

- Indentation SHOULD be used for long method chains.

  ```js
  $('#items')
    .find('.selected')
    .highlight()
  ```

  instead of

  ```js
  $('#items').find('.selected').highlight()
  ```

- Methods SHOULD return `this` to enable method chaining


### Accessors

- There MUST NOT be separate setter and getter functions

  ```js
  person.age(25)
  ```

  instead of

  ```js
  person.setAge(25)
  ```

  and

  ```js
  person.age()
  ```

  instead of

  ```js
  person.getAge()
  ```


## Type Casting

- to string: `String(123)`
- to number: `Number("123")`
- to boolean: `Boolean(1)`
// TODO: to date, …


## General

You MAY (when it's absolutely necessary) differ from any rules of this guide
to increase the performance.
You MUST, however, explain the reasons for not sticking to a rule in a comment.


## Framework specific


### jQuery

- jQuery object variables MUST be prefixed with a `$`

  ```js
  const $form = $('#myForm')
  ```

  instead of

  ```js
  const form = $('#myForm')
  ```

- Lookups MUST be cached

  ```js
  const $form = $('#form')

  $form.css({
    'background-color': 'pink'
  })

  // …

  $form.hide()
  ```

  instead of

  ```js
  $('#form').css({
    'background-color': 'pink'
  })

  // …

  $('#form').hide()
  ```
