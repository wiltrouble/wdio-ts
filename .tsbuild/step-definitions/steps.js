"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const login_page_1 = require("../pageobjects/login.page");
const secure_page_1 = require("../pageobjects/secure.page");
const pages = {
    login: login_page_1.default
};
cucumber_1.Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});
cucumber_1.When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await login_page_1.default.login(username, password);
});
cucumber_1.Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(secure_page_1.default.flashAlert).toBeExisting();
    await expect(secure_page_1.default.flashAlert).toHaveTextContaining(message);
});
