import { createContext } from 'react';
import uuid from 'uuidv4';

const todosContext = createContext({
    todos: [
        {
            id: uuid(),
            task: 'Buy Milk',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
        {
            id: uuid(),
            task: 'Take the Medicines',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
        {
            id: uuid(),
            task: 'Walk the Dog',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
    ],
});

export default todosContext;
