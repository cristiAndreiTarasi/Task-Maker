import uuid from 'uuidv4';

export default function tasksReducer (state, action) {
    switch (action.type) {
        /********** Create new task functionality **********/
        case "NEW_TASK":
            const apd = action.payload.date;

            let date = apd.getDate().toString().length <= 1 ? '0' + apd.getDate() : apd.getDate();
            let month = apd.getMonth().toString().length <= 1 ? `0${parseInt(apd.getMonth() + 1)}` : apd.getMonth();
            let year = apd.getFullYear().toString().length <= 1 ? '0' + apd.getFullYear() : apd.getFullYear();
            let hours = apd.getHours().toString().length <= 1 ? '0' + apd.getHours() : apd.getHours();
            let minutes = apd.getMinutes().toString().length <= 1 ? '0' + apd.getMinutes() : apd.getMinutes();
            let seconds = apd.getSeconds().toString().length <= 1 ? '0' + apd.getSeconds() : apd.getSeconds();

            if (!action.payload) {
                return state;
            }

            if (state.tasks.findIndex(task => task.text === action.payload.value) > -1) {
                return state;
            }

            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: uuid(),
                        text: action.payload.value,
                        completed: false,
                        creationDateTime: {
                            date: `${date}/${month}/${year}`,
                            time: `${hours}:${minutes}:${seconds}`
                        }
                    }
                ]
            };


        /********** Capture current task action **********/
        case 'CAPTURE_CURRENT_TASK':
            return {
                ...state,
                currentTask: action.payload
            };


        /********** Edit task action **********/
        case 'UPDATE_TASK':
            const updatedTask = { ...state.currentTask, text: action.payload };
            const updatedTaskIndex = state.tasks.findIndex(task => task.id === state.currentTask.id);
            const updatedTasks = [
                ...state.tasks.slice(0, updatedTaskIndex),
                updatedTask,
                ...state.tasks.slice(updatedTaskIndex + 1)
            ];

            if (!action.payload) {
                return state;
            }

            if (state.tasks.findIndex(task => task.text === action.payload.value) > -1) {
                return state;
            }

            return {
                ...state,
                tasks: updatedTasks,
                currentTask: {}
            };


        /********* Toggle tasks checkbox functionality *********/
        case "TOGGLE_TASK":
            const completedTodos = state.tasks.map(t => (
                t.id === action.payload.id
                    ? { ...t, completed: !action.payload.completed}
                    : t
            ));

            return {
                ...state,
                tasks: completedTodos,
            };


        /********** Delete tasks functionality **********/
        case 'DELETE_TASK':
            const filteredTasks = state.tasks.filter(task => task.id !== action.payload);
            const isRemovedTask = state.currentTask.id === action.payload ? {} : state.currentTask;

            return {
                ...state,
                currentTask: isRemovedTask,
                tasks: filteredTasks,
            };


        /********* Default case **********/
        default:
            return state;
    }
}
