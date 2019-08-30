// starter imports
import React from 'react';
import { hot } from 'react-hot-loader/root';

// components

export default hot(() => (
    <div className="App">
        <div className="App header">
            <h1 className="App_heading center">Task Maker</h1>
        </div>

        <div className="App_form">
            <input type="text" className="App_input" placeholder="Type Task" />
            <button className="App_form_button">Submit</button>
        </div>

        <ul className="App_list">
            <li className="App_list_item">
                <p className="App_copy">dfvmdfv</p>
                <i class="fas fa-ellipsis-h"></i>
            </li>
        </ul>
    </div>
));