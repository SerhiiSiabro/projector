"use strict";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const filteredInput = document.querySelector(".filter-input");
const taskList = document.querySelector(".collection");
const button = document.querySelector(".clear-tasks");

// "storage" functions
const STORAGE_KEY = "taskStorage";

// Завжди повертає масив
const getTasksFromStorage = () => {
  const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return tasks;
};

const setTaskToStorage = (task) => {
  const tasks = getTasksFromStorage();
  tasks.push(task);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

const clearStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const removeTaskFromLocalStorage = (deletedTask) => {
  const tasks = getTasksFromStorage();

  // Видалення елементу з масиву
  // 1 - filter
  // const filteredTasks = tasks.filter((task) => task !== deletedTask);
  // localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTasks));

  // 2 - findIndex + splice
  const index = tasks.findIndex((task) => task === deletedTask);
  tasks.splice(index, 1);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// "tasks" functions
const addTask = (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();

  // Пусте значення або пробіли - не додаємо LI
  if (value === "") {
    alert("Неккоректне значення");
    return;
  }

  // Create LI
  createLi(value);

  // Додаємо у localStorage
  setTaskToStorage(value);

  // Очистка інпута
  taskInput.value = "";
};

const createLi = (value) => {
  const li = document.createElement("li");
  li.className = "collection-item";
  li.textContent = value; // значення від користувача

  const span = document.createElement("span");
  span.className = "delete-item";
  span.innerHTML = '<i class="fa fa-remove"></i>';
  li.append(span);

  const spanEdit = document.createElement("span");
  spanEdit.className = "edit-item";
  spanEdit.innerHTML = '<i class="fa fa-edit"></i>';
  li.append(spanEdit);
  taskList.append(li);
};

const clearTasks = () => {
  taskList.innerHTML = "";
  clearStorage();
};

const removeTask = (event) => {
  const isDeleteIcon = event.target.classList.contains("fa-remove");

  if (isDeleteIcon) {
    const isApproved = confirm("Ви впевнені?");

    if (isApproved) {
      const deletedLi = event.target.closest("li");
      deletedLi.remove();

      const text = deletedLi.firstChild.textContent;
      removeTaskFromLocalStorage(text);
    }
  }
};

const editTask = (event) => {
  const message = event.target.closest("li");
  const text = message.firstChild.textContent;
  const usersText = prompt("Оновіть це завдання", message.textContent);

  if (usersText === message.textContent || usersText === null) {
    return;
  } else {
    // find index and set
    const tasks = getTasksFromStorage();
    const index = tasks.findIndex((task) => task === text);
    tasks.splice(index, 1, usersText);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));

    const newLi = document.createElement("li");
    newLi.className = "collection-item";
    newLi.textContent = usersText; // значення від користувача

    const span = document.createElement("span");
    span.className = "delete-item";
    span.innerHTML = '<i class="fa fa-remove"></i>';
    newLi.append(span);

    const spanEdit = document.createElement("span");
    spanEdit.className = "edit-item";
    spanEdit.innerHTML = '<i class="fa fa-edit"></i>';
    newLi.append(spanEdit);

    message.replaceWith(newLi);
  }
};

const filterTasks = (event) => {
  const searchText = event.target.value.toLowerCase();
  const list = taskList.querySelectorAll(".collection-item");

  list.forEach((li) => {
    const liText = li.firstChild.textContent.toLowerCase();

    // if (liText.includes(searchText)) {
    //   li.hidden = false;
    // } else {
    //   li.hidden = true;
    // }

    li.hidden = !liText.includes(searchText);
  });
};

const getTasks = () => {
  const tasks = getTasksFromStorage();

  tasks.forEach((task) => {
    // Create LI
    const li = document.createElement("li");
    li.className = "collection-item";
    li.textContent = task; // значення зі storage

    const span = document.createElement("span");
    span.className = "delete-item";
    span.innerHTML = '<i class="fa fa-remove"></i>';
    li.append(span);

    const spanEdit = document.createElement("span");
    spanEdit.className = "edit-item";
    spanEdit.innerHTML = '<i class="fa fa-edit"></i>';
    li.append(spanEdit);

    taskList.append(li);
  });
};

// Ініціалізація
getTasks();
// document.addEventListener("DOMContentLoaded", getTasks);

// Event listeners
form.addEventListener("submit", addTask);

button.addEventListener("click", clearTasks);

taskList.addEventListener("click", removeTask);

taskList.addEventListener("click", editTask);

filteredInput.addEventListener("input", filterTasks);

///
// const index = ;
// message.remove();
// const text = message.firstChild.textContent;

// tasks.splice(index, 1);

// console.log(message.findIndex);
// removeTaskFromLocalStorage(text);
// createLi(usersText);
// setTaskToStorage(usersText);
