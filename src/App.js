import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

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
        return (
            <div className="App">
                <Header
                    handleButtonClick={this.handleButton}
                    //valueInput={this.state.descriptionInput}
                    changeDescriptionHandle={this.changeDescriptionHandle}
                    />
                <Body todoArray={this.state.todoList}/>

            </div>
        );
    }
}

export default App;
