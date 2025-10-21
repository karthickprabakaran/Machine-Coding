document.addEventListener("DOMContentLoaded", () => {
  console.log("the dom content is loaded");
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".input");
  const todoList = document.querySelector(".todo-list");
  const submitButton = document.querySelector(".submit-button");

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      addTodo(todoText);
    } else {
      alert("kindly Enter Valid TODO");
    }
  });

  function addTodo(todo) {
    const todoItem = document.createElement("li");
    const todoSpan = document.createElement("span");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    todoSpan.textContent = todo;
    editButton.textContent = `✏️`;
    deleteButton.textContent = `❌`;

    todoItem.appendChild(todoSpan);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  }
});
