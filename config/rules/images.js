module.exports = {
    test: /\.(png|jp(e)?g|gif|svg)/,
    loader: 'file-loader',
    options:{
        name: 'assets/images/[name].[ext]'
    }
}