import React from 'react';
import '../style/Header.css';

class Header extends React.Component{

    state={
        description: 'Input your task',
    }

    valueChange = (event) => {
        const value = event.target.value;
        this.props.changeFilter({value})
    };

    render() {
        return (
            <div className="Header">
                <div className="Title">
                    <b>Мои задачи</b>
                </div>
                <input className="searchInput" onChange={this.valueChange} value={this.props.valueInput}></input>
                <button className="addTask" onClick={this.props.handleButtonClick}><span>+ Добавить задачу</span></button>
            </div>
        )
    }
}

export default Header