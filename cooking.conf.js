var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: {
    app: './src/app.js',
    note:'./src/noteApp.js',
    testapp:"./src/testApp.js",
    vendor: ['react', 'react-dom']
  },
  dist: './dist',
  template:  [
    {
     filename: 'index.html',
      template: './src/index.tpl',
      chunks: ['vendor','app']
    },
    {
      filename: 'note.html',
      template: './src/note.tpl',
      chunks: ['vendor','note']
    },
    {
      filename: 'testApp.html',
      template: './src/testApp.tpl',
      chunks: ['vendor','testapp']
    }
  ],

  // development
  devServer: {
    port: 8080,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  chunk: [{
     name: 'vendor',
     minChunks: Infinity,
     chunks: ['vendor','app','note','testapp']
  }],
  publicPath: '/dist/',
  assetsPath: 'static',
  sourceMap: true,
  extractCSS: true,
  urlLoaderLimit: 10000,

  extends: ['react', 'postcss']
});

cooking.add('postcss', function () {
  return [
    // require postcss plugin
    // like require('postcss-cssnext')
  ]
});

cooking.add('resolve.alias', {
  'src': path.join(__dirname, 'src')
});

module.exports = cooking.resolve();
