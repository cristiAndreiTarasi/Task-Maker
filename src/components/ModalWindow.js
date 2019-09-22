import React, { useState, useRef } from 'react';
import Modal from "@netojose/react-modal";
import { modalStyles } from './assets_mixed';

export default function ({ isOpen, closeModal, task }) {
    const [noteText, setNoteText] = useState('Type your notes here.');
    const [isEditable, setIsEditable] = useState(false);
    const editElement = useRef();

     // Function to turn the contenteditable mode to true - edit mode
    // ***************************************************************
    function editNote () {
        editElement.current.contentEditable = true;
    }

    // Function to turn the contenteditable mode to false - save mode
    // ***************************************************************
    function saveNote () {
        editElement.current.contentEditable = false;
        setNoteText(editElement.current.innerText);
    }

    // Function to transform selection to hypertext - make link
    // ***************************************************************
    function addLinkToSelection () {
        let selectionRange;
        let textRange;

        if (window.getSelection) {
            selectionRange = window.getSelection().toString();
        }
        else {
            if (document.selection.type == 'None') {
                alert ("No content is selected, or the selected content is not available!");
            }
            else {
                textRange = document.selection.createRange ();
                alert ("The text content of the selection:\n" + textRange.text);
            }
        }

        /**
        * Link to get the make Link code https://jsfiddle.net/JRKwH/1/ 
        * Document.createRange() - Web APIs 
        */
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} modalStyles={modalStyles}
            overlayStyles={{backgroundColor: 'rgba(0,0,0,0.2)',}}>

            <div className="Modal_body">
                <div className="Modal_header_content">
                    <div className="Modal_header">
                        <h1 className="Modal_title">
                            {task.text.length >= 16 ? `${task.text.slice(0, 13)}...` : task.text}
                        </h1>
                        <span className="Modal_button_close"><i className="fas fa-times" onClick={closeModal}></i></span>
                    </div>
                    <div className="Modal_button_group">
                        <button className="Modal_button_edit_tools"><i class="fas fa-bold"></i></button>
                        <button className="Modal_button_edit_tools"><i class="fas fa-italic"></i></button>
                        <button className="Modal_button_edit_tools" onClick={addLinkToSelection}><i class="fas fa-link"></i></button>
                        <button className="Modal_button_edit_tools"><i class="far fa-image"></i></button>
                        <button className="Modal_button_edit_tools"><i class="fas fa-list-ul"></i></button>
                        <button className="Modal_button_edit_tools"><i class="fas fa-list-ol"></i></button>
                    </div>

                    <div className="Modal_content" ref={editElement}>{noteText}</div>
                </div>

                <div className="Modal_footer">
                    <i className="far fa-smile smile"></i>
                    <div className="Modal_button_group">
                        <button
                            className="Modal_button edit" onClick={editNote}
                        >Edit</button>
                        <button
                            className="Modal_button save"
                            onClick={saveNote}
                        >Save</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
