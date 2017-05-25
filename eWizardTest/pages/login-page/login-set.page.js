const config = require('../../config/configLogin.json');

class Login {
    constructor(element, {css}) {
        this.element = element;
        this.byCss = css;
    }

    static get selectors() {
        return {
            passwordFild: '#password',
            submit: '#kc-login',
            loginFild: '#username',
        };
    }

    getWebPage() {
        return browser.get('')
    }

    submitLoginForm() {
        const userName = this.element(this.byCss(Login.selectors.loginFild));
        const password = this.element(this.byCss(Login.selectors.passwordFild));
        const submitButton = this.element(this.byCss(Login.selectors.submit));

        return userName.sendKeys(config.user.login)
            .then(() => password.sendKeys(config.user.password))
            .then(() => submitButton.click())
    }

}

module.exports = Login;