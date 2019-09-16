import uuid from 'uuidv4';

const tasksContext = {
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
            completed: true,
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

    currentTask: {},
};

export default tasksContext;