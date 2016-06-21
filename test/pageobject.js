var MainPage = function () {

    var searchInputElement = element(by.css('.search-input'));

    this.loadPage = function () {
        return browser.get('http://localhost:3000/');
    };
    this.getTitle  = function () {
        return browser.getTitle();
    };
    this.getUrl = function () {
        return browser.getLocationAbsUrl();
    };
    this.getSearchInput = function () {
        return searchInputElement;
    };
};

module.exports = MainPage;
