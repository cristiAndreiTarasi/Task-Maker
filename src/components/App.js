// starter imports
import React from 'react';
import { hot } from 'react-hot-loader/root';
import tasksContext from './context';

// components
import Header from './Header';
import Form from './Form';
import SortableList from './SortableList';

export default hot(() => {
    return (
        <div className="App">
            <Header />
            <Form currentTask={tasksContext.currentTask} />
            <SortableList state={tasksContext.tasks} />
        </div>
    );
});
