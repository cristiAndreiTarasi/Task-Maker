// starter imports
import React from 'react';
import { hot } from 'react-hot-loader/root';

// components
import Header from './Header';
import Form from './Form';
import List from './List';

export default hot(() => (
    <div className="App">
        <Header /> 
        <Form />
        <List />
    </div>
));