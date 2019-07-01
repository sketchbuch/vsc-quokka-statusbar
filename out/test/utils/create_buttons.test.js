"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const create_buttons_1 = require("../../utils/create_buttons");
const mockButtons_1 = require("../mocks/mockButtons");
suite('createButtons()', function () {
    const result = create_buttons_1.default(mockButtons_1.default);
    test('Returns the correct number of buttons', function () {
        assert.strictEqual(result.length, mockButtons_1.default.length);
    });
    result.forEach((button, index) => {
        suite(`Button ${index}:`, function () {
            test(`command is "${button.command}"`, function () {
                assert.strictEqual(result[index].command, button.command);
            });
            test(`text is "${button.text}"`, function () {
                assert.strictEqual(result[index].text, button.text);
            });
            test(`tooltip is "${button.tooltip}"`, function () {
                assert.strictEqual(result[index].tooltip, button.tooltip);
            });
        });
    });
});
//# sourceMappingURL=create_buttons.test.js.map