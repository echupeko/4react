import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends React.Component {

    state = {
        descriptionInput: 'Input your task'
    }

    handleButton = (event) =>{
        this.setState({descriptionInput: 'New task'})
    };

    changeDescriptionHandle = (event) => {

        const descr = this.state.descriptionInput;
        descr.description = event.value;
        this.setState({descriptionInput: descr})

    };

    render() {
        return (
            <div className="App">
                <Header handleButtonClick={this.handleButton} valueInput={this.state.descriptionInput} changeDescriptionHandle={this.changeDescriptionHandle}/>
                <Body/>
            </div>
        );
    }
}

export default App;
