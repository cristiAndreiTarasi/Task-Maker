import React, { useState, useEffect } from 'react';

export default function ({ currentTask }) {
    const [value, setValue] = useState('');

    useEffect(() => {
        currentTask.text 
            ? setValue(currentTask.text)
            : setValue('') 
    }, [currentTask.text]);

    function handleSubmit (e) {
        e.preventDefault();

        if (currentTask.text) {}
        else {}

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
