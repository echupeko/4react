import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import TodoItem from "./components/TodoItem";

class App extends React.Component {

    state = {
        descriptionInput: 'Input your task',
        todoList: []
    };

    handleButton = () =>{
        this.setState({descriptionInput: this.changeDescriptionHandle});
        console.log('description = ', this.state.descriptionInput);
        const list = this.state.todoList;
        list.push({setName: 'todo Title', setUser: 'lalala'});

        this.setState({todoList: list})
    };

    changeDescriptionHandle = (event) => {
        this.setState({descriptionInput: event.value})
    };

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
        const {descriptionInput, todoList} = this.state;
        return (
            <div className="App">
                <Header
                    handleButtonClick={this.handleButton}
                    valueInput={this.state.descriptionInput}
                    changeDescriptionHandle={this.changeDescriptionHandle}
                    />
                <Body/>
                {todoList.map((element,index) =>
                    <TodoItem
                        titleChangeHandle={this.titleChangeHandle}
                        setName={descriptionInput}
                        deleteItem={this.deleteItems(index)}
                        setUser={descriptionInput}
                        index={index}
                        key={index}/>)}
            </div>
        );
    }
}

export default App;
