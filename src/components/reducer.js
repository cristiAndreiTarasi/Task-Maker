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
            break;
        default:
            // statements_def
            break;
    }
}
