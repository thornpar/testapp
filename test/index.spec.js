var MainPage = require('./pageobject');
var page = {};

describe('Game of thrones charater list application', function() {
    beforeEach(function () {
        page = new MainPage();
        page.loadPage();
    });

    it('should have a title', function() {
        expect(page.getTitle()).toEqual('Game of thrones rulez!');
    });

    it('url should default to /list', function () {
        expect(page.getUrl()).toEqual('/list');
    });

    it('the search input should be present', function () {
        expect(page.getSearchInput().isPresent()).toEqual(true);
    });

});