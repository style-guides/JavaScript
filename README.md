# Javascript Styleguide

This is a **normative** guide on how to format Javascript.
The main aim is to get the best possible readability.

It's assumed that the code will be optimized by code minifiers (or the like)
before using it in a production client-side environment.

Influences:

- https://github.com/unboxed/Javascript-Style-Guide
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
except the next line starts with an `(`, `[` or <code>``</code>


## Commas

- No leading commas MUST be used

		var foo = 0,
			bar,
			baz

	instead of

		var foo = 0
			, bar
			, baz

	and

		var person = {
			firstName: 'John',
			lastName: 'Smith',
			age: 30
		}

	instead of

		var person = {
			firstName: 'John'
			, lastName: 'Smith'
			, age: 30
		}

- Additional trailing comma SHOULD NOT be used as some implementations of ES3 would add length to an array if it had an additional trailing comma.
	(ES5, however, clarifies that a trailing comma does not add to the length of an array)

		var person = {
			firstName: 'John',
			lastName: 'Smith'
		}

	instead of

		var person = {
			firstName: 'John',
			lastName: 'Smith',
		}

- An inline comma MUST be followed by one space character

		var colors = ['green', 'yellow', 'red']

	instead of

		var colors = ['green','yellow','red']


## Variables

- MUST be declared with the `var` keyword.
- If a variable should be made available globally explicitly declare it as a property of the window object (e.g. `window.variableName`)
- Each project MAY expose at most one global variable
- One `var` declaration MUST be used for multiple variables and each variable MUST be declared on a newline
- Unsassigned variables MUST be declared last
- MUST be declared and assigned at the top of their scope

	var foo = 0,
		bar,
		baz


## Relational Operators

- `===` MUST be used over `==`
- `!==` MUST be used over `!=`


Shortcuts MAY be used where appropriate:

- `if (name) {…}` instead of `if (name !== '') {…}`
- `if (collection.length) {…}` instead of  `if (collection.length > 0) {…}`
- …


## Blocks

- Blocks MUST NOT be used except as required by the compound statements (Blocks don't have scope. Only functions have scope)


## Conditionals

- Blocks SHOULD be ommited where possible:

		if (testValue)
			doSomething()

	instead of

		if (testValue){
			doSomething()
		}

- `else` MUST be placed on a newline after the `if`-block. If braces are omitted there MUST be a blank line between the `if` and `else` part.


		if (testValue)
			doSomething()

		else
			doSomethingElse()


## Comments

- API documentation MUST NOT be written in comments. It lives in its own repository
- Obscure code SHOULD be commented but not obvious things


### Multiline

- `/* … */` MUST be used for multiline comments
- Two empty line MUST be put before a multi line comment


### Singleline

- `//` MUST be used for single line comments
- There MUST be a space between `//` and the first character of the comment
- Single line comments MUST be placed on a newline above the subject of the comment
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

		!function(){…}


## Properties


## Methods


### Chaining

- Indentation SHOULD be used for long method chains.

		$('#items')
			.find('.selected')
			.highlight()

	instead of

		$('#items').find('.selected').highlight()


- Methods SHOULD return `this` to enable method chaining


### Accessors

- There MUST NOT be seperate setter and getter functions

		person.age(25)

	instead of

		person.setAge(25)

	and

		person.age()

	instead of

		person.getAge()


## Type Casting

- to string: `String(123)`
- to number: `Number("123")`
- to boolean: `Boolean(1)`
// TODO: to date, …


## General

You MAY (when it's absolutely necessary) differ from any rules of this guide to increase the performance. You MUST, however, explain the reasons for not sticking to a rule in a comment.


## Framework specific


### jQuery

- jQuery object variables MUST be prefixed with a `$`

		var $form = $('#myForm')

	instead of

		var form = $('#myForm')

- Lookups MUST be cached

		var $form = $('#form')

		$form.css({
			'background-color': 'pink'
		})

		// …

		$form.hide()

	instead of

		$('#form').css({
			'background-color': 'pink'
		})

		// …

		$('#form').hide()
