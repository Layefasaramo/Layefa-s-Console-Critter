let addbttn = document.getElementById("addbttn");
let taskList = document.getElementById("task-list");
let task = document.getElementById("texter");
let todotext = JSON.parse(localStorage.getItem("tasks")) || [];

// Display existing tasks when page loads
renderTasks();

// Add new task
addbttn.addEventListener("click", function() {
    let textinput = task.value.trim();
    if (textinput !== "") {
        todotext.push(textinput);
        localStorage.setItem("tasks", JSON.stringify(todotext));
        renderTasks();
        task.value = ""; // Clear input field
    }
});

// Render all tasks
function renderTasks() {
    taskList.innerHTML = ""; // Clear existing tasks
    todotext.forEach((text, index) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-item";
        taskDiv.innerHTML = `
            <input type="checkbox" id="check-${index}">
            <input type="text" class="taskinput" value="${text}" readonly>
            <button onclick="deleteTask(${index})" class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

// Delete task
function deleteTask(index) {
    todotext.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(todotext));
    renderTasks();
}