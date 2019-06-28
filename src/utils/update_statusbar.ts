import * as vscode from 'vscode';

const updateStatusbar = (editor: vscode.TextEditor | undefined, buttons: vscode.StatusBarItem[]) => {
  let showButtons: boolean = false;

  if (editor !== undefined) {
    const {
      document: { languageId },
    } = editor;

    if (languageId === 'javascript' || languageId === 'typescript') {
      showButtons = true;
    }
  }

  if (showButtons) {
    buttons.forEach((btn: vscode.StatusBarItem) => {
      btn.show();
    });
  } else {
    buttons.forEach((btn: vscode.StatusBarItem) => {
      btn.hide();
    });
  }
};

export default updateStatusbar;
