// starter imports
import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import tasksContext from './context';

// components
import Header from './Header';
import Form from './Form';
import SortableList from './SortableList';

function App () {
    const [state, setState] = useState(tasksContext);

    return (
        <div className="App">
            <Header />
            <Form
                state={state}
                setState={setState}
            />
            <SortableList state={state} />
        </div>
    );
};

export default hot(App);
