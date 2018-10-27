import React from 'react';
import '../style/Header.css';

var check=0;
class Header extends React.Component{

    state={
        description: 'Input your task',
        colorInput: '#a2a2a2'
    }

    handleClick = (event) => {
        check=1;
        check? event.target.value="" : console.log('ok');
    }

    valueChange = (event) => {

        const value = event.target.value;
        this.setState({colorInput: 'black'})
        this.props.changeFilter({value})
    };

    render() {
        return (
            <div className="Header">
                <div className="Title">
                    <b>Мои задачи</b>
                </div>
                <div className="controlFrame">
                    <input style={{color: this.state.colorInput}} onClick={this.handleClick} className="searchInput" onChange={this.valueChange} value={this.props.valueInput}></input>
                    <button className="addTask" onClick={this.props.handleButtonClick}><span>+ Добавить задачу</span></button>
                </div>
          </div>
        )
    }
}

export default Header