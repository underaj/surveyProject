module.exports = {
  entry: __dirname + '/client',
  output: {
    path: __dirname +'/compiled',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /.jsx?$/,
        loader: "babel-loader", 
        exclude: 'node_modules',
        query: {
          presets: ['es2015, react']
        }
      }
    ]
  }
};
