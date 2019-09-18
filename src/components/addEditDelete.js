import uuid from 'uuidv4';

// Function that returns the timestamp of the creation of the task
// ***************************************************************
function getCurrentDateTime () {
    const date = new Date();

    let day = date.getDate().toString().length <= 1 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth().toString().length <= 1 ? `0${parseInt(date.getMonth() + 1)}` : date.getMonth();
    let year = date.getFullYear().toString().length <= 1 ? '0' + date.getFullYear() : date.getFullYear();
    let hours = date.getHours().toString().length <= 1 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes().toString().length <= 1 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds().toString().length <= 1 ? '0' + date.getSeconds() : date.getSeconds();

    return { day, month, year, hours, minutes, seconds };
}

// Function to toggle checkbox's state
// ***************************************************************
function toggleTasks (statePlaceholder, task) {
    const toggledTasks = statePlaceholder.tasks.map(t => 
        t.id === task.id ? { ...task, completed: !task.completed } : t
    );

    return {
        ...statePlaceholder,
        tasks: toggledTasks,
    };
}


// Function to create new tasks
// ***************************************************************
function createTask (statePlaceholder, currentTaskText) {
    let newTask = {
        id: uuid(),
        text: currentTaskText,
        completed: false,
        creationDateTime: {
            date: `${getCurrentDateTime().day}/${getCurrentDateTime().month}/${getCurrentDateTime().year}`,
            time: `${getCurrentDateTime().hours}:${getCurrentDateTime().minutes}:${getCurrentDateTime().seconds}`
        }
    };

    return {
        ...statePlaceholder,
        tasks: [ ...statePlaceholder.tasks, newTask ],
    };
}

// Function to get the current task's text value and place it into the input value
// ***************************************************************
function getCurrentTask (statePlaceholder, currentTask) {
    return {
        ...statePlaceholder,
        currentTask: { ...currentTask, text: currentTask.text, completed: false },
    }
}

// Function to update tasks
// ***************************************************************
function updateTask (statePlaceholder, id, value) {
    const updatedTaskIndex = statePlaceholder.tasks.findIndex(task => task.id === id);
    const selectedTask = statePlaceholder.tasks.find(task => task.id === id);
    const updatedTask = { 
        ...selectedTask, 
        text: value,
        creationDateTime: {
            date: `${getCurrentDateTime().day}/${getCurrentDateTime().month}/${getCurrentDateTime().year}`,
            time: `${getCurrentDateTime().hours}:${getCurrentDateTime().minutes}:${getCurrentDateTime().seconds}`
        } 
    };
    
    const updatedTasks = [
        ...statePlaceholder.tasks.slice(0, updatedTaskIndex),
        updatedTask,
        ...statePlaceholder.tasks.slice(updatedTaskIndex + 1)
    ];

    return {
        ...statePlaceholder,
        tasks: updatedTasks,
        currentTask: {},
    }
}

// Function to delete tasks
// ***************************************************************
function deleteTask (statePlaceholder, id) {
    const filteredTasks = statePlaceholder.tasks.filter(task => task.id !== id);

    return {
        ...statePlaceholder,
        tasks: filteredTasks,
    };
}


export { createTask, deleteTask, getCurrentTask, updateTask, toggleTasks };

