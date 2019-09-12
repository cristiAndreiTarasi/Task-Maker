import React, { useState, useEffect } from 'react';
import uuid from 'uuidv4';

export default function ({state}) {
    const [value, setValue] = useState('');

    function createNewTask (taskText) {
        const date = new Date();

        let day = date.getDate().toString().length <= 1 ? '0' + date.getDate() : date.getDate();
        let month = date.getMonth().toString().length <= 1 ? `0${parseInt(date.getMonth() + 1)}` : date.getMonth();
        let year = date.getFullYear().toString().length <= 1 ? '0' + date.getFullYear() : date.getFullYear();
        let hours = date.getHours().toString().length <= 1 ? '0' + date.getHours() : date.getHours();
        let minutes = date.getMinutes().toString().length <= 1 ? '0' + date.getMinutes() : date.getMinutes();
        let seconds = date.getSeconds().toString().length <= 1 ? '0' + date.getSeconds() : date.getSeconds();

        let newTask = {
            id: uuid(),
            text: taskText,
            completed: false,
            creationDateTime: {
                date: `${day}/${month}/${year}`,
                time: `${hours}:${minutes}:${seconds}`
            }
        };

        return {
            ...state,
            tasks: [ ...state.tasks, newTask ],
        };
    }

    function handleSubmit (e) {
        e.preventDefault();
        createNewTask(value);
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
