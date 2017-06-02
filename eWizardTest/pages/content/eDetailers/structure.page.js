const config = require('../../../config/configStructure.json');

class Structure {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    goToEditFirstSlide(){
        const eleFirstSlide = this.element(this.byCss(config.slides.firstSlide));
        return browser.actions().doubleClick(eleFirstSlide).perform();
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

}

module.exports = Structure;