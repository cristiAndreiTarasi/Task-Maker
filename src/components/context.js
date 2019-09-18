
const tasksContext = {
    tasks: [
        {
            id: 0,
            text: 'Buy Milk',
            completed: false,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
        {
            id: 1,
            text: 'Take the Medicines',
            completed: true,
            creationDateTime: {
                date: undefined,
                time: undefined
            }
        },
        {
            id: 2,
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