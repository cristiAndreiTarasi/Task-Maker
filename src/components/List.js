import React, { useState } from 'react';
import { SortableContainer } from "react-sortable-hoc";
import uuid from 'uuidv4';
import ListItem from './ListItem';

const List = SortableContainer(({ sortedState, state, setState }) => {
    return (
        <ul className="App_list">
            {sortedState.map((task, index) => (
                <ListItem
                    key={uuid()} 
                    index={index} 
                    task={task}
                    sortedState={sortedState}
                    state={state}
                    setState={setState}
                />
            ))}
        </ul>
    )
});

export default List;
