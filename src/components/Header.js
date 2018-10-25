import React from 'react';
import '../style/Header.css';


class Header extends React.Component{
    state={
        description: 'Input your task',
        disabled: true,
        backgrnd: 'white'
    }
    render() {
        return (
            <div className="Header">
                <div className="Title">
                    <b>Мои задачи</b>
                </div>
                <input></input>
                <button><span>+ Добавить задачу</span></button>
            </div>
        )
    }


}

export default Header