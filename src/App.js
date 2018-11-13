import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {

    state = {
        importance: ['Все', 'Обычная', 'Важная', 'Очень важная'],
        visibleForm: 'hidden',
        titleTask: '',
        descriptionTask: '',
        importanceTask: '',
        dateDeadline: new Date(),
        dateCompleted: new Date(),
        todoList: []
    };

    addTask = (value) => (event) => {
        this.setState({todoList: value});
        console.log(event.target.value);
        this.setState({visibleForm: 'hidden'});
    }

    addClick = () => {
        this.setState({visibleForm: (this.state.visibleForm==='hidden')? 'visible' : 'hidden'})
    }

    render() {

        return (
            <div className="App">
                <Form
                    importance = {this.state.importance}
                    visibleForm={this.state.visibleForm}
                    addTask={this.addTask}
                    />
                <Header
                    addClick={this.addClick}
                   />
                <Body
                    todoList={this.state.todoList}
                    />

            </div>
        );
    }
}

export default App;
