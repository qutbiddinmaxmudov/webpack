const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    test: /\.(s[sc]ss|css)/,
    use:[
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
        'group-css-media-queries',
        'postcss-loader'
    ]
}