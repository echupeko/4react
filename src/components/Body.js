import React from 'react';

import '../style/Body.css';
import TodoItem from "./TodoItem";

class Body extends React.Component{

    state = {
        todoList: this.props.todo
    };

    deleteItems = (index) =>{
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

export default Body