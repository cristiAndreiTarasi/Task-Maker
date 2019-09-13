import React, { useRef } from 'react';
import ActionIcons from './ActionIcons';
import { SortableElement } from "react-sortable-hoc";

const ListItem = SortableElement(({ task }) => {
    const textDragRef = useRef();

    return (
        <li className="App_list_item" key={task.id}>
            <div className="main">
                <div className="task-group">
                    <input type="checkbox" checked={ task.completed } />
                    <p 
                        className={`App_copy ${task.completed && 'lineThrough'}`} 
                        ref={textDragRef} 
                        onClick={() => console.log(textDragRef.current.textContent)}
                    >
                        {task.text}
                    </p>
                </div>
                
                <ActionIcons task={ task } />
            </div>

            {!task.completed ? (
                <div className="status-bar">
                    <p>created on
                        <span> { task.creationDateTime.date } </span>
                        at
                        <span> { task.creationDateTime.time }</span>
                    </p>
                </div>
            ) : null}

            {/*<div className="divider">
                            <div className="dark"></div>
                            <div className="light"></div>
                        </div>*/}
        </li>  
    );
});

export default ListItem;
