var webpack = require('webpack');

module.exports = {
    entry: {
        'tests': './tests/tests.es6',
    },
    devtool: 'source-map',
    output: {
        path: './dist-tests/',
        filename: '[name].js',
        publicPath: '/dist-tests/'
    },
    module: {
        loaders: [
            {
                test: /\.es6/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', 
            },
            { test: /\.json$/, loader: 'json' }
        ],
        preLoaders: [
            { test: /\.es6$/, exclude: /node_modules/, loader: 'eslint-loader' }
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
};
