import { getVscodeLang, loadTranslations } from 'vscode-ext-localisation';
import * as vscode from 'vscode';
import { QUOKKA_EXT_NAME } from '../constants/quokka';
import buttons from '../buttons/buttons';
import createButtons from '../utils/create_buttons';
import updateStatusbar from '../utils/update_statusbar';
import watchEditors from '../utils/watch_editors';

export const setupExtension = (quokkaExt: vscode.Extension<any> | undefined, extensionPath: string, lang: string) => {
  if (quokkaExt !== undefined) {
    loadTranslations(lang, extensionPath);
    const statusButtons: vscode.StatusBarItem[] = createButtons(buttons);
    watchEditors(statusButtons);
    updateStatusbar(vscode.window.activeTextEditor, statusButtons);
  }
};

export const activate = (context: vscode.ExtensionContext): void => {
  setupExtension(vscode.extensions.getExtension(QUOKKA_EXT_NAME), context.extensionPath, getVscodeLang(process.env.VSCODE_NLS_CONFIG));
};

export default activate;
