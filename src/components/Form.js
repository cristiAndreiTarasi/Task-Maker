import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from './addEditDelete';

export default function ({ tasks, setTasks, currentTask }) {
    const [value, setValue] = useState('');

    useEffect(() => currentTask.text ? setValue(currentTask.text) : setValue(''), [currentTask]);

    function handleSubmit (e) {
        e.preventDefault();
        currentTask.text 
            ? setTasks(updateTask(tasks, currentTask.id, value)) 
            : setTasks(createTask(tasks, value));
        setValue('');
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
