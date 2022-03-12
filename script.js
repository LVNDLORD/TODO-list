'use strict';

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
// const h1 = document.querySelector('.header');// TODO: temp empty local storage
// h1.addEventListener("click", emptyLocalStorage); // TODO:

// const emptyLocalStorage = () => localStorage.removeItem('todos'); // TODO:


const addTodo = (event) => {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = String(todoInput.value);
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add todo to localStorage
    saveLocalTodos(todoInput.value);  // TODO:
    // check mark btn
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);
    // edit mark btn 
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-pen-to-square"></i>';
    editBtn.classList.add('edit-btn');
    todoDiv.appendChild(editBtn);
    // trash mark btn
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value = '';
}

const deleteCheck = (e) => {
    console.log(e.target);
    const item = e.target;

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        // setTimeout(() => todo.remove(), 150);
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


const filterTodo = function (e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                if (todo.classList.contains('completed')) {
                    todo.style.textDecoration = "line-through";
                }
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                    todo.style.textDecoration = "none";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// const checkLocalStorage = () => {  // TODO:  let todos will be undeclared in saveLocalTodos
//     // check if there are any tasks in there
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
// }

const saveLocalTodos = (todo) => {
    //     // check if there are any tasks in there
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = () => {
    // check if there are any tasks in there
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // check mark btn
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = '<i class="fas fa-check"></i>';
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);
        // edit mark btn 
        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-pen-to-square"></i>';
        editBtn.classList.add('edit-btn');
        todoDiv.appendChild(editBtn);
        // trash mark btn
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);
        //append to list
        todoList.appendChild(todoDiv);
    })
}

// const removeLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const todoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     // console.log(todo.children[0].innerText);
//     localStorage.setItem('todos', JSON.stringify(todos));

// }

const example = ['apple', 'John', 'donut', 'baby'];

console.log(example.indexOf('John'));
const JohnIndex = example.indexOf('John');
example.splice(JohnIndex, 1);
console.log(example);


document.addEventListener('DOMContentLoaded', getTodos); // display local content in dom
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);



