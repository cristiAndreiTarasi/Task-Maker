
import uuid from 'uuidv4';

// Function to create new tasks 
function createTask (statePlaceholder, currentTaskText) {
    const date = new Date();

    let day = date.getDate().toString().length <= 1 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth().toString().length <= 1 ? `0${parseInt(date.getMonth() + 1)}` : date.getMonth();
    let year = date.getFullYear().toString().length <= 1 ? '0' + date.getFullYear() : date.getFullYear();
    let hours = date.getHours().toString().length <= 1 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes().toString().length <= 1 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds().toString().length <= 1 ? '0' + date.getSeconds() : date.getSeconds();

    let newTask = {
        id: uuid(),
        text: currentTaskText,
        completed: false,
        creationDateTime: {
            date: `${day}/${month}/${year}`,
            time: `${hours}:${minutes}:${seconds}`
        }
    };

    return {
        ...statePlaceholder,
        tasks: [ ...statePlaceholder.tasks, newTask ],
    };
}

// Function to get the current task's text value and place it into the input value
function getCurrentTask (statePlaceholder, currentTask) {
    return {
        ...statePlaceholder,
        currentTask: { ...currentTask, text: currentTask.text, completed: false },
    }
}

// Function to update tasks
function updateTask (statePlaceholder, id, value) {
    const updatedTaskIndex = statePlaceholder.tasks.findIndex(task => task.id === id);
    const selectedTask = statePlaceholder.tasks.find(task => task.id === id);
    const updatedTask = { ...selectedTask, text: value };
    
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
function deleteTask (statePlaceholder, id) {
    const filteredTasks = statePlaceholder.tasks.filter(task => task.id !== id);

    return {
        ...statePlaceholder,
        tasks: filteredTasks,
    };
}


export { createTask, deleteTask, getCurrentTask, updateTask };

