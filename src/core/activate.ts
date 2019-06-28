import * as vscode from 'vscode';
import watchEditors from '../utils/watch_editors';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';

export function activate() {
  const quokka: vscode.Extension<any> | undefined = vscode.extensions.getExtension('wallabyjs.quokka-vscode');

  if (quokka === undefined) {
    return;
  }

  const buttons: vscode.StatusBarItem[] = createButtons();
  watchEditors(buttons);

  if (vscode.window.activeTextEditor !== undefined) {
    updateStatusbar(vscode.window.activeTextEditor, buttons);
  }
}

export default activate;
