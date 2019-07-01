"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const sinon = require("sinon");
const mocha_1 = require("mocha");
const createButtons = require("../../utils/create_buttons");
const updateStatusbar = require("../../utils/update_statusbar");
const watchEditors = require("../../utils/watch_editors");
const activate_1 = require("../../core/activate");
suite('activate()', function () {
    let spiedCreateButtons;
    let spiedWatchEditors;
    let spiedUpdateStatusbar;
    mocha_1.beforeEach(function () {
        spiedCreateButtons = sinon.spy(createButtons, 'default');
        spiedWatchEditors = sinon.spy(watchEditors, 'default');
        spiedUpdateStatusbar = sinon.spy(updateStatusbar, 'default');
    });
    mocha_1.afterEach(function () {
        spiedCreateButtons.restore();
        spiedWatchEditors.restore();
        spiedUpdateStatusbar.restore();
    });
    test('Returns early if no Quokka', function () {
        // TODO - find out how to mock vscode.extensions.getExtension... I wish jest could be used.
        activate_1.default();
        // assert(spiedActiveTextEditor.called);
        assert(spiedCreateButtons.called);
        assert(spiedWatchEditors.called);
        assert(spiedUpdateStatusbar.called);
    });
    test('Activates correctly if Quokka exists', function () {
        activate_1.default();
        assert(spiedCreateButtons.called);
        assert(spiedWatchEditors.called);
        assert(spiedUpdateStatusbar.called);
    });
});
//# sourceMappingURL=activate.test.js.map