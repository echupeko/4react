import React from 'react';
import '../style/Form.css';

class Form extends React.Component {

    state = {
        visibleFormes: 'hidden',
        importance: this.props.importanceList
    };

    titleChange = (event) => {
        const value = event.target.value;
        this.props.changeTitleTask({value});
    };

    descriptionChange = (event) => {
        const value = event.target.value;
        this.props.changeDescriptionTask({value});
    };

    imoprtanceChange = (event) => {
        const value = event.target.value;
        this.props.changeImoprtanceTask({value});
    }

    dateChange = (event) => {
        const value = event.target.value;
        this.props.changeDateTask({value});
    }

    render() {
        const {importance} = this.state;
        return (
            <div className="mainForm"
                 style={{visibility: this.props.getVisible, border: 'solid 1px #4b4b4b', position: 'absolute'}}>
                <p>Введите название</p>
                <input onChange={this.titleChange} value={this.props.titleTask}></input>
                <p>Введите описание</p>
                <input onChange={this.descriptionChange} value={this.props.descriptionTask}></input>
                <p>Выберите важность</p>
                <select  onChange={this.imoprtanceChange}>
                    {importance.map((element, index) =>
                        <option value={element} key={index}>{element}</option>
                    )}
                </select>
                <p>Выберите крайний срок выполнения</p>
                <input onChange={this.dateChange} type='date'></input>
                <p>Дата выполнения</p>
                <input onChange={this.dateChange} type='date'></input>
                <button className="add" onClick={this.props.addButtonClick}><span>Добавить в список</span></button>
                <button><span>Удалить задачу</span></button>
                <button><span>Выполнена</span></button>
            </div>
        )
    }
}

export default Form