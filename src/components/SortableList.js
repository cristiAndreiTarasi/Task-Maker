import React, { useState } from 'react';
import ActionIcons from './ActionIcons';
import SortableListContainer from './SortableListContainer';
import { arrayMove } from "react-sortable-hoc";

export default function ({ state, dispatch }) {
    const [theState, setTheState] = useState(state.tasks);

    function onSortEnd({ oldIndex, newIndex }) {
        setTheState(arrayMove(theState, oldIndex, newIndex));
    } 

    return (
        <ul className="App_list">
            <SortableListContainer 
                state={theState}
                dispatch={dispatch}
                onSortEnd={onSortEnd}
            />
        </ul>
    );
}
