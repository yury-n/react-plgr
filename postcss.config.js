var path = require('path');

module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-smart-import')
  ],
}
