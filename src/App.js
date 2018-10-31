import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {

    state = {
        importance: ['Все', 'Обычная', 'Важная', 'Очень важная'],
        descriptionInput: 'Введите название задачи',
        todoList: [],
        visibleForm: 'hidden',
        checkTask: '',
        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date()
    };

    handleButton = () => {

        this.setState({visibleForm: (this.state.visibleForm === 'visible') ? 'hidden' : 'visible'});
    };

    addTask = () => {
        const list = this.state.todoList;
        list.push({
            titleTask: this.state.titleTask,
            descriptionTask: this.state.descriptionTask,
            importanceTask: this.state.importanceTask,
            dateDeadline: this.state.dateDeadline,
            dateCompleted: this.state.dateCompleted
        });
        this.setState({todoList: list});
        //console.log('todo added: ', this.state.todoList[list.length - 1].setName);
        this.setState({visibleForm: 'hidden'});
    }

    changeFilterHandle = (event) => {
        this.setState({descriptionInput: event.value})
    };

    changeTitleTaskHandle = (event) => {
        this.setState({titleTask: event.value})
    };

    changeImoprtanceTaskHandle = (event) => {
        this.setState({importanceTask: event.value})
    };

    changeDescriptionTaskHandle = (event) => {
        this.setState({descriptionTask: event.value})
    };

    changeDateTaskHandle = (event) => {
        this.setState({descriptionTask: event.value})
    };

    getArray = () => {
        var todoArray = this.state.todoList;
        return (todoArray)
    }

    deleteItems = (index) => {
        console.log('delete: ', index)
    }


    render() {

        return (
            <div className="App">
                <Form
                    importanceList={this.state.importance}
                    getVisible={this.state.visibleForm}
                    titleTask={this.state.titleTask}
                    descriptionTask={this.state.descriptionTask}
                    importanceTask={this.state.importanceTask}
                    dateDeadline={this.state.dateDeadline}
                    dateCompleted={this.state.dateCompleted}
                    changeImoprtanceTask={this.changeImoprtanceTaskHandle}
                    changeTitleTask={this.changeTitleTaskHandle}
                    changeDescriptionTask={this.changeDescriptionTaskHandle}
                    changeDateTask={this.changeDateTaskHandle}
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
