## Using Jest

For replacing [Mocha](https://mochajs.org/) with [Jest](https://jestjs.io/), please follow these tests:

### Install Jest packages

```bash
npm i -D jest eslint-plugin-jest
# yarn add --dev jest eslint-plugin-jest
```

### Configure .eslintrjc.js

Open `./.eslintjrc.js` and replace `plugin:mocha/recommended` with `plugin:jest/recommended` under `extends` key.

### Configure package.json

Open `./package.json` and replace all the `"test*"` commands with the following

```json
  "test:junit": "npm run test -- --reporter mocha-junit-reporter --reporter-options mochaFile=.junit.xml",
  "test:watch": "npm run test -- --watch",
  "test": "cross-env NODE_ENV=test NO_API_DOC=1 jest --coverage --runInBand --verbose"
```

### Change to Jest

* Open `./test/index.test.js`
* Comment or remove everything related to Mocha
  1. Clean `mocha` & `chai` packages from `package.json`
  2. Remove `.mocharc.js`
* Uncomment the commented Jest unit test.
* Add the content bellow to `jest.config.js`
* Happy testing!

```javascript
// jest.config.js

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  // rootDir: '.',
  roots: ['test'],
  testEnvironment: 'node',
  transform: {'^.+\\.(t|j)s$': 'ts-jest'},
};
```
