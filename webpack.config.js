const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 80,
    },
    module: {
        rules: [
            {
                test:/\.jsx$/,
                exclude:/node_modules/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`@babel/preset-env`, `@babel/preset-react`]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    }
};