import uuid from 'uuidv4';

export default function todosReducer (state, action) {
    switch (action.type) {
            /********** Create new task functionality **********/
        case "NEW_TASK":
            const apd = action.payload.date;

            let date = apd.getDate().toString().length <= 1 ? '0' + apd.getDate() : apd.getDate();
            let month = (apd.getMonth() + 1).toString().length <= 1 ? '0' + apd.getMonth() : apd.getMonth();
            let year = apd.getFullYear() <= 1 ? '0' + apd.getFullYear() : apd.getFullYear();
            let hours = apd.getHours() <= 1 ? '0' + apd.getHours() : apd.getHours();
            let minutes = apd.getMinutes() <= 1 ? '0' + apd.getMinutes() : apd.getMinutes();
            let seconds = apd.getSeconds() <= 1 ? '0' + apd.getSeconds() : apd.getSeconds();

            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuid(),
                        task: action.payload.value,
                        completed: false,
                        creationDateTime: {
                            date: `${date}/${month}/${year}`,
                            time: `${hours}:${minutes}:${seconds}`
                        }
                    }
                ]
            };

        /********* Toggle tasks checkbox functionality *********/
        case "TOGGLE_TASK":
            const completedTodos = state.todos.map(t => (
                t.id === action.payload.id
                    ? { ...t, completed: !action.payload.completed}
                    : t
            ));

            return {
                ...state,
                todos: completedTodos,
            };

        /********** Delete tasks functionality **********/
        case 'DELETE_TASK':
            const filteredTasks = state.todos.filter(todo => todo.id !== action.payload);

            return {
                ...state,
                todos: filteredTasks,
            };

        /********* Default case **********/
        default:
            return state;
    }
}
