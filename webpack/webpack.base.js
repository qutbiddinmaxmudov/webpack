const config = {
    join: require('path').join,
    rules: require('../config'),
    Mini: require('mini-css-extract-plugin'),
    Html: require('html-webpack-plugin'),
    Clean: require('clean-webpack-plugin').CleanWebpackPlugin,
    Pug: require('html-webpack-pug-plugin'),
    CopyWebpackPlugin: require('copy-webpack-plugin')
  },
  paths = {
    src: config.join(__dirname, '../app/src'),
    dist: config.join(__dirname, '../app/dist'),
    assets: 'assets/'
  }
module.exports = {
  externals: {
    paths
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': paths.src,
      '@core': config.join(paths.src, '/core')
    }
  },
  entry: `${paths.src}/webpack.js`,
  output: {
    filename: `${paths.assets}js/[name].[hash].js`,
    path: paths.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: config.rules
  },
  plugins: [
    new config.Mini({
      filename: `${paths.assets}style/[name].[hash].css`
    }),
    new config.Html({
      template: `${paths.src}/index.pug`,
      filename: `./index.html`
    }),
    new config.Pug(),
    new config.Clean(),
    new config.CopyWebpackPlugin({
      patterns: [{
        from: config.join(__dirname, '../app/src/favicon.ico'),
        to: config.join(__dirname, '../app/dist/')
      }]
    }),
  ]
}