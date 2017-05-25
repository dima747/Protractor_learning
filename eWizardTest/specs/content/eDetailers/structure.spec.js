"use strict";
describe('Structure', function () {

    //Structure model
    const Structure = require('../../../pages/content/eDetailers/structure.page.js');

    let structure;

    beforeEach(() => {
        structure = new Structure(element, by);
        browser.ignoreSynchronization = false;//wait for Angular
    });

    describe('go to Edit mode', () => {
        it('should navigate us to Edit mode', () => structure.goToEdit())
    });

});
