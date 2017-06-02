"use strict";
describe('eDetailers', function () {

    //eDetailers model
    const EDetailers = require('../../../pages/content/eDetailers/eDetailers.page.js');

    let eDetailers;

    beforeEach(() => {
        browser.sleep(350);
        eDetailers = new EDetailers(element, by);
        browser.ignoreSynchronization = false;//wait for Angular
    });

    describe('Choose first presentation', () => {
        it('Should choose first presentation', () => eDetailers.chooseFirstCard())
    });

    describe('Click on Structure btn', () => {
        it('Should click on Structure btn', () => eDetailers.openStructure())
    });

});
