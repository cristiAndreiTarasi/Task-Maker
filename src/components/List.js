import React, { useState } from 'react';
import { SortableContainer } from "react-sortable-hoc";
import ListItem from './ListItem';

const List = SortableContainer(({ sortedState }) => {
    return (
        <ul className="App_list">
            {sortedState.map((task, index) => (
                <ListItem
                    key={task.id} 
                    index={index} 
                    task={task}
                />
            ))}
        </ul>
    )
});

export default List;