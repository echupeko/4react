import React from 'react';
import '../style/Form.css';

class Form extends React.Component {

    state = {
        importance: this.props.importance,
        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date(),
        todoItem: []
    };

    pushItem = () => {
        const list = this.state.todoItem;
        list.push({
            titleTask: this.state.titleTask,
            descriptionTask: this.state.descriptionTask,
            importanceTask: this.state.importanceTask,
            dateDeadline: this.state.dateDeadline.toLocaleDateString('ru-RU'),
            dateCompleted: this.state.dateCompleted.toLocaleDateString('ru-RU')
        });
        this.setState({todoItem: list});
        this.props.addTask(this.state.todoItem);
    }

    render() {

        return (

            <div className="main-form"
                 style={{visibility: this.props.visibleForm, border: 'solid 1px #4b4b4b', position: 'absolute'}}>
                <p>Введите название</p>
                <input onChange={(event) => this.setState({titleTask: event.target.value})}
                       value={this.state.titleTask}></input>
                <p>Введите описание</p>
                <input onChange={(event) => this.setState({descriptionTask: event.target.value})}
                       value={this.state.descriptionTask}></input>
                <p>Выберите важность</p>
                <select>
                    {this.state.importance.map((element, index) =>
                        <option
                            value={this.state.importanceTask}
                            key={index}>
                            {element}
                        </option>
                    )}
                </select>
                <p>Выберите крайний срок выполнения</p>
                <input type='date' onChange={(event) => this.setState({dateDeadline: event.target.value})}
                       value={this.state.dateDeadline}></input>
                <p>Дата выполнения</p>
                <input type='date' onChange={(event) => this.setState({dateCompleted: event.target.value})}
                       value={this.state.dateCompleted}></input>
                <button onClick={this.pushItem}><span>Добавить в список</span></button>
                <button><span>Удалить задачу</span></button>
                <button><span>Выполнена</span></button>
            </div>
        )
    }
}

export default Form