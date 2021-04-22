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
    'no-else-return': 1,
    'space-unary-ops': 2,
    indent: [1, 2],
    semi: [1, 'always'],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
