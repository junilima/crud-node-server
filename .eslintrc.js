const path = require('path')

module.exports = {
  extends: ['prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    babelOptions: {
      configFile: path.join(__dirname, '.babelrc'),
    },
  },
}
