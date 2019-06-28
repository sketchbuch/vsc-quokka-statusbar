"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateStatusbar = (editor, buttons) => {
    let showButtons = false;
    if (editor !== undefined) {
        const { document: { languageId }, } = editor;
        if (languageId === 'javascript' || languageId === 'typescript') {
            showButtons = true;
        }
    }
    if (showButtons) {
        buttons.forEach((btn) => {
            btn.show();
        });
    }
    else {
        buttons.forEach((btn) => {
            btn.hide();
        });
    }
};
exports.default = updateStatusbar;
//# sourceMappingURL=update_statusbar.js.map