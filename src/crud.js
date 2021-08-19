class Task {
  constructor(description, index, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const addTask = (taskList, description) => {
  const task = new Task(description, taskList.length);
  return taskList.push(task);
};

const addBean = (e) => {
  const icon = e.target.parentNode.parentNode.lastChild.firstChild;
  if (icon.tagName === 'I') {
    icon.className = 'fas fa-trash-alt';
    icon.setAttribute('id', 'trash');
  }
};

const removeBean = () => {
  const icon = document.getElementById('trash');
  icon.removeAttribute('id', 'trash');
  icon.className = 'fas fa-ellipsis-v';
};

const editTask = (e, task) => {
  const newInput = document.createElement('input');
  newInput.setAttribute('id', task.index);
  newInput.value = e.target.textContent;
  newInput.setAttribute('autofocus', 'true');
  e.target.textContent = '';
  e.target.appendChild(newInput);
  addBean(e);
};

const updateTask = (e, task) => {
  task.description = e.target.parentNode.firstChild.value;
  e.target.parentNode.innerText = task.description;
  removeBean();
};

const removeTask = (taskList, task) => taskList.filter((rmTask) => rmTask.index !== task.index);

const clearCompleted = (taskList) => taskList.filter((task) => !task.completed);

export {
  Task, addTask, editTask, updateTask, removeTask, clearCompleted,
};