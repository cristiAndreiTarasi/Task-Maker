// starter imports
import React, { useReducer } from 'react';
import { hot } from 'react-hot-loader/root';
import tasksReducer from './reducer';
import tasksContext from './context';

// components
import Header from './Header';
import Form from './Form';
import SortableList from './SortableList';

export default hot(() => {
    const [state, dispatch] = useReducer(tasksReducer, tasksContext);

    return (
        <div className="App">
            <Header />
            <Form  
                state={state}
                dispatch={dispatch}
            />
            <SortableList   
                state={state}
                dispatch={dispatch}
            />
        </div>
    );
});
