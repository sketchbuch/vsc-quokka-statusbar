"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const watch_editors_1 = require("./utils/watch_editors");
const create_buttons_1 = require("./utils/create_buttons");
function activate() {
    const quokka = vscode.extensions.getExtension('wallabyjs.quokka-vscode');
    if (quokka === undefined) {
        return;
    }
    create_buttons_1.default();
    watch_editors_1.default();
}
exports.activate = activate;
exports.default = activate;
//# sourceMappingURL=activate.js.map