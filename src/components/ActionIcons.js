import React, { useContext } from 'react';
import todosContext from './context';

export default function ({ todo }) {
    const { dispatch } = useContext(todosContext);

    return (
        <ul className="menu">
            <li className="menu-item">
                <i
                    className="fas fa-edit"
                ></i>
            </li>
            <li className="menu-item">
                <i
                    className="fas fa-trash"
                    onClick={() => dispatch({
                        type: 'DELETE_TASK',
                        payload: todo.id
                    })}
                ></i>
            </li>
            <li className="menu-item">
                <i className="fas fa-thumbtack rotate-left"></i>
            </li>
            <li className="menu-item">
                <i className="fas fa-sticky-note"></i>
            </li>
        </ul>
    );
}
