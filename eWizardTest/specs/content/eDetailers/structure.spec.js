"use strict";
describe('Structure', function () {

    //Structure model
    const Structure = require('../../../pages/content/eDetailers/structure.page.js');

    let structure;

    beforeEach(() => {
        browser.sleep(250);
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
        it('should navigate us to Edit mode', () => structure.goToEditFirstSlide())
    });

    describe('wait component in sidebar', () => {
        it('should wait component in sidebar', () => {
            structure.waitComponentInSidebar()
        })
    });

});
