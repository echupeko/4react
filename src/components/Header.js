import React from 'react';
import '../style/Header.css';


class Header extends React.Component{
    render() {
        return (
            <div className="Header">
                <div className="Title">
                    Мои задачи
                </div>
                <input></input>
                <button><span>+ Добавить задачу</span></button>
            </div>
        )
    }
}

export default Header