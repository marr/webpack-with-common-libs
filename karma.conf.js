var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'inline-source-map';

// Karma configuration
module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
            }
        },

        // frameworks to use
        frameworks: ['mocha', 'chai', 'chai-sinon'],

        // list of files / patterns to load in the browser
        files: [
            //'node_modules/babel-core/browser-polyfill.js',
            'test/*_spec.js'
        ],

        // list of preprocessors
        preprocessors: {
            'test/*.js': [ 'webpack' ],
            'test/spec/*_spec.js': [ 'webpack' ]
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true,
            stats: { colors: true }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots', /* 'spec' */],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: [process.env.TRAVIS ? 'Firefox' : 'ChromeCanary'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        // List plugins explicitly, since autoloading karma-webpack
        // won't work here
        plugins: [
            require("karma-mocha"),
            //require("karma-spec-reporter"),
            require("karma-chrome-launcher"),
            //require("karma-firefox-launcher"),
            //require("karma-sourcemap-loader"),
            require("karma-webpack"),
            require("karma-chai"),
            require("karma-chai-sinon"),
        ]
    });
};


