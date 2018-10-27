import React from 'react';
import '../style/Form.css';

class Header extends React.Component {

    state = {
        visibleFormes: 'hidden'
    };

    nameChange = (event) => {
        const value = event.target.value;
        this.props.changeNameTask({value});
    };

    responsibleChange = (event) => {
        const value = event.target.value;
        this.props.changeResponsible({value});
    };
    descriptionChange = (event) => {
        const value = event.target.value;
        this.props.changeDesription({value});
    };


    render() {
        return (
            <div className="mainForm"
                 style={{visibility: this.props.getVisible, border: 'solid 1px #4b4b4b', position: 'absolute'}}>
                <p>Введите название</p>
                <input onChange={this.nameChange} value={this.props.nameTask}></input>
                <p>Введите ответственного</p>
                <input onChange={this.responsibleChange} value={this.props.responsible}></input>
                <p>Введите описание</p>
                <input onChange={this.descriptionChange} value={this.props.descriptionTask}></input>
                <button className="add" onClick={this.props.addButtonClick}><span>Добавить в список</span></button>
            </div>
        )
    }
}

export default Header