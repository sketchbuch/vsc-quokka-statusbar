import * as assert from 'assert';
import buttons from '../../buttons/buttons';
import { QUOKKA_CMD_START_CUR, QUOKKA_CMD_STOP_CUR, QUOKKA_CMD_STOP_ALL } from '../../constants/quokka';

suite('buttons:', function() {
  test('Contains 3 buttons', function() {
    assert.strictEqual(buttons.length, 3);
  });

  test(`Button 0.command is "${QUOKKA_CMD_START_CUR}"`, function() {
    assert.strictEqual(buttons[0].command, QUOKKA_CMD_START_CUR);
  });

  test(`Button 1.command is "${QUOKKA_CMD_STOP_CUR}"`, function() {
    assert.strictEqual(buttons[1].command, QUOKKA_CMD_STOP_CUR);
  });

  test(`Button 2.command is "${QUOKKA_CMD_STOP_ALL}"`, function() {
    assert.strictEqual(buttons[2].command, QUOKKA_CMD_STOP_ALL);
  });
});
