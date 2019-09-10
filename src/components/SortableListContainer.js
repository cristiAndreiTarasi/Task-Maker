import React, { useState } from 'react';
import SortableItem from './SortableItem';
import { SortableContainer } from "react-sortable-hoc";

const SortableList = SortableContainer((state) => (
    <ul className="App_list">
        {state.tasks.map((task, index) => (
            <SortableItem
                key={task.id}
                index={index}
                task={task}
            />
        ))}
    </ul>
));

export default SortableList;
