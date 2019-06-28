import * as nls from 'vscode-nls';
import { Button } from '../types/buttons';
import { QUOKKA_CMD_START_CUR, QUOKKA_CMD_STOP_ALL, QUOKKA_CMD_STOP_CUR } from '../constants/quokka';

const localise: nls.LocalizeFunc = nls.config({ messageFormat: nls.MessageFormat.file })();

export const buttons: Button[] = [
  {
    command: QUOKKA_CMD_START_CUR,
    text: localise('start.text', 'Q +'),
    tooltip: localise('start.tooltip', 'Start Quokka (current file)'),
  },
  {
    command: QUOKKA_CMD_STOP_CUR,
    text: localise('stop.text', 'Q -'),
    tooltip: localise('stop.tooltip', 'Stop Quokka (current file)'),
  },
  {
    command: QUOKKA_CMD_STOP_ALL,
    text: localise('stopall.text', 'Q - -'),
    tooltip: localise('stopall.tooltip', 'Stop Quokka (all files)'),
  },
];
