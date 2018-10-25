import React from 'react';

class TodoItem extends React.Component {

    state={
        name: 'Название',
        dateCreate: new Date().toLocaleTimeString(),
        user: 'Ответственный'
    }

    render() {
        return (
            <div onChange={this.props.titleChangeHandle}>
                <div >{this.props.setName}</div>
                <div>{this.state.dateCreate}</div>
                <div>{this.props.setUser}</div>
            </div>
        )
    }
}


export default TodoItem;