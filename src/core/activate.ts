import * as vscode from 'vscode';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchEditors from '../utils/watch_editors';
import { QUOKKA_EXT_NAME } from '../constants/quokka';

export function activate() {
  if (vscode.extensions.getExtension(QUOKKA_EXT_NAME) === undefined) {
    return;
  }

  const buttons: vscode.StatusBarItem[] = createButtons();
  watchEditors(buttons);
  updateStatusbar(vscode.window.activeTextEditor, buttons);
}

export default activate;
