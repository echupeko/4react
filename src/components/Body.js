import React from 'react';

import '../style/Body.css';
import TodoItem from "./TodoItem";

class Body extends React.Component {

    state = {
        importance: ['Все','Обычная','Важная','Очень важная'],
        todoList: this.props.todo
    };

    deleteItems = (index) => {
        console.log('delete: ', index)
    }

    titleChangeHandle = (index) => (event) => {
        console.log('eevent2', event);
        const list = this.getArray;
        list[index].setName = event.target.value;
        this.setState({todoList: list})
    };

    render() {
        const {todoList} = this.state;
        return (
            <div className="Body">

                <div style={{display: 'flex'}}>
                    <div className="name" style={{display: 'flex', flexDirection: 'column'}}>Название</div>
                    <div className="datecreate" style={{display: 'flex', flexDirection: 'column'}}>Дата создания
                    </div>
                    <div className="user" style={{display: 'flex', flexDirection: 'column'}}>Ответственный</div>
                </div>
                {todoList.map((element, index) =>
                    <TodoItem
                        checkTaskProps={element.checkTaskProps}
                        titleTaskProps={element.titleTaskProps}
                        descriptionTasksProps={element.descriptionTasksProps}
                        importanceTaskProps={element.importanceTaskProps}
                        dateDeadlineProps={element.dateDeadlineProps}
                        dateCompletedProps={element.dateCompletedProps}
                        index={index}
                        key={index}/>)}

            </div>
        )
    }

}

export default Body