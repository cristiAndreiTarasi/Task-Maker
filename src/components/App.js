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

    function onSortEnd({ oldIndex, newIndex }) {
        setState(arrayMove(state, oldIndex, newIndex));
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
                    state={state}
                    onSortEnd={onSortEnd}
                />
            </ul>
        </div>
    );
};

export default hot(App);
