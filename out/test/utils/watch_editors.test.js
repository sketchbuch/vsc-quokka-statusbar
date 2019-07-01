"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const assert = require("assert");
const sinon = require("sinon");
const create_buttons_1 = require("../../utils/create_buttons");
const mockButtons_1 = require("../mocks/mockButtons");
const watch_editors_1 = require("../../utils/watch_editors");
suite('watchEditors()', function () {
    test('updateStatusbar() called', function () {
        const spiedUpdateStatusbar = sinon.spy(vscode.window, 'onDidChangeActiveTextEditor');
        const mockStatusButtons = create_buttons_1.default(mockButtons_1.default);
        watch_editors_1.default(mockStatusButtons);
        assert(spiedUpdateStatusbar.called);
    });
});
//# sourceMappingURL=watch_editors.test.js.map