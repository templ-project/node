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
  extends: [
    'eslint:recommended',
    'plugin:sonar/recommended',
    'plugin:sonarjs/recommended',
    'plugin:mocha/recommended',
    'prettier',
  ],
  // uncomment for airbnb rules
  // extends: ['airbnb-base', 'plugin:sonar/recommended', 'plugin:jest/recommended', 'prettier'],

  plugins: ['prettier', 'sonar', 'sonarjs'],
  root: true,
  rules: {
    'consistent-return': 2,
    curly: ['error', 'all'],
    indent: [1, 2],
    'max-len': ['error', 120],
    'max-lines-per-function': ['error', 20],
    'max-params': ['error', 3],
    'no-else-return': 1,
    semi: [1, 'always'],
    'sonar/no-invalid-await': 0,
    'space-unary-ops': 2,
  },
};
