import React, { useState, useContext } from 'react';
import tasksContext from './context';
import ActionIcons from './ActionIcons';
import SortableListContainer from './SortableListContainer';
import { arrayMove } from "react-sortable-hoc";

export default function () {
    const { state } = useContext(tasksContext);
    const [tasks, setTasks] = useState(state.tasks);

    function onSortEnd({ oldIndex, newIndex }) {
        setTasks(arrayMove(tasks, oldIndex, newIndex));
    } 

    return (
        <ul className="App_list">
            <SortableListContainer 
                tasks={tasks}
                onSortEnd={onSortEnd}
            />
        </ul>
    );
}
