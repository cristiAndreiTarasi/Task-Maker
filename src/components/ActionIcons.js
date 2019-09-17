import React, { useContext } from 'react';
import { deleteTask } from './addEditDelete';

export default function ({ completedBool, task, sortedState, setSortedState }) {

    return (
        <ul className="menu">
            {!completedBool && (
                <>
                    {/* Edit button */}
                    <li className="menu-item">
                        <i className="fas fa-edit"></i>
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
                    onClick={() => setSortedState(deleteTask(sortedState, task.id))}
                ></i>
            </li>
        </ul>
    );
}
