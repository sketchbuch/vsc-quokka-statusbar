"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const create_buttons_1 = require("../../utils/create_buttons");
suite('createButtons()', function () {
    const buttons = [
        {
            command: 'cmd-1',
            text: 'text-1',
            tooltip: 'toolti-1',
        },
        {
            command: 'cmd-2',
            text: 'text-2',
            tooltip: 'toolti-2',
        },
    ];
    const result = create_buttons_1.default(buttons);
    test('Returns the correct number of buttons', function () {
        assert.equal(result.length, buttons.length);
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
//# sourceMappingURL=create_buttons.test.1.js.map