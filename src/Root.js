/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.dev');
} else {
  module.exports = require('./Root.dev');
}
