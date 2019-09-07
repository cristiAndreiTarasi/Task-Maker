import { createContext } from 'react';
import uuid from 'uuidv4';

const tasksContext = createContext({
    tasks: [
        {
            id: uuid(),
            text: 'Buy Milk',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
        {
            id: uuid(),
            text: 'Take the Medicines',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
        {
            id: uuid(),
            text: 'Walk the Dog',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
    ],

    currentTask: {}
});

export default tasksContext;
