import React, { useState } from 'react';
import ActionIcons from './ActionIcons';
import { SortableElement, sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(() => <i className="fas fa-grip-lines"></i>);

const ListItem = SortableElement(({ task }) => {
    const [completedBool, setCompletedBool] = useState(task.completed);

    return (
        <li className="App_list_item" key={task.id}>
            <div className='dragHelper'>
                <div className="main">
                    <div className="task-group">

                        {/* Drag Handle */}
                        <span 
                            className="menu-item"
                            style={{ marginRight: '20px' }}
                        >
                            <DragHandle />
                        </span>
                        <input 
                            type="checkbox" 
                            checked={ completedBool } 
                            onChange={() => setCompletedBool(!completedBool)}
                        />
                        <p className={`App_copy ${completedBool && 'lineThrough'}`} >
                            {task.text}
                        </p>
                    </div>

                    <ActionIcons task={ task } />
                </div>

                {!completedBool ? (
                <div className="status-bar">
                    <p>created on
                        <span> { task.creationDateTime.date } </span>
                        at
                        <span> { task.creationDateTime.time }</span>
                    </p>
                </div>
                ) : null}
            </div>

            {/*<div className="divider">
                            <div className="dark"></div>
                            <div className="light"></div>
                        </div>*/}
        </li>  
    );
});

export default ListItem;
