import * as vscode from 'vscode';
import * as nls from 'vscode-nls';
import { BTN_ALIGNMENT, BTN_PRIORITY } from '../constants/buttons';
import { Button } from '../buttons/buttons.interface';
import { buttons } from '../buttons/buttons';

const createButtons = (): vscode.StatusBarItem[] => {
  return buttons.map(
    (command: Button): vscode.StatusBarItem => {
      const newBtn: vscode.StatusBarItem = vscode.window.createStatusBarItem(BTN_ALIGNMENT, BTN_PRIORITY);

      newBtn.command = command.command;
      newBtn.text = command.text;
      newBtn.tooltip = command.tooltip;

      return newBtn;
    }
  );
};

export default createButtons;
