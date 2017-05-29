const config = require('../../../config/configStructure.json');

class Structure {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    goToEditFirstSlide(){
        const eleFirstSlide = this.element(this.byCss(config.slides.firstSlide));
        return eleFirstSlide.click();
    };

    goToEditMode() {
        const editBtn = this.element(this.byCss(config.leftnav.edit));
        return editBtn.click();
    }

}

module.exports = Structure;