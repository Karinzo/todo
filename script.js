let newTaskInput = document.querySelector("#new-task-input");
let newTaskAdd = document.querySelector("#new-task-add");
let tasksList = document.querySelector("#tasks-list");
let newTaskForm = document.querySelector('#new-task-form');

function addTask() {
    let listItem = document.createElement('li');
    listItem.textContent = newTaskInput.value;
    tasksList.append(listItem);
    newTaskInput.value = '';
}

newTaskForm.addEventListener('submit', function(e) {    
    e.preventDefault();
    addTask();
});
