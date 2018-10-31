import React from 'react';

import '../style/Body.css';
import TodoItem from "./TodoItem";

class Body extends React.Component {

    state = {

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
                    <div className="check"></div>
                    <div className="title" style={{display: 'flex', flexDirection: 'column'}}>Название</div>
                    <div className="description" style={{display: 'flex', flexDirection: 'column'}}>Описание
                    </div>
                    <div className="importance" style={{display: 'flex', flexDirection: 'column'}}>Важность</div>
                    <div className="date" style={{display: 'flex', flexDirection: 'column'}}>Срок сдачи</div>
                    <div className="date" style={{display: 'flex', flexDirection: 'column'}}>Дата выполнения</div>
                </div>
                {todoList.map((element, index) =>
                    <TodoItem
                        checkTaskProps={element.checkTask}
                        titleTaskProps={element.titleTask}
                        descriptionTaskProps={element.descriptionTask}
                        importanceTaskProps={element.importanceTask}
                        dateDeadline={element.dateDeadline}
                        dateCompleted={element.dateCompleted}
                        index={index}
                        key={index}/>)}

            </div>
        )
    }

}

export default Body