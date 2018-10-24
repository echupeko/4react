import React from 'react';


class TodoItem extends React.Component {

    state = {
        disabled: true
    };

   /* enabledInputs = () => {
        this.setState({disabled: !this.state.disabled})
    };*/

    /*inputHandle = (event) => {
        const value = event.target.value;

        console.log('value', value);

        this.props.titleChangeHandle({value, index: this.props.index})
    };*/

    /*DescriptionHandle = (event) => {
        const value = event.target.value;

        this.props.changeDescriptionHandle({value, index: this.props.index})
    };*/

    render() {
        const {disabled} = this.state;
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>
                    <div>
                        {/*<input onChange={this.props.titleChangeHandle(this.props.index)} value={this.props.title} disabled={disabled}/>
                        <input onChange={this.DescriptionHandle} value={this.props.description} disabled={disabled}/>*/}
                    </div>
                    <div>
                        {/*<button onClick={this.enabledInputs}>edit</button>
                        <button onClick={this.props.deleteTodo(this.props.index)}>Delete</button>*/}
                    </div>
                </div>


            </div>

        )

    }
}


export default TodoItem;