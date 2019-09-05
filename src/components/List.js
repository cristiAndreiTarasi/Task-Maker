import React, { useState, useContext } from 'react';
import todosContext from './context';
import ActionIcons from './ActionIcons';

export default () => {
    const { state, dispatch } = useContext(todosContext);

    return (
        <ul className="App_list">
            {state.todos.map(todo => (
                <li className="App_list_item" key={todo.id}>
                    <div className="main">
                        <div className="task-group">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch({
                                    type: "TOGGLED_TODO",
                                    payload: todo,
                                })}
                            />
                            <p
                                className={`App_copy ${todo.completed && 'lineThrough'}`}
                            >
                                {todo.task}
                            </p>
                        </div>
                        <ActionIcons />
                    </div>

                    <div className="status-bar">
                        <p>created on
                            <span>{todo.creationDateTime.date} </span>
                            at
                            <span>{todo.creationDateTime.time}</span>
                        </p>
                    </div>

                    <div className="divider">
                        <div className="dark"></div>
                        <div className="light"></div>
                    </div>
                </li>
            ))}
        </ul>
    );
}
