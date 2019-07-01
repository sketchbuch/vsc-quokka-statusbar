"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const sinon = require("sinon");
const mocha_1 = require("mocha");
const update_statusbar_1 = require("../../utils/update_statusbar");
const getMockEditor = (languageId) => {
    return { document: { languageId } };
};
suite('updateStatusbar()', function () {
    let mockButton;
    let mockButtons;
    let spiedHide;
    let spiedShow;
    mocha_1.beforeEach(() => {
        mockButton = { hide: () => { }, show: () => { } };
        mockButtons = [mockButton];
        spiedHide = sinon.spy(mockButton, 'hide');
        spiedShow = sinon.spy(mockButton, 'show');
    });
    mocha_1.afterEach(() => {
        spiedHide.restore();
        spiedShow.restore();
    });
    test('btn.hide() called if editor is undefined', function () {
        update_statusbar_1.default(undefined, mockButtons);
        assert(spiedHide.calledOnce);
        assert(spiedShow.notCalled);
    });
    test('btn.hide() called if editor is not "javascript/typescript"', function () {
        const editor = getMockEditor('css');
        update_statusbar_1.default(editor, mockButtons);
        assert(spiedHide.calledOnce);
        assert(spiedShow.notCalled);
    });
    test('btn.show() called if editor is "javascript"', function () {
        const editor = getMockEditor('javascript');
        update_statusbar_1.default(editor, mockButtons);
        assert(spiedHide.notCalled);
        assert(spiedShow.calledOnce);
    });
    test('btn.show() called if editor is "typescript"', function () {
        const editor = getMockEditor('typescript');
        update_statusbar_1.default(editor, mockButtons);
        assert(spiedHide.notCalled);
        assert(spiedShow.calledOnce);
    });
});
//# sourceMappingURL=update_statusbar.test.js.map