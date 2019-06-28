"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const watchEditors = () => {
    vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (!editor) {
            // hide
            return;
        }
        if (editor.document.languageId === 'javascript' || editor.document.languageId === 'typescript') {
            // show
        }
        else {
            // hide
        }
    });
};
//# sourceMappingURL=editor_change.js.map