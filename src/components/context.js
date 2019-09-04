import { createContext } from 'react';
import uuid from 'uuidv4';

const todosContext = createContext({
    todos: [
        { id: uuid(), task: 'Buy Milk', completed: false },
        { id: uuid(), task: 'Take the Medicines', completed: true },
        { id: uuid(), task: 'Walk the Dog', completed: false },
    ],
});

export default todosContext;
