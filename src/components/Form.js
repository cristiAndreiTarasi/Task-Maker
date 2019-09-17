import React, { useState, useEffect } from 'react';
import { createTask, updateTask } from './addEditDelete';

export default function ({ state, setState }) {
    const [value, setValue] = useState('');

    function handleSubmit (e) {
        e.preventDefault();

        state.currentTask
            ? setState(updateTask(state, state.currentTask.id))
            : setState(createTask(state, value));
        
        setValue('');
    }

    useEffect(() => {
        state.currentTask
            ? setValue(state.currentTask)
            : setValue('')
    }, [state.currentTask]);

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
