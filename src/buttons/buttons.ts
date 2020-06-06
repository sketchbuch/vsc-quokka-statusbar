
import { Button } from '../types/buttons';
import { QUOKKA_CMD_START_CUR, QUOKKA_CMD_STOP_ALL, QUOKKA_CMD_STOP_CUR } from '../constants/quokka';
import { t } from '../localisation';

const buttons: Button[] = [
  {
    command: QUOKKA_CMD_START_CUR,
    text: t('btn.start'),
    tooltip: t('btn.start.tooltip'),
  },
  {
    command: QUOKKA_CMD_STOP_CUR,
    text: t('btn.stop'),
    tooltip: t('btn.stop.tooltip'),
  },
  {
    command: QUOKKA_CMD_STOP_ALL,
    text: t('btn.stopAll'),
    tooltip: t('btn.stopAll.tooltip'),
  },
];

export default buttons;
