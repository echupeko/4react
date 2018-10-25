import React from 'react';
import Form from './Form';
import '../style/Body.css';
import TodoItem from "./TodoItem";

class Header extends React.Component{

    state = {
        descriptionInput: 'Input your task',
        todoList: []
    };


    const list = this.state.todoList;
    list.push({setName: 'todo Title', setUser: 'lalala'});

    this.setState({todoList: list})

    deleteItems = (index) =>{
        console.log('delete: ', index)
    }

    titleChangeHandle = (index) => (event) => {
        console.log('eevent2', event);
        const list = this.state.todoList;
        list[index].setName = event.target.value;
        this.setState({todoList: list})
    };

    render() {
        const {todoList} = this.state;
        return (
            <div className="Body">
                <Form/>
                {todoList.map((element,index) =>
                    <TodoItem
                        titleChangeHandle={this.titleChangeHandle}
                        setName={element.setName}
                        deleteItem={this.deleteItems(index)}
                        setUser={element.setUser}
                        index={index}
                        key={index}/>)}

            </div>
        )
    }
}

export default Header