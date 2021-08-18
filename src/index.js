import './style.css';
import change from './status';
import {
  Task, addTask, editTask, addBean, removeTask, clearCompleted,
} from './crud';

let taskList = [];
const input = document.getElementById('input');
const push = document.getElementById('push');

push.addEventListener('click', () => {
  addTask(taskList, input.value);
});

function saveList(list) {
  const taskList = JSON.stringify(list);
  localStorage.setItem('taskList', taskList);
}

const tasks = document.getElementById('tasks');
function populateList() {
  taskList.forEach((task) => {
    const taskElement = document.createElement('li');
    const left = document.createElement('span');
    const right = document.createElement('span');
    const square = document.createElement('i');
    const desc = document.createElement('p');
    if (task.completed) {
      square.classList.add('fas', 'fa-check');
      taskElement.addEventListener('click', (e) => {
        change(e, task);
        saveList(taskList);
      });
    } else {
      square.classList.add('far', 'fa-square');
      taskElement.addEventListener('click', (e) => {
        change(e, task);
        saveList(taskList);
      });
    }
    taskElement.addEventListener('dblclick', (e) => {
      editTask(e, task);
      addBean(e);
      saveList(taskList);
    });

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

function loadList() {
  if (localStorage.getItem('taskList')) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
  populateList();
}

window.onload = loadList();
