import React, { useContext } from 'react';
import { deleteTask, getCurrentTask } from './C_R_U_D_Functions';

export default function ({ task, tasks, setTasks, currentTask, setCurrentTask }) {

    return (
        <ul className="menu">
            {!task.completed && (
                <>
                    {/* Edit button */}
                    <li className="menu-item">
                        <i 
                            className="fas fa-edit"
                            onClick={() => setCurrentTask(getCurrentTask(currentTask, task))} ></i>
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
                <i className="fas fa-trash" onClick={() => setTasks(deleteTask(tasks, task.id))}></i>
            </li>
        </ul>
    );
}
