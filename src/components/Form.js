import React, { useState, useEffect, useContext } from 'react';
import tasksContext from './context';

export default function () {
    const [value, setValue] = useState('');
    const { state: { currentTask = {} }, dispatch } = useContext(tasksContext);

    useEffect(() => {
        currentTask.text 
            ? setValue(currentTask.text)
            : setValue('') 
    }, [currentTask.text]);

    function handleSubmit (e) {
        e.preventDefault();

        if (currentTask.text) {
            dispatch({
                type: 'UPDATE_TASK',
                payload: value 
            })
        }
        else {
            if (value === '') return
            else {
                dispatch({
                    type: 'NEW_TASK',
                    payload: {
                        value,
                        date: new Date()
                    }
                });
            }
        }

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
