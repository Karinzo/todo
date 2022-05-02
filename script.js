let newTaskInput = document.querySelector("#new-task-input");
let newTaskAdd = document.querySelector("#new-task-add");
let tasksList = document.querySelector("#tasks-list");

newTaskAdd.addEventListener('click', function() {    
    let listItem = document.createElement('li');
    listItem.textContent = newTaskInput.value;
    tasksList.append(listItem);
    newTaskInput.value = '';
});

newTaskInput.addEventListener('keyup', function(e) {
    if (e.key == 'Enter') {
        let listItem = document.createElement('li');
        listItem.textContent = newTaskInput.value;
        tasksList.append(listItem);
        newTaskInput.value = ''; 
    }
});
