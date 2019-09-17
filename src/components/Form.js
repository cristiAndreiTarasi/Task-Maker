import React, { useState } from 'react';
import { createNewTask } from './addEditDelete';

export default function ({sortedState, setSortedState}) {
    const [value, setValue] = useState('');

    function handleSubmit (e) {
        e.preventDefault();
        setSortedState(createNewTask(sortedState, value));
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
