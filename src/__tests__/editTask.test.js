/**
 * @jest-environment jsdom
 */
import { describe, expect, it } from '@jest/globals';
import { editTask, updateTask } from '../crud';

describe('Test editTask', () => {
  document.body.innerHTML = '<div>'
   + '  <ul>'
   + '    <li> <span><p id = "desc-0">Task 1</p></span>'
   + '  </ul>'
   + '</div>';
  const desc = document.getElementById('desc-0');
  const task = { description: 'Task 1', completed: false, index: 0 };
  // spy.mockReturnValue(descMock);
  it('check if input element is added to descMock', () => {
    desc.addEventListener('click', (e) => {
      editTask(e, task);
    });
    const event = new Event('click');
    desc.dispatchEvent(event);
    expect(desc.innerHTML).toEqual('<input id="0">');
  });
});
describe('Test updateTask', () => {
  document.body.innerHTML = '<div>'
   + '  <ul>'
   + '    <li> <span><p id = "desc-0"><input id="0"></p></span>'
   + '  </ul>'
   + '</div>';
  const descInput = document.getElementById('0');
  const desc = document.getElementById('desc-0');
  const task = { description: 'Task 1', completed: false, index: 0 };
  it('Check if updateTask is functional', () => {
    descInput.value = 'Task 2';
    descInput.addEventListener('focusout', (e) => {
      updateTask(e, task);
    });

    const event = new Event('focusout');
    descInput.dispatchEvent(event);

    expect(desc.innerText).toBe('Task 2');
  });
});