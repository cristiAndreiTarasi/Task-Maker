import React, { useState, useEffect } from 'react';
import { createNewTask } from './addEditDelete';

export default function ({sortedState, setSortedState, currentTask }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        currentTask
            ? setValue(currentTask)
            : setValue('')
    }, [currentTask]);

    

    function handleSubmit (e) {
        e.preventDefault();
        setSortedState(createNewTask(sortedState, value));
        setValue('');
        console.log(currentTask)
    }

    return (
        <form
            className="App_form"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                className="App_input"
                placeholder="Type Task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button
                className="App_form_button"
                type='submit'
            >
                Submit
            </button>
        </form>
    );
};
