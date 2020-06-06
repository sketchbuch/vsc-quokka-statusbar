
import { Button } from '../types/buttons';
import { QUOKKA_CMD_START_CUR, QUOKKA_CMD_STOP_ALL, QUOKKA_CMD_STOP_CUR } from '../constants/quokka';

const buttons: Button[] = [
  {
    command: QUOKKA_CMD_START_CUR,
    text: 'btn.start',
    tooltip: 'btn.start.tooltip',
  },
  {
    command: QUOKKA_CMD_STOP_CUR,
    text: 'btn.stop',
    tooltip: 'btn.stop.tooltip',
  },
  {
    command: QUOKKA_CMD_STOP_ALL,
    text: 'btn.stopAll',
    tooltip: 'btn.stopAll.tooltip',
  },
];

export default buttons;
