import * as vscode from 'vscode';
import * as nls from 'vscode-nls';
import { Command } from './extension.interface';

const localise: nls.LocalizeFunc = nls.config({ messageFormat: nls.MessageFormat.file })();
const priority: number = 1; // The higher the number the more left the button appears
const alignment: vscode.StatusBarAlignment = vscode.StatusBarAlignment.Left;
const commands: Command[] = [
  {
    command: 'quokka.makeQuokkaFromExistingFile',
    text: localise('start.text', 'Q +'),
    tooltip: localise('start.tooltip', 'Start Quokka (current file)'),
  },
  {
    command: 'quokka.stopCurrent',
    text: localise('stop.text', 'Q -'),
    tooltip: localise('stop.tooltip', 'Stop Quokka (current file)'),
  },
  {
    command: 'quokka.stopAll',
    text: localise('stopall.text', 'Q - -'),
    tooltip: localise('stopall.tooltip', 'Stop Quokka (all files)'),
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
