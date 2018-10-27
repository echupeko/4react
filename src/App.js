import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {

    state = {
        descriptionInput: 'Введите название задачи',
        todoList: [],
        visibleForm: 'hidden',
        nameTasks: 'name task',
        responsibles: 'responsible',
        descriptionTasks: 'description'
    };

    handleButton = () => {

        this.setState({visibleForm: (this.state.visibleForm === 'visible') ? 'hidden' : 'visible'});
    };

    addTask = () => {
        const list = this.state.todoList;
        list.push({setName: this.state.nameTasks, setUser: this.state.responsibles});
        this.setState({todoList: list});
        console.log('todo added: ', this.state.todoList[list.length - 1].setName);
        this.setState({visibleForm: 'hidden'});
    }

    changeFilterHandle = (event) => {
        this.setState({descriptionInput: event.value})
    };

    changeNameTaskHandle = (event) => {
        this.setState({nameTasks: event.value})
    };

    changeResposibleHandle = (event) => {
        this.setState({responsibles: event.value})
    };

    changeDescriptionHandle = (event) => {
        this.setState({descriptionTasks: event.value})
    };

    getArray = () => {
        var todoArray = this.state.todoList;
        return (todoArray)
    }

    deleteItems = (index) => {
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
                <Form
                    getVisible={this.state.visibleForm}
                    nameTask={this.state.nameTasks}
                    responsible={this.state.responsibles}
                    descriptionTask={this.state.descriptionTasks}
                    changeNameTask={this.changeNameTaskHandle}
                    changeResponsible={this.changeResposibleHandle}
                    changeDesription={this.changeDescriptionHandle}
                    addButtonClick={this.addTask}/>
                <Header
                    handleButtonClick={this.handleButton}
                    valueInput={this.state.descriptionInput}
                    changeFilter={this.changeFilterHandle}/>
                <Body todo={this.state.todoList}/>

            </div>
        );
    }
}


/*

                    c*/
export default App;
