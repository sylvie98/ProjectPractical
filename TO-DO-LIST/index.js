// this is  an array that help to store tasks in the ToDo list
let TODOLIST = [];

function addTask(description, category) {
    TODOLIST.push({ description, category, completed: false });
    console.log(`Task is  ${description} in category is${category} has been added in do do list.`);
}
addTask("cooking", "work my project");
addTask("Study for exam", "prepare dineer");

// Function to display tasks grouped by their categories
function taskandcategory() {
    const TASK= {};

    TODOLIST.forEach(task => {
        if (TASK[task.category]) {
            TASK[task.category] = [];
        }
        TASK[task.category].push(task);
    });

    console.log("TASK WITH CATOGORY:");
    for (const category in TASK) {
        console.log(`Category: ${category}`);
        TASK[category].forEach(task => 
        console.log(`${task.description} (${task.completed ? 'Completed' : 'NOT YET'}`));
        };
    
}


function markCompleted(description) {
    const task = TODOLIST.find(task => task.description === description);
    if (task) {
        task.completed = true;
        console.log(`Task ${description} marked as completed.`);
    } else {
        console.log(`Task ${description} not found.`);
    }
}
//REMOVED ANY TASK IN LIST
function removeTask(description) {
    const index = TODOLIST.findIndex(task => task.description === description);
    if (index !== -1) {
        TODOLIST.splice(index, 1);
        console.log(`Task ${description} removed.`);
    } else {
        console.log(`Task ${description} not found.`);
    }
}


markCompleted("Study for exam");
removeTask("cooking");