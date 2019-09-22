// npm imports
import React, { useState, useEffect } from 'react';
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

    /**
     * the onSortEnd function is used to save the order 
     * of the tasks every time they get dragged & dropped.
     */
    function onSortEnd({ oldIndex, newIndex }) {
        setTasks(arrayMove(tasks, oldIndex, newIndex));
    }

    return (
        <div className="App">
            <Header />
            
            <Form
                tasks={tasks}
                setTasks={setTasks}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
            />

            <ul className="App_list">
                <List 
                    tasks={tasks}
                    setTasks={setTasks}
                    currentTask={currentTask}
                    setCurrentTask={setCurrentTask}

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
