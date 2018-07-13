// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// set session storage item
// sessionStorage.setItem('name', 'Beth');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e) {
    const task = document.getElementById('task').value;
    console.log(task);
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // use json.parse for storing more than one object /json bcoz without his it will be a string 

        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    // wrap the text in to json.stringify 
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // alert('Task saved');

    e.preventDefault();
});

// retrieving the array from local storage
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});