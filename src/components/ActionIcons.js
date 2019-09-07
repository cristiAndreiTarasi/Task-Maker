import React, { useContext } from 'react';
import tasksContext from './context';

export default function ({ task }) {
    const { dispatch } = useContext(tasksContext);

    return (
        <ul className="menu">
            {!task.completed && (
                <>
                    {/* Edit button */}
                    <li className="menu-item">
                        <i
                            className="fas fa-edit"
                            onClick={() => dispatch({
                                type: 'CAPTURE_CURRENT_TASK',
                                payload: task
                            })}
                        ></i>
                    </li>

                    {/* Pin to top button */}
                    <li className="menu-item">
                        <i className="fas fa-thumbtack rotate-left"></i>
                    </li>

                    {/* Make note button */}
                    <li className="menu-item">
                        <i className="fas fa-sticky-note"></i>
                    </li>
                </>
            )}

            {/* Delete button */}
            <li className="menu-item">
                <i
                    className="fas fa-trash"
                    onClick={() => dispatch({
                        type: 'DELETE_TASK',
                        payload: task.id
                    })}
                ></i>
            </li>
        </ul>
    );
}
