import React from 'react';
import '../style/Header.css';


class Header extends React.Component {

    state = {

    }


    render() {
        return (
            <div className="Header">
                <div className="Title">
                    <b>Мои задачи</b>
                </div>
                <div className="Control-Panel">
                    <input className="Search-bar"
                          ></input>
                    <button className="Open-form" onClick={this.props.addClick}>
                        <span>Добавить задачу</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Header