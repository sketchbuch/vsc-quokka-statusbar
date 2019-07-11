import * as vscode from 'vscode';
import buttons from '../buttons/buttons';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchEditors from '../utils/watch_editors';
import { QUOKKA_EXT_NAME } from '../constants/quokka';

export const setupExtension = (quokkaExt: vscode.Extension<any> | undefined) => {
  if (quokkaExt !== undefined) {
    const statusButtons: vscode.StatusBarItem[] = createButtons(buttons);
    watchEditors(statusButtons);
    updateStatusbar(vscode.window.activeTextEditor, statusButtons);
  }
};

export const activate = (): void => {
  setupExtension(vscode.extensions.getExtension(QUOKKA_EXT_NAME));
};

export default activate;
