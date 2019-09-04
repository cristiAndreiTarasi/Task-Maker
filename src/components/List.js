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
                                className={`${todo.completed && 'lineThrough'}`}
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => dispatch({
                                    type: "COMPLETED_TODO",
                                    payload: todo,
                                })}
                            />
                            <p className="App_copy">{todo.task}</p>
                        </div>
                        <ActionIcons />
                    </div>

                    <div className="status-bar">
                        <p>created on 12/04/1908</p>
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
