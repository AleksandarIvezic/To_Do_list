import { expect, it } from '@jest/globals';
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

describe('Test if removeTask function', () => {
  let tasksList = [{ description: 'Task 1', completed: false, index: 0 }, { description: 'Task 2', completed: false, index: 1 }, { description: 'Task 3', completed: false, index: 2 }, { description: 'Task 4', completed: false, index: 3 }, { description: 'Task 5', completed: false, index: 4 }];

  it('removes the targeted task from taskList', () => {
    const task = { description: 'Task 2', completed: false, index: 1 };
    tasksList = removeTask(tasksList, task);
    expect(tasksList).toEqual(expect.not.arrayContaining([{ description: 'Task 2', completed: false, index: 1 }]));
  });
});
