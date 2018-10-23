import React from 'react';
import './App.css';
import Button from './components/Button';
import TodoItem from './components/TodoItem';


class App extends React.Component {

    state = {
        showDescription: false,
        todoList: []
    };


    deleteTodo = (index) => (event) => {
        console.log('del event', event);
        console.log('del index', index);
        const list = this.state.todoList;
        list.splice(index, 1);
        this.setState({todoList: list})

    };


    handleClick = (event) => {
        console.log('todolist', this.state.todoList);
        const list = this.state.todoList;
        list.push({title: 'todo Title', description: 'lalalalend'});
        // this.setState({showDescription: !this.state.showDescription})

        this.setState({todoList: list})
    };

    titleChangeHandle = (index) => (event) => {
        console.log('eevent2', event);
        const list = this.state.todoList;
        list[index].title = event.target.value;
        this.setState({todoList: list})
    };


    changeDescriptionHandle = (event) => {

        const list = this.state.todoList;
        list[event.index].description = event.value;
        this.setState({todoList: list})
    };

    render() {
        const {showDescription, todoList} = this.state;
        console.log('todo', todoList);
        return (
            <div className="App">
                <Button handleButtonClick={this.handleClick} description={showDescription ? 'Well done' : ''}/>
                {todoList.map((element, index) =>
                    <TodoItem
                        index={index}
                        titleChangeHandle={this.titleChangeHandle}
                        changeDescriptionHandle={this.changeDescriptionHandle}
                        deleteTodo={this.deleteTodo}
                        title={element.title}
                        description={element.description}
                        key={index}/>)}
            </div>
        );
    }
}

export default App;
