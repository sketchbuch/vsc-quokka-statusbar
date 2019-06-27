"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const priority = 1; // The higher the number the more left the button appears
const alignment = vscode.StatusBarAlignment.Left;
const commands = [
    {
        command: 'quokka.makeQuokkaFromExistingFile',
        text: 'Q +',
        tooltip: 'Start Quokka (current file)',
    },
    {
        command: 'quokka.stopCurrent',
        text: 'Q -',
        tooltip: 'Stop Quokka (current file)',
    },
    {
        command: 'quokka.stopAll',
        text: 'Q - -',
        tooltip: 'Stop Quokka (all files)',
    },
];
function activate(context) {
    const quokka = vscode.extensions.getExtension('wallabyjs.quokka-vscode');
    if (quokka === undefined) {
        return;
    }
    commands.forEach((command) => {
        const newBtn = vscode.window.createStatusBarItem(alignment, priority);
        newBtn.command = command.command;
        newBtn.text = command.text;
        newBtn.tooltip = command.tooltip;
        newBtn.show();
    });
}
exports.activate = activate;
exports.default = activate;
//# sourceMappingURL=activate.js.map