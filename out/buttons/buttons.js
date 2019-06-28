"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
const localise = nls.config({ messageFormat: nls.MessageFormat.file })();
exports.buttons = [
    {
        command: 'quokka.makeQuokkaFromExistingFile',
        text: localise('start.text', 'Q +'),
        tooltip: localise('start.tooltip', 'Start Quokka (current file)'),
    },
    {
        command: 'quokka.stopCurrent',
        text: localise('stop.text', 'Q -'),
        tooltip: localise('stop.tooltip', 'Stop Quokka (current file)'),
    },
    {
        command: 'quokka.stopAll',
        text: localise('stopall.text', 'Q - -'),
        tooltip: localise('stopall.tooltip', 'Stop Quokka (all files)'),
    },
];
//# sourceMappingURL=buttons.js.map