import React, { useState } from 'react';
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

export default function ({ isOpen, closeModal }) {
    const [noteText, setNoteText] = useState('Type your notes here.');

    return (
        <Modal  
            isOpen={isOpen} 
            onRequestClose={closeModal}
            modalStyles={modalStyles}
            overlayStyles={{backgroundColor: 'rgba(0,0,0,0.2)',}}>
            
            <div className="Modal_content">
                <div className="Modal_header">
                    <h1 className="Modal_title">Add note</h1>
                    <span className="Modal_close_button">
                        <i className="fas fa-times" onClick={closeModal}></i>
                    </span>
                </div>
                <p className="Modal_content">{noteText}<br /> Add edit and save buttons</p>
            </div>
        </Modal>
    );
}    