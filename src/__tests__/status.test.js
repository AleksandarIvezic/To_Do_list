/**
 * @jest-environment jsdom
 */
import change from '../status';

describe('Test if status function', () => {
  document.body.innerHTML = '<div>'
   + '  <ul>'
   + '    <li> <span><i id="square" class="far fa-square"><p id = "desc-0">Task 1</p></span>'
   + '  </ul>'
   + '</div>';
  const square = document.getElementById('square');
  const task = { description: 'Task 1', completed: false, index: 0 };
  it('updates task status', () => {
    square.addEventListener('click', (e) => {
      change(e, task);
    });
    const event = new Event('click');
    square.dispatchEvent(event);
    expect(task.completed).toBe(true);
  });
  it('updates icon class', () => {
    expect(square.className).toBe('fas fa-check');
  });
});