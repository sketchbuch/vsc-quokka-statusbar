"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const buttons_1 = require("../../buttons/buttons");
const quokka_1 = require("../../constants/quokka");
suite('buttons:', function () {
    test('Contains 3 buttons', function () {
        assert.strictEqual(buttons_1.default.length, 3);
    });
    test(`Button 0.command is "${quokka_1.QUOKKA_CMD_START_CUR}"`, function () {
        assert.strictEqual(buttons_1.default[0].command, quokka_1.QUOKKA_CMD_START_CUR);
    });
    test(`Button 1.command is "${quokka_1.QUOKKA_CMD_STOP_CUR}"`, function () {
        assert.strictEqual(buttons_1.default[1].command, quokka_1.QUOKKA_CMD_STOP_CUR);
    });
    test(`Button 2.command is "${quokka_1.QUOKKA_CMD_STOP_ALL}"`, function () {
        assert.strictEqual(buttons_1.default[2].command, quokka_1.QUOKKA_CMD_STOP_ALL);
    });
});
//# sourceMappingURL=buttons.test.js.map