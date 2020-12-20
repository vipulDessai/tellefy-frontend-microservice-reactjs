require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const globalEnvInBuildReplacer = {};
for(let envKey in process.env) {
    globalEnvInBuildReplacer[envKey] = JSON.stringify(process.env[envKey]);
}

const configs = {
    entry: path.resolve(__dirname, './src/index.js'),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', 'json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg)$/,
                loader: 'url-loader'
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new webpack.DefinePlugin(globalEnvInBuildReplacer)
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
};

if(process.env.NODE_ENV == 'development' && process.argv[3] != 'production') {
    configs.mode = 'development';
    configs.devtool = 'inline-source-map';
    const eslintConfigs = [
        {
            test: /\.js(x*)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }
    ];
    configs.module.rules = [...configs.module.rules, ...eslintConfigs];
}

module.exports = configs;