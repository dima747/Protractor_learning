"use strict";
describe('AddComponents', function () {

    //Add components class model
    const AddComponents = require('../../../../pages/content/eDetailers/presentation/add_component.page.js');

    let addComponents;

    beforeEach(() => {
        browser.sleep(250);
        addComponents = new AddComponents(element, by);
        browser.ignoreSynchronization = false;//wait for Angular
    });

    describe('wait component in sidebar', () => {
        it('should wait component in sidebar', () => {
            addComponents.waitComponentInSidebar()
        })
    });

    describe('add component from gallery', () => {
        it('should add component to presentation', () => addComponents.addComponentFromGallery())
    });

});
