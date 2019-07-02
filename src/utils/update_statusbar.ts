import * as vscode from 'vscode';

const updateStatusbar = (editor: vscode.TextEditor | undefined, buttons: vscode.StatusBarItem[]): void => {
  let showButtons: boolean = false;

  if (editor !== undefined) {
    const {
      document: { languageId },
    } = editor;

    if (languageId.indexOf('javascript') === 0 || languageId.indexOf('typescript') === 0) {
      showButtons = true;
    }
  }

  buttons.forEach((btn: vscode.StatusBarItem) => {
    if (showButtons) {
      btn.show();
    } else {
      btn.hide();
    }
  });
};

export default updateStatusbar;
