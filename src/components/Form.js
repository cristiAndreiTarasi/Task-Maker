import React, { useState, useContext } from 'react';
import TodosContext from './context';

export default function () {
    const [value, setValue] = useState('');
    const { dispatch } = useContext(TodosContext);

    function handleSubmit (e) {
        e.preventDefault();
        dispatch({ type: 'NEW_TODO', payload: value })
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
