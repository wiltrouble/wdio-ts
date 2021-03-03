"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("./page");
class SecurePage extends page_1.default {
    get flashAlert() { return $('#flash'); }
}
exports.default = new SecurePage();
