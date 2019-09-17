import React, { useState } from 'react';
import { SortableContainer } from "react-sortable-hoc";
import ListItem from './ListItem';

const List = SortableContainer(({ sortedState, setSortedState }) => {
    return (
        <ul className="App_list">
            {sortedState.map((task, index) => (
                <ListItem
                    key={task.id} 
                    index={index} 
                    task={task}
                    sortedState={sortedState}
                    setSortedState={setSortedState}
                />
            ))}
        </ul>
    )
});

export default List;
