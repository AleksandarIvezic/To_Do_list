const taskList = [
  {
    description: "Clean the bathroom",
    completed: false,
    index: 0,
  },
  {
    description: "Ride a bicycle",
    completed: false,
    index: 1,
  },
  {
    description: "Go shopping",
    completed: false,
    index: 2,
  }
];

function populateList () {
  const tasks = document.getElementById('tasks');
  tasks.style.display = 'flex';
  const taskElement = document.createElement('li');
  const square = document.createElement('i');
  const desc = document.createElement('p');
  taskList.forEach((task) => {
    task.completed ? square.classList.add('far','fa-square') : square.classList('fas', 'fa-check');
     desc.innerHTML = task.description;
    taskElement.style.order = 'index';
    tasks.innerHTML += square + desc 
  })
}
populateList();