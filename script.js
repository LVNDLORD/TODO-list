'use strict';

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


const addTodo = (event) => {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = String(todoInput.value);
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

    todoInput.value = '';
}



todoButton.addEventListener('click', addTodo);

