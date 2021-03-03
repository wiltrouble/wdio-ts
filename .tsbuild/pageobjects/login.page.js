"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("./page");
class LoginPage extends page_1.default {
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('button[type="submit"]'); }
    async login(username, password) {
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }
    open() {
        return super.open('login');
    }
}
exports.default = new LoginPage();
