import React, { useState, useRef } from 'react';
import Modal from "@netojose/react-modal";

const modalStyles = {
    backgroundColor: '#c0cee2',
    width: '256px',
    height: '404px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 0 15px 5px rgba(0,0,0,0.3)',
    borderRadius: '4px',
    padding: '0',
    margin: '0',
    border: '0',
};

export default function ({ isOpen, closeModal, task }) {
    const [noteText, setNoteText] = useState('Type your notes here.');
    const [isEditable, setIsEditable] = useState(true);
    const editElement = useRef();

    function editNote () {
        if (isEditable) editElement.current.contentEditable = true
        else {
            editElement.current.contentEditable = false;
            setNoteText(editElement.current.innerText);
        }
    }

    return (
        <Modal  
            isOpen={isOpen} 
            onRequestClose={closeModal}
            modalStyles={modalStyles}
            overlayStyles={{backgroundColor: 'rgba(0,0,0,0.2)',}}>
            
            <div className="Modal_content">
                <div className="Modal_header">
                    <h1 className="Modal_title">
                        {task.text.length >= 16 ? `${task.text.slice(0, 13)}...` : task.text}
                    </h1>
                    <span className="Modal_button_close">
                        <i className="fas fa-times" onClick={closeModal}></i>
                    </span>
                </div>
                <p className="Modal_content" ref={editElement}>{noteText}</p>
                <div className="Modal_footer">
                    <i className="far fa-smile smile"></i>
                    <div className="Modal_button_group">
                        <button 
                            className="Modal_button edit" 
                            onClick={() => editNote(setIsEditable(!isEditable))}
                        >Edit</button>
                        <button 
                            className="Modal_button save"
                            onClick={() => editNote(setIsEditable(!isEditable))}
                        >Save</button>
                    </div>
                </div>   
            </div>
        </Modal>
    );
}    