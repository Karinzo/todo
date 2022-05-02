let newTaskInput = document.querySelector("#new-task-input");
let newTaskAdd = document.querySelector("#new-task-add");
let tasksList = document.querySelector("#tasks-list");

function addTask() {
    let listItem = document.createElement('li');
    listItem.textContent = newTaskInput.value;
    tasksList.append(listItem);
    newTaskInput.value = '';
}

newTaskAdd.addEventListener('click', function() {    
    addTask();
});

newTaskInput.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        addTask();
    }
});
