const change = (e, task) => {
  if (e.target.classList.contains('fas', 'fa-check')) {
    e.target.classList.value = 'far fa-square';
    task.completed = false;
  } else if (e.target.classList.contains('far', 'fa-square')) {
    e.target.classList.value = 'fas fa-check';
    task.completed = true;
  }
};
export default change;