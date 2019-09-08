import React, { useState, useContext, useEffect } from 'react';
import tasksContext from './context';
import ListItem from './ListItem';

export default function () {
    const { state } = useContext(tasksContext);
    
    return (
        <ul className="App_list">
            {state.tasks.map(task => (
                <ListItem 
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}
