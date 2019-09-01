import React from 'react';
import Menu from './Menu';

export default () => (
    <ul className="App_list">
        <li className="App_list_item">
            <div className="main">
                <p className="App_copy">dfvmdfv</p>
                <ul className="menu">
                    <li className="menu-item"><i className="fas fa-edit"></i></li>
                    <li className="menu-item"><i className="fas fa-trash"></i></li>
                    <li className="menu-item"><i className="fas fa-thumbtack rotate-left"></i></li>
                    <li className="menu-item"><i className="fas fa-sticky-note"></i></li>
                </ul>
            </div>

            <div className="status">
                <p>created on 12/04/1908</p>
            </div>

            <div className="divider">
                <div className="dark"></div>
                <div className="light"></div>
            </div>
        </li>

    </ul>
);
