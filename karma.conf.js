process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox', '--disable-translate', '--disable-extensions', '--remote-debugging-port=9223'],
            },
        },
        frameworks: ['mocha', 'chai'],
        files: [
            'tests/**/*.js',
        ],
        preprocessors: {
            'tests/**/*.js': ['webpack'],
        },
        reporters: ['mocha', 'coverage', 'coveralls'],
        mochaReporter: {
            showDiff: true,
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage',
        },
        webpack: {
            mode: 'none',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader?cacheDirectory=true',
                    },
                ],
            },
        },
    });
};
