const autoprefixer = require('autoprefixer');
const precss = require('precss');
const smartImport = require('postcss-smart-import');

module.exports = {
  plugins: [
    smartImport,
    precss,
    autoprefixer,
  ],
  'postcss-cssnext': {
    browsers: ['last 2 versions', '> 5%'],
  },
};
