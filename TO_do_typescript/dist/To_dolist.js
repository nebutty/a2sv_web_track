// Todo list array to hold items
var todoList = [];
// Function to add a new task
function addTask(task) {
    var newItem = {
        id: Date.now(),
        task: task,
        completed: false
    };
    todoList.push(newItem);
    console.log("Task added:", newItem);
}
// Function to remove a task by ID
function removeTask(id) {
    todoList = todoList.filter(function (item) { return item.id !== id; });
    console.log("Task removed:", id);
}
// Function to edit a task
function editTask(id, newTask) {
    var task = todoList.find(function (item) { return item.id === id; });
    if (task) {
        task.task = newTask;
        console.log("Task edited:", task);
    }
    else {
        console.log("Task not found.");
    }
}
// Function to display all tasks
function displayTasks() {
    console.log("Todo List:");
    todoList.forEach(function (item) {
        console.log(item.id + ": " + item.task + " [" + (item.completed ? "✓" : "✗") + "]");
    });
}
