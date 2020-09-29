module.exports = {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    loader:'file-loader',
    options:{
        name:'./static/fonts/[name].[ext]'
    }
}