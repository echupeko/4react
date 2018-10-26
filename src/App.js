import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {

    state = {
        descriptionInput: 'Input your task',
        todoList: [],
        visibleForm: 'hidden'
    };

    handleButton = () =>{
        const list = this.state.todoList;
        list.push({setName: this.state.descriptionInput, setUser: this.state.descriptionInput + 'lalala'});
        this.setState({todoList: list});
        console.log('todo added: ', this.state.todoList[list.length-1].setName);
        //this.setState({visibleForm: /*(this.visibleForm === 'visible')? 'hidden' :*/ 'hidden'});
    };

    changeDescriptionHandle = (event) => {
        this.setState({descriptionInput: event.value})
    };

    getArray = () => {
        var todoArray = this.state.todoList;
        return(todoArray)
    }

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
                <Form Visite={this.visibleForm}/>
                <Header
                    handleButtonClick={this.handleButton}
                    valueInput={this.state.descriptionInput}
                    changeDescriptionHandle={this.changeDescriptionHandle}
                    />
                <Body todo={this.state.todoList} visibles={this.visibleForm}/>

            </div>
        );
    }
}

export default App;
