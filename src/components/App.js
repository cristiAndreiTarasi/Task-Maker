// starter imports
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { arrayMove } from "react-sortable-hoc";
import tasksContext from './context';

// components
import Header from './Header';
import Form from './Form';
import List from './List';

function App () {
    const [state, setState] = useState(tasksContext);
    const [alteredState, setAlteredState] = useState(state.tasks);

    function onSortEnd({ oldIndex, newIndex }) {
        setAlteredState(arrayMove(alteredState, oldIndex, newIndex));
    }

    return (
        <div className="App">
            <Header />
            <Form
                state={state}
                setState={setState}
            />

            <ul className="App_list">
                <List 
                    state={alteredState}
                    onSortEnd={onSortEnd}
                />
            </ul>
        </div>
    );
};

export default hot(App);
