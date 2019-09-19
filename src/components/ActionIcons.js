import React, { useState, useCallback } from 'react';
import { deleteTask, getCurrentTask, addNotes } from './functionsBase';
import Modal from "@netojose/react-modal";

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
                        <Modal isOpen={isOpen} onRequestClose={closeModal}>
                            <p>This is the modal content</p>
                            <input type="button" value="Close modal" onClick={closeModal} />
                        </Modal>
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
