import React from 'react';

export default function ({ value, setValue, handleSubmit, currentTask, input }) {
    return (
        <form className="App_form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="App_input"
                placeholder="Type Task"
                ref={input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {currentTask.text
                ? <button className="App_form_button_update" type='submit'>Update</button>
                : <button className="App_form_button_submit" type='submit'>Submit</button>}
        </form>
    );
}
