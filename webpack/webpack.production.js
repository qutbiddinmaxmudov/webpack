const {merge} = require('webpack-merge'),
baseWebpack = require('./webpack.base'),
buildWebpack = merge(baseWebpack,{
    mode: 'production',
    plugins: []
})

module.exports = new Promise(resolve => resolve(buildWebpack))