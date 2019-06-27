import * as vscode from 'vscode';
import { Command } from './extension.interface';

const priority: number = 1; // The higher the number the more left the button appears
const alignment: vscode.StatusBarAlignment = vscode.StatusBarAlignment.Left;
const commands: Command[] = [
  {
    command: 'quokka.makeQuokkaFromExistingFile',
    text: 'Q +',
    tooltip: 'Start Quokka (current file)',
  },
  {
    command: 'quokka.stopCurrent',
    text: 'Q -',
    tooltip: 'Stop Quokka (current file)',
  },
  {
    command: 'quokka.stopAll',
    text: 'Q - -',
    tooltip: 'Stop Quokka (all files)',
  },
];

export function activate(context: vscode.ExtensionContext) {
  const quokka: vscode.Extension<any> | undefined = vscode.extensions.getExtension('wallabyjs.quokka-vscode');

  if (quokka === undefined) {
    return;
  }

  commands.forEach((command: Command) => {
    const newBtn: vscode.StatusBarItem = vscode.window.createStatusBarItem(alignment, priority);
    newBtn.command = command.command;
    newBtn.text = command.text;
    newBtn.tooltip = command.tooltip;

    newBtn.show();
  });
}

export default activate;
