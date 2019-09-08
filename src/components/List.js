import React, { useState, useContext } from 'react';
import tasksContext from './context';
import ActionIcons from './ActionIcons';
import ListItem from './ListItem';

export default () => {
    const { state, dispatch } = useContext(tasksContext);

    return (
        <ul className="App_list">
            {state.tasks.map(task => (
                <ListItem task={task} />
            ))}
        </ul>
    );
}
