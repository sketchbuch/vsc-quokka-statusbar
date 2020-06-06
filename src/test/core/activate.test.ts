import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';
import { afterEach, beforeEach } from 'mocha';
import * as createButtons from '../../utils/create_buttons';
import * as updateStatusbar from '../../utils/update_statusbar';
import * as watchEditors from '../../utils/watch_editors';
import * as ext from '../../core/activate';

suite('activate()', function() {
  const extensionPath = `${__dirname}../../../../`;

  test('Activates corectly', function() {
    let spiedSetupExtension: sinon.SinonSpy = sinon.spy(ext, 'setupExtension');
    ext.activate({ extensionPath } as vscode.ExtensionContext);
    assert(spiedSetupExtension.called);
  });

  suite('setupExtension()', function() {
    let spiedCreateButtons: sinon.SinonSpy;
    let spiedWatchEditors: sinon.SinonSpy;
    let spiedUpdateStatusbar: sinon.SinonSpy;

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

    test('Does not setup if Quokka is undefined', function() {
      ext.setupExtension(undefined, extensionPath, 'en');
      assert(spiedCreateButtons.notCalled);
      assert(spiedWatchEditors.notCalled);
      assert(spiedUpdateStatusbar.notCalled);
    });

    test('Sets up correctly if Quokka exists', function() {
      ext.setupExtension({} as vscode.Extension<any>, extensionPath, 'en');
      assert(spiedCreateButtons.called);
      assert(spiedWatchEditors.called);
      assert(spiedUpdateStatusbar.called);
    });
  });
});
