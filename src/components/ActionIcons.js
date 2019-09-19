import React, { useState, useCallback } from 'react';
import { deleteTask, getCurrentTask, addNotes } from './functionsBase';
import ModalWindow from './ModalWindow';

export default function ({ task, tasks, setTasks, currentTask, setCurrentTask }) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

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
                        <i className="fas fa-sticky-note" onClick={openModal}></i>

                        {/* Modal Window */}
                        <ModalWindow isOpen={isOpen} closeModal={closeModal} />
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
