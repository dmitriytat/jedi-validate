var webpack = require('webpack');

module.exports = {
    entry: {
        "jedi-validate": "./src/jedi-validate.es6",
        "jedi-validate.min": "./src/jedi-validate.es6"
    },
    devtool: "source-map",
    output: {
        path: "./dist",
        filename: "[name].js",
        libraryTarget: "umd",
        library: "JediValidate",
        sourceMapFilename: "[name].map"
    },
    module: {
        loaders: [
            {
                test: /\.es6/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.json$/, loader: "json" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
