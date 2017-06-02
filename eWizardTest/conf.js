/*
 //Start webdriver
 webdriver-manager update
 webdriver-manager start
 //Для установки всех зависимостей из package.json
 npm install
*/

// Html Screenshot Reporter
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: 'report/screenshots',
    filename: 'my-report.html'
});

//Spec Reporter
const SpecReporter = require('jasmine-spec-reporter');

//Jasmine Reporters
const jasmineReporters = require('jasmine-reporters');

// conf.js
exports.config = {
    baseUrl: 'https://release.ewizard.io',
    framework: 'jasmine2',
    maxInstances: 1,
    allScriptsTimeout: 500000,
    getPageTimeout: 15000,
    defaultTimeoutInterval: 15000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    shardTestFiles: true,

    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        './specs/login/*',
        './specs/content/eDetailers/eDetailers.spec.js',
        './specs/content/eDetailers/structure.spec.js',
        './specs/content/eDetailers/presentation/add_components.spec.js'
    ],


    // Html Screenshot Reporter
    beforeLaunch() {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    onPrepare() {
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'report',
            filePrefix: 'xmloutput',
        }));
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all'
        }));
        jasmine.getEnv().addReporter(reporter);
    },
    afterLaunch(exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }

};