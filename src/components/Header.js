import React from 'react';
import '../style/Header.css';

var check = 0;

class Header extends React.Component {

    state = {
        fontColorSearchBar: '#a2a2a2'
    }

    handleClick = (event) => {
        check = 1;
        check ? event.target.value = "" : console.log('ok');
    }

    valueChange = (event) => {
        const value = event.target.value;
        this.setState({fontColorSearchBar: 'black'})
        this.props.changeFilter({value})
    };

    render() {
        return (
            <div className="Header">
                <div className="Title">
                    <b>Мои задачи</b>
                </div>
                <div className="Control-Panel">
                    <input className="Search-bar" style={{color: this.state.fontColorSearchBar}}
                           onClick={this.handleClick} onChange={this.valueChange} value={this.props.valueInput}></input>
                    <button className="Open-form" onClick={this.props.handleButtonClick}>
                        <span>Добавить задачу</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header