import { clearCompleted } from '../crud';

describe('Test clearCompleted', () => {
  const tasks = [
    { description: 'Task 1', completed: false, index: 0 },
    { description: 'Task 2', completed: true, index: 1 },
  ];
  it('Check if clearCompleted removes completed tasks', () => {
    const filteredTasks = clearCompleted(tasks);
    expect(filteredTasks.length).toBe(1);
  });
});