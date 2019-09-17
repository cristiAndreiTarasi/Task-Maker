import React, { useState } from 'react';
import { SortableContainer } from "react-sortable-hoc";
import ListItem from './ListItem';

const List = SortableContainer(({ sortedState, setSortedState, state, setState }) => {
    return (
        <ul className="App_list">
            {sortedState.map((task, index) => (
                <ListItem
                    key={task.id} 
                    index={index} 
                    task={task}
                    sortedState={sortedState}
                    setSortedState={setSortedState}
                    state={state}
                    setState={setState}
                />
            ))}
        </ul>
    )
});

export default List;
