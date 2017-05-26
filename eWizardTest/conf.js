// conf.js
exports.config = {
    baseUrl: 'https://release.ewizard.io',
    framework: 'jasmine2',
    maxInstances: 1,
    allScriptsTimeout: 500000,
    getPageTimeout: 30000,
    defaultTimeoutInterval: 15000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [
        './specs/login/*',
        './specs/content/eDetailers/eDetailers.spec.js',
        './specs/content/eDetailers/structure.spec.js'
    ]
}