// .babelrc.js

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  parserOptions: {ecmaVersion: 2018, sourceType: 'module'},

  // uncomment for eslint rules
  extends: ['eslint:recommended', 'plugin:mocha/recommended'],
  // uncomment for airbnb rules
  // extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],

  plugins: [],
  root: true,
  rules: {
    'consistent-return': 2,
    indent: [1, 2],
    'max-lines-per-function': ['error', 20],
    'max-params': ['error', 3],
    'no-else-return': 1,
    semi: [1, 'always'],
    'space-unary-ops': 2,
  },
};
