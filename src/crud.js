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

const editTask = (e, task) => {
  if (e.target.tagName === 'P') {
    const newInput = document.createElement('input');
    newInput.setAttribute('id', task.index);
    newInput.value = e.target.textContent;
    e.target.textContent = '';
    e.target.appendChild(newInput);
    const input = document.getElementById(task.index);
    input.onchange = () => {
      task.description = input.value;
      input.value = '';
      e.target.innerText = task.description;
    };
  }
};

const removeTask = (taskList, task) => {
  taskList.filter((rmTask) => rmTask.index !== task.index);
};

const addBean = (e, taskList, task) => {
  console.log(e.target);
  const icon = e.target.parentNode.parentNode.lastChild.firstChild
  icon.className = 'fas fa-trash-alt';
  console.log(icon);
  icon.onclick = () => {
    removeTask(taskList, task);
  };
};

const clearCompleted = (taskList) => {
  taskList.filter((task) => !task.completed);
};

export { 
  Task, addTask, editTask, addBean, removeTask, clearCompleted,
};