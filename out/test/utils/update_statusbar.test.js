"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
//import { spy } from 'ts-mockito';
const update_statusbar_1 = require("../../utils/update_statusbar");
suite('updateStatusbar()', function () {
    test('An undefined editor calls btn.hide()', function () {
        const mockButton = { hide: () => { }, show: () => { } };
        const mockButtons = [mockButton];
        const spiedButton = chai_1.spy(mockButton);
        update_statusbar_1.default(undefined, mockButtons);
        chai_1.expect(spiedButton.hide()).to.have.been.called();
        //assert(spiedButton.hide().toHaveBeenCalled());
    });
});
c;
//# sourceMappingURL=update_statusbar.test.js.map