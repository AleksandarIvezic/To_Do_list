import './style.css';

const taskList = [
  {
    description: 'Clean the bathroom',
    completed: false,
    index: 2,
  },
  {
    description: 'Ride a bicycle',
    completed: true,
    index: 1,
  },
  {
    description: 'Go shopping',
    completed: false,
    index: 0,
  },
];

const tasks = document.getElementById('tasks');
function populateList() {
  taskList.forEach((task) => {
    const taskElement = document.createElement('li');
    const left = document.createElement('span');
    const right = document.createElement('span');
    const square = document.createElement('i');
    const desc = document.createElement('p');
    // eslint-disable-next-line no-unused-expressions
    task.completed ? square.classList.add('fas', 'fa-check') : square.classList.add('far', 'fa-square');
    desc.innerHTML = task.description;
    taskElement.style.order = task.index;
    left.innerHTML = square.outerHTML + desc.outerHTML;
    right.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    taskElement.innerHTML = left.outerHTML + right.outerHTML;
    tasks.appendChild(taskElement);
  });
  const clearTasks = document.createElement('button');
  clearTasks.setAttribute('id', 'clearTasks');
  clearTasks.innerText = 'Clear all completed';
  tasks.appendChild(clearTasks);
}
populateList();
