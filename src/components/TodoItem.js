import React from 'react';


class TodoItem extends React.Component {

    state={
        name: 'Название',
        dateCreate: new Date().toLocaleTimeString(),
        user: 'Ответственный'
    }



    render() {
        return (
            <div>
                <div onChange={this.props.titleChangeHandle}>{this.props.setName}</div>
                <div>{this.state.dateCreate}</div>
                <div>{this.props.setUser}</div>
                <button onClick={this.props.deleteItem(this.props.index)}>Delete</button>
            </div>

        )

    }
}


export default TodoItem;