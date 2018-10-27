import React from 'react';

class TodoItem extends React.Component {

    state = {
        name: 'Название',
        dateCreate: new Date().toLocaleTimeString(),
        user: 'Ответственный'
    }

    render() {
        return (
            <div style={{display: 'flex'}} onChange={this.props.titleChangeHandle}>

                <div className="name" style={{display: 'flex', flexDirection: 'column'}}>{this.props.setName}</div>
                <div className="datecreate"
                     style={{display: 'flex', flexDirection: 'column'}}>{this.state.dateCreate}</div>
                <div className="user" style={{display: 'flex', flexDirection: 'column'}}>{this.props.setUser}</div>
            </div>
        )

    }
}

export default TodoItem;