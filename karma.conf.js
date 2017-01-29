module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai'],
        files: [
            './tests/**/*.es6',
        ],
        preprocessors: {
            './tests/**/*.es6': ['webpack'],
        },
        reporters: ['mocha'],
        mochaReporter: {
            showDiff: true,
        },
        webpack: {
            module: {
                rules: [
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
        },
    });
};
