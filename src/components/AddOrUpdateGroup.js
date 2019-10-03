import React from 'react';

export default function ( { value, setValue, handleSubmit }) {
    return (
        <form className="App_form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="App_input"
                placeholder="Type Task"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button className="App_form_button" type='submit'>Submit</button>
        </form>
    );
}
