import * as nls from 'vscode-nls';
import { Button } from './buttons.interface';

const localise: nls.LocalizeFunc = nls.config({ messageFormat: nls.MessageFormat.file })();

export const buttons: Button[] = [
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
