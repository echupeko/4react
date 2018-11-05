import React from 'react';

import '../style/Body.css';
import TodoItem from "./TodoItem";

class Body extends React.Component {

    state = {
        todoList: this.props.todoList
    };

    render() {
        const {todoList}=this.state;
        return (
            <div className="list-frame">
                <button>Удалить</button>
                <div className="title-list-frame">
                    <div className="check-list"></div>
                    <div className="title-list">Название</div>
                    <div className="description-list">Описание
                    </div>
                    <div className="importance-list">Важность</div>
                    <div className="date-deadline-list">Срок сдачи</div>
                    <div className="date-completed-list">Дата выполнения</div>
                </div>
                {todoList.map((element, index)=>

                    <TodoItem
                        titleTask={element.titleTask}
                    descriptionTask={element.descriptionTask}
                    importanceTask={element.importanceTask}
                    dateDeadline={element.dateDeadline}
                    dateCompleted={element.dateCompleted}
                        key={index}
                    />)}


            </div>
        )
    }

}

export default Body