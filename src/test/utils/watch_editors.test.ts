import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import createButtons from '../../utils/create_buttons';
import mockButtons from '../mocks/mockButtons';
import watchEditors from '../../utils/watch_editors';

type SpiedUpdateStatusbar = sinon.SinonSpy<
  [(e: vscode.TextEditor | undefined) => any, any?, (vscode.Disposable[] | undefined)?],
  vscode.Disposable
>;

suite('watchEditors()', function() {
  test('updateStatusbar() called in onDidChangeActiveTextEditor()', function() {
    const spiedUpdateStatusbar = sinon.spy(vscode.window, 'onDidChangeActiveTextEditor');
    const mockStatusButtons: vscode.StatusBarItem[] = createButtons(mockButtons);
    watchEditors(mockStatusButtons);
    assert(spiedUpdateStatusbar.called);
    spiedUpdateStatusbar.restore();
  });

  test('updateStatusbar() called in onDidOpenTextDocument()', function() {
    const spiedUpdateStatusbar = sinon.spy(vscode.workspace, 'onDidOpenTextDocument');
    const mockStatusButtons: vscode.StatusBarItem[] = createButtons(mockButtons);
    watchEditors(mockStatusButtons);
    assert(spiedUpdateStatusbar.called);
    spiedUpdateStatusbar.restore();
  });
});
