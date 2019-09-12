import React, { useState } from 'react';
import ListItem from './ListItem';

export default function ({ state }) {
    return (
        <ul className="App_list">
            {state.tasks.map((task, index) => (
                <ListItem 
                    task={task} 
                    index={index} 
                />
            ))}
        </ul>
    )
};

