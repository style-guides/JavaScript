import js from "@eslint/js"
import tsEslint from "typescript-eslint"
import globals from "globals"
import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"

const config = {
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es6,
    },
    parser: tsParser,
  },
  plugins: {
    tsPlugin: tsPlugin,
  },
  rules: {
    "array-callback-return": ["warn"],
    "arrow-spacing": ["warn"],
    "block-scoped-var": ["warn"],
    camelcase: ["warn"],
    "brace-style": ["warn", "stroustrup"],
    "comma-dangle": ["warn", "always-multiline"],
    "comma-spacing": ["warn"],
    "comma-style": ["warn", "last"],
    "constructor-super": ["warn"],
    curly: ["warn", "multi-line", "consistent"],
    "default-case": ["warn"],
    "dot-notation": ["warn"],
    "dot-location": ["warn", "property"],
    eqeqeq: ["warn", "allow-null"],
    "eol-last": ["warn", "always"],
    "func-style": ["warn", "declaration"],
    "guard-for-in": ["warn"],
    "id-blacklist": ["warn", "cb", "callback", "err", "req", "res"],
    "id-length": ["warn"],
    indent: [
      "warn",
      2,
      {
        SwitchCase: 1,
      },
    ],
    "key-spacing": ["warn"],
    "keyword-spacing": ["warn"],
    "linebreak-style": ["warn", "unix"],
    "max-len": [
      "warn",
      {
        code: 80,
        tabWidth: 4,
      },
    ],
    "new-cap": ["warn"],
    "newline-per-chained-call": [
      "warn",
      {
        ignoreChainWithDepth: 1,
      },
    ],
    "no-bitwise": ["warn"],
    "no-caller": ["warn"],
    "no-cond-assign": ["warn", "except-parens"],
    "no-console": [
      "warn",
      {
        allow: ["info", "warn", "error", "debug"],
      },
    ],
    "no-debugger": ["warn"],
    "no-empty": ["warn"],
    "no-eval": ["warn"],
    "no-extend-native": ["warn"],
    "no-extra-parens": [
      "warn",
      "all",
      {
        nestedBinaryExpressions: false,
      },
    ],
    "no-irregular-whitespace": ["warn"],
    "no-iterator": ["warn"],
    "no-implicit-coercion": ["warn"],
    "no-loop-func": ["warn"],
    "no-multi-str": ["warn"],
    "no-new": ["warn"],
    "no-proto": ["warn"],
    "no-script-url": ["warn"],
    "no-sequences": ["warn"],
    "no-shadow": ["warn"],
    "no-spaced-func": ["warn"],
    "no-undef": ["warn"],
    "no-unused-vars": ["warn"],
    "no-useless-escape": ["warn"],
    "no-var": ["warn"],
    "no-whitespace-before-property": ["warn"],
    "no-with": ["warn"],
    "one-var": ["warn", "never"],
    "operator-assignment": ["warn", "always"],
    "operator-linebreak": [
      "warn",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "prefer-arrow-callback": ["warn"],
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
      },
    ],
    "quote-props": ["warn", "as-needed"],
    quotes: [
      "warn",
      "double",
      {
        avoidEscape: true,
      },
    ],
    semi: ["warn", "never"],
    "semi-spacing": ["warn"],
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", "always"],
    "space-infix-ops": ["warn"],
    "spaced-comment": ["warn", "always"],
    "valid-typeof": ["warn"],
    "wrap-iife": ["warn", "inside"],
    yoda: ["warn"],
  },
}

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  config,
  {
    languageOptions: {
      ecmaVersion: 2022,
    },
  },
]
