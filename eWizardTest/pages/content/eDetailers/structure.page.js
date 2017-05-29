const config = require('../../../config/configStructure.json');
const common= require('../../../common/common.js');

const eleComponent = element(by.css('.components-list :nth-child(1)[ng-repeat="galleryItem in gallery.displayedList"]'));

class Structure {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    goToEditFirstSlide(){
        const eleFirstSlide = this.element(this.byCss(config.slides.firstSlide));
        return eleFirstSlide.click();
    }

    goToView() {
        const editBtn = this.element(this.byCss(config.leftnav.view));
        return editBtn.click();
    }
    goToEdit() {
        const editBtn = this.element(this.byCss(config.leftnav.edit));
        return editBtn.click();
    }
    goToSettings() {
        const editBtn = this.element(this.byCss(config.leftnav.settings));
        return editBtn.click();
    }
    goToPublish() {
        const editBtn = this.element(this.byCss(config.leftnav.publish));
        return editBtn.click();
    }

    waitComponentInSidebar(){
        return common.waitForElement(eleComponent)
    };

}

module.exports = Structure;