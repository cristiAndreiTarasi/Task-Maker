
import uuid from 'uuidv4';

function createNewTask (statePlaceholder, taskText) {
    const date = new Date();

    let day = date.getDate().toString().length <= 1 ? '0' + date.getDate() : date.getDate();
    let month = date.getMonth().toString().length <= 1 ? `0${parseInt(date.getMonth() + 1)}` : date.getMonth();
    let year = date.getFullYear().toString().length <= 1 ? '0' + date.getFullYear() : date.getFullYear();
    let hours = date.getHours().toString().length <= 1 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes().toString().length <= 1 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds().toString().length <= 1 ? '0' + date.getSeconds() : date.getSeconds();

    let newTask = {
        id: uuid(),
        text: taskText,
        completed: false,
        creationDateTime: {
            date: `${day}/${month}/${year}`,
            time: `${hours}:${minutes}:${seconds}`
        }
    };

    return [ ...statePlaceholder, newTask ];
}

function deleteTask (statePlaceholder, id) {
    const filteredTasks = statePlaceholder.filter(task => task.id !== id);

    return [
        ...filteredTasks,
    ];
}

export { createNewTask, deleteTask };

