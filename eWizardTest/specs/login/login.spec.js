//Controller
"use strict";
describe('Login', function () {

    //Class(Model)
    const Login = require('../../pages/login-page/login-set.page');

    let login;

    //
    beforeEach(() => {
        login = new Login(element, by);
        browser.ignoreSynchronization = true;//do not wait for Angular
    });

    describe('get login page', () => {
        it('get login page', () => login.getWebPage());
    });

    describe('login to website', () => {
        it('login to website', () => login.submitLoginForm())
    });

});

