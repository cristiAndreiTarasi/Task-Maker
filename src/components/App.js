// npm imports
import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { arrayMove } from "react-sortable-hoc";

// components imports
import Header from './Header';
import Form from './Form';
import List from './List';
import tasksContext from './context';

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
                    lockAxis='y'
                    helperClass='dragStyles'
                    transitionDuration={ 1000 }
                    lockToContainerEdges={true}
                    useDragHandle
                />
            </ul>
        </div>
    );
};

export default hot(App);

