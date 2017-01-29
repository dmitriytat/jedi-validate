var webpack = require('webpack');

module.exports = {
    entry: {
        'jedi-validate': './src/jedi-validate.es6',
        'jedi-validate.min': './src/jedi-validate.es6',
    },
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'JediValidate',
        sourceMapFilename: '[name].js.map',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.es6$/,
            //     exclude: /(node_modules|bower_components|tests)/,
            //     loader: 'eslint-loader',
            // },
            {
                test: /\.es6/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
        }),
    ],
};
