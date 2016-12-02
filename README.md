![Banner](./banner.png)

# JavaScript Styleguide

This is a **normative** guide on how to format JavaScript.
The main aim is to get the best possible readability.
It is especially optimized for ECMAScript 2015,
but should work equally good with other versions.

It's assumed that the code
will be optimized by code minifiers and/or package tools
for usage in a production client-side environment.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",
"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document
are to be interpreted as described in
[RFC 2119](http://pretty-rfc.herokuapp.com/RFC2119).


## Table of Contents

* [Installation](#installation)
* [Guide](#guide)
  + [Naming Conventions](#naming-conventions)
  + [Whitespace](#whitespace)
  + [Multi-line Statements](#multi-line-statements)
  + [Semicolons](#semicolons)
  + [Commas](#commas)
    - [Inline Commas](#inline-commas)
    - [Trailing Commas](#trailing-commas)
  + [Leading Commas](#leading-commas)
  + [Variables / Constants](#variables---constants)
    - [Read Only](#read-only)
    - [Reassignable](#reassignable)
    - [`var` keyword](#-var--keyword)
    - [Declaration Group](#declaration-group)
    - [Global Variables](#global-variables)
    - [Unassigned variables](#unassigned-variables)
  + [Operators](#operators)
    - [Relational Operators](#relational-operators)
  + [Blocks](#blocks)
  + [Conditionals](#conditionals)
    - [Spaces Around Condition](#spaces-around-condition)
    - [Blocks for Multiline Statements](#blocks-for-multiline-statements)
    - [Placement of `else`](#placement-of--else-)
  + [Comments](#comments)
    - [Single Line](#single-line)
    - [Multiline](#multiline)
  + [Strings](#strings)
  + [Objects](#objects)
  + [Arrays](#arrays)
  + [Functions](#functions)
    - [Anonymous](#anonymous)
  + [Properties](#properties)
  + [Methods](#methods)
    - [Chaining](#chaining)
    - [Setters](#setters)
    - [Getters](#getters)
  + [Type Casting](#type-casting)
  + [General](#general)
  + [Framework specific](#framework-specific)
    - [jQuery](#jquery)
* [Related](#related)


## Installation

The easiest way to adhere to this guide is
to use the included [eslint-config-javascript] module to check your files.
In order to set it up, fist install ESLint and the module:

```shell
npm install --save-dev eslint eslint-config-javascript
```

Next add following entry to your package file:

```json
"eslintConfig": {
  "extends": "eslint-config-javascript"
}
```

This will load the configuration of this styleguide.
Finally add a `lint` script to the package scripts:

```json
"scripts": {
  "lint": "eslint .",
  …
}
```

Now you can check your files for conformity simply by running

```shell
npm run lint
```

[eslint-config-javascript]: https://npmjs.com/packages/eslint-config-javascript


## Guide

### Naming Conventions

- Names SHOULD be descriptive
- camelCase MUST be used for naming objects, functions, and instances
- PascalCase MUST be used for classes and constructor names
- `_this` MUST be used as a reference to `this`


### Whitespace

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


### Multi-line Statements

- Lines MUST not be longer than 80 characters
- When a statement is too long to fit on a line,
  line breaks MUST occur after an operator


### Semicolons

Semicolons MUST NOT be used to terminate statements
except the next line starts with an `(`, `[` or <code>\`</code>


### Commas

#### Inline Commas

An inline comma MUST be followed by one space character

```js
const colors = ['green', 'yellow', 'red']
```

instead of

```js
const colors = ['green','yellow','red']
```


#### Trailing Commas

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


### Leading Commas

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


### Variables / Constants

#### Read Only

Read only references to a value MUST be declared with `const`

```js
const answerToEverything = 42
```

instead of

```js
let answerToEverything = 42
```


#### Reassignable

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

#### `var` keyword

Variables must never be declared with `var`


#### Declaration Group

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


#### Global Variables

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

#### Unassigned variables

Unassigned `let` variables MUST be declared last in a group of declarations

```js
const foo = 7
let bar = 4
let baz
```


### Operators

### Position

Line breaks must occur after operators:

```js
const sentence = 'This is a ' +
  'short sentence.'
```

Except for the ternary operator:

```js
const status = isTesting
  ? 'We are currently testing'
  : 'Everything operational'
```

Placing the `?` and the `:` at the beginning of the line
makes it easier to skim the code.


#### Relational Operators

- `===` MUST be used instead of `==`
- `!==` MUST be used instead of `!=` except in `value != null`
  where it has the same effect as `value !== null && value !== undefined`


Shortcuts MAY be used where appropriate:

```js
if (name) {
  …
}
```

instead of

```js
if (name !== '') {
  …
}
```

and

```js
if (collection.length) {
  …
}
```

instead of

```js
if (collection.length > 0) {
  …
}
```


### Blocks

Blocks MAY be used to create an encapsulated scope

```js
{
  const age = 34
}

{
  const age = 27
}
```


### Conditionals

#### Spaces Around Condition

Before and after the condition must be a single space character.

```js
if (testValue) {
  doSomething()
}
```

instead of

```js
if(testValue){
  doSomething()
}
```


#### Blocks for Multiline Statements

Blocks MAY be omitted in single line statements
but must be used for multiline statements.

```js
if (testValue) doSomething()

// or

if (testValue) {
  doSomething()
}
```

```js
if (testValue) {
  doSomething()
  doThisToo()
}
```
---


#### Placement of `else`

`else` MUST be placed on a newline after the `if`-block.

```js
if (testValue) {
  doSomething()
}
else if (otherTestValue) {
  doSomethingElse()
}
else {
  doDefault()
}
```

instead of

```js
if (testValue) {
  doSomething()
} else if (otherTestValue) {
  doSomethingElse()
} else {
  doDefault()
}
```

Reasoning:

- Increases readability through space between `if` and `else` block
- As `else` is at the beginning of the line it's easier to skim down
  a list of `if`s and `else`s.


### Comments

- API documentation MUST NOT be written in comments.
  It lives in its own directory/repository
- Obscure code SHOULD be commented but not obvious things
  So do not write comments like this:

  ```js
  // If person is older than 34
  if (person.age > 34) {
    …
  }
  ```


#### Single Line

- `//` MUST be used for single line comments
- There MUST be a space between `//` and the first character of the comment
- Single line comments SHOULD be placed on a newline
  above the subject of the comment
- One empty line MUST be put before a single line comment which starts
  at the beginning of a line.
- `// FIXME:` MAY be used to annotate problems
- `// TODO:` MAY be used to capture issues which need to get solved


#### Multiline

- `/* … */` MUST be used for multiline comments
- Two empty line MUST be put before a multi line comment
- The start and end tag MUST be on a separate line

```js
/*
This is a
multiline comment
*/

```


### Strings

- Single Quotes MUST be used for strings


### Objects


### Arrays


### Functions


#### Anonymous

Anonymous functions MUST start with a `!`

```js
!function () {
  …
}
```

Reasoning:

`(function () {})` can lead to errors
when relying on ASI (Automatic Semicolon Insertion)
or when concatenating several JavaScript files


### Properties


### Methods


#### Chaining

Indentation SHOULD be used for long method chains.
At the most one method should be called per line.

```js
$('#items')
  .find('.selected')
  .highlight()
```

instead of

```js
$('#items').find('.selected').highlight()
```

Methods SHOULD return `this` to enable method chaining.


#### Setters

Properties SHOULD be settable via setters and via a `set*` method
to enable chaining.

```js
person.status = single

person
  .setName('John')
  .marryTo('Linda')
  .setStatus('married')
```

This enables easy traversing of structures involving several classes:

```js
database
  .load('John')
  .setAge('34')
  .sister
  .husband
  .setName('Tom')
```


#### Getters

Retrieving of properties MUST at least
be implemented via a getter.

```js
console.log(person.age)
```

instead of

```js
console.log(person.age())
```


### Type Casting

- To string: `String(123)`
- To number: `Number('123')`
- To boolean: `Boolean(1)`
- To array:

  ```js
  Array.from('test')
  // => ['t', 'e', 's', 't']
  ```

  ```js
  function doSomething () {
    Array.from(arguments)
  }
  doSomething(1, 2, 3)
  // => [1, 2, 3]
  ```

// TODO: to date, …


### General

You MAY (when it's absolutely necessary) differ from any rules of this guide
to increase performance.
You MUST, however, explain the reasons for not sticking to a rule in a comment.


### Framework specific

#### jQuery

Object variables MUST be prefixed with a `$`

```js
const $form = $('#myForm')
```

instead of

```js
const form = $('#myForm')
```


Lookups MUST be cached

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


## Related

- https://github.com/unboxed/javascript-style-guide
- https://github.com/airbnb/javascript
- http://contribute.jquery.org/style-guide/js/
- https://github.com/styleguide/javascript
- https://github.com/rwaldron/idiomatic.js
- https://github.com/Seravo/js-winning-style
- http://javascript.crockford.com/code.html
