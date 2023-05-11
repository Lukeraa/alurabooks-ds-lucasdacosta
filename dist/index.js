
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./alurabooks-ds-lucasdacosta.cjs.production.min.js')
} else {
  module.exports = require('./alurabooks-ds-lucasdacosta.cjs.development.js')
}
