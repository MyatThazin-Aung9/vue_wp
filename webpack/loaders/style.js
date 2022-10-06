module.exports = {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                esModule: false
            },
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                sassOptions: {
                    outputStyle: 'compressed',
                },
            },
        },
    ],
}