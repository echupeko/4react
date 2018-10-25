import React from 'react';
import '../style/Header.css';


class Header extends React.Component{
    state={
        description: 'Input your task',
        disabled: true,
        backgrnd: 'white'
    }

    valueChange = (event) => {
        const value = event.target.value;
        
        this.props.changeDescriptionHandle({value, index: this.props.index})
    };

    render() {
        const {handleButtonClick, valueInput} =this.props;

        return (
            <div className="Header">
                <div className="Title">
                    <b>Мои задачи</b>
                </div>
                <input onChange={this.valueChange} value={valueInput}></input>
                <button onClick={handleButtonClick}><span>+ Добавить задачу</span></button>
            </div>
        )
    }


}

export default Header