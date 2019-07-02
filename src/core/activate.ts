import * as vscode from 'vscode';
import buttons from '../buttons/buttons';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchEditors from '../utils/watch_editors';
import { QUOKKA_EXT_NAME } from '../constants/quokka';

const activate = (): void => {
  if (vscode.extensions.getExtension(QUOKKA_EXT_NAME) === undefined) {
    return;
  }

  const statusButtons: vscode.StatusBarItem[] = createButtons(buttons);
  watchEditors(statusButtons);
  updateStatusbar(vscode.window.activeTextEditor, statusButtons);
};

export default activate;
