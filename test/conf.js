// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['pageobject.js','characterdetails.spec.js', 'characterlist.spec.js', 'index.spec.js']
}