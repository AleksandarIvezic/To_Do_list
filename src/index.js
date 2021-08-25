import './style.css';
import change from './status';
import {
  addTask, editTask, updateTask, removeTask, clearCompleted,
} from './crud';

let taskList = [];
const input = document.getElementById('input');
const push = document.getElementById('push');

const saveList = (list) => {
  const taskList = JSON.stringify(list);
  localStorage.setItem('taskList', taskList);
};

const tasks = document.getElementById('tasks');

const populateList = () => {
  tasks.innerHTML = '';
  taskList.forEach((task) => {
    const taskElement = document.createElement('li');
    const left = document.createElement('span');
    const right = document.createElement('span');
    const square = document.createElement('i');
    let desc = document.createElement('p');
    desc.setAttribute('id', `desc-${task.index}`);
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
    desc.innerHTML = task.description;
    taskElement.style.order = task.index;
    left.innerHTML = square.outerHTML + desc.outerHTML;
    right.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
    taskElement.innerHTML = left.outerHTML + right.outerHTML;
    tasks.appendChild(taskElement);
    desc = document.getElementById(`desc-${task.index}`);
    desc.addEventListener('click', (e) => {
      editTask(e, task);
      const trash = document.getElementById('trash');
      trash.onclick = () => {
        taskList = removeTask(taskList, task);
        saveList(taskList);
        populateList();
      };
    });

    desc.addEventListener('focusout', (e) => {
      updateTask(e, task);
      saveList(taskList);
    });

    desc.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        updateTask(e, task);
        saveList(taskList);
      }
    });
  });
  const clearTasks = document.createElement('button');
  clearTasks.setAttribute('id', 'clearTasks');
  clearTasks.innerText = 'Clear all completed';
  tasks.appendChild(clearTasks);
  const clearCompletedTasks = document.getElementById('clearTasks');
  clearCompletedTasks.onclick = () => {
    taskList = clearCompleted(taskList);
    saveList(taskList);
    populateList();
  };
};

push.addEventListener('click', () => {
  addTask(taskList, input.value);
  input.value = '';
  saveList(taskList);
  populateList();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(taskList, input.value);
    input.value = '';
    saveList(taskList);
    populateList();
  }
});

const loadList = () => {
  if (localStorage.getItem('taskList')) {
    const list = JSON.parse(localStorage.getItem('taskList'));
    list.forEach((task) => addTask(taskList, task.description));
  }
  populateList();
};

window.onload = loadList();
