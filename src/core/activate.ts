import * as vscode from 'vscode';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchEditors from '../utils/watch_editors';
import { QUOKKA_EXT_NAME } from '../constants/quokka';

export function activate() {
  const quokka: vscode.Extension<any> | undefined = vscode.extensions.getExtension(QUOKKA_EXT_NAME);

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
