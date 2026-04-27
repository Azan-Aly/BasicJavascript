const input = document.getElementsByTagName('input')[0];
const tasklist = document.getElementsByTagName('ul');
const taskbtn = document.getElementById('addTaskButton');

let task = []

window.addEventListener('DOMContentLoaded', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
});

function addTaskToDOM(task) {

    if (task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deletebtn = document.createElement('button');
        deletebtn.textContent = 'Delete';
        deletebtn.className = 'deletebtn';
        li.append(deletebtn);
        tasklist[0].append(li);


        input.value = '';

        deletebtn.addEventListener('click', () => {
            deletebtn.textContent = 'Delete';
            li.remove();
            removeFromLocalStorage(task);
        });
    }
}


function removeFromLocalStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskbtn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task) {
        addTaskToDOM(task);

        // Save task to localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        input.value = '';
    } else {
        alert('Please enter a task to add it');
    }
});