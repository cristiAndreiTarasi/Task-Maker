// npm imports
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { arrayMove } from "react-sortable-hoc";

// components imports
import Header from './Header';
import Form from './Form';
import List from './List';
import tasksContext from './context';

function App () {
    const [state, setState] = useState(tasksContext);
    const [sortedState, setSortedState] = useState(state.tasks);

    useEffect(() => {
        setSortedState(state.tasks);
    }, [state]);

    function onSortEnd({ oldIndex, newIndex }) {
        setSortedState(arrayMove(sortedState, oldIndex, newIndex));
    }

    return (
        <div className="App">
            <Header />
            <Form
                state={state}
                setState={setState}
                sortedState={sortedState}
                setSortedState={setSortedState}
                currentTask={state.currentTask}
            />

            <ul className="App_list">
                <List 
                    sortedState={sortedState}
                    setSortedState={setSortedState}
                    state={state}
                    setState={setState}

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
