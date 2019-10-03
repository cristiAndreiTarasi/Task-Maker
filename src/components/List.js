import React, { useState } from 'react';
import { SortableContainer } from "react-sortable-hoc";
import uuid from 'uuidv4';
import ListItem from './ListItem';

const List = SortableContainer(({ tasks, setTasks, currentTask, setCurrentTask, setIsAddingOrIsUpdating }) => {
    /* this is the droppable container */
    return (
        <ul className="App_list">
            {tasks.map((task, index) => (
                <ListItem
                    key={uuid()}
                    index={index}
                    task={task}
                    tasks={tasks}
                    setTasks={setTasks}
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}
                    setIsAddingOrIsUpdating={setIsAddingOrIsUpdating}
                />
            ))}
        </ul>
    )
});

export default List;
