// .babelrc.js

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {ecmaVersion: 2018, sourceType: 'module'},

  // uncomment for eslint rules
  extends: [
    /************************************************************************
     * Uncomment to add airbnb rules. Don't forget you need to install
     * the airbnb eslint plugin.
     * ```bash
     * npm i -D eslint-config-airbnb-base
     * # or
     * yarn add --dev eslint-config-airbnb-base
     * ```
     */
    // 'airbnb/base'
    'plugin:mocha/recommended',
    'plugin:sonar/recommended',
    'plugin:sonarjs/recommended',
    // comment to remove mocha rules
    'plugin:mocha/recommended',
    /************************************************************************
     * Uncomment to add jest rules. Don't forget you need to install
     * the jest eslint plugin.
     * ```bash
     * npm i -D eslint-plugin-jest
     * # or
     * yarn add --dev eslint-plugin-jest
     * ```
     */
    // 'plugin:jest/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'sonar', 'sonarjs'],
  root: true,
  rules: {
    'consistent-return': 2,
    'max-len': ['error', 120],
    'max-lines-per-function': ['error', 20],
    'max-params': ['error', 3],
    'no-else-return': 1,
    'sonar/no-invalid-await': 0,
    'space-unary-ops': 2,
    curly: ['error', 'all'],
    indent: [1, 2],
    semi: [1, 'always'],
  },
};
