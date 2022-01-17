
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',

    output: {
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i, //busca los archivos html
                loader: 'html-loader', //llama al plugin
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/i,
                exclude: /style\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /style\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {

    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            //filename: 'hola.html'
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              {
                  from: "src/assets/",
                  to: "assets/"
               }
            ],
          }),

    ]

}