require('clean-webpack-plugin').CleanWebpackPlugin
const {merge} = require('webpack-merge'), 
baseWebpack = require('./webpack.base'),
devWebpack = merge({
    mode:'development',
    devServer:{
        contentBase: baseWebpack.externals.paths.dist,
        port:3000
    },
    watch:true
},baseWebpack)

module.exports = new Promise(resolve=>resolve(devWebpack))