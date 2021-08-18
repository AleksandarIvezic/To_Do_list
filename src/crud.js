class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addTask = (taskList, description) => {
  const task = new Task(description, taskList.length);
  taskList.push(task);
};

const editTask = () => {
  this.setAttribute('contenteditable', 'true');
};

const removeTask = (taskList, task) => {
  taskList.filter((rmTask) => rmTask.index !== task.index);
};

const clearCompleted = (taskList) => {
  taskList.filter((task) => !task.completed);
};

export { 
  Task, addTask, editTask, removeTask, clearCompleted,
};