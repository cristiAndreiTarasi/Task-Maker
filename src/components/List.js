import React, { useContext } from 'react';
import todosContext from './context';

export default () => { 
    const { state, dispatch } = useContext(todosContext); 

    return (
        <ul className="App_list">
            {state.todos.map(todo => (
                <li className="App_list_item" key={todo.id}>
                    <div className="main">
                        <p className="App_copy">{todo.task}</p>
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
            ))}
        </ul>
    );
}