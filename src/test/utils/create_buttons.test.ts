import * as assert from 'assert';
import * as vscode from 'vscode';
import createButtons from '../../utils/create_buttons';
import { Button } from '../../types/buttons';

suite('createButtons()', function() {
  const buttons: Button[] = [
    {
      command: 'cmd-1',
      text: 'text-1',
      tooltip: 'toolti-1',
    },
    {
      command: 'cmd-2',
      text: 'text-2',
      tooltip: 'toolti-2',
    },
  ];
  const result: vscode.StatusBarItem[] = createButtons(buttons);

  test('Returns the correct number of buttons', function() {
    assert.equal(result.length, buttons.length);
  });

  result.forEach((button: vscode.StatusBarItem, index: number) => {
    suite(`Button ${index}:`, function() {
      test(`command is "${button.command}"`, function() {
        assert.strictEqual(result[index].command, button.command);
      });

      test(`text is "${button.text}"`, function() {
        assert.strictEqual(result[index].text, button.text);
      });

      test(`tooltip is "${button.tooltip}"`, function() {
        assert.strictEqual(result[index].tooltip, button.tooltip);
      });
    });
  });
});
