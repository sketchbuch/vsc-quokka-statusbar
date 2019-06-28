"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const watchEditors = () => {
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor === undefined) {
            console.log('HIDE - no editors');
        }
        else if (editor.document.languageId === 'javascript' || editor.document.languageId === 'typescript') {
            console.log('Show');
        }
        else {
            console.log('HIDE - not js/ts');
        }
    });
};
exports.default = watchEditors;
//# sourceMappingURL=watch_editors.js.map