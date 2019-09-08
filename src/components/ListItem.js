import React, { useState, useContext } from 'react';
import tasksContext from './context';
import ActionIcons from './ActionIcons';

export default function ({ task }) {
    const { dispatch } = useContext(tasksContext);

    return (
        <li className="App_list_item" key={task.id}>
            <div className="main">
                <div className="task-group">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch({
                            type: "TOGGLE_TASK",
                            payload: task,
                        })}
                    />
                    <p
                        className={`App_copy ${task.completed && 'lineThrough'}`}
                    >
                        {task.text}
                    </p>
                </div>
                <ActionIcons task={task} />
            </div>

            {!task.completed ? (
                <div className="status-bar">
                    <p>created on
                        <span> {task.creationDateTime.date} </span>
                        at
                        <span> {task.creationDateTime.time}</span>
                    </p>
                </div>
            ) : null}

            <div className="divider">
                <div className="dark"></div>
                <div className="light"></div>
            </div>
        </li>  
    );
}




