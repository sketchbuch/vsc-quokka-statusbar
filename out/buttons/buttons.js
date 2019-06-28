"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
const quokka_1 = require("../constants/quokka");
const localise = nls.config({ messageFormat: nls.MessageFormat.file })();
exports.buttons = [
    {
        command: quokka_1.QUOKKA_CMD_START_CUR,
        text: localise('start.text', 'Q +'),
        tooltip: localise('start.tooltip', 'Start Quokka (current file)'),
    },
    {
        command: quokka_1.QUOKKA_CMD_STOP_CUR,
        text: localise('stop.text', 'Q -'),
        tooltip: localise('stop.tooltip', 'Stop Quokka (current file)'),
    },
    {
        command: quokka_1.QUOKKA_CMD_STOP_ALL,
        text: localise('stopall.text', 'Q - -'),
        tooltip: localise('stopall.tooltip', 'Stop Quokka (all files)'),
    },
];
//# sourceMappingURL=buttons.js.map