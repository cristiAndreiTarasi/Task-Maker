import React, { useState, useCallback } from 'react';
import { deleteTask, getCurrentTask, addNotes } from './functionsBase';
import ModalWindow from './ModalWindow';

export default function ({ task, tasks, setTasks, currentTask, setCurrentTask, setIsAddingOrIsUpdating,interactionMessage }) {
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
                            onClick={() => {
                                setCurrentTask(getCurrentTask(currentTask, task))
                                setIsAddingOrIsUpdating(true);
                            }}></i>
                    </li>

                    {/* Pin to top button */}
                    <li className="menu-item">
                        {/* <i className="fas fa-thumbtack rotate-left"></i> */}
                        <i className="fas fa-clone"></i>
                    </li>

                    {/* Make note button */}
                    <li className="menu-item">
                        <i className="fas fa-file" onClick={openModal}></i>
                        {/* <i className="fas fa-sticky-note" onClick={openModal}></i> */}

                        {/* Modal Window */}
                        <ModalWindow isOpen={isOpen} closeModal={closeModal} task={task} />
                    </li>
                </>
            )}

            {/* Delete button */}
            <li className="menu-item">
                <i className="fas fa-trash" onClick={() => {
                    setTasks(deleteTask(tasks, task.id)),
                    setCurrentTask({}),
                    setIsAddingOrIsUpdating(false),
                    interactionMessage('message-success', `${task.text.toUpperCase()}`, 'SUCCESSFULLY DELETED');
                }}></i>
            </li>
        </ul>
    );
}
