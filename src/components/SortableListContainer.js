import React, { useState, useContext } from 'react';
import ActionIcons from './ActionIcons';
import SortableItem from './SortableItem';
import { SortableContainer } from "react-sortable-hoc";

const SortableList = SortableContainer(({ state, dispatch }) => {

    return (
        <ul className="App_list">
            {state.map((task, index) => (
                <SortableItem 
                    key={task.id}
                    index={index}
                    task={task} 
                    dispatch={dispatch}
                />
            ))}
        </ul>
    );
})

export default SortableList;