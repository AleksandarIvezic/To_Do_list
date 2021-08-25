import { addTask, removeTask } from './crud';

describe('Test if addTask function', () => {
  const tasksList = [];

  it('Add task to taskList', () => {
    const description = 'Task 1';
    addTask(tasksList, description);
    expect(tasksList).toEqual([{ description: 'Task 1', completed: false, index: 0 }]);
  });
  it('Add another task to taskList', () => {
    const description = 'Task 2';
    addTask(tasksList, description);
    expect(tasksList).toEqual(expect.arrayContaining([{ description: 'Task 2', completed: false, index: 1 }]));
  });
  it('Check if both objects are in the array', () => {
    expect(tasksList).toEqual(expect.arrayContaining([{ description: 'Task 1', completed: false, index: 0 }, { description: 'Task 2', completed: false, index: 1 }]));
  });
});
