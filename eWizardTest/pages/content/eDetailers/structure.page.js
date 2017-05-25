const config = require('../../../config/configStructure.json');

class Structure {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    goToEdit() {
        const editBtn = this.element(this.byCss(config.leftnav.edit));
        return editBtn.click();
    }

}

module.exports = Structure;