// npm imports
import React, { useState, useEffect, useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import { arrayMove } from "react-sortable-hoc";

// components imports
import Header from './Header';
import Form from './Form';
import List from './List';

function App () {
    /**
     * tasks array to hold all the created tasks and currentTask object to temporarily
     * host the currently selected task's {key: value}, when the editTask function is
     * fired the input value will temporarily be the currently selected task's text value.
     */
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({});
    const [isAddingOrIsUpdating, setIsAddingOrIsUpdating] = useState(false);
    const [info, setInfo] = useState({});

    /**
     * the onSortEnd function is used to save the order
     * of the tasks every time they get dragged & dropped.
     */
    const onSortEnd = ({ oldIndex, newIndex }) => setTasks(arrayMove(tasks, oldIndex, newIndex));

    const interactionMessage = (classname, message) => {
        setInfo({ classname, message });
        setTimeout(() => setInfo({}), 2000);
    };

    return (
        <div className="App">
            <Header />

            {!isAddingOrIsUpdating ? (
                <div className="App_add_task">
                    <div className="add_task_button">
                        <img
                            className="plus" src="../../public/images/plus.svg"
                            onClick={() => setIsAddingOrIsUpdating(true)}/>
                        <p className="App_copy">Add Task</p>
                    </div>
                        
                    <div className={`message ${info.classname}`}>{info.message}</div>
                </div>
            ) : (
                <Form
                    tasks={tasks}
                    setTasks={setTasks}
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}
                    setIsAddingOrIsUpdating={setIsAddingOrIsUpdating}
                    interactionMessage={interactionMessage}
                />
            )}

            <ul className="App_list">
                <List
                    tasks={tasks}
                    setTasks={setTasks}
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}
                    setIsAddingOrIsUpdating={setIsAddingOrIsUpdating}

                    onSortEnd={onSortEnd}
                    lockAxis='y'
                    helperClass='dragStyles'
                    transitionDuration={ 1000 }
                    lockToContainerEdges={true}
                    useDragHandle
                />
            </ul>
        </div>
    );
};

export default hot(App);
