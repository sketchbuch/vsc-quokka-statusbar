import * as vscode from 'vscode';
import updateStatusbar from './update_statusbar';

const watchEditors = (buttons: vscode.StatusBarItem[]): void => {
  vscode.window.onDidChangeActiveTextEditor((editor: vscode.TextEditor | undefined) => {
    updateStatusbar(editor, buttons);
  });

  // Called when active editor language is changed
  vscode.workspace.onDidOpenTextDocument(() => {
    updateStatusbar(vscode.window.activeTextEditor, buttons);
  });
};

export default watchEditors;
