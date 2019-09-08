import React, { useState, useContext } from 'react';
import tasksContext from './context';
import ActionIcons from './ActionIcons';
import SortableItem from './SortableItem';
import { SortableContainer } from "react-sortable-hoc";

const SortableList = SortableContainer(({ tasks }) => {
    // const { state } = useContext(tasksContext);

    return (
        <ul className="App_list">
            {tasks.map((task, index) => (
                <SortableItem 
                    key={task.id}
                    index={index}
                    task={task} 
                />
            ))}
        </ul>
    );
})

export default SortableList;