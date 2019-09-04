import uuid from 'uuidv4';

export default function todosReducer (state, action) {
    switch (action.type) {
        case "NEW_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: uuid(), task: action.payload, completed: false }
                ]
            };

        case "COMPLETED_TODO":
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
