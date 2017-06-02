const common = require('../../../../common/common.js');
const config = require('../../../../config/configComponents.json');

class AddComponent {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    waitComponentInSidebar(){
        const components_gallery = element(by.css(config.components_gallery));
        return common.waitForElement(components_gallery);
    };

    addComponentFromGallery(){
        const component = this.element(this.byCss(config.components.button));
        return component.click();
    }

}

module.exports = AddComponent;