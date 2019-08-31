import React from 'react';
import Menu from './Menu';

export default () => (
    <ul className="App_list">
        <li className="App_list_item">
            <div className="main">
                <p className="App_copy">dfvmdfv</p>
                <i className="fas fa-ellipsis-h dots"></i>
                <Menu />
            </div>

            <div className="divider">
                <div className="dark"></div>
                <div className="light"></div>
            </div>
        </li>

    </ul>
);
