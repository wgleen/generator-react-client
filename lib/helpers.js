const _ = require('lodash')

exports.toTitle = str =>
  str
    .split('-')
    .map(i => _.capitalize(i))
    .join(' ')