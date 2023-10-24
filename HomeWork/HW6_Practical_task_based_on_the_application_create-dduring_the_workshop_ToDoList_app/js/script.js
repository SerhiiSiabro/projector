"use strict";

// DOM variables
const form = document.querySelector(".create-task-form");
const taskInput = document.querySelector(".task-input");
const filteredInput = document.querySelector(".filter-input");
const taskList = document.querySelector(".collection");
const button = document.querySelector(".clear-tasks");

const STORAGE_KEY = "taskStorage";

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
  // const index = tasks.findIndex((task) => task === deletedTask);
  // console.log(index);
  tasks.splice(deletedTask, 1);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

// "tasks" functions
const addTask = (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();

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
      const indexDeletedItem = Array.prototype.indexOf.call(
        taskList.childNodes,
        deletedLi
      );
      console.log(indexDeletedItem);
      deletedLi.remove();

      removeTaskFromLocalStorage(indexDeletedItem);
    }
  }
};

const editTask = (event) => {
  const isEditedIcon = event.target.classList.contains("fa-edit");

  if (isEditedIcon) {
    const message = event.target.closest("li");
    const text = message.firstChild;
    const usersText = prompt("Оновіть це завдання", message.textContent);

    if (usersText === message.textContent || usersText === null) {
      return;
    } else {
      const tasks = getTasksFromStorage();
      const indexEditedIcon = Array.prototype.indexOf.call(
        taskList.childNodes,
        message
      );

      tasks.splice(indexEditedIcon, 1, usersText);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      message.firstChild.textContent = usersText;
    }
  }
};

const filterTasks = (event) => {
  const searchText = event.target.value.toLowerCase();
  const list = taskList.querySelectorAll(".collection-item");

  list.forEach((li) => {
    const liText = li.firstChild.textContent.toLowerCase();

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
