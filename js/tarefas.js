const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('p');
    return li;
}

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createBtnDelete(li) {
    li.innerText += '';
    const btnDelete = document.createElement('button');
    btnDelete.innerText = 'delete';
    btnDelete.setAttribute('class', 'delete');
    li.appendChild(btnDelete);
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createBtnDelete(li);
    salveTasks();
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

btnTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('delete')) {
        el.parentElement.remove();
        salveTasks();
    }
});

function salveTasks() {
    const liTasks = tasks.querySelectorAll('P');
    const listTasks = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('delete', '').trim();
        listTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(listTasks);
    localStorage.setItem('tasks', tasksJSON);
}

function addtasks() {
    const tasks = localStorage.getItem('tasks');
    const listTasks = JSON.parse(tasks);

    for (let task of listTasks) {
        createTask(task);
    }
}

addtasks();



