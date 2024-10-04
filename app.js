document.addEventListener("DOMContentLoaded", () => {
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    todoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = "";
    });

    function addTodo(todoText) {
        if (todoText.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = todoText;
        todoList.appendChild(li);
        console.log(
            "its maded from aziz sigar sep 2024, im not takin ur data ma g, if you press f5 you will lose all data, i dont even use localstorage"
        );
    }
});
