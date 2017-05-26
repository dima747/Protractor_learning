"use strict";
describe('Structure', function () {

    //Structure model
    const Structure = require('../../../pages/content/eDetailers/structure.page.js');

    let structure;

    beforeEach(() => {
        structure = new Structure(element, by);
        browser.ignoreSynchronization = false;//wait for Angular
    });

    describe('Waiting for loading', () => {
        it('should check when new page is loaded', function () {
            browser.getCurrentUrl();
            browser.getTitle().then(function (title) {
                return expect(title).toEqual('eWizard');
            });
        });
    });

    describe('go to Edit mode', () => {
        it('should navigate us to Edit mode', () => structure.goToEditMode())
    });

});
