
import React, { useState, useEffect, useRef } from 'react';
// references to functions defined in functionsBase.js
import { createTask, updateTask } from './functionsBase';
import AddOrUpdateGroup from './AddOrUpdateGroup';

export default function ({ tasks, setTasks, currentTask, setCurrentTask, setIsAddingOrIsUpdating, interactionMessage }) {
    /* input dinamyc value */
    const [value, setValue] = useState('');

    /**
     * if the currentText object returns true it means that it has allready been
     * populated with the currently selected task {key: value} pairs.
     * If so, the input field value attribute gets set to the selected task's text.
     * The text key's value, along with the date and time, will get rerendered
     * everytime the currentTask gets modified.
     */
    useEffect(() => currentTask.text ? setValue(currentTask.text) : setValue(''), [currentTask]);

    function handleSubmit (e) {
        e.preventDefault();

        /**
         * handleSubmit function will add a new task if the currentTask object is empty
         * and will update the currently selected task with the currentTask's values,
         * if the currentTask is populated(checks by looking for the text key).
         */
        if (currentTask.text) {
            /* update the selected task */
            setTasks(updateTask(tasks, currentTask.id, value));
            /* and erase the currentTask's properties right after */
            setCurrentTask({});
            setIsAddingOrIsUpdating(false);
            interactionMessage('message-success', `${value.toUpperCase()}`, 'SUCCESSFULLY UPDATED');
        }
        else {
            /* or create a new task */
            setTasks(createTask(tasks, value));
            /* and reset the add boolean as well */
            setIsAddingOrIsUpdating(false);
            
            if (!value) interactionMessage('message-error', ``, 'CANNOT ADD EMPTY TASKS');
            else if (tasks.findIndex(t => value === t.text) > -1) interactionMessage('message-error', ``, 'CANNOT ADD DUPLICATE TASKS');
            else interactionMessage('message-success', `${value.toUpperCase()}`, 'SUCCESSFULLY ADDED');
        }

        /* and clear the input field */
        setValue('');

    }

    return (
        <AddOrUpdateGroup 
            handleSubmit={handleSubmit} 
            value={value} 
            setValue={setValue} 
            currentTask={currentTask} 
        />
    );
};
