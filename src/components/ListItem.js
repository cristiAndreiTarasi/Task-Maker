import React from 'react';
import ActionIcons from './ActionIcons';
import { toggleTasks } from './C_R_U_D_Functions';
import { SortableElement, sortableHandle } from "react-sortable-hoc";

const DragHandle = sortableHandle(() => <i className="fas fa-grip-lines"></i>);

const ListItem = SortableElement(({ task, tasks, setTasks, currentTask, setCurrentTask }) => {
    return (
        <li className="App_list_item" key={task.id}>
            <div className='dragHelper'>
                <div className="main">
                    <div className="task-group">

                        {/* Drag Handle */}
                        <span className="menu-item" style={{ marginRight: '20px' }}><DragHandle /></span>

                        <input 
                            type="checkbox" 
                            checked={task.completed} 
                            onChange={() => setTasks(toggleTasks(tasks, task))}
                        />
                        <p className={`App_copy ${task.completed && 'lineThrough'}`}>{task.text}</p>
                    </div>

                    <ActionIcons 
                        task={task}
                        tasks={tasks}
                        setTasks={setTasks}
                        currentTask={currentTask}
                        setCurrentTask={setCurrentTask}
                    />
                </div>

                {!task.completed ? (
                <div className="status-bar">
                    <p>created on
                        <span> { task.creationDateTime.date } </span> at
                        <span> { task.creationDateTime.time }</span>
                    </p>
                </div>
                ) : null}
            </div>

            <div className="divider">
                <div className="dark"></div>
                <div className="light"></div>
            </div>
        </li>  
    );
});

export default ListItem;
