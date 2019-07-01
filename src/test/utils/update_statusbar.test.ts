import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import updateStatusbar from '../../utils/update_statusbar';

const getMockEditor = (languageId: string) => {
  return { document: { languageId } } as vscode.TextEditor;
};

suite('updateStatusbar()', function() {
  let mockButton: vscode.StatusBarItem;
  let mockButtons: vscode.StatusBarItem[];
  let spiedHide: sinon.SinonSpy<[], void>;
  let spiedShow: sinon.SinonSpy<[], void>;

  beforeEach(() => {
    mockButton = { hide: () => {}, show: () => {} } as vscode.StatusBarItem;
    mockButtons = [mockButton];
    spiedHide = sinon.spy(mockButton, 'hide');
    spiedShow = sinon.spy(mockButton, 'show');
  });

  afterEach(() => {
    spiedHide.restore();
    spiedShow.restore();
  });

  test('btn.hide() called if editor is undefined', function() {
    updateStatusbar(undefined, mockButtons);
    assert(spiedHide.calledOnce);
    assert(spiedShow.notCalled);
  });

  test('btn.hide() called if editor is not "javascript/typescript"', function() {
    const editor = getMockEditor('css');
    updateStatusbar(editor, mockButtons);
    assert(spiedHide.calledOnce);
    assert(spiedShow.notCalled);
  });

  test('btn.show() called if editor is "javascript"', function() {
    const editor = getMockEditor('javascript');
    updateStatusbar(editor, mockButtons);
    assert(spiedHide.notCalled);
    assert(spiedShow.calledOnce);
  });

  test('btn.show() called if editor is "typescript"', function() {
    const editor = getMockEditor('typescript');
    updateStatusbar(editor, mockButtons);
    assert(spiedHide.notCalled);
    assert(spiedShow.calledOnce);
  });
});
