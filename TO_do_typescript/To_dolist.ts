// Define the interface for a Todo item
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// Todo list array to hold items
let todoList: TodoItem[] = [];

// Function to add a new task
function addTask(task: string): void {
  const newItem: TodoItem = {
    id: Date.now(),
    task,
    completed: false,
  };
  todoList.push(newItem);
  console.log("Task added:", newItem);
}

// Function to remove a task by ID
function removeTask(id: number): void {
  todoList = todoList.filter(item => item.id !== id);
  console.log("Task removed:", id);
}

// Function to edit a task
function editTask(id: number, newTask: string): void {
  const task = todoList.find(item => item.id === id);
  if (task) {
    task.task = newTask;
    console.log("Task edited:", task);
  } else {
    console.log("Task not found.");
  }
}

// Function to display all tasks
function displayTasks(): void {
  console.log("Todo List:");
  todoList.forEach(item => {
    console.log(`${item.id}: ${item.task} [${item.completed ? "✓" : "✗"}]`);
  });
}
