import uuid from 'uuidv4';

export default function todosReducer (state, action) {
    switch (action.type) {
        case "NEW_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuid(),
                        task: action.payload.value,
                        completed: false,
                        creationDateTime: {
                            date: `
                                ${action.payload.date.getDate()}/
                                ${action.payload.date.getMonth() + 1}/
                                ${action.payload.date.getFullYear()}`,
                            time: `
                                ${new Date().getHours()}:
                                ${new Date().getMinutes() + 1}:
                                ${new Date().getSeconds()}`
                        }
                    }
                ]
            };

        case "TOGGLED_TODO":
            let completedTodos = state.todos.map(t => (
                t.id === action.payload.id
                    ? { ...t, completed: !action.payload.completed}
                    : t
            ));

            return {
                ...state,
                todos: completedTodos,
            };

        default:
            return state;
    }
}
