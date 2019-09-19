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
    const toggledTasks = statePlaceholder.map(t => 
        t.id === task.id ? { ...task, completed: !task.completed } : t
    );

    return [ ...toggledTasks, ];
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

    return [ ...statePlaceholder, newTask ];
}

// Function to get the current task's text value and place it into the input value
// ***************************************************************
function getCurrentTask (statePlaceholder, currentTask) {
    return { 
        ...statePlaceholder,
        id: currentTask.id,
        text: currentTask.text, 
        completed: false 
    };
}

// Function to update tasks
// ***************************************************************
function updateTask (statePlaceholder, id, value) {
    const currentSetTaskIndex = statePlaceholder.findIndex(task => task.id === id);
    const currentSetTask = statePlaceholder.find(task => task.id === id);

    console.log(currentSetTaskIndex)
    console.log(currentSetTask)

    const updatedTask = { 
        ...currentSetTask, 
        text: value,
        creationDateTime: {
            date: `${getCurrentDateTime().day}/${getCurrentDateTime().month}/${getCurrentDateTime().year}`,
            time: `${getCurrentDateTime().hours}:${getCurrentDateTime().minutes}:${getCurrentDateTime().seconds}`
        } 
    };
    
    const updatedTasks = [
        ...statePlaceholder.slice(0, currentSetTaskIndex),
        updatedTask,
        ...statePlaceholder.slice(currentSetTaskIndex + 1)
    ];

    return [ ...updatedTasks, ];
}

// Function to delete tasks
// ***************************************************************
function deleteTask (statePlaceholder, id) {
    const filteredTasks = statePlaceholder.filter(task => task.id !== id);

    return [ ...filteredTasks, ];
}


export { createTask, deleteTask, getCurrentTask, updateTask, toggleTasks };

