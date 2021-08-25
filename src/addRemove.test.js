import { addTask, removeTask } from './crud';

describe('Test if addTask function', () => {
  it('Add task to taskList', () => {
    const tasksList = [];
    const description = 'Task 1';
    addTask(tasksList, description);
    expect(tasksList).toBe([{description: 'Task 1', completed: false, index: 0}]);
  });
});