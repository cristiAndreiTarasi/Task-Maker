import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from './addEditDelete';

export default function ({ state, setState, currentTask }) {
    const [value, setValue] = useState('');
    useEffect(() => currentTask ? setValue(currentTask.text) : setValue(''), [state]);

    function handleSubmit (e) {
        e.preventDefault();
        currentTask.text ? setState(updateTask(state, currentTask.id, value)) : setState(createTask(state, value));
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
