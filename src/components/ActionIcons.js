import React, { useContext } from 'react';
import { deleteTask, getCurrentTask } from './addEditDelete';

export default function ({ task, state, setState }) {

    return (
        <ul className="menu">
            {!task.completed && (
                <>
                    {/* Edit button */}
                    <li className="menu-item">
                        <i 
                            className="fas fa-edit"
                            onClick={() => setState(getCurrentTask(state, task))}
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
                    onClick={() => setState(deleteTask(state, task.id))}
                ></i>
            </li>
        </ul>
    );
}
