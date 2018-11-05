import React from 'react';
import '../style/Form.css';

class Form extends React.Component {

    state = {
        importance: this.props.importance,
        titleTask: '',
        descriptionTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date()
    };

    change = (event, states) => {
        this.setState({states: event.target.value});
    }


    render() {
        const {importance}=this.state;
        return (
            <div className="main-form"
                 style={{visibility: this.props.visibleForm ,border: 'solid 1px #4b4b4b', position: 'absolute'}} >
                <p>Введите название</p>
                <input onChange={(event)=>this.change(event, this.state.titleTask)} value={this.state.titleTask}></input>
                <p>Введите описание</p>
                <input value={this.state.descriptionTask}></input>
                <p>Выберите важность</p>
                <select>
                    {importance.map((element, index) =>
                        <option
                            value={element}
                            key={index}>
                            {element}
                        </option>
                    )}
                </select>
                <p>Выберите крайний срок выполнения</p>
                <input type='date' value={this.state.dateDeadline}></input>
                <p>Дата выполнения</p>
                <input type='date' value={this.state.dateCompleted}></input>
                <button onClick={this.props.addTask}><span>Добавить в список</span></button>
                <button><span>Удалить задачу</span></button>
                <button><span>Выполнена</span></button>
            </div>
        )
    }
}

export default Form