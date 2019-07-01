import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import * as createButtons from '../../utils/create_buttons';
import * as updateStatusbar from '../../utils/update_statusbar';
import * as watchEditors from '../../utils/watch_editors';
import activate from '../../core/activate';
import { Button } from '../../types/buttons';

type SpiedActiveTextEditor = sinon.SinonSpy<any[], any>;
type SpiedCreateButtons = sinon.SinonSpy<[Button[]], vscode.StatusBarItem[]>;
type SpiedWatchEditors = sinon.SinonSpy<[vscode.StatusBarItem[]], void>;
type SpiedUpdateStatusbar = sinon.SinonSpy<[vscode.TextEditor | undefined, vscode.StatusBarItem[]], void>;

suite('activate()', function() {
  let spiedCreateButtons: SpiedCreateButtons;
  let spiedWatchEditors: SpiedWatchEditors;
  let spiedUpdateStatusbar: SpiedUpdateStatusbar;

  beforeEach(function() {
    spiedCreateButtons = sinon.spy(createButtons, 'default');
    spiedWatchEditors = sinon.spy(watchEditors, 'default');
    spiedUpdateStatusbar = sinon.spy(updateStatusbar, 'default');
  });

  afterEach(function() {
    spiedCreateButtons.restore();
    spiedWatchEditors.restore();
    spiedUpdateStatusbar.restore();
  });

  test('Returns early if no Quokka', function() {
    // TODO - find out how to mock vscode.extensions.getExtension... I wish jest could be used.
    activate();
    // assert(spiedActiveTextEditor.called);
    assert(spiedCreateButtons.called);
    assert(spiedWatchEditors.called);
    assert(spiedUpdateStatusbar.called);
  });

  test('Activates correctly if Quokka exists', function() {
    activate();
    assert(spiedCreateButtons.called);
    assert(spiedWatchEditors.called);
    assert(spiedUpdateStatusbar.called);
  });
});
