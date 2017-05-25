const config = require('../../../config/configEDetailers.json');

class EDetailers {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    chooseFirstCard() {
        const firstCard = this.element(this.byCss(config.elements.firstCard));
        return firstCard.click();
    }

    openStructure() {
        const firstCardStructure = this.element(this.byCss(config.elements.firstCardStructure));
        return firstCardStructure.click();
    }

}

module.exports = EDetailers;