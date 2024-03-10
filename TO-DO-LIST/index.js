// this is  an array that will  be used  to store tasks in the ToDo list
let todoList = [];

function addTask(description, category) {
    todoList.push({ description, category, completed: false });
    console.log(`Task ${description} in category ${category} has been added.`);
}
addTask("buy meat", "Shopping");
addTask("Study for exam", "Study");
addTask("Walk out", "Home Exercises");
addTask("Finish project", "Work");

// Function to display tasks grouped by their categories
function TasksByCategory() {
    const tasksByCategory = {};

    todoList.forEach(task => {
        if (!tasksByCategory[task.category]) {
            tasksByCategory[task.category] = [];
        }
        tasksByCategory[task.category].push(task);
    });

    console.log("Tasks by Category:");
    for (const category in tasksByCategory) {
        console.log(`Category: ${category}`);
        tasksByCategory[category].forEach(task => 
            console.log(`${task.description} (${task.completed ? 'Completed' : 'Pending'}`));
        };
    
}

TasksByCategory();

function markTaskCompleted(description) {
    const task = todoList.find(task => task.description === description);
    if (task) {
        task.completed = true;
        console.log(Task "${description}" marked as completed.);
    } else {
        console.log(Task "${description}" not found.);
    }
}

function removeTask(description) {
    const index = todoList.findIndex(task => task.description === description);
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log(Task "${description}" removed.);
    } else {
        console.log(Task "${description}" not found.);
    }
}


markTaskCompleted("Study for exam");
removeTask("Walk out");