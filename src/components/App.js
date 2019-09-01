// starter imports
import React, { useContext, useReducer } from 'react';
import { hot } from 'react-hot-loader/root';
import TodosContext from './context';
import todosReducer from './reducer';

// components
import Header from './Header';
import Form from './Form';
import List from './List';

export default hot(() => {
    const AppContext = useContext(TodosContext);
    const [state, dispatch] = useReducer(todosReducer, AppContext);

    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Header /> 
                <Form />
                <List />
            </div>
        </TodosContext.Provider>
    );
});