import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';


class App extends React.Component {


    handleButton = () =>{
        this.setState({descriptionInput: this.changeDescriptionHandle});
        console.log('description = ', this.state.descriptionInput);

    };

    changeDescriptionHandle = (event) => {
        this.setState({descriptionInput: event.value})
    };



    render() {

        return (
            <div className="App">
                <Header
                    handleButtonClick={this.handleButton}
                    //valueInput={this.state.descriptionInput}
                    changeDescriptionHandle={this.changeDescriptionHandle}
                    />
                <Body/>

            </div>
        );
    }
}

export default App;
